"use client";

import Image from "next/image";
import FormattedPrice from "./FormattedPrice";
import { IoMdCart } from "react-icons/io";
import { MdFavoriteBorder } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "@/redux/shoppingSlice";
import toast, { Toaster } from "react-hot-toast";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import useSWR from "swr";
import DetailProductBag from "./ProductDetail/DetailProductBag";
import DetailProductCloth from "./ProductDetail/DetailProductCloth";
import DetailProductVariant from "./ProductDetail/DetailProductVariant";

const fetcher = (url: any) => fetch(url).then((res) => res.json());

const SingleProduct = ({ product, primaryImage }: any) => {
  const url =
    process.env.SERVER_ENDPOINT + "/api/shop/product/detail/" + product;
  const dispatch = useDispatch();
  const { data, isLoading, isValidating, error } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const price = Number(data?.agent_price + data?.profit);

  switch (data?.product.sub_category) {
    case 1:
      return <DetailProductBag data={data} primaryImage={primaryImage} />;
    case 2:
      return <DetailProductVariant data={data} primaryImage={primaryImage} />;

    default:
      return <DetailProductBag data={data} primaryImage={primaryImage} />;
  }
};

export default SingleProduct;
