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

const CartItem = () => {
  const dispatch = useDispatch();
  const ConfirmAction = async (productId?: number, act?: string) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-darkText ml-2 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200",
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
  console.log(productData);

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="hidden lg:inline-flex items-center justify-between font-semibold bg-white p-2">
        <div className="flex justify-between flex-row items-center w-full">
          <p className="w-1/3">Product</p>
          <p className="w-1/3 flex items-center justify-center">Quantity</p>
        </div>
        <p className="w-1/3 flex items-center justify-end">Subtotal</p>
      </div>
      <div className="flex flex-col gap-y-2">
        {productData?.map((item: Products) => (
          <div
            className=" w-full bg-white p-4 flex flex-col md:flex-row items-center justify-between gap-4"
            key={item.id}
          >
            <div className="flex items-center gap-2 md:justify-between w-full">
              <div className=" flex items-center gap-x-3 w-full md:w-1/3">
                <span
                  onClick={() => {
                    ConfirmAction(item?.id, "del");
                  }}
                  className="text-lg hover:text-red-600 cursor-pointer duration-200"
                >
                  <AiOutlineClose />
                </span>
                <Image
                  src={item?.product?.image}
                  alt="image"
                  width={500}
                  height={500}
                  className=" w-20 h-20 object-cover"
                />
                <span>{item?.product?.title}</span>
              </div>
              {/* quantity */}

              <div className="md:mr-20 flex items-center justify-start gap-x-1 md:gap-x-3 border-[1px] border-slate-300 py-2 px-1 md:px-3 md:w-auto">
                <p className="md:hidden">Qty</p>
                <div className=" flex items-center text-md md:text-lg w-15 justify-between">
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
            </div>
            <div className=" w-full md:w-1/3 flex items-end justify-start md:justify-end">
              <p className="text-lg font-semibold">
                <FormattedPrice amount={item?.agent_price * item?.quantity} />
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
