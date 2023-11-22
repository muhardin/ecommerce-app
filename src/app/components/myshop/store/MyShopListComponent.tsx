"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";
import { ShopData } from "../../../../../type";
import Image from "next/image";
import Link from "next/link";

const MyShopListComponent = () => {
  const { data: session } = useSession();
  const [shop, setShop] = useState([]);
  const fetcher = (url: string) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const [statusFilter, setStatusFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const url = `${process.env.SERVER_ENDPOINT}/api/myshop-board/`;
  const {
    data: shops,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  return (
    <div>
      <div className="rounded-lg overflow-hidden bg-white min-w-0 shadow-xs dark:bg-gray-800 mb-5">
        <div className="p-4">
          <form className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex">
            <div className="flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow">
              <div className=" lg:flex md:flex flex-grow-0">
                <div className="flex">
                  <div className="lg:flex-1 md:flex-1 mr-3 sm:flex-none">
                    <button
                      type="button"
                      className="border flex justify-center items-center border-gray-300 hover:border-emerald-400 hover:text-emerald-400  dark:text-gray-300 cursor-pointer h-10 w-20 rounded-md focus:outline-none">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="17 8 12 3 7 8"></polyline>
                        <line x1="12" y1="3" x2="12" y2="15"></line>
                      </svg>
                      <span className="text-xs">Export</span>
                    </button>
                  </div>
                  <div className="lg:flex-1 md:flex-1 mr-3  sm:flex-none">
                    <button
                      type="button"
                      className="border flex justify-center items-center h-10 w-20 hover:text-yellow-400  border-gray-300 dark:text-gray-300 cursor-pointer  py-2 hover:border-yellow-400 rounded-md focus:outline-none">
                      <svg
                        stroke="currentColor"
                        fill="none"
                        strokeWidth="2"
                        viewBox="0 0 24 24"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="mr-2"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                        <polyline points="7 10 12 15 17 10"></polyline>
                        <line x1="12" y1="15" x2="12" y2="3"></line>
                      </svg>
                      <span className="text-xs">Import</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={`block flex-col sm:flex-row gap-4`}>
              <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                <button
                  onClick={() => {}}
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                  type="button">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-package-plus">
                      <path d="M16 16h6" />
                      <path d="M19 13v6" />
                      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                      <path d="m7.5 4.27 9 5.15" />
                      <polyline points="3.29 7 12 12 20.71 7" />
                      <line x1="12" x2="12" y1="22" y2="12" />
                    </svg>
                  </span>
                  Add
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div className="relative flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <h6 className="mb-0 dark:text-white">My Store List</h6>
        </div>
        <div className="flex-auto p-4 pt-6">
          <ul className="flex flex-col pl-0 mb-0 rounded-lg">
            {shops ? (
              shops.map((item: ShopData) => (
                <li key={item.id} className="">
                  <div className="flex flex-row gap-2 w-full">
                    <div className="">
                      {item.logo ? (
                        <Image
                          className="object-cover"
                          src={`${process.env.SERVER_ENDPOINT}/storage/logo/${item.logo}`}
                          alt=""
                          width={150}
                          height={150}
                        />
                      ) : (
                        <Image
                          className="object-cover"
                          src={"/images/admin.png"}
                          alt=""
                          width={150}
                          height={150}
                        />
                      )}
                    </div>
                    <div className="relative flex flex-col md:flex-row p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 dark:bg-transparent w-4/5">
                      <div className="flex flex-col">
                        <h6 className="mb-4 text-sm leading-normal dark:text-white">
                          {item.company_name}
                        </h6>
                        <span className="mb-2 text-xs leading-tight">
                          Domain:{" "}
                          <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                            {item.domain}
                          </span>
                        </span>
                        <span className="mb-2 text-xs leading-tight">
                          Email Address:{" "}
                          <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                            {item.email}
                          </span>
                        </span>
                        <span className="text-xs leading-tight">
                          Phone Number:{" "}
                          <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                            {item.phone}
                          </span>
                        </span>
                      </div>
                      <div className="ml-auto text-right flex flex-col gap-2 justify-end">
                        <button className="bg-red-500 hover:bg-red-600 p-2 text-white rounded-lg flex flex-row items-start justify-center">
                          <span className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-power-off">
                              <path d="M18.36 6.64A9 9 0 0 1 20.77 15" />
                              <path d="M6.16 6.16a9 9 0 1 0 12.68 12.68" />
                              <path d="M12 2v4" />
                              <path d="m2 2 20 20" />
                            </svg>
                          </span>
                          Disable
                        </button>
                        <Link
                          className="bg-emerald-500 hover:bg-emerald-700 p-2 text-white rounded-lg flex flex-row items-start justify-center"
                          href={`/myshop/store/setting/${item.id}`}>
                          <span className="mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="22"
                              height="22"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2"
                              strokeLinecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-file-signature">
                              <path d="M20 19.5v.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8.5L18 5.5" />
                              <path d="M8 18h1" />
                              <path d="M18.42 9.61a2.1 2.1 0 1 1 2.97 2.97L16.95 17 13 18l.99-3.95 4.43-4.44Z" />
                            </svg>
                          </span>
                          Setting
                        </Link>
                        {/* <a
                        className="inline-block px-4 py-3 mb-0 text-sm font-bold text-center align-middle transition-all ease-in bg-transparent border-0 rounded-lg shadow-none cursor-pointer leading-pro bg-150 hover:-translate-y-px active:opacity-85 bg-x-25 text-slate-700 dark:text-white"
                        href="javascript:;"
                      >
                        <i
                          className="mr-2 leading-none fas fa-pencil-alt text-slate-700"
                          aria-hidden="true"
                        ></i>
                        Edit
                      </a> */}
                      </div>
                    </div>
                  </div>
                </li>
              ))
            ) : (
              <div>Loading...</div>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default MyShopListComponent;
