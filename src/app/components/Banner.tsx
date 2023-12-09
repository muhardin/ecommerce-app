"use client";
import Image from "next/image";
import bannerOne from "../../../public/images/slider/bannerone.jpg";
import bannerTwo from "../../../public/images/slider/bannertwo.jpg";
import bannerThree from "../../../public/images/slider/bannerthree.jpg";
import { PiCaretLeftLight, PiCaretRightLight } from "react-icons/pi";

import Slider from "react-slick";
import BannerText from "./BannerText";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Banner = () => {
  const NextArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className=" p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute left-2 top-1/2"
        onClick={onClick}>
        <PiCaretLeftLight />
      </div>
    );
  };
  const PrevArrow = (props: any) => {
    const { onClick } = props;
    return (
      <div
        className=" p-3 bg-slate-100 hover:text-orange-600 hover:bg-white cursor-pointer duration-200 rounded-full text-2xl flex items-center justify-center z-20 absolute right-2 top-1/2"
        onClick={onClick}>
        <PiCaretRightLight />
      </div>
    );
  };
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
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
        <div className="hidden sm:block absolute w-full h-44 bg-gradient-to-t from-gray-100 to-transparent bottom-0 left-0 z-10" />
      </div>

      <div className="mb-12 md:mb-14 xl:mb-16 px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto">
        <div className="mx-auto w-full col-span-full sm:col-span-5">
          <Link
            href="#"
            className="group flex justify-center relative overflow-hidden w-full aspect-[2.3/1] sm:aspect-[5.075/2]">
            <Image
              alt="Men's Collection"
              src="/images/banner/banner-mobile-7.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>

        <div className="mx-auto w-full col-span-1 sm:col-span-2">
          <Link
            href="#"
            className="group flex justify-center relative overflow-hidden w-full aspect-square h-full">
            <Image
              alt="New Kid's"
              src="/images/banner/banner-mobile-8_.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>

        <div className="mx-auto w-full col-span-1 sm:col-span-2">
          <Link
            href="#"
            className="group flex justify-center relative overflow-hidden w-full aspect-square h-full">
            <Image
              alt="Dress Women"
              src="/images/banner/banner-mobile-9.jpeg"
              layout="fill"
              objectFit="cover"
            />
          </Link>
        </div>
      </div>

      {/* <div className="relative mb-5 md:mb-8 mx-auto max-w-[1920px] xl:mb-[60px]">
        <Swiper
          pagination={true}
          modules={[Pagination, Autoplay]}
          className="mySwiper">
          <SwiperSlide className="w-full h-full relative">
            <Image
              src={bannerOne}
              alt="Banner One"
              className="w-full h-full relative"
              priority
            />
            <BannerText title="Outware Picks" />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bannerThree}
              alt="Banner One"
              className="w-full h-full relative"
              priority
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              src={bannerTwo}
              alt="Banner One"
              className="w-full h-full relative"
              priority
            />
          </SwiperSlide>
        </Swiper>
      </div>

      <div className="mb-12 md:mb-14 xl:mb-16 px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto">
       
        <div className="mx-auto w-full col-span-full sm:col-span-5">
          <Link
            href="/collections/mens-collection"
            className="group flex justify-center relative overflow-hidden w-full aspect-[2.3/1] sm:aspect-[5.075/2]">
            <Image
              alt="Men's Collection"
              src="/images/banner/banner-mobile-7.jpeg"
              layout="fill"
              objectFit="cover"
            />
          
          </Link>
        </div>

      
        <div className="mx-auto w-full col-span-1 sm:col-span-2">
          <Link
            href="/collections/new-kids"
            className="group flex justify-center relative overflow-hidden w-full aspect-square h-full">
            <Image
              alt="New Kid's"
              src="/images/banner/banner-mobile-8_.jpeg"
              layout="fill"
              objectFit="cover"
            />
        
          </Link>
        </div>

      
        <div className="mx-auto w-full col-span-1 sm:col-span-2">
          <Link
            href="/collections/dress-women"
            className="group flex justify-center relative overflow-hidden w-full aspect-square h-full">
            <Image
              alt="Dress Women"
              src="/images/banner/banner-mobile-9.jpeg"
              layout="fill"
              objectFit="cover"
            />
           
          </Link>
        </div>
      </div> */}
    </>
  );
};

export default Banner;
