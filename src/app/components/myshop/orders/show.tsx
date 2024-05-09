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

const OrderShow = ({
  item,
  title,
  className,
}: {
  item: OrderItem;
  title?: string;
  className?: string;
}) => {
  const { data: session } = useSession();
  const [modal, setModal] = useState(false);
  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  // console.log(item);
  function toggleModal() {
    dispatch(
      updateModal({
        modal: modal ? !modal : true,
      })
    );
    setModal(!modal);
  }
  const { modal: modalDt } = useSelector((state: any) => state.shopping);
  const dispatch = useDispatch();

  const [selectedStatus, setSelectedStatus] = useState(item.order_status);
  const [shippingNumber, setShippingNumber] = useState(item.shipping_resi);
  const [rejectedNote, setRejectedNote] = useState(item.status_description);
  const handleSetSelectedStatus = (value: string) => {
    setSelectedStatus(value);
  };
  // console.log(shippingNumber);
  const [selectedImage, setSelectedImage] = useState<File | null>(null);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    // Get the selected file from the input element
    if (e.target.files) {
      const file = e.target.files[0];
      setSelectedImage(file);
    }
  };

  const handleUpdateStatus = async (e: SyntheticEvent, index: number) => {
    setLoading(true);
    e.preventDefault();
    toast.loading("loading...");

    const formData = new FormData();
    formData.append("status", selectedStatus);
    formData.append("order_detail_id", index.toString());
    formData.append("shipping_number", shippingNumber || "");
    formData.append("rejected_note", rejectedNote || "");
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
      setModal(false);
      setErrMessage("");
    } else if (response.status == 201) {
      toast.dismiss();
      toast.error("Error update");
      setLoading(false);
      const result = response.data;
      setErrMessage(result.message.error);

      // setErrMessage(response);
    } else {
      setLoading(false);
      // Handle errors or non-successful responses
      throw new Error(`Request failed with status: ${response.status}`);
    }
  };
  // console.log(selectedStatus);

  const isOpen = useSelector((state: RootState) => state.profile.isOpen);
  const handleOpenMenu = () => {
    dispatch(openProfileMenu());
  };
  const handleCloseMenu = () => {
    dispatch(closeProfileMenu());
  };
  const handleToggleMenu = () => {
    dispatch(toggleProfileMenu());
  };
  const status = ["received", "delivering"];
  return (
    <div>
      <div className={`${loading ? "block" : "hidden"} fixed z-20`}>
        <LoadingComponent />
      </div>
      <div
        onClick={() => {
          handleCloseMenu();
          setModal(true);
        }}
        className={`text-sky-700 cursor-pointer hover:text-sky-500 ${className}`}>
        {title ? title : item?.product?.title}
      </div>
      <div
        className={`relative z-10 ${
          modal ? "visible" : "invisible"
        } overflow-x-hidden overflow-y-auto inset-0 outline-none focus:outline-none w-full fixed z-50`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity z-[100]"></div>
        {/* <div className="fixed inset-0 z-10 w-full md:ml-[156px] overflow-y-auto mt-24 md:mt-0"> */}

        <div className="fixed inset-0 z-[200] w-full overflow-y-auto mt-0 md:mt-0">
          <div className="w-full flex min-h-full items-center justify-center md:justify-center p-4 text-start sm:items-center sm:p-0">
            <div className="w-full relative z-50 transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-2/3 mb-14 md:mb-0">
              <div className="p-4  shadow-md text-gray-800">
                <div className="">
                  <div className="grid sm:px-4 lg:grid-cols-2">
                    <div className="px-4 pt-4">
                      <p className="text-xl font-medium">Order Summary</p>
                      <p className="text-gray-400">
                        Check your items. And select a suitable shipping method.
                      </p>
                      <div className="mt-2 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-row rounded-lg bg-white sm:flex-row">
                          <Image
                            width={350}
                            height={350}
                            className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                            src={`${
                              item?.product?.product_gallery?.length > 0
                                ? process.env.SERVER_ENDPOINT +
                                  item.product.product_gallery[0].url
                                : "/images/product_image.png"
                            }`}
                            alt=""
                          />
                          <div className="flex w-full flex-col px-4 py-4">
                            <span className="font-semibold">
                              {item?.product?.title}
                            </span>
                            <span className="float-right text-gray-400">
                              <span>Quantity : {item.quantity}</span>
                            </span>
                            <p className="mt-auto text-lg font-bold">
                              <FormattedPrice amount={item.supplier_price} />
                            </p>
                          </div>
                        </div>
                      </div>

                      <p className="mt-2 text-lg font-medium">
                        Shipping Details
                      </p>
                      <div className="mt-1 grid gap-6">
                        <div className="relative">
                          <input
                            className="peer hidden"
                            id={`shipping_detail${item.id}`}
                            type="radio"
                            name={`shipping_detail${item.id}`}
                            checked
                          />

                          <label
                            className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                            htmlFor={`shipping_detail${item.id}`}>
                            <Image
                              width={150}
                              height={150}
                              className="w-14 object-contain"
                              src={`/images/shipping/${item.shipping_method}.png`}
                              alt=""
                            />
                            <div className="ml-5">
                              <span className="mt-2 font-semibold uppercase">
                                {item.shipping_method} | {item.shipping_option}{" "}
                                {" / "}
                                {item.shipping_etd}
                              </span>
                              <p className="text-slate-500 text-sm leading-6"></p>
                              <p className="text-slate-500 text-sm leading-6">
                                {item.user_address.province_name}
                                {" - "}
                                {item.user_address.city_name}
                              </p>

                              <p className="text-slate-500 text-sm leading-6">
                                {item.user_address.address}
                              </p>
                              <p className="text-slate-500 text-sm leading-6">
                                {item.user_address.zip_code}
                              </p>
                              <p className="text-slate-500 text-sm leading-6">
                                {item.user_address.phone}
                              </p>
                            </div>
                          </label>
                        </div>
                        <div className="mt-2 border-t border-b py-2">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              Subtotal
                            </p>
                            <p className="font-semibold text-gray-900">
                              <FormattedPrice
                                amount={item?.quantity * item?.product?.price}
                              />
                            </p>
                          </div>
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              Shipping
                            </p>
                            <p className="font-semibold text-gray-900">
                              <FormattedPrice amount={item.shipping_price} />
                            </p>
                          </div>
                          <div className="mt-2 flex items-center justify-between">
                            <p className="text-sm font-medium text-gray-900">
                              Total
                            </p>
                            <p className="text-2xl font-semibold text-gray-900">
                              <FormattedPrice
                                amount={
                                  item.shipping_price +
                                  item.quantity * item.supplier_price
                                }
                              />
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                    <form onSubmit={() => {}}>
                      <div className="mt-4 bg-gray-50 px-4 pt-4 lg:mt-0">
                        <div className="mt-2 flex flex-col items-center justify-start mb-4">
                          <p className="text-sm font-medium text-gray-900">
                            Keuntungan Didapat :
                          </p>
                          <p className="text-2xl font-semibold text-gray-900">
                            <FormattedPrice amount={item.final_profit} />
                          </p>
                        </div>
                        <p className="text-xl font-medium">Progress Details</p>
                        <p className="text-gray-400">
                          Complete your setup by providing your price details.
                        </p>
                        <label
                          htmlFor="card-holder"
                          className="mt-4 mb-2 block text-sm font-medium">
                          Set Order Status
                        </label>
                        <div className="relative mt-2 flex flex-col gap-2 ">
                          {item.order_status == "rejected" ? (
                            <div className="relative border border-gray-400 p-2 text-red-600">
                              <div className="relative ">
                                <input
                                  className="peer hidden"
                                  id={`rejected_1${item.id}`}
                                  type="radio"
                                  name={`status[${item.id}]`}
                                  value={`rejected`}
                                  checked={selectedStatus === "rejected"}
                                  onChange={() => {
                                    handleSetSelectedStatus("rejected");
                                  }}
                                />
                                <span className="peer-checked:border-sky-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label
                                  className="peer-checked:border-2 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-1"
                                  htmlFor={`rejected_1${item.id}`}>
                                  <Image
                                    width={150}
                                    height={150}
                                    className="w-14 object-contain"
                                    src={`/images/status/reject.png`}
                                    alt=""
                                  />
                                  <div className="ml-5">
                                    <span className="mt-2 font-semibold capitalize">
                                      Reject
                                    </span>
                                    <p className="text-slate-500 text-sm leading-6">
                                      Silahkan pilih jika order di tolak
                                    </p>
                                  </div>
                                </label>
                              </div>
                              <div
                                className={
                                  selectedStatus == "rejected"
                                    ? "block"
                                    : "hidden"
                                }>
                                <label
                                  htmlFor="card-holder"
                                  className="mt-1 mb-1 block text-sm font-medium">
                                  Rejected Note
                                </label>
                                <div className="relative">
                                  <input
                                    required={selectedStatus == "rejected"}
                                    type="text"
                                    id="card-holder"
                                    name="rejected_note"
                                    value={rejectedNote ?? ""}
                                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Your reference note here"
                                    onChange={(e) =>
                                      setRejectedNote(e.target.value)
                                    }
                                    // required={selectedStatus == "delivering"}
                                  />
                                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 text-gray-400"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                      />
                                    </svg>
                                  </div>
                                  {errMessage.status_description ? (
                                    <label htmlFor="" className="text-red-500">
                                      {errMessage.status_description}
                                    </label>
                                  ) : (
                                    ""
                                  )}
                                </div>
                              </div>
                            </div>
                          ) : item.order_status == "processing" ? (
                            <div className="relative">
                              <input
                                className="peer hidden"
                                id={`delivering_1${item.id}`}
                                type="radio"
                                name={`status[${item.id}]`}
                                value={`processing`}
                                checked={selectedStatus === "processing"}
                                onChange={() => {
                                  handleSetSelectedStatus("processing");
                                }}
                              />
                              <span className="peer-checked:border-sky-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                              <label
                                className="peer-checked:border-2 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-1"
                                htmlFor={`delivering_1${item.id}`}>
                                <Image
                                  width={150}
                                  height={150}
                                  className="w-14 object-contain"
                                  src={`/images/status/process.png`}
                                  alt=""
                                />
                                <div className="ml-5">
                                  <span className="mt-2 font-semibold capitalize">
                                    Konfirmasi
                                  </span>
                                  <p className="text-slate-500 text-sm leading-6">
                                    Dalam Persiapan Pengiriman
                                  </p>
                                </div>
                              </label>
                            </div>
                          ) : item.order_status == "delivering" ? (
                            <div
                              className={`${
                                selectedStatus == "delivering"
                                  ? "border border-gray-400 p-2 rounded-md"
                                  : ""
                              }`}>
                              <div className="relative">
                                <input
                                  className="peer hidden"
                                  id={`delivering${item.id}`}
                                  type="radio"
                                  name={`status${item.id}`}
                                  value={`delivering`}
                                  checked={selectedStatus === "delivering"}
                                  onChange={() => {
                                    handleSetSelectedStatus("delivering");
                                  }}
                                />
                                <span className="peer-checked:border-sky-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                                <label
                                  className="peer-checked:border-2 peer-checked:border-sky-400 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-1"
                                  htmlFor={`delivering${item.id}`}>
                                  <Image
                                    width={150}
                                    height={150}
                                    className="w-14 object-contain"
                                    src={`/images/status/delivering.svg`}
                                    alt=""
                                  />
                                  <div className="ml-5">
                                    <span className="mt-2 font-semibold capitalize">
                                      Delivering
                                    </span>
                                    <p className="text-slate-500 text-sm leading-6">
                                      Barang Sudah Dikirim
                                    </p>
                                  </div>
                                </label>
                              </div>
                              <div
                                className={
                                  selectedStatus == "delivering"
                                    ? "block"
                                    : "hidden"
                                }>
                                <label
                                  htmlFor="card-holder"
                                  className="mt-1 mb-1 block text-sm font-medium">
                                  Shipping Number
                                </label>
                                <div className="relative">
                                  <input
                                    type="text"
                                    id="card-holder"
                                    name="card-holder"
                                    value={shippingNumber ?? ""}
                                    className="focus:text-white w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="Your reference code here"
                                    onChange={(e) =>
                                      setShippingNumber(e.target.value)
                                    }
                                    // required={selectedStatus == "delivering"}
                                  />
                                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      className="h-4 w-4 text-gray-400"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                      strokeWidth="2">
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                                      />
                                    </svg>
                                  </div>
                                  {errMessage.shipping_number ? (
                                    <label htmlFor="" className="text-red-500">
                                      {errMessage.shipping_number}
                                    </label>
                                  ) : (
                                    ""
                                  )}
                                </div>
                                <div className="mt-2">
                                  <label
                                    htmlFor="card-holder"
                                    className="mt-1 mb-1 block text-sm font-medium">
                                    Shipping Proof
                                  </label>
                                  <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileChange}
                                  />
                                </div>
                                {errMessage.shipping_proof ? (
                                  <label htmlFor="" className="text-red-500">
                                    {errMessage.shipping_proof}
                                  </label>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                          ) : item.order_status == "received" ? (
                            <div className="relative">
                              <input
                                className="peer hidden"
                                id={`received${item.id}`}
                                type="radio"
                                name={`status${item.id}`}
                                value={`received`}
                                checked={selectedStatus === "received"}
                              />
                              <span
                                className={`${
                                  item.order_status == "received"
                                    ? "border-green-600"
                                    : "border-gray-300"
                                } peer-checked:border-sky-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8  bg-white`}></span>
                              <label
                                className={`${
                                  item.order_status == "received"
                                    ? "border-green-600"
                                    : "border-gray-300"
                                } peer-checked:border-2 peer-checked:border-sky-400 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border  p-1`}
                                htmlFor={`delivered${item.id}`}>
                                <Image
                                  width={150}
                                  height={150}
                                  className="w-14 object-contain"
                                  src={`/images/status/received.png`}
                                  alt=""
                                />
                                <div className="ml-5">
                                  <span className="mt-2 font-semibold capitalize">
                                    Received
                                  </span>
                                  <p className="text-slate-500 text-sm leading-6">
                                    Barang Sudah Diterima
                                  </p>
                                </div>
                              </label>
                            </div>
                          ) : item.order_status === "pending" ? (
                            <div className="relative">
                              <input
                                className="peer hidden"
                                id={`received${item.id}`}
                                type="radio"
                                name={`status${item.id}`}
                                value={`received`}
                                checked={selectedStatus === "received"}
                              />
                              <span
                                className={`${
                                  item.order_status === "pending"
                                    ? "border-green-600"
                                    : "border-gray-300"
                                } peer-checked:border-sky-400 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8  bg-white`}></span>
                              <label
                                className={`${
                                  item.order_status === "pending"
                                    ? "border-green-600"
                                    : "border-gray-300"
                                } peer-checked:border-2 peer-checked:border-sky-400 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border  p-1`}
                                htmlFor={`delivered${item.id}`}>
                                <Image
                                  width={150}
                                  height={150}
                                  className="w-14 object-contain"
                                  src={`/images/status/pending2.png`}
                                  alt=""
                                />
                                <div className="ml-5">
                                  <span className="mt-2 font-semibold capitalize">
                                    Pending
                                  </span>
                                  <p className="text-slate-500 text-sm leading-6">
                                    Belum ada respon
                                  </p>
                                </div>
                              </label>
                            </div>
                          ) : (
                            ""
                          )}
                        </div>

                        <div className=" flex flex-row gap-2">
                          <button
                            type="button"
                            onClick={() => {
                              setModal(false);
                              dispatch(
                                updateModal({
                                  modal: modal ? !modal : false,
                                })
                              );
                            }}
                            className="mt-4 mb-8 w-full rounded-md bg-sky-400 px-6 py-3 font-medium text-white">
                            Close
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                {/* <div className="flex flex-auto justify-end mt-4 gap-6 items-center">
                  <button
                    onClick={() => {
                      setModal(false);
                      dispatch(
                        updateModal({
                          modal: modal ? !modal : false,
                        })
                      );
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

export default OrderShow;
