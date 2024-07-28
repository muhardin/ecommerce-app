import Link from "next/link";
import { useShopData } from "./shop/ShopContext";
import Image from "next/image";

const Logo = () => {
  const shopData = useShopData();
  // console.log(shopData);
  return (
    <Link href={"/"}>
      <div className="flex flex-row items-center gap-2">
        {shopData?.logo ? (
          <Image
            className="object-cover w-10 h-10"
            alt=""
            width={85}
            height={85}
            src={`${process.env.SERVER_ENDPOINT}/storage/logo/${shopData.logo}`}
          />
        ) : window.location.host === "tokokiens.com" ? (
          <Image
            className="object-cover w-10 h-10"
            alt=""
            width={85}
            height={85}
            src={`${process.env.SERVER_ENDPOINT}/images/klogo.png`}
          />
        ) : (
          <Image
            className="object-cover w-10 h-10"
            alt=""
            width={85}
            height={85}
            src={`${process.env.SERVER_ENDPOINT}/images/shopitycon.png`}
          />
        )}

        <h3 className="hidden sm:block text-2xl font-semibold hover:text-sky-500 cursor-pointer duration-200">
          {shopData?.company_name}
        </h3>
      </div>
    </Link>
  );
};

export default Logo;
