"use client";

import { useDispatch, useSelector } from "react-redux";
import { Product, Products, ShopProduct, StateProps } from "../../../type";
import Image from "next/image";
import { AiOutlineClose } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import {
  addNote,
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  resetCart,
} from "@/redux/shoppingSlice";
import FormattedPrice from "./FormattedPrice";
import Swal from "sweetalert2";
import { useState } from "react";

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
  const [note, setNote] = useState("");
  const [isNote, setIsNote] = useState(false);
  const toggleNote = () => {
    if (note) {
      setIsNote(false);
    } else {
      setIsNote(!isNote);
    }
  };
  console.log(note);
  console.log(productData);

  return (
    <div className="flex flex-col gap-y-2 w-full">
      <div className="hidden lg:inline-flex items-center justify-between font-semibold bg-white p-2">
        <div className="flex justify-between flex-row items-center w-full">
          <p className="w-1/3">Product</p>
          <p className="w-1/3 flex items-center justify-center">Qty</p>
        </div>
        <p className="w-1/3 flex items-center justify-end">Subtotal</p>
      </div>
      <div className="flex flex-col gap-y-2">
        {productData?.map((item: ShopProduct) => (
          <>
            <div
              className=" w-full bg-white p-4 flex flex-col md:flex-row items-center justify-between gap-4"
              key={item.id}>
              <div className="flex items-center gap-2 md:justify-between w-full">
                <div className="">
                  <div className=" flex items-center gap-x-3 w-full">
                    <span
                      onClick={() => {
                        ConfirmAction(item?.id, "del");
                      }}
                      className="text-lg hover:text-red-600 cursor-pointer duration-200">
                      <AiOutlineClose />
                    </span>
                    {item.product.product_gallery?.length > 0 ? (
                      <Image
                        src={
                          process.env.SERVER_ENDPOINT +
                          item?.product?.product_gallery[0].url
                        }
                        alt="image"
                        width={500}
                        height={500}
                        className=" w-20 h-20 object-cover"
                      />
                    ) : (
                      <Image
                        src={"/images/no_image.png"}
                        alt="image"
                        width={500}
                        height={500}
                        className=" w-20 h-20 object-cover"
                      />
                    )}

                    <span>{item?.product?.title}</span>
                  </div>
                </div>
                {/* quantity */}

                <div className="md:mr-20 flex items-center justify-start gap-x-1 md:gap-x-3 border-[1px] border-slate-300 py-2 px-1 md:px-3 md:w-auto">
                  <p className="md:hidden">Qty</p>
                  <div className=" flex items-center text-md md:text-lg w-15 justify-between">
                    <span
                      onClick={() => dispatch(decreaseQuantity(item))}
                      className=" cursor-pointer hover:text-orange-600">
                      <FiChevronLeft />
                    </span>
                    <span>{item?.quantity}</span>
                    <span
                      onClick={() => dispatch(increaseQuantity(item))}
                      className="cursor-pointer hover:text-orange-600">
                      <FiChevronRight />
                    </span>
                  </div>
                </div>
              </div>
              <div className=" w-full md:w-1/3 flex items-end justify-end md:justify-end">
                <p className="text-lg font-semibold">
                  <FormattedPrice amount={item?.agent_price * item?.quantity} />
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col items-start justify-start ml-2 mt-0 mb-2 mr-2 gap-1 font-mono">
              <div className="relative w-full pr-4">
                <textarea
                  id="message"
                  name="message"
                  placeholder=" "
                  onChange={(e) => {
                    dispatch(addNote({ id: item.id, value: e.target.value }));
                  }}
                  value={item?.noteBuyer}
                  className={`${
                    !isNote ? "block" : "hidden"
                  } border-2 textarea textarea-bordered  w-full focus:outline-none focus:border-blue-500 px-3 pt-1 pb-2 appearance-none leading-6 bg-transparent mr-8`}></textarea>
                <label
                  onClick={() => {
                    toggleNote();
                  }}
                  htmlFor="message"
                  className="absolute left-3 -top-2 px-1 text-xs bg-white cursor-pointer text-sky-500">
                  Tulis Catatan
                </label>
              </div>

              {/* <span className="cursor-pointer text-sky-500">Tulis Catatan</span>
              <textarea
                className={`hidden textarea textarea-bordered  w-full`}
                placeholder="Bio"></textarea> */}
              {/* <textarea
                onChange={(e) => {
                  setNote(e.target.value);
                }}
                value={note}
                className="border border-sky-300 w-full p-1"></textarea> */}
            </div>
          </>
        ))}
      </div>
    </div>
  );
};

export default CartItem;
