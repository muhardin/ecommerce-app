"use client";
import Image from "next/image";
import GoogleSignInButton from "./GoogleSignInButton";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast"; //https://react-hot-toast.com/docs/toast
import { SessionProvider } from "next-auth/react";
import { getServerSession } from "next-auth";
import React, { useRef } from "react";
import {
  IoLogoGoogle,
  IoLogoGithub,
  IoIosEye,
  IoIosEyeOff,
} from "react-icons/io";
import { useRouter } from "next/navigation";
import { useShopData } from "./shop/ShopContext";

const FormLoginT = () => {
  const router = useRouter();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    toast.loading("Loading", {
      position: "top-center",
    });
    e.preventDefault();
    const email = e.currentTarget.email.value;
    const password = e.currentTarget.password.value;
    try {
      const signInData = await signIn("credentials", {
        redirect: false,
        email,
        password,
        callbackUrl: "/",
      });
      // console.log(signInData);
      if (signInData?.error) {
        toast.dismiss();
        toast.error("Login failed!", {
          position: "top-center",
        });
      } else {
        toast.dismiss();
        toast.success("Login successful!", {
          position: "top-center",
        });
        router.push("/");
      }
      // Redirect or handle the login result as needed
    } catch (error) {
      toast.error("Login failed!", {
        position: "top-center",
      });
    }
  };
  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const shopData = useShopData();

  return (
    <div className=" flex items-center justify-center">
      <div className="max-w-md bg-white p-6 rounded shadow-lg flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">Login</h2>
        </div>
        <div className="mt-4 mb-4 w-24 h-24">
          {shopData?.logo ? (
            <Image
              src={`${process.env.SERVER_ENDPOINT}/storage/logo/${shopData.logo}`}
              alt="Login Background"
              width={600}
              height={500}
              className="w-full max-h-40 object-cover"
            />
          ) : (
            <Image
              src="/images/login.jpg"
              alt="Login Background"
              width={600}
              height={500}
              className="w-full max-h-40 object-cover"
            />
          )}
        </div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-600 font-medium">
              Email
            </label>
            <input
              required
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
            />
          </div>

          <div className="flex flex-col my-4">
            <label className="text-gray-700">Password</label>
            <div className="relative flex items-center mt-2">
              <input
                name="password"
                id="password"
                className="flex-1 p-2 pr-10 border border-gray-300 focus:outline-none focus:ring-0 focus:border-gray-300 rounded text-sm bg-white text-gray-900"
                placeholder="Enter your password"
                type={passwordShown ? "text" : "password"}
              />
              <button
                onClick={togglePassword}
                type="button"
                className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                {passwordShown ? <IoIosEye /> : <IoIosEyeOff />}
              </button>
            </div>
          </div>

          {/* <div className="mb-4">
            <label
              htmlFor="password"
              className="block text-gray-600 font-medium"
            >
              Password
            </label>
            <div className=" flex  items-center w-full group">
              <input
                required
                type={passwordShown ? "text" : "password"}
                id="password"
                name="password"
                className="w-full mt-2 p-2 border rounded-md focus:outline-none focus:border-blue-500"
              />
              <span onClick={togglePassword}>
                {passwordShown ? <IoIosEye /> : <IoIosEyeOff />}
              </span>
            </div>
          </div> */}
          <div className="text-center">
            <button
              type="submit"
              className=" bg-darkText hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
              Login
            </button>
          </div>
        </form>
        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          or
        </div>
        <div className="flex items-center justify-center gap-x-8">
          <div
            onClick={() =>
              signIn("github", {
                callbackUrl: "/",
              })
            }
            className="flex">
            <IoLogoGithub className="mr-2 h-6 w-4" />
            <button>Sign In With Github</button>
          </div>
          <div
            onClick={() =>
              signIn("google", {
                callbackUrl: "/",
              })
            }
            className="flex">
            <IoLogoGoogle className="mr-2 h-6 w-4" />
            <button>Sign In With Google</button>
          </div>
        </div>
        <p className="mt-2">
          If you don&apos;t have account, please&nbsp;
          <Link className="text-blue-500 hover:underline" href="/sign-up">
            Sign Up
          </Link>
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default FormLoginT;
