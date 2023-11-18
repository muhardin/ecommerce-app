"use client";
import {
  BsYoutube,
  BsGithub,
  BsLinkedin,
  BsFacebook,
  BsReddit,
  BsWhatsapp,
  BsTelegram,
} from "react-icons/bs";
import payment from "../../../public/images/slider/payment.png";
import Container from "./Container";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useShopData } from "./shop/ShopContext";

const Footer = () => {
  const pathsToCheck = ["/supplier", "/myshop"];
  const pathName = usePathname();
  const startsWith = pathsToCheck.some((path) => pathName.startsWith(path));
  const shopData = useShopData();
  // console.log(pathName);
  return (
    <>
      {startsWith ? (
        <div></div>
      ) : (
        <div className="">
          <div className="w-full bg-darkText text-slate-100">
            <Container className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
              <div className=" flex flex-col gap-y-4">
                <Logo />
                <p>{shopData?.description && shopData?.description}</p>
                <div className="gap-x-4 flex items-center">
                  <Link href="https://www.google.com" target="_blank">
                    <span className="socialLink">
                      <BsYoutube />
                    </span>
                  </Link>
                  <Link href="https://www.google.com" target="_blank">
                    <span className="socialLink">
                      <BsGithub />
                    </span>
                  </Link>
                  <Link href="https://www.google.com" target="_blank">
                    <span className="socialLink">
                      <BsLinkedin />
                    </span>
                  </Link>
                  <Link href="https://www.google.com" target="_blank">
                    <span className="socialLink">
                      <BsFacebook />
                    </span>
                  </Link>
                  <Link href="https://www.google.com" target="_blank">
                    <span className="socialLink">
                      <BsReddit />
                    </span>
                  </Link>
                  <Link href="https://www.google.com" target="_blank">
                    <span className="socialLink">
                      <BsWhatsapp />
                    </span>
                  </Link>
                  <Link href="https://www.google.com" target="_blank">
                    <span className="socialLink">
                      <BsTelegram />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="">
                <p className="text-lg">Latest posts</p>
                <ul className="text-sm font-light mt-2 flex flex-col gap-y-2">
                  <li className="flex flex-col">
                    <span className="text-slate hover:text-sky-600 cursor-pointer duration-200">
                      Where Music Is Headed Next
                    </span>
                    <span className="text-sky-600">January 31, 2022</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-slate hover:text-sky-600 cursor-pointer duration-200">
                      Where Music Is Headed Next
                    </span>
                    <span className="text-sky-600">January 31, 2022</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-slate hover:text-sky-600 cursor-pointer duration-200">
                      Where Music Is Headed Next
                    </span>
                    <span className="text-sky-600">January 31, 2022</span>
                  </li>
                  <li className="flex flex-col">
                    <span className="text-slate hover:text-sky-600 cursor-pointer duration-200">
                      Where Music Is Headed Next
                    </span>
                    <span className="text-sky-600">January 31, 2022</span>
                  </li>
                </ul>
              </div>
              <div className="">
                <p className="text-lg">Links</p>
                <ul className=" text-base gap-y-2 ">
                  <Link href="/">
                    <li className="hover:text-sky-500 cursor-pointer duration-200">
                      Home
                    </li>
                  </Link>
                  <Link href={"/cart"}>
                    <li className="hover:text-sky-500 cursor-pointer duration-200">
                      Cart
                    </li>
                  </Link>
                  <Link href={"/about"}>
                    <li className="hover:text-sky-500 cursor-pointer duration-200">
                      About
                    </li>
                  </Link>
                  <Link href={"/news"}>
                    <li className="hover:text-sky-500 cursor-pointer duration-200">
                      News
                    </li>
                  </Link>
                  <Link href={"/contact"}>
                    <li className="hover:text-sky-500 cursor-pointer duration-200">
                      Contact
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="">
                <p className=" text-lg mb-2">
                  Pay us with your trusted services
                </p>
                <Image
                  src={payment}
                  alt="payment banner image"
                  className=" w-full h-10 object-cover"
                />
              </div>
            </Container>
          </div>
        </div>
      )}
    </>
  );
};

export default Footer;
