"use client";
import { toggleProfileMenu } from "@/redux/profileSlice";
import { RootState } from "@/redux/store";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MenuProfile from "../menu/MenuProfile";
import { Icons } from "../ui/Icons";
import { Container, LogOut, Wallet } from "lucide-react";
import MenuLogout from "./MenuLogout";
import { signOut } from "next-auth/react";
import toast from "react-hot-toast";

const SideBarWeb = () => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  const isOpen = useSelector((state: RootState) => state.profile.isOpen);
  const pathName = usePathname();
  const route = useRouter();
  const onSignOut = async () => {
    toast.loading("loading...");
    await signOut({ redirect: false });
    route.push("/web/sign-in");
    toast.dismiss();
  };
  return (
    <div className="relative lg:block navbar-menu">
      <div
        className={`w-[0px] ${
          isOpen ? "w-[280px]" : "w-[0px]"
        } fixed top-16 transition-all lg:mt-0 z-40 mt-0 left-0 dark:bg-gray-900 bottom-0 flex flex-col lg:border-none border-r border-gray-200 dark:border-gray-800 bg-bodyColor overflow-hidden `}
        id="sidenav">
        <div className="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-200 dark:border-gray-700">
          <a href="#">
            <div className="flex items-center ml-2">
              <h2 className="ml-3 text-lg font-bold text-gray-700 dark:text-gray-400 whitespace-nowrap">
                My Shop
              </h2>
            </div>
          </a>
        </div>
        {/* <div>
      <div className="overflow-hidden ">
        <img
          src="https://i.postimg.cc/K8Rq5BCD/pexels-pavel-danilyuk-8381916.jpg"
          alt=""
          className="object-cover object-top w-full h-32"
        />
      </div>
      <div className="relative w-32 h-32 mx-auto -mt-16 overflow-hidden border-4 border-white rounded-full">
        <img
          src="https://i.postimg.cc/RhQYkKYk/pexels-italo-melo-2379005.jpg"
          alt=""
          className="object-cover object-top w-full h-32 "
        />
      </div>
      <div className="flex justify-center ">
        <div>
          <h2 className="text-xl font-semibold dark:text-gray-300 ">
            John Doe
          </h2>
          <span className="text-sm font-medium text-gray-600">
            john@gmail.com
          </span>
        </div>
      </div>
    </div> */}

        <div className="pb-6 mt-4 overflow-x-hidden overflow-y-auto ">
          <ul className="mb-8 text-sm">
            <li>
              <Link
                onClick={() => {
                  // toggleOpen();
                  dispatch(toggleProfileMenu());
                }}
                href="/myshop"
                className={`${
                  pathName == "/myshop"
                    ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
                    : "text-gray-700 hover:bg-gray-100"
                } flex items-center px-8 py-4  dark:text-gray-200 dark:bg-blue-500 dark:hover:bg-gray-700 `}>
                <span className="inline-block mr-3">
                  <Icons.home />
                </span>
                <span>Dashboard</span>
              </Link>
            </li>

            <li>
              <MenuProfile path="myshop" />
            </li>
            <li>
              <details className="group">
                <summary
                  className={`${
                    pathName == "/supplier/order"
                      ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
                      : "text-gray-700 hover:bg-gray-100"
                  } cursor-pointer flex items-center px-8 py-4  dark:text-gray-200 dark:bg-blue-500 dark:hover:bg-gray-700 `}>
                  <span className="inline-block mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M6 2L3 6v14c0 1.1.9 2 2 2h14a2 2 0 0 0 2-2V6l-3-4H6zM3.8 6h16.4M16 10a4 4 0 1 1-8 0" />
                    </svg>
                  </span>
                  <div className="flex flex-row items-center justify-end gap-1">
                    <span> Orders </span>
                    <span className="flex flex-col items-center text-center justify-center w-6 h-6 px-2 ml-auto text-xs text-indigo-600 bg-indigo-100 rounded dark:group-hover:bg-gray-900 dark:bg-gray-700 dark:text-gray-100">
                      5
                    </span>
                  </div>
                  <span className="inline-block ml-auto sidenav-arrow">
                    <svg
                      className="w-3 h-3 group-"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-3-1">
                      <path
                        d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                </summary>
                <div
                  className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu"
                  x-show="open">
                  <ul className="text-sm ">
                    <li>
                      <Link
                        onClick={() => {
                          // toggleOpen();
                          dispatch(toggleProfileMenu());
                        }}
                        href="/myshop/orders"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 ">
                        <span className="text-gray-700 dark:text-gray-400 ">
                          All Orders
                        </span>
                        <span className="flex items-center justify-center w-6 h-6 px-2 ml-auto text-xs text-indigo-600 bg-indigo-100 rounded dark:group-hover:bg-gray-900 dark:bg-gray-700 dark:text-gray-100">
                          5
                        </span>
                      </Link>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 ">
                        <span className="text-gray-700 dark:text-gray-400 ">
                          New Order
                        </span>
                      </a>
                    </li>
                    <li>
                      <a
                        href="#"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 ">
                        <span className="text-gray-700 dark:text-gray-400 ">
                          Done Order
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </details>
            </li>
            {/* <li>
              <details className="group">
                <summary
                  className={`${
                    pathName.startsWith("/myshop/product")
                      ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
                      : "text-gray-700 hover:bg-gray-100"
                  } rounded-md cursor-pointer flex items-center px-8 py-4  dark:text-gray-200 dark:bg-blue-500 dark:hover:bg-gray-700 `}>
                  <span className="inline-block mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="w-5 h-5 dark:group-hover:text-gray-300 bi bi-basket"
                      viewBox="0 0 16 16">
                      <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"></path>
                    </svg>
                  </span>
                  <div className="flex flex-row items-center justify-end gap-1">
                    <span> Product </span>
                  </div>
                  <span className="inline-block ml-auto sidenav-arrow">
                    <svg
                      className="w-3 h-3 group-"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-3-1">
                      <path
                        d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                </summary>
                <div
                  className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu"
                  x-show="open">
                  <ul className="text-sm ">
                    <li>
                      <Link
                        onClick={() => {
                          dispatch(toggleProfileMenu());
                        }}
                        href="/myshop/product/available"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 ">
                        <span className="text-gray-700 dark:text-gray-400 ">
                          Catalog
                        </span>
                        <span className="flex items-center justify-center w-6 h-6 px-2 ml-auto text-xs text-indigo-600 bg-indigo-100 rounded dark:group-hover:bg-gray-900 dark:bg-gray-700 dark:text-gray-100">
                          5
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          dispatch(toggleProfileMenu());
                        }}
                        href="/myshop/product/myproduct"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 ">
                        <span className="text-gray-700 dark:text-gray-400 ">
                          My Products
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </details>
            </li> */}

            {/* <li>
          <a
            href="#"
            className="flex items-center px-8 py-4 text-gray-700 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100"
          >
            <span className="inline-block mr-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="w-5 h-5 dark:group-hover:text-gray-300 bi bi-basket"
                viewBox="0 0 16 16"
              >
                <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"></path>
              </svg>
            </span>
            <span> Products </span>
            <span className="flex items-center justify-center w-6 h-6 px-2 ml-auto text-xs text-indigo-600 bg-indigo-100 rounded dark:group-hover:bg-gray-900 dark:bg-gray-700 dark:text-gray-100">
              5
            </span>
          </a>
        </li> */}
            <li>
              <details className="group">
                <summary
                  className={`${
                    pathName.startsWith("/myshop/wallet")
                      ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
                      : "text-gray-700 hover:bg-gray-100"
                  } cursor-pointer flex items-center px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 `}>
                  <span className="inline-block mr-3">
                    <Wallet />
                  </span>
                  <span> Wallet </span>
                  <span className="inline-block ml-auto sidenav-arrow">
                    <svg
                      className="w-3 h-3 group-"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-3-1">
                      <path
                        d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                </summary>
                <div
                  className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu"
                  x-show="open">
                  <ul className="text-sm ">
                    <li>
                      <Link
                        onClick={() => {
                          // toggleOpen();
                          dispatch(toggleProfileMenu());
                        }}
                        href="/myshop/wallet"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 ">
                        <span className="text-gray-700 dark:text-gray-400 ">
                          History
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          dispatch(toggleProfileMenu());
                        }}
                        href="/myshop/wallet/withdraw"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 ">
                        <span className="text-gray-700 dark:text-gray-400 ">
                          Withdraw
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </details>
            </li>

            <li>
              <details className="group">
                <summary
                  className={`${
                    pathName.startsWith("/myshop/team")
                      ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
                      : "text-gray-700 hover:bg-gray-100"
                  } cursor-pointer flex items-center px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 `}>
                  <span className="inline-block mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-users">
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  </span>
                  <span> Referral </span>
                  <span className="inline-block ml-auto sidenav-arrow">
                    <svg
                      className="w-3 h-3 group-"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-3-1">
                      <path
                        d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                </summary>
                <div
                  className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu"
                  x-show="open">
                  <ul className="text-sm ">
                    {/* <li>
                      <Link
                        onClick={() => {
                          // toggleOpen();
                          dispatch(toggleProfileMenu());
                        }}
                        href="/myshop/team/create"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                      >
                        <span className="text-gray-700 dark:text-gray-400 ">
                          New Referral
                        </span>
                      </Link>
                    </li> */}
                    <li>
                      <Link
                        onClick={() => {
                          dispatch(toggleProfileMenu());
                        }}
                        href="/myshop/team/"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 ">
                        <span className="text-gray-700 dark:text-gray-400 ">
                          Referral List
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </details>
            </li>
            {/* <li>
              <details className="group">
                <summary
                  className={`${
                    pathName.startsWith("/myshop/store")
                      ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
                      : "text-gray-700 hover:bg-gray-100"
                  } cursor-pointer flex items-center px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 `}>
                  <span className="inline-block mr-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-store">
                      <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                      <path d="M2 7h20" />
                      <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
                    </svg>
                  </span>
                  <span> Store </span>
                  <span className="inline-block ml-auto sidenav-arrow">
                    <svg
                      className="w-3 h-3 group-"
                      viewBox="0 0 10 6"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      data-config-id="auto-svg-3-1">
                      <path
                        d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                        fill="currentColor"></path>
                    </svg>
                  </span>
                </summary>
                <div
                  className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu"
                  x-show="open">
                  <ul className="text-sm ">
                    <li>
                      <Link
                        onClick={() => {
                          dispatch(toggleProfileMenu());
                        }}
                        href="/myshop/store/"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 ">
                        <span className="text-gray-700 dark:text-gray-400 ">
                          List
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          dispatch(toggleProfileMenu());
                        }}
                        href="/myshop/store/setting"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                      >
                        <span className="text-gray-700 dark:text-gray-400 ">
                          Setting
                        </span>
                      </Link>
                    </li>
                    <li>
                      <Link
                        onClick={() => {
                          dispatch(toggleProfileMenu());
                        }}
                        href="/myshop/store/customization"
                        className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                      >
                        <span className="text-gray-700 dark:text-gray-400 ">
                          Store Customization
                        </span>
                      </Link>
                    </li>
                  </ul>
                </div>
              </details>
            </li> */}
            <li>
              <Link
                onClick={() => {
                  // toggleOpen();
                  dispatch(toggleProfileMenu());
                }}
                href="/myshop/store/"
                className={`${
                  pathName.startsWith("/myshop/store")
                    ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
                    : "text-gray-700 hover:bg-gray-100"
                } flex items-center px-8 py-4  dark:text-gray-200 dark:bg-blue-500 dark:hover:bg-gray-700 `}>
                <span className="inline-block mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-store">
                    <path d="m2 7 4.41-4.41A2 2 0 0 1 7.83 2h8.34a2 2 0 0 1 1.42.59L22 7" />
                    <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                    <path d="M15 22v-4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4" />
                    <path d="M2 7h20" />
                    <path d="M22 7v3a2 2 0 0 1-2 2v0a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 16 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 12 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 8 12a2.7 2.7 0 0 1-1.59-.63.7.7 0 0 0-.82 0A2.7 2.7 0 0 1 4 12v0a2 2 0 0 1-2-2V7" />
                  </svg>
                </span>
                <span>Store</span>
              </Link>
            </li>
            <li>
              <button
                onClick={() => {
                  onSignOut();
                }}
                className="flex items-center px-8 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100">
                <span className="inline-block mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="lucide lucide-log-out">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                    <polyline points="16 17 21 12 16 7" />
                    <line x1="21" x2="9" y1="12" y2="12" />
                  </svg>
                </span>
                <span> Sign Out </span>
              </button>
            </li>
            {/* <li>
              <a
                href="#"
                className="flex items-center px-8 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100"
              >
                <span className="inline-block mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 group-"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                    />
                  </svg>
                </span>
                <span> Category </span>
              </a>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center px-8 py-4 text-gray-700 dark:text-gray-400 group dark:hover:bg-gray-700 hover:bg-gray-100"
              >
                <span className="inline-block mr-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="w-5 h-5 group-"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                    <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
                  </svg>
                </span>
                <span> Blog </span>
              </a>
            </li> */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SideBarWeb;
