"use client";
import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import Logo from "./Logo";
import {
  IoMdCart,
  IoIosArrowDropdown,
  IoIosArrowDropright,
} from "react-icons/io";
import { FiSearch, FiLogOut } from "react-icons/fi";
import { AiOutlineUser, AiOutlineOrderedList } from "react-icons/ai";
import { useSession, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../../type";
import FormattedPrice from "./FormattedPrice";
import { addUser, deleteUser } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import { usePathname, useRouter } from "next/navigation";
import AvatarHeader from "./Avatar";
import SideBar from "./SideBar";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useUserData } from "./supplier/UserData";
import { RootState } from "@/redux/store";
import {
  closeProfileMenu,
  openProfileMenu,
  toggleProfileMenu,
} from "@/redux/profileSlice";

interface HeaderProps {
  toggleNavVisibility: () => void;
}

const Header = () => {
  const pathName = usePathname();
  const [value, setValue] = useState<boolean>(false);
  const handleValueChange = (newValue: boolean) => {
    setValue(newValue);
  };

  const router = useRouter();
  const dispatch = useDispatch();
  const { productData, orderData } = useSelector(
    (state: StateProps) => state.shopping
  );
  const { data: session } = useSession();
  // console.log(session?.bearer);
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
      amt += item.agent_price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  const [profileMenuShown, setProfileMenuShown] = useState(false);
  // Password toggle handler
  const toggleProfileMenuShown = () => {
    setProfileMenuShown(!profileMenuShown);
  };
  const [status, setStatus] = useState(false);

  // ** States
  const [navVisible, setNavVisible] = useState<boolean>(false);

  // ** Toggle Functions
  const toggleNavVisibility = () => setNavVisible(!status);
  //inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600

  const [notification, setNotification] = useState(false);
  const toggleNotification = () => {
    setNotification(!notification);
  };

  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setProfileMenuShown(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const refNotification = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!refNotification.current?.contains(event.target)) {
        setNotification(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [refNotification]);
  const userData = useUserData();
  // console.log(userData);
  // dispatch(
  //   updateNote({
  //     name: true,
  //   })
  // );
  // const { menu } = useSelector((state: any) => state.shopping);
  // console.log(menu);

  const handleOpenMenu = () => {
    dispatch(openProfileMenu());
  };

  const handleCloseMenu = () => {
    dispatch(closeProfileMenu());
  };
  const handleToggleMenu = () => {
    dispatch(toggleProfileMenu());
  };
  // console.log(isOpen);

  return (
    <>
      <div className="bg-bodyColor h-20 top-0 sticky z-50">
        <Container className="h-full w-full flex items-center md:gap-x-5 justify-between md:justify-start">
          {session && (
            <>
              {pathName.startsWith("/supplier") ? (
                <div className={`flex items-center ml-2`}>
                  <button
                    onClick={() => {
                      // setValue(!value);
                      handleToggleMenu();
                    }}
                    data-drawer-target="default-sidebar"
                    data-drawer-toggle="default-sidebar"
                    aria-controls="default-sidebar"
                    type="button"
                    className="">
                    <span className="sr-only">Open sidebar</span>
                    {!value ? (
                      <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                    ) : (
                      <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                    )}
                  </button>
                </div>
              ) : (
                ""
              )}

              <div className="md:hidden mt-10 ">
                <SideBar value={value} onValueChange={handleValueChange} />
              </div>
            </>
          )}

          <div className="flex items-center justify-start ml-4">
            {/* <button
            onClick={() => {
              myClick();
            }}
            data-drawer-target="default-sidebar"
            data-drawer-toggle="default-sidebar"
            aria-controls="default-sidebar"
            type="button"
            className="mr-4 md:hidden"
          >
            <span className="sr-only">Open sidebar</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                clipRule="evenodd"
                fillRule="evenodd"
                d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
              ></path>
            </svg>
          </button> */}
            <Logo />
          </div>

          {/* Button Menu */}
          <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
            <Link
              href="#"
              className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
              Electronics
            </Link>
            <Link
              href="#"
              className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
              Fashion
            </Link>
            <Link
              href="/aboutus"
              className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">
              About Us
            </Link>
          </div>

          {/* Search Field */}
          {/* <div className="ml-2 bg-white hidden sm:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
            <FiSearch className=" text-gray-500 group-focus-within:text-darkText duration-200" />
            <input
              type="text"
              placeholder="Search"
              className=" placeholder:text-sm flex-1 outline-none"
            />
          </div> */}

          <div className="flex items-center">
            <div className="relative mr-4 cursor-pointer">
              <span
                className=""
                onClick={() => {
                  toggleNotification();
                }}>
                <div className="absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="text-gray-400"
                  viewBox="0 0 16 16">
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                </svg>
              </span>

              <div
                ref={refNotification}
                className={`${
                  !notification ? "hidden" : "block"
                } absolute z-30 top-8 right-0 mt-0 w-96 bg-white p-4 rounded-md shadow-md`}>
                <div className="notification-panel">
                  {/* <button
                    aria-hidden="true"
                    id="headlessui-focus-sentinel-before-11"
                    data-headlessui-focus-guard="true"
                    type="button"
                    className="hidden-sentinel"
                  ></button> */}
                  <div className="mb-5 font-medium">Notifications</div>

                  <div className="cursor-pointer relative flex items-center">
                    <div className="relative flex-none w-12 h-12 mr-1 image-fit">
                      <Image
                        width={50}
                        height={50}
                        alt="User 1"
                        className="h-full w-full overflow-hidden object-cover rounded-full  dark:border-gray-700 shadow"
                        src="/images/1.jpg"
                      />
                      <div className="notification-badge"></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <a href="#" className="mr-5 font-medium truncate">
                          Johnny Depp
                        </a>
                        <div className="notification-time">05:09 AM</div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in
                        some form, by injected humour, or randomi
                      </div>
                    </div>
                  </div>

                  <div className="cursor-pointer relative flex items-center mt-5">
                    <div className="relative flex-none w-12 h-12 mr-1 image-fit">
                      <Image
                        width={50}
                        height={50}
                        alt="User 1"
                        className="h-full w-full overflow-hidden object-cover rounded-full  dark:border-gray-700 shadow"
                        src="/images/1.jpg"
                      />
                      <div className=""></div>
                    </div>
                    <div className="ml-2 overflow-hidden">
                      <div className="flex items-center justify-between">
                        <a href="#" className="mr-5 font-medium truncate">
                          Sylvester Stallone
                        </a>
                        <div className="notification-time">03:20 PM</div>
                      </div>
                      <div className="w-full truncate text-slate-500 mt-0.5">
                        It is a long established fact that a reader will be
                        distracted by the readable content of a page when
                        looking at its layout. The point of using Lorem
                      </div>
                    </div>
                  </div>

                  {/* Repeat the above structure for other notifications as needed */}

                  <button
                    aria-hidden="true"
                    id="headlessui-focus-sentinel-after-12"
                    data-headlessui-focus-guard="true"
                    className="hidden-sentinel"></button>
                </div>
              </div>
            </div>
            {/* Login Register */}
            {!session && (
              <div
                onClick={
                  //() => signIn()
                  () => router.push("/sign-in")
                }
                className="headerDiv cursor-pointer">
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

            <div className="relative">
              {session && (
                <div
                  onClick={() => {
                    toggleProfileMenuShown();
                  }}
                  className={` cursor-pointer px-4 gap-x-1 py-1 items-center `}>
                  <AvatarHeader />
                  {/* <span>
                  {!profileMenuShown ? (
                    <IoIosArrowDropright />
                  ) : (
                    <IoIosArrowDropdown />
                  )}
                </span> */}
                </div>
              )}
            </div>
            <div
              ref={ref}
              className={`${!profileMenuShown ? "hidden" : "block"}`}>
              <div
                className={`absolute right-0 ml-4 p-4 w-screen max-w-screen-sm sm:max-w-screen-sm sm:w-screen md:max-w-screen-sm md:w-screen mt-2 origin-top-right`}>
                <div
                  onMouseLeave={() => {
                    setProfileMenuShown(false);
                  }}
                  className="px-2 pt-2 pb-4 bg-white rounded-md shadow-lg dark-mode:bg-gray-700">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Link
                      onClick={() => {
                        toast.loading("Loading...", {
                          id: "t_profile",
                        });
                        toggleProfileMenuShown();
                        toast.dismiss();
                      }}
                      className={` flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline`}
                      href={`/profile`}>
                      <div className="bg-sky-500 text-white rounded-lg p-3">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="md:h-6 md:w-6 h-4 w-4">
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
                      href="/order">
                      <div className="bg-sky-500 text-white rounded-lg p-3">
                        <AiOutlineOrderedList className="md:h-6 md:w-6 h-4 w-4" />
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold">Order</p>
                        <p className="text-sm">Check your latest comments</p>
                      </div>
                    </Link>

                    <Link
                      onClick={() => {
                        toggleProfileMenuShown();
                      }}
                      className="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      href="/buyer">
                      <div className="bg-sky-500 text-white rounded-lg p-3">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          className="md:h-6 md:w-6 h-4 w-4">
                          <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                          <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                        </svg>
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold">Dashboard</p>
                        <p className="text-sm">
                          Take a look at your statistics
                        </p>
                      </div>
                    </Link>
                    {userData?.data?.is_supplier ? (
                      <Link
                        onClick={() => {
                          toggleProfileMenuShown();
                        }}
                        className="flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        href="/supplier">
                        <div className="bg-sky-500 text-white rounded-lg p-3">
                          <svg
                            fill="none"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            className="md:h-6 md:w-6 h-4 w-4">
                            <path d="M11 3.055A9.001 9.001 0 1020.945 13H11V3.055z"></path>
                            <path d="M20.488 9H15V3.512A9.025 9.025 0 0120.488 9z"></path>
                          </svg>
                        </div>
                        <div className="ml-3">
                          <p className="font-semibold">Im Supplier</p>
                          <p className="text-sm">
                            Take a look at your supplier board
                          </p>
                        </div>
                      </Link>
                    ) : (
                      ""
                    )}

                    <Link
                      onClick={() => {
                        toast.loading("Loading...", {
                          id: "t_cart",
                        });
                        toggleProfileMenuShown();
                      }}
                      href="/cart"
                      className=" cursor-pointer flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <div className="bg-sky-500 text-white rounded-lg p-3">
                        <IoMdCart className="md:h-6 md:w-6 h-4 w-4" />
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold">Cart</p>
                        <p className="text-sm">Take a look at your cart</p>
                      </div>
                    </Link>
                    <div
                      onClick={() => {
                        toast.loading("Loading...");
                        toggleProfileMenuShown();
                        signOut({
                          redirect: true,
                          callbackUrl: "/sign-in",
                        });
                        toast.dismiss();
                      }}
                      className=" cursor-pointer flex row items-start rounded-lg bg-transparent p-2 dark-mode:hover:bg-gray-600 dark-mode:focus:bg-gray-600 dark-mode:focus:text-white dark-mode:hover:text-white dark-mode:text-gray-200 hover:text-gray-900 focus:text-gray-900 hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline">
                      <div className="bg-sky-500 text-white rounded-lg p-3">
                        <FiLogOut className="md:h-6 md:w-6 h-4 w-4" />
                      </div>
                      <div className="ml-3">
                        <p className="font-semibold">Log Out</p>
                        <p className="text-sm">Click to sign out</p>
                      </div>
                    </div>
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
    </>
  );
};

export default Header;
