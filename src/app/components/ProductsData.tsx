"use client";
import Image from "next/image";
import { ItemProps, ProductGallery, ShopProduct } from "../../../type";
import { calculatePercentage } from "../helpers";
import FormattedPrice from "./FormattedPrice";
import { IoIosStar } from "react-icons/io";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import Slider from "react-slick";

const ProductsData = ({ item }: { item: ShopProduct }) => {
  const dispatch = useDispatch();
  const starArray = Array.from(
    { length: item?.product?.rating },
    (_, index) => (
      <span key={index} className=" text-yellow-400">
        <IoIosStar />
      </span>
    )
  );
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  // console.log(item);
  // console.log(item);
  return (
    <div className="w-full rounded-lg overflow-hidden">
      <div className="">
        {item.product?.product_gallery.length > 0 ? (
          <Link
            href={{
              pathname: "/product",
              query: {
                id: item?.id,
                image: `${process.env.SERVER_ENDPOINT}${item.product?.product_gallery[0].url}`,
              },
            }}>
            <div className=" w-full h-44 md:h-80 group overflow-hidden relative">
              {/* <Slider {...settings}>
                {item.product?.product_gallery.map(
                  (gallery: ProductGallery) => (
                    <div key={gallery.id} className="w-full h-full relative">
                      <Image
                        width={500}
                        height={500}
                        src={`${process.env.SERVER_ENDPOINT}${gallery.url}`}
                        alt="Banner One"
                        className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
                        priority
                      />
                    </div>
                  )
                )}
              </Slider> */}
              <Image
                src={`${process.env.SERVER_ENDPOINT}${item.product?.product_gallery[0].url}`}
                alt="Product image"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
              />

              {/* {Number(item?.product?.isNew) > 0 ? (
                <span className=" absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-sky-500 group-hover:text-white bg-white duration-200">
                  New
                </span>
              ) : (
                <span className=" absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-red-500 group-hover:text-white bg-white duration-200">
                  Second
                </span>
              )} */}
            </div>
          </Link>
        ) : (
          <Link
            href={{
              pathname: "/product",
              query: {
                id: item?.id,
                image: `/images/no_image.png`,
              },
            }}>
            <div className=" w-full h-44 md:h-80 group overflow-hidden relative">
              <Image
                src={`/images/no_image.png`}
                alt="Product image"
                width={400}
                height={400}
                className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
              />

              {/* {Number(item?.product?.isNew) > 0 ? (
                <span className=" absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-sky-500 group-hover:text-white bg-white duration-200">
                  New
                </span>
              ) : (
                <span className=" absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-red-500 group-hover:text-white bg-white duration-200">
                  Second
                </span>
              )} */}
            </div>
          </Link>
        )}
        <div className="border-[1px] border-slate-300 border-t-0 py-4 px-2 flex flex-col gap-y-2 bg-white rounded-b-lg">
          {item?.product?.product_gallery?.length > 0 ? (
            <Link
              href={{
                pathname: "/product",
                query: {
                  id: item?.id,
                  image: `${process.env.SERVER_ENDPOINT}${item?.product?.product_gallery[0].url}`,
                },
              }}>
              <p className="cursor-pointer hover:text-sky-600 truncate">
                {item?.product.title}
              </p>
            </Link>
          ) : (
            <Link
              href={{
                pathname: "/product",
                query: {
                  id: item?.id,
                  image: `/images/no_image.png`,
                },
              }}>
              <p className="cursor-pointer hover:text-sky-600 truncate">
                {item?.product.title}
              </p>
            </Link>
          )}

          <div className=" flex items-center justify-end relative">
            <div className="absolute -top-20 bg-white left-0 border-[1px] border-sky-500 py-1 px-4 rounded-full text-xs">
              <p>
                {calculatePercentage(item?.agent_price, item.old_price)}% off
              </p>
            </div>
            <div className=" flex items-center gap-x-2">
              {item?.old_price > item.agent_price ? (
                <p className="text-slate-500 line-through text-sm">
                  <FormattedPrice amount={item?.old_price} />
                </p>
              ) : null}

              <p className=" font-semibold">
                <FormattedPrice amount={item?.agent_price} />
              </p>
            </div>
          </div>
          <div className="flex items-center justify-between">
            {/* Add to cart */}
            <button
              onClick={() =>
                dispatch(addToCart(item)) &&
                toast.success(
                  `${item?.product.title.substring(0, 15)} added successfully!`
                )
              }
              className=" bg-sky-500 py-2 px-4 rounded-full text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200">
              <span className="hidden sm:block">add to cart</span>
              <span className=" sm:hidden">
                <svg
                  className="text-white"
                  fill="#FFFFFF"
                  width="24px"
                  height="24px"
                  viewBox="0 0 32 32"
                  xmlns="http://www.w3.org/2000/svg">
                  <path d="M 4 7 C 3.449219 7 3 7.449219 3 8 C 3 8.550781 3.449219 9 4 9 L 6.21875 9 L 8.84375 19.5 C 9.066406 20.390625 9.863281 21 10.78125 21 L 23.25 21 C 24.152344 21 24.917969 20.402344 25.15625 19.53125 L 27.75 10 L 25.65625 10 L 23.25 19 L 10.78125 19 L 8.15625 8.5 C 7.933594 7.609375 7.136719 7 6.21875 7 Z M 22 21 C 20.355469 21 19 22.355469 19 24 C 19 25.644531 20.355469 27 22 27 C 23.644531 27 25 25.644531 25 24 C 25 22.355469 23.644531 21 22 21 Z M 13 21 C 11.355469 21 10 22.355469 10 24 C 10 25.644531 11.355469 27 13 27 C 14.644531 27 16 25.644531 16 24 C 16 22.355469 14.644531 21 13 21 Z M 16 7 L 16 10 L 13 10 L 13 12 L 16 12 L 16 15 L 18 15 L 18 12 L 21 12 L 21 10 L 18 10 L 18 7 Z M 13 23 C 13.5625 23 14 23.4375 14 24 C 14 24.5625 13.5625 25 13 25 C 12.4375 25 12 24.5625 12 24 C 12 23.4375 12.4375 23 13 23 Z M 22 23 C 22.5625 23 23 23.4375 23 24 C 23 24.5625 22.5625 25 22 25 C 21.4375 25 21 24.5625 21 24 C 21 23.4375 21.4375 23 22 23 Z" />
                </svg>
              </span>
            </button>
            {/* Star Icons */}
            <div className="flex items-center">{starArray}</div>
          </div>
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default ProductsData;
