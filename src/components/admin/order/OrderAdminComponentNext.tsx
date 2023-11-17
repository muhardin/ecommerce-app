"use client";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import OrderSupplierUpdate from "@/app/components/supplier/order/OrderSupplierUpdate";
import { Order, OrderDetail } from "../../../../adminType";

const OrderAdminComponentNext = () => {
  function formatDateAndTime(dateTimeString: string) {
    const options: Intl.DateTimeFormatOptions = {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    };

    const formattedDate = new Date(dateTimeString).toLocaleString(
      undefined,
      options
    );
    return formattedDate;
  }

  toast.dismiss();
  const { data: session } = useSession();
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const url = process.env.SERVER_ENDPOINT + "/api/admin/order/";
  const {
    data: orders,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  console.log(orders);
  return (
    <>
      <div className="xl:w-full  min-h-[calc(100vh-138px)] relative pb-14">
        <div className="grid grid-cols-12 sm:grid-cols-12 md:grid-cols-12 lg:grid-cols-12 xl:grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-12 md:col-span-12 lg:col-span-12 xl:col-span-12">
            <div className="w-full relative mb-4">
              <div className="flex-auto p-0 md:p-4">
                <div
                  className="mb-4 border-b border-gray-200 dark:border-slate-700"
                  data-fc-type="tab"
                >
                  <ul
                    className="flex flex-wrap -mb-px text-sm font-medium text-center"
                    aria-label="Tabs"
                  >
                    <li className="me-2" role="presentation">
                      <button
                        className="inline-block p-4 rounded-t-lg border-b-2 active "
                        id="all-tab"
                        data-fc-target="#all"
                        type="button"
                        role="tab"
                        aria-controls="all"
                        aria-selected="false"
                      >
                        All <span className="text-slate-400">(451)</span>
                      </button>
                    </li>
                    <li className="me-2" role="presentation">
                      <button
                        className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="panding-tab"
                        data-fc-target="#panding"
                        type="button"
                        role="tab"
                        aria-controls="panding"
                        aria-selected="false"
                      >
                        Pending <span className="text-slate-400">(35)</span>
                      </button>
                    </li>
                    <li className="" role="presentation">
                      <button
                        className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                        id="returns-tab"
                        data-fc-target="#returns"
                        type="button"
                        role="tab"
                        aria-controls="returns"
                        aria-selected="false"
                      >
                        Returns <span className="text-slate-400">(25)</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 mb-3">
                  <div className="mb-2 w-44">
                    <select
                      id="Category"
                      className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                    >
                      <option className="dark:text-slate-700">
                        All Category
                      </option>
                      <option className="dark:text-slate-700">
                        Electronics
                      </option>
                      <option className="dark:text-slate-700">Furniture</option>
                      <option className="dark:text-slate-700">Footwear</option>
                      <option className="dark:text-slate-700">Clothes</option>
                    </select>
                  </div>
                  <div className="mb-2 w-36">
                    <select
                      id="Payment"
                      className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
                    >
                      <option className="dark:text-slate-700">Payment</option>
                      <option className="dark:text-slate-700">Online</option>
                      <option className="dark:text-slate-700">Check</option>
                      <option className="dark:text-slate-700">Cash</option>
                    </select>
                  </div>
                  <div className="ms-auto">
                    <form>
                      <div className="relative">
                        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
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
                            data-lucide="search"
                            className="lucide lucide-search z-[1] w-5 h-5 stroke-slate-400"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </svg>
                        </div>
                        <input
                          type="search"
                          id="productSearch"
                          className="form-input w-52 rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700 pl-10 p-2.5"
                          placeholder="search"
                        />
                      </div>
                    </form>
                  </div>
                  <div>
                    <button className="inline-block focus:outline-none bg-brand-500 mt-1 text-white hover:bg-brand-600 hover:text-white  text-md font-medium py-2 px-4 rounded">
                      Add product
                    </button>
                  </div>
                </div>

                <div id="myTabContent">
                  <div
                    className="active  p-4 bg-gray-50 rounded-lg dark:bg-gray-700/20"
                    id="all"
                    role="tabpanel"
                    aria-labelledby="all-tab"
                  >
                    <div className="grid grid-cols-1 p-0 md:p-4">
                      <div className="sm:-mx-6 lg:-mx-8">
                        <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                          <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-600/20">
                              <tr>
                                <th scope="col" className="p-3">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Order ID
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Customer
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Total
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Type
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                                <td className="w-4 p-4">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a
                                    href="admin-order-details.html"
                                    className="text-brand-500 underline"
                                  >
                                    #523666
                                  </a>
                                </td>
                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                  <div className="flex items-center">
                                    <img
                                      src="assets/images/users/avatar-2.png"
                                      alt=""
                                      className="me-2 h-8 inline-block"
                                    />
                                    <div className="self-center">
                                      <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                        Merri Diamond
                                      </h5>
                                      <span className="block  font-medium text-slate-500">
                                        New york, USA
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  $540.00
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  20 Jun 2023
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  Cash
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                    Success
                                  </span>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a href="#">
                                    <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                                  </a>
                                </td>
                              </tr>

                              <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                                <td className="w-4 p-4">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a
                                    href="admin-order-details.html"
                                    className="text-brand-500 underline"
                                  >
                                    #658475
                                  </a>
                                </td>
                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                  <div className="flex items-center">
                                    <img
                                      src="assets/images/users/avatar-2.png"
                                      alt=""
                                      className="me-2 h-8 inline-block"
                                    />
                                    <div className="self-center">
                                      <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                        Glenn Rogers
                                      </h5>
                                      <span className="block  font-medium text-slate-500">
                                        New york, USA
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  $550.00
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  10 jul 2023
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  online
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <span className="bg-yellow-600/5 text-yellow-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                    Pending
                                  </span>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a href="#">
                                    <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                                  </a>
                                </td>
                              </tr>

                              <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                                <td className="w-4 p-4">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a
                                    href="admin-order-details.html"
                                    className="text-brand-500 underline"
                                  >
                                    #523666
                                  </a>
                                </td>
                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                  <div className="flex items-center">
                                    <img
                                      src="assets/images/users/avatar-7.png"
                                      alt=""
                                      className="me-2 h-8 inline-block"
                                    />
                                    <div className="self-center">
                                      <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                        Merri Diamond
                                      </h5>
                                      <span className="block  font-medium text-slate-500">
                                        New york, USA
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  $880.00
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  22 Oct 2023
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  Cash
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <span className="bg-red-600/5 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                    Cancel
                                  </span>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a href="#">
                                    <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div className="self-center">
                        <p className="dark:text-slate-400">
                          Showing 1 - 20 of 1,524
                        </p>
                      </div>
                      <div className="self-center">
                        <ul className="inline-flex items-center -space-x-px">
                          <li>
                            <a
                              href="#"
                              className=" py-2 px-3 ms-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <i className="icofont-simple-left"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              aria-current="page"
                              className="z-10 py-2 px-3 leading-tight text-brand-600 bg-brand-50 border border-brand-300 hover:bg-brand-100 hover:text-brand-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            >
                              2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              3
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className=" py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <i className="icofont-simple-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                    id="panding"
                    role="tabpanel"
                    aria-labelledby="panding-tab"
                  >
                    <div className="grid grid-cols-1 p-0 md:p-4">
                      <div className="sm:-mx-6 lg:-mx-8">
                        <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                          <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-600/20">
                              <tr>
                                <th scope="col" className="p-3">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Order ID
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Customer
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Total
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Type
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                                <td className="w-4 p-4">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a
                                    href="admin-order-details.html"
                                    className="text-brand-500 underline"
                                  >
                                    #523666
                                  </a>
                                </td>
                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                  <div className="flex items-center">
                                    <img
                                      src="assets/images/users/avatar-2.png"
                                      alt=""
                                      className="me-2 h-8 inline-block"
                                    />
                                    <div className="self-center">
                                      <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                        Merri Diamond
                                      </h5>
                                      <span className="block  font-medium text-slate-500">
                                        New york, USA
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  $540.00
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  20 Jun 2023
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  Cash
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <span className="bg-yellow-600/5 text-yellow-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                    Panding
                                  </span>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a href="#">
                                    <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                                  </a>
                                </td>
                              </tr>

                              <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                                <td className="w-4 p-4">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a
                                    href="admin-order-details.html"
                                    className="text-brand-500 underline"
                                  >
                                    #369258
                                  </a>
                                </td>
                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                  <div className="flex items-center">
                                    <img
                                      src="assets/images/users/avatar-2.png"
                                      alt=""
                                      className="me-2 h-8 inline-block"
                                    />
                                    <div className="self-center">
                                      <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                        Glenn Rogers
                                      </h5>
                                      <span className="block  font-medium text-slate-500">
                                        New york, USA
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  $550.00
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  10 jul 2023
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  online
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <span className="bg-yellow-600/5 text-yellow-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                    Pending
                                  </span>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a href="#">
                                    <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-between mt-4">
                      <div className="self-center">
                        <p className="dark:text-slate-400">
                          Showing 1 - 20 of 1,524
                        </p>
                      </div>
                      <div className="self-center">
                        <ul className="inline-flex items-center -space-x-px">
                          <li>
                            <a
                              href="#"
                              className=" py-2 px-3 ms-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <i className="icofont-simple-left"></i>
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              aria-current="page"
                              className="z-10 py-2 px-3 leading-tight text-brand-600 bg-brand-50 border border-brand-300 hover:bg-brand-100 hover:text-brand-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                            >
                              2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              3
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className=" py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                            >
                              <i className="icofont-simple-right"></i>
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                    id="returns"
                    role="tabpanel"
                    aria-labelledby="returns-tab"
                  >
                    <div className="grid grid-cols-1 p-0 md:p-4">
                      <div className="sm:-mx-6 lg:-mx-8">
                        <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                          <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-600/20">
                              <tr>
                                <th scope="col" className="p-3">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Order ID
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Customer
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Total
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Type
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Status
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                                <td className="w-4 p-4">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a
                                    href="admin-order-details.html"
                                    className="text-brand-500 underline"
                                  >
                                    #998587
                                  </a>
                                </td>
                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                  <div className="flex items-center">
                                    <img
                                      src="assets/images/users/avatar-2.png"
                                      alt=""
                                      className="me-2 h-8 inline-block"
                                    />
                                    <div className="self-center">
                                      <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                        Glenn Rogers
                                      </h5>
                                      <span className="block  font-medium text-slate-500">
                                        New york, USA
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  $550.00
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  10 jul 2023
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  online
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <span className="bg-red-600/5 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                    Cancel
                                  </span>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a href="#">
                                    <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
                    id="discount"
                    role="tabpanel"
                    aria-labelledby="discount-tab"
                  >
                    <div className="grid grid-cols-1 p-0 md:p-4">
                      <div className="sm:-mx-6 lg:-mx-8">
                        <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                          <table className="w-full">
                            <thead className="bg-gray-50 dark:bg-gray-600/20">
                              <tr>
                                <th scope="col" className="p-3">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Product &amp; Title
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Categories
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Stock status
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Attributes
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Price
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Date
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                                >
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                                <td className="w-4 p-4">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </td>
                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                  <div className="flex items-center">
                                    <img
                                      src="assets/images/products/pro-5.png"
                                      alt=""
                                      className="me-2 h-8 inline-block"
                                    />
                                    <div className="self-center">
                                      <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                        Mannat Watch 3 Active{" "}
                                      </h5>
                                      <span className="block  font-medium text-slate-500">
                                        Latest Model 2023
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a
                                    href="#"
                                    className="text-brand-500 underline"
                                  >
                                    Fashion
                                  </a>
                                  ,
                                  <a
                                    href="#"
                                    className="text-brand-500 underline"
                                  >
                                    Lifestayle
                                  </a>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                    In stock
                                  </span>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <div>
                                    color :
                                    <span className="ms-2">
                                      <i className="icofont-brand-mts text-orange-500"></i>
                                      <i className="icofont-brand-mts text-purple-500"></i>
                                    </span>
                                  </div>
                                  <div>
                                    Size :<span className="ms-2">S</span>
                                    <span className="mx-1">M</span>
                                    <span className="mx-1">L</span>
                                    <span className="mx-1">XL</span>
                                    <span className="mx-1">XXL</span>
                                  </div>
                                </td>
                                <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                                  $219{" "}
                                  <del className="text-slate-500 font-normal">
                                    $299
                                  </del>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  25 Nov 2023
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a href="#">
                                    <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                                  </a>
                                </td>
                              </tr>
                              <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                                <td className="w-4 p-4">
                                  <label className="custom-label">
                                    <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block leading-5 text-center -mb-[6px]">
                                      <input
                                        type="checkbox"
                                        className="hidden"
                                      />
                                      <i className="icofont-verification-check hidden text-xs text-brand-500 dark:text-slate-200"></i>
                                    </div>
                                  </label>
                                </td>
                                <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                  <div className="flex items-center">
                                    <img
                                      src="assets/images/products/pro-6.png"
                                      alt=""
                                      className="me-2 h-8 inline-block"
                                    />
                                    <div className="self-center">
                                      <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                        Mannat Watch 3 Active{" "}
                                      </h5>
                                      <span className="block  font-medium text-slate-500">
                                        Latest Model 2023
                                      </span>
                                    </div>
                                  </div>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a
                                    href="#"
                                    className="text-brand-500 underline"
                                  >
                                    Fashion
                                  </a>
                                  ,
                                  <a
                                    href="#"
                                    className="text-brand-500 underline"
                                  >
                                    Lifestayle
                                  </a>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                    In stock
                                  </span>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <div>
                                    color :
                                    <span className="ms-2">
                                      <i className="icofont-brand-mts text-orange-500"></i>
                                      <i className="icofont-brand-mts text-purple-500"></i>
                                    </span>
                                  </div>
                                  <div>
                                    Size :<span className="ms-2">S</span>
                                    <span className="mx-1">M</span>
                                    <span className="mx-1">L</span>
                                    <span className="mx-1">XL</span>
                                    <span className="mx-1">XXL</span>
                                  </div>
                                </td>
                                <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                                  $219{" "}
                                  <del className="text-slate-500 font-normal">
                                    $299
                                  </del>
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  25 Nov 2023
                                </td>
                                <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                  <a href="#">
                                    <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                                  </a>
                                  <a href="#">
                                    <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                                  </a>
                                </td>
                              </tr>
                            </tbody>
                          </table>
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
};

export default OrderAdminComponentNext;
