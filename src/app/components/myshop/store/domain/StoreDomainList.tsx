"use client";

import { useSession } from "next-auth/react";
import { useState } from "react";
import useSWR from "swr";
import Image from "next/image";
import Link from "next/link";
import { ShopDomain } from "../../../../../../type";
import AddDomain from "./AddDomain";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import axios from "axios";

const StoreDomainList = ({ id }: { id: Number }) => {
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
  const url = `${process.env.SERVER_ENDPOINT}/api/myshop-board/domains/${id}`;
  const {
    data: domains,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const closeModal = () => {
    setIsOpen(false);
  };
  const SubmitDelete = async (id?: number, act?: string) => {
    const config = {
      headers: { Authorization: `Bearer ${session?.bearer}` },
    };
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-darkText mr-2 ml-2 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200",
        cancelButton:
          "bg-darkText hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          // console.log(productId);
          if (act == "del") {
            toast.loading("...loading");
            await axios
              .delete(
                `${process.env.SERVER_ENDPOINT}/api/myshop-board/domains/domain-delete/${id}`,
                {
                  headers: {
                    Authorization: `Bearer ${session?.bearer}`, // Include the bearer token
                  },
                }
              )
              .then((response: any) => {
                if (response.status == 200) {
                  toast.dismiss();
                  toast.success("Data deleted successfully", {
                    duration: 3000,
                  });
                } else if (response.status == 201) {
                  toast.error("Fail!");
                  toast.dismiss();
                }
              });
          } else {
          }
        }
      });
  };
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <AddDomain isOpen={isOpen} closeModal={closeModal} id={id} />
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
              <div className="flex flex-row gap-2">
                <Link
                  href={"/myshop/store"}
                  className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-red-500 border border-transparent active:bg-red-600 hover:bg-red-600 w-full h-12"
                  type="button">
                  <span className="mr-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-undo-2">
                      <path d="M9 14 4 9l5-5" />
                      <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
                    </svg>
                  </span>
                  Back
                </Link>

                <button
                  onClick={() => {
                    setIsOpen(true);
                  }}
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
      <div className=" flex flex-col min-w-0 break-words bg-white border-0 shadow-xl dark:bg-slate-850 dark:shadow-dark-xl rounded-2xl bg-clip-border">
        <div className="p-6 px-4 pb-0 mb-0 border-b-0 rounded-t-2xl">
          <h6 className="mb-0 dark:text-white">My Store List</h6>
        </div>
        <div className="flex-auto p-4 pt-6">
          <ul className="flex flex-col pl-0 mb-0 rounded-lg">
            {domains ? (
              domains.map((item: ShopDomain) => (
                <li key={item.id} className="">
                  <div className="flex flex-col sm:flex-row gap-2 w-full">
                    <div className=" flex flex-col md:flex-row p-2 md:p-6 mb-2 border-0 rounded-t-inherit rounded-xl bg-gray-50 dark:bg-transparent w-full justify-between">
                      <div className="flex flex-col">
                        <h6 className="mb-4 text-sm leading-normal dark:text-white">
                          {item.shop.company_name}
                        </h6>
                        <span className="mb-2 text-xs leading-tight">
                          Domain:{" "}
                          <span className="font-semibold text-slate-700 dark:text-white sm:ml-2">
                            {item.domain}
                          </span>
                        </span>
                        <span className="mb-2 text-xs leading-tight flex flex-row gap-2 items-center">
                          <span> Status :</span>
                          {item.status ? (
                            <span className="font-semibold dark:text-white sm:ml-2 text-green-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-check-check">
                                <path d="M18 6 7 17l-5-5" />
                                <path d="m22 10-7.5 7.5L13 16" />
                              </svg>
                            </span>
                          ) : (
                            <span className="font-semibold dark:text-white sm:ml-2 text-red-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                className="lucide lucide-copy-x">
                                <line x1="12" x2="18" y1="12" y2="18" />
                                <line x1="12" x2="18" y1="18" y2="12" />
                                <rect
                                  width="14"
                                  height="14"
                                  x="8"
                                  y="8"
                                  rx="2"
                                  ry="2"
                                />
                                <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
                              </svg>
                            </span>
                          )}
                        </span>
                      </div>
                      <div className=" text-right flex flex-row sm:flex-col gap-1 sm:gap-2 justify-end p-2">
                        <button
                          onClick={() => {
                            SubmitDelete(item.id, "del");
                          }}
                          className="text-sm bg-red-500 hover:bg-red-600 p-2 text-white rounded-lg flex flex-row items-start justify-center">
                          <span className="mr-1 sm:mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-package-x">
                              <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14" />
                              <path d="m7.5 4.27 9 5.15" />
                              <polyline points="3.29 7 12 12 20.71 7" />
                              <line x1="12" x2="12" y1="22" y2="12" />
                              <path d="m17 13 5 5m-5 0 5-5" />
                            </svg>
                          </span>
                          Delete
                        </button>
                        <button className="text-sm bg-sky-500 hover:bg-sky-600 p-2 text-white rounded-lg flex flex-row items-start justify-center">
                          <span className="mr-1 sm:mr-2">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="18"
                              height="18"
                              viewBox="0 0 24 24"
                              fill="none"
                              stroke="currentColor"
                              stroke-width="2"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              className="lucide lucide-globe">
                              <circle cx="12" cy="12" r="10" />
                              <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                              <path d="M2 12h20" />
                            </svg>
                          </span>
                          Update
                        </button>

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

export default StoreDomainList;
