"use client";
import React, { useEffect, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import {
  IoMdCart,
  IoIosArrowDropdown,
  IoIosArrowDropright,
} from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import {
  AiOutlineUser,
  AiOutlineArrowDown,
  AiOutlineOrderedList,
} from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../../type";
import FormattedPrice from "./FormattedPrice";
import { addUser, deleteUser } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";

import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const pathname = usePathname();
  const dispatch = useDispatch();
  const { productData, orderData } = useSelector(
    (state: StateProps) => state.shopping
  );
  console.log(pathname);
  const { data: session } = useSession();
  console.log(session);
  useEffect(() => {
    if (session) {
      dispatch(
        addUser({
          name: session?.user?.name,
          email: session?.user?.email,
          image: session?.user?.image,
        })
      );
    } else {
      dispatch(deleteUser());
    }
  }, [session, dispatch]);

  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  const [profileMenuShown, setProfileMenuShown] = useState(false);
  // Password toggle handler
  const toggleProfileMenuShown = () => {
    // When the handler is invoked
    // change inverse the boolean state passwordShown
    setProfileMenuShown(!profileMenuShown);
  };

  return (
    <div className="bg-bodyColor h-20 top-0 sticky z-50">
      <Container className="h-full flex items-center md:gap-x-5 justify-between md:justify-start">
        <Logo />
        {/* Button Menu */}
        {/* <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
          <Link
            href="#"
            className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
          >
            Electronics
          </Link>
          <Link
            href="#"
            className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
          >
            Fashion
          </Link>
          <Link
            href="#"
            className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
          >
            Tools
          </Link>
          <Link
            href="#"
            className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
          >
            Books
          </Link>
          <Link
            href="#"
            className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600"
          >
            More
          </Link>
        </div> */}
        {/* Search Field */}

        <div className=" bg-white w-full hidden md:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
          <FiSearch className=" text-gray-500 group-focus-within:text-darkText duration-200" />
          <input
            type="text"
            placeholder="Search"
            className=" placeholder:text-sm flex-1 outline-none"
          />
        </div>
        {/* Login Register */}
        {!session && (
          <div
            onClick={
              //() => signIn()
              () => router.push("/sign-in")
            }
            className="headerDiv cursor-pointer"
          >
            <AiOutlineUser className="text-2xl" />
            <p className=" text-sm font-semibold">Login/Register</p>
          </div>
        )}

        {/* Cart */}
        <div className=" flex flex-row items-center justify-center gap-x-2 px-2 py-1.5">
          <Link href={"/cart"}>
            <div className=" bg-black hover:bg-slate-950 rounded-full text-slate-100 hover:text-white flex items-center justify-center gap-x-1  px-3 py-1.5 border-[1px] border-black hover:border-orange-600 duration-200 relative">
              <IoMdCart className="text-xl" />
              <p className="text-sm font-semibold">
                <FormattedPrice amount={totalAmt} />
              </p>
              <span className="bg-white text-orange-600 rounded-full text-xs absolute -right-2 -top-1 w-5 h-5 flex items-center justify-center shadow-xl shadow-black font-bold">
                {productData ? productData.length : 0}
              </span>
            </div>
          </Link>
          {/* {session && (
            <Image
              className=" rounded-full object-cover"
              src={session?.user?.image as string}
              alt="image"
              width={35}
              height={35}
            />
          )} */}
        </div>
        {/* Logout Form */}
        {/* {session && (
          <div
            onClick={() => signOut()}
            className="headerDiv cursor-pointer px-2 gap-x-1"
          >
            <FiLogOut className="text-2xl" />
            <p className="text-sm font-semibold">Logout</p>
          </div>
        )} */}

        <div className="">
          <div className="relative" x-data="{ open: true }">
            {session && (
              <div
                onClick={toggleProfileMenuShown}
                className="headerDiv cursor-pointer px-4 gap-x-1 py-1 items-center "
              >
                <Image
                  className=" rounded-full object-cover"
                  src={session?.user?.image as string}
                  alt="image"
                  width={40}
                  height={40}
                />
                <span>
                  {!profileMenuShown ? (
                    <IoIosArrowDropright />
                  ) : (
                    <IoIosArrowDropdown />
                  )}
                </span>
              </div>
            )}

            <div
              className={`${
                !profileMenuShown ? "hidden" : ""
              }  absolute right-0 w-full md:max-w-screen-sm md:w-screen mt-2 origin-top-right`}
            >
              <div className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Link
                    onClick={() => {
                      toast.loading("Loading...", {
                        id: "t_profile",
                      });
                      toggleProfileMenuShown();
                      toast.dismiss();
                    }}
                    className="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href={`/profile`}
                  >
                    <div className="bg-teal-500 text-white rounded-lg p-3">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="md:h-6 md:w-6 h-4 w-4"
                      >
                        <path d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">Profile</p>
                      <p className="text-sm">Easy customization</p>
                    </div>
                  </Link>

                  <Link
                    onClick={() => {
                      toast.loading("Loading...", {
                        id: "t_order",
                      });
                      toggleProfileMenuShown();
                    }}
                    className="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="/order"
                  >
                    <div className="bg-teal-500 text-white rounded-lg p-3">
                      <AiOutlineOrderedList className="md:h-6 md:w-6 h-4 w-4" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">Order</p>
                      <p className="text-sm">Check your latest comments</p>
                    </div>
                  </Link>

                  <a
                    className="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    <div className="bg-teal-500 text-white rounded-lg p-3">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="md:h-6 md:w-6 h-4 w-4"
                      >
                        <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">Analytics</p>
                      <p className="text-sm">Take a look at your statistics</p>
                    </div>
                  </a>
                  <a
                    className="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                    href="#"
                  >
                    <div className="bg-teal-500 text-white rounded-lg p-3">
                      <svg
                        fill="none"
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        viewBox="0 0 24 24"
                        className="md:h-6 md:w-6 h-4 w-4"
                      >
                        <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                        <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                      </svg>
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">Analytics</p>
                      <p className="text-sm">Take a look at your statistics</p>
                    </div>
                  </a>
                  <div
                    onClick={() => {
                      toast.loading("Loading...");
                      toggleProfileMenuShown();
                      signOut({
                        redirect: false,
                        callbackUrl: "/sign-in",
                      });
                      toast.dismiss();
                    }}
                    className=" cursor-pointer flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  >
                    <div className="bg-teal-500 text-white rounded-lg p-3">
                      <FiLogOut className="md:h-6 md:w-6 h-4 w-4" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">Log Out</p>
                      <p className="text-sm">Click to sign out</p>
                    </div>
                  </div>

                  <Link
                    onClick={() => {
                      toast.loading("Loading...", {
                        id: "t_cart",
                      });
                      toggleProfileMenuShown();
                    }}
                    href="/cart"
                    className=" cursor-pointer flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                  >
                    <div className="bg-teal-500 text-white rounded-lg p-3">
                      <IoMdCart className="md:h-6 md:w-6 h-4 w-4" />
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">Cart</p>
                      <p className="text-sm">Take a look at your cart</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <button
          type="button"
          className="md:block w-20 h-20 rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center"
        >
          <Image
            src="https://avatars.dicebear.com/api/bottts/2.svg"
            alt="bottts"
            width={500}
            height={500}
            className="rounded-lg mx-auto"
          />
        </button> */}
      </Container>
      <Toaster />
    </div>
  );
};

export default Header;
