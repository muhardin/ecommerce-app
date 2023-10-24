"use client";

import { useDispatch, useSelector } from "react-redux";
import { CourierData, Products, StateProps } from "../../../type";
import FormattedPrice from "./FormattedPrice";
import { SyntheticEvent, useEffect, useState } from "react";
// import { loadStripe } from "@stripe/stripe-js";
import { useSession } from "next-auth/react";
import { resetCart, saveOrder } from "@/redux/shoppingSlice";
import Link from "next/link";
import { Icons } from "./ui/Icons";
import Image from "next/image";
import toast from "react-hot-toast";
import axios from "axios";
import { formDataOrder } from "./validation/formScheme";
import z from "zod";
import { useShopData } from "./shop/ShopContext";
import { useRouter } from "next/navigation";
import { getClientIPAddress } from "@/utils/ipUtils";
import LoadingComponent from "./ui/Loading";

interface CustomToastProps {
  id: string;
  visible: boolean;
}
interface Payment {
  shipping?: number;
  order?: Payment[];
  address?: number;
  shippingMethod?: CourierData[];
  shippingType?: CourierData[];
}

interface CheckboxOption {
  value: string;
  label: string;
}

const PaymentForm = ({
  shipping,
  address,
  shippingMethod,
  order,
  shippingType,
}: Payment) => {
  const [clientIP, setClientIP] = useState("Loading...");

  useEffect(() => {
    getClientIPAddress().then((ip) => {
      setClientIP(ip);
    });
  }, []);

  const router = useRouter();
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
      amt += (item.agent_price + item.profit) * item.quantity;
      return;
    });
    let total = amt;

    setTotalAmt(total);
  }, [productData, shipping]);

  const { data: session } = useSession();
  // const [formData, setFormData] = useState({
  //   payment: "",
  //   payment_type: "",
  //   address: address,
  //   shop: shopData?.id,
  //   shipping: shippingMethod,
  //   product: productData,
  // });

  /** Strip Payment Start */
  const [selectedPayment, setSelectedPayment] = useState("");
  const handleSelectedPayment = (value: string) => {
    setSelectedPayment(value);
    setSelectedVirtual("");
  };
  const [selectedVirtual, setSelectedVirtual] = useState("");
  const handleSelectedVirtual = (value: string) => {
    setSelectedVirtual(value);
  };

  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});

  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const [error, setErrors] = useState<string[]>([]);
  const config = {
    headers: { Authorization: `Bearer ${session?.bearer}` },
  };
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (event: SyntheticEvent) => {
    setIsLoading(true);
    event.preventDefault();
    toast.loading("loading....");
    try {
      const formData = {
        payment: selectedPayment,
        payment_type: selectedVirtual,
        address_id: address,
        shop: shopData?.id,
        shipping: shippingMethod,
        shipping_type: shippingType,
        product: JSON.stringify(productData),
        ipaddress: clientIP,
        order: JSON.stringify(order),
      };
      // formDataOrder.parse(formData);
      // Form data is valid; submit it using Axios
      const response = await axios.post(
        process.env.SERVER_ENDPOINT + "/api/user/order/post",
        formData,
        config
      ); // Replace with your API endpoint
      // console.log("Form submitted:", response);
      if (response.status == 200) {
        toast.dismiss();
        toast.success("Success", { duration: 6000 });
        router.push("/payment/" + response.data.order.id);
        dispatch(resetCart());
        setIsLoading(false);
        console.log(response);
      } else if (response.status == 201) {
        setErrMessage(response.data.message.error);
        setModal(true);
        toast.dismiss();
        console.log(response);
      } else if (response.status == 500) {
        toast.error("System on maintenance mode");
        toast.dismiss();
      }
    } catch (error) {
      toast.dismiss();
      if (error instanceof z.ZodError) {
        const fieldErrors = error.errors.reduce(
          (errors, err) => ({
            ...errors,
            [err.path[0]]: err.message,
          }),
          {}
        );
        setFormErrors(fieldErrors);
      }
    }
  };
  // console.log(formErrors);
  /** Strip Payment End */

  // const [selectedOptions, setSelectedOptions] = useState("");
  // const handleCheckboxChange = (value: string) => {
  //   setSelectedOptions(value);
  // };

  // console.log("product data : ", productData);

  console.log(JSON.stringify(order));
  console.log(clientIP);
  console.log(errMessage);

  console.log(shippingMethod);
  console.log(productData);
  console.log(address);
  console.log(shopData);
  console.log(selectedPayment);
  console.log(selectedVirtual);
  return (
    <>
      <div className=" w-full bg-white p-4 relative">
        <form onSubmit={handleSubmit}>
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
                <FormattedPrice amount={Number(shipping)} />
              </p>
            </div>
          </div>
          <div className=" border-b-[1px] border-b-slate-300 py-2 ">
            <div className=" max-w-lg flex items-center justify-between">
              <p className=" uppercase font-medium">Total Price</p>
              <p>
                <FormattedPrice amount={totalAmt + Number(shipping)} />
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
                    required
                    type="radio"
                    className=" h-5 w-5 text-indigo-500"
                    name="payment"
                    id="payment_1"
                    value={"virtual"}
                    onChange={() => handleSelectedPayment("virtual")}
                  />
                  <span className="ml-2">Virtual Account</span>
                </label>
                <div
                  className={`${
                    selectedPayment.includes("virtual") ? "block" : "hidden"
                  } mt-2 grid gap-2`}
                >
                  <div className="relative">
                    <input
                      required={selectedPayment.includes("virtual")}
                      className="peer hidden"
                      id="radio_1"
                      type="radio"
                      name="payment_type"
                      onChange={() => handleSelectedVirtual("BCAVA")}
                    />

                    <span className=" peer-checked:border-sky-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2"
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
                      name="payment_type"
                      onChange={() => handleSelectedVirtual("BNIVA")}
                    />
                    <span className="peer-checked:border-sky-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2"
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
                      name="payment_type"
                      onChange={() => handleSelectedVirtual("MANDIRIVA")}
                    />
                    <span className="peer-checked:border-sky-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2"
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
                      name="payment_type"
                      onChange={() => handleSelectedVirtual("OCBCVA")}
                    />
                    <span className="peer-checked:border-sky-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2"
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
                      name="payment_type"
                      onChange={() => handleSelectedVirtual("BRIVA")}
                    />
                    <span className="peer-checked:border-sky-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2"
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
                    onChange={() => handleSelectedPayment("wallet")}
                  />
                  <span className="ml-2">Wallet</span>
                </label>
                <div
                  className={`${
                    selectedPayment.includes("wallet") ? "block" : "hidden"
                  } mt-2 grid gap-2`}
                >
                  <div className="relative">
                    <input
                      className="peer hidden"
                      id="wallet_1"
                      type="radio"
                      name="payment_type"
                      onChange={() => handleSelectedVirtual("OVO")}
                    />
                    <span className="peer-checked:border-sky-500 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                    <label
                      className="peer-checked:border-2 peer-checked:border-sky-500 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-2"
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
                    onChange={() => handleSelectedPayment("paypal")}
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
                      onChange={() => handleSelectedPayment("visa")}
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
                    selectedPayment.includes("visa") ? "block" : "hidden"
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
          <div className="flex-col lg:flex-row flex gap-2 justify-end">
            <Link
              href={"/cart"}
              className=" bg-red-400 rounded-md text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-pointer duration-200 flex flex-row justify-center text-center"
            >
              Back to Cart
            </Link>
            {userInfo ? (
              <button className=" bg-black rounded-md text-slate-100 mt-4 py-3 px-6 hover:bg-orange-950 cursor-pointer duration-200">
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
        </form>
      </div>
      <div className={`${!isLoading ? "hidden" : "block"}`}>
        <LoadingComponent />
      </div>
      <div
        className={`relative z-10 ${!modal ? "hidden" : ""} `}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed top-40 md:inset-0 z-10 w-screen overflow-y-auto">
          <div className="w-full flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className={`animate-enter max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
            >
              <div className="flex-1 w-0 p-4">
                <div className="flex items-center">
                  <div className="flex-shrink-0 pt-0.5 mt-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="45"
                      height="45"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#f01616"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                  </div>
                  <div className="ml-3 flex-1">
                    <p className="text-lg font-bold text-red-700">
                      Submit Fail !
                    </p>

                    <p className="mt-1 text-sm text-gray-500 flex flex-col justify-start">
                      <ul>
                        {errMessage.length > 0
                          ? errMessage.map((item: string, index: any) => (
                              <div
                                className="flex justify-start"
                                key={item[index]}
                              >
                                <li className="text-md font-bold text-red-600 text-sm">
                                  - {item}
                                </li>
                              </div>
                            ))
                          : ""}
                      </ul>
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex border-l border-gray-200">
                <button
                  onClick={() => {
                    setModal(false);
                    setIsLoading(false);
                  }}
                  className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-indigo-600 hover:text-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PaymentForm;
