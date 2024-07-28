"use client";
import React from "react";
import ProductsData from "./ProductsData";
import { Product, Products, ShopProduct } from "../../../type";
import useSWR from "swr";
import { useShopData } from "./shop/ShopContext";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const TrendingProduct = (domain: any) => {
  const shopData = useShopData();
  const host = domain["domain"];
  const url =
    process.env.SERVER_ENDPOINT + "/api/shop/product/trend/" + shopData?.id;
  const { data, isLoading, isValidating, error } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  return (
    <div className="justify-center flex-1 max-w-6xl px-0 py-0 mx-auto lg:py-0 md:px-4">
      <h2 className="pb-2 text-xl font-bold text-left text-gray-800 md:text-3xl dark:text-gray-400">
        Trending Products
      </h2>
      <div className="w-20 mb-6 border-b border-red-700 dark:border-gray-400"></div>
      <div className="grid grid-cols-2 md:grid-cols-2 xl:grid-cols-4 gap-4 ">
        {data?.map((item: ShopProduct) => (
          <ProductsData key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default TrendingProduct;
