"use client";
import toast from "react-hot-toast";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useShopData } from "./shop/ShopContext";
import FormattedPrice from "./FormattedPrice";
import { Order, OrderPayment } from "../../../type";
import { OrderDetail } from "../../../typeJs";
import OrderSupplierUpdate from "./supplier/order/OrderSupplierUpdate";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";

const OrderHistory = () => {
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

  const shopData = useShopData();
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
    "/api/user/order/order-lists/" +
    shopData?.id +
    "?page=" +
    currentPage;
  const {
    data: payment,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const [errMessage, setErrMessage] = useState<string[]>([]);
  const [inLoading, setInLoading] = useState(false);
  const [modal, setModal] = useState(false);

  const ConfirmAction = async (productId?: number, act?: string) => {
    setInLoading(true);
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        cancelButton:
          "bg-darkText hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ",
        confirmButton:
          "bg-darkText mr-2 ml-2 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "Your order will be completed as received!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, receive it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          // console.log(productId);
          if (act == "confirm") {
            setErrMessage([]);
            const config = {
              headers: { Authorization: `Bearer ${session?.bearer}` },
            };
            const post = await axios.post(
              process.env.SERVER_ENDPOINT + "/api/user/order/received",
              { id: productId, shop: shopData?.id },
              config
            );

            if (post.status == 200) {
              setInLoading(false);
              toast.dismiss();
              toast.success("Success", { duration: 6000 });
            } else if (post.status == 201) {
              setModal(true);
              setErrMessage(post.data.message.error);
              toast.dismiss();
              // console.log(post.data.message.error);
            } else if (post.status == 500) {
              toast.error("System on maintenance mode");
              toast.dismiss();
            }
          } else {
            // console.log(productId);
          }
        }
      });
  };
  const items = payment;
  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(items?.total / items?.per_page);
  const handlePageClick = (selected: number) => {
    setCurrentPage(Number(selected + 1));
    const newOffset = (selected * items?.per_page) % items?.total;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="w-full mx-auto ">
        <div className="mt-2 px-4 mb-4">
          <div className="sm:flex sm:items-center sm:justify-between flex-col sm:flex-row">
            <p className="flex-1 text-base font-bold text-gray-900">
              Latest Payments
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

          <div className="mt-2 overflow-hidden rounded-xl  shadow">
            {isLoading ? (
              <div className="flex flex-row justify-center items-center">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            ) : payment?.data?.length > 0 ? (
              payment?.data.map((item: Order) => (
                <div
                  key={item.id}
                  className="mt-2 overflow-hidden rounded-xl border shadow">
                  <div className="flex flex-row justify-between gap-2 p-4 pb-0">
                    <div className="flex justify-start flex-row items-center gap-2">
                      {/* <div className="w-1/5">
                      {item.order_detail[0].product?.product_gallery?.length >
                      0 ? (
                        <Image
                          src={`${process.env.SERVER_ENDPOINT}${item.order_detail[0].product?.product_gallery[0].url}`}
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
                    </div> */}
                      <div className="flex flex-col gap-1">
                        <div className="text-red-500 font-mono">
                          {item.invoice_number}
                        </div>

                        <div className="text-sm font-mono">
                          {formatDateAndTime(item.created_at)}
                        </div>
                        <div
                          className={`${
                            item.order_payment?.status == "UNPAID"
                              ? "text-red-500"
                              : item.order_status == "PAID"
                              ? "text-green-500"
                              : "text-red-700"
                          } font-mono capitalize`}>
                          {item.order_payment?.status}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col gap-2 font-mono justify-start items-end">
                      <div className="">
                        <FormattedPrice amount={Number(item.amount)} />
                      </div>
                      {item.order_payment?.status === "UNPAID" && (
                        <div className="">
                          <Link
                            href={"/payment/" + item.id}
                            className={`inline-flex items-center rounded-md bg-red-600 py-2 px-3 text-xs text-white cursor-pointer`}>
                            Pay
                          </Link>
                        </div>
                      )}
                      {item.order_payment?.status === "EXPIRED" && (
                        <div className="">
                          <Link
                            href={"#"}
                            className={`inline-flex items-center rounded-md bg-red-600 py-2 px-3 text-xs text-white cursor-pointer`}>
                            Expired
                          </Link>
                        </div>
                      )}
                      {item.order_payment?.status == "PAID" && (
                        <div className="">
                          <Link
                            href={"/profile/orders/summary/" + item.id}
                            className={`inline-flex items-center rounded-md bg-green-600 py-2 px-3 text-xs text-white cursor-pointer`}>
                            Detail
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-2 flex flex-col gap-1 text-xs font-mono">
                    {item.order_detail.map((prod) => (
                      <div
                        key={prod.id}
                        className="w-full border border-red-500 p-1 rounded-lg flex flex-row gap-1 justify-between">
                        <div className="w-full flex flex-row justify-start items-center">
                          <div className="">
                            <div className="w-10 h-10 flex items-center justify-center">
                              <Image
                                className="object-scale-down"
                                src={`${process.env.SERVER_ENDPOINT}${prod.product.product_gallery[0].url}`}
                                width={25}
                                height={20}
                                alt=""
                              />
                            </div>
                          </div>
                          <div className="flex flex-col gap-1">
                            <div className="">{prod.product.title}</div>
                            <div className="">Qty : {prod.quantity}</div>
                            <div className="">{prod.order_status}</div>
                          </div>
                        </div>
                        {prod.order_status === "delivering" && (
                          <div className="flex items-end justify-end gap-1">
                            <button
                              className={`inline-flex items-center rounded-md bg-green-600 py-2 px-3 text-xs text-white cursor-pointer`}>
                              Track
                            </button>
                            <button
                              onClick={() => {
                                ConfirmAction(prod?.id, "confirm");
                              }}
                              className={`inline-flex items-center rounded-md bg-sky-600 py-2 px-3 text-xs text-white cursor-pointer`}>
                              Terima
                            </button>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))
            ) : (
              <div className="flex flex-row justify-center items-center">
                <span className="">No Data</span>
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
    </>
  );
};

export default OrderHistory;
