"use client";
import Image from "next/image";
import FormattedPrice from "../FormattedPrice";
import { updateModal } from "@/redux/shoppingSlice";
import { useState, useEffect } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { StateProps } from "../../../../type";
import Products from "../Products";
import axios from "axios";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import Swal from "sweetalert2";
import { useShopData } from "../shop/ShopContext";
import useSWR from "swr";

interface Step {
  title: string;
  steps: string[];
}

const OrderHistorySummary = ({ id }: any) => {
  const shopData = useShopData();

  const pathname = usePathname();
  const router = useRouter();
  // console.log(id);
  // console.log(shopData?.id);
  const { data: session } = useSession();
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json", // Adjust headers as needed
      },
    }).then((res) => res.json());
  const url = `${process.env.SERVER_ENDPOINT}/api/user/order/detail/${id}/${shopData?.id}`;
  const {
    data: orders,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 2000,
  });
  const orderDetails = orders?.order_detail;
  // console.log(orders?.order_detail);
  // console.log(orderDetails);
  // Sum the 'shipping_price' values using the reduce function
  const subTotal: number = orderDetails?.reduce((total: number, item: any) => {
    return Number(total) + Number(item.amount);
  }, 0);

  const [errMessage, setErrMessage] = useState<string[]>([]);
  const [inLoading, setInLoading] = useState(false);
  const [modal, setModal] = useState(false);

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
            // console.log(productId);
            setErrMessage([]);
            const config = {
              headers: { Authorization: `Bearer ${session?.bearer}` },
            };
            const post = await axios.post(
              process.env.SERVER_ENDPOINT + "/api/user/order/received",
              { id: productId, shop: shopData?.id },
              config
            );

            if (post.status == 200) {
              setInLoading(false);
              toast.dismiss();
              toast.success("Success", { duration: 6000 });
            } else if (post.status == 201) {
              setModal(true);
              setErrMessage(post.data.message.error);
              toast.dismiss();
              // console.log(post.data.message.error);
            } else if (post.status == 500) {
              toast.error("System on maintenance mode");
              toast.dismiss();
              // console.log(post.data.message.error);
            }
          } else {
            // console.log(productId);
          }
        }
      });
  };
  return (
    <>
      {orderDetails ? (
        <div className="">
          <div className="grid sm:px-4 lg:grid-cols-1">
            <div className="px-2 py-2">
              <p className="text-xl font-medium">Order Summary</p>
              <p className="text-gray-400">
                Check your items. And select a suitable shipping method.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {orderDetails?.map((item: any) => (
                  <div
                    key={item.id}
                    className="border-2 border-sky-400 rounded-md p-2 flex flex-col justify-between">
                    <div className="">
                      <div className="mt-2 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
                        <div className="flex flex-row rounded-lg bg-white sm:flex-row">
                          {item.product?.product_gallery?.length > 0 ? (
                            <Image
                              width={350}
                              height={350}
                              className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                              src={`${process.env.SERVER_ENDPOINT}${item.product.product_gallery[0].url}`}
                              alt=""
                            />
                          ) : (
                            <Image
                              width={350}
                              height={350}
                              className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                              src={`/images/no_image.png`}
                              alt=""
                            />
                          )}

                          <div className="flex w-full flex-col px-4 py-4">
                            <span className="font-semibold">
                              {item.product.title}
                            </span>
                            <span className="float-right text-gray-400">
                              <span>Quantity : {item.quantity}</span>
                            </span>
                            <p className="mt-auto text-lg font-bold">
                              <FormattedPrice
                                amount={item.price + item.profit}
                              />
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
                            className="peer-checked:border-1 peer-checked:border-sky-400 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                            htmlFor={`shipping_detail${item.id}`}>
                            <Image
                              width={150}
                              height={150}
                              className="w-14 object-contain lowercase"
                              src={`/images/shipping/${
                                item.shipping_method == "J&T"
                                  ? "jnt"
                                  : item.shipping_method
                              }.png`}
                              alt=""
                            />
                            <div className="ml-5">
                              <span className="mt-2 font-semibold uppercase">
                                {item.shipping_method} {" / "}
                                {item.shipping_etd}
                              </span>
                              <p className="text-slate-500 text-sm leading-6"></p>
                              <p className="text-slate-500 text-sm leading-6">
                                {item.user_address?.province_name}
                                {" - "}
                                {item.user_address?.city_name}
                              </p>

                              <p className="text-slate-500 text-sm leading-6">
                                {item.user_address?.address}
                              </p>
                              <p className="text-slate-500 text-sm leading-6">
                                {item.user_address?.zip_code}
                              </p>
                              <p className="text-slate-500 text-sm leading-6">
                                {item.user_address?.phone}
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
                                amount={
                                  item.quantity * (item.price + item.profit)
                                }
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
                                  item.quantity * (item.price + item.profit)
                                }
                              />
                            </p>
                          </div>
                        </div>
                      </div>

                      {item.order_status == "processing" ? (
                        <div className="relative">
                          <label
                            htmlFor="card-holder"
                            className="mt-4 mb-2 block text-sm font-medium">
                            Order Status
                          </label>
                          <input
                            className="peer hidden"
                            id={`delivering_1${orders?.id}`}
                            type="radio"
                            name={`status[${orders?.id}]`}
                            value={`processing`}
                            checked={orders?.id === "processing"}
                            onChange={() => {}}
                          />
                          <span className="peer-checked:border-sky-400 absolute right-4 top-2/3 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                          <label
                            className="peer-checked:border-2 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-1"
                            htmlFor={`delivering_1${orders?.id}`}>
                            <Image
                              width={150}
                              height={150}
                              className="w-14 object-contain"
                              src={`/images/status/process.png`}
                              alt=""
                            />
                            <div className="ml-5">
                              <span className="mt-2 font-semibold capitalize">
                                {item.order_status}
                              </span>
                              <p className="text-slate-500 text-sm leading-6">
                                Dalam Persiapan Pengiriman
                              </p>
                            </div>
                          </label>
                        </div>
                      ) : item.order_status == "delivering" ? (
                        <div
                          className={`border border-gray-400 p-2 rounded-md`}>
                          <div className="relative">
                            <label
                              htmlFor="card-holder"
                              className="mt-4 mb-2 block text-sm font-medium">
                              Order Status
                            </label>
                            <input
                              className="peer hidden"
                              id={`delivering${item.id}`}
                              type="radio"
                              name={`status${item.product.id}`}
                              checked
                            />

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
                                  Barang Dalam Pengiriman
                                </p>
                              </div>
                            </label>
                          </div>
                          <div className={`block`}>
                            <label
                              htmlFor="card-holder"
                              className="mt-1 mb-1 block text-sm font-medium">
                              Shipping Number
                            </label>
                            <div className="relative">
                              <input
                                readOnly
                                value={item.shipping_resi}
                                type="text"
                                id="card-holder"
                                name="card-holder"
                                className="w-full focus:text-white rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="Your reference code here"

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
                            </div>
                          </div>
                        </div>
                      ) : item.order_status == "delivered" ? (
                        <div className="relative">
                          <label
                            htmlFor="card-holder"
                            className="mt-4 mb-2 block text-sm font-medium">
                            Order Status
                          </label>
                          <input
                            className="peer hidden"
                            id={`delivering_1${orders?.id}`}
                            type="radio"
                            name={`status[${item.product?.id}]`}
                            checked
                          />

                          <label
                            className="peer-checked:border-2 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-1"
                            htmlFor={`delivering_1${orders?.id}`}>
                            <Image
                              width={150}
                              height={150}
                              className="w-14 object-contain"
                              src={`/images/status/delivered.png`}
                              alt=""
                            />
                            <div className="ml-5">
                              <span className="mt-2 font-semibold capitalize">
                                Delivered
                              </span>
                              <p className="text-slate-500 text-sm leading-6">
                                Barang Berhasil Dikirim
                              </p>
                            </div>
                          </label>
                        </div>
                      ) : (
                        <div className="relative">
                          <label
                            htmlFor="card-holder"
                            className="mt-4 mb-2 block text-sm font-medium">
                            Order Status
                          </label>
                          <input
                            className="peer hidden"
                            id={`delivering_1${orders?.id}`}
                            type="radio"
                            name={`status[${item?.product.id}]`}
                            checked
                          />
                          <span className="peer-checked:border-sky-400 absolute right-4 top-2/3 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                          <label
                            className="peer-checked:border-1 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-1"
                            htmlFor={`delivering_1${orders?.id}`}>
                            <Image
                              width={150}
                              height={150}
                              className="w-14 object-contain"
                              src={`/images/status/pending.png`}
                              alt=""
                            />
                            <div className="ml-5">
                              <span className="mt-2 font-semibold capitalize">
                                {item.order_status}
                              </span>
                              <p className="text-slate-500 text-sm leading-6">
                                Menunggu Konfirmasi Dari Penjual
                              </p>
                            </div>
                          </label>
                        </div>
                      )}
                    </div>
                    <div className="flex justify-end items-end gap-2 mt-2 h-auto">
                      {item?.order_status == "delivering" ||
                        (item?.order_status == "delivered" && (
                          <button className="bg-sky-500 rounded-md hover:bg-sky-300 text-white p-3">
                            Track Shipping
                          </button>
                        ))}
                      {item?.order_status === "delivering" && (
                        <button
                          onClick={() => {
                            ConfirmAction(item?.id, "del");
                          }}
                          className="bg-red-500 rounded-md hover:bg-red-300 text-white p-3">
                          Received
                        </button>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </>
  );
};

export default OrderHistorySummary;
