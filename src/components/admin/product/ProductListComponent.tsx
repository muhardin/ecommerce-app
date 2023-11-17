"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Switch from "react-switch";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Category, Product, Products } from "../../../../type";
import FormattedPrice from "@/app/components/FormattedPrice";
import useSWR from "swr";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { CheckCheck, Minus } from "lucide-react";
import Categories from "@/data/categories.json";
import BulkProductAdminComponent from "./BulkProductAdminComponent";
import AddProductAdminComponent from "./AddProductAdminComponent";
import UpdateProductAdminComponent from "./UpdateProductAdminComponent";

const ProductListComponent = () => {
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

  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const [searchQuery, setSearchQuery] = useState("");
  const [debouncedSearchQuery, setDebouncedSearchQuery] = useState("");

  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setDebouncedSearchQuery(searchQuery);
    }, 300); // Adjust the debounce delay as needed (e.g., 300 milliseconds)

    // Cleanup the timer to avoid unnecessary debounced updates
    return () => clearTimeout(debounceTimer);
  }, [searchQuery]);

  const handleInputChange = () => {
    setSearchQuery(search);
  };

  // const [urlSch, setUrlSch] = useState<string>(
  //   `${process.env.SERVER_ENDPOINT}/api/admin/product?page=${currentPage}`
  // );
  const url = `${process.env.SERVER_ENDPOINT}/api/admin/product?page=${currentPage}&search=${searchQuery}`;
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
  console.log(currentPage);

  const [inLoading, setInLoading] = useState(false);
  const [errMessage, setErrMessage] = useState<string[]>([]);

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
          if (act == "del") {
            console.log(productId);
            setErrMessage([]);
            const config = {
              headers: { Authorization: `Bearer ${session?.bearer}` },
            };
            const post = await axios.delete(
              process.env.SERVER_ENDPOINT +
                "/api/supplier-board/product/delete/" +
                productId,
              config
            );

            if (post.status == 200) {
              setInLoading(false);
              toast.dismiss();
              toast.success("Success", { duration: 6000 });
            } else if (post.status == 201) {
              setErrMessage(post.data.message.error);
              toast.dismiss();
              console.log(post.data.message.error);
            } else if (post.status == 500) {
              toast.error("System on maintenance mode");
              toast.dismiss();
              // console.log(post.data.message.error);
            }
          } else {
            console.log(productId);
          }
        }
      });
  };

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
          if (act == "del") {
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
    productsItems.data.forEach((item: Products) => {
      newCheckedItems[item.id] = !selectAll;
    });
    setCheckedItems(newCheckedItems);
  };

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

  const handleDeleteChecked = () => {
    // Get the IDs of checked items
    const checkedIds = Object.keys(checkedItems)
      .filter((itemId) => checkedItems[Number(itemId)])
      .map(Number);

    // Implement your logic to delete items with the checked IDs
    // For demonstration purposes, let's log the IDs to the console
    console.log("Deleting checked items with IDs:", checkedIds);

    // After deletion, you may want to update your data source or state
    // For example, filter out the checked items from the data
    const updatedData = productsItems.data.filter(
      (item: Products) => !checkedIds.includes(item.id)
    );
    // Update the data source or state accordingly
    // setYourData(updatedData);

    // Clear the checked items
    setCheckedItems({});
    // Uncheck the "Select All" checkbox
    setSelectAll(false);
  };
  const ConfirmActionDelete = async (act?: string) => {
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
        text: "The product will be delete!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          if (act == "del") {
            const checkedIds = Object.keys(checkedItems)
              .filter((itemId) => checkedItems[Number(itemId)])
              .map(Number);
            const config = {
              headers: { Authorization: `Bearer ${session?.bearer}` },
            };
            try {
              const response = await axios.post(
                `${process.env.SERVER_ENDPOINT}/api/supplier-board/product/delete-multi`,
                {
                  ids: checkedIds,
                },
                {
                  headers: { Authorization: `Bearer ${session?.bearer}` },
                }
              );

              // Handle success, e.g., show a success message or update the local state
              console.log(response);

              // Update your data source or state accordingly
              // setYourData(updatedData);
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
  return (
    <>
      <BulkProductAdminComponent
        isBatch={isBatch}
        closeBatch={closeBatch}
        checkedItems={checkedItemIds}
      />

      <main className="h-full overflow-y-auto">
        <AddProductAdminComponent
          isOpen={isModalOpen}
          closeModal={closeModal}
        />
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
          <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
            Products
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
                            xmlns="http://www.w3.org/2000/svg"
                          >
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
                            xmlns="http://www.w3.org/2000/svg"
                          >
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
                  } flex flex-col sm:flex-row gap-4`}
                >
                  <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                      disabled={checkedItemIds.length < 1}
                      onClick={() => {
                        setIsBatch(true);
                      }}
                      className={`${
                        checkedItemIds.length > 0
                          ? "bg-emerald-500 cursor-pointer"
                          : "bg-emerald-300 opacity-50"
                      } align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white  border border-transparent  w-full h-12 btn-gray`}
                      type="button"
                    >
                      <span className="mr-2">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                        </svg>
                      </span>
                      Bulk Action
                    </button>
                  </div>
                  <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                      disabled={checkedItemIds.length < 1}
                      onClick={() => {
                        ConfirmActionDelete("del");
                      }}
                      // selectAll
                      className={`${
                        checkedItemIds.length > 0
                          ? "bg-red-500 cursor-pointer "
                          : "bg-red-300 disabled opacity-50"
                      } align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent  w-full h-12   btn-red relative z-0`}
                      type="button"
                    >
                      <span className="mr-2">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <polyline points="3 6 5 6 21 6"></polyline>
                          <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                          <line x1="10" y1="11" x2="10" y2="17"></line>
                          <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                      </span>
                      Delete
                    </button>
                  </div>
                  <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                    <button
                      onClick={() => {
                        openModal();
                      }}
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                      type="button"
                    >
                      <span className="mr-2">
                        <svg
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line x1="12" y1="5" x2="12" y2="19"></line>
                          <line x1="5" y1="12" x2="19" y2="12"></line>
                        </svg>
                      </span>
                      Add Product
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
                    onChange={(e) => setSearch(e.target.value)}
                    className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                    type="search"
                    name="search"
                    placeholder="Search Product"
                  />
                  <button
                    type="submit"
                    className="absolute right-0 top-0 mt-5 mr-1"
                  ></button>
                </div>
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
                    <option selected>All</option>
                    {Categories.map((item: any) => (
                      <option key={item.id} value={item.id}>
                        {item.name}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <select className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
                    <option value="All">Price</option>
                    <option value="low">Low to High</option>
                    <option value="high">High to Low</option>
                    <option value="published">Published</option>
                    <option value="unPublished">Unpublished</option>
                    <option value="status-selling">Status - Selling</option>
                    <option value="status-out-of-stock">
                      {" "}
                      Status - Out of Stock
                    </option>
                    <option value="date-added-asc">Date Added (Asc)</option>
                    <option value="date-added-desc">Date Added (Desc)</option>
                    <option value="date-updated-asc">Date Updated (Asc)</option>
                    <option value="date-updated-desc">
                      Date Updated (Desc)
                    </option>
                  </select>
                </div>
                <div className="flex items-center gap-2 flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <div className="w-full mx-1">
                    <button
                      disabled={!search}
                      onClick={() => {
                        handleInputChange();
                      }}
                      className={`${
                        search
                          ? "cursor-pointer active:bg-emerald-600 hover:bg-emerald-600 bg-emerald-700"
                          : " bg-emerald-400 opacity-50"
                      } align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent  h-12 w-full `}
                      type="button"
                    >
                      Search
                    </button>
                  </div>
                  <div className="w-full mx-1">
                    <button
                      onClick={() => {
                        setSearchQuery("");
                      }}
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium px-4 py-2 rounded-lg text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none bg-gray-200 w-full mr-3 h-12 md:py-1 text-sm dark:bg-gray-700"
                      type="reset"
                    >
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
                    <td className="px-4 py-2">
                      <input
                        checked={selectAll}
                        onChange={toggleChecked}
                        id="selectAll"
                        name="selectAll"
                        type="checkbox"
                      />
                    </td>
                    <td className="px-4 py-2">PRODUCT NAME</td>
                    <td className="px-4 py-2">CATEGORY</td>
                    <td className="px-4 py-2">price</td>
                    <td className="px-4 py-2">Sale Price</td>
                    <td className="px-4 py-2">STOCK</td>
                    <td className="px-4 py-2">STATUS</td>
                    <td className="px-4 py-2 text-center">View</td>
                    <td className="px-4 py-2 text-center">PUBLISHED</td>
                    <td className="px-4 py-2 text-right">ACTIONS</td>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-100 dark:divide-gray-700 dark:bg-gray-800 text-gray-800 dark:text-gray-400">
                  {productsItems ? (
                    productsItems.data.map((item: Product) => (
                      <tr className="" key={item.id}>
                        <td className="px-4 py-2">
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
                          <div className="flex items-center">
                            <div className="rounded-full inline-block w-8 h-8 p-1 mr-2 md:block bg-gray-50 shadow-none">
                              <Image
                                width={250}
                                height={250}
                                className="object-cover w-full h-full rounded-full"
                                src={`${process.env.SERVER_ENDPOINT}${item.image}`}
                                alt="product"
                                loading="lazy"
                              />
                              <div
                                className="absolute rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div className="flex flex-col gap-1">
                              <h2 className="text-sm font-medium ">
                                {item.title}
                              </h2>
                              <span className="text-sm font-medium text-emerald-700">
                                {item.supplier.supplier_name}
                              </span>
                              <span className="text-sm font-medium text-emerald-700">
                                {item.supplier.city_name}
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="text-sm">{item.category?.name}</span>
                        </td>
                        <td className="px-4 py-2">
                          <span className="text-sm font-semibold">
                            <FormattedPrice amount={item.price} />
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <span className="text-sm font-semibold">
                            <FormattedPrice amount={item.company_price} />
                          </span>
                        </td>
                        <td className="px-4 py-2">
                          <span className="text-sm">{item.quantity}</span>
                        </td>
                        <td className="px-4 py-2">
                          {item.status == "Pending" ? (
                            <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-white bg-yellow-500 dark:bg-emerald-800 dark:text-emerald-100">
                              {item.status}
                            </span>
                          ) : item.status == "Selling" ? (
                            <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                              {item.status}
                            </span>
                          ) : (
                            <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-white bg-red-600 dark:bg-emerald-800 dark:text-emerald-100">
                              {item.status}
                            </span>
                          )}
                        </td>
                        <td className="px-4 py-2">
                          <a
                            className="flex justify-center text-gray-400 hover:text-emerald-600"
                            href="/product/654a3c8d73ddc60007066f53"
                          >
                            <p
                              data-tip="true"
                              data-for="view"
                              className="text-xl"
                            >
                              <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <circle cx="11" cy="11" r="8"></circle>
                                <line
                                  x1="21"
                                  y1="21"
                                  x2="16.65"
                                  y2="16.65"
                                ></line>
                                <line x1="11" y1="8" x2="11" y2="14"></line>
                                <line x1="8" y1="11" x2="14" y2="11"></line>
                              </svg>
                            </p>
                          </a>
                        </td>
                        <td className="px-4 py-2 text-center">
                          <div
                            className=""
                            onClick={() => {
                              ConfirmActionPublish(item.id, "del");
                            }}
                          >
                            {item.isPublish == 1 ? (
                              <button>
                                <CheckCheck color="green" />
                              </button>
                            ) : (
                              <button>
                                <Minus color="red" />
                              </button>
                            )}
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex justify-end text-right">
                            {/* <button
                              onClick={(e) => {
                                modalUpdate(item);
                              }}
                              className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none"
                            >
                              <p
                                data-tip="true"
                                data-for="edit"
                                className="text-xl"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                                  <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                                </svg>
                              </p>
                            </button> */}

                            <UpdateProductAdminComponent
                              isOpen={isModalOpen}
                              closeModal={closeModal}
                              itemProducts={item}
                            />
                            {/* <UpdateProductComponent
                              isOpen={open}
                              closeModal={closeModal}
                              itemProducts={item}
                            /> */}
                            <button
                              onClick={() => {
                                ConfirmAction(item.id, "del");
                              }}
                              className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none"
                            >
                              <p
                                data-tip="true"
                                data-for="delete"
                                className="text-xl"
                              >
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg"
                                >
                                  <polyline points="3 6 5 6 21 6"></polyline>
                                  <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                  <line x1="10" y1="11" x2="10" y2="17"></line>
                                  <line x1="14" y1="11" x2="14" y2="17"></line>
                                </svg>
                              </p>
                            </button>
                          </div>
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
                                aria-label="loading"
                              >
                                <span className="sr-only">Loading...</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </td>
                    </tr>
                  )}

                  {/* <tr className="">
                    <td className="px-4 py-2">
                      <input
                        id="6548e6134866d2000960390c"
                        name="dưdwdw212"
                        type="checkbox"
                      />
                    </td>
                    <td className="px-4 py-2">
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
                        </div>

                        <div>
                          <h2 className="text-sm font-medium ">dưdwdw212</h2>
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">Dog Care</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$111.00</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm font-semibold">$11.00</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="text-sm">0</span>
                    </td>
                    <td className="px-4 py-2">
                      <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-red-500 bg-red-100 dark:text-red-100 dark:bg-red-800">
                        Sold Out
                      </span>
                    </td>
                    <td className="px-4 py-2">
                      <a
                        className="flex justify-center text-gray-400 hover:text-emerald-600"
                        href="/product/6548e6134866d2000960390c"
                      >
                        <p data-tip="true" data-for="view" className="text-xl">
                          <svg
                            stroke="currentColor"
                            fill="none"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="11" cy="11" r="8"></circle>
                            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            <line x1="11" y1="8" x2="11" y2="14"></line>
                            <line x1="8" y1="11" x2="14" y2="11"></line>
                          </svg>
                        </p>
                      </a>
                    </td>
                    <td className="px-4 py-2 text-center"></td>
                    <td className="px-4 py-2">
                      <div className="flex justify-end text-right">
                        <button className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none">
                          <p
                            data-tip="true"
                            data-for="edit"
                            className="text-xl"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                            </svg>
                          </p>
                        </button>
                        <button className="p-2 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                          <p
                            data-tip="true"
                            data-for="delete"
                            className="text-xl"
                          >
                            <svg
                              stroke="currentColor"
                              fill="none"
                              strokeWidth="2"
                              viewBox="0 0 24 24"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              height="1em"
                              width="1em"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <polyline points="3 6 5 6 21 6"></polyline>
                              <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                              <line x1="10" y1="11" x2="10" y2="17"></line>
                              <line x1="14" y1="11" x2="14" y2="17"></line>
                            </svg>
                          </p>
                        </button>
                      </div>
                    </td>
                  </tr> */}
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
                          aria-label="Previous"
                        >
                          <svg
                            className="h-3 w-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            ></path>
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
                              type="button"
                            >
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
                          aria-label="Next"
                        >
                          <svg
                            className="h-3 w-3"
                            aria-hidden="true"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                              fillRule="evenodd"
                            ></path>
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
      </main>
    </>
  );
};

export default ProductListComponent;
