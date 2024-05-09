"use client";
import React from "react";
import useSWR from "swr";
import ImageGallery from "./ProductGallery";
import { useDispatch } from "react-redux";
import { Product } from "../../../type";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const ProductDetailShow = (product: any) => {
  const dispatch = useDispatch();
  const url =
    process.env.SERVER_ENDPOINT + "/api/shop/product/detail/" + product.product;
  const {
    data: detailProduct,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });
  console.log(product.product);
  //   console.log(detailproduct?.product?.gallery);

  return (
    <div>
      {detailProduct ? (
        <div className="bg-white">
          <div className="mx-auto max-w-screen-xl px-4 md:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <ImageGallery images={detailProduct?.product?.gallery} />

              <div className="md:py-8">
                <div className="mb-2 md:mb-3">
                  <span className="mb-0.5 inline-block text-gray-500">
                    {/* {data.categoryName} */}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl">
                    {detailProduct?.product?.title}
                  </h2>
                </div>

                <div className="mb-6 flex items-center gap-3 md:mb-10">
                  <span className="text-sm text-gray-500 transition duration-100">
                    56 Ratings
                  </span>
                </div>

                <div className="mb-4">
                  <div className="flex items-end gap-2">
                    <span className="text-xl font-bold text-gray-800 md:text-2xl">
                      {/* ${data.price} */}
                    </span>
                    <span className="mb-0.5 text-red-500 line-through">
                      {/* ${data.price + 30} */}
                    </span>
                  </div>

                  <span className="text-sm text-gray-500">
                    Incl. Vat plus shipping
                  </span>
                </div>

                <div className="mb-6 flex items-center gap-2 text-gray-500">
                  {/* <Truck className="w-6 h-6" /> */}
                  <span className="text-sm">2-4 Day Shipping</span>
                </div>

                <div className="flex gap-2.5"></div>

                <p className="mt-12 text-base text-gray-500 tracking-wide">
                  {/* {data.description} */}
                </p>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row justify-center items-center">
          <span className="loading loading-dots loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default ProductDetailShow;
