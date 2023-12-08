"use client";
import { Eye } from "lucide-react";
import { signIn, useSession } from "next-auth/react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const SignInComponent = () => {
  const router = useRouter();
  const { data: session } = useSession();
  console.log(session);
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
        // callbackUrl: "/",
      });

      if (signInData?.error) {
        toast.dismiss();
        toast.error("Login failed!", {
          position: "top-center",
        });
      } else {
        router.push("/admin");
        toast.dismiss();
        toast.success("Login successful!", {
          position: "top-center",
          duration: 6000,
        });
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (session?.is_company == 1) {
          router.push("/admin");
        }

        if (session?.is_seller == 2) {
          const response = await fetch(
            `${process.env.SERVER_ENDPOINT}/api/register-payment/2`,
            {
              method: "GET",
              headers: {
                Authorization: `Bearer ${session?.bearer}`,
                "Content-Type": "application/json",
              },
            }
          );
          const data = await response.json();
          if (response.status == 200) {
            router.push("/web/payment/" + data.id);
          }
          console.log(data);
        } else if (session?.is_seller == 1) {
          router.push("/myshop/");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, [router, session?.bearer, session?.is_company, session?.is_seller]);

  return (
    <>
      <div>
        <section className=" font-poppins">
          <div className="relative z-10 flex items-center h-auto py-16 overflow-hidden lg:bg-blue-900 lg:dark:bg-gray-800 2xl:py-44">
            <div className="absolute top-0 left-0 w-full h-full lg:bg-blue-900 dark:bg-bg-gray-700 lg:bottom-0 lg:h-auto lg:w-4/12">
              <Image
                width={500}
                height={500}
                src="/images/landing/login.jpg"
                alt=""
                className="hidden object-fill w-full h-full lg:block"
              />
            </div>
            <div className="relative max-w-6xl px-4 mx-auto">
              <div className="justify-center max-w-xl mx-auto lg:max-w-5xl">
                <div className="flex flex-wrap items-center -mx-4">
                  <div className="w-full px-4 lg:w-2/5">
                    <div className="z-10 w-full p-10 shadow-md bg-gray-50 dark:bg-gray-900 rounded-lg ">
                      <h2 className="text-xl font-bold leading-tight mb-7 md:text-2xl dark:text-gray-300">
                        Login to your account
                      </h2>
                      <form onSubmit={handleSubmit} className="mt-4">
                        <div>
                          <label
                            htmlFor=""
                            className="block text-gray-700 dark:text-gray-300">
                            Email:
                          </label>
                          <input
                            required
                            type="email"
                            className="w-full px-4 py-3 mt-2 bg-gray-200 rounded-lg dark:text-gray-100 dark:bg-gray-800"
                            name="email"
                            placeholder="Enter your email"
                          />
                        </div>
                        <div className="mt-4">
                          <div>
                            <label
                              htmlFor=""
                              className="text-gray-700 dark:text-gray-300 ">
                              Password:
                            </label>
                            <div className="relative flex items-center mt-2">
                              <input
                                required
                                type={passwordShown ? "text" : "password"}
                                className="w-full px-4 py-3 bg-gray-200 rounded-lg dark:text-gray-400 dark:bg-gray-800 "
                                name="password"
                                placeholder="Enter password"
                              />
                              <button
                                type="button"
                                onClick={togglePassword}
                                className="flex flex-row items-center">
                                {passwordShown ? (
                                  <div className="absolute right-0 mr-3 dark:text-gray-300 text-gray-500">
                                    <Eye size={18} />
                                  </div>
                                ) : (
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    className="absolute right-0 mr-3 dark:text-gray-300"
                                    fill="currentColor"
                                    viewBox="0 0 16 16">
                                    <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"></path>
                                    <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"></path>
                                    <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"></path>
                                  </svg>
                                )}
                              </button>
                            </div>
                          </div>
                        </div>
                        <div className="mt-4 text-right">
                          <a
                            href="#"
                            className="text-sm font-semibold text-blue-700 hover:underline">
                            forgot password?
                          </a>
                        </div>
                        <button className="w-full px-4 py-3 mt-4 font-semibold text-white bg-gray-700 rounded-lg hover:text-gray-400 hover:bg-gray-200 ">
                          Login
                        </button>
                        <div className="mt-4 text-gray-700  dark:text-gray-300">
                          Need an account?
                          <a
                            href="#"
                            className="font-semibold text-blue-700 hover:underline">
                            Create an account{" "}
                          </a>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div className="hidden w-full px-6 mb-16 lg:w-3/5 lg:mb-0 lg:block">
                    <span className="flex items-center justify-center w-28 h-28 mx-auto text-gray-900 bg-white rounded-lg dark:bg-yellow-300 mb-9">
                      <Image
                        src={`${process.env.SERVER_ENDPOINT}/images/logo.png`}
                        alt=""
                        width={250}
                        height={250}
                      />
                    </span>
                    <h2 className="text-4xl font-bold text-center text-gray-100 dark:text-gray-400 mb-9 lg:text-6xl ">
                      Are you ready to login our account?
                    </h2>
                    <p className="text-xl font-semibold text-center text-gray-200 dark:text-gray-500 ">
                      You are welcome here!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <Toaster />
      </div>
    </>
  );
};

export default SignInComponent;
