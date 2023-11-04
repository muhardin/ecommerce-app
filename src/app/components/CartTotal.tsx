"use client";

import { useDispatch, useSelector } from "react-redux";
import { CourierData, Products, StateProps } from "../../../type";
import FormattedPrice from "./FormattedPrice";
import { SyntheticEvent, useEffect, useState } from "react";

import { useShopData } from "./shop/ShopContext";
import Link from "next/link";

const CartTotal = () => {
  const shopData = useShopData();

  const dispatch = useDispatch();
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state?.shopping
  );

  const [modal, setModal] = useState(false);
  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.agent_price * item.quantity;
      return;
    });
    let total = amt;

    setTotalAmt(total);
  }, [productData]);

  return (
    <>
      <div className=" w-full bg-white px-4 pt-4 relative flex flex-col h-full">
        <div className="">
          <div className=" border-b-[1px] border-b-slate-300 py-2 ">
            <div className=" max-w-lg flex items-center justify-between">
              <p className=" uppercase font-medium">Subtotal</p>
              <p>
                <FormattedPrice amount={totalAmt} />
              </p>
            </div>
          </div>

          <div className=" border-b-[1px] border-b-slate-300 py-2 ">
            <div className=" max-w-lg flex items-center justify-between">
              <p className=" uppercase font-medium">Total Price</p>
              <p>
                <FormattedPrice amount={totalAmt} />
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end h-full">
          {userInfo ? (
            <Link href={"/checkout"}>
              <button className=" bg-sky-600 rounded-md text-slate-100 mt-4 py-2 px-3 hover:bg-orange-950 cursor-pointer duration-200">
                Processed to checkout
              </button>
            </Link>
          ) : (
            <div className="">
              <button className=" bg-black text-slate-100 mt-4 py-3 px-4 hover:bg-orange-950 duration-200 cursor-not-allowed">
                Process Cart
              </button>
              <p className=" text-base text-red-500 font-semibold animate-bounce">
                Please login
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartTotal;
