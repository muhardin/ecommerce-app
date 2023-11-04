"use client";
import { useState } from "react";
import Image from "next/image";
import { Icons } from "../ui/Icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { RootState } from "@/redux/store";
import { useDispatch, useSelector } from "react-redux";
import { toggleProfileMenu } from "@/redux/profileSlice";
import { Wallet } from "lucide-react";
import MenuProfile from "../menu/MenuProfile";

const SupplierLayoutComponent = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  function toggleOpen() {
    setOpen(!open);
  }
  const isOpen = useSelector((state: RootState) => state.profile.isOpen);
  const pathName = usePathname();

  // console.log(isOpen);
  return (
    <div className="bg-gray-100 xl:h-screen dark:bg-gray-800">
      <div className="body-content">
        <div className="relative lg:block navbar-menu">
          <div
            className={`w-[0px] ${
              isOpen ? "w-[280px]" : "w-[0px]"
            } fixed top-16 transition-all lg:mt-0 z-40 mt-0 left-0 dark:bg-gray-900 bottom-0 flex flex-col lg:border-none border-r border-gray-200 dark:border-gray-800 bg-gray-50 overflow-hidden `}
            id="sidenav"
          >
            <div className="flex items-center w-full px-4 pt-4 pb-4 border-b border-gray-200 dark:border-gray-700">
              <a href="#">
                <div className="flex items-center ml-2">
                  <h2 className="ml-3 text-lg font-bold text-gray-700 dark:text-gray-400 whitespace-nowrap">
                    Supplier
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
                    href="/supplier"
                    className={`${
                      pathName == "/supplier"
                        ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
                        : "text-gray-700 hover:bg-gray-100"
                    } flex items-center px-8 py-4  dark:text-gray-200 dark:bg-blue-500 dark:hover:bg-gray-700 `}
                  >
                    <span className="inline-block mr-3">
                      <Icons.home />
                    </span>
                    <span>Dashboard</span>
                  </Link>
                </li>
                <li>
                  <MenuProfile path="supplier" />
                </li>
                <li>
                  <details className="group">
                    <summary
                      className={`${
                        pathName == "/supplier/order"
                          ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
                          : "text-gray-700 hover:bg-gray-100"
                      } cursor-pointer flex items-center px-8 py-4  dark:text-gray-200 dark:bg-blue-500 dark:hover:bg-gray-700 `}
                    >
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
                        >
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
                          data-config-id="auto-svg-3-1"
                        >
                          <path
                            d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </summary>
                    <div
                      className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu"
                      x-show="open"
                    >
                      <ul className="text-sm ">
                        <li>
                          <Link
                            onClick={() => {
                              // toggleOpen();
                              dispatch(toggleProfileMenu());
                            }}
                            href="/supplier/order"
                            className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                          >
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
                            className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                          >
                            <span className="text-gray-700 dark:text-gray-400 ">
                              New Order
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                          >
                            <span className="text-gray-700 dark:text-gray-400 ">
                              Done Order
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
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
                </li>
                <li>
                  <details className="group">
                    <summary
                      className={`${
                        pathName.startsWith("/supplier/wallet")
                          ? "text-gray-100 bg-blue-600 hover:bg-blue-500"
                          : "text-gray-700 hover:bg-gray-100"
                      } cursor-pointer flex items-center px-8 py-4 group dark:text-gray-400 dark:hover:bg-gray-700 `}
                    >
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
                          data-config-id="auto-svg-3-1"
                        >
                          <path
                            d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </summary>
                    <div
                      className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu"
                      x-show="open"
                    >
                      <ul className="text-sm ">
                        <li>
                          <Link
                            onClick={() => {
                              // toggleOpen();
                              dispatch(toggleProfileMenu());
                            }}
                            href="/supplier/wallet"
                            className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                          >
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
                            href="/supplier/wallet/withdraw"
                            className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                          >
                            <span className="text-gray-700 dark:text-gray-400 ">
                              Withdraw
                            </span>
                          </Link>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                          >
                            <span className="text-gray-700 dark:text-gray-400 ">
                              Compose Email
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </details>
                </li>
                <li>
                  <details className="group">
                    <summary className="cursor-pointer flex items-center px-8 py-4 text-gray-700 group dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100">
                      <span className="inline-block mr-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-5 h-5 group-"
                          viewBox="0 0 16 16"
                        >
                          <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z" />
                          <path d="M16 12.5a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Zm-3.5-2a.5.5 0 0 0-.5.5v1h-1a.5.5 0 0 0 0 1h1v1a.5.5 0 0 0 1 0v-1h1a.5.5 0 0 0 0-1h-1v-1a.5.5 0 0 0-.5-.5Z" />
                        </svg>
                      </span>
                      <span> Email </span>
                      <span className="inline-block ml-auto sidenav-arrow">
                        <svg
                          className="w-3 h-3 group-"
                          viewBox="0 0 10 6"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          data-config-id="auto-svg-3-1"
                        >
                          <path
                            d="M9.08329 0.666626C8.74996 0.333293 8.24996 0.333293 7.91663 0.666626L4.99996 3.58329L2.08329 0.666626C1.74996 0.333293 1.24996 0.333293 0.916626 0.666626C0.583293 0.999959 0.583293 1.49996 0.916626 1.83329L4.41663 5.33329C4.58329 5.49996 4.74996 5.58329 4.99996 5.58329C5.24996 5.58329 5.41663 5.49996 5.58329 5.33329L9.08329 1.83329C9.41663 1.49996 9.41663 0.999959 9.08329 0.666626Z"
                            fill="currentColor"
                          ></path>
                        </svg>
                      </span>
                    </summary>
                    <div
                      className="pl-3 ml-3 transition border-gray-500 dropdown-section nested-menu"
                      x-show="open"
                    >
                      <ul className="text-sm ">
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                          >
                            <span className="text-gray-700 dark:text-gray-400 ">
                              Inbox
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                          >
                            <span className="text-gray-700 dark:text-gray-400 ">
                              Read Email
                            </span>
                          </a>
                        </li>
                        <li>
                          <a
                            href="#"
                            className="flex items-center py-3 pl-8 pr-4 text-gray-700 rounded dark:text-gray-400 dark:hover:bg-gray-700 hover:bg-gray-100 "
                          >
                            <span className="text-gray-700 dark:text-gray-400 ">
                              Compose Email
                            </span>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </details>
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
                        <path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM2 2a1 1 0 0 0-1 1v11a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1H2z" />
                        <path d="M2.5 4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H3a.5.5 0 0 1-.5-.5V4z" />
                      </svg>
                    </span>
                    <span> Calendar </span>
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
                        <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                        <path
                          fillRule="evenodd"
                          d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5z"
                        />
                      </svg>
                    </span>
                    <span> Team </span>
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
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div
          className={`transition-all ${isOpen ? " md:ml-[280px]" : "md:ml-0"}`}
          id="dash"
        >
          {/* <section className="sticky top-0 z-40 px-3 py-3 bg-white shadow dark:text-gray-100 dark:bg-gray-900 lg:px-5">
            <nav className="relative">
              <div className="flex items-center justify-between">
                <div>
                  <button
                    onClick={() => {
                      toggleOpen();
                    }}
                    className="px-2 py-3 text-blue-500 bg-blue-100 rounded dark:text-gray-400 dark:bg-gray-800"
                  >
                    <svg
                      width="18"
                      height="10"
                      viewBox="0 0 18 10"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M1.50002 1.66667H16.5C16.721 1.66667 16.933 1.57887 17.0893 1.42259C17.2456 1.26631 17.3334 1.05435 17.3334 0.833333C17.3334 0.61232 17.2456 0.400358 17.0893 0.244078C16.933 0.0877975 16.721 0 16.5 0H1.50002C1.27901 0 1.06704 0.0877975 0.910765 0.244078C0.754484 0.400358 0.666687 0.61232 0.666687 0.833333C0.666687 1.05435 0.754484 1.26631 0.910765 1.42259C1.06704 1.57887 1.27901 1.66667 1.50002 1.66667V1.66667ZM16.5 8.33333H1.50002C1.27901 8.33333 1.06704 8.42113 0.910765 8.57741C0.754484 8.73369 0.666687 8.94565 0.666687 9.16667C0.666687 9.38768 0.754484 9.59964 0.910765 9.75592C1.06704 9.9122 1.27901 10 1.50002 10H16.5C16.721 10 16.933 9.9122 17.0893 9.75592C17.2456 9.59964 17.3334 9.38768 17.3334 9.16667C17.3334 8.94565 17.2456 8.73369 17.0893 8.57741C16.933 8.42113 16.721 8.33333 16.5 8.33333ZM16.5 4.16667H1.50002C1.27901 4.16667 1.06704 4.25446 0.910765 4.41074C0.754484 4.56702 0.666687 4.77899 0.666687 5C0.666687 5.22101 0.754484 5.43298 0.910765 5.58926C1.06704 5.74554 1.27901 5.83333 1.50002 5.83333H16.5C16.721 5.83333 16.933 5.74554 17.0893 5.58926C17.2456 5.43298 17.3334 5.22101 17.3334 5C17.3334 4.77899 17.2456 4.56702 17.0893 4.41074C16.933 4.25446 16.721 4.16667 16.5 4.16667Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </button>
                </div>
                <div className="flex items-center">
                  <div className="justify-center hidden mr-4 md:flex">
                    <div className=" xl:w-96">
                      <div className="relative flex flex-wrap items-center w-full ">
                        <input
                          type="search"
                          className="form-control relative flex-auto min-w-0 block w-72 px-3 py-1.5 text-base font-normal text-gray-700 bg-white  dark:text-gray-100  border border-solid border-gray-300 dark:border-gray-800 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white dark:bg-gray-800  focus:border-b dark:border-gray-700lue-600 focus:outline-none"
                          placeholder="Search"
                        />
                        <button
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
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="relative mr-4 ">
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
                  </div>
                  <div className="block mr-4 md:hidden">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      fill="currentColor"
                      className="text-gray-400"
                      viewBox="0 0 16 16"
                    >
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
                        viewBox="0 0 16 16"
                      >
                        <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z" />
                      </svg>
                    </span>
                  </div>
                  <div
                    className="relative text-left lg:inline-block"
                    x-data="{ open: false }"
                  >
                    <div className="lg:block">
                      <button className="flex items-center">
                        <div className="hidden mr-3 text-right md:block">
                          <p className="text-sm font-bold text-black dark:text-gray-400">
                            {" "}
                            Doe
                          </p>
                        </div>
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
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div
                      x-show="open"
                      id="dropdown_profile"
                      className="absolute right-0 w-48 mt-3 origin-top-right bg-white rounded shadow dark:bg-gray-800 dark:text-gray-100 hidden"
                    >
                      <div className="py-1">
                        <a
                          href="#"
                          className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100"
                        >
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
                            strokeLinejoin="round"
                          >
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                          </svg>
                          Account
                        </a>
                        <a
                          href="#"
                          className="flex px-4 py-2 text-sm text-gray-700 dark:hover:bg-gray-800 dark:text-gray-400 hover:bg-gray-100"
                        >
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
                            strokeLinejoin="round"
                          >
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                          </svg>
                          Logout
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </section> */}
          {children}
        </div>
      </div>
    </div>
  );
};

export default SupplierLayoutComponent;
