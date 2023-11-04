"use client";
import { CheckIcon } from "@heroicons/react/20/solid";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import { Dialog } from "@headlessui/react";
import PageLandingPage from "./page";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

export default function LandingPageComponent() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {/* <PageLandingPage /> */}
      {/* <div className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Simple no-tricks pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Distinctio et nulla eum soluta et neque labore quibusdam. Saepe et
              quasi iusto modi velit ut non voluptas in. Explicabo id ut
              laborum.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-gray-900">
                Lifetime membership
              </h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                Lorem ipsum dolor sit amet consect etur adipisicing elit. Itaque
                amet indis perferendis blanditiis repellendus etur quidem
                assumenda.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-indigo-600">
                  What’s included
                </h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul
                role="list"
                className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6"
              >
                {includedFeatures.map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <CheckIcon
                      className="h-6 w-5 flex-none text-indigo-600"
                      aria-hidden="true"
                    />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">
                    Pay once, own it forever
                  </p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-gray-900">
                      $349
                    </span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">
                      USD
                    </span>
                  </p>
                  <a
                    href="#"
                    className="mt-10 block w-full rounded-md bg-indigo-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  >
                    Get access
                  </a>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    Invoices and receipts available for easy company
                    reimbursement
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> */}
      <div className="py-10 lg:py-12 flex flex-col lg:flex-row w-full">
        <div className="flex-shrink-0 w-full lg:w-80 mr-7 lg:mr-10 xl:mr-10 ">
          <div className="bg-white p-4 sm:p-5 lg:p-8 rounded-md sticky top-32">
            <span className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="flex-shrink-0 h-4 w-4"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect x="3" y="3" width="7" height="7"></rect>
                <rect x="14" y="3" width="7" height="7"></rect>
                <rect x="14" y="14" width="7" height="7"></rect>
                <rect x="3" y="14" width="7" height="7"></rect>
              </svg>
              <a
                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                href="/user/dashboard"
              >
                Dashboard
              </a>
            </span>
            <span className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="flex-shrink-0 h-4 w-4"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="8" y1="6" x2="21" y2="6"></line>
                <line x1="8" y1="12" x2="21" y2="12"></line>
                <line x1="8" y1="18" x2="21" y2="18"></line>
                <line x1="3" y1="6" x2="3.01" y2="6"></line>
                <line x1="3" y1="12" x2="3.01" y2="12"></line>
                <line x1="3" y1="18" x2="3.01" y2="18"></line>
              </svg>
              <a
                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                href="/user/my-orders"
              >
                My Orders
              </a>
            </span>
            <span className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="flex-shrink-0 h-4 w-4"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
              </svg>
              <a
                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                href="/user/update-profile"
              >
                Update Profile
              </a>
            </span>
            <span className="p-2 my-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
              <svg
                stroke="currentColor"
                fill="none"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke-linecap="round"
                stroke-linejoin="round"
                className="flex-shrink-0 h-4 w-4"
                aria-hidden="true"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                <polyline points="14 2 14 8 20 8"></polyline>
                <line x1="16" y1="13" x2="8" y2="13"></line>
                <line x1="16" y1="17" x2="8" y2="17"></line>
                <polyline points="10 9 9 9 8 9"></polyline>
              </svg>
              <a
                className="inline-flex items-center justify-between ml-2 text-sm font-medium w-full hover:text-emerald-600"
                href="/user/change-password"
              >
                Change Password
              </a>
            </span>
            <span className="p-2 flex font-serif items-center rounded-md hover:bg-gray-50 w-full hover:text-emerald-600">
              <span className="mr-2">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 512 512"
                  height="1em"
                  width="1em"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    d="M336 112a80 80 0 00-160 0v96"
                  ></path>
                  <rect
                    width="320"
                    height="272"
                    x="96"
                    y="208"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="32"
                    rx="48"
                    ry="48"
                  ></rect>
                </svg>
              </span>{" "}
              <button className="inline-flex items-center justify-between text-sm font-medium w-full hover:text-emerald-600">
                Pages
              </button>
            </span>
          </div>
        </div>
        <div className="w-full bg-white mt-4 lg:mt-0 p-4 sm:p-5 lg:p-8 rounded-md overflow-hidden">
          <div className="overflow-hidden">
            <h2 className="text-xl font-serif font-semibold mb-5">Dashboard</h2>
            <div className="grid gap-4 mb-8 md:grid-cols-2 xl:grid-cols-4">
              <div className="flex h-full">
                <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
                  <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-red-600 bg-red-200">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="9" cy="21" r="1"></circle>
                      <circle cx="20" cy="21" r="1"></circle>
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                      Total Orders
                    </h5>
                    <p className="text-xl font-bold font-serif leading-none text-gray-800">
                      138
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex h-full">
                <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
                  <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-orange-600 bg-orange-200">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="23 4 23 10 17 10"></polyline>
                      <polyline points="1 20 1 14 7 14"></polyline>
                      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"></path>
                    </svg>
                  </div>
                  <div>
                    <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                      Pending Orders
                    </h5>
                    <p className="text-xl font-bold font-serif leading-none text-gray-800">
                      62
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex h-full">
                <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
                  <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-indigo-600 bg-indigo-200">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect x="1" y="3" width="15" height="13"></rect>
                      <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                      <circle cx="5.5" cy="18.5" r="2.5"></circle>
                      <circle cx="18.5" cy="18.5" r="2.5"></circle>
                    </svg>
                  </div>
                  <div>
                    <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                      Processing Order
                    </h5>
                    <p className="text-xl font-bold font-serif leading-none text-gray-800">
                      15
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex h-full">
                <div className="flex items-center border border-gray-200 w-full rounded-lg p-4">
                  <div className="flex items-center justify-center p-3 rounded-full h-12 w-12 text-xl text-center mr-4 text-emerald-600 bg-emerald-200">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      stroke-width="2"
                      viewBox="0 0 24 24"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </div>
                  <div>
                    <h5 className="leading-none mb-2 text-base font-medium font-serif text-gray-700">
                      Complete Orders
                    </h5>
                    <p className="text-xl font-bold font-serif leading-none text-gray-800">
                      50
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="max-w-screen-2xl mx-auto">
              <div className="rounded-md font-serif">
                <div className="flex flex-col">
                  <h3 className="text-lg font-serif font-medium mb-5">
                    Recent Orders
                  </h3>
                  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="align-middle inline-block border border-gray-100 rounded-md min-w-full pb-2 sm:px-6 lg:px-8">
                      <div className="overflow-hidden border-b last:border-b-0 border-gray-100 rounded-md">
                        <table className="table-auto min-w-full border border-gray-100 divide-y divide-gray-200">
                          <thead className="bg-gray-50">
                            <tr className="bg-gray-100">
                              <th
                                scope="col"
                                className="text-left text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                              >
                                ID
                              </th>
                              <th
                                scope="col"
                                className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                              >
                                OrderTime
                              </th>
                              <th
                                scope="col"
                                className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                              >
                                Method
                              </th>
                              <th
                                scope="col"
                                className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                              >
                                Status
                              </th>
                              <th
                                scope="col"
                                className="text-center text-xs font-serif font-semibold px-6 py-2 text-gray-700 uppercase tracking-wider"
                              >
                                Total
                              </th>
                            </tr>
                          </thead>
                          <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                              <td className="px-5 py-3 leading-6 whitespace-nowrap">
                                <span className="uppercase text-sm font-medium">
                                  3c44
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  November 4, 2023
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">Cash</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                <span className="text-emerald-500">
                                  Delivered
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm font-bold">
                                  920.00
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-3 leading-6 whitespace-nowrap">
                                <span className="uppercase text-sm font-medium">
                                  dd86
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  November 4, 2023
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">Cash</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                <span className="text-orange-500">Pending</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm font-bold">
                                  172.72
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-3 leading-6 whitespace-nowrap">
                                <span className="uppercase text-sm font-medium">
                                  be2e
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  November 3, 2023
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">Cash</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                <span className="text-orange-500">Pending</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm font-bold">
                                  255.95
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-3 leading-6 whitespace-nowrap">
                                <span className="uppercase text-sm font-medium">
                                  252e
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  November 3, 2023
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">Cash</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                <span className="text-emerald-500">
                                  Delivered
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm font-bold">
                                  1809.14
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-3 leading-6 whitespace-nowrap">
                                <span className="uppercase text-sm font-medium">
                                  85b3
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  November 3, 2023
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">Cash</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                <span className="text-orange-500">Pending</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm font-bold">
                                  1846.93
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-3 leading-6 whitespace-nowrap">
                                <span className="uppercase text-sm font-medium">
                                  6df3
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  November 3, 2023
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">Cash</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                <span className="text-indigo-500">
                                  Processing
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm font-bold">
                                  174.00
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-3 leading-6 whitespace-nowrap">
                                <span className="uppercase text-sm font-medium">
                                  a29e
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  November 2, 2023
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">Cash</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                <span className="text-orange-500">Pending</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm font-bold">
                                  510.00
                                </span>
                              </td>
                            </tr>
                            <tr>
                              <td className="px-5 py-3 leading-6 whitespace-nowrap">
                                <span className="uppercase text-sm font-medium">
                                  fb0e
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">
                                  November 2, 2023
                                </span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm">Cash</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap font-medium text-sm">
                                <span className="text-orange-500">Pending</span>
                              </td>
                              <td className="px-5 py-3 leading-6 text-center whitespace-nowrap">
                                <span className="text-sm font-bold">
                                  132.72
                                </span>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                        <div className="paginationOrder">
                          <ul
                            className="pagination"
                            role="navigation"
                            aria-label="Pagination"
                          >
                            <li className="page-item disabled">
                              <a
                                className="page-previous-link "
                                tabIndex={-1}
                                role="button"
                                aria-disabled="true"
                                aria-label="Previous page"
                                rel="prev"
                              >
                                Previous
                              </a>
                            </li>
                            <li className="page--item activePagination">
                              <a
                                rel="canonical"
                                role="button"
                                className="page--link"
                                tabIndex={-1}
                                aria-label="Page 1 is your current page"
                                aria-current="page"
                              >
                                1
                              </a>
                            </li>
                            <li className="page--item">
                              <a
                                rel="next"
                                role="button"
                                className="page--link"
                                tabIndex={0}
                                aria-label="Page 2"
                              >
                                2
                              </a>
                            </li>
                            <li className="page--item">
                              <a
                                role="button"
                                className="page--link"
                                tabIndex={0}
                                aria-label="Page 3"
                              >
                                3
                              </a>
                            </li>
                            <li className="page--item">
                              <a
                                className="page--link"
                                role="button"
                                tabIndex={0}
                                aria-label="Jump forward"
                              >
                                ...
                              </a>
                            </li>
                            <li className="page--item">
                              <a
                                role="button"
                                className="page--link"
                                tabIndex={0}
                                aria-label="Page 16"
                              >
                                16
                              </a>
                            </li>
                            <li className="page--item">
                              <a
                                role="button"
                                className="page--link"
                                tabIndex={0}
                                aria-label="Page 17"
                              >
                                17
                              </a>
                            </li>
                            <li className="page--item">
                              <a
                                role="button"
                                className="page--link"
                                tabIndex={0}
                                aria-label="Page 18"
                              >
                                18
                              </a>
                            </li>
                            <li className="page-item">
                              <a
                                className="page-next-link"
                                tabIndex={0}
                                role="button"
                                aria-disabled="false"
                                aria-label="Next page"
                                rel="next"
                              >
                                Next
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
