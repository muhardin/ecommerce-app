"use client";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import OrderSupplierUpdate from "@/app/components/supplier/order/OrderSupplierUpdate";
import { Order, OrderDetail } from "../../../../adminType";
import { Icons } from "@/app/components/ui/Icons";
import FormattedPrice from "@/app/components/FormattedPrice";
import { OrderItem } from "../../../../type";
import { useState } from "react";

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
  const [currentPage, setCurrentPage] = useState(1);
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [filterText, setFilterText] = useState<string>("");

  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const url = `${process.env.SERVER_ENDPOINT}/api/admin/order?page=${currentPage}&search=${statusFilter}`;
  const {
    data: orders,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const startItem = (currentPage - 1) * orders?.per_page + 1;
  const endItem = Math.min(currentPage * orders?.per_page, orders?.total);

  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(orders?.total / orders?.per_page);
  const handlePageClick = (selected: number) => {
    setCurrentPage(Number(selected + 1));
    const newOffset = (selected * orders?.per_page) % orders?.total;
    setItemOffset(newOffset);
  };
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
                  data-fc-type="tab">
                  <ul
                    className="flex flex-wrap -mb-px text-sm font-medium text-center"
                    aria-label="Tabs">
                    <li className="me-2" role="presentation">
                      <button
                        className="inline-block p-4 rounded-t-lg border-b-2 active "
                        id="all-tab"
                        data-fc-target="#all"
                        type="button"
                        role="tab"
                        aria-controls="all"
                        aria-selected="false">
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
                        aria-selected="false">
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
                        aria-selected="false">
                        Returns <span className="text-slate-400">(25)</span>
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="flex flex-wrap gap-4 mb-3">
                  <div className="mb-2 w-44">
                    <select
                      id="Category"
                      className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700">
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
                      className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700">
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
                            className="lucide lucide-search z-[1] w-5 h-5 stroke-slate-400">
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                          </svg>
                        </div>
                        <input
                          onChange={(e) => {
                            setFilterText(e.target.value);
                          }}
                          value={filterText}
                          type="search"
                          id="productSearch"
                          className="form-input w-52 rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700 pl-10 p-2.5"
                          placeholder="search"
                        />
                      </div>
                    </form>
                  </div>
                  <div>
                    <button
                      onClick={() => setStatusFilter(filterText)}
                      className="bg-sky-500 inline-block focus:outline-none bg-brand-500 mt-1 text-white hover:bg-brand-600 hover:text-white  text-md font-medium py-2 px-4 rounded">
                      Search
                    </button>
                  </div>
                </div>

                <div id="myTabContent">
                  <div
                    className="active  p-4 bg-gray-50 rounded-lg dark:bg-gray-700/20"
                    id="all"
                    role="tabpanel"
                    aria-labelledby="all-tab">
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
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase">
                                  Order ID
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase">
                                  Customer
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase">
                                  Shop
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase">
                                  Total
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase">
                                  Date
                                </th>

                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase">
                                  Payment Status
                                </th>
                                <th
                                  scope="col"
                                  className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase">
                                  Action
                                </th>
                              </tr>
                            </thead>
                            <tbody>
                              {orders?.data?.length > 0 ? (
                                orders.data.map((item: Order) => (
                                  <>
                                    <tr
                                      key={item.id}
                                      className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
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
                                          className="text-brand-500 underline">
                                          #{item.invoice_number}
                                        </a>
                                      </td>
                                      <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                        <div className="flex items-center">
                                          <Image
                                            width={45}
                                            height={45}
                                            src="/images/no_image.png"
                                            alt=""
                                            className="me-2 h-8 inline-block"
                                          />
                                          <div className="self-center">
                                            <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                              {item.user.first_name +
                                                " " +
                                                item.user?.first_name}
                                            </h5>
                                            <span className="font-medium text-slate-500 flex flex-row gap-2 items-center">
                                              <label htmlFor="">
                                                {item.user.phone_number},{" "}
                                              </label>
                                              <button>
                                                <Icons.whatsapp />
                                              </button>
                                            </span>
                                            <span className="font-medium text-slate-500 flex flex-row gap-2 items-center">
                                              <label htmlFor="">
                                                {item.user.email}
                                              </label>
                                            </span>
                                          </div>
                                        </div>
                                      </td>

                                      <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                                        <div className="flex items-center">
                                          <Image
                                            width={45}
                                            height={45}
                                            src={`${process.env.SERVER_ENDPOINT}/storage/logo/${item.shop.logo}`}
                                            alt=""
                                            className="me-2 h-8 inline-block"
                                          />
                                          <div className="self-center">
                                            <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                              {item.shop.company_name}
                                            </h5>
                                            <span className="font-medium text-slate-500 flex flex-row gap-2 items-center">
                                              <label htmlFor="">
                                                {item.shop.phone}
                                              </label>
                                            </span>
                                            <span className="font-medium text-slate-500 flex flex-row gap-2 items-center">
                                              <label htmlFor="">
                                                {item.shop.domain[0].domain}
                                              </label>
                                            </span>
                                          </div>
                                        </div>
                                      </td>
                                      <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        <FormattedPrice amount={item.amount} />
                                      </td>
                                      <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        20 Jun 2023
                                      </td>
                                      <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                                        {item.order_payment.status ===
                                        "UNPAID" ? (
                                          <span className="bg-red-600/5 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                            {item.order_payment.status}
                                          </span>
                                        ) : item.order_payment.status ===
                                          "PAID" ? (
                                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                            {item.order_payment.status}
                                          </span>
                                        ) : (
                                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                                            {item.order_payment.status}
                                          </span>
                                        )}
                                      </td>
                                      <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400"></td>
                                    </tr>

                                    <tr>
                                      <td
                                        colSpan={8}
                                        className="p-2 text-center">
                                        <details className="collapse bg-base-200">
                                          <summary className="collapse-title text-xl font-medium">
                                            Details
                                          </summary>
                                          <div className="collapse-content w-full">
                                            <div className="p-2 flex flex-col gap-1 text-xs font-mono">
                                              <div className="grid grid-cols-5 gap-4 w-full text-lg">
                                                <div className="flex justify-start">
                                                  Product
                                                </div>
                                                <div className="flex justify-start">
                                                  Supplier
                                                </div>
                                                <div className="flex justify-start">
                                                  Address
                                                </div>
                                                <div className="flex justify-start">
                                                  Shipping
                                                </div>
                                                <div className="flex justify-end pr-4">
                                                  Status
                                                </div>
                                              </div>
                                              {item.order_detail.map((prod) => (
                                                <div
                                                  key={prod.id}
                                                  className="w-full border border-red-500 p-1 rounded-lg grid grid-cols-5 gap-4 text-sm">
                                                  <div className="w-full flex flex-row justify-start items-center">
                                                    <div className="w-10 h-10 flex items-center justify-center">
                                                      <Image
                                                        className="object-scale-down"
                                                        src={`${process.env.SERVER_ENDPOINT}${prod.product.product_gallery[0].url}`}
                                                        width={25}
                                                        height={20}
                                                        alt=""
                                                      />
                                                    </div>
                                                    <div className=" w-full">
                                                      <div className="flex flex-col justify-start gap-1">
                                                        <div className="flex justify-start">
                                                          {prod.product.title}
                                                        </div>
                                                        <div className="flex justify-start">
                                                          Qty : {prod.quantity}
                                                        </div>
                                                        <div className="flex justify-start">
                                                          {prod.order_status}
                                                        </div>
                                                      </div>
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-col justify-start items-start gap-1 w-full">
                                                    <div className="flex justify-start">
                                                      {
                                                        prod.product.supplier
                                                          .supplier_name
                                                      }
                                                    </div>
                                                    <div className="flex justify-start">
                                                      {
                                                        prod.product.supplier
                                                          .subdistrict_name
                                                      }
                                                    </div>
                                                    <div className="flex justify-start">
                                                      {
                                                        prod.product.supplier
                                                          .user.first_name
                                                      }
                                                    </div>
                                                    <div className="flex justify-start">
                                                      {
                                                        prod.product.supplier
                                                          .user.phone_number
                                                      }
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-col justify-start">
                                                    <div className="flex justify-start">
                                                      {
                                                        prod.user_address
                                                          .contact_person
                                                      }
                                                    </div>
                                                    <div className="flex justify-start">
                                                      Phone :{" "}
                                                      {prod.user_address.phone}
                                                    </div>
                                                    <div className="flex justify-start">
                                                      {
                                                        prod.user_address
                                                          .subdistrict_name
                                                      }
                                                    </div>
                                                    <div className="flex justify-start">
                                                      {
                                                        prod.user_address
                                                          .province_name
                                                      }
                                                    </div>
                                                  </div>
                                                  <div className="flex flex-col justify-start">
                                                    <div className="flex justify-start">
                                                      {prod.shipping_method}
                                                    </div>
                                                    <div className="flex justify-start">
                                                      {prod.shipping_option}
                                                    </div>
                                                    <div className="flex justify-start">
                                                      {prod.shipping_resi}
                                                    </div>
                                                  </div>
                                                  <div className="flex justify-end items-center pr-4">
                                                    <div className="">
                                                      <button className="capitalize p-2 bg-red-400 text-white rounded-md">
                                                        {prod.order_status}
                                                      </button>
                                                    </div>
                                                  </div>
                                                  {/* {prod.order_status ===
                                                    "delivering" && (
                                                    <div className="flex items-end justify-end gap-1">
                                                      <button
                                                        className={`inline-flex items-center rounded-md bg-green-600 py-2 px-3 text-xs text-white cursor-pointer`}>
                                                        Track
                                                      </button>
                                                      <button
                                                        className={`inline-flex items-center rounded-md bg-sky-600 py-2 px-3 text-xs text-white cursor-pointer`}>
                                                        Terima
                                                      </button>
                                                    </div>
                                                  )} */}
                                                </div>
                                              ))}
                                            </div>
                                          </div>
                                        </details>
                                      </td>
                                    </tr>
                                  </>
                                ))
                              ) : (
                                <tr>
                                  <td colSpan={8} className="p-6 text-center">
                                    <div className="flex justify-center items-center">
                                      <span className="loading loading-dots loading-lg"></span>
                                    </div>
                                  </td>
                                </tr>
                              )}
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
                            <button
                              disabled={currentPage < 2}
                              onClick={() => {
                                setCurrentPage(Number(currentPage - 1));
                              }}
                              className="align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none p-2 rounded-md hover:bg-gray-100 text-gray-800 dark:text-gray-400 border border-transparent opacity-50 cursor-pointer"
                              type="button"
                              aria-label="Previous">
                              <svg
                                className="h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                  d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                  clipRule="evenodd"
                                  fillRule="evenodd"></path>
                              </svg>
                            </button>
                          </li>
                          {/* <li>
                            <a
                              href="#"
                              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                              1
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              aria-current="page"
                              className="z-10 py-2 px-3 leading-tight text-brand-600 bg-brand-50 border border-brand-300 hover:bg-brand-100 hover:text-brand-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white">
                              2
                            </a>
                          </li>
                          <li>
                            <a
                              href="#"
                              className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                              3
                            </a>
                          </li> */}
                          {Array.from({ length: pageCount }).map((_, index) => {
                            const page = index + 1;
                            return (
                              <li key={index}>
                                <button
                                  onClick={() => {
                                    handlePageClick(index);
                                  }}
                                  key={page}
                                  className={`mx-1 align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-3 py-1 rounded-md text-xs ${
                                    page == currentPage &&
                                    "text-white bg-emerald-500"
                                  } border border-transparent active:bg-emerald-600 hover:bg-emerald-600 hover:text-slate-50`}
                                  type="button">
                                  {page}
                                </button>
                              </li>
                            );
                          })}
                          <li>
                            <button
                              disabled={currentPage == pageCount}
                              onClick={() => {
                                setCurrentPage(Number(currentPage + 1));
                              }}
                              className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium p-2 rounded-md text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                              type="button"
                              aria-label="Next">
                              <svg
                                className="h-3 w-3"
                                aria-hidden="true"
                                fill="currentColor"
                                viewBox="0 0 20 20">
                                <path
                                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                  clipRule="evenodd"
                                  fillRule="evenodd"></path>
                              </svg>
                            </button>
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
    </>
  );
};

export default OrderAdminComponentNext;
