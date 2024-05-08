"use client";
import Image from "next/image";
import Link from "next/link";
import { signIn, useSession } from "next-auth/react";
import { useEffect, useState } from "react";
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
import { useShopData } from "@/app/components/shop/ShopContext";
import axios from "axios";
interface FormType {
  phone_number: string;
  code: string;
}
const ForgotPasswordComponent = () => {
  const router = useRouter();
  const [errPhone, setErrPhone] = useState(false);
  const [errCode, setErrCode] = useState(false);

  const handleSubmit = async () => {
    if (!formData.phone_number) {
      setErrPhone(true);
    } else if (!formData.code) {
      setErrCode(true);
    } else {
      toast.loading("Loading", {
        position: "top-center",
      });
      const post = await axios.post(
        process.env.SERVER_ENDPOINT + "/api/seller/get-password",
        { phone_number: formData.phone_number, code: formData.code }
      );
      //   console.log(post);
      //   console.log(post?.status);
      if (post?.status == 201) {
        toast.dismiss();
        toast.error(`${post.data?.message?.error[0]}`, {
          position: "top-center",
        });
      } else if (post?.status == 200) {
        toast.dismiss();
        toast.success("Password reset successfully!", {
          position: "top-center",
        });
        router.push("/sign-in");
      } else {
        toast.dismiss();
        toast.error(`${post.data?.message?.error[0]}`, {
          position: "top-center",
        });
        //   router.push("/");
      }
    }
  };
  const [passwordShown, setPasswordShown] = useState(false);
  // Password toggle handler
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  const shopData = useShopData();

  /** action handle code */
  const [formData, setFormData] = useState<FormType>({
    phone_number: "",
    code: "",
  });
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name == "phone_number") {
      setErrPhone(false);
    }
    if (e.target.name == "code") {
      setErrCode(false);
    }
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const [timer, setTimer] = useState(0); // Initial timer value in seconds
  const requestVerificationCode = async () => {
    if (!formData.phone_number) {
      setErrPhone(true);
    } else {
      toast.loading("Loading...");
      const post = await axios.post(
        process.env.SERVER_ENDPOINT + "/api/seller/get-forgot-code",
        { phone_number: formData.phone_number }
      );
      if (post.status == 200) {
        setTimer(120);
        toast.dismiss();
        toast.success("Success Send Code");
      } else if (post.status == 201) {
        toast.dismiss();
        toast.error(`${post.data.message.error[0]}`, { duration: 7000 });
      } else {
        toast.dismiss();
        toast.error("Invalid");
      }
    }
  };

  useEffect(() => {
    let countdown: NodeJS.Timeout;
    const startTimer = () => {
      countdown = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    };

    startTimer();
    return () => {
      clearInterval(countdown);
    };
  }, []);

  return (
    <div className=" flex items-center justify-center p-8">
      <div className=" w-96 bg-white p-6 rounded shadow-lg flex flex-col items-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800">
            Forgot Password
          </h2>
        </div>
        <div className="mt-2 mb-2 w-28 h-28">
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
          <div className="flex flex-col my-4 w-full">
            <label className="text-gray-700">Whatsapp Number</label>
            <div className="relative flex items-center mt-2">
              <input
                value={formData.phone_number}
                onChange={handleChange}
                name="phone_number"
                required
                type="text"
                className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                placeholder="Phone Number"
              />

              <div className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <button
                  disabled={timer > 0}
                  onClick={requestVerificationCode}
                  type="button"
                  className=" bg-darkText hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
                  {timer > 0 ? `Retry in ${timer}s` : "Get Code"}
                </button>
              </div>
            </div>
            {errPhone && (
              <label className="text-red-600 text-sm">Wajib untuk diisi</label>
            )}
          </div>
          <div className="flex flex-col my-4">
            <label className="text-gray-700">Verification Code</label>
            <div className="relative flex items-center mt-2">
              <input
                required
                value={formData.code}
                onChange={handleChange}
                type="text"
                className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                name="code"
                placeholder="Code"
              />

              <div className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="#000">
                  <path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37" />
                </svg>
              </div>
            </div>
            {errCode && (
              <label className="text-red-600 text-sm">Wajib untuk diisi</label>
            )}
          </div>

          <div className="text-center">
            <button
              onClick={() => {
                handleSubmit();
              }}
              type="button"
              className=" bg-darkText hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200">
              Send Password
            </button>
          </div>
        </form>
        <div className="mx-auto my-4 flex w-full items-center justify-evenly before:mr-4 before:block before:h-px before:flex-grow before:bg-stone-400 after:ml-4 after:block after:h-px after:flex-grow after:bg-stone-400">
          or
        </div>
        {/* <div className="flex items-center justify-center gap-x-8">
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
        </div> */}
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

export default ForgotPasswordComponent;
