"use client";
import React, { Suspense, useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import AddProductComponent from "../AddProductComponent";
import Switch from "react-switch";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Category, Product, Products } from "../../../../type";
import FormattedPrice from "@/app/components/FormattedPrice";
import useSWR from "swr";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import UpdateProductComponent from "../UpdateProductComponent";
import ModalUpdateProduct from "../ModalUpdateProduct";
import { CheckCheck, Minus } from "lucide-react";
import Categories from "@/data/categories.json";
import ModalImage from "react-modal-image";

const ListProductComponent = () => {
  const [checked, setChecked] = useState(false);

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [itemProduct, setItemProduct] = useState<Product | []>();
  const [categorySearch, setCategorySearch] = useState<Number>();

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

  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const [currentPage, setCurrentPage] = useState(1);
  const url = `${process.env.SERVER_ENDPOINT}/api/supplier-board/product?page=${currentPage}&search=${searchQuery}&category=${searchQuery}`;
  const {
    data: products,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const startItem = (currentPage - 1) * products?.per_page + 1;
  const endItem = Math.min(currentPage * products?.per_page, products?.total);

  const [itemOffset, setItemOffset] = useState(0);
  const pageCount = Math.ceil(products?.total / products?.per_page);
  const handlePageClick = (selected: number) => {
    setCurrentPage(Number(selected + 1));
    const newOffset = (selected * products?.per_page) % products?.total;
    setItemOffset(newOffset);
  };
  //   console.log(products);

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
    products.data.forEach((item: Products) => {
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
    const updatedData = products.data.filter(
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
      {/* <BulkProductComponent
        isBatch={isBatch}
        closeBatch={closeBatch}
        checkedItems={checkedItemIds}
      /> */}

      <main className="h-full overflow-y-auto">
        <AddProductComponent isOpen={isModalOpen} closeModal={closeModal} />

        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto pb-14 md:pb-0">
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
                <div className={`flex flex-col sm:flex-row gap-4`}>
                  <div className="flex gap-2 fixed bottom-24 right-4">
                    <div
                      className={`${
                        checkedItemIds.length > 0 ? "block" : "hidden"
                      } flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow`}>
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
                        type="button">
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
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                          </svg>
                        </span>
                        Bulk Action
                      </button>
                    </div>
                    <div
                      className={`${
                        checkedItemIds.length > 0 ? "block" : "hidden"
                      } flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow`}>
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
                        type="button">
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
                            xmlns="http://www.w3.org/2000/svg">
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                          </svg>
                        </span>
                        Delete
                      </button>
                    </div>
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
                          stroke="currentColor"
                          fill="none"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          height="1em"
                          width="1em"
                          xmlns="http://www.w3.org/2000/svg">
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
                    type="button"
                    className="absolute right-0 top-0 mt-5 mr-1"></button>
                </div>
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <select
                    onChange={(e) => {}}
                    className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5">
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
                    {/* <button
                      disabled={!search}
                      onClick={() => {
                        handleInputChange();
                        setCurrentPage(1);
                      }}
                      className={`${
                        search
                          ? "cursor-pointer active:bg-emerald-600 hover:bg-emerald-600 bg-emerald-700"
                          : " bg-emerald-400 opacity-50"
                      } align-bottom inline-flex items-center justify-center leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent  h-12 w-full relative z-0 `}
                      type="button">
                      Search
                    </button> */}
                    <button
                      disabled={!search}
                      onClick={() => {
                        handleInputChange();
                        setCurrentPage(1);
                      }}
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium px-4 py-2 rounded-lg text-green-600 border-gray-200 border dark:text-gray-400 focus:outline-none bg-green-200 w-full mr-3 h-12 md:py-1 text-sm dark:bg-green-700"
                      type="reset">
                      <span className="text-black dark:text-gray-200">
                        Search
                      </span>
                    </button>
                  </div>
                  <div className="w-full mx-1">
                    <button
                      onClick={() => {
                        setSearchQuery("");
                      }}
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
          <div className="w-full overflow-hidden  rounded-lg mb-8 rounded-b-lg">
            <div className="flex flex-row gap-2">
              <input
                checked={selectAll}
                onChange={toggleChecked}
                id="selectAll"
                name="selectAll"
                type="checkbox"
              />
              <label htmlFor="selectAll" className="cursor-pointer">
                Select All
              </label>
            </div>
            <div className="w-full overflow-x-auto">
              {isLoading ? (
                <div className="flex flex-row justify-center items-center">
                  <span className="loading loading-dots loading-lg"></span>
                </div>
              ) : products ? (
                products.data.map((item: Product) => (
                  <div
                    key={item.id}
                    className="mt-2 overflow-hidden rounded-xl border shadow">
                    <div
                      className={`flex flex-row justify-between gap-2 p-4 items-center border ${
                        checkedItems[item.id] ? "bg-sky-200" : ""
                      }`}>
                      <div className="">
                        <input
                          onChange={() => handleCheckboxChange(item.id)}
                          value={item.id}
                          checked={checkedItems[item.id] || false}
                          id={`${item.id}`}
                          name="iphone"
                          type="checkbox"
                        />
                      </div>
                      <div className="flex justify-start flex-row items-center gap-2">
                        <div className="w-1/5">
                          <Suspense>
                            {item.product_gallery?.length > 0 ? (
                              <ModalImage
                                width={150}
                                height={150}
                                className="object-center items-center rounded-lg"
                                small={`${process.env.SERVER_ENDPOINT}${item.product_gallery[0].url}`}
                                large={`${process.env.SERVER_ENDPOINT}${item.product_gallery[0].url}`}
                                alt={item?.title}
                              />
                            ) : (
                              <ModalImage
                                className="object-center items-center"
                                small={`/images/no_image.png`}
                                large={`/images/no_image.png`}
                                alt={item?.title}
                              />
                            )}
                          </Suspense>
                          {/* {item.product_gallery?.length > 0 ? (
                            <Image
                              src={`${process.env.SERVER_ENDPOINT}${item.product_gallery[0].url}`}
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
                          )} */}
                        </div>
                        <label
                          htmlFor={`${item.id}`}
                          className="cursor-pointer ">
                          <div className="flex flex-col gap-1">
                            <div className="text-red-500 font-mono">
                              #{item.id}
                            </div>
                            <div className="">
                              {item.title}{" "}
                              <span className="text-red-600">
                                {Number(item.isNew) > 0 ? "New" : "Second"}
                              </span>
                            </div>
                            {/* <div className="text-sm font-mono">
                            <div dangerouslySetInnerHTML={{ __html: item.description }}></div>
                          </div> */}
                            <div className="text-sm font-mono">
                              <span>Category :</span>
                              <span>{item?.category?.name}</span>
                            </div>
                            <div className="text-sm font-mono">
                              <span>Set Price :</span>
                              <span>
                                <FormattedPrice amount={item.price} />
                              </span>
                            </div>
                            <div className="text-sm font-mono">
                              <span>Final Price :</span>
                              <span>
                                <FormattedPrice amount={item.company_price} />
                              </span>
                            </div>
                            <div
                              className={`text-green-700 font-mono capitalize flex flex-row gap-2`}>
                              {item.status}
                              <span className="text-slate-950"> - </span>
                              <div className="text-sky-500">
                                {item.isPublish > 0 ? "Publish" : "Draft"}
                              </div>
                            </div>
                          </div>
                        </label>
                      </div>

                      <div className="flex flex-col gap-1 font-mono justify-start items-end">
                        <div className="">Action</div>

                        <div className="flex flex-col sm:flex-row gap-1">
                          <UpdateProductComponent
                            isOpen={open}
                            closeModal={closeModal}
                            itemProducts={item}
                          />

                          <button className="p-1 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                            <p
                              data-tip="true"
                              data-for="delete"
                              className="text-xl">
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
                                className="lucide lucide-eye">
                                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                                <circle cx="12" cy="12" r="3" />
                              </svg>
                            </p>
                          </button>
                          <button
                            onClick={() => {
                              ConfirmAction(item.id, "del");
                            }}
                            className="p-1 cursor-pointer text-gray-400 hover:text-red-600 focus:outline-none">
                            <p
                              data-tip="true"
                              data-for="delete"
                              className="text-xl">
                              <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                height="24px"
                                width="24px"
                                xmlns="http://www.w3.org/2000/svg">
                                <polyline points="3 6 5 6 21 6"></polyline>
                                <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                                <line x1="10" y1="11" x2="10" y2="17"></line>
                                <line x1="14" y1="11" x2="14" y2="17"></line>
                              </svg>
                            </p>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))
              ) : (
                <div>No Data</div>
              )}
            </div>
            <div className="px-4 py-3 border-t border-gray-200 dark:border-gray-700 bg-white text-gray-500 dark:text-gray-400 dark:bg-gray-800">
              <div className="flex flex-col justify-between text-xs sm:flex-row text-gray-600 dark:text-gray-400">
                <span className="flex items-center font-semibold tracking-wide uppercase">
                  Showing {startItem} - {endItem} of {products?.total}
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
      </main>
    </>
  );
};

export default ListProductComponent;
