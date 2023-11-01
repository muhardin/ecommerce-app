"use client";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { Address } from "../../../../../type";
import Swal from "sweetalert2";
import axios from "axios";
import toast from "react-hot-toast";
import AddAddress from "./AddAddress";
import UpdateAddress from "./UpdateAddress";
import Image from "next/image";
const AddressComponent = () => {
  const { data: session } = useSession();
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json", // Adjust headers as needed
      },
    }).then((res) => res.json());
  const url = process.env.SERVER_ENDPOINT + "/api/user/address";
  const {
    data: addresses,
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
                `${process.env.SERVER_ENDPOINT}/api/user/address/delete/${id}`,
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
  // console.log(addresses);
  return (
    <div>
      <section className="bg-white py-0 sm:py-4 lg:py-4">
        <div className="border-b border-dashed border-slate-200 dark:border-slate-700 py-3 px-4 dark:text-slate-300/70 flex flex-row justify-between items-center">
          <h4 className="font-medium">Personal Information</h4>
          <AddAddress />
        </div>
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-screen-lg">
          <div className="sm:col-gap-12 row-gap-12 md:ga mt-4 grid grid-cols-1 sm:mt-4 sm:grid-cols-2 md:grid-cols-3 xl:mt-4">
            {addresses
              ? addresses.map((address: Address) => (
                  <div
                    key={address.id}
                    className="flex flex-col justify-between border-b-2 border-sky-500 shadow-lg m-2 p-4"
                  >
                    <div className="">
                      {/* <svg
                        className="mx-auto block align-middle text-sky-400"
                        width="46"
                        height="46"
                        viewBox="0 0 46 46"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M45 29V23C45 10.85 35.15 1 23 1C10.85 1 1 10.85 1 23V29"
                          stroke="#161616"
                          strokeWidth="2"
                          stroke-miterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=""
                        ></path>
                        <path
                          d="M13 29H1V41C1 43.209 2.791 45 5 45H13V29Z"
                          fill="currentColor"
                          stroke="#161616"
                          strokeWidth="2"
                          stroke-miterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=""
                        ></path>
                        <path
                          d="M45 29H33V45H41C43.209 45 45 43.209 45 41V29Z"
                          fill="currentColor"
                          stroke="#161616"
                          strokeWidth="2"
                          stroke-miterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className=""
                        ></path>
                      </svg> */}
                      <div className="flex justify-center flex-row">
                        <Image
                          className="object-cover"
                          src={`/images/address.png`}
                          width={200}
                          height={200}
                          alt=""
                        />
                      </div>
                      <h3 className="mt-4 text-xl font-bold text-slate-800">
                        {address?.address_name}
                      </h3>
                      <p className="mt-0 text-base text-gray-700 mb-1">
                        {address?.city_name}
                      </p>
                      <p className="mt-0 text-base text-gray-700 mb-1">
                        {address?.subdistrict_name}
                      </p>
                      <p className="mt-0 text-base text-gray-700 mb-1">
                        {address?.address}
                      </p>
                      <p className="mt-0 text-base text-gray-700 mb-1">
                        Postal Code : {address?.zip_code}
                      </p>
                      <p className="mt-0 text-base text-gray-700 mb-1">
                        Phone : {address?.phone}
                      </p>
                    </div>
                    <div className=" flex flex-row gap-2 object-bottom text-white mt-2 justify-center">
                      <UpdateAddress address={address} />
                      <button
                        onClick={() => {
                          SubmitDelete(address.id, "del");
                        }}
                        className="p-2 bg-red-500 hover:bg-red-400 rounded-md"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              : ""}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddressComponent;
