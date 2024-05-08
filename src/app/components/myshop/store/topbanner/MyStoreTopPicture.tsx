"use client";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import AddBanner from "./AddBanner";
import UpdateBanner from "./UpdateBanner";
import { ShopBanner } from "../../../../../../type";
import MenuBanner from "../MenuBanner";
const MyStoreTopPicture = ({ store }: { store: Number }) => {
  const { data: session } = useSession();
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json", // Adjust headers as needed
      },
    }).then((res) => res.json());
  const url = process.env.SERVER_ENDPOINT + "/api/myshop-board/banner/" + store;
  const {
    data: banners,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });
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
                `${process.env.SERVER_ENDPOINT}/api/myshop-board/banner/delete/${id}`,
                {
                  headers: {
                    Authorization: `Bearer ${session?.bearer}`, // Include the bearer token
                  },
                }
              )
              .then((response: any) => {
                if (response.status == 200) {
                  toast.dismiss();
                  toast.success("Address deleted successfully", {
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isUpdateOpen, setIsUpdateOpen] = useState(false);
  const [bannerData, setBannerData] = useState<ShopBanner>();
  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setIsUpdateOpen(false);
  };
  const openUpdate = (item: ShopBanner) => {
    setIsUpdateOpen(true);
    setBannerData(item);
  };
  // console.log(addresses);
  return (
    <>
      <AddBanner shopId={store} isOpen={isModalOpen} closeModal={closeModal} />
      <UpdateBanner
        banners={bannerData}
        isOpen={isUpdateOpen}
        closeModal={closeModal}
      />

      <div className="p-4 pb-10">
        <MenuBanner store={store} />
        <div className="rounded-lg overflow-hidden bg-white min-w-0 shadow-xs dark:bg-gray-800 mb-5">
          <div className="p-2">
            <form className="py-3 md:pb-0 grid gap-4 lg:gap-6 xl:gap-6 xl:flex">
              <div className={`flex flex-row sm:flex-row gap-4 justify-end`}>
                <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                  <Link
                    href={`/myshop/store`}
                    className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-red-500 border border-transparent active:bg-emerald-600 hover:bg-red-600 w-full h-12">
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
                        className="lucide lucide-undo-2">
                        <path d="M9 14 4 9l5-5" />
                        <path d="M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5v0a5.5 5.5 0 0 1-5.5 5.5H11" />
                      </svg>
                    </span>
                    Back
                  </Link>
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
            <h6 className="mb-0 dark:text-white">Top Picture</h6>
          </div>
          <div className="flex-auto p-4 pt-4">
            <div className="sm:col-gap-12 row-gap-12 md:ga mt-4 grid grid-cols-2 sm:mt-4 sm:grid-cols-2 md:grid-cols-3 xl:mt-4 ">
              {isLoading ? (
                <div className="flex flex-row justify-center items-center w-full">
                  <span className="loading loading-dots loading-lg items-center "></span>
                </div>
              ) : banners?.top?.length > 0 ? (
                banners?.top?.map((item: ShopBanner) => (
                  <div
                    key={item.id}
                    className="flex flex-col justify-between border-b-2 border-sky-500 shadow-lg m-2 p-4 mb-4">
                    <div className="">
                      <div className="flex justify-center flex-row">
                        <Image
                          className="object-cover"
                          src={`${process.env.SERVER_ENDPOINT}${item.link}`}
                          width={200}
                          height={200}
                          alt=""
                        />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-slate-800">
                        {item?.title}
                      </h3>
                      <p className="mt-0 text-base text-gray-700 mb-1">
                        <div dangerouslySetInnerHTML={{ __html: item?.text }} />
                      </p>
                    </div>
                    <div className=" flex flex-row gap-2 object-bottom text-white mt-2 justify-center">
                      {/* <UpdateAddress address={address} /> */}
                      <button
                        onClick={() => {
                          openUpdate(item);
                        }}
                        className="p-2 bg-sky-500 hover:bg-sky-400 rounded-md">
                        Update
                      </button>
                      <button
                        onClick={() => {
                          SubmitDelete(item.id, "del");
                        }}
                        className="p-2 bg-red-500 hover:bg-red-400 rounded-md">
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div>No Data</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MyStoreTopPicture;
