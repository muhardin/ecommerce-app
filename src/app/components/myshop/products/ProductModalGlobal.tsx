"use client";
import { FormEvent, useEffect, useState } from "react";
import Modal from "../../ui/Modal";
import axios from "axios";
import { useSession } from "next-auth/react";
import CurrencyInput from "react-currency-input-field";
import toast from "react-hot-toast";
import FormattedPrice from "../../FormattedPrice";
import { useShopData } from "../../shop/ShopContext";
import { Product, Products, ShopData } from "../../../../../type";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";
import ImageListProduct from "@/components/images/ImageListProduct";

const ProductModalGlobal = ({
  product,
  onReset,
  shops,
}: {
  shops: ShopData;
  product: Product;
  onReset: () => void;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const router = useRouter();
  const [productName, setProductName] = useState("");
  const [productDescription, setProductDescription] = useState("");

  const shopData = useShopData();
  const { data: session } = useSession();

  const sellingPrice = Number(
    product?.company_price + product?.company_price * 0.1
  );

  const [basePrice, setBasePrice] = useState(product?.company_price);
  const profitDefault = Number(basePrice * 0.1);
  const sharingProfitDefault = Number((sellingPrice - basePrice) * 0);
  const finalProfit = Number(profitDefault - sharingProfitDefault);
  const [price, setPrice] = useState(sellingPrice);
  const [sharingProfit, setSharingProfit] = useState(sharingProfitDefault);
  const [profit, setProfit] = useState(50000);
  const [errorPrice, setErrorPrice] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      if (product) {
        setBasePrice(product.company_price);
        setPrice(sellingPrice);
        setProfit(
          Number(sellingPrice) -
            basePrice -
            (Number(sellingPrice) - basePrice) * 0
        );
        setSharingProfit(sharingProfitDefault);
      }
    };
    fetchData();
  }, [product, sellingPrice, profitDefault, sharingProfitDefault, basePrice]);

  const handleChange = (e: Number) => {
    if (Number(e) < Number(sellingPrice)) {
      setErrorPrice(true);
    } else {
      setErrorPrice(false);
    }
    setPrice(Number(e));
    setProfit(Number(e) - basePrice - (Number(e) - basePrice) * 0);
    setSharingProfit((Number(e) - basePrice) * 0);
    // console.log(e);
  };

  //   console.log(basePrice);
  //   console.log(sharingProfit);
  //   console.log(profitDefault);
  //   console.log(price);
  //   console.log(profit);

  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const config = {
    headers: { Authorization: `Bearer ${session?.bearer}` },
  };
  const [isLoading, setIsLoading] = useState(false);
  const [selectedShop, setSelectedShop] = useState(
    (shops as unknown as ShopData[])[0]?.id
  );
  const handleSubmit = async (e: FormEvent) => {
    setErrorPrice(false);
    e.preventDefault();
    setIsLoading(true);
    toast.loading("loading....");
    try {
      const formData = {
        product: product.id,
        price: price,
        shop: selectedShop,
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
        onReset();
      } else if (response.status == 201) {
        if (response.data.message.price) {
          setErrorPrice(true);
        }
        toast.dismiss();
        toast.error(response.data.message.error);
      } else if (response.status == 500) {
        toast.error("System on maintenance mode");
        toast.dismiss();
      } else {
        toast.dismiss();
        toast.error(response.data.message.error);
      }
    } catch (error) {
      toast.dismiss();
    }
  };

  return (
    <div>
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-sky-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200">
        Add To Shop
      </button>
      <div className="fixed inset-0 flex items-center justify-center z-50 mt-0 mb-0 md:mb-2">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="modal-container bg-white w-full h-full md:h-auto lg:m-44 rounded shadow-lg z-50 overflow-y-auto">
          <div className="relative modal-content py-4 text-left px-6">
            <div className="w-full">
              <section className="overflow-hidden bg-white py-2 font-poppins dark:bg-gray-800">
                <div className="max-w-6xl px-2 py-0 mx-auto lg:py-2 sm:px-2">
                  <div className="flex flex-col md:flex-row -mx-4">
                    <div className="w-full px-4">
                      <button
                        onClick={onReset}
                        className="p-1 ml-auto bg-transparent border-0 text-sky-600 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                        ×
                      </button>
                      <div className="sticky top-0 z-0 overflow-hidden ">
                        <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                          {product.isNew ? "New" : ""}
                        </span>
                        <h2 className="max-w-xl mt-2 mb-6 text-2xl font-bold dark:text-gray-400 md:text-4xl">
                          {product.title}
                        </h2>
                        <div className="relative mb-2 lg:mb-2">
                          {product.product_gallery?.length > 0 ? (
                            <Image
                              width={500}
                              height={500}
                              src={
                                process.env.SERVER_ENDPOINT +
                                "/" +
                                product.product_gallery[0].url
                              }
                              alt=""
                              className="object-cover w-full lg:h-full "
                            />
                          ) : (
                            <Image
                              width={500}
                              height={500}
                              src={"/images/no_image.png"}
                              alt=""
                              className="object-cover w-full lg:h-full "
                            />
                          )}
                        </div>
                        <div className="flex-wrap hidden md:flex ">
                          <div className="w-full">
                            <ImageListProduct
                              items={product?.product_gallery}
                            />
                          </div>
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
                                  <p className="text-xl font-medium">
                                    Price Details
                                  </p>
                                  <p className="text-gray-400">
                                    Complete your order by providing your
                                    payment details.
                                  </p>
                                  <div className="">
                                    <label
                                      htmlFor="email"
                                      className="mt-4 mb-2 block text-sm font-medium">
                                      Base Price
                                    </label>
                                    <div className="relative">
                                      <CurrencyInput
                                        readOnly
                                        name="fee"
                                        value={product.company_price}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        intlConfig={{
                                          locale: "id",
                                          currency: "IDR",
                                        }}
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
                                      Store
                                    </label>
                                    <div className="relative">
                                      <select
                                        onChange={(e) =>
                                          setSelectedShop(
                                            Number(e.target.value)
                                          )
                                        }
                                        id="Category"
                                        className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700">
                                        <option className="dark:text-slate-700">
                                          Select Shop
                                        </option>
                                        {/* categories */}
                                        {Array.isArray(shops) &&
                                        shops.length > 0
                                          ? shops.map(
                                              (
                                                item: ShopData,
                                                index: number
                                              ) => (
                                                <option
                                                  selected={index === 0}
                                                  key={item.id}
                                                  value={item.id}
                                                  className="dark:text-slate-700">
                                                  {item.company_name}
                                                </option>
                                              )
                                            )
                                          : null}
                                      </select>
                                    </div>
                                    <label
                                      htmlFor="card-holder"
                                      className="mt-4 mb-2 block text-sm font-medium">
                                      Harga Jual
                                    </label>
                                    <div className="relative">
                                      <CurrencyInput
                                        onValueChange={(value, name) =>
                                          handleChange(Number(value))
                                        }
                                        value={price}
                                        required
                                        name="agent_price"
                                        className="appearance-none block w-full bg-white text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        intlConfig={{
                                          locale: "id",
                                          currency: "IDR",
                                        }}
                                      />
                                      {errorPrice ? (
                                        <label className="text-red-600 text-sm ">
                                          Harga tidak boleh dibawah{" "}
                                          <FormattedPrice
                                            amount={sellingPrice}
                                          />
                                        </label>
                                      ) : null}
                                    </div>
                                    <label
                                      htmlFor="card-holder"
                                      className="mt-4 mb-2 block text-sm font-medium">
                                      Your Profit
                                    </label>
                                    <div className="relative">
                                      <CurrencyInput
                                        readOnly
                                        value={profit}
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        intlConfig={{
                                          locale: "id",
                                          currency: "IDR",
                                        }}
                                      />
                                    </div>
                                    <label
                                      htmlFor="card-holder"
                                      className="mt-4 mb-2 block text-sm font-medium">
                                      Sharing Profit
                                    </label>
                                    <div className="relative">
                                      <CurrencyInput
                                        value={sharingProfit}
                                        readOnly
                                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-1 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                        intlConfig={{
                                          locale: "id",
                                          currency: "IDR",
                                        }}
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
                                          <FormattedPrice
                                            amount={sharingProfit}
                                          />
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
                                  <div className="fixed md:relative bottom-2 right-2 flex flex-wrap items-center mt-4 justify-end gap-2 mb-2 mr-4">
                                    <div className="">
                                      <button
                                        type="button"
                                        onClick={onReset}
                                        className="p-2 bg-white text-sky-500 rounded-lg border border-blue-500 hover:bg-sky-700">
                                        Close
                                      </button>
                                    </div>

                                    <div className="">
                                      <button
                                        //   type="button"
                                        className="p-2 bg-white text-sky-500 rounded-lg border border-blue-500 hover:bg-sky-700">
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
            </div>
          </div>
          <div
            className="modal-close absolute top-0 right-0 -m-4 p-2 cursor-pointer"
            onClick={onReset}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white" // Change text-white to the desired color
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModalGlobal;
