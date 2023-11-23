"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Switch from "react-switch";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";
import Select from "react-tailwindcss-select";
import toast from "react-hot-toast";
import { ClipboardEdit } from "lucide-react";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";
import Categories from "@/data/categories.json";
import { ShopDomain } from "../../../../../../type";

interface ModalProps {
  isOpen: boolean;
  id: Number;
  closeModal: () => void;
}

interface FormDomain {
  domain: string;
  status: Number;
}

const AddDomain: React.FC<ModalProps> = ({ isOpen, closeModal, id }) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleDivClick = () => {
    // Trigger a click event on the file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  /** End of Favicon Action */
  const [formData, setFormData] = useState<FormDomain>({
    domain: "",
    status: 1,
  });
  const [message, setMessage] = useState<string>("");
  const [isValidDomain, setIsValidDomain] = useState<boolean>(true);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    if (name === "domain") {
      const domainRegex = /^[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      if (!domainRegex.test(formData.domain)) {
        setIsValidDomain(true);
        setMessage("Invalid domain format.");
        return;
      } else {
        setIsValidDomain(false);
        setMessage("");
      }
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    toast.loading("loading...");
    e.preventDefault();
    // Additional server-side validation
    if (!message) {
      setMessage("Invalid domain format.");
      return;
    }

    try {
      const headers = {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "multipart/form-data", // Use 'multipart/form-data' for FormData
      };

      const response = await axios.post(
        `${process.env.SERVER_ENDPOINT}/api/myshop-board/domains/domain-add/${id}`,
        formData,
        { headers }
      );
      if (response.status == 200) {
        toast.dismiss();
        toast.success("Domain added successfully", { duration: 6000 });
        closeModal();
      } else {
        toast.dismiss();
      }
    } catch (error) {
      setMessage(`Error adding ShopDomain`);
    }
  };

  if (!isOpen) return null;
  return (
    <>
      <div tabIndex={-1} className="drawer drawer-right drawer-open bg-white">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="w-1/2">
          <div className="drawer-content ">
            <button
              onClick={closeModal}
              className="fixed focus:outline-none z-10 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center">
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
            <div className="fixed flex flex-col w-full h-full justify-between bg-white">
              <div className="w-full relative p-6 border-b border-gray-100 bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <div className="flex md:flex-row flex-col justify-between mr-20">
                  <div>
                    <h4 className="text-xl font-medium dark:text-gray-300">
                      Add Domain
                    </h4>
                    <p className="mb-0 text-sm dark:text-gray-300">
                      Update Domain info, combinations and extras.
                    </p>
                  </div>
                  <select
                    name="language"
                    className="block w-20 h-10 border border-emerald-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700">
                    <option value="en">en</option>
                    <option value="bn">bn </option>
                    <option value="de">de </option>
                    <option value="en">en </option>
                  </select>
                </div>
              </div>

              <div className="bg-white relative z-30 overflow-hidden h-full track-horizontal thumb-horizontal w-full dark:bg-gray-700 dark:text-gray-200">
                <div className="absolute inset-0 overflow-y-scroll mr-[-17px] mb-[-17px]">
                  <form className="block" id="block" onSubmit={handleSubmit}>
                    <div className="relative z-30 bg-white px-6 pt-8 flex-grow w-full h-full max-h-full pb-56 md:pb-56 lg:pb-56 xl:pb-56">
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Domain Name
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <input
                            required
                            name="domain"
                            value={formData.domain}
                            onChange={handleChange}
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                            type="text"
                            placeholder="example.com"
                          />
                          {message && <label htmlFor="">Invalid Domain</label>}
                          <div className="mt-1 bg-red-100 p-2 rounded-lg text-sm font-mono">
                            <p className="text-gray-700 ">
                              Mohon untuk segera mengupdate pengaturan Name
                              Server pada penyedia layanan domain Anda dengan
                              informasi berikut:
                            </p>
                            <ul className="list-disc pl-6 mt-0">
                              <li className="text-blue-500">
                                NS1 : n1.smartshop.id
                              </li>
                              <li className="text-blue-500">
                                NS2 : n2.smartshop.id
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                          Product SKU
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <input
                            onChange={(e) => {}}
                            value={""}
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="sku"
                            placeholder="Product SKU"
                          />
                        </div>
                      </div> */}
                    </div>
                    <div className="fixed z-50 bottom-14 md:bottom-0 w-full right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <button
                          onClick={closeModal}
                          className="align-bottom inline-flex justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-gray-600 border-gray-200 border dark:text-gray-400 rounded-lg bg-gray-200  mr-3 items-center h-12 w-full hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-red-700"
                          type="button">
                          Cancel
                        </button>
                      </div>
                      <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <button
                          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                          type="submit">
                          <span>Add Domain</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddDomain;
