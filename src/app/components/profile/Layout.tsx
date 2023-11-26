"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const pathName = usePathname();
  // console.log(pathName);
  return (
    <div>
      <div className="mx-4 min-h-screen max-w-screen-xl sm:mx-8 xl:mx-auto pl-4">
        <h1 className="border-b py-6 text-4xl font-semibold">Profile</h1>
        <div className="grid grid-cols-8 pt-3 sm:grid-cols-10">
          <div className="relative my-4 w-80 sm:hidden">
            <input
              className="peer hidden"
              type="checkbox"
              name="select-1"
              id="select-1"
            />
            <label
              htmlFor="select-1"
              className="flex w-full cursor-pointer select-none rounded-lg border p-2 px-3 text-sm text-gray-700 ring-blue-700 peer-checked:ring">
              Accounts
            </label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="pointer-events-none absolute right-0 top-3 ml-auto mr-5 h-4 text-slate-700 transition peer-checked:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 9l-7 7-7-7"
              />
            </svg>
            <ul className="max-h-0 select-none flex-col overflow-hidden rounded-b-lg shadow-md transition-all duration-300 peer-checked:max-h-56 peer-checked:py-3">
              <Link href={`/profile/address`}>
                <li
                  className={`${
                    pathName == "/profile/address"
                      ? "border-l-2  border-l-blue-700 text-blue-700"
                      : ""
                  } mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`}>
                  Address
                </li>
              </Link>
              <Link href={`/profile/orders`}>
                <li
                  className={`${
                    pathName.startsWith("/profile/orders")
                      ? "border-l-2  border-l-blue-700 text-blue-700"
                      : ""
                  } mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`}>
                  Orders
                </li>
              </Link>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Billing
              </li>
              <Link href={"/profile/notifications"}>
                <li
                  className={`${
                    pathName == "/profile/notifications"
                      ? "border-l-2  border-l-blue-700 text-blue-700"
                      : ""
                  } mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`}>
                  Notifications
                </li>
              </Link>
              <Link href={`/profile`}>
                <li
                  className={`mt-5 cursor-pointer ${
                    pathName == "/profile"
                      ? "border-l-2  border-l-blue-700 text-blue-700"
                      : ""
                  }  px-2 py-2 font-semibold  transition hover:border-l-blue-700 hover:text-blue-700`}>
                  Accounts
                </li>
              </Link>
            </ul>
          </div>

          <div className="col-span-2 hidden sm:block">
            <ul>
              <Link href={`/profile/address`}>
                <li
                  className={`${
                    pathName == "/profile/address"
                      ? "border-l-2  border-l-blue-700 text-blue-700"
                      : ""
                  } mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`}>
                  Address
                </li>
              </Link>
              <Link href={`/profile/orders`}>
                <li
                  className={`${
                    pathName.startsWith("/profile/orders")
                      ? "border-l-2  border-l-blue-700 text-blue-700"
                      : ""
                  } mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`}>
                  Orders
                </li>
              </Link>
              <li className="mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700">
                Billing
              </li>
              <Link href={"/profile/notifications"}>
                <li
                  className={`${
                    pathName == "/profile/notifications"
                      ? "border-l-2  border-l-blue-700 text-blue-700"
                      : ""
                  } mt-5 cursor-pointer border-l-2 border-transparent px-2 py-2 font-semibold transition hover:border-l-blue-700 hover:text-blue-700`}>
                  Notifications
                </li>
              </Link>
              <Link href={`/profile`}>
                <li
                  className={`mt-5 cursor-pointer ${
                    pathName == "/profile"
                      ? "border-l-2  border-l-blue-700 text-blue-700"
                      : ""
                  }  px-2 py-2 font-semibold  transition hover:border-l-blue-700 hover:text-blue-700`}>
                  Accounts
                </li>
              </Link>
            </ul>
          </div>
          <div className="col-span-8 overflow-hidden rounded-xl sm:bg-gray-50 sm:px-8 sm:shadow">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
