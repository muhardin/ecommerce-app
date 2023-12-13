"use client";
import Products from "@/app/components/Products";
import { useShopData } from "@/app/components/shop/ShopContext";
import BannerOne from "./theme/one/BannerOne";
import Banner from "@/app/components/Banner";
import Image from "next/image";

const DefaultPage = ({ domain }: { domain: string }) => {
  const shopData = useShopData();
  if (shopData?.theme_id == 1) {
    return (
      <div>
        <BannerOne />
        <Products host={domain} />
      </div>
    );
  } else {
    return (
      <div>
        <Banner host={domain} />
        <Products host={domain} />
      </div>
    );
  }
};

export default DefaultPage;
