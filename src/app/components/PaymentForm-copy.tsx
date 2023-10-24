"use client";

import { useDispatch, useSelector } from "react-redux";
import { Products, StateProps } from "../../../type";
import FormattedPrice from "./FormattedPrice";
import { useEffect, useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { resetCart, saveOrder } from "@/redux/shoppingSlice";
import Link from "next/link";
import { Icons } from "./ui/Icons";
import Image from "next/image";

interface Payment {
  shipping?: number;
}

interface CheckboxOption {
  value: string;
  label: string;
}

const PaymentForm = (shipping: Payment) => {
  const dispatch = useDispatch();
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
    let total = amt + Number(shipping.shipping);

    setTotalAmt(total);
  }, [productData, shipping]);

  /** Strip Payment Start */
  const stripePromise = loadStripe(
    process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
  );
  const { data: session } = useSession();
  const handleCheckout = async () => {
    const stripe = await stripePromise;
    const response = await fetch("http://localhost:3000/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        items: productData,
        email: session?.user?.email,
      }),
    });
    const data = await response.json();

    if (response.ok) {
      await dispatch(saveOrder({ order: productData, id: data.id }));
      stripe?.redirectToCheckout({ sessionId: data.id });
      dispatch(resetCart());
    } else {
      throw new Error("Failed to create Stripe Payment");
    }
  };
  /** Strip Payment End */

  const [selectedOptions, setSelectedOptions] = useState("");
  const handleCheckboxChange = (value: string) => {
    setSelectedOptions(value);
  };
  console.log(selectedOptions);
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
            <FormattedPrice amount={Number(shipping.shipping)} />
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

      <div className="mt-4">
        <span className="uppercase font-medium">Payment</span>
        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6 mt-0">
          <div className="w-full p-3">
            <label
              htmlFor="payment_1"
              className="flex items-center cursor-pointer"
            >
              <input
                type="radio"
                className=" h-5 w-5 text-indigo-500"
                name="payment"
                id="payment_1"
                value={"virtual"}
                onChange={() => handleCheckboxChange("virtual")}
              />
              <span className="ml-2">Virtual Account</span>
            </label>
            <div
              className={`${
                selectedOptions.includes("virtual") ? "block" : "hidden"
              } mt-2 grid gap-2`}
            >
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_1"
                >
                  <Image
                    width={500}
                    height={500}
                    className="w-14 object-contain"
                    src="/images/payment/bca.png"
                    alt=""
                  />
                  <div className="ml-1">
                    <span className="mt-2 font-semibold">BCA</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Bank Central Asia
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_2"
                >
                  <Image
                    width={500}
                    height={500}
                    className="w-14 object-contain"
                    src="/images/payment/bni.png"
                    alt=""
                  />
                  <div className="ml-1">
                    <span className="mt-2 font-semibold">BNI</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_3"
                  type="radio"
                  name="radio"
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_3"
                >
                  <Image
                    width={500}
                    height={500}
                    className="w-14 object-contain"
                    src="/images/payment/mandiri.png"
                    alt=""
                  />
                  <div className="ml-1">
                    <span className="mt-2 font-semibold">Mandiri</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Bank Mandiri
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="virtual_4"
                  type="radio"
                  name="radio"
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="virtual_4"
                >
                  <Image
                    width={500}
                    height={500}
                    className="w-14 object-contain"
                    src="/images/payment/ocbc.png"
                    alt=""
                  />
                  <div className="ml-1">
                    <span className="mt-2 font-semibold">OCBC NISP</span>
                    <p className="text-slate-500 text-sm leading-6">
                      OCBC NISP
                    </p>
                  </div>
                </label>
              </div>
              <div className="relative">
                <input
                  className="peer hidden"
                  id="virtual_5"
                  type="radio"
                  name="radio"
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="virtual_5"
                >
                  <Image
                    width={500}
                    height={500}
                    className="w-14 object-contain"
                    src="/images/payment/briva.png"
                    alt=""
                  />
                  <div className="ml-1">
                    <span className="mt-2 font-semibold">BRI</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Bank Rakyat Indonesia
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full p-3">
            <label
              htmlFor="wallet"
              className="flex items-center cursor-pointer"
            >
              <input
                type="radio"
                className=" h-5 w-5 text-indigo-500"
                name="payment"
                id="wallet"
                value={"wallet"}
                onChange={() => handleCheckboxChange("wallet")}
              />
              <span className="ml-2">Wallet</span>
            </label>
            <div
              className={`${
                selectedOptions.includes("wallet") ? "block" : "hidden"
              } mt-2 grid gap-2`}
            >
              <div className="relative">
                <input
                  className="peer hidden"
                  id="wallet_1"
                  type="radio"
                  name="radio"
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="wallet_1"
                >
                  <Image
                    width={500}
                    height={500}
                    className="w-14 object-contain"
                    src="/images/payment/ovo.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">OVO</span>
                    <p className="text-slate-500 text-sm leading-6">Ovo</p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="w-full p-3">
            <label
              htmlFor="payment_2"
              className="flex items-center cursor-pointer"
            >
              <input
                type="radio"
                className=" h-5 w-5 text-indigo-500"
                name="payment"
                id="payment_2"
                value={"paypal"}
                onChange={() => handleCheckboxChange("paypal")}
              />
              <Image
                height={250}
                width={80}
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                className="ml-3"
              />
            </label>
          </div>

          <div className="w-full p-3 border-b border-gray-200">
            <div className="mb-2">
              <label
                htmlFor="type1"
                className="flex items-center cursor-pointer"
              >
                <input
                  type="radio"
                  className="h-5 w-5 text-indigo-500"
                  name="payment"
                  id="type1"
                  value={"visa"}
                  onChange={() => handleCheckboxChange("visa")}
                />
                <Image
                  width={156}
                  height={24}
                  alt=""
                  src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                  className="h-6 ml-3 object-cover"
                />
              </label>
            </div>
            <div
              className={`${
                selectedOptions.includes("visa") ? "block" : "hidden"
              }`}
            >
              <div className="mb-3">
                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                  Name on card
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="John Smith"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3">
                <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                  Card number
                </label>
                <div>
                  <input
                    className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                    placeholder="0000 0000 0000 0000"
                    type="text"
                  />
                </div>
              </div>
              <div className="mb-3 -mx-2 flex items-end">
                <div className="px-2 w-1/4">
                  <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Expiration date
                  </label>
                  <div>
                    <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                      <option value="01">01 - January</option>
                      <option value="02">02 - February</option>
                      <option value="03">03 - March</option>
                      <option value="04">04 - April</option>
                      <option value="05">05 - May</option>
                      <option value="06">06 - June</option>
                      <option value="07">07 - July</option>
                      <option value="08">08 - August</option>
                      <option value="09">09 - September</option>
                      <option value="10">10 - October</option>
                      <option value="11">11 - November</option>
                      <option value="12">12 - December</option>
                    </select>
                  </div>
                </div>
                <div className="px-2 w-1/4">
                  <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                    <option value="2022">2022</option>
                    <option value="2023">2023</option>
                    <option value="2024">2024</option>
                    <option value="2025">2025</option>
                    <option value="2026">2026</option>
                    <option value="2027">2027</option>
                    <option value="2028">2028</option>
                    <option value="2029">2029</option>
                  </select>
                </div>
                <div className="px-2 w-1/4">
                  <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                    Security code
                  </label>
                  <div>
                    <input
                      className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                      placeholder="000"
                      type="text"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <div className="w-full p-3">
            <label htmlFor="type2" className="flex items-center cursor-pointer">
              <input
                type="radio"
                className=" h-5 w-5 text-indigo-500"
                name="payment"
                id="type2"
              />
              <Image
                height={250}
                width={80}
                alt=""
                src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                className="ml-3"
              />
            </label>
          </div> */}
        </div>
      </div>
      {/* <details className="group">
        <summary className="flex cursor-pointer items-center rounded-lg px-0 py-2 justify-between text-black hover:bg-gray-100 hover:text-gray-700">
          <div className="flex items-center justify-start">
            <span className="ml-0 text-dark-500 text-sm item-center uppercase font-medium">
              Settings
            </span>
          </div>

          <span className="shrink-0 transition duration-300 group-open:-rotate-180">
            <Icons.arrow_down />
          </span>
        </summary>

        <ul className="pb-2 pt-1 ml-0">
          <li>
            <Link
              href="/account-security"
              className="text-sm text-dark-500 font-light rounded-lg flex items-center p-2 group  hover:bg-gray-200 transition duration-75 pl-11"
            >
              <span>Account Security</span>
              <span className="hidden">S</span>
            </Link>
          </li>
          <li>
            <Link
              href="/api-management"
              className="text-sm text-dark-500 font-light rounded-lg flex items-center p-2 group   hover:bg-gray-200 transition duration-75 pl-11"
            >
              <span>API Management</span>
              <span className="hidden">S</span>
            </Link>
          </li>
          <li>
            <Link
              href="/forgot-password"
              className="text-sm text-dark-500 font-light rounded-lg flex items-center p-2 group   hover:bg-gray-200 transition duration-75 pl-11"
            >
              <span>Forgot password</span>
              <span className="hidden">F</span>
            </Link>
          </li>
        </ul>
      </details> */}
      {userInfo ? (
        <button
          onClick={handleCheckout}
          className=" bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-pointer duration-200"
        >
          Processed to checkout
        </button>
      ) : (
        <div className="">
          <button className=" bg-black text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 duration-200 cursor-not-allowed">
            Process Cart
          </button>
          <p className=" text-base text-red-500 font-semibold animate-bounce">
            Please login
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentForm;
