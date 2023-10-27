"use client";
import { SyntheticEvent, useState } from "react";
import { DataToAdd, Order, OrderItem } from "../../../../../type";
import toast from "react-hot-toast";
import axios from "axios";
import { useSession } from "next-auth/react";
import Select from "react-tailwindcss-select";
import cities from "../../../../data/cities.json";
import data from "../../../../data/sub_districts.json";
import { useShopData } from "../../shop/ShopContext";
import { usePathname, useRouter } from "next/navigation";
import { formatDateAndTime } from "@/app/helpers";
import useSWR from "swr";
import Image from "next/image";
import FormattedPrice from "../../FormattedPrice";
import Link from "next/link";
import Container from "../../Container";
import { useDispatch, useSelector } from "react-redux";
import { updateModal } from "@/redux/shoppingSlice";

const OrderSupplierDetail = ({
  item,
  title,
  className,
}: {
  item: OrderItem;
  title?: string;
  className?: string;
}) => {
  const [modal, setModal] = useState(false);
  // console.log(item);
  function toggleModal() {
    dispatch(
      updateModal({
        modal: modal ? !modal : true,
      })
    );
    setModal(!modal);
  }
  const { modal: modalDt } = useSelector((state: any) => state.shopping);
  const dispatch = useDispatch();
  console.log(modalDt);

  return (
    <div>
      <div
        onClick={() => {
          dispatch(
            updateModal({
              modal: true,
            })
          );
          setModal(true);
        }}
        className={`${className} text-sky-700 cursor-pointer hover:text-sky-500 `}
      >
        {title ? title : item.product.title}
      </div>
      <div
        className={`relative z-10 ${
          modal ? "visible" : "invisible"
        } overflow-x-hidden overflow-y-auto inset-0 outline-none focus:outline-none w-full`}
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
        <div className="fixed inset-0 z-10 w-full md:ml-[156px] overflow-y-auto mt-24 md:mt-0">
          <div className="w-full flex min-h-full items-center justify-center md:justify-center p-4 text-start sm:items-center sm:p-0">
            <div className="w-full relative transform overflow-auto rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-2/3 mb-14 md:mb-0">
              <div className="p-4  shadow-md text-gray-800">
                <div className="bg-white flex flex-col md:flex-row gap-2">
                  <div className=" flex-row justify-center items-center hidden md:flex">
                    <Image
                      className="object-cover"
                      src="/images/aboutus.png"
                      alt=""
                      width={250}
                      height={250}
                    />
                  </div>
                  <div className="flex flex-col border-b-2 border-sky-200">
                    <span className="font-extrabold text-2xl">
                      {item.product.title}
                    </span>
                    <span className="mt-4 hidden md:block">
                      {item.product.description}
                    </span>
                    <div className="flex flex-row gap-4 justify-start mt-4">
                      <span>Quantity : {item.quantity}</span>
                      <span className="">
                        Price : <FormattedPrice amount={item.product.price} />
                      </span>
                      <span>
                        Shipping Cost :{" "}
                        <FormattedPrice amount={item.shipping_price} />
                      </span>
                      <span>
                        Amount :{" "}
                        <FormattedPrice
                          amount={
                            item.product.price * item.quantity +
                            item.shipping_price
                          }
                        />
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 w-2/4 border-b-2 border-sky-200">
                    <span className="text-xl">Shipping Address </span>
                    <span>{item.user_address.address_name}</span>
                    <span>{item.user_address.contact_person}</span>
                    <span>{item.user_address.phone}</span>
                    <span>{item.user_address.province_name}</span>
                    <span>{item.user_address.subdistrict_name}</span>
                    <span>{item.user_address.address}</span>
                  </div>
                  <div className="flex flex-col gap-2 w-2/4 justify-start items-start">
                    <span className="text-xl">Shipping Method</span>

                    <span className="mt-4">
                      <span className="uppercase">{item.shipping_method}</span>{" "}
                      | {item.shipping_option} |{" "}
                      <span className="font-normal">
                        {item.shipping_etd
                          ? item.shipping_etd
                          : "No Estimate Day"}
                      </span>
                      <p>Resi : {item?.shipping_resi}</p>
                    </span>
                  </div>
                </div>
                <div className="flex flex-auto justify-end mt-4 gap-6 items-center">
                  <button
                    onClick={() => {
                      setModal(false);
                      dispatch(
                        updateModal({
                          modal: modal ? !modal : false,
                        })
                      );
                    }}
                    className="p-4 rounded-md text-white bg-sky-500 cursor-pointer"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSupplierDetail;
