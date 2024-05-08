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
import LucidaIcon from "./ui/LucidaIcons";
import { ClipboardList, ShoppingBag } from "lucide-react";
import { Icons } from "./ui/Icons";
import { useShopData } from "./shop/ShopContext";

interface HeaderProps {
  toggleNavVisibility: () => void;
}

const HeaderFront = () => {
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

  const isOpen = useSelector((state: RootState) => state.profile.isOpen);

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

  /** menu profile */

  const [profileMenu, setProfileMenu] = useState(false);
  const profileButtonRef = useRef<HTMLDivElement | null>(null);

  const handleToggleProfile = () => {
    setProfileMenu(!profileMenu);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        profileButtonRef.current &&
        !profileButtonRef.current.contains(event.target as Node)
      ) {
        setProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const onLogOut = async () => {
    await signOut({
      redirect: false,
      callbackUrl: "/sign-in",
    });
    router.push("/sign-in");
  };
  const shopData = useShopData();
  const startsWithAny = (pathName: string, prefixes: string[]): boolean => {
    return prefixes.some((prefix) => pathName.startsWith(prefix));
  };

  // Example usage
  const arrayContent: string[] = ["/myshop", "/supplier", "/admin"];

  const startsWithAnyResult: boolean = startsWithAny(pathName, arrayContent);
  // console.log(shopData);
  return (
    <>
      <section className="sticky top-0 z-40 px-3 py-3 bg-bodyColor shadow dark:text-gray-100 dark:bg-gray-900 lg:px-5 w-full">
        <nav className="relative">
          <div className="flex items-center justify-between">
            {pathName.startsWith("/supplier") ? (
              <div>
                <button
                  onClick={() => {
                    handleToggleMenu();
                  }}
                  className="px-2 py-3 text-blue-500 bg-blue-100 rounded dark:text-gray-400 dark:bg-gray-800">
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.50002 1.66667H16.5C16.721 1.66667 16.933 1.57887 17.0893 1.42259C17.2456 1.26631 17.3334 1.05435 17.3334 0.833333C17.3334 0.61232 17.2456 0.400358 17.0893 0.244078C16.933 0.0877975 16.721 0 16.5 0H1.50002C1.27901 0 1.06704 0.0877975 0.910765 0.244078C0.754484 0.400358 0.666687 0.61232 0.666687 0.833333C0.666687 1.05435 0.754484 1.26631 0.910765 1.42259C1.06704 1.57887 1.27901 1.66667 1.50002 1.66667V1.66667ZM16.5 8.33333H1.50002C1.27901 8.33333 1.06704 8.42113 0.910765 8.57741C0.754484 8.73369 0.666687 8.94565 0.666687 9.16667C0.666687 9.38768 0.754484 9.59964 0.910765 9.75592C1.06704 9.9122 1.27901 10 1.50002 10H16.5C16.721 10 16.933 9.9122 17.0893 9.75592C17.2456 9.59964 17.3334 9.38768 17.3334 9.16667C17.3334 8.94565 17.2456 8.73369 17.0893 8.57741C16.933 8.42113 16.721 8.33333 16.5 8.33333ZM16.5 4.16667H1.50002C1.27901 4.16667 1.06704 4.25446 0.910765 4.41074C0.754484 4.56702 0.666687 4.77899 0.666687 5C0.666687 5.22101 0.754484 5.43298 0.910765 5.58926C1.06704 5.74554 1.27901 5.83333 1.50002 5.83333H16.5C16.721 5.83333 16.933 5.74554 17.0893 5.58926C17.2456 5.43298 17.3334 5.22101 17.3334 5C17.3334 4.77899 17.2456 4.56702 17.0893 4.41074C16.933 4.25446 16.721 4.16667 16.5 4.16667Z"
                      fill="currentColor"></path>
                  </svg>
                </button>
              </div>
            ) : pathName.startsWith("/myshop") ? (
              <div>
                <button
                  onClick={() => {
                    handleToggleMenu();
                  }}
                  className="px-2 py-3 text-blue-500 bg-blue-100 rounded dark:text-gray-400 dark:bg-gray-800">
                  <svg
                    width="18"
                    height="10"
                    viewBox="0 0 18 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M1.50002 1.66667H16.5C16.721 1.66667 16.933 1.57887 17.0893 1.42259C17.2456 1.26631 17.3334 1.05435 17.3334 0.833333C17.3334 0.61232 17.2456 0.400358 17.0893 0.244078C16.933 0.0877975 16.721 0 16.5 0H1.50002C1.27901 0 1.06704 0.0877975 0.910765 0.244078C0.754484 0.400358 0.666687 0.61232 0.666687 0.833333C0.666687 1.05435 0.754484 1.26631 0.910765 1.42259C1.06704 1.57887 1.27901 1.66667 1.50002 1.66667V1.66667ZM16.5 8.33333H1.50002C1.27901 8.33333 1.06704 8.42113 0.910765 8.57741C0.754484 8.73369 0.666687 8.94565 0.666687 9.16667C0.666687 9.38768 0.754484 9.59964 0.910765 9.75592C1.06704 9.9122 1.27901 10 1.50002 10H16.5C16.721 10 16.933 9.9122 17.0893 9.75592C17.2456 9.59964 17.3334 9.38768 17.3334 9.16667C17.3334 8.94565 17.2456 8.73369 17.0893 8.57741C16.933 8.42113 16.721 8.33333 16.5 8.33333ZM16.5 4.16667H1.50002C1.27901 4.16667 1.06704 4.25446 0.910765 4.41074C0.754484 4.56702 0.666687 4.77899 0.666687 5C0.666687 5.22101 0.754484 5.43298 0.910765 5.58926C1.06704 5.74554 1.27901 5.83333 1.50002 5.83333H16.5C16.721 5.83333 16.933 5.74554 17.0893 5.58926C17.2456 5.43298 17.3334 5.22101 17.3334 5C17.3334 4.77899 17.2456 4.56702 17.0893 4.41074C16.933 4.25446 16.721 4.16667 16.5 4.16667Z"
                      fill="currentColor"></path>
                  </svg>
                </button>
              </div>
            ) : (
              ""
            )}
            <div className="ml-2">
              <Logo />
            </div>
            <div className="hidden lg:flex space-x-3 flex-1 lg:ml-8">
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
            <div className="flex items-center">
              <div className="justify-center hidden mr-4 md:flex">
                <div className=" xl:w-96">
                  <div className="relative flex flex-wrap items-center w-full ">
                    {/* <div className="flex flex-row items-center">
                      <FiSearch className=" text-gray-500 group-focus-within:text-darkText duration-200" />
                      <input
                        type="search"
                        className="placeholder:text-sm outline-none rounded-md form-control relative flex-auto min-w-0 block w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white  dark:text-gray-100  border border-solid border-gray-300 dark:border-gray-800 transition ease-in-out m-0 focus:text-gray-700 focus:bg-white dark:bg-gray-800  focus:border-b dark:border-gray-700lue-600 focus:outline-none"
                        placeholder="Search"
                      />
                    </div> */}
                    <div className="ml-2 bg-white hidden sm:flex items-center gap-x-1 border-[1px] border-lightText/50 rounded-full px-4 py-1.5 focus-within:border-orange-600 group">
                      <FiSearch className=" text-gray-500 group-focus-within:text-darkText duration-200" />
                      <input
                        type="text"
                        placeholder="Search"
                        className=" placeholder:text-sm flex-1 outline-none"
                      />
                    </div>
                    {/* <button
                      className="btn i px-6 py-2.5 bg-blue-600 dark:bg-blue-300 dark:hover:bg-blue-400  dark:text-gray-900 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700  focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out flex items-center"
                      type="button"
                      id="button-addon2"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        className="bi bi-search"
                        viewBox="0 0 16 16"
                      >
                        <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                      </svg>
                    </button> */}
                  </div>
                </div>
              </div>
              {/* <div className="relative mr-4 ">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="text-gray-400"
                    viewBox="0 0 16 16"
                  >
                    <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
                    <path d="M3 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM3 6a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9A.5.5 0 0 1 3 6zm0 2.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5z" />
                  </svg>
                </span>
              </div> */}
              <div className="block mr-4 md:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="text-gray-400"
                  viewBox="0 0 16 16">
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <div className="relative mr-4 ">
                <span>
                  <div className="absolute top-0 right-0 w-2 h-2 bg-red-400 rounded-full"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    className="text-gray-400"
                    viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                  </svg>
                </span>
              </div>
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
              {session ? (
                <div className="relative text-left lg:inline-block">
                  <div
                    // ref={profileButtonRef}
                    onClick={() => {
                      handleToggleProfile();
                    }}
                    className="lg:block">
                    <button className="flex items-center">
                      {/* <div className="hidden mr-3 text-right md:block">
                        <p className="text-sm font-bold text-black dark:text-gray-400">
                          {" "}
                          Doe
                        </p>
                      </div> */}
                      <div className="mr-2">
                        <Image
                          width={250}
                          height={250}
                          src="/images/avatar.png"
                          className="object-cover object-right w-10 h-10 rounded-full"
                          alt="person"
                        />
                      </div>
                      <span>
                        <svg
                          className="text-gray-400"
                          width="10"
                          height="6"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg">
                          <path
                            d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z"
                            fill="currentColor"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div
                    id="dropdown_profile"
                    className={`${
                      profileMenu ? "block" : "hidden"
                    } absolute right-0 w-48 mt-3 origin-top-right bg-white rounded shadow dark:bg-gray-800 dark:text-gray-100 `}>
                    <div className="py-1">
                      <Link
                        onClick={() => {
                          setProfileMenu(false);
                        }}
                        href="/profile"
                        className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <svg
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <circle cx="12" cy="12" r="3"></circle>
                          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                        </svg>
                        Account
                      </Link>

                      <Link
                        onClick={() => {
                          setProfileMenu(false);
                        }}
                        href="/profile/orders"
                        className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <div className="mr-2">
                          <ClipboardList size={18} />
                        </div>
                        Order
                      </Link>
                      <Link
                        onClick={() => {
                          setProfileMenu(false);
                        }}
                        href="/profile/address"
                        className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                        <div className="mr-2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            stroke-width="2"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            className="lucide lucide-book-user">
                            <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
                            <circle cx="12" cy="8" r="2" />
                            <path d="M15 13a3 3 0 1 0-6 0" />
                          </svg>
                        </div>
                        Address
                      </Link>
                      <hr />
                      {session?.is_supplier == 1 ? (
                        <Link
                          onClick={() => {
                            setProfileMenu(false);
                          }}
                          href={`${process.env.REFERRAL_PAGE}/supplier`}
                          className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                          <div className="mr-2">
                            <LucidaIcon name="Store" size={18} />
                          </div>
                          Supplier
                        </Link>
                      ) : (
                        ""
                      )}
                      {session?.is_seller == 1 ? (
                        <Link
                          onClick={() => {
                            setProfileMenu(false);
                          }}
                          href={`${process.env.REFERRAL_PAGE}/myshop`}
                          className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                          <div className="mr-2">
                            <ShoppingBag name="Store" size={18} />
                          </div>
                          My Shop
                        </Link>
                      ) : (
                        ""
                      )}

                      <button
                        onClick={() => {
                          toast.loading("Loading...");
                          setProfileMenu(false);
                          onLogOut();
                          // signOut({
                          //   redirect: false,
                          //   callbackUrl: "/sign-in",
                          // });
                          toast.dismiss();
                        }}
                        className="w-full flex px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 hover:bg-gray-100">
                        <svg
                          className="mr-2"
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round">
                          <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                          <polyline points="16 17 21 12 16 7"></polyline>
                          <line x1="21" y1="12" x2="9" y2="12"></line>
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
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
            </div>
          </div>
        </nav>
        <Toaster />
      </section>
      {!startsWithAnyResult && shopData?.is_active_chat ? (
        <div className="relative">
          <button
            onClick={() => router.push(`https://wa.me/${shopData?.phone}`)}
            className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-14 right-4 sm:right-2 sm:bottom-4 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10">
            <div className="p-3 rounded-full border-4 border-white bg-green-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37" />
              </svg>
            </div>
          </button>
        </div>
      ) : null}
      {/* {!pathFloat.includes(pathName) && (
        <div className="relative">
          <button
            onClick={() => router.push("https://wa.me/6281372823564")}
            className="z-20 text-white flex flex-col shrink-0 grow-0 justify-around 
                  fixed bottom-14 right-4 sm:right-2 sm:bottom-4 rounded-lg
                  mr-1 mb-5 lg:mr-5 lg:mb-5 xl:mr-10 xl:mb-10">
            <div className="p-3 rounded-full border-4 border-white bg-green-600 text-white">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="currentColor">
                <path d="M24 11.7c0 6.45-5.27 11.68-11.78 11.68-2.07 0-4-.53-5.7-1.45L0 24l2.13-6.27a11.57 11.57 0 0 1-1.7-6.04C.44 5.23 5.72 0 12.23 0 18.72 0 24 5.23 24 11.7M12.22 1.85c-5.46 0-9.9 4.41-9.9 9.83 0 2.15.7 4.14 1.88 5.76L2.96 21.1l3.8-1.2a9.9 9.9 0 0 0 5.46 1.62c5.46 0 9.9-4.4 9.9-9.83a9.88 9.88 0 0 0-9.9-9.83m5.95 12.52c-.08-.12-.27-.19-.56-.33-.28-.14-1.7-.84-1.97-.93-.26-.1-.46-.15-.65.14-.2.29-.75.93-.91 1.12-.17.2-.34.22-.63.08-.29-.15-1.22-.45-2.32-1.43a8.64 8.64 0 0 1-1.6-1.98c-.18-.29-.03-.44.12-.58.13-.13.29-.34.43-.5.15-.17.2-.3.29-.48.1-.2.05-.36-.02-.5-.08-.15-.65-1.56-.9-2.13-.24-.58-.48-.48-.64-.48-.17 0-.37-.03-.56-.03-.2 0-.5.08-.77.36-.26.29-1 .98-1 2.4 0 1.4 1.03 2.76 1.17 2.96.14.19 2 3.17 4.93 4.32 2.94 1.15 2.94.77 3.47.72.53-.05 1.7-.7 1.95-1.36.24-.67.24-1.25.17-1.37" />
              </svg>
            </div>
          </button>
        </div>
      )} */}
    </>
  );
};

export default HeaderFront;
