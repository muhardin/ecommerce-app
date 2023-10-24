"use client";
import { getProducts } from "../helpers";
import Container from "./Container";
import ProductsData from "./ProductsData";
import { ProductShops, Products } from "../../../type";
import { useEffect, useState } from "react";
import { useShopData } from "./shop/ShopContext";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const Products = ({ host }: any) => {
  //const products = await getProducts();
  const shopData = useShopData();
  const domain = host;

  // const [products, setProduct]: any = useState(null);
  const [loading, setLoading] = useState(true);
  // const [shop, setShop]: any = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       process.env.SERVER_ENDPOINT + "/api/shop/" + domain
  //     );
  //     const data = await response.json();
  //     setShop(data);
  //   };
  //   fetchData();
  // }, [domain]);

  const url = process.env.SERVER_ENDPOINT + "/api/shop/product/" + shopData?.id;
  const {
    data: products,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       process.env.SERVER_ENDPOINT + "/api/shop/product/" + shopData?.id
  //     );
  //     const data = await response.json();
  //     setProduct(data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [shopData?.id]);
  // console.log(domain);
  // console.log(products);
  // console.log(shopData?.id);
  return (
    <Container className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 -mt-5">
      {products?.map((item: Products) => (
        <ProductsData item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
