"use client";
import Image from "next/image";
import bannerOne from "../../../public/images/slider/bannerone.jpg";
import bannerTwo from "../../../public/images/slider/bannertwo.jpg";
import bannerThree from "../../../public/images/slider/bannerthree.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

import Slider from "react-slick";
import BannerText from "./BannerText";

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className=" p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className=" p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}
      >
        <PiCaretRightLight />
      </div>
    );
  };
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <div className="relative">
      <Slider {...settings}>
        <div className="w-full h-full relative">
          <Image
            src={bannerOne}
            alt="Banner One"
            className="w-full h-full relative"
            priority
          />
          <BannerText title="Outware Picks" />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={bannerThree}
            alt="Banner One"
            className="w-full h-full relative"
          />
          <BannerText title="Seasonal Offer" />
        </div>
        <div className="w-full h-full relative">
          <Image
            src={bannerTwo}
            alt="Banner One"
            className="w-full h-full relative"
          />
          <BannerText title="Best for men" />
        </div>
      </Slider>
      <div className="absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
    </div>
  );
};

export default Banner;
