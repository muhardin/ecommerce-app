"use client";

import { useDispatch, useSelector } from "react-redux";
import {
  Address,
  CourierData,
  DataToAdd,
  Products,
  ResponseData,
  SelectOption,
  StateProps,
} from "../../../type";
import Image from "next/image";
import { AiOutlineClose, AiOutlineOrderedList } from "react-icons/ai";
import { FiChevronLeft, FiChevronRight, FiLogOut } from "react-icons/fi";
import {
  addNote,
  decreaseQuantity,
  deleteProduct,
  increaseQuantity,
  resetCart,
} from "@/redux/shoppingSlice";
import FormattedPrice from "./FormattedPrice";

import Swal from "sweetalert2";
import PaymentForm from "./PaymentForm";
import { IoMdCart } from "react-icons/io";
import Link from "next/link";
import { SyntheticEvent, useState } from "react";
import { useEffect, useRef } from "react";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import { FormattedCommaNumber, addData } from "../helpers";
import toast from "react-hot-toast";
import axios from "axios";
import { useRouter } from "next/navigation";
import Select from "react-tailwindcss-select";
import data from "../../data/sub_districts.json";
import cities from "../../data/cities.json";
import LoadingComponent from "./ui/Loading";

const CheckoutCart = () => {
  const [optionCouriers, setOptionCouriers] = useState<SelectOption[]>([
    { id: 1, label: "JNE", value: "jne" },
    { id: 2, label: "J&T", value: "jnt" },
    { id: 3, label: "SiCEPAT", value: "sicepat" },
    { id: 4, label: "POS", value: "pos" },
  ]);

  const [address, setAddress] = useState(false);
  function toggleAddress() {
    setAddress(!address);
  }
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleOutSideClick = (event: any) => {
      if (!ref.current?.contains(event.target)) {
        setAddress(false);
      }
    };

    window.addEventListener("mousedown", handleOutSideClick);

    return () => {
      window.removeEventListener("mousedown", handleOutSideClick);
    };
  }, [ref]);

  const dispatch = useDispatch();
  const ConfirmAction = async (productId?: number, act?: string) => {
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
      .then((result) => {
        if (result.isConfirmed) {
          // console.log(productId);
          if (act == "del") {
            dispatch(deleteProduct(productId));
          } else {
            dispatch(resetCart());
          }
        }
      });
  };

  const { productData } = useSelector((state: StateProps) => state?.shopping);

  const [modalCart, setModalCart] = useState(false);
  function toggleModal() {
    setModalCart(!modalCart);
  }
  const { data: session } = useSession();
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json", // Adjust headers as needed
      },
    }).then((res) => res.json());

  const urlAddPrimary =
    process.env.SERVER_ENDPOINT + "/api/user/address/primary";
  const { data: primary, error: primaryError } = useSWR(
    urlAddPrimary,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );

  const url = process.env.SERVER_ENDPOINT + "/api/user/address";
  const {
    data: addresses,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const [selectedAddress, setSelectedAddress] = useState<any>(null);
  const handleOptionAddress = (event: any) => {
    const value = event.target.value;
    setSelectedAddress(value);
    toggleAddress();
    setSelectedValues([]);
    setOptionCouriers([]);
    setOptionCouriers([
      { id: 1, label: "JNE", value: "jne" },
      { id: 2, label: "J&T", value: "jnt" },
      { id: 3, label: "SiCEPAT", value: "sicepat" },
      { id: 3, label: "POS", value: "pos" },
    ]);
  };
  const urlObAddress =
    process.env.SERVER_ENDPOINT + "/api/user/address/detail/" + selectedAddress;

  const { data: addressObj, error: addressError } = useSWR(
    urlObAddress,
    fetcher,
    {
      refreshInterval: 3000,
    }
  );

  const [formData, setFormData] = useState<DataToAdd>({
    name: "",
    address_name: "",
    contact_person: "",
    phone: "",
    description: "",
    subdistrict: "",
    address: "",
    zip_code: "",
  });

  /**
   * Add Address
   */
  const [getCityId, setCityId] = useState(null);
  const [getAreaId, setAreaId] = useState(null);
  const [getInCity, setInCity] = useState(null);

  const [errMessage, setErrMessage] = useState<string[]>([]);
  const [isFail, setIsFail] = useState(false);
  const router = useRouter();
  const handleSubmitAddress = async (e: SyntheticEvent) => {
    e.preventDefault();
    toast.loading("loading...");
    setErrMessage([]);
    const config = {
      headers: { Authorization: `Bearer ${session?.bearer}` },
    };
    const post = await axios.post(
      process.env.SERVER_ENDPOINT + "/api/user/address/add",
      formData,
      config
    );

    if (post.status == 200) {
      setSelectedAddress(post.data.id);
      toast.dismiss();
      toast.success("Success", { duration: 6000 });
      setIsFail(false);
      setModalCart(false);
      setInCity(null);
      setAreaId(null);
      setFormData({
        ...formData,
        name: "",
        address_name: "",
        contact_person: "",
        phone: "",
        description: "",
        subdistrict: "",
        address: "",
        zip_code: "",
      });
    } else if (post.status == 201) {
      setErrMessage(post.data.message.error);
      setIsFail(true);
      toast.dismiss();
      // console.log(post.data.message.error);
    } else if (post.status == 500) {
      toast.error("System on maintenance mode");
      toast.dismiss();
      // console.log(post.data.message.error);
    }
  };

  const handleChangeCity = (value: any) => {
    setInCity(value);
    setCityId(value.value);
    setAreaId(null);
  };
  const handleChangeArea = (value: any) => {
    // console.log(value);
    setAreaId(value);
    setFormData({
      ...formData,
      subdistrict: value.value,
    });
  };

  const options = data.filter((item) => item.city_id === getCityId);
  const city = cities;
  // console.log(getCityId);
  // console.log(options);
  // console.log(errMessage);

  const [courier, setCourier] = useState("");
  /** show courier when load */
  // const urlCourier =
  //   process.env.SERVER_ENDPOINT +
  //   `/api/courier/cost?origin=48&destination=${
  //     addressObj?.subdistrict ? addressObj.subdistrict : "673"
  //   }&weight=1000&courier=${courier}`;
  // const fetcherCourier = (url: any) =>
  //   fetch(url, {
  //     method: "GET",
  //     headers: {
  //       "Content-Type": "application/json", // Adjust headers as needed
  //     },
  //   }).then((res) => res.json());
  // const { data: getCourierCost, error: errorCourierCost } = useSWR(
  //   urlCourier,
  //   fetcherCourier,
  //   {
  //     refreshInterval: 3000,
  //   }
  // );
  // const costs = getCourierCost?.rajaongkir?.results[0]?.costs;
  // console.log(primary?.subdistrict);
  // console.log(costs[0].cost[0].value);
  // console.log(addressObj?.subdistrict);
  // console.log(getCourierCost.rajaongkir.results[0].costs[0].cost[0]);

  const [selectedValues, setSelectedValues] = useState<CourierData[]>([]);

  const [loading, setLoading] = useState(true);
  const [errorGet, setErrorGet] = useState("");
  const [supplierCity, setSupplierCity] = useState();

  /** handle select courier */
  const handleSelectChange = async (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number,
    supplier: number
  ) => {
    // /** get supplier detail first */
    // await axios
    //   .get(process.env.SERVER_ENDPOINT + `/api/supplier/${supplier}`)
    //   .then((response: any) => {
    //     console.log(response.data.city_id);
    //     setSupplierCity(response.data.city_id);
    //   });
    // /**  */
    setLoading(true);
    const { value } = event.target;

    const defaultCourierData: CourierData = {
      rajaongkir: {
        results: {
          costs: [],
        },
      },
      results: [],
      costs: [],
      code: "",
    };

    setSelectedValues((prevValues) => {
      const updatedValues = [...prevValues];
      updatedValues[index] = defaultCourierData;
      return updatedValues;
    });
    // console.log(supplier);

    const getD = await axios
      .get(
        process.env.SERVER_ENDPOINT +
          `/api/courier/cost?origin=${supplier}&destination=${
            addressObj?.subdistrict ? addressObj.subdistrict : "673"
          }&weight=1000&courier=${value}`
      )
      .then((response) => {
        setSelectedValues((prevValues) => {
          const updatedValues = [...prevValues];
          if (response.data.rajaongkir?.results) {
            updatedValues[index] = response.data.rajaongkir.results[0]; // Update the selected value at the specified index
          }
          // console.log(updatedValues[index]);
          // console.log(response.data);
          return updatedValues;
        });
        // Assuming the response is an array of data
        setLoading(false);
      })
      .catch((err) => {
        setErrorGet(err);
        setLoading(false);
      });
  };

  /** end of handle select courier */

  // const [sumD, setSum] = useState(0);

  // const [selectedValuesCost, setSelectedValuesCost] = useState<string[]>(
  //   new Array(productData.length).fill("")
  // ); // Initialize selected values

  // const handleSelectChangeCost = (
  //   event: React.ChangeEvent<HTMLSelectElement>,
  //   index: number
  // ) => {
  //   const { value } = event.target;
  //   const updatedValues = [...selectedValuesCost];
  //   console.log(value);
  //   updatedValues[index] = value;
  //   setSelectedValuesCost(updatedValues);
  // };

  const initialSelectedValues = productData.map(() => "0"); // Initialize selected values array with default values
  const [selectedValuesCost, setSelectedValuesCost] = useState<string[]>(
    initialSelectedValues
  );

  const [selectedValuesProduct, setSelectedValuesProduct] = useState<any[]>([]);
  const [selectedProduct, setSelectedProduct] = useState<any[]>([]);
  const [selectedShippingType, setSelectedShippingType] = useState<any[]>([]);
  const [qtyProduct, setQtyProduct] = useState<any[]>([]);
  const [selectedArray, setSelectedArray] = useState<any[]>([]);

  const [sum, setSum] = useState(0);

  const handleSelectChangeCost = (
    event: React.ChangeEvent<HTMLSelectElement>,
    index: number
  ) => {
    const selectedOption = event.target.selectedOptions[0];

    //get the option shipping
    const extraData = selectedOption.getAttribute("source-shipping");

    const updatedValuesCostC = [...selectedValuesProduct];
    updatedValuesCostC[index] = extraData;
    setSelectedValuesProduct(updatedValuesCostC);

    //get the shipping type
    const shippingtype = selectedOption.getAttribute("shipping-type");
    const updatedValueShipT = [...selectedShippingType];
    updatedValueShipT[index] = shippingtype;
    setSelectedShippingType(updatedValueShipT);
    //get the product id
    const attProduct = selectedOption.getAttribute("source-product");
    const noteBuyer = selectedOption.getAttribute("source-note-buyer");
    const etd = selectedOption.getAttribute("source-etd");

    //get the cost shipping
    const { value } = event.target;
    // console.log(value);
    const updatedValuesCost = [...selectedValuesCost];
    updatedValuesCost[index] = value;
    setSelectedValuesCost(updatedValuesCost);

    //Qty Product
    const qtyProduct = selectedOption.getAttribute("source-qty");

    //join them to array
    const updatedValuesSelectedArray = [...selectedArray];
    updatedValuesSelectedArray[index] = {
      value,
      extraData,
      attProduct,
      shippingtype,
      qtyProduct,
      etd,
      noteBuyer,
    };
    setSelectedArray(updatedValuesSelectedArray);
  };

  useEffect(() => {
    // Calculate the sum whenever selectedValues change
    const newSum = selectedValuesCost.reduce((accumulator, value) => {
      if (value) {
        return accumulator + parseFloat(value);
      }
      return accumulator;
    }, 0);
    setSum(newSum);
  }, [selectedValuesCost]);

  return (
    <>
      <div className="flex flex-col md:flex-row gap-2">
        <div className="flex flex-col gap-y-2 w-full md:w-2/3">
          {/* Address choose */}
          <div className="z-40 bg-white p-4 border border-gray-200 shadow-md">
            <div className="flex flex-row justify-between relative" ref={ref}>
              <div className="flex flex-row gap-1">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="ink-dark"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ico_home">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M19.9736 10.9996H18.9866V19.9196C18.9866 20.5166 18.5036 20.9996 17.9086 20.9996H14.4946C14.2196 20.9996 13.9956 20.7756 13.9956 20.4996V15.9996C13.9956 15.4476 13.5486 14.9996 12.9976 14.9996H11.0016C10.4516 14.9996 10.0036 15.4476 10.0036 15.9996V20.4996C10.0036 20.7756 9.78059 20.9996 9.50459 20.9996H6.09159C5.49559 20.9996 5.01359 20.5166 5.01359 19.9196V10.9996H4.02659C3.03959 10.9996 2.62259 9.7396 3.41459 9.1496L11.4086 3.1966C11.7596 2.9346 12.2406 2.9346 12.5916 3.1966L20.5846 9.1496C21.3766 9.7396 20.9596 10.9996 19.9736 10.9996Z"
                    fill="ink-dark"
                    className="ico_home"></path>
                </svg>
                <span>Kirim ke mana ?</span>
              </div>
              <div className="">
                <div
                  onClick={toggleAddress}
                  className="flex flex-row justify-end items-center">
                  <span className="text-sky-500 cursor-pointer hover:text-sky-600">
                    Select Address
                  </span>
                  <svg
                    data-v-791e0ea7=""
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="#3a5fd6"
                    xmlns="http://www.w3.org/2000/svg"
                    className="transition ico_drop_down_minor ml-2">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M5 7L10 14L15 7H5Z"
                      fill="#3a5fd6"
                      className="ico_drop_down_minor"></path>
                  </svg>
                </div>
              </div>
              <div
                className={`${
                  !address ? "hidden" : ""
                } absolute flex flex-col gap-2 w-full md:w-2/3 right-0 top-0 mt-8 bg-white p-2 border border-gray-200 shadow-md justify-end`}>
                <div className="overflow-y-auto h-60 md:h-96">
                  {addresses?.length > 0 ? (
                    addresses.map((address: Address) => (
                      <div key={address.id} className="relative mt-2">
                        <input
                          className="peer hidden"
                          id={address.id.toString()}
                          type="radio"
                          name="radio"
                          value={address.id}
                          //   onSelect={handleOptionAddress}
                          checked={selectedAddress == address.id}
                          onChange={handleOptionAddress}
                        />
                        <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                        <label
                          className="peer-checked:border-2 peer-checked:border-sky-600 peer-checked:bg-sky-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                          htmlFor={address.id.toString()}>
                          <Image
                            width={95}
                            height={95}
                            className="w-14 object-contain"
                            src="/images/avatar.png"
                            alt=""
                          />
                          <div className="ml-5">
                            <span className="mt-2 font-extrabold text-black">
                              {address.contact_person}
                            </span>
                            <p className="text-slate-500 text-sm leading-6">
                              {address.city_name}
                            </p>
                            <p className="text-slate-500 text-sm leading-6">
                              {address.address}
                            </p>
                          </div>
                        </label>
                      </div>
                    ))
                  ) : (
                    <div>
                      <span>No Address</span>
                    </div>
                  )}
                </div>

                <div className="flex justify-end gap-2">
                  <Link href={"/profile/address"}>
                    <button className="rounded-md bg-sky-500 p-2 text-white hover:bg-sky-300">
                      Manage Address
                    </button>
                  </Link>
                  <button
                    onClick={() => {
                      toggleModal();
                      toggleAddress();
                    }}
                    className="rounded-md bg-sky-500 p-2 text-white  hover:bg-sky-300">
                    Add Address
                  </button>
                </div>
              </div>
            </div>

            {addressObj?.id ? (
              <div className="flex flex-col">
                <span className="font-bold text-xl mb-2">
                  {`${addressObj?.contact_person} ${addressObj?.phone}`}
                </span>
                <span>
                  {`${addressObj?.city_name} - ${addressObj?.subdistrict_name}`}
                </span>
                <span> {`${addressObj?.address}`}</span>
              </div>
            ) : (
              <>
                {primary?.id ? (
                  <div className="flex flex-col">
                    <span className="font-bold text-xl mb-2">
                      {`${primary?.contact_person} ${primary?.phone}`}
                    </span>
                    <span>
                      {`${primary?.city_name} - ${primary?.subdistrict_name}`}
                    </span>
                    <span> {`${primary?.address}`}</span>
                  </div>
                ) : (
                  <div className="flex flex-col animate-pulse">
                    <span className="font-bold text-xl mb-2 ">
                      No Address Selected
                    </span>
                  </div>
                )}
              </>
            )}
          </div>

          <div className="border border-gray-200">
            <div className="hidden w-full lg:inline-flex items-center justify-between font-semibold bg-white p-2">
              <div className="flex justify-between flex-row items-center w-full">
                <p className="w-1/2">Product</p>
                <p className="w-1/2">Quantity</p>
              </div>
              <p className="">Subtotal</p>
            </div>
            <div className="flex flex-col gap-y-2">
              {productData?.map((item: Products, index) => (
                <>
                  <div className="" key={item.id}>
                    <div className=" w-full bg-white p-4 flex flex-col md:flex-row items-center justify-between gap-4">
                      <div className="flex items-center gap-2 md:justify-between w-full">
                        <div className=" flex items-center gap-x-3 w-full">
                          <span
                            onClick={() => {
                              ConfirmAction(item?.id, "del");
                            }}
                            className="text-lg hover:text-red-600 cursor-pointer duration-200">
                            <AiOutlineClose />
                          </span>
                          <Image
                            src={
                              item.product.product_gallery?.length > 0
                                ? process.env.SERVER_ENDPOINT +
                                  item.product.product_gallery[0].url
                                : "/images/no_image.png"
                            }
                            alt="image"
                            width={500}
                            height={500}
                            className=" w-20 h-20 object-cover"
                          />
                          <span>{item.product.title}</span>
                        </div>
                        {/* quantity */}

                        <div className="md:mr-28 flex items-center justify-start gap-x-1 md:gap-x-3 border-[1px] border-slate-300 py-2 px-1 md:px-3 md:w-auto">
                          <p className="md:hidden">Qty</p>
                          <div className=" flex items-center text-md md:text-lg w-15 justify-between">
                            {/* <span
                            onClick={() => {
                              dispatch(decreaseQuantity(item));
                              setSelectedValues([]);
                            }}
                            className=" cursor-pointer hover:text-orange-600"
                          >
                            <FiChevronLeft />
                          </span> */}
                            <span className="font-bold">{item?.quantity}</span>
                            {/* <span
                            onClick={() => {
                              dispatch(increaseQuantity(item));
                              setSelectedValues([]);
                            }}
                            className="cursor-pointer hover:text-orange-600"
                          >
                            <FiChevronRight />
                          </span> */}
                          </div>
                        </div>
                      </div>
                      <div className=" w-full md:w-1/3 flex md:flex-col items-end justify-end md:justify-end">
                        {/* <p>W : {FormattedCommaNumber(item.weight / 1000)}</p> */}
                        <p className="text-lg font-semibold">
                          <FormattedPrice
                            amount={item?.agent_price * item?.quantity}
                          />
                        </p>
                      </div>
                    </div>
                    <div className="w-full flex flex-col items-start justify-start ml-2 mt-0 mb-2 mr-2 gap-1 font-mono">
                      <div className="relative z-0 w-full pr-4">
                        <textarea
                          id="message"
                          name="message"
                          placeholder=" "
                          onChange={(e) => {
                            dispatch(
                              addNote({ id: item.id, value: e.target.value })
                            );
                          }}
                          value={item?.noteBuyer}
                          className={`block border-2 textarea textarea-bordered  w-full focus:outline-none focus:border-blue-500 px-3 pt-1 pb-2 appearance-none leading-6 bg-transparent mr-8`}></textarea>
                        <label
                          htmlFor="message"
                          className="absolute left-3 -top-2 px-1 text-xs bg-white cursor-pointer text-sky-500">
                          Tulis Catatan
                        </label>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4 p-4 justify-end">
                      <div className="">
                        {/* <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select an option
                      </label> */}
                        <select
                          key={item.id}
                          onChange={(e) =>
                            handleSelectChange(
                              e,
                              index,
                              item.product.supplier_area
                            )
                          }
                          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                          <option>Select Courier</option>
                          {optionCouriers.map((select) => (
                            <option key={select.id} value={select.value}>
                              {select.label}
                            </option>
                          ))}

                          {/* <option selected={courier === "jne"} value="jne">
                          JNE
                        </option>
                        <option selected={courier === "jnt"} value="jnt">
                          J&T
                        </option>
                        <option
                          selected={courier === "sicepat"}
                          value="sicepat"
                        >
                          SiCEPAT
                        </option>
                        <option selected={courier === "pos"} value="pos">
                          POS
                        </option> */}
                        </select>
                      </div>
                      <div className="">
                        {/* <label
                        htmlFor="countries"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                      >
                        Select an option
                      </label> */}

                        {selectedValues[index]?.costs ? (
                          <select
                            id={`select-${index}`}
                            onChange={(e) => handleSelectChangeCost(e, index)}
                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            {loading ? (
                              <option selected>Loading...</option>
                            ) : (
                              <option selected>Select Shipping Cost</option>
                            )}

                            {selectedValues[index]?.costs ? (
                              selectedValues[index].costs.map(
                                (itemCost: any) => (
                                  <option
                                    key={itemCost.id}
                                    shipping-type={itemCost.description}
                                    source-product={item.id}
                                    source-note-buyer={item.noteBuyer}
                                    source-etd={itemCost.cost[0].etd}
                                    source-shipping={
                                      selectedValues[index]?.code
                                    }
                                    source-qty={item.quantity}
                                    value={
                                      itemCost.cost[0].value *
                                      item?.quantity *
                                      FormattedCommaNumber(item.weight / 1000)
                                    }>
                                    <div className="flex flex-row justify-between w-full gap-4">
                                      <span>{itemCost.description}</span>
                                      <span> | </span>
                                      <span>{itemCost.cost[0].etd} days</span>
                                      <span>|</span>
                                      <span>
                                        {/* {FormattedCommaNumber(item.weight / 1000)} */}
                                        <FormattedPrice
                                          amount={
                                            itemCost.cost[0].value *
                                            item?.quantity *
                                            FormattedCommaNumber(
                                              item.weight / 1000
                                            )
                                          }
                                        />
                                      </span>
                                    </div>
                                  </option>
                                )
                              )
                            ) : (
                              <option selected>Not Available</option>
                            )}
                          </select>
                        ) : (
                          ""
                        )}
                      </div>
                    </div>
                  </div>

                  <hr className="my-6 h-0.5 border-t-0 bg-neutral-100 opacity-100 dark:opacity-50" />
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="border border-gray-200 bg-white w-full md:w-1/3 md:right-0">
          <PaymentForm
            order={selectedArray}
            shipping={sum}
            shippingType={selectedShippingType}
            shippingMethod={selectedValues}
            address={selectedAddress ? selectedAddress : primary?.id}
          />
        </div>
      </div>

      <div
        className={`relative z-50 ${
          modalCart ? "visible" : "invisible"
        } overflow-x-hidden overflow-y-auto fixed inset-0 outline-none focus:outline-none`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true">
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed top-4 left-0 z-50 w-screen overflow-y-auto">
          <div className="w-full flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div className="w-full relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg  mb-20">
              <form onSubmit={handleSubmitAddress}>
                <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  {isFail ? (
                    <div className="font-regular relative mb-4 block w-full rounded-lg bg-red-500 p-4 text-base leading-5 text-white opacity-100">
                      <div
                        className="absolute top-2.5 right-3 w-max rounded-lg transition-all hover:bg-white hover:bg-opacity-20"
                        data-dismissible-target="alert">
                        <button
                          onClick={() => {
                            setIsFail(false);
                          }}
                          role="button"
                          className="w-max rounded-lg p-1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth="2">
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M6 18L18 6M6 6l12 12"></path>
                          </svg>
                        </button>
                      </div>
                      Register Fail !
                      {errMessage.map((item: string, index) => (
                        <div className="" key={item[index]}>
                          <li className="text-md font-bold text-white text-sm">
                            {item}
                          </li>
                        </div>
                      ))}
                    </div>
                  ) : (
                    ""
                  )}
                  <div className="flex flex-col sm:flex sm:items-start">
                    <div className="flex flex-wrap -mx-3 mb-6">
                      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-first-name">
                          Contact Person
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-100 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                          id="grid-first-name"
                          type="text"
                          placeholder="My Aunty"
                          value={formData.contact_person}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              contact_person: e.target.value,
                            })
                          }
                          required
                        />
                        {/* <p className="text-red-500 text-xs italic">
                          Please fill out this field.
                        </p> */}
                      </div>
                      <div className="w-full md:w-1/2 px-3">
                        <label
                          className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          htmlFor="grid-last-name">
                          Phone
                        </label>
                        <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-last-name"
                          type="text"
                          placeholder="628137285998"
                          value={formData.phone}
                          onChange={(e) =>
                            setFormData({
                              ...formData,
                              phone: e.target.value,
                            })
                          }
                          required
                        />
                      </div>
                    </div>

                    <div className="flex gap-2 justify-between">
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password">
                            City
                          </label>
                          {/* <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="password"
                          placeholder="******************"
                        /> */}
                          <Select
                            primaryColor={"indigo"}
                            value={getInCity}
                            onChange={handleChangeCity}
                            options={city}
                            isSearchable={true}
                          />

                          <p className="text-gray-600 text-xs italic">
                            Make it as long and as crazy as youd like
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-wrap -mx-3 mb-6">
                        <div className="w-full px-3">
                          <label
                            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            htmlFor="grid-password">
                            Area
                          </label>
                          {/* <input
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-password"
                          type="password"
                          placeholder="******************"
                        /> */}
                          <Select
                            primaryColor={"indigo"}
                            value={getAreaId}
                            onChange={handleChangeArea}
                            options={options}
                            isSearchable={true}
                          />

                          <p className="text-gray-600 text-xs italic">
                            Make it as long and as crazy as youd like
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="w-full mb-2">
                      <label className="block mb-2 text-sm text-gray-600 dark:text-gray-200">
                        Address Detail
                      </label>
                      <textarea
                        required
                        value={formData.address}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            address: e.target.value,
                          })
                        }
                        className="block w-full h-24 px-5 py-2.5 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-lg md:h-28 dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                        placeholder="Address Detail"></textarea>
                    </div>
                    <div className="w-full md:w-1/3 mb-6 mt-2 md:mb-0">
                      <label
                        className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                        htmlFor="grid-zip">
                        Zip
                      </label>
                      <input
                        required
                        value={formData.zip_code}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            zip_code: e.target.value,
                          })
                        }
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                        id="grid-zip"
                        type="text"
                        placeholder="90210"
                      />
                    </div>
                  </div>
                </div>

                <div className="bg-gray-50 flex py-3 flex-row-reverse p-6 gap-2 items-center">
                  <button
                    type="submit"
                    // onClick={handleSubmitAddress}
                    className="inline-flex justify-center rounded-md bg-sky-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-sky-500 sm:ml-3 sm:w-auto">
                    Save
                  </button>
                  <button
                    onClick={toggleModal}
                    type="button"
                    className="inline-flex justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CheckoutCart;
