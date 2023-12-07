import Link from "next/link";
import { Icons } from "./Icons";
import { BaggageClaim, Home, ShoppingCart, User, Wallet } from "lucide-react";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useDispatch, useSelector } from "react-redux";
import { toggleProfileMenu } from "@/redux/profileSlice";
import { RootState } from "@/redux/store";
import {
  checkSupplierOrder,
  delSupplierOrder,
  deleteUser,
} from "@/redux/shoppingSlice";
import { StateProps } from "../../../../type";
const BottomNavigationSupplier = () => {
  const isOpen = useSelector((state: RootState) => state.profile.isOpen);
  const dispatch = useDispatch();
  const handleToggleMenu = () => {
    dispatch(toggleProfileMenu());
  };
  const pathName = usePathname();
  const { data: session } = useSession();
  const fetcher = (url: string) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  const [statusFilter, setStatusFilter] = useState<string>("");
  const url = `${process.env.SERVER_ENDPOINT}/api/supplier-board/order/count`;
  const {
    data: ordersCount,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 10000,
  });

  useEffect(() => {
    if (ordersCount) {
      dispatch(
        checkSupplierOrder({
          count: ordersCount,
        })
      );
    }
  }, [session, dispatch, ordersCount]);

  return (
    <div className="md:hidden fixed bottom-0 px-5 pt-0 bg-sky-400 shadow-lg rounded-2xl w-full rounded-b-none">
      <div className="flex flex-row space-x-3 justify-between">
        <div className="flex group">
          <Link
            href="/supplier"
            className={`${
              pathName === "/supplier" ? "text-yellow-500" : ""
            } p-3 text-slate-100 hover:text-yellow-500`}>
            <span className="flex flex-col items-center">
              <Home />

              <span className="text-xs mb-2 transition-all duration-200">
                Home
              </span>

              <span
                className={`${
                  pathName === "/supplier" ? "bg-yellow-500" : ""
                } group-hover:bg-yellow-500 h-1 w-5 rounded-full 
                hover:h-3 hover:w-3 transition-all duration-150 delay-100`}></span>
            </span>
          </Link>
        </div>
        <div className="flex group">
          <Link
            href="/supplier/wallet"
            className={`${
              pathName.startsWith("/supplier/wallet")
                ? "text-yellow-500"
                : "text-white"
            }  p-3 hover:text-yellow-500`}>
            <span className="flex flex-col items-center">
              <Wallet />

              <span className="text-xs mb-2 transition-all duration-200">
                Wallet
              </span>

              <span
                className={`${
                  pathName.startsWith("/supplier/wallet") ? "bg-yellow-500" : ""
                } group-hover:bg-yellow-500 h-1 w-5 rounded-full 
                hover:h-3 hover:w-3 transition-all duration-150 delay-100`}></span>
            </span>
          </Link>
        </div>
        <div className="flex group">
          <Link
            href="/supplier/order"
            className={`${
              pathName.startsWith("/supplier/order")
                ? "text-yellow-500"
                : "text-slate-100"
            } p-3  hover:text-yellow-500`}>
            <span className="flex flex-col items-center relative">
              {ordersCount ? (
                <div className="p-2 rounded-full bg-red-700 text-white font-mono absolute w-6 h-6 items-center -right-3 -top-2 flex justify-center">
                  <span>{ordersCount}</span>
                </div>
              ) : (
                ""
              )}
              <BaggageClaim />
              <span className="text-xs mb-2 transition-all duration-200">
                Order
              </span>

              <span
                className={`${
                  pathName.startsWith("/supplier/order") ? "bg-yellow-500" : ""
                } group-hover:bg-yellow-500 h-1 w-5 rounded-full 
                hover:h-3 hover:w-3 transition-all duration-150 delay-100`}></span>
            </span>
          </Link>
        </div>

        <div className="flex group">
          <Link
            href="/supplier/profile/account"
            className="p-3 text-slate-100 hover:text-yellow-500">
            <span className="flex flex-col items-center">
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
                className="lucide lucide-user">
                <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>

              <span className="text-xs mb-2 transition-all duration-200">
                Account
              </span>

              <span
                className="h-2 w-2 rounded-full group-hover:bg-yellow-500
									transition-all duration-150 delay-100"></span>
            </span>
          </Link>
        </div>
        <div className="flex group ">
          <button
            onClick={handleToggleMenu}
            className={`${
              isOpen
                ? "text-yellow-500 hover:text-yellow-500"
                : "text-slate-100"
            } p-3  `}>
            <span className="flex flex-col items-center">
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
                className="lucide lucide-menu">
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="text-xs mb-2 transition-all duration-200">
                Menu
              </span>

              <span
                className={`${
                  isOpen ? "text-yellow-500" : "text-slate-100"
                } h-2 w-2 rounded-full group-hover:bg-yellow-500
                transition-all duration-150 delay-100`}></span>
            </span>
          </button>
        </div>
      </div>
    </div>
    // <div className="fixed bottom-0 w-full max-w-md px-2 py-2 mx-auto bg-transparent shadow-xl">
    //   <div className="px-5 pt-2 bg-sky-200 shadow-lg rounded-2xl">
    //     <div className="flex flex-row space-x-3 justify-between">
    //       <div className="flex group">
    //         <a href="#" className="p-3 text-gray-400 hover:text-yellow-500">
    //           <span className="flex flex-col items-center">
    //             <Home />

    //             <span className="text-xs mb-2 transition-all duration-200">
    //               Home
    //             </span>

    //             <span
    //               className="h-2 w-2 rounded-full group-hover:bg-yellow-500
    // 							transition-all duration-150 delay-100"
    //             ></span>
    //           </span>
    //         </a>
    //       </div>

    //       <div className="flex group">
    //         <a href="#" className="p-3 text-gray-400 hover:text-yellow-500">
    //           <span className="flex flex-col items-center">
    //             <Home />

    //             <span className="text-xs mb-2 transition-all duration-200">
    //               Explore
    //             </span>

    //             <span
    //               className="h-2 w-2 rounded-full group-hover:bg-yellow-500
    // 							transition-all duration-150 delay-100"
    //             ></span>
    //           </span>
    //         </a>
    //       </div>

    //       <div className="flex group">
    //         <a href="#" className="p-3 text-yellow-500 hover:text-yellow-500">
    //           <span className="flex flex-col items-center">
    //             <Wallet />

    //             <span className="text-xs mb-2 transition-all duration-200">
    //               Wallet
    //             </span>

    //             <span
    //               className="h-1 w-5 rounded-full bg-yellow-500 group-hover:bg-yellow-500
    // 							hover:h-3 hover:w-3 transition-all duration-150 delay-100"
    //             ></span>
    //           </span>
    //         </a>
    //       </div>

    //       <div className="flex group">
    //         <a href="#" className="p-3 text-gray-400 hover:text-yellow-500">
    //           <span className="flex flex-col items-center">
    //             <ShoppingCart />

    //             <span className="text-xs mb-2 transition-all duration-200">
    //               Cart
    //             </span>

    //             <span
    //               className="h-2 w-2 rounded-full group-hover:bg-yellow-500
    // 							transition-all duration-150 delay-100"
    //             ></span>
    //           </span>
    //         </a>
    //       </div>

    //       <div className="flex group">
    //         <a href="#" className="p-3 text-gray-400 hover:text-yellow-500">
    //           <span className="flex flex-col items-center">
    //             <User />
    //             <span className="text-xs mb-2 transition-all duration-200">
    //               Account
    //             </span>

    //             <span
    //               className="h-2 w-2 rounded-full group-hover:bg-yellow-500
    // 							transition-all duration-150 delay-100"
    //             ></span>
    //           </span>
    //         </a>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // <div className="fixed bottom-0 w-full flex justify-between items-center bg-yellow-600 bg-opacity-100 px-10 py-5 rounded-lg text-gray-500">
    //   <button className="p-2 rounded-full bg-white">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-8 w-8 text-pink-500"
    //       viewBox="0 0 20 20"
    //       fill="currentColor"
    //     >
    //       <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
    //     </svg>
    //   </button>
    //   <button>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-8 w-8"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
    //       />
    //     </svg>
    //   </button>
    //   <button className="p-2 rounded-full bg-pink-500">
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="text-white h-8 w-8"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M12 4v16m8-8H4"
    //       />
    //     </svg>
    //   </button>
    //   <button>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-8 w-8"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    //       />
    //     </svg>
    //   </button>
    //   <button>
    //     <svg
    //       xmlns="http://www.w3.org/2000/svg"
    //       className="h-8 w-8"
    //       fill="none"
    //       viewBox="0 0 24 24"
    //       stroke="currentColor"
    //     >
    //       <path
    //         strokeLinecap="round"
    //         strokeLinejoin="round"
    //         strokeWidth="2"
    //         d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
    //       />
    //     </svg>
    //   </button>
    // </div>

    // <div className="md:hidden fixed z-50 w-full h-16 -translate-x-1/2 bg-white border border-gray-200 rounded-t-xl shadow-lg shadow-black bottom-0 left-1/2 dark:bg-gray-700 dark:border-gray-600">
    //   <div className="grid h-full max-w-lg grid-cols-5 mx-auto">
    //     <Link
    //       href={"/supplier"}
    //       data-tooltip-target="tooltip-home"
    //       type="button"
    //       className="inline-flex flex-col items-center justify-center px-5 rounded-l-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
    //     >
    //       <svg
    //         className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //       >
    //         <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    //       </svg>
    //       <span className="sr-only">Home</span>
    //     </Link>

    //     <div
    //       id="tooltip-home"
    //       role="tooltip"
    //       className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    //     >
    //       Home
    //       <div className="tooltip-arrow" data-popper-arrow></div>
    //     </div>
    //     <Link
    //       href={"/supplier/wallet"}
    //       data-tooltip-target="tooltip-wallet"
    //       type="button"
    //       className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    //     >
    //       <svg
    //         className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //       >
    //         <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
    //         <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
    //       </svg>
    //       <span className="sr-only">Wallet</span>
    //     </Link>
    //     <div
    //       id="tooltip-wallet"
    //       role="tooltip"
    //       className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    //     >
    //       Wallet
    //       <div className="tooltip-arrow" data-popper-arrow></div>
    //     </div>
    //     <div className="flex items-center justify-center">
    //       <Link
    //         href={"/supplier/order"}
    //         data-tooltip-target="tooltip-new"
    //         className="inline-flex items-center justify-center w-10 h-10 font-medium bg-blue-600 rounded-full hover:bg-blue-700 group focus:ring-4 focus:ring-blue-300 focus:outline-none dark:focus:ring-blue-800"
    //       >
    //         <svg
    //           xmlns="http://www.w3.org/2000/svg"
    //           width="24"
    //           height="24"
    //           viewBox="0 0 24 24"
    //           fill="none"
    //           stroke="currentColor"
    //           strokeWidth="2"
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           className="lucide lucide-shopping-basket text-white"
    //         >
    //           <path d="m5 11 4-7" />
    //           <path d="m19 11-4-7" />
    //           <path d="M2 11h20" />
    //           <path d="m3.5 11 1.6 7.4a2 2 0 0 0 2 1.6h9.8c.9 0 1.8-.7 2-1.6l1.7-7.4" />
    //           <path d="m9 11 1 9" />
    //           <path d="M4.5 15.5h15" />
    //           <path d="m15 11-1 9" />
    //         </svg>
    //         <span className="sr-only">New item</span>
    //       </Link>
    //     </div>
    //     <div
    //       id="tooltip-new"
    //       role="tooltip"
    //       className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    //     >
    //       Create new item
    //       <div className="tooltip-arrow" data-popper-arrow></div>
    //     </div>
    //     <button
    //       data-tooltip-target="tooltip-settings"
    //       type="button"
    //       className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    //     >
    //       <Icons.settingsBottom />
    //       <span className="sr-only">Settings</span>
    //     </button>
    //     <div
    //       id="tooltip-settings"
    //       role="tooltip"
    //       className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    //     >
    //       Settings
    //       <div className="tooltip-arrow" data-popper-arrow></div>
    //     </div>
    //     <button
    //       data-tooltip-target="tooltip-profile"
    //       type="button"
    //       className="inline-flex flex-col items-center justify-center px-5 rounded-r-full hover:bg-gray-50 dark:hover:bg-gray-800 group"
    //     >
    //       <svg
    //         className="w-5 h-5 mb-1 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
    //         aria-hidden="true"
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="currentColor"
    //         viewBox="0 0 20 20"
    //       >
    //         <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
    //       </svg>
    //       <span className="sr-only">Profile</span>
    //     </button>
    //     <div
    //       id="tooltip-profile"
    //       role="tooltip"
    //       className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
    //     >
    //       Profile
    //       <div className="tooltip-arrow" data-popper-arrow></div>
    //     </div>
    //   </div>
    // </div>

    // <div className="md:hidden">
    //   <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600">
    //     <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
    //       <button
    //         type="button"
    //         className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    //       >
    //         <svg
    //           className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //         >
    //           <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
    //         </svg>
    //         <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
    //           Home
    //         </span>
    //       </button>
    //       <button
    //         type="button"
    //         className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    //       >
    //         <svg
    //           className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //         >
    //           <path d="M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z" />
    //           <path d="M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z" />
    //         </svg>
    //         <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
    //           Wallet
    //         </span>
    //       </button>
    //       <button
    //         type="button"
    //         className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    //       >
    //         <svg
    //           className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="none"
    //           viewBox="0 0 20 20"
    //         >
    //           <path
    //             stroke="currentColor"
    //             strokeLinecap="round"
    //             strokeLinejoin="round"
    //             strokeWidth="2"
    //             d="M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"
    //           />
    //         </svg>
    //         <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
    //           Settings
    //         </span>
    //       </button>
    //       <button
    //         type="button"
    //         className="inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group"
    //       >
    //         <svg
    //           className="w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500"
    //           aria-hidden="true"
    //           xmlns="http://www.w3.org/2000/svg"
    //           fill="currentColor"
    //           viewBox="0 0 20 20"
    //         >
    //           <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
    //         </svg>
    //         <span className="text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500">
    //           Profile
    //         </span>
    //       </button>
    //     </div>
    //   </div>
    // </div>
  );
};

export default BottomNavigationSupplier;
