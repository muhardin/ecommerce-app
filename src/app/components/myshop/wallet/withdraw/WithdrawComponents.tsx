"use client";
import FormattedPrice from "@/app/components/FormattedPrice";
import { formatDateAndTime } from "@/app/helpers";
import { CheckCheck, FileInput, FileOutput } from "lucide-react";
import { Wallet, Withdraw } from "../../../../../../type";
import { useState } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import ReactPaginate from "react-paginate";
import Link from "next/link";

const WithdrawComponents = ({ items }: { items?: Withdraw }) => {
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

  const urlHistory =
    process.env.SERVER_ENDPOINT + "/api/wallet/withdraw?page=" + currentPage;
  const { data: histories } = useSWR(urlHistory, fetcher, {
    refreshInterval: 9000,
  });

  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(histories?.total / histories?.per_page);
  const handlePageClick = (selected: number) => {
    setCurrentPage(Number(selected + 1));
    const newOffset = (selected * histories?.per_page) % histories?.total;
    setItemOffset(newOffset);
  };

  return (
    <>
      <div className="mt-2 overflow-hidden rounded-xl border shadow">
        <table className="min-w-full border-separate border-spacing-y-2 border-spacing-x-2">
          <thead className="hidden border-b lg:table-header-group">
            <tr className="">
              <td className="whitespace-normal py-2 text-sm font-medium text-gray-500 sm:px-4">
                #
              </td>
              <td
                width="50%"
                className="whitespace-normal py-4 text-sm font-medium text-gray-500 sm:px-6">
                Invoice
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
              histories.data.map((item: Withdraw, index: number) => (
                <tr className="flex items-center justify-between" key={item.id}>
                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    {itemOffset + index + 1} #{item.id}
                  </td>
                  <td
                    width="50%"
                    className="whitespace-no-wrap py-4 text-sm font-bold text-gray-900 sm:px-6">
                    <p>{item.bank_name}</p>
                    <p>{item.bank_account_name}</p>
                    <p>{item.bank_account_number}</p>
                    <div className="mt-1 lg:hidden">
                      <p className="font-normal text-gray-500">
                        {formatDateAndTime(item.created_at)}
                      </p>
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    {formatDateAndTime(item.created_at)}
                  </td>

                  <td className="whitespace-no-wrap py-4 px-6 text-right text-sm text-gray-600 lg:text-left">
                    <FormattedPrice amount={item.amount} />
                    <div className="flex mt-1 ml-auto w-fit items-center rounded-full  py-2 px-3 text-left text-xs font-medium text-white lg:hidden">
                      {item.status === 2 ? (
                        <CheckCheck className="text-green-600" />
                      ) : item.status === 3 ? (
                        <div className="text-red-600">
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
                            className="lucide lucide-badge-alert">
                            <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                            <line x1="12" x2="12" y1="8" y2="12" />
                            <line x1="12" x2="12.01" y1="16" y2="16" />
                          </svg>
                        </div>
                      ) : (
                        <div className="text-red-600">
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
                            className="lucide lucide-loader">
                            <line x1="12" x2="12" y1="2" y2="6" />
                            <line x1="12" x2="12" y1="18" y2="22" />
                            <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
                            <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
                            <line x1="2" x2="6" y1="12" y2="12" />
                            <line x1="18" x2="22" y1="12" y2="12" />
                            <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
                            <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
                          </svg>
                        </div>
                      )}
                    </div>
                  </td>

                  <td className="whitespace-no-wrap hidden py-4 text-sm font-normal text-gray-500 sm:px-6 lg:table-cell">
                    <div className="inline-flex items-center text-white">
                      {item.status === 2 ? (
                        <CheckCheck className="text-green-600" />
                      ) : (
                        <div className="text-red-600">
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
                            className="lucide lucide-loader">
                            <line x1="12" x2="12" y1="2" y2="6" />
                            <line x1="12" x2="12" y1="18" y2="22" />
                            <line x1="4.93" x2="7.76" y1="4.93" y2="7.76" />
                            <line x1="16.24" x2="19.07" y1="16.24" y2="19.07" />
                            <line x1="2" x2="6" y1="12" y2="12" />
                            <line x1="18" x2="22" y1="12" y2="12" />
                            <line x1="4.93" x2="7.76" y1="19.07" y2="16.24" />
                            <line x1="16.24" x2="19.07" y1="7.76" y2="4.93" />
                          </svg>
                        </div>
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
        {histories ? (
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
        ) : (
          <div></div>
        )}
        {/* <div className="flex flex-row justify-end p-4">
          
          <ReactPaginate
            className="flex flex-row gap-2"
            pageCount={pageCount}
            pageRangeDisplayed={8}
            marginPagesDisplayed={1}
            onPageChange={handlePageClick}
            containerClassName="pagination flex space-x-2"
            activeClassName="active"
            breakLabel={"..."}
            previousLabel={"Previous"}
            nextLabel={"Next"}
            pageClassName={""}
            pageLinkClassName={
              "text-white bg-sky-500 p-2 px-4 rounded-md hover:bg-blue-300"
            }
            previousClassName=""
            previousLinkClassName=""
            nextClassName=""
            nextLinkClassName=""
          />
        </div> */}
      </div>
    </>
  );
};

export default WithdrawComponents;
