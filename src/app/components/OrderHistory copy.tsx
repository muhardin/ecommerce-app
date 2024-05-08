"use client";
import toast from "react-hot-toast";
import Container from "./Container";
import Link from "next/link";
import Image from "next/image";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useShopData } from "./shop/ShopContext";
import FormattedPrice from "./FormattedPrice";

const OrderHistory = () => {
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
    process.env.SERVER_ENDPOINT + "/api/user/order/shop/" + shopData?.id;
  const {
    data: payment,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  return (
    <>
      <div className="w-full mx-auto ">
        <div className="mt-8 px-4 mb-4">
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

          <div className="mt-6 overflow-hidden rounded-xl border shadow">
            <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
              <thead className="hidden border-b lg:table-header-group">
                <tr className="">
                  <td
                    width="20%"
                    className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Invoice
                  </td>
                  <td className="hidden md:block whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Payment
                  </td>
                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Date
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Amount
                  </td>

                  <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                    Status
                  </td>
                </tr>
              </thead>

              <tbody className="lg:border-gray-300">
                {payment?.order.map((item: any) => (
                  <tr key={item.id} className="">
                    <td
                      width="20%"
                      className="whitespace-no-wrap py-4 text-sm font-bold text-sky-700 sm:px-6 hover:text-red-500">
                      <Link
                        href={
                          item.status == "PAID"
                            ? "/profile/orders/summary/" + item?.order_id
                            : "/payment/" + item?.order_id
                        }
                        className="hover:text-sky-600">
                        {item.invoice_number}
                        <div className="mt-1 lg:hidden">
                          <p className="font-normal text-gray-500">
                            {formatDateAndTime(item.created_at)}
                          </p>
                        </div>
                      </Link>
                    </td>

                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 md:table-cell">
                      <Link
                        href={
                          item.status == "PAID"
                            ? "/profile/orders/summary/" + item.id
                            : "/payment/" + item.id
                        }
                        className="hover:text-sky-600">
                        {item.payment_name}
                        <div className="mt-1 lg:hidden">
                          <p className="font-normal text-gray-500">
                            {formatDateAndTime(item.created_at)}
                          </p>
                        </div>
                      </Link>
                    </td>
                    <td className="md:block whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                      {formatDateAndTime(item.created_at)}
                    </td>

                    <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                      <FormattedPrice amount={item.amount} />
                      {item.status == "UNPAID" ? (
                        <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                          Unpaid
                        </div>
                      ) : item.status == "PAID" ? (
                        <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                          Paid
                        </div>
                      ) : item.status == "EXPIRED" ? (
                        <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-300 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                          Expired
                        </div>
                      ) : (
                        <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-300 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                          Pending
                        </div>
                      )}
                    </td>

                    <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                      {item.status == "UNPAID" ? (
                        <div className="inline-flex items-center rounded-full bg-red-600 py-2 px-3 text-xs text-white">
                          Unpaid
                        </div>
                      ) : item.status == "PAID" ? (
                        <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                          Paid
                        </div>
                      ) : item.status == "EXPIRED" ? (
                        <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                          EXPIRED
                        </div>
                      ) : (
                        <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                          Pending
                        </div>
                      )}
                    </td>
                  </tr>
                ))}

                {/* <tr className="">
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    Standard Plan - Jan 2022
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">
                        09 January, 2022
                      </p>
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    09 January, 2022
                  </td>

                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $59.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-red-200 py-1 px-2 text-left font-medium text-red-500 lg:hidden">
                      Canceled
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-red-200 py-1 px-2 text-red-500">
                      Canceled
                    </div>
                  </td>
                </tr>

                <tr className="">
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    Basic Plan - Dec 2021
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">
                        15 December, 2021
                      </p>
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    15 December, 2021
                  </td>

                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $29.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr>

                <tr className="">
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    Basic Plan - Nov 2021
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">
                        14 November, 2021
                      </p>
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    14 November, 2021
                  </td>

                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $29.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-200 py-1 px-2 text-left font-medium text-blue-500 lg:hidden">
                      Pending
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-200 py-1 px-2 text-blue-500">
                      Pending
                    </div>
                  </td>
                </tr>

                <tr className="">
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6"
                  >
                    Basic Plan - Oct 2021
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">
                        15 October, 2021
                      </p>
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    15 October, 2021
                  </td>

                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    $29.00
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full bg-blue-600 py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      Complete
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center rounded-full bg-blue-600 py-2 px-3 text-xs text-white">
                      Complete
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderHistory;
