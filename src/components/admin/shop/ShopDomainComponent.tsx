"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Switch from "react-switch";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import {
  Category,
  Product,
  Products,
  ShopData,
  ShopDomain,
  Wallet,
  Withdraw,
} from "../../../../type";
import FormattedPrice from "@/app/components/FormattedPrice";
import useSWR from "swr";
import Swal from "sweetalert2";
import toast, { Toaster } from "react-hot-toast";
import { CheckCheck, Minus } from "lucide-react";
import Categories from "@/data/categories.json";
import { formatDateAndTime } from "@/app/helpers";

const ShopDomainComponent = () => {
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

  // const [statusFilter, setStatusFilter] = useState("General");
  const [statusFilter, setStatusFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState(1);
  const url = `${process.env.SERVER_ENDPOINT}/api/admin/shops/domains?page=${currentPage}&status=${statusFilter}`;
  const {
    data: domains,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });
  console.log(domains);
  const startItem = (currentPage - 1) * domains?.per_page + 1;
  const endItem = Math.min(currentPage * domains?.per_page, domains?.total);

  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(domains?.total / domains?.per_page);
  const handlePageClick = (selected: number) => {
    setCurrentPage(Number(selected + 1));
    const newOffset = (selected * domains?.per_page) % domains?.total;
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
    const filteredItems = domains.data.filter(
      (item: Withdraw) => item.status < 2
    );
    domains.data.forEach((item: Products) => {
      newCheckedItems[item.id] = !selectAll;
    });
    setCheckedItems(newCheckedItems);
  };
  console.log(checkedItems);
  const handleCheckboxChange = (itemId: number) => {
    // Toggle the checked state for the individual checkbox
    setCheckedItems((prevCheckedItems) => ({
      ...prevCheckedItems,
      [itemId]: !prevCheckedItems[itemId],
    }));
  };
  const checkedItemIds = Object.keys(checkedItems).filter(
    (itemId) => checkedItems[Number(itemId)]
  );
  console.log(checkedItems);
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
                `${process.env.SERVER_ENDPOINT}/api/admin/shops/domains-accept`,
                {
                  ids: checkedIds,
                  action: "accept",
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
  return (
    <>
      {/* <BulkWalletAdminComponent
        isBatch={isBatch}
        closeBatch={closeBatch}
        checkedItems={checkedItemIds}
      /> */}

      <main className="h-full overflow-y-auto">
        {/* <AddWithdrawAdminComponent
          isOpen={isModalOpen}
          closeModal={closeModal}
        /> */}
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
          <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
            Shop / Shop
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
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-shield-x">
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                          <path d="m14.5 9-5 5" />
                          <path d="m9.5 9 5 5" />
                        </svg>
                      </span>
                      Bulk Action
                    </button>
                  </div>
                  <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                      disabled={checkedItemIds.length < 1}
                      onClick={() => {
                        ConfirmAction("accept");
                      }}
                      // selectAll
                      className={`${
                        checkedItemIds.length > 0
                          ? "bg-emerald-500 cursor-pointer "
                          : "bg-emerald-300 disabled opacity-50"
                      } align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent  w-full h-12   btn-red relative z-0`}
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
                          className="lucide lucide-check-check">
                          <path d="M18 6 7 17l-5-5" />
                          <path d="m22 10-7.5 7.5L13 16" />
                        </svg>
                      </span>
                      Accept
                    </button>
                  </div>
                  {/* <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                      onClick={() => {
                        openModal();
                      }}
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                      type="button"
                    >
                      <span className="mr-2">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="lucide lucide-arrow-up-right-from-circle"
                        >
                          <path d="M22 12A10 10 0 1 1 12 2" />
                          <path d="M22 2 12 12" />
                          <path d="M16 2h6v6" />
                        </svg>
                      </span>
                      Withdraw
                    </button>
                  </div> */}
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
                    placeholder="Search Withdraw"
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
                    <option value={0}>Pending</option>
                    <option value={3}>Rejected</option>
                    <option value={1}>Processing</option>
                    <option value={2}>Transferred</option>
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
                    <td className="px-4 py-2">SHOP NAME</td>
                    <td className="px-4 py-2">DOMAIN</td>
                    <td className="px-4 py-2">PHONE</td>
                    <td className="px-4 py-2">PACKAGE</td>
                    <td className="px-4 py-2">CREATE AT</td>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-400">
                  {isLoading ? (
                    <div>Loading..</div>
                  ) : domains ? (
                    domains.data.map((item: ShopDomain, index: number) => (
                      <tr className="" key={item.id}>
                        <td className="px-4 py-2 text-center">
                          {item.status == 0 && (
                            <input
                              onChange={() => handleCheckboxChange(item.id)}
                              value={item.id}
                              checked={checkedItems[item.id] || false}
                              id={`654a3c8d73ddc60007066f53${item.id}`}
                              name="iphone"
                              type="checkbox"
                            />
                          )}
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
                                  {item.shop?.company_name}
                                </h2>
                                <span>{item?.shop?.user?.first_name}</span>
                              </div>
                            </div>
                          </label>
                        </td>
                        <td className="px-4 py-2">
                          {item.domain?.length > 0 ? (
                            <div className="">{item.domain}</div>
                          ) : (
                            "Belum Ada Domain"
                          )}
                        </td>
                        <td className="px-4 py-2">
                          {item.status == 1 ? (
                            <span className="text-sm text-green-500">
                              Online
                            </span>
                          ) : (
                            <span className="text-sm text-red-500">
                              Pending
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex flex-col justify-start">
                            {item.shop?.shop_package?.package_name}
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="text-sm font-semibold">
                            {formatDateAndTime(item?.created_at)}
                          </span>
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
                  Showing {startItem} - {endItem} of {domains?.total}
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

export default ShopDomainComponent;
