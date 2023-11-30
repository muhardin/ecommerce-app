import { Icons } from "@/app/components/ui/Icons";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="mx-auto max-w-screen-2xl p-4 md:p-6 2xl:p-10">
      <div className="rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
        <div className="flex flex-wrap items-center">
          <div className="hidden w-full border-stroke dark:border-strokedark xl:block xl:w-1/2 xl:border-r-2">
            <div className="py-17.5 px-26 text-center">
              <a className="mb-5.5 inline-block" href="index.html">
                <Image
                  height={150}
                  width={150}
                  className="hidden dark:block"
                  src="src/images/logo/logo.svg"
                  alt="Logo"
                />
                <Image
                  width={150}
                  height={150}
                  className="dark:hidden"
                  src="/images/logo.png"
                  alt="Logo"
                />
              </a>

              <p className="font-medium 2xl:px-20">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
                suspendisse.
              </p>

              <span className="mt-15 inline-block">
                <Image
                  width={250}
                  height={500}
                  src="/images/illustration/forgot.svg"
                  alt="illustration"
                />
              </span>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
              <h2 className="mb-3 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
                Reset Password
              </h2>
              <p className="mb-7.5 font-medium">
                Enter your email address to receive a password reset link.
              </p>

              <form>
                <div className="mb-6">
                  <label className="mb-2.5 block font-medium text-black dark:text-white">
                    Whatsapp Number
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      placeholder="Enter your whatsapp number"
                      className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary"
                    />

                    <span className="absolute right-4 top-4">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="#000">
                        <path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37" />
                      </svg>
                    </span>
                  </div>
                </div>
                <p className="mt-0 mb-2">
                  If you remember your account, please&nbsp;
                  <Link
                    className="text-blue-500 hover:underline"
                    href="/sign-in">
                    Login
                  </Link>
                </p>
                <div>
                  <button
                    type="button"
                    className="w-full cursor-pointer rounded-lg border border-primary bg-primary p-4 font-medium text-white transition hover:bg-opacity-90">
                    Request Password
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
