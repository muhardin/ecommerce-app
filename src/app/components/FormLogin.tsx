"use client";
import { signIn } from "next-auth/react";
import React, { useRef } from "react";
import TextBox from "./elements/TextBox";
import Button from "./elements/Button";
import toast from "react-hot-toast";
import Image from "next/image";

const LoginPage = () => {
  const userName = useRef("");
  const pass = useRef("");
  toast.dismiss();
  const onSubmit = async () => {
    const result = await signIn("credentials", {
      email: userName.current,
      password: pass.current,
      redirect: false,
      // callbackUrl: "/",
    });
    // console.log(result);
  };
  return (
    <div className="">
      <section className="font-poppins flex ">
        <div className="max-w-6xl px-1 mx-auto lg:px-6 ">
          <div className="flex flex-col items-center h-full justify-center md:flex-row">
            <div className="flex flex-wrap items-center  bg-gray-100 shadow-lg dark:bg-gray-900 my-7 ">
              <div className="relative hidden w-full mb-12 lg:block lg:w-2/4 lg:mb-0">
                <div className="absolute inset-0 z-10 bg-gray-700 opacity-50">
                  {" "}
                </div>
                <Image
                  width={250}
                  height={250}
                  src="https://i.postimg.cc/XJBZvxHp/first.jpg"
                  alt=""
                  className=" inset-0 object-cover w-full h-2/4"
                />
                <div className="absolute left-0 z-10 top-10 lg:top-40">
                  <div className="p-14">
                    <h2 className="text-4xl font-bold text-gray-300 lg:text-5xl ">
                      <span className="text-yellow-300">Hello! </span>welcome to
                      our community
                    </h2>
                    <p className="text-lg font-medium text-gray-300 py-7">
                      Make your dream comes true and achieve your success
                    </p>
                    <button
                      className="px-4 py-3 mt-4 font-semibold text-gray-700 bg-yellow-400 rounded-lg w-44 lg:w-80 hover:text-gray-600 "
                      type="submit"
                    >
                      Getting started
                    </button>
                  </div>
                </div>
              </div>

              <div className="w-full px-2 lg:px-4 lg:w-2/4 lg:mb-0 lg:py-0 py-7">
                <div className="px-6 text-left">
                  <h2 className="text-3xl font-semibold leading-tight text-gray-700 my-7 md:text-4xl pb-7 dark:text-gray-400 ">
                    Login to your account
                  </h2>
                  <form action="" className="mt-6">
                    <div>
                      <label
                        htmlFor=""
                        className="text-gray-700 dark:text-gray-300"
                      >
                        Email:
                      </label>
                      <input
                        type="email"
                        className="w-full px-4 py-3 mt-2 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800"
                        name=""
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="mt-6">
                      <div>
                        <label
                          htmlFor=""
                          className="pb-4 mb-2 text-gray-700 dark:text-gray-300"
                        >
                          Password:
                        </label>
                        <div className="relative flex items-center mt-2">
                          <input
                            type="password"
                            className="w-full px-4 py-3 bg-white rounded-lg dark:text-gray-100 dark:bg-gray-800 dark:border dark:border-gray-800 "
                            name=""
                            placeholder="Enter password"
                          />
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            // className="absolute right-0 mr-3 dark:text-gray-50"
                            fill="currentColor"
                            className="bi bi-eye-slash"
                            viewBox="0 0 16 16"
                          >
                            <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                            <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                            <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 text-right">
                      <a
                        href="#"
                        className="text-sm font-semibold text-blue-700 dark:text-blue-300 hover:underline"
                      >
                        Forgot password?
                      </a>
                    </div>
                    <button
                      className="w-full px-4 py-3 mt-4 font-semibold text-gray-700 bg-yellow-400 rounded-lg hover:text-blue-600 "
                      type="submit"
                    >
                      LOGIN
                    </button>
                    <p className="mt-8 text-gray-700 dark:text-gray-400">
                      Need an account?
                      <a
                        href="#"
                        className="font-semibold text-blue-400 hover:text-blue-600"
                      >
                        Create an account
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginPage;
