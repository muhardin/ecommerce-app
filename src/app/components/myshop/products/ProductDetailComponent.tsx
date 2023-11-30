"use client";
import { useShopData } from "@/app/components/shop/ShopContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import React, {
  ChangeEvent,
  FormEvent,
  Suspense,
  useEffect,
  useState,
} from "react";
import useSWR from "swr";
import { ProductGallery, Products } from "../../../../../type";
import FormattedPrice from "../../FormattedPrice";
import CurrencyInput from "react-currency-input-field";
import Link from "next/link";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import ModalImage from "react-modal-image";

interface Props {
  id: number;
}
const ProductDetailComponent = ({ id }: Props) => {
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const shopData = useShopData();
  const { data: session } = useSession();
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  const url = process.env.SERVER_ENDPOINT + "/api/products/" + id;
  const {
    data: product,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const sellingPrice = Number(
    product?.company_price + product?.company_price * 0.1
  );

  const profitDefault = Number(product?.company_price * 0.1);
  const sharingProfitDefault = Number(profitDefault * 0.1);
  const [price, setPrice] = useState(sellingPrice);
  const [basePrice, setBasePrice] = useState(product?.company_price);
  const [sharingProfit, setSharingProfit] = useState(sharingProfitDefault);
  const [profit, setProfit] = useState(profitDefault);
  const [errorPrice, setErrorPrice] = useState(false);
  console.log(product);

  useEffect(() => {
    const fetchData = async () => {
      if (product) {
        setBasePrice(product?.company_price);
        setPrice(sellingPrice);
        setProfit(profitDefault);
        setSharingProfit(sharingProfitDefault);
      }
    };
    fetchData();
  }, [product, sellingPrice, profitDefault, sharingProfitDefault]);

  const handleChange = (e: Number) => {
    if (Number(e) < Number(sellingPrice)) {
      setErrorPrice(true);
    } else {
      setErrorPrice(false);
    }
    setPrice(Number(e));
    setProfit(Number(e) - basePrice - (Number(e) - basePrice) * 0.1);
    setSharingProfit((Number(e) - basePrice) * 0.1);
    // console.log(e);
  };

  // console.log(basePrice);
  // console.log(sharingProfit);
  // console.log(profitDefault);
  // console.log(price);
  // console.log(profit);

  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const config = {
    headers: { Authorization: `Bearer ${session?.bearer}` },
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    toast.loading("loading....");
    try {
      const formData = {
        product: id,
        price: price,
        shop: shopData?.id,
      };
      // formDataOrder.parse(formData);
      // Form data is valid; submit it using Axios
      const response = await axios.post(
        process.env.SERVER_ENDPOINT + "/api/myshop-board/products/add",
        formData,
        config
      ); // Replace with your API endpoint
      // console.log("Form submitted:", response);
      if (response.status == 200) {
        toast.dismiss();
        toast.success("Success", { duration: 6000 });
        router.push("/payment/" + response.data.order.id);
        setIsLoading(false);
        // console.log(response);
      } else if (response.status == 201) {
        setErrMessage(response.data.message.error);
        toast.dismiss();
        // console.log(response);
      } else if (response.status == 500) {
        toast.error("System on maintenance mode");
        toast.dismiss();
      }
    } catch (error) {
      toast.dismiss();
      // console.log(error);
    }
  };
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  return (
    <div>
      {product ? (
        <section className="overflow-hidden bg-white py-11 font-poppins dark:bg-gray-800">
          <div className="max-w-6xl px-4 py-4 mx-auto lg:py-4 sm:px-6">
            <div className="flex flex-col md:flex-row -mx-4">
              <div className="w-full px-4">
                <div className="sticky top-0 z-0 overflow-hidden ">
                  <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                    {product.isNew ? "New" : ""}
                  </span>
                  <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                    {product.title}
                  </h2>
                  <div className=" mb-2 lg:mb-2 ">
                    <Suspense>
                      {product?.product_gallery?.length > 0 ? (
                        <ModalImage
                          className="object-center items-center relative z-50"
                          small={`${process.env.SERVER_ENDPOINT}${product.product_gallery[currentImageIndex].url}`}
                          large={`${process.env.SERVER_ENDPOINT}${product.product_gallery[currentImageIndex].url}`}
                          alt={product.title}
                        />
                      ) : (
                        <ModalImage
                          className="object-center items-center"
                          small={`/images/no_image.png`}
                          large={`/images/no_image.png`}
                          alt={product.title}
                        />
                      )}
                    </Suspense>

                    {/* {product?.product_gallery?.length > 0 ? (
                      <Image
                        width={500}
                        height={500}
                        src={`${process.env.SERVER_ENDPOINT}${product.product_gallery[0].url}`}
                        alt=""
                        className="object-cover w-full lg:h-2/5 "
                      />
                    ) : (
                      <Image
                        width={500}
                        height={500}
                        src={`/images/no_image.png`}
                        alt=""
                        className="object-cover w-full lg:h-2/5 "
                      />
                    )} */}
                  </div>
                  <div className="flex flex-row">
                    {product.product_gallery?.length > 0
                      ? product.product_gallery.map(
                          (item: ProductGallery, index: Number) => (
                            <div key={item.id} className="w-1/2 p-2 sm:w-1/4">
                              <button
                                onClick={() => {
                                  setCurrentImageIndex(Number(index));
                                }}
                                className="block border border-blue-300 dark:border-transparent dark:hover:border-blue-300 hover:border-blue-300">
                                <Image
                                  width={65}
                                  height={65}
                                  src={`${process.env.SERVER_ENDPOINT}${item.url}`}
                                  alt=""
                                  className="object-cover w-full lg:h-20"
                                />
                              </button>
                            </div>
                          )
                        )
                      : null}
                  </div>
                </div>
              </div>
              <div className="w-full px-4">
                <div className="lg:pl-4">
                  <div className="mb-8 ">
                    <div className="flex items-center mb-6">
                      <div className="w-full mb-2 ">
                        <form onSubmit={handleSubmit}>
                          <div className="mt-0 bg-gray-50 px-4 pt-2 lg:mt-0">
                            <p className="text-xl font-medium">Price Details</p>
                            <p className="text-gray-400">
                              Complete your order by providing your payment
                              details.
                            </p>
                            <div className="">
                              <label
                                htmlFor="email"
                                className="mt-4 mb-2 block text-sm font-medium">
                                Base Price
                              </label>
                              <div className="">
                                <CurrencyInput
                                  readOnly
                                  name="fee"
                                  value={product.company_price}
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  intlConfig={{ locale: "id", currency: "IDR" }}
                                />
                                {/* <input
                                readOnly
                                value={product.company_price}
                                type="text"
                                id="email"
                                name="email"
                                className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                placeholder="your.email@gmail.com"
                              /> */}
                                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                  {/* <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-4 w-4 text-gray-400"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                                  />
                                </svg> */}
                                </div>
                              </div>
                              <label
                                htmlFor="card-holder"
                                className="mt-4 mb-2 block text-sm font-medium">
                                Harga Jual
                              </label>
                              <div className="">
                                <CurrencyInput
                                  onValueChange={(value, name) =>
                                    handleChange(Number(value))
                                  }
                                  value={price}
                                  required
                                  name="agent_price"
                                  className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  intlConfig={{ locale: "id", currency: "IDR" }}
                                />
                                {errorPrice ? (
                                  <label className="text-red-600 text-sm ">
                                    Harga tidak boleh dibawah{" "}
                                    <FormattedPrice amount={sellingPrice} />
                                  </label>
                                ) : null}
                              </div>
                              <label
                                htmlFor="card-holder"
                                className="mt-4 mb-2 block text-sm font-medium">
                                Your Profit
                              </label>
                              <div className="">
                                <CurrencyInput
                                  readOnly
                                  value={profit}
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  intlConfig={{ locale: "id", currency: "IDR" }}
                                />
                              </div>
                              <label
                                htmlFor="card-holder"
                                className="mt-4 mb-2 block text-sm font-medium">
                                Sharing Profit
                              </label>
                              <div className="">
                                <CurrencyInput
                                  value={sharingProfit}
                                  readOnly
                                  className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                  intlConfig={{ locale: "id", currency: "IDR" }}
                                />
                              </div>
                              {/* <label
                                htmlFor="card-no"
                                className="mt-4 mb-2 block text-sm font-medium"
                              >
                                Card Details
                              </label>
                              <div className="flex">
                                <div className="relative w-7/12 flex-shrink-0">
                                  <input
                                    type="text"
                                    id="card-no"
                                    name="card-no"
                                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="xxxx-xxxx-xxxx-xxxx"
                                  />
                                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                                    <svg
                                      className="h-4 w-4 text-gray-400"
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="16"
                                      height="16"
                                      fill="currentColor"
                                      viewBox="0 0 16 16"
                                    >
                                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                                    </svg>
                                  </div>
                                </div>
                                <input
                                  type="text"
                                  name="credit-expiry"
                                  className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                  placeholder="MM/YY"
                                />
                                <input
                                  type="text"
                                  name="credit-cvc"
                                  className="w-1/6 flex-shrink-0 rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                                  placeholder="CVC"
                                />
                              </div> */}

                              <div className="mt-6 border-t border-b py-2">
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-gray-900">
                                    Harga Awal
                                  </p>
                                  <p className="font-semibold text-gray-900">
                                    <FormattedPrice
                                      amount={product.company_price}
                                    />
                                  </p>
                                </div>
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-gray-900">
                                    Profit
                                  </p>
                                  <p className="font-semibold text-gray-900">
                                    <FormattedPrice amount={profit} />
                                  </p>
                                </div>
                                <div className="flex items-center justify-between">
                                  <p className="text-sm font-medium text-gray-900">
                                    Referral Profit
                                  </p>
                                  <p className="font-semibold text-gray-900">
                                    <FormattedPrice amount={sharingProfit} />
                                  </p>
                                </div>
                              </div>
                              <div className="mt-6 flex items-center justify-between">
                                <p className="text-sm font-medium text-gray-900">
                                  Total
                                </p>
                                <p className="text-2xl font-semibold text-gray-900">
                                  <FormattedPrice amount={price} />
                                </p>
                              </div>
                            </div>
                            <div className="flex flex-wrap items-center -mx-4 mt-2">
                              <div className="w-full px-4 mb-4 lg:w-1/2 lg:mb-0">
                                <Link
                                  href={"/myshop/product/available"}
                                  className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                  Back
                                </Link>
                              </div>
                              <div className="w-full px-4 mb-4 lg:mb-0 lg:w-1/2">
                                <button
                                  //   type="button"
                                  className="flex items-center justify-center w-full p-4 text-blue-500 border border-blue-500 rounded-md dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 hover:text-gray-100 dark:bg-blue-600 dark:hover:bg-blue-700 dark:hover:border-blue-700 dark:hover:text-gray-300">
                                  Add to store
                                </button>
                              </div>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>

                    {/* <p className="inline-block mb-8 text-4xl font-bold text-gray-700 dark:text-gray-400 ">
                      <span>
                        <FormattedPrice amount={product.price} />
                      </span>
                      <span className="text-base font-normal text-gray-500 line-through dark:text-gray-400">
                        <FormattedPrice amount={product.oldPrice} />
                      </span>
                    </p>
                    <p className="text-green-600 dark:text-green-300 ">
                      7 in stock
                    </p> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
};
export default ProductDetailComponent;
