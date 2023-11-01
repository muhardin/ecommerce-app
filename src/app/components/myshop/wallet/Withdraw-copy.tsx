"use client";
import { ChangeEvent, SyntheticEvent, useState } from "react";
import { OrderItem } from "../../../../../type";
import toast, { Toast, Toaster } from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useShopData } from "../../shop/ShopContext";
import { usePathname, useRouter } from "next/navigation";
import useSWR from "swr";
import Image from "next/image";
import FormattedPrice from "../../FormattedPrice";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "@/redux/shoppingSlice";
import LoadingComponent from "../../ui/Loading";
import {
  closeProfileMenu,
  openProfileMenu,
  toggleProfileMenu,
} from "@/redux/profileSlice";
import { RootState } from "@/redux/store";

interface Props {
  valModal: boolean;
  modalToggle: (newValue: boolean) => void;
}

const Withdraw = ({ valModal, modalToggle }: Props) => {
  const toggleValue = () => {
    modalToggle(!valModal);
  };
  const { data: session } = useSession();
  const [modal, setModal] = useState(false);
  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  // console.log(item);

  const [selectedStatus, setSelectedStatus] = useState();
  const [shippingNumber, setShippingNumber] = useState();
  const handleSetSelectedStatus = (value: string) => {};
  // console.log(shippingNumber);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Get the selected file from the input element
    if (e.target.files) {
      const file = e.target.files[0];
      setSelectedImage(file);
    }
  };
  console.log(selectedImage);

  const handleUpdateStatus = async (e: SyntheticEvent, index: number) => {
    setLoading(true);
    e.preventDefault();
    toast.loading("loading...");

    const formData = new FormData();

    formData.append("order_detail_id", index.toString());
    formData.append("shipping_number", shippingNumber || "");
    if (selectedStatus === "delivering" && selectedImage) {
      formData.append("shipping_proof", selectedImage);
    }
    // `${process.env.SERVER_ENDPOINT}/api/supplier-board/order/update-status`,
    const response = await axios.post(
      `${process.env.SERVER_ENDPOINT}/api/supplier-board/order/update-status`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization: `Bearer ${session?.bearer}`, // Include the bearer token
        },
      }
    );
    if (response.status == 200) {
      setLoading(false);
      toast.dismiss();
      toast.success("Data updated successfully", { duration: 3000 });
      const result = response.data;
      console.log(result);
      setModal(false);
      setErrMessage("");
    } else if (response.status == 201) {
      toast.dismiss();
      toast.error("Error update");
      console.log(response);
      setLoading(false);
      const result = response.data;
      setErrMessage(result.message.error);
      console.log(result.message.error);
      // setErrMessage(response);
    } else {
      setLoading(false);
      // Handle errors or non-successful responses
      throw new Error(`Request failed with status: ${response.status}`);
    }
  };
  // console.log(selectedStatus);

  return (
    <div>
      <div className={`${loading ? "block" : "hidden"} fixed z-20`}>
        <LoadingComponent />
      </div>
      <div className={`text-sky-700 cursor-pointer hover:text-sky-500 `}></div>
      <div
        className={`relative z-10 ${
          valModal ? "visible" : "invisible"
        } overflow-x-hidden overflow-y-auto inset-0 outline-none focus:outline-none w-full`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        {/* <div className="fixed inset-0 z-10 w-full md:ml-[156px] overflow-y-auto mt-24 md:mt-0"> */}
        <div className="fixed inset-0 z-10 w-full overflow-y-auto mt-24 md:mt-0">
          <div className="w-full flex min-h-full items-center justify-center md:justify-center p-4 text-start sm:items-center sm:p-0">
            <div className="w-full relative transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-2/3 mb-14 md:mb-0">
              <div className="p-4  shadow-md text-gray-800">
                <div className="">
                  <div className="grid sm:px-4 lg:grid-cols-1 p-4">
                    <div className="mb-6">
                      <span>Withdraw Form</span>
                    </div>
                    <form onSubmit={() => {}} className="w-full">
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-state"
                          >
                            Bank Account
                          </label>
                          <div className="relative">
                            <select
                              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-state"
                            >
                              <option>New Mexico</option>
                              <option>Missouri</option>
                              <option>Texas</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg
                                className="fill-current h-4 w-4"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                              >
                                <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-4">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password"
                          >
                            Amount
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-password"
                            type="text"
                            placeholder=""
                            required
                          />
                          <p className="text-gray-600 text-xs italic">
                            Make it as long and as crazy as youd like
                          </p>
                        </div>
                      </div>
                      {/* <div className="flex flex-wrap -mx-3 mb-2">
                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-city"
                          >
                            City
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-city"
                            type="text"
                            placeholder="Albuquerque"
                          />
                        </div>

                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-zip"
                          >
                            Zip
                          </label>
                          <input
                            className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-zip"
                            type="text"
                            placeholder="90210"
                          />
                        </div>
                      </div> */}
                      <div className="flex flex-row justify-end mt-4 gap-4 items-center">
                        <button
                          type="button"
                          onClick={() => {
                            toggleValue();
                          }}
                          className="p-2 rounded-md text-white bg-red-400 cursor-pointer"
                        >
                          Close
                        </button>
                        <button
                          onClick={() => {}}
                          className="p-2 rounded-md text-white bg-sky-600 cursor-pointer"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="flex flex-auto justify-end mt-4 gap-6 items-center mr-3">
                  <button
                    onClick={() => {
                      toggleValue();
                    }}
                    className="p-4 rounded-md text-white bg-sky-500 cursor-pointer"
                  >
                    Close
                  </button>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Withdraw;
