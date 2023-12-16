"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import CountdownTimer from "./CountdownTimer";
import Link from "next/link";
import { Icons } from "./ui/Icons";
import { useSession } from "next-auth/react";
import useSWR from "swr";
import { useRouter, usePathname } from "next/navigation";
import { useShopData } from "./shop/ShopContext";
import FormattedPrice from "./FormattedPrice";

interface Step {
  title: string;
  steps: string[];
}

function formatUnixTimestamp(unixTimestamp: number): string {
  const date = new Date(unixTimestamp * 1000); // Convert seconds to milliseconds
  return date.toLocaleDateString(); // You can specify the format as needed
}

const PaymentComponent = ({ id }: any) => {
  const shopData = useShopData();

  const pathname = usePathname();
  const router = useRouter();

  // console.log(id[0]);

  const { data: session } = useSession();
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json", // Adjust headers as needed
      },
    }).then((res) => res.json());
  const url = `${process.env.SERVER_ENDPOINT}/api/user/payment/detail/${id[0]}/${shopData?.id}`;
  const {
    data: payment,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 2000,
  });
  // console.log(payment);

  useEffect(() => {
    if (payment?.status == "PAID") {
      router.push("/web/myshop");
    }
  }, [payment?.status, router]);

  // if (payment?.message == "Data not exist") {
  //   router.push("/");
  // }
  // console.log(payment?);
  // console.log(payment?.instructions);
  // console.log(payment?.order.status);

  /** Count down  expire payment */
  const [timeRemaining, setTimeRemaining] = useState<number>(0);
  const unixTimestamp = payment?.order?.order_payment?.expired_time; // Example Unix timestamp (seconds since the Unix epoch)

  function formatTimeRemaining(timeInSeconds: number): string {
    const days = Math.floor(timeInSeconds / (60 * 60 * 24));
    const hours = Math.floor((timeInSeconds % (60 * 60 * 24)) / (60 * 60));
    const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  useEffect(() => {
    const interval = setInterval(() => {
      const currentTime = Math.floor(Date.now() / 1000); // Current Unix timestamp
      const remaining = unixTimestamp - currentTime;

      if (remaining <= 0) {
        clearInterval(interval);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(remaining);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [unixTimestamp]);
  /** end of count down expire time */
  const [decodedArray, setDecodedArray] = useState<Step[]>([]);
  const jsonString = payment?.order?.order_payment?.instructions;

  useEffect(() => {
    try {
      const decodedArray: Step[] = JSON.parse(jsonString);
      setDecodedArray(decodedArray);
    } catch (error) {
      console.error("Error decoding JSON:", error);
    }
  }, [jsonString]);

  return (
    <>
      {payment ? (
        <div className=" w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center justify-center">
            <span>
              Payment Via {payment?.order?.order_payment?.payment_name}
            </span>
          </div>
          <div className="w-full flex  flex-col items-center justify-center mt-6">
            <div className="text-center">
              <div className="w-full flex justify-center mb-4">
                {payment?.order?.order_payment?.payment?.picture ? (
                  <Image
                    className="object-cover"
                    // src={`${payment?.payment?.picture}`}
                    src={`/images/payment/code/${payment?.order?.order_payment?.payment?.picture}`}
                    alt=""
                    width={250}
                    height={250}
                  />
                ) : (
                  ""
                )}
              </div>
              {payment?.order?.order_payment?.status !== "PAID" ? (
                <h1>
                  Batas Pembayaran :{" "}
                  <div className="text-2xl text-red-500">
                    {formatTimeRemaining(timeRemaining)}
                  </div>
                </h1>
              ) : (
                ""
              )}
              <div className="flex flex-col mt-2">
                <span>Total</span>
                <span className="text-2xl font-bold">
                  <FormattedPrice
                    amount={payment?.order?.order_payment?.amount}
                  />
                </span>
              </div>

              <div className="flex flex-col mt-4">
                <span>
                  Nomor Rekening Virtual Account{" "}
                  {payment?.order?.order_payment?.payment_name}
                </span>
                <span className="font-bold">
                  {payment?.order?.order_payment?.pay_code}
                </span>
              </div>
              <div className="flex flex-col mt-4">
                <span>Nomor Pesanan</span>
                <span>{payment?.order?.order_payment?.payment_reference}</span>
              </div>
            </div>
            {payment?.order.order_payment?.payment_method == "wallet" ? (
              payment?.order?.order_payment?.status !== "PAID" ? (
                <div className="py-10 text-center">
                  <Link
                    href={payment?.order.order_payment?.checkout_url}
                    className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3 rounded-lg">
                    Lanjutkan Pembayaran
                  </Link>
                </div>
              ) : (
                ""
              )
            ) : (
              ""
            )}
          </div>
          {payment?.order?.order_payment?.status == "PAID" ? (
            <div className="bg-gray-100 h-auto">
              <div className="bg-white p-6  md:mx-auto">
                <svg
                  viewBox="0 0 24 24"
                  className="text-green-600 w-16 h-16 mx-auto my-6">
                  <path
                    fill="currentColor"
                    d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"></path>
                </svg>
                <div className="text-center">
                  <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                    Payment Done!
                  </h3>
                  <p className="text-gray-600 my-2">
                    Thank you for completing your secure online payment_.
                  </p>
                  <p> Have a great day! </p>
                  <div className="py-10 text-center">
                    <Link
                      href="/order"
                      className="px-12 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                      GO BACK
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-10">
              <div className="mb-2">
                <span className="">
                  Payment instructions via{" "}
                  {payment?.order_payment?.payment_name}
                </span>
              </div>
              {decodedArray.map((item, index) => (
                <details className="group" key={index}>
                  <summary className="flex cursor-pointer items-center rounded-lg px-0 py-0 justify-between text-black hover:bg-gray-100 hover:text-gray-700">
                    <div className="flex items-center justify-start">
                      <span className="ml-0 text-dark-500 text-sm item-center uppercase font-bold">
                        {item.title}
                      </span>
                    </div>

                    <span className="shrink-0 transition duration-300 group-open:-rotate-180">
                      <Icons.arrow_down />
                    </span>
                  </summary>
                  <ol>
                    {item.steps.map((step, stepIndex) => (
                      <li key={stepIndex}>
                        - <span dangerouslySetInnerHTML={{ __html: step }} />
                      </li>
                    ))}
                  </ol>
                </details>
              ))}
            </div>
          )}
        </div>
      ) : (
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex flex-col items-center justify-center">
            <span className="placeholder text-transparent bg-gray-300 animate-pulse">
              Payment Via Loading...
            </span>
          </div>
          <div className="w-full flex flex-col items-center justify-center mt-6">
            <div className="text-center">
              <div className="w-full flex justify-center mb-4">
                <div className="w-48 h-48 placeholder bg-gray-300 rounded-full animate-pulse"></div>
              </div>
              <h1>
                <div className="placeholder bg-gray-300 w-24 h-6 mb-4 animate-pulse"></div>
              </h1>
              <div className="flex flex-col mt-2">
                <span>Total</span>
                <div className="placeholder bg-gray-300 w-24 h-6 mt-2 animate-pulse"></div>
              </div>
              <div className="flex flex-col mt-4">
                <span>Nomor Rekening Virtual Account Loading...</span>
                <div className="placeholder bg-gray-300 w-24 h-6 mt-2 animate-pulse"></div>
              </div>
              <div className="flex flex-col mt-4">
                <span>Nomor Pesanan Loading...</span>
                <div className="placeholder bg-gray-300 w-24 h-6 mt-2 animate-pulse"></div>
              </div>
            </div>
            {payment?.payment_method == "wallet" ? (
              <div className="py-10 text-center">
                <div className="placeholder bg-gray-300 w-36 h-12 mt-2 animate-pulse"></div>
              </div>
            ) : (
              ""
            )}
          </div>
          {payment?.status == "PAID" ? (
            <div className="bg-gray-100 h-auto">
              <div className="bg-white p-6 md:mx-auto">
                <div className="placeholder bg-gray-300 w-16 h-16 mx-auto my-6 animate-pulse"></div>
                <div className="text-center">
                  <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">
                    Payment Done!
                  </h3>
                  <div className="placeholder bg-gray-300 w-40 h-6 my-2 animate-pulse"></div>
                  <div className="placeholder bg-gray-300 w-32 h-6 my-2 animate-pulse"></div>
                  <div className="placeholder bg-gray-300 w-24 h-12 my-10 animate-pulse"></div>
                </div>
              </div>
            </div>
          ) : (
            <div className="mt-10">
              <div className="mb-2">
                <span className="placeholder bg-gray-300 w-36 h-6 animate-pulse">
                  Payment instructions via Loading...
                </span>
              </div>
              {decodedArray.map((item, index) => (
                <details className="group" key={index}>
                  <summary className="flex cursor-pointer items-center rounded-lg px-0 py-0 justify-between text-black hover:bg-gray-100 hover:text-gray-700">
                    <div className="flex items-center justify-start">
                      <span className="ml-0 text-dark-500 text-sm item-center uppercase font-bold">
                        <div className="placeholder bg-gray-300 w-20 h-6 animate-pulse"></div>
                      </span>
                    </div>
                    <div className="placeholder bg-gray-300 w-6 h-6 shrink-0 transition duration-300 group-open:-rotate-180 animate-pulse"></div>
                  </summary>
                  <div className="placeholder bg-gray-300 w-20 h-6 animate-pulse"></div>
                </details>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default PaymentComponent;
