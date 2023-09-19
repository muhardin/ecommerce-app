"use client";

import { useSelector } from "react-redux";
import { Products, StateProps } from "../../../type";
import FormattedPrice from "./FormattedPrice";
import { useEffect, useState } from "react";

const PaymentForm = () => {
  const { productData, userInfo } = useSelector(
    (state: StateProps) => state?.shopping
  );

  const [totalAmt, setTotalAmt] = useState(0);
  useEffect(() => {
    let amt = 0;
    productData.map((item: Products) => {
      amt += item.price * item.quantity;
      return;
    });
    setTotalAmt(amt);
  }, [productData]);

  return (
    <div className=" w-full bg-white p-4">
      <h2>Cart Total</h2>
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
          <p className=" uppercase font-medium">Shipping Amount</p>
          <p>
            <FormattedPrice amount={20} />
          </p>
        </div>
      </div>
      <div className=" border-b-[1px] border-b-slate-300 py-2 ">
        <div className=" max-w-lg flex items-center justify-between">
          <p className=" uppercase font-medium">Total Price</p>
          <p>
            <FormattedPrice amount={totalAmt + 20} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
