"use client";
import toast from "react-hot-toast";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import FormattedPrice from "../../FormattedPrice";
import { Order, OrderItem } from "../../../../../type";
import { Icons } from "../../ui/Icons";
import OrderSupplierDetail from "./OrderSupplierDetail";
import OrderSupplierUpdate from "./OrderSupplierUpdate";

const OrderSupplierComponent = () => {
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

  const url = process.env.SERVER_ENDPOINT + "/api/supplier-board/order/";
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
      {/* <div className="">s</div>
      {orders ? <OrderSupplierUpdate item={orders[0]} /> : ""} */}
      <div className="w-full mx-auto h-auto bg-white pb-4">
        <div className="mt-0 px-4 mb-4 pt-4">
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-base font-bold text-gray-900">
              Product Orders
            </p>

            <div className="mt-4 sm:mt-0">
              <div className="flex items-center justify-start sm:justify-end">
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
          <div className="mt-4 pb-14">
            {orders ? (
              orders?.map((item: OrderItem) => (
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
                              : "bg-red-600"
                          }  inline-flex items-center rounded-md bg-blue-600 py-2 px-3 text-xs text-white`}>
                          <OrderSupplierUpdate
                            item={item}
                            title={`${
                              item.order_status == "received"
                                ? "Detail"
                                : "Update"
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
              <div>Loading..</div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSupplierComponent;
