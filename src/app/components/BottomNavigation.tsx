"use client";
import Link from "next/link";
import { Icons } from "./ui/Icons";
import LucidaIcon from "./ui/LucidaIcons";
import { usePathname } from "next/navigation";
import BottomNavigationMyShop from "./ui/BottomNavigationMyShop";
import BottomNavigationSupplier from "./ui/BottomNavigationSupplier";
import BottomNavigationProfile from "./ui/BottomNavigationProfile";
import BottomNavigationFront from "./ui/BottomNavigationFront";

const BottomNavigation = () => {
  const pathName = usePathname();
  console.log(pathName);
  if (pathName.startsWith("/supplier")) {
    return (
      <div className="">
        <BottomNavigationSupplier />
      </div>
    );
  } else if (pathName.startsWith("/myshop")) {
    return (
      <div className="">
        <BottomNavigationMyShop />
      </div>
    );
  } else if (pathName.startsWith("/profile")) {
    return (
      <div className="">
        {/* <BottomNavigationProfile /> */}
        <BottomNavigationFront />
      </div>
    );
  } else if (pathName.startsWith("/")) {
    return (
      <div className="">
        <BottomNavigationFront />
      </div>
    );
  } else {
    return <div className="">{/* <BottomNavigationProfile /> */}</div>;
  }
};

export default BottomNavigation;
