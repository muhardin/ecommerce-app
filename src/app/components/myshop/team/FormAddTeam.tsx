"use client";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";
import ReactFlagsSelect from "react-flags-select";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import useSWR from "swr";
import FormattedPrice from "@/app/components/FormattedPrice";
import { Check, CheckCheck, Minus } from "lucide-react";
import { Payment, ShopPackage } from "../../../../../type";
import { useSession } from "next-auth/react";

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
  package: string;
  payment: string;
  country: string;
  shopName: string;
  domain: string;
}
interface ModalProps {
  closeModal: () => void;
}
const FormAddTeam: React.FC<ModalProps> = ({ closeModal }) => {
  const { data: session } = useSession();
  const [step, setStep] = useState(1);
  const [selected, setSelected] = useState("");

  const [errFn, setErrFn] = useState(false);
  const [errLn, setErrLn] = useState(false);
  const [errPhone, setErrPhone] = useState(false);
  const [errEmail, setErrEmail] = useState(false);
  const [errPassword, setErrPassword] = useState(false);
  const [errPack, setErrPack] = useState(false);
  const [errPay, setErrPay] = useState(false);
  const [errShopName, setErrShopName] = useState(false);
  const [errDomain, setErrDomain] = useState(false);

  const [formData, setFormData] = useState<FormData>({
    username: "",
    email: "",
    password: "",
    name: "",
    first_name: "",
    last_name: "",
    confirm_password: "",
    phone_number: "",
    package: "",
    payment: "",
    shopName: "",
    country: selected,
    domain: "",
  });
  console.log(selected);
  const [selectedPackage, setSelectedPackage] = useState<any>(null);
  const handleOptionPackage = (event: any) => {
    const value = event.target.value;
    setSelectedPackage(value);
    setErrPack(false);
    setFormData({ ...formData, ["package"]: value });
  };
  const [selectedCountry, setSelectedCountry] = useState<any>(null);
  const handleOptionCountry = (code: any) => {
    const value = code;
    setSelectedCountry(value);
    setErrPack(false);
    setFormData({ ...formData, ["country"]: value });
  };

  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const handleOptionPayment = (event: any) => {
    const value = event.target.value;
    setSelectedPayment(value);
    setErrPay(false);
    setFormData({ ...formData, ["payment"]: value });
    console.log(value);
  };
  const router = useRouter();
  const [error, setErrors] = useState<string[]>([]);
  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const [isFail, setIsFail] = useState(false);

  /** Start Get Shop */
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  const url = process.env.SERVER_ENDPOINT + "/api/package";
  const {
    data: packageData,
    isLoading,
    isValidating,
    error: errorPackage,
  } = useSWR(url, fetcher, {
    refreshInterval: 6000,
  });
  const urlPayment = process.env.SERVER_ENDPOINT + "/api/package/get-payments";
  const { data: payments } = useSWR(urlPayment, fetcher, {
    refreshInterval: 10000,
  });

  /** End Of Get Shop Package */
  // Specify the code you want to filter by
  const specificCode = "mywallet";
  // Filter the payments based on the specified code
  const filteredPayments =
    payments?.my_wallet.filter(
      (payment: { code: string }) => payment.code === specificCode
    ) || [];

  const regex = /^[a-zA-Z0-9]+$/;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const valueGet = e.target.value;
    if (e.target.name == "first_name") {
      setErrFn(false);
    }
    if (e.target.name == "last_name") {
      setErrLn(false);
    }
    if (e.target.name == "phone_number") {
      setErrPhone(false);
    }
    if (e.target.name == "email") {
      setErrEmail(false);
    }
    if (e.target.name == "password") {
      setErrPassword(false);
    }
    if (e.target.name == "shopName") {
      setErrShopName(false);
    }
    if (e.target.name == "domain") {
      if (!regex.test(valueGet)) {
        setErrDomain(true);
      } else {
        setErrDomain(false);
      }
    }

    // console.log(e.target);
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    setErrMessage([]);
    e.preventDefault();
    toast.loading("Loading...");
    // Reset errors before validation
    setErrors([]);
    const headers = {
      Authorization: `Bearer ${session?.bearer}`,
      "Content-Type": "multipart/form-data", // Use 'multipart/form-data' for FormData
    };
    const post = await axios.post(
      process.env.SERVER_ENDPOINT + "/api/myshop-board/referral/add",
      formData,
      { headers }
    );
    console.log(post);
    if (post.status == 200) {
      toast.dismiss();
      toast.success("Success");
      setErrMessage([]);
      closeModal();
    } else if (post.status == 201) {
      setErrMessage(post.data.message);
      setIsFail(true);
      toast.dismiss();
    } else if (post.status == 500) {
      toast.error("System on maintenance mode");
    }
    // console.log(post.data.message.error);
    // You can make an API call here to register the user
  };
  const [passwordShown, setPasswordShown] = useState(false);
  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handleNext = () => {
    if (step === 1 && !formData.first_name) {
      setErrFn(true);
    } else if (step === 1 && !formData.last_name) {
      setErrLn(true);
    } else if (step === 1 && !formData.phone_number) {
      setErrPhone(true);
    } else if (step === 1 && !formData.email) {
      setErrEmail(true);
    } else if (step === 1 && !formData.password) {
      setErrPassword(true);
    } else if (step === 1 && !formData.shopName) {
      setErrShopName(true);
    } else if (step === 1 && !formData.domain) {
      setErrDomain(true);
    } else if (!regex.test(formData.domain)) {
      setErrDomain(true);
    } else {
      setStep(step + 1);
    }
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };

  return (
    <div>
      <section className="bg-white dark:bg-gray-900">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-center min-h-screen">
            <div className="hidden bg-cover lg:block lg:w-1/2">
              <Image
                src={"/images/signup.jpeg"}
                alt="image"
                width={500}
                height={500}
                className=" w-full h-150 object-cover"
              />
            </div>

            <div className="flex mb-32 pb-8 md:pb-0 md:mb-0 flex-col mt-2 w-full max-w-3xl p-4 mx-auto lg:px-12 lg:w-1/2">
              <div className="hidden md:block border-b-2 border-gray-200">
                <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                  Register Shop
                </h1>
                <p className="mt-2 text-gray-500 dark:text-gray-400">
                  Let’s get you all set up so you can verify your personal data
                </p>
              </div>
              <div className="">
                {errMessage?.error && (
                  <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
                    Register Fail !
                    {errMessage?.error?.map((item: string) => (
                      <div className="" key={2}>
                        <li className="text-md font-bold text-white text-sm">
                          {item}
                        </li>
                      </div>
                    ))}
                  </div>
                )}
              </div>
              {step === 1 && (
                <div className="w-full">
                  <div className="block w-full"></div>

                  {/* <div className="hidden md:block">
                  <h1 className="text-2xl font-semibold tracking-wider text-gray-800 capitalize dark:text-white">
                    Dapatkan Toko Online anda sekarang juga.
                  </h1>

                  <p className="mt-2 text-gray-500 dark:text-gray-400">
                    Let’s get you all set up so you can verify your personal
                    account and begin setting up your profile.
                  </p>
                </div> */}

                  <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2">
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
                      {errFn && (
                        <label className="text-red-600 text-sm">
                          Wajib untuk diisi
                        </label>
                      )}
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
                      {errLn && (
                        <label className="text-red-600 text-sm">
                          Wajib untuk diisi
                        </label>
                      )}
                    </div>

                    <div>
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Country
                      </label>
                      <ReactFlagsSelect
                        searchPlaceholder="Search countries"
                        searchable
                        showSecondarySelectedLabel={true}
                        selected={selectedCountry}
                        onSelect={(code) => handleOptionCountry(code)}
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
                      {errPhone && (
                        <label className="text-red-600 text-sm">
                          Wajib untuk diisi
                        </label>
                      )}
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
                      {errEmail && (
                        <label className="text-red-600 text-sm">
                          Wajib untuk diisi
                        </label>
                      )}
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
                          className="absolute right-2 bg-transparent flex items-center justify-center text-gray-700">
                          {passwordShown ? <IoIosEye /> : <IoIosEyeOff />}
                        </button>
                      </div>
                      {errPassword && (
                        <label className="text-red-600 text-sm">
                          Wajib untuk diisi
                        </label>
                      )}
                    </div>
                  </div>
                  {/* Setting Shop */}
                  <div className="mt-4 mb-2">
                    <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                      Shop Name
                    </label>
                    <div className="relative flex items-center">
                      <input
                        required
                        name="shopName"
                        id="shopName"
                        type="text"
                        value={formData.shopName}
                        onChange={handleChange}
                        placeholder="Shop Name"
                        className="block w-full px-5 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    {errShopName && (
                      <label className="text-red-600 text-sm">
                        Wajib untuk diisi
                      </label>
                    )}
                  </div>

                  <div className="mt-4">
                    <label className="block mb-1 text-sm text-gray-600 dark:text-gray-200">
                      Sub Domain Access
                    </label>
                    <div className="relative flex items-center">
                      <input
                        readOnly
                        value="https://"
                        type="text"
                        className="bg-slate-200 rounded-r-none pointer-events-none block w-1/3 px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-r-0 border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      <input
                        required
                        name="domain"
                        id="domain"
                        type="text"
                        value={formData.domain}
                        onChange={handleChange}
                        placeholder="Sub Domain"
                        className="border-l-0 border-r-0 rounded-l-none rounded-r-none block w-full px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      <input
                        value=".smartcommerce.id"
                        type="text"
                        className="bg-slate-200 text-xs md:text-md rounded-l-none  border-l-0 pointer-events-none block w-2/3 px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>

                    {errDomain ? (
                      <label className="text-red-400 text-sm">
                        Wajib diisi tanpa spasi atau karakter tertentu
                      </label>
                    ) : null}
                  </div>
                  {/* End Setting Shop */}
                  {/* <div className="flex flex-row justify-end gap-2 mt-4">
                    <button
                      onClick={handleNext}
                      type="button"
                      className="flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                    >
                      <span>Next </span>

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
                  </div> */}
                </div>
              )}
              {step === 2 && (
                <div className="w-full">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="card-holder"
                      className="mt-4 mb-2 block text-sm font-medium">
                      Pilih Paket Pendaftaran
                    </label>
                    {packageData ? (
                      packageData.map((item: ShopPackage) => (
                        <div className="relative" key={item.id}>
                          <input
                            className="peer hidden"
                            id={`delivering_1${item.id}`}
                            type="radio"
                            name={`package`}
                            value={item.id}
                            checked={selectedPackage == item.id}
                            onChange={handleOptionPackage}
                          />
                          <span className="peer-checked:border-sky-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                          <label
                            className="peer-checked:border-1 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-1"
                            htmlFor={`delivering_1${item.id}`}>
                            {/* <Image
                        width={150}
                        height={150}
                        className="w-14 object-contain"
                        src={`/images/packages/${item.package_name}.png`}
                        alt=""
                      /> */}
                            {selectedPackage == item.id ? (
                              <div className="flex items-center justify-center flex-col w-14 text-green-500">
                                <CheckCheck />
                              </div>
                            ) : (
                              <div className="flex items-center justify-center flex-col w-14 text-red-500">
                                <Minus />
                              </div>
                            )}

                            <div className="ml-0">
                              <span className="mt-2 font-semibold capitalize">
                                {item.title}{" "}
                                <span className="font-sans font-semibold text-sky-500">
                                  ({" "}
                                  <FormattedPrice amount={Number(item.price)} />{" "}
                                  )
                                </span>
                              </span>
                              <p className="text-slate-500 text-sm leading-6">
                                Menunggu Konfirmasi Dari Penjual
                              </p>
                            </div>
                          </label>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-row justify-center items-center">
                        <span className="loading loading-dots loading-lg"></span>
                      </div>
                    )}
                    {errPack && (
                      <label className="text-red-600 text-sm">
                        Wajib untuk diisi
                      </label>
                    )}

                    {/* <div className="flex flex-row justify-end gap-2">
                      <button
                        onClick={handlePrevious}
                        type="button"
                        className="flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 -scale-x-100"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Previous </span>
                      </button>
                      <button
                        onClick={handleNext}
                        type="button"
                        className="flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      >
                        <span>Next </span>

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
                    </div> */}
                  </div>
                </div>
              )}
              {step === 3 && (
                <div className="w-full">
                  <div className="flex flex-col gap-2">
                    <label
                      htmlFor="card-holder"
                      className="mt-4 mb-2 block text-sm font-medium">
                      Pilih Cara Pembayaran_
                    </label>
                    {filteredPayments ? (
                      filteredPayments.map((item: Payment) => (
                        <div className="relative" key={item.id}>
                          <input
                            className="peer hidden"
                            id={`payment_1${item.id}`}
                            type="radio"
                            name={`payment`}
                            value={item.id}
                            checked={selectedPayment == item.id}
                            onChange={handleOptionPayment}
                          />
                          <span className="peer-checked:border-sky-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                          <label
                            className="peer-checked:border-1 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-1"
                            htmlFor={`payment_1${item.id}`}>
                            <Image
                              width={150}
                              height={150}
                              className="w-14 object-contain"
                              src={`/images/payment/${item.picture}`}
                              alt=""
                            />

                            <div className="ml-4">
                              <span className="mt-2 font-semibold capitalize">
                                {item.payment_name}{" "}
                                <span className="font-sans font-semibold text-sky-500">
                                  ( {item.type})
                                </span>
                              </span>
                              <p className="text-slate-500 text-sm leading-6">
                                Instant Verification | {item.code}
                              </p>
                            </div>
                          </label>
                        </div>
                      ))
                    ) : (
                      <div className="flex flex-row justify-center items-center">
                        <span className="loading loading-dots loading-lg"></span>
                      </div>
                    )}

                    {/* <div className="flex flex-row gap-2 justify-end">
                      <button
                        onClick={handlePrevious}
                        type="button"
                        className="flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-5 h-5 -scale-x-100"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                        <span>Previous </span>
                      </button>
                      <button
                        type="submit"
                        className="flex items-center justify-between px-6 py-3 text-sm tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50"
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
                    </div> */}
                  </div>
                </div>
              )}
            </div>
            <div className="fixed flex flex-row justify-between z-10 bottom-0 md:bottom-0 w-full right-0 py-4 lg:py-2 px-2 gap-2 lg:gap-2 xl:gap-2 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <button
                  disabled={step == 1}
                  onClick={handlePrevious}
                  className={`${
                    step !== 1 &&
                    "cursor-pointer hover:bg-red-50 hover:border-red-100 hover:text-red-600"
                  } align-bottom inline-flex justify-center  leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-gray-600 border-gray-200 border dark:text-gray-400 rounded-lg bg-gray-200  mr-3 items-center h-12 w-full dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-red-700`}
                  type="button">
                  Previous
                </button>
              </div>
              {step < 3 ? (
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <button
                    onClick={handleNext}
                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                    type="button">
                    <span>Next</span>
                  </button>
                </div>
              ) : null}

              {step == 3 ? (
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <button
                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                    type="submit">
                    <span>Submit</span>
                  </button>
                </div>
              ) : null}

              {/* {step == 3 ? (
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <button
                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                    type="submit"
                  >
                    <span>Submit</span>
                  </button>
                </div>
              ) : (
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <button
                    onClick={handleNext}
                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                    type="button"
                  >
                    <span>Next</span>
                  </button>
                </div>
              )} */}
            </div>
          </div>
        </form>
      </section>
      <Toaster />
    </div>
  );
};

export default FormAddTeam;
