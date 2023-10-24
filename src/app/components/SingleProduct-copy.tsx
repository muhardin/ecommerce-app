"use client";

import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const SingleProduct = ({ product }: any) => {
  const url = process.env.SERVER_ENDPOINT + "/api/products/" + product;
  const dispatch = useDispatch();
  const { data, isLoading, isValidating, error } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });
  // const [data, setData]: any = useState(null);
  // const [loaded, setLoaded] = useState(false);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       process.env.SERVER_ENDPOINT + "/api/products/" + product
  //     );
  //     const data = await response.json();
  //     setData(data);
  //     setLoaded(true);
  //     console.log(data);
  //   };
  //   setTimeout(() => {
  //     fetchData();
  //   }, 3000);
  // }, [product]);
  // console.log(isValidating);
  console.log(product);
  return (
    <div className="grid lg:grid-cols-2 gap-5 bg-white p-4 rounded-lg">
      <div className="">
        {!data?.image ? (
          <div className="animate-pulse">
            <svg
              className="w-500 h-500 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18"
            >
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        ) : (
          <Image
            src={data?.image}
            alt="Data Image"
            width={500}
            height={500}
            className="w-full max-h[700px] object-cover rounded-lg"
          />
        )}
      </div>
      <div className="flex flex-col justify-center gap-y-10">
        <div className="">
          <p className="text-3xl font-semibold">{data?.title}</p>
          <p className="text-xl font-semibold">
            <FormattedPrice amount={data?.price} />
          </p>
        </div>
        <p className=" text-lightText">{data?.description}</p>
        <div className="text-sm text-lightText flex flex-col">
          <span>
            SKU :<span className=" text-darkText">{data?.id}</span>
          </span>
          <span>
            Category :<span className=" text-darkText">{data?.category}</span>
          </span>
        </div>
        <div
          onClick={() =>
            dispatch(addToCart(data)) &&
            toast.success(`${data?.title.substring(0, 15)} added successfully!`)
          }
          className="flex items-center cursor-pointer group"
        >
          <button className=" bg-darkText text-slate-100 px-6 py-3 text-sm uppercase border-r-[1px] border-r-slate-500">
            add to cart
          </button>
          <span className="bg-darkText text-xl text-slate-100 w-12 flex items-center justify-center group-hover:bg-sky-500 duration-200 py-3">
            <IoMdCart />
          </span>
        </div>
        <p className="flex items-center gap-x-2 text-sm ">
          <MdFavoriteBorder className=" text-xl" />
          Add to wishlist
        </p>
      </div>
      <Toaster />
    </div>
  );
};

export default SingleProduct;
