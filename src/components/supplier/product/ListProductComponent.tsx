"use client";
import React, { useEffect, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import AddProductComponent from "../AddProductComponent";
import Switch from "react-switch";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import { Product } from "../../../../type";
import FormattedPrice from "@/app/components/FormattedPrice";
import useSWR from "swr";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import UpdateProductComponent from "../UpdateProductComponent";
import ModalUpdateProduct from "../ModalUpdateProduct";
import { CheckCheck, Minus } from "lucide-react";

const ListProductComponent = () => {
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };
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
  const url = `${process.env.SERVER_ENDPOINT}/api/supplier-board/product?page=${currentPage}`;
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
    console.log(
      `User requested page number ${selected}, which is offset ${newOffset}`
    );
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

  return (
    <>
      <main className="h-full overflow-y-auto">
        <AddProductComponent isOpen={isModalOpen} closeModal={closeModal} />
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
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent opacity-50 w-full h-12 btn-gray"
                      disabled
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
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent opacity-50 w-full h-12 bg-red-300 disabled btn-red"
                      disabled
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
                    <option value="All">Category</option>
                    <option value="654922fa74d64c0008819ad3">
                      Sandala_sub
                    </option>
                    <option value="65492259663f73000864e340">jkhlhjk</option>
                    <option value="654921abd422f40008ed4564">dfgh</option>
                    <option value="6549127a6e8a1b0008844814">test</option>
                    <option value="65477f1111cbdc0008df8bc0">
                      Real Estate
                    </option>
                    <option value="63f12afdcc480f0454f475dd">Baby Food</option>
                    <option value="632aca9b4d87ff2494210c4f">Rui</option>
                    <option value="632aca944d87ff2494210c47">Tuna</option>
                    <option value="632aca864d87ff2494210c3c">Beef</option>
                    <option value="632aca7e4d87ff2494210c34">Fish</option>
                    <option value="632aca754d87ff2494210c2c">Meat</option>
                    <option value="632aca6d4d87ff2494210c24">
                      Fish &amp; Meat
                    </option>
                    <option value="632aca594d87ff2494210c10">Orange</option>
                    <option value="632aca524d87ff2494210c08">Apple</option>
                    <option value="632aca454d87ff2494210c00">
                      Fresh Fruits
                    </option>
                    <option value="632aca3d4d87ff2494210bf8">Dry Fruits</option>
                    <option value="632aca374d87ff2494210bf0">
                      Fresh Vegetable
                    </option>
                    <option value="632aca2b4d87ff2494210be8">
                      Fruits &amp; Vegetable
                    </option>
                    <option value="632aca184d87ff2494210bd4">Flour</option>
                    <option value="632aca144d87ff2494210bcc">Oil</option>
                    <option value="632aca0b4d87ff2494210bc4">
                      Cooking Essentials
                    </option>
                    <option value="632ac9f64d87ff2494210bb0">Biscuits</option>
                    <option value="632ac9ef4d87ff2494210ba8">Cakes</option>
                    <option value="632ac9e94d87ff2494210ba0">
                      Biscuits &amp; Cakes
                    </option>
                    <option value="632ac9c24d87ff2494210b84">
                      Water Filter
                    </option>
                    <option value="632ac9ba4d87ff2494210b7c">
                      Cleaning Tools
                    </option>
                    <option value="632ac9b24d87ff2494210b74">
                      Pest Control
                    </option>
                    <option value="632ac99d4d87ff2494210b64">
                      Air Freshener
                    </option>
                    <option value="632ac9984d87ff2494210b5c">Luandry</option>
                    <option value="632ac9934d87ff2494210b54">Cleaner</option>
                    <option value="632ac9864d87ff2494210b49">
                      Household Tools
                    </option>
                    <option value="632ab45b4d87ff2494210b21">Dog Care</option>
                    <option value="632ab4524d87ff2494210b19">Cat Care</option>
                    <option value="632ab4434d87ff2494210b0e">Pet Care</option>
                    <option value="632ab3044d87ff2494210ae8">Bath</option>
                    <option value="632ab2fd4d87ff2494210ae0">Cosmetics</option>
                    <option value="632ab2f84d87ff2494210ad8">Oral Care</option>
                    <option value="632ab2f04d87ff2494210ad0">Skin Care</option>
                    <option value="632ab2df4d87ff2494210ac8">Body Care</option>
                    <option value="632ab2d54d87ff2494210ac0">
                      Shaving Needs
                    </option>
                    <option value="632ab2c34d87ff2494210ab2">Women</option>
                    <option value="632ab2b64d87ff2494210aa7">Men</option>
                    <option value="632ab2864d87ff2494210a8a">
                      Beauty &amp; Healths
                    </option>
                    <option value="632ab1e04d87ff2494210a6a">
                      Jam &amp; Jelly
                    </option>
                    <option value="632ab16c4d87ff2494210a44">
                      Butter &amp; Ghee
                    </option>
                    <option value="632ab1644d87ff2494210a3c">Ice Cream</option>
                    <option value="632ab1584d87ff2494210a31">Dairy</option>
                    <option value="632ab14a4d87ff2494210a29">
                      Milk &amp; Dairy
                    </option>
                    <option value="632ab0664d87ff24942109ef">Tea</option>
                    <option value="632ab0604d87ff24942109e7">Water</option>
                    <option value="632ab0564d87ff24942109df">Juice</option>
                    <option value="632ab0504d87ff24942109d7">Coffee</option>
                    <option value="632ab0454d87ff24942109cc">
                      Energy Drinks
                    </option>
                    <option value="632ab0334d87ff24942109c1">Drinks</option>
                    <option value="632aae7b4d87ff2494210967">Bread</option>
                    <option value="632aae624d87ff2494210951">Cereal</option>
                    <option value="632aae414d87ff2494210945">Breakfast</option>
                    <option value="62e4ebb90ea79023fc11d847">Beef</option>
                    <option value="62d2bbe62e63b40520194f21">Orange</option>
                    <option value="62d2bbd22e63b40520194f1b">Apple</option>
                    <option value="62d03a542d28e904b20e2342">Rui</option>
                    <option value="62d03a312d28e904b20e233c">Tuna</option>
                    <option value="62d02efd2d28e904b20e22bf">Tuna</option>
                    <option value="62cfad52484d89068aa7a81f">
                      Pickles &amp; Condiments
                    </option>
                    <option value="62cfad3d484d89068aa7a819">Sauces</option>
                    <option value="62cfab4b484d89068aa7a7ff">
                      Canned Food
                    </option>
                    <option value="62cfab39484d89068aa7a7fb">
                      Chips &amp; Nuts
                    </option>
                    <option value="62cfab28484d89068aa7a7f5">Chocolate</option>
                    <option value="62cc07b8d511b304aecdfbfa">
                      Baby Accessories
                    </option>
                    <option value="62cc0791d511b304aecdfbf2">Baby Food</option>
                    <option value="62c827b5a427b63741da9175">Home</option>
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
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full bg-emerald-700"
                      type="submit"
                    >
                      Filter
                    </button>
                  </div>
                  <div className="w-full mx-1">
                    <button
                      className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium px-4 py-2 rounded-lg text-gray-600 border-gray-200 border dark:text-gray-400 focus:outline-none bg-gray-200 w-full mr-3 flex h-12 md:py-1 text-sm dark:bg-gray-700"
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
                        onChange={() => {
                          toggleChecked();
                        }}
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
                  {products ? (
                    products.data.map((item: Product) => (
                      <tr className="" key={item.id}>
                        <td className="px-4 py-2">
                          <input
                            value={item.id}
                            checked={checked}
                            id={`654a3c8d73ddc60007066f53${item.id}`}
                            name="iphone"
                            type="checkbox"
                          />
                        </td>
                        <td className="px-4 py-2">
                          <div className="flex items-center">
                            <div className="rounded-full inline-block w-8 h-8 p-1 mr-2 md:block bg-gray-50 shadow-none">
                              <img
                                className="object-cover w-full h-full rounded-full"
                                src={`http://localhost:8000${item.image}`}
                                alt="product"
                                loading="lazy"
                              />
                              <div
                                className="absolute rounded-full shadow-inner"
                                aria-hidden="true"
                              ></div>
                            </div>
                            <div>
                              <h2 className="text-sm font-medium ">
                                {item.title}
                              </h2>
                            </div>
                          </div>
                        </td>
                        <td className="px-4 py-2">
                          <span className="text-sm">{item.category.name}</span>
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
                          <span className="inline-flex px-2 text-xs font-medium leading-5 rounded-full text-emerald-600 bg-emerald-100 dark:bg-emerald-800 dark:text-emerald-100">
                            Selling
                          </span>
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
                            {/* <UpdateProductComponent isOpen={} closeModal={} itemProducts={item}/> */}
                            <UpdateProductComponent
                              isOpen={open}
                              closeModal={closeModal}
                              itemProducts={item}
                            />
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
                      <td>Loading...</td>
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
                          <li>
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

export default ListProductComponent;
