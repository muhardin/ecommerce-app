"use client";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import { ItemProps, Product } from "../../../../../type";
import { calculatePercentage } from "@/app/helpers";
import FormattedPrice from "../../FormattedPrice";
import ProductModal from "./ProductModal";
import UpdateProductComponent from "@/components/supplier/UpdateProductComponent";
import { useState } from "react";
import { usePathname } from "next/navigation";

const ProductList = ({ item }: ItemProps) => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isListed, setIsListed] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const starArray = Array.from({ length: item?.rating }, (_, index) => (
    <span key={index} className=" text-yellow-400">
      <IoIosStar />
    </span>
  ));

  return (
    <>
      <div className="w-full rounded-lg overflow-hidden">
        <div className={`${isListed ? "hidden" : "block"}`}>
          <Link
            href={{
              pathname: "/product",
              query: { id: item?.id, image: item?.image },
            }}
          >
            <div className=" w-full h-80 group overflow-hidden relative">
              <Image
                src={`${process.env.SERVER_ENDPOINT}${item.image}`}
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
              <p className="cursor-pointer hover:text-sky-600 font-semibold">
                {item?.title}
              </p>
              <p className="cursor-pointer hover:text-sky-600">
                City : {item?.supplier.city_name}
              </p>
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
            <div className="flex flex-row items-center justify-between">
              {/* Add to cart */}
              <div className="flex flex-row justify-start gap-2">
                <div className="flex flex-row gap-2 w-full h-full bg-white relative z-20">
                  {pathname.startsWith("/supplier") ? (
                    <div className=" relative z-10">
                      <UpdateProductComponent
                        buttonText={"Update"}
                        isOpen={isModalOpen}
                        closeModal={closeModal}
                        openModal={openModal}
                        itemProducts={item as Product}
                      />
                    </div>
                  ) : (
                    <>
                      <ProductModal product={item} />
                      <Link
                        href={`/myshop/product/detail/${item.id}`}
                        className=" bg-green-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200"
                      >
                        Detail
                      </Link>
                    </>
                  )}
                </div>

                {/* <button className=" bg-sky-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200">
                Add
              </button> */}
              </div>
              {/* Star Icons */}
              <div className=" flex items-center">{starArray}</div>
            </div>
          </div>
        </div>
        <Toaster />
      </div>
    </>
  );
};

export default ProductList;
