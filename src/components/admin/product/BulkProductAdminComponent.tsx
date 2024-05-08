"use client";
import React, { useEffect, useState } from "react";
import categories from "@/data/categories.json";
import Select from "react-tailwindcss-select";
import Switch from "react-switch";
import { useSession } from "next-auth/react";
import axios from "axios";
import useSWR from "swr";
import toast, { Toaster } from "react-hot-toast";

interface ModalProps {
  isBatch: boolean;
  checkedItems: string[];
  closeBatch: () => void;
}
interface ErrorData {
  isNew: string;
  supplier_id: string;
  category: string;
}

const fetcher = (url: string, token: string) =>
  fetch(url, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

const BulkProductAdminComponent: React.FC<ModalProps> = ({
  isBatch,
  closeBatch,
  checkedItems,
}) => {
  // console.log(checkedItems);

  const { data: session } = useSession();
  const selectOptions = categories.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
  const [valCat, setValCat] = useState<any | null>(null);
  const [valCatG, setValCatG] = useState(null);
  const handleChangeCategory = (value: any) => {
    setValCat(value);
    setValCatG(value.value);
  };
  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };

  const [checkStatus, setCheckStatus] = useState("");
  const check = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCheckStatus(e.target.value);
  };
  console.log(checkStatus);
  const [checkedNew, setCheckedNew] = useState(false);
  const toggleCheckedNew = () => {
    setCheckedNew(!checkedNew);
  };

  /*
  get Supplier 
  */
  // const fetcher = (url: string) =>
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       Authorization: `Bearer ${session?.bearer}`,
  //       "Content-Type": "application/json",
  //     },
  //   }).then((res) => res.json());

  // const url = `${process.env.SERVER_ENDPOINT}/api/supplier-board/suppliers`;
  // const { data: supplierItems } = useSWR(url, fetcher, {
  //   refreshInterval: 3000,
  // });

  // const [valSupp, setValSupp] = useState(null);
  // const [valSuppG, setValSuppG] = useState(null);
  // const [isNew, setIsNew] = useState(null);
  // const selectOptionsSupplier = supplierItems?.map((item: any) => ({
  //   value: item.id,
  //   label: item.supplier_name,
  // }));

  // // console.log(selectOptionsSupplier);
  // // console.log(selectOptionsSupplier);

  // const handleChangeSupplier = (value: any) => {
  //   setValSupp(value);
  //   setValSuppG(value.value);
  // };
  /** end of supplier get */

  const [error, setError] = useState<ErrorData>();
  const submitUpdate = async (e: React.FormEvent) => {
    setError(undefined);
    e.preventDefault();
    toast.loading("loading...");
    const checkedIds = Object.keys(checkedItems)
      .filter((itemId) => checkedItems[Number(itemId)])
      .map(Number);
    const config = {
      headers: { Authorization: `Bearer ${session?.bearer}` },
    };
    try {
      const response = await axios.post(
        `${process.env.SERVER_ENDPOINT}/api/admin/product/update-multi`,
        {
          id: checkedItems,
          // isNew: checkedNew,
          // isPublish: checked,
          category: valCatG,
          status: checkStatus,
        },
        {
          headers: { Authorization: `Bearer ${session?.bearer}` },
        }
      );

      if (response.status == 200) {
        toast.dismiss();
        toast.success("Data updated successfully");
        closeBatch();
      } else {
        toast.dismiss();
        toast.error("Fail update !");
        setError(response.data.message.error);
      }
    } catch (error) {
      // Handle error, e.g., show an error message
      console.error("Error deleting items:", error);
    }
  };
  /** end of get supplier  */
  if (!isBatch) return null;

  return (
    <div>
      <div tabIndex={-1} className="w-full md:w-4/5">
        <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
        <div className="drawer-content-wrapper w-5/6 relative z-50">
          <div className="drawer-content">
            <button
              onClick={closeBatch}
              className="fixed top-0 z-50 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="fixed top-0 right-0 flex flex-col w-full md:w-4/5 h-full justify-between">
              <div className="w-full relative p-6 border-b border-gray-100 bg-gray-50 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <div className="flex md:flex-row flex-col justify-between mr-20">
                  <div>
                    <h4 className="text-xl font-medium dark:text-gray-300">
                      Update Selected Products
                    </h4>
                    <p className="mb-0 text-sm dark:text-gray-300">
                      Apply changes to the selected Products from the list
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full relative dark:bg-gray-700 dark:text-gray-200 overflow-hidden h-full">
                <div className="absolute inset-0 overflow-scroll -mr-[17px] -mb-[17px]">
                  <form className="block" onSubmit={submitUpdate}>
                    {/* Rest of your form */}
                    <div className="h-screen bg-white w-full p-12">
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Category
                        </label>
                        <div className="col-span-8 sm:col-span-4 flex items-center justify-center">
                          <div className="flex flex-col w-full">
                            <Select
                              value={valCat}
                              isSearchable
                              primaryColor={"indigo"}
                              onChange={handleChangeCategory}
                              options={selectOptions}
                            />
                            {error?.category && (
                              <label className="text-red-600 text-sm">
                                {error?.category}
                              </label>
                            )}
                          </div>
                        </div>
                      </div>

                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Is Publish ?
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="mb-2">
                            <div>
                              <Switch
                                onChange={() => {
                                  toggleChecked();
                                }}
                                value={1}
                                checked={checked == true}
                              />
                            </div>
                          </div>
                          {/* {errMessage.category && (
                            <p className="text-sm mt-2 text-red-600">
                              {errMessage.category}
                            </p>
                          )} */}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Is New ?
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="mb-2">
                            <div>
                              <Switch
                                onChange={() => {
                                  toggleCheckedNew();
                                }}
                                value={1}
                                checked={checkedNew == true}
                              />
                            </div>
                          </div>
                          {/* {errMessage.category && (
                            <p className="text-sm mt-2 text-red-600">
                              {errMessage.category}
                            </p>
                          )} */}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Status
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="mb-2">
                            <div>
                              <select
                                onChange={check}
                                className="select select-error w-full max-w-xs">
                                <option disabled selected>
                                  Select Status
                                </option>
                                <option value={"Selling"}>Selling</option>
                                <option value={"Rejected"}>Rejected</option>
                                <option value={"Pending"}>Pending</option>
                              </select>
                            </div>
                          </div>
                          {error?.supplier_id && (
                            <label className="text-red-600 text-sm">
                              {error?.supplier_id}
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                    <div className="fixed bottom-14 md:bottom-0 w-full md:w-4/5 right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <button
                          onClick={closeBatch}
                          className="align-bottom cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none py-2 rounded-lg text-sm border bg-gray-200 border-gray-200 px-4 w-full mr-3 flex items-center justify-center h-12 text-red-500 hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:text-gray-500 dark:hover:bg-gray-800 dark:hover:text-red-700"
                          type="button">
                          Cancel
                        </button>
                      </div>
                      <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <button
                          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-12 w-full"
                          type="submit">
                          Bulk Update Products
                        </button>
                      </div>
                    </div>
                  </form>
                  {/* <div className="absolute h-[6px] right-[2px] bottom-[2px] left-[2px] border border-black">
                    <div className="relative block h-full cursor-pointer border-radius-inherit bg-opacity-20 bg-black w-0"></div>
                  </div>
                  <div className="absolute w-6 right-2 bottom-2 top-2 border-radius-3">
                    <div className="relative block w-full cursor-pointer border-radius-inherit bg-opacity-20 bg-black h-0 transform translate-y-0"></div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          <div className="drawer-handle">
            <i className="drawer-handle-icon"></i>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default BulkProductAdminComponent;
