"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import ReactFlagsSelect from "react-flags-select";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
//https://www.npmjs.com/package/react-flags-select
interface FormData {
  username: string;
  email: string;
  password: string;
  name: string;
  first_name: string;
  last_name: string;
  confirm_password: string;
  phone_number: string;
}

const RegistrationForm: React.FC = () => {
  const [selected, setSelected] = useState("");

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    name: "",
    first_name: "",
    last_name: "",
    confirm_password: "",
    phone_number: "",
  });
  const router = useRouter();
  const [error, setErrors] = useState<string[]>([]);
  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const [isFail, setIsFail] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Reset errors before validation
    setErrors([]);

    // // Perform form validation here
    // if (formData.username === "") {
    //   setErrors((prevErrors) => [...prevErrors, "Username is required"]);
    // }
    // if (formData.email === "") {
    //   setErrors((prevErrors) => [...prevErrors, "Email is required"]);
    // }
    // if (formData.password === "") {
    //   setErrors((prevErrors) => [...prevErrors, "Password is required"]);
    // }

    // // If there are validation errors, show them in alerts
    // if (errors.length > 0) {
    //   errors.forEach((error) => {
    //     toast.error(error);
    //   });
    //   return;
    // }

    // Send the form data to your backend for registration
    // console.log("Form Data:", formData);
    const post = await axios.post(
      process.env.SERVER_ENDPOINT + "/api/register",
      formData
    );
    // console.log(post);
    if (post.status == 200) {
      toast.dismiss();
      toast.success("Success");
      router.push("/sign-in");
    } else if (post.status == 201) {
      setErrMessage(post.data.message);
      setIsFail(true);
      toast.dismiss();
    } else if (post.status == 500) {
      toast.error("System on maintenance mode");
    }
    console.log(post.data.message.error);
    // You can make an API call here to register the user
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <div className="flex justify-center min-h-screen">
          <div className="hidden bg-cover lg:block lg:w-2/5">
            <Image
              src={
                "https://images.unsplash.com/photo-1494621930069-4fd4b2e24a11?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=715&q=80"
              }
              alt="image"
              width={500}
              height={500}
              className=" w-full h-150 object-cover"
            />
          </div>

          <div className="flex mt-10 w-full max-w-3xl p-8 mx-auto lg:px-12 lg:w-3/5">
            <div className="w-full">
              <div className="block w-full"></div>
              {isFail ? (
                <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
                  Register Fail !
                  {errMessage.error.map((item: string) => (
                    <div className="" key={2}>
                      <li className="text-md font-bold text-white text-sm">
                        {item}
                      </li>
                    </div>
                  ))}
                </div>
              ) : (
                ""
              )}
              <div className="hidden md:block">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                  Get your free account now.
                </h1>

                <p className="mt-4 text-gray-500 dark:text-gray-400">
                  Let’s get you all set up so you can verify your personal
                  account and begin setting up your profile.
                </p>
              </div>

              {/* <div className="mt-6">
                  <h1 className="text-gray-500 dark:text-gray-300">
                    Select type of account
                  </h1>

                  <div className="mt-3 md:flex md:items-center md:-mx-2">
                    <button className="flex justify-center w-full px-6 py-3 text-white bg-blue-500 rounded-md md:w-auto md:mx-2 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>

                      <span className="mx-2">client</span>
                    </button>

                    <button className="flex justify-center w-full px-6 py-3 mt-4 text-blue-500 border border-blue-500 rounded-md md:mt-0 md:w-auto md:mx-2 dark:border-blue-400 dark:text-blue-400 focus:outline-none">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-6 h-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                        />
                      </svg>

                      <span className="mx-2">worker</span>
                    </button>
                  </div>
                </div> */}

              <form
                onSubmit={handleSubmit}
                className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2"
              >
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    First Name
                  </label>
                  <input
                    name="first_name"
                    id="first_name"
                    value={formData.first_name}
                    onChange={handleChange}
                    required
                    type="text"
                    placeholder="John"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Last name
                  </label>
                  <input
                    name="last_name"
                    id="last_name"
                    value={formData.last_name}
                    onChange={handleChange}
                    type="text"
                    placeholder="Snow"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>

                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Country
                  </label>
                  <ReactFlagsSelect
                    searchPlaceholder="Search countries"
                    searchable
                    showSecondarySelectedLabel={true}
                    selected={selected}
                    onSelect={(code) => setSelected(code)}
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Phone number
                  </label>
                  <input
                    required
                    name="phone_number"
                    id="phone_number"
                    value={formData.phone_number}
                    onChange={handleChange}
                    type="text"
                    placeholder="XXX-XX-XXXX-XXX"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Email address
                  </label>
                  <input
                    required
                    name="email"
                    id="email"
                    value={formData.email}
                    onChange={handleChange}
                    type="email"
                    placeholder="johnsnow@example.com"
                    className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                  />
                </div>
                <div className="">
                  <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                    Password
                  </label>
                  <div className="relative flex items-center">
                    <input
                      required
                      name="password"
                      id="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full px-5 py-3 mt-0 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      placeholder="Enter your password"
                      type={passwordShown ? "text" : "password"}
                    />
                    <button
                      onClick={togglePassword}
                      type="button"
                      className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700"
                    >
                      {passwordShown ? <IoIosEye /> : <IoIosEyeOff />}
                    </button>
                  </div>
                </div>

                <button
                  type="submit"
                  className="flex items-center justify-between w-full px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                >
                  <span>Sign Up </span>

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-5 h-5 rtl:-scale-x-100"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <Toaster />
    </div>
  );
};

export default RegistrationForm;
