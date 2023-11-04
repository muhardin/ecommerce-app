"use client";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import { ItemProps } from "../../../../../type";
import { calculatePercentage } from "@/app/helpers";
import FormattedPrice from "../../FormattedPrice";
import ProductModal from "./ProductModal";

const ProductList = ({ item }: ItemProps) => {
  const starArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className=" text-yellow-400">
      <IoIosStar />
    </span>
  ));
  // console.log(item);
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="">
        <Link
          href={{
            pathname: "/product",
            query: { id: item?.id, image: item?.image },
          }}
        >
          <div className=" w-full h-80 group overflow-hidden relative">
            <Image
              src={item.image}
              alt="Product image"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
            />
            {item?.isNew && (
              <span className=" absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-sky-500 group-hover:text-white bg-white duration-200">
                New Arrival
              </span>
            )}
          </div>
        </Link>
        <div className="border-[1px] border-slate-300 border-t-0 py-4 px-2 flex flex-col gap-y-2 bg-white rounded-b-lg">
          <Link
            href={{
              pathname: "/product",
              query: { id: item?.id, image: item?.image },
            }}
          >
            <p className="cursor-pointer hover:text-sky-600">{item?.title}</p>
          </Link>
          <div className=" flex items-center justify-between">
            <div className=" border-[1px] border-sky-500 py-1 px-4 rounded-full text-xs">
              <p>{calculatePercentage(item?.price, item?.oldPrice)}% off</p>
            </div>

            <div className=" flex items-center gap-x-2">
              <p className="text-slate-500 line-through text-sm">
                <FormattedPrice amount={item.oldPrice} />
              </p>
              <p className=" font-semibold">
                <FormattedPrice amount={item?.price} />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* Add to cart */}
            <div className="flex flex-row justify-start gap-2">
              <ProductModal product={item} />
              {/* <button className=" bg-sky-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200">
                Add
              </button> */}
              <Link
                href={`/myshop/product/detail/${item.id}`}
                className=" bg-green-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200"
              >
                Detail
              </Link>
            </div>
            {/* Star Icons */}
            <div className=" flex items-center">{starArray}</div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductList;
