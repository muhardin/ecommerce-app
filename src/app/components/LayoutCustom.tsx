"use client";
import { useShopData } from "./shop/ShopContext";
import { usePathname } from "next/navigation";
import MaintenancePage from "../maintenance/page";
import BottomNavigation from "./BottomNavigation";
import Footer from "./Footer";
import HeaderFront from "./HeaderFront";
import HeaderOne from "@/components/theme/one/HeaderOne";

const LayoutCustom = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();
  const shopData = useShopData();
  if (shopData?.theme_id == 1) {
    return (
      <>
        <HeaderOne />
        {children}
        <Footer />
        <BottomNavigation />
      </>
    );
  } else {
    return (
      <>
        <HeaderFront />
        {children}
        <Footer />
        <BottomNavigation />
      </>
    );
  }
};

export default LayoutCustom;
