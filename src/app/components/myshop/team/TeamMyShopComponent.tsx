"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import {
  Category,
  Product,
  Products,
  User,
  Wallet,
  Withdraw,
} from "../../../../../type";
import useSWR from "swr";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { formatDateAndTime } from "@/app/helpers";
import AddTeamComponent from "./AddTeamComponent";

const TeamMyShopComponent = () => {
  const [checked, setChecked] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemProduct, setItemProduct] = useState<Product | []>();

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [content, setContent] = useState<string>("");
  const handleEditorChange = (newContent: string) => {
    setContent(newContent);
  };
  const { data: session } = useSession();

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
  const url = `${process.env.SERVER_ENDPOINT}/api/myshop-board/referral?page=${currentPage}&status=${statusFilter}`;
  const {
    data: productsItems,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const startItem = (currentPage - 1) * productsItems?.per_page + 1;
  const endItem = Math.min(
    currentPage * productsItems?.per_page,
    productsItems?.total
  );

  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(productsItems?.total / productsItems?.per_page);
  const handlePageClick = (selected: number) => {
    setCurrentPage(Number(selected + 1));
    const newOffset =
      (selected * productsItems?.per_page) % productsItems?.total;
    setItemOffset(newOffset);
  };
  //   console.log(products);

  const [inLoading, setInLoading] = useState(false);
  const [errMessage, setErrMessage] = useState<string[]>([]);

  const ConfirmActionPublish = async (productId?: number, act?: string) => {
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
        title: "Apakah anda yakin ?",
        text: "Status publikasi product akan diganti!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, change it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          if (act == "accept") {
          } else {
            console.log(productId);
          }
        }
      });
  };
  const [open, setOpen] = useState(false);

  const [selectAll, setSelectAll] = useState(false);
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({});

  const toggleChecked = () => {
    setSelectAll(!selectAll);
    // If "Select All" is checked, set all items to checked; otherwise, set all to unchecked
    const newCheckedItems: Record<number, boolean> = {};
    productsItems.data.forEach((item: User) => {
      newCheckedItems[item.id] = !selectAll;
    });
    setCheckedItems(newCheckedItems);
  };

  const handleCheckboxChange = (itemId: number) => {
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };
  const checkedItemIds = Object.keys(checkedItems).filter(
    (itemId) => checkedItems[Number(itemId)]
  );

  const ConfirmAction = async (act?: string) => {
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
        text: "The withdraw will be accepted!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, accept it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          if (act == "accept") {
            toast.loading("loading...");
            const checkedIds = Object.keys(checkedItems)
              .filter((itemId) => checkedItems[Number(itemId)])
              .map(Number);
            const config = {
              headers: { Authorization: `Bearer ${session?.bearer}` },
            };
            try {
              const response = await axios.post(
                `${process.env.SERVER_ENDPOINT}/api/admin/wallet/withdraw/multi-accept`,
                {
                  id: checkedIds,
                },
                {
                  headers: { Authorization: `Bearer ${session?.bearer}` },
                }
              );
              if (response.status == 200) {
                toast.dismiss();
                toast.success("Data updated successfully", { duration: 6000 });
              }
            } catch (error) {
              // Handle error, e.g., show an error message
              console.error("Error deleting items:", error);
            } finally {
              // Clear the checked items
              setCheckedItems({});
              // Uncheck the "Select All" checkbox
              setSelectAll(false);
            }
          } else {
          }
        }
      });
  };
  const [isBatch, setIsBatch] = useState(false);
  const closeBatch = () => {
    setIsBatch(!isBatch);
  };

  const onFilter = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setStatusFilter(e.target.value);
  };

  console.log(checkedItems);

  const inputRef = useRef<HTMLInputElement>(null);

  const handleCopyClick = () => {
    if (inputRef.current) {
      // Copy the value to the clipboard
      navigator.clipboard
        .writeText(inputRef.current.value)
        .then(() => {
          console.log("Text successfully copied to clipboard");
          toast.success("successfully copied");
        })
        .catch((err) => {
          console.error("Unable to copy text to clipboard", err);
        });
    }
  };

  return (
    <>
      <main className="h-full overflow-y-auto">
        <AddTeamComponent isOpen={isModalOpen} closeModal={closeModal} />
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
          <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
            Users
          </h1>
          <div className="rounded-lg overflow-hidden bg-white min-w-0 shadow-xs dark:bg-gray-800 mb-5">
            <div className="p-4">
              <form className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex">
                <div className="flex-grow-0 sm:flex-grow md:flex-grow lg:flex-grow xl:flex-grow">
                  <div className=" lg:flex md:flex flex-grow-0">
                    <div className="flex">
                      <div className="lg:flex-1 md:flex-1 mr-3 sm:flex-none">
                        <button className="border flex justify-center items-center border-gray-300 hover:border-emerald-400 hover:text-emerald-400  dark:text-gray-300 cursor-pointer h-10 w-20 rounded-md focus:outline-none">
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
                        <button className="border flex justify-center items-center h-10 w-20 hover:text-yellow-400  border-gray-300 dark:text-gray-300 cursor-pointer  py-2 hover:border-yellow-400 rounded-md focus:outline-none">
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
                <div className="flex flex-col items-start justify-center w-full lg:w-4/12">
                  {/* <span className="text-xs">Referral Link</span> */}
                  <div className="flex flex-col sm:flex-row gap-4 border border-gray-500 rounded-xl p-1 w-full">
                    <div className="flex flex-col w-full">
                      <input
                        ref={inputRef}
                        type="text"
                        className="bg-gray-100 rounded-xl text-sm px-2 w-full"
                        value={`${process.env.REFERRAL_PAGE}/ref/${session?.username}`}
                      />
                      <span className="text-xs ml-2">Referral Link</span>
                    </div>
                    <button
                      onClick={handleCopyClick}
                      type="button"
                      className="p-1 px-4 rounded-lg bg-emerald-500 text-teal-50 cursor-pointer flex flex-row items-center hover:bg-emerald-600">
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="15"
                          height="15"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-clipboard-paste">
                          <path d="M15 2H9a1 1 0 0 0-1 1v2c0 .6.4 1 1 1h6c.6 0 1-.4 1-1V3c0-.6-.4-1-1-1Z" />
                          <path d="M8 4H6a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2M16 4h2a2 2 0 0 1 2 2v2M11 14h10" />
                          <path d="m17 10 4 4-4 4" />
                        </svg>
                      </span>
                      Copy
                    </button>
                  </div>
                </div>
                <div
                  className={`${
                    isModalOpen ? "hidden" : "block"
                  } flex flex-col sm:flex-row gap-4`}>
                  <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                      disabled={checkedItemIds.length < 1}
                      onClick={() => {
                        setIsBatch(true);
                      }}
                      className={`${
                        checkedItemIds.length > 0
                          ? "bg-red-500 cursor-pointer"
                          : "bg-red-300 opacity-50"
                      } align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white  border border-transparent  w-full h-12 btn-gray`}
                      type="button">
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-send">
                          <path d="m22 2-7 20-4-9-9-4Z" />
                          <path d="M22 2 11 13" />
                        </svg>
                      </span>
                      Send Message
                    </button>
                  </div>
                  <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                      onClick={() => {
                        openModal();
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
                          strokeLinejoin="round"
                          className="lucide lucide-user-plus">
                          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                          <circle cx="9" cy="7" r="4" />
                          <line x1="19" x2="19" y1="8" y2="14" />
                          <line x1="22" x2="16" y1="11" y2="11" />
                        </svg>
                      </span>
                      Add
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="rounded-lg bg-white dark:bg-gray-800 min-w-0 shadow-xs overflow-hidden rounded-t-lg rounded-0 mb-4">
            <div className="p-4">
              <form className="py-3 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex">
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <input
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                    type="search"
                    name="search"
                    placeholder="Search User"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-1"></button>
                </div>
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <select
                    onChange={onFilter}
                    className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
                    <option disabled selected>
                      Select Status
                    </option>
                    <option value={9}>All</option>
                    <option value={0}>Guest</option>
                    <option value={2}>Seller</option>
                    <option value={1}>Supplier</option>
                    <option value={3}>Staff</option>
                  </select>
                </div>

                <div className="flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <div className="w-full mx-1">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full bg-emerald-700"
                      type="submit">
                      Filter
                    </button>
                  </div>
                  <div className="w-full mx-1">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium px-4 py-2 rounded-lg text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none bg-gray-200 w-full mr-3 h-12 md:py-1 text-sm dark:bg-gray-700"
                      type="reset">
                      <span className="text-black dark:text-gray-200">
                        Reset
                      </span>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="w-full overflow-hidden border border-gray-200 dark:border-gray-700 rounded-lg mb-8 rounded-b-lg">
            <div className="w-full overflow-x-auto">
              <table className="w-full whitespace-nowrap">
                <thead className="text-xs font-semibold tracking-wide text-left text-gray-500 uppercase border-b border-gray-200 dark:border-gray-700 bg-gray-100 dark:text-gray-400 dark:bg-gray-800">
                  <tr>
                    <td className="px-4 py-2 text-center">
                      <input
                        checked={selectAll}
                        onChange={toggleChecked}
                        id="selectAll"
                        name="selectAll"
                        type="checkbox"
                      />
                    </td>
                    <td className="px-4 py-2">MEMBER NAME</td>
                    <td className="px-4 py-2">PHONE</td>
                    <td className="px-4 py-2">IS PAID</td>
                    <td className="px-4 py-2">IS</td>
                    <td className="px-4 py-2">JOIN AT</td>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-400">
                  {productsItems ? (
                    productsItems.data.map((item: User, index: number) => (
                      <tr className="" key={item.id}>
                        <td className="px-4 py-2 text-center">
                          <input
                            onChange={() => handleCheckboxChange(item.id)}
                            value={item.id}
                            checked={checkedItems[item.id] || false}
                            id={`654a3c8d73ddc60007066f53${item.id}`}
                            name="iphone"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <label htmlFor={`654a3c8d73ddc60007066f53${item.id}`}>
                            <div className="flex items-center">
                              <div className="rounded-full inline-block w-8 h-8 p-1 mr-2 md:block bg-gray-50 shadow-none">
                                <Image
                                  width={250}
                                  height={250}
                                  className="object-cover w-full h-full rounded-full"
                                  src="/images/no_image.png"
                                  alt="product"
                                  loading="lazy"
                                />
                                <div
                                  className="absolute rounded-full shadow-inner"
                                  aria-hidden="true"></div>
                              </div>
                              <div>
                                <h2 className="text-sm font-medium ">
                                  {item.first_name} {item.last_name}
                                </h2>
                                <span>{item.email}</span>
                              </div>
                            </div>
                          </label>
                        </td>
                        <td className="px-4 py-2">
                          <div className="">{item.phone_number}</div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="text-sm text-red-700 capitalize">
                            {item.is_seller == 2 ? (
                              <span>Unpaid</span>
                            ) : (
                              <span>Active</span>
                            )}
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex flex-col justify-start gap-2">
                            {item.is_seller ? (
                              item.is_seller == 2 ? (
                                <span className="text-sm text-red-400 capitalize">
                                  Pending Payment
                                </span>
                              ) : (
                                <span className="text-sm text-emerald-400 capitalize">
                                  Seller
                                </span>
                              )
                            ) : null}

                            {item.is_supplier ? (
                              <span className="text-sm text-green-600 capitalize">
                                Supplier
                              </span>
                            ) : null}
                            {item.is_company ? (
                              <span className="text-sm text-sky-600 capitalize">
                                Staff
                              </span>
                            ) : null}
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="text-sm font-semibold">
                            {formatDateAndTime(item.created_at)}
                          </span>
                          {/* <UpdateUserComponent
                            isOpen={isModalOpen}
                            closeModal={closeBatch}
                            itemProducts={item}
                          /> */}
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr>
                      <td colSpan={10} className="text-center">
                        <div className="min-h-[15rem] flex flex-col bg-white dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                          <div className="flex flex-auto flex-col justify-center items-center p-4 md:p-5">
                            <div className="flex justify-center">
                              <div
                                className="animate-spin inline-block w-6 h-6 border-[3px] border-current border-t-transparent text-blue-600 rounded-full dark:text-blue-500"
                                role="status"
                                aria-label="loading">
                                <span className="sr-only">Loading...</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
              <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
                <span className="flex items-center font-semibold tracking-wide uppercase">
                  Showing {startItem} - {endItem} of {productsItems?.total}
                </span>

                <div className="flex mt-2 sm:mt-auto sm:justify-end">
                  <nav aria-label="Product Page Navigation">
                    <ul className="inline-flex items-center">
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

                      {/* <li>
                        <span className="px-2 py-1">...</span>
                      </li>
                      <li>
                        <button
                          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium px-3 py-1 rounded-md text-xs text-gray-600 dark:text-gray-400 focus:outline-none border border-transparent active:bg-transparent hover:bg-gray-100 dark:hover:bg-gray-500 dark:hover:text-gray-300 dark:hover:bg-opacity-10"
                          type="button"
                        >
                          16
                        </button>
                      </li> */}
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
                  </nav>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default TeamMyShopComponent;
