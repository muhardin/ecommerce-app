"use client";
import Image from "next/image";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import { ItemProps, Product, ShopData } from "../../../../../type";
import { calculatePercentage } from "@/app/helpers";
import FormattedPrice from "../../FormattedPrice";
import MyProductModal from "./MyProductModal";
import Swal from "sweetalert2";
import { useSession } from "next-auth/react";
import axios from "axios";
import { useShopData } from "../../shop/ShopContext";
import MyProductModalGlobal from "./MyProductModalGlobal";

const MyProductListGlobal = ({
  item,
  shops,
}: {
  item: Product;
  shops: ShopData;
}) => {
  console.log(item);
  const shopData = useShopData();
  const { data: session } = useSession();
  const starArray = Array.from({ length: item?.product.rating }, (_, index) => (
    <span key={index} className=" text-yellow-400">
      <IoIosStar />
    </span>
  ));
  const SubmitDelete = async (id?: number, act?: string) => {
    const config = {
      headers: { Authorization: `Bearer ${session?.bearer}` },
    };
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-darkText mr-2 ml-2 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200",
        cancelButton:
          "bg-darkText hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then(async (result) => {
        if (result.isConfirmed) {
          // console.log(productId);
          if (act == "del") {
            toast.loading("...loading");
            await axios
              .delete(
                `${process.env.SERVER_ENDPOINT}/api/myshop-board/products/myproducts/delete/${id}/${shopData?.id}`,
                {
                  headers: {
                    Authorization: `Bearer ${session?.bearer}`, // Include the bearer token
                  },
                }
              )
              .then((response: any) => {
                if (response.status == 200) {
                  toast.dismiss();
                  toast.success("Data deleted successfully", {
                    duration: 3000,
                  });
                } else if (response.status == 201) {
                  toast.error("Fail!");
                  toast.dismiss();
                }
              });
          } else {
          }
        }
      });
  };

  return (
    <div className="w-full rounded-lg overflow-hidden pb-4">
      <div className="">
        <Link
          href={{
            pathname: "/product",
            query: {
              id: item?.id,
              image:
                item?.product_gallery?.length > 0
                  ? item?.product_gallery[0].url
                  : "/images/no_image.png",
            },
          }}>
          <div className=" w-full h-80 group overflow-hidden relative">
            <Image
              src={`${process.env.SERVER_ENDPOINT}${item.product.product_gallery[0].url}`}
              alt="Product image"
              width={500}
              height={500}
              className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
            />
            {item?.product?.isNew && (
              <span className=" absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-sky-500 group-hover:text-white bg-white duration-200">
                New Arrival
              </span>
            )}
          </div>
        </Link>
        <div className="border-[1px] border-slate-300 border-t-0 py-4 px-2 flex flex-col gap-y-2 bg-white rounded-b-lg">
          <div className="flex flex-row justify-between items-center">
            <Link
              href={{
                pathname: "/product",
                query: {
                  id: item?.id,
                  image:
                    item?.product_gallery?.length > 0
                      ? item?.product_gallery[0].url
                      : "/images/no_image.png",
                },
              }}>
              <p className="cursor-pointer hover:text-sky-600">
                {item?.product.title}
              </p>
            </Link>
            {!item.product.isPublish && (
              <span className="text-red-600">Unpublish</span>
            )}
            {item.product.status == "Pending" && (
              <span className="text-red-600">Pending</span>
            )}
          </div>
          <div className=" flex items-center justify-between">
            <div className=" border-[1px] border-sky-500 py-1 px-4 rounded-full text-xs">
              <p>
                {calculatePercentage(item?.agent_price, item?.product.oldPrice)}
                % off
              </p>
            </div>

            <div className=" flex items-center gap-x-2">
              <p className="text-slate-500 line-through text-sm">
                <FormattedPrice amount={item.product.oldPrice} />
              </p>
              <p className=" font-semibold">
                <FormattedPrice amount={item?.agent_price} />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* Add to cart */}
            <div className="flex flex-row justify-start gap-2">
              <MyProductModalGlobal product={item} shops={shops} />
              <button
                onClick={(e) => {
                  SubmitDelete(item.id, "del");
                }}
                className=" bg-red-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-red-600 hover:text-white duration-200">
                Delete
              </button>
              <Link
                href={`/myshop/product/detail/${item.id}`}
                className=" bg-green-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200">
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

export default MyProductListGlobal;
