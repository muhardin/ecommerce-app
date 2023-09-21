"use client";

import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../../type";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  resetCart,
} from "@/redux/shoppingSlice";
import FormattedPrice from "./FormattedPrice";

import Swal from "sweetalert2";
type Product = {
  id: number;
  title: string;
  price: number;
  brandId: number;
};
const CartItem = () => {
  const dispatch = useDispatch();
  const ConfirmAction = async (productId?: number, act?: string) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-darkText hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200",
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
      .then((result) => {
        if (result.isConfirmed) {
          // console.log(productId);
          if (act == "del") {
            dispatch(deleteProduct(productId));
          } else {
            dispatch(resetCart());
          }

          // swalWithBootstrapButtons.fire(
          //   "Deleted!",
          //   "Your file has been deleted.",
          //   "success"
          // );
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          // swalWithBootstrapButtons.fire(
          //   "Cancelled",
          //   "Your imaginary file is safe :)",
          //   "error"
          // );
        }
      });
  };

  const { productData } = useSelector((state: StateProps) => state?.shopping);

  return (
    <div className="flex flex-col gap-y-2">
      <div className="hidden lg:inline-flex items-center justify-between font-semibold bg-white p-2">
        <p className="w-1/3">Product</p>
        <p className="w-1/3 flex items-center justify-center">Quantity</p>
        <p className="w-1/3 flex items-center justify-end">Subtotal</p>
      </div>
      <div className="flex flex-col gap-y-2">
        {productData?.map((item: Products) => (
          <div
            className=" w-full bg-white p-4 flex flex-col md:flex-row items-center justify-between gap-4"
            key={item._id}
          >
            <div className=" flex items-center gap-x-3 w-full md:w-1/3">
              {/* <button
                onClick={() => {
                  ConfirmAction(item?._id);
                }}
              >
                Test
              </button> */}
              <span
                onClick={() => {
                  ConfirmAction(item?._id, "del");
                }}
                className="text-lg hover:text-red-600 cursor-pointer duration-200"
              >
                <AiOutlineClose />
              </span>
              <Image
                src={item.image}
                alt="image"
                width={500}
                height={500}
                className=" w-20 h-20 object-cover"
              />
            </div>
            {/* quantity */}
            <div className=" flex items-center justify-start gap-x-3 border-[1px] border-slate-300 py-2 px-4 w-full md:w-auto">
              <p>Quantity</p>
              <div className=" flex items-center text-lg w-20 justify-between">
                <span
                  onClick={() => dispatch(decreaseQuantity(item))}
                  className=" cursor-pointer hover:text-orange-600"
                >
                  <FiChevronLeft />
                </span>
                <span>{item?.quantity}</span>
                <span
                  onClick={() => dispatch(increaseQuantity(item))}
                  className="cursor-pointer hover:text-orange-600"
                >
                  <FiChevronRight />
                </span>
              </div>
            </div>
            <div className=" w-full md:w-1/3 flex items-end justify-start md:justify-end">
              <p className="text-lg font-semibold">
                <FormattedPrice amount={item?.price * item?.quantity} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
