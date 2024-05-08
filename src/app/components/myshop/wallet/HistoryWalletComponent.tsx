"use client";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Wallet } from "../../../../../type";
import { formatDateAndTime } from "@/app/helpers";
import FormattedPrice from "../../FormattedPrice";
import { PictureInPicture, FileOutput, FileInput } from "lucide-react";
import ModalErrorComponent from "../../ui/ModalError";
import { useState } from "react";
import Withdraw from "./Withdraw";
import { useUserData } from "../../supplier/UserData";
import AddBankAccountForm from "./AddBankAccount";
import Modal from "./Modal";
import { useDispatch } from "react-redux";
import { closeProfileMenu, toggleProfileMenu } from "@/redux/profileSlice";
import ReactPaginate from "react-paginate";

const HistoryWalletComponent = ({ items }: { items?: any }) => {
  const { data: session } = useSession();
  const [currentPage, setCurrentPage] = useState(1);
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  // const url = process.env.SERVER_ENDPOINT + "/api/wallet/balance";
  // const {
  //   data: balance,
  //   isLoading,
  //   isValidating,
  //   error,
  // } = useSWR(url, fetcher, {
  //   refreshInterval: 6000,
  // });

  /*
Get Data History
*/

  const urlHistory =
    process.env.SERVER_ENDPOINT + "/api/wallet?page=" + currentPage;
  const { data: histories } = useSWR(urlHistory, fetcher, {
    refreshInterval: 9000,
  });
  // console.log(histories);

  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(histories?.total / histories?.per_page);
  const handlePageClick = (selected: number) => {
    setCurrentPage(Number(selected + 1));
    const newOffset = (selected * histories?.per_page) % histories?.total;
    console.log(
      `User requested page number ${selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="mt-4 overflow-hidden rounded-xl border shadow">
        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead className="hidden border-b lg:table-header-group">
            <tr className="">
              <td className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                #
              </td>
              <td
                width="50%"
                className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Type
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
            {histories ? (
              histories.data.map((item: Wallet, index: number) => (
                <tr className="" key={item.id}>
                  <td className="whitespace-no-wrap py-2 text-sm font-bold text-gray-900 sm:px-6">
                    {itemOffset + index + 1} # {item.id}
                  </td>
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                    {item.description}
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">
                        {formatDateAndTime(item.created_at)}
                      </p>
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    {formatDateAndTime(item.created_at)}
                  </td>

                  <td
                    className={`${
                      item.type == "Out" ? "text-red-600" : "text-green-600"
                    } whitespace-no-wrap py-4 px-6 text-right text-sm lg:text-left`}>
                    <div className="flex flex-row gap-1 justify-end">
                      {item.type == "Out" ? <p>-</p> : <p>+</p>}
                      <FormattedPrice amount={item.amount} />
                    </div>
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full  py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      {item.type == "Out" ? (
                        <FileInput className="text-red-600" />
                      ) : (
                        <FileOutput className="text-green-600" />
                      )}
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center text-white">
                      {item.type == "Out" ? (
                        <FileInput className="text-red-600" />
                      ) : (
                        <FileOutput className="text-green-600" />
                      )}
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <div className="flex flex-row justify-center items-center">
                <span className="loading loading-dots loading-lg"></span>
              </div>
            )}
          </tbody>
        </table>
        <div className="flex flex-row justify-end">
          <section className="flex items-center h-auto bg-white font-poppins dark:bg-gray-800 ">
            <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
              <div className="relative z-0 flex justify-center -space-x-px rounded-md">
                <button
                  disabled={currentPage < 2}
                  onClick={() => {
                    setCurrentPage(Number(currentPage - 1));
                  }}
                  className="px-4 py-2 font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 rounded-l-md hover:bg-blue-400 hover:border-blue-400 hover:text-white">
                  Previous
                </button>
                {Array.from({ length: pageCount }).map((_, index) => {
                  const page = index + 1;
                  return (
                    <button
                      onClick={() => {
                        handlePageClick(index);
                      }}
                      key={page}
                      className={`relative inline-flex items-center px-4 py-2 text-sm font-medium ${
                        page === currentPage
                          ? "text-gray-100 bg-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-800 dark:text-gray-300"
                          : "text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50"
                      }`}>
                      {page}
                    </button>
                  );
                })}

                {/* <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-three-dots"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                    </svg>
                  </span>
                  
                  <a
                    href="#"
                    className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50"
                  >
                    10{" "}
                  </a> */}
                <button
                  disabled={currentPage == pageCount}
                  onClick={() => {
                    setCurrentPage(Number(currentPage + 1));
                  }}
                  className="px-4 py-2 font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 rounded-r-md hover:bg-blue-400 hover:border-blue-400 hover:text-white">
                  Next
                </button>
              </div>
            </div>
          </section>
        </div>
        <div className="w-full flex flex-row justify-end items-center">
          {/* <section className="flex items-center h-auto bg-white font-poppins dark:bg-gray-800 ">
            <div className="justify-center flex-1 px-4 py-6 mx-auto max-w-7xl lg:py-4 md:px-6">
              <div className="relative z-0 flex justify-center -space-x-px rounded-md">
                <a
                  href="#"
                  className="px-4 py-2 font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 rounded-l-md hover:bg-blue-400 hover:border-blue-400 hover:text-white"
                >
                  Previous
                </a>
                <a
                  href="#"
                  className="relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-gray-100 bg-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-800 dark:text-gray-300 "
                >
                  1{" "}
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50"
                >
                  2{" "}
                </a>
                <a
                  href="#"
                  className="relative items-center hidden px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50 md:inline-flex"
                >
                  3{" "}
                </a>
                <span className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-three-dots"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />
                  </svg>
                </span>
                <a
                  href="#"
                  className="relative items-center hidden px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50 md:inline-flex"
                >
                  8{" "}
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50"
                >
                  9{" "}
                </a>
                <a
                  href="#"
                  className="relative inline-flex items-center px-4 py-2 text-sm font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 hover:bg-gray-50"
                >
                  10{" "}
                </a>
                <a
                  href="#"
                  className="px-4 py-2 font-medium text-blue-500 border border-blue-300 dark:border-gray-600 dark:hover:bg-gray-800 dark:bg-gray-700 dark:text-gray-300 bg-blue-50 rounded-r-md hover:bg-blue-400 hover:border-blue-400 hover:text-white"
                >
                  Next
                </a>
              </div>
            </div>
          </section> */}
        </div>
      </div>
    </>
  );
};

export default HistoryWalletComponent;
