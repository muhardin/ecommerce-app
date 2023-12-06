"use client";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import FormattedPrice from "../../FormattedPrice";
import { Order, OrderItem } from "../../../../../type";
import { Icons } from "../../ui/Icons";
import OrderMyShopDetail from "./detail";
import { useState } from "react";
import OrderShow from "./show";

const MyShopOrderHistory = () => {
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
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

  const url =
    process.env.SERVER_ENDPOINT +
    "/api/myshop-board/order?page=" +
    currentPage +
    "&status=" +
    statusFilter;
  const {
    data: orders,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const items = orders?.items;
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(items?.total / items?.per_page);
  const handlePageClick = (selected: number) => {
    setCurrentPage(Number(selected + 1));
    const newOffset = (selected * items?.per_page) % items?.total;
    console.log(
      `User requested page number ${selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };
  // console.log(orders[0]);
  return (
    <>
      <div className="w-full mx-auto h-auto bg-white pb-4">
        <div className="mt-0 px-4 mb-4 pt-4">
          <p className="flex-1 text-base font-bold text-gray-900">
            Product Orders
          </p>
          <div>
            <div
              className="flex flex-wrap justify-between md:justify-start -mb-px text-sm font-medium text-center"
              aria-label="Tabs">
              <div className="" role="presentation">
                <button
                  onClick={() => {
                    setStatusFilter("all");
                    setCurrentPage(1);
                  }}
                  className="inline-block p-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="all-tab"
                  data-fc-target="#all"
                  type="button"
                  role="tab"
                  aria-controls="all"
                  aria-selected="false">
                  All <span className="text-slate-400">({orders?.all})</span>
                </button>
              </div>
              <div className="" role="presentation">
                <button
                  onClick={() => {
                    setStatusFilter("pending");
                    setCurrentPage(1);
                  }}
                  className="inline-block p-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="published-tab"
                  data-fc-target="#published"
                  type="button"
                  role="tab"
                  aria-controls="published"
                  aria-selected="false">
                  Pending{" "}
                  <span className="text-slate-400">({orders?.pending})</span>
                </button>
              </div>
              <div className="" role="presentation">
                <button
                  onClick={() => {
                    setStatusFilter("processing");
                    setCurrentPage(1);
                  }}
                  className=" inline-block p-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="drafts-tab"
                  data-fc-target="#drafts"
                  type="button"
                  role="tab"
                  aria-controls="drafts"
                  aria-selected="false">
                  Processing{" "}
                  <span className="text-slate-400">({orders?.processing})</span>
                </button>
              </div>
              <div className="" role="presentation">
                <button
                  onClick={() => {
                    setStatusFilter("received");
                    setCurrentPage(1);
                  }}
                  className=" inline-block p-2 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                  id="drafts-tab"
                  data-fc-target="#drafts"
                  type="button"
                  role="tab"
                  aria-controls="drafts"
                  aria-selected="false">
                  Done{" "}
                  <span className="text-slate-400">({orders?.received})</span>
                </button>
              </div>
            </div>
            <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
              <div className="mt-4 sm:mt-0">
                <div className="flex items-center justify-between sm:justify-end">
                  <div className="flex items-center">
                    <label
                      htmlFor=""
                      className="mr-2 flex-shrink-0 text-sm font-medium text-gray-900">
                      Sort by:
                    </label>

                    <select
                      name=""
                      className="sm: mr-4 block w-full whitespace-pre rounded-lg border p-1 pr-10 text-base outline-none focus:shadow sm:text-sm">
                      <option className="whitespace-no-wrap text-sm">
                        Recent
                      </option>
                    </select>
                  </div>

                  <button
                    type="button"
                    className="inline-flex cursor-pointer items-center rounded-lg border border-gray-400 bg-white py-2 px-3 text-center text-sm font-medium text-gray-800 shadow hover:bg-gray-100 focus:shadow">
                    <svg
                      className="mr-1 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                        className=""></path>
                    </svg>
                    Export to CSV
                  </button>
                </div>
              </div>
            </div>
            <hr className="mb-2 mt-2" />
            <div className="mt-4 pb-14">
              {orders?.items?.data ? (
                orders?.items.data.map((item: OrderItem) => (
                  <div
                    key={item.id}
                    className="mt-2 overflow-hidden rounded-xl border shadow">
                    <div className="flex flex-row justify-between gap-2 p-4">
                      <div className="flex justify-start flex-row items-center gap-2">
                        <div className="w-1/5">
                          {item.product.product_gallery?.length > 0 ? (
                            <Image
                              src={`${process.env.SERVER_ENDPOINT}${item.product.product_gallery[0].url}`}
                              alt=""
                              width={150}
                              height={150}
                            />
                          ) : (
                            <Image
                              src={`/image/no_image.png`}
                              alt=""
                              width={150}
                              height={150}
                            />
                          )}
                        </div>
                        <div className="flex flex-col gap-1">
                          <div className="text-red-500 font-mono">
                            {item.order.invoice_number}
                          </div>
                          <div className="">{item.product.title}</div>
                          <div className="text-sm font-mono">
                            {formatDateAndTime(item.created_at)}
                          </div>
                          <div
                            className={`${
                              item.order_status == "pending"
                                ? "text-red-500"
                                : item.order_status == "received"
                                ? "text-green-500"
                                : item.order_status === "delivering"
                                ? "text-green-700"
                                : "text-red-700"
                            } font-mono capitalize`}>
                            {item.order_status}
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col gap-2 font-mono">
                        <div className="">Qty : {item.quantity}</div>
                        <div className="">
                          <div
                            className={`${
                              item.order_status == "received"
                                ? "bg-green-600"
                                : item.order_status === "rejected"
                                ? "bg-green-600"
                                : item.order_status === "delivering"
                                ? "bg-green-600"
                                : "bg-red-600"
                            }  inline-flex items-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white`}>
                            <OrderShow
                              item={item}
                              title={`${
                                item.order_status === "received"
                                  ? "Detail"
                                  : item.order_status === "rejected"
                                  ? "Detail"
                                  : item.order_status === "delivering"
                                  ? "Detail"
                                  : "Detail"
                              } `}
                              className="text-white hover:text-white"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-row justify-center items-center">
                  <span className="loading loading-dots loading-lg"></span>
                </div>
              )}
              <div className="flex w-full justify-center mt-2">
                <nav aria-label="Page navigation example w-full">
                  <ul className="inline-flex -space-x-px text-base h-10">
                    <li>
                      <button
                        disabled={currentPage < 2}
                        onClick={() => {
                          setCurrentPage(Number(currentPage - 1));
                        }}
                        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevron-left">
                          <path d="m15 18-6-6 6-6" />
                        </svg>
                      </button>
                    </li>
                    {Array.from({ length: pageCount }).map((_, index) => {
                      const page = index + 1;
                      return (
                        <li key={page}>
                          <button
                            onClick={() => {
                              handlePageClick(index);
                            }}
                            className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
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
                        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-chevron-right">
                          <path d="m9 18 6-6-6-6" />
                        </svg>
                      </button>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyShopOrderHistory;
