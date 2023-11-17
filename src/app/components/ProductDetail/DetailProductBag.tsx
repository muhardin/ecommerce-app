"use client";

import Image from "next/image";
import FormattedPrice from "../FormattedPrice";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import Link from "next/link";
import { ProductGallery, ShopProduct } from "../../../../type";
import ModalImage from "react-modal-image";
import Slider from "react-slick";

const DetailProductBag = ({
  data,
  primaryImage,
}: {
  data: ShopProduct;
  primaryImage: string;
}) => {
  const dispatch = useDispatch();
  const price = Number(data?.agent_price + data?.profit);
  const [topImage, setTopImage] = useState(data?.product.image);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const gallery = data?.product.gallery;
  console.log(data?.product.gallery);
  return (
    <section className="py-0 overflow-hidden font-poppins dark:bg-gray-800">
      <div className="max-w-6xl px-4 py-4 mx-auto lg:py-8 md:px-6">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full px-0 md:w-1/2 ">
            <div className="top-0 z-50 overflow-hidden flex flex-col">
              <div className="h-[450px] w-full rounded-lg flex-col justify-center items-center flex gap-2">
                <div className="h-96 w-96 flex flex-row justify-center items-center">
                  <ModalImage
                    className="object-center items-center"
                    small={primaryImage}
                    large={primaryImage}
                    alt={data?.product.title}
                  />
                </div>

                {/* <Image
                  width={250}
                  height={250}
                  src={`${
                    primaryImage
                      ? primaryImage
                      : "/images/products/default.jpeg"
                  }`}
                  alt=""
                  className="object-contain w-full h-full rounded-lg"
                /> */}
              </div>
              <div className="flex flex-row h-40 w-full gap-2 justify-between items-center px-4">
                <div className="h-28 w-28">
                  <Link
                    href={{
                      pathname: "/product",
                      query: {
                        id: data?.id,
                        image: `${process.env.SERVER_ENDPOINT}${data?.product?.image}`,
                      },
                    }}
                  >
                    {data?.product?.image ? (
                      <Image
                        src={`${process.env.SERVER_ENDPOINT}${data?.product?.image}`}
                        width={250}
                        height={250}
                        alt=""
                      />
                    ) : null}
                  </Link>
                  {/* <ModalImage
                          className="relative z-50 w-28 h-28"
                          small={`${process.env.SERVER_ENDPOINT}${item.url}`}
                          large={`${process.env.SERVER_ENDPOINT}${item.url}`}
                          alt={data?.product.title}
                        /> */}
                </div>
                {gallery?.length > 0
                  ? gallery.map((item: ProductGallery) => (
                      <div key={item.id} className="h-28 w-28">
                        <Link
                          href={{
                            pathname: "/product",
                            query: {
                              id: data?.id,
                              image: `${process.env.SERVER_ENDPOINT}${item?.url}`,
                            },
                          }}
                        >
                          <Image
                            src={`${process.env.SERVER_ENDPOINT}${item?.url}`}
                            width={250}
                            height={250}
                            alt=""
                          />
                        </Link>
                        {/* <ModalImage
                          className="relative z-50 w-28 h-28"
                          small={`${process.env.SERVER_ENDPOINT}${item.url}`}
                          large={`${process.env.SERVER_ENDPOINT}${item.url}`}
                          alt={data?.product.title}
                        /> */}
                      </div>
                    ))
                  : null}
              </div>
            </div>
          </div>
          <div className="w-full px-4 md:w-1/2 ">
            <div className="lg:pl-20">
              <div className="pb-6 mb-8 border-b border-gray-200 dark:border-gray-700">
                {data?.product.isNew ? (
                  <span className="text-lg font-medium text-rose-500 dark:text-rose-200">
                    New
                  </span>
                ) : (
                  ""
                )}
                <h2 className="max-w-xl mt-2 mb-6 text-xl font-bold dark:text-gray-300 md:text-4xl">
                  {data?.product.title}
                </h2>
                <div className="flex flex-wrap items-center mb-6">
                  <ul className="flex mb-4 mr-2 lg:mb-0">
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          fill="currentColor"
                          className="w-4 mr-1 text-red-500 dark:text-gray-400 bi bi-star "
                          viewBox="0 0 16 16"
                        >
                          <path d="M2.866 14.85c-.078.444.36.791.746.593l4.39-2.256 4.389 2.256c.386.198.824-.149.746-.592l-.83-4.73 3.522-3.356c.33-.314.16-.888-.282-.95l-4.898-.696L8.465.792a.513.513 0 0 0-.927 0L5.354 5.12l-4.898.696c-.441.062-.612.636-.283.95l3.523 3.356-.83 4.73zm4.905-2.767-3.686 1.894.694-3.957a.565.565 0 0 0-.163-.505L1.71 6.745l4.052-.576a.525.525 0 0 0 .393-.288L8 2.223l1.847 3.658a.525.525 0 0 0 .393.288l4.052.575-2.906 2.77a.565.565 0 0 0-.163.506l.694 3.957-3.686-1.894a.503.503 0 0 0-.461 0z" />
                        </svg>
                      </a>
                    </li>
                  </ul>
                  <a
                    className="mb-4 text-xs underline dark:text-gray-400 dark:hover:text-gray-300 lg:mb-0"
                    href="#"
                  >
                    Be the first to review the product
                  </a>
                </div>
                <p className="max-w-md mb-8 text-gray-700 dark:text-gray-400">
                  {data?.product.description}
                </p>
                <div className="p-4 mb-8 border border-gray-300 dark:border-gray-700">
                  <h2 className="mb-4 text-xl font-semibold dark:text-gray-400">
                    Real time{" "}
                    <span className="px-2 bg-blue-500 text-gray-50">26</span>
                    visitors right now!{" "}
                  </h2>
                  <div className="mb-1 text-xs font-medium text-gray-700 dark:text-gray-400">
                    Hurry up! left 23 in Stock
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2.5  dark:bg-gray-600">
                    <div className="bg-blue-600 dark:bg-blue-400 h-2.5 rounded-full w-[45%]"></div>
                  </div>
                </div>
                <p className="inline-block text-2xl font-semibold text-gray-700 dark:text-gray-400 ">
                  <span>
                    <FormattedPrice amount={price} />
                  </span>
                  <span className="ml-2 text-base font-normal text-gray-500 line-through dark:text-gray-400">
                    <FormattedPrice
                      amount={data?.old_price ? data?.old_price : 0}
                    />
                  </span>
                </p>
              </div>
              <div className="mb-2">
                <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                  Color
                </h2>
                <div className="flex flex-wrap -mb-2">
                  <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400 ">
                    <div className="w-6 h-6 bg-red-600 rounded-full"></div>
                  </button>
                  <button className="p-1 mb-2 mr-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 bg-green-600 rounded-full"></div>
                  </button>
                  <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 bg-yellow-500 rounded-full"></div>
                  </button>
                  <button className="p-1 mb-2 border border-transparent rounded-full hover:border-gray-400 dark:border-gray-800 dark:hover:border-gray-400">
                    <div className="w-6 h-6 rounded-full bg-sky-400"></div>
                  </button>
                </div>
              </div>
              <div className="pb-6 mb-2 border-b border-gray-300 dark:border-gray-700">
                <h2 className="mb-2 text-xl font-bold dark:text-gray-400">
                  Size
                </h2>
                <div className="flex flex-wrap -mb-2">
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 dark:border-gray-400 hover:text-blue-600 dark:hover:border-gray-300 dark:text-gray-400">
                    XL
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    S
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    M
                  </button>
                  <button className="py-1 mb-2 mr-1 border w-11 hover:border-blue-400 hover:text-blue-600 dark:border-gray-400 dark:hover:border-gray-300 dark:text-gray-400">
                    XS
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center ">
                {/* <div className="mb-4 mr-4 lg:mb-0">
                  <div className="w-28">
                    <div className="relative flex flex-row w-full h-10 bg-transparent rounded-lg">
                      <button className="w-20 h-full text-gray-600 bg-gray-100 border-r rounded-l outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 hover:text-gray-700 dark:bg-gray-900 hover:bg-gray-300">
                        <span className="m-auto text-2xl font-thin">-</span>
                      </button>
                      <input
                        type="number"
                        className="flex items-center w-full font-semibold text-center text-gray-700 placeholder-gray-700 bg-gray-100 outline-none dark:text-gray-400 dark:placeholder-gray-400 dark:bg-gray-900 focus:outline-none text-md hover:text-black"
                        placeholder="1"
                      />
                      <button className="w-20 h-full text-gray-600 bg-gray-100 border-l rounded-r outline-none cursor-pointer dark:border-gray-700 dark:hover:bg-gray-700 dark:text-gray-400 dark:bg-gray-900 hover:text-gray-700 hover:bg-gray-300">
                        <span className="m-auto text-2xl font-thin">+</span>
                      </button>
                    </div>
                  </div>
                </div>*/}
                {/* <div className="mb-2 mr-4 lg:mb-0">
                  <button className="w-full h-10 p-2 mr-4 bg-sky-500 dark:text-gray-200 text-gray-50 hover:bg-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500">
                    Add To Cart
                  </button>
                </div> */}

                <div
                  onClick={() =>
                    dispatch(addToCart(data)) &&
                    toast.success(
                      `${data?.product.title.substring(
                        0,
                        15
                      )} added successfully!`
                    )
                  }
                  className="mb-2 mr-4 lg:mb-0 flex"
                >
                  <button className="w-full h-10 p-2 mr-0 bg-sky-500 dark:text-gray-200 text-gray-50 hover:bg-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500">
                    Add To Cart
                  </button>
                  <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-sky-600 hover:border-sky-600 dark:bg-sky-600 dark:hover:bg-sky-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-cart"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </button>
                </div>
                <div className="mb-2 lg:mb-0">
                  <button className="flex items-center justify-center w-full h-10 p-2 text-gray-700 border border-gray-300 lg:w-11 hover:text-gray-50 dark:text-gray-200 dark:border-blue-600 hover:bg-blue-600 hover:border-blue-600 dark:bg-blue-600 dark:hover:bg-blue-500 dark:hover:border-blue-500 dark:hover:text-gray-300">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className=" bi bi-heart"
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DetailProductBag;
