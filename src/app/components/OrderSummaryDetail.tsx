"use client";
import { usePathname, useRouter } from "next/navigation";
import { useShopData } from "./shop/ShopContext";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import Image from "next/image";
import { OrderDetail } from "../../../typeJs";
import FormattedPrice from "./FormattedPrice";
import Link from "next/link";
import { formatDateAndTime } from "../helpers";
import Swal from "sweetalert2";
import { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

interface Step {
  title: string;
  steps: string[];
}

function formatUnixTimestamp(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
  return date.toLocaleDateString(); // You can specify the format as needed
}

const OrderSummaryDetail = ({ id }: any) => {
  const shopData = useShopData();

  const pathname = usePathname();
  const router = useRouter();

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
    data: order,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 2000,
  });
  const orderDetail = order?.order_detail;
  // Sum the 'shipping_price' values using the reduce function
  const subTotal: number = orderDetail?.reduce((total: number, item: any) => {
    return Number(total) + Number(item.amount);
  }, 0);
  // console.log(subTotal);
  // console.log(id);
  // console.log(order);

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
      <div>
        <div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
          <div className="flex justify-start item-start space-y-2 flex-col ">
            <h1 className="text-3xl lg:text-4xl font-semibold leading-7 lg:leading-9  text-gray-800">
              Order {order?.invoice_number}
            </h1>
            <p className="text-base font-medium leading-6 text-gray-600">
              {formatDateAndTime(order?.created_at)}
            </p>
          </div>
          <div className="mt-10 flex flex-col xl:flex-row justify-center items-stretch  w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
            <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
              <div className="flex flex-col justify-start items-start bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-4 w-full">
                <p className="text-lg md:text-xl font-semibold leading-6 xl:leading-5 text-gray-800">
                  Products
                </p>
                {order?.order_detail?.length > 0
                  ? order.order_detail.map((item: OrderDetail) => (
                      <div
                        key={item.id}
                        className="flex flex-col border-b border-gray-200">
                        <div className="mt-2 md:mt-4 flex  flex-col md:flex-row justify-start items-start md:items-center md:space-x-2 xl:space-x-8 w-full ">
                          <div className="pb-4 md:pb-4 w-full md:w-40">
                            <Image
                              width={250}
                              height={250}
                              className="w-full"
                              src={item.product.image}
                              alt="dress"
                            />
                          </div>
                          <div className="border-b border-gray-200 md:flex-row flex-col flex justify-between items-start w-full  pb-8 space-y-4 md:space-y-0">
                            <div className="w-full flex flex-col justify-start items-start space-y-8">
                              <h3 className="text-xl xl:text-2xl font-semibold leading-6 text-gray-800">
                                {item.product.title}
                              </h3>
                              {/* <div className="flex justify-start items-start flex-col space-y-2">
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-300">Style: </span>{" "}
                              Italic Minimal Design
                            </p>
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-300">Size: </span>{" "}
                              Small
                            </p>
                            <p className="text-sm leading-none text-gray-800">
                              <span className="text-gray-300">Color: </span>{" "}
                              Light Blue
                            </p>
                          </div> */}
                            </div>
                            <div className="flex justify-between space-x-8 items-start w-full">
                              <p className="text-base xl:text-lg leading-6">
                                <FormattedPrice
                                  amount={item.price + Number(item?.profit)}
                                />
                                {/* <span className="text-red-300 line-through">
                              <FormattedPrice
                                amount={item.price + Number(item?.profit)}
                              />
                            </span> */}
                              </p>
                              <p className="text-base xl:text-lg leading-6 text-gray-800">
                                {item.quantity}
                              </p>
                              <p className="text-base xl:text-lg font-semibold leading-6 text-gray-800">
                                <FormattedPrice amount={Number(item.amount)} />
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col justify-center px-2 py-2 md:p-2 xl:p-2 w-full bg-gray-50 space-y-6   ">
                          <h3 className="text-xl font-semibold leading-5 text-gray-800">
                            Shipping
                          </h3>
                          <div className="flex justify-between items-start w-full">
                            <div className="flex justify-center items-center space-x-4">
                              <div className="w-16 h-16">
                                <Image
                                  width={350}
                                  height={350}
                                  className="w-full h-full object-cover"
                                  alt="logo"
                                  src={`/images/shipping/${
                                    item.shipping_method == "J&T"
                                      ? "jnt"
                                      : item.shipping_method
                                  }.png`}
                                />
                              </div>
                              <div className="flex flex-col justify-start items-center">
                                <p className="text-lg leading-6 font-semibold text-gray-800 flex flex-col gap-2">
                                  {item.shipping_method} |{" "}
                                  {item.shipping_option}
                                  <span className="font-normal">
                                    {item.shipping_etd
                                      ? item.shipping_etd
                                      : "No Estimate Day"}
                                  </span>
                                  <p>Resi : {item?.shipping_resi}</p>
                                </p>
                              </div>
                            </div>
                            <p className="text-lg font-semibold leading-3 text-gray-800">
                              <FormattedPrice amount={item?.shipping_price} />
                            </p>
                          </div>
                          <div className="flex justify-start items-center gap-2">
                            <button className="bg-sky-500 rounded-md hover:bg-sky-300 text-white p-3">
                              Track Shipping
                            </button>
                            {item?.order_status != "received" ? (
                              <button
                                onClick={() => {
                                  ConfirmAction(item?.id, "del");
                                }}
                                className="bg-red-500 rounded-md hover:bg-red-300 text-white p-3">
                                Received
                              </button>
                            ) : (
                              ""
                            )}
                          </div>
                        </div>
                      </div>
                    ))
                  : ""}
              </div>
              <div className="flex justify-center md:flex-row flex-col items-stretch w-full space-y-4 md:space-y-0 md:space-x-6 xl:space-x-8">
                <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 space-y-6   ">
                  <h3 className="text-xl font-semibold leading-5 text-gray-800">
                    Summary
                  </h3>
                  <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
                    <div className="flex justify-between  w-full">
                      <p className="text-base leading-4 text-gray-800">
                        Subtotal
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        <FormattedPrice amount={subTotal} />
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base leading-4 text-gray-800">
                        Discount{" "}
                        <span className="bg-gray-200 p-1 text-xs font-medium leading-3  text-gray-800">
                          STUDENT
                        </span>
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        <FormattedPrice amount={0} />
                      </p>
                    </div>
                    <div className="flex justify-between items-center w-full">
                      <p className="text-base leading-4 text-gray-800">
                        Shipping
                      </p>
                      <p className="text-base leading-4 text-gray-600">
                        <FormattedPrice amount={order?.shipping_price} />
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center w-full">
                    <p className="text-base font-semibold leading-4 text-gray-800">
                      Total
                    </p>
                    <p className="text-base font-semibold leading-4 text-gray-600">
                      <FormattedPrice amount={order?.amount} />
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 flex-col ">
              <h3 className="text-xl font-semibold leading-5 text-gray-800">
                Customer
              </h3>
              <div className="flex  flex-col md:flex-row xl:flex-col justify-start items-stretch h-full w-full md:space-x-6 lg:space-x-8 xl:space-x-0 ">
                <div className="flex flex-col justify-start items-start flex-shrink-0">
                  <div className="flex justify-center  w-full  md:justify-start items-center space-x-4 py-8 border-b border-gray-200">
                    <Image
                      width={45}
                      height={45}
                      src="/images/avatar.png"
                      alt="avatar"
                    />
                    <div className=" flex justify-start items-start flex-col space-y-2">
                      <p className="text-base font-semibold leading-4 text-left text-gray-800">
                        David Kent
                      </p>
                      <p className="text-sm leading-5 text-gray-600">
                        10 Previous Orders
                      </p>
                    </div>
                  </div>

                  <div className="flex justify-center  md:justify-start items-center space-x-4 py-4 border-b border-gray-200 w-full">
                    <svg
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M19 5H5C3.89543 5 3 5.89543 3 7V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V7C21 5.89543 20.1046 5 19 5Z"
                        stroke="#1F2937"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                      <path
                        d="M3 7L12 13L21 7"
                        stroke="#1F2937"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                    <p className="cursor-pointer text-sm leading-5 text-gray-800">
                      david89@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex justify-between xl:h-full  items-stretch w-full flex-col mt-6 md:mt-0">
                  <div className="flex justify-center md:justify-start xl:flex-col flex-col md:space-x-6 lg:space-x-8 xl:space-x-0 space-y-4 xl:space-y-12 md:space-y-0 md:flex-row  items-center md:items-start ">
                    <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 xl:mt-8">
                      <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                        Shipping Address
                      </p>
                      <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                        {order?.user_address?.city_name}{" "}
                        <p>
                          {order?.user_address?.subdistrict_name}{" "}
                          <p>{order?.user_address?.address}</p>
                        </p>
                      </p>
                    </div>
                    {/* <div className="flex justify-center md:justify-start  items-center md:items-start flex-col space-y-4 ">
                    <p className="text-base font-semibold leading-4 text-center md:text-left text-gray-800">
                      Billing Address
                    </p>
                    <p className="w-48 lg:w-full xl:w-48 text-center md:text-left text-sm leading-5 text-gray-600">
                      180 North King Street, Northhampton MA 1060
                    </p>
                  </div> */}
                  </div>
                  <Link href={"/order"}>
                    <div className="flex w-full justify-center items-center md:justify-start md:items-start">
                      <button className="mt-6 md:mt-0 py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base leading-4 text-gray-800">
                        Back
                      </button>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className={`relative z-10 ${!modal ? "hidden" : ""} `}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed top-40 md:inset-0 z-10 w-screen overflow-y-auto">
          <div className="w-full flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className={`animate-enter max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}>
              <div className="flex-1 w-0 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 pt-0.5 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f01616"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round">
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-lg font-bold text-red-700">
                      Submit Fail !
                    </p>

                    <p className="mt-1 text-sm text-gray-500 flex flex-col justify-start">
                      <ul>
                        {errMessage.length > 0
                          ? errMessage.map((item: string, index: any) => (
                              <div
                                className="flex justify-start"
                                key={item[index]}>
                                <li className="text-md font-bold text-red-600 text-sm">
                                  - {item}
                                </li>
                              </div>
                            ))
                          : ""}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => {
                    setModal(false);
                    setInLoading(false);
                  }}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OrderSummaryDetail;
