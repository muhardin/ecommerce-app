import Link from "next/link";
import { useShopData } from "./shop/ShopContext";
import Image from "next/image";

const Logo = () => {
  const shopData = useShopData();
  // console.log(shopData);
  return (
    <Link href={"/"}>
      <div className="flex flex-row items-center gap-2">
        <Image
          className="object-cover w-auto h-auto"
          alt=""
          width={45}
          height={45}
          src={"/images/shop/logo_shop.png"}
        />
        <h3 className="hidden sm:block text-3xl font-semibold hover:text-sky-500 cursor-pointer duration-200">
          {shopData?.company_name}
        </h3>
      </div>
    </Link>
  );
};

export default Logo;
