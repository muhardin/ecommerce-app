"use client";
import useSWR from "swr";
import { useShopData } from "../../shop/ShopContext";
import { useSession } from "next-auth/react";
import Products from "../../Products";
import MyProductList from "./MyProductList";

const MyProductComponent = () => {
  const shopData = useShopData();
  const { data: session } = useSession();

  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  const url =
    process.env.SERVER_ENDPOINT +
    "/api/myshop-board/product/myproducts/" +
    shopData?.id;
  const {
    data: products,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });
  console.log(products);
  return (
    <div className="flex flex-col gap-2 bg-white p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {products ? (
          products.map((product: Products) => (
            <MyProductList key={product.id} item={product} />
          ))
        ) : (
          <div>Loading....</div>
        )}
      </div>
    </div>
  );
};

export default MyProductComponent;
