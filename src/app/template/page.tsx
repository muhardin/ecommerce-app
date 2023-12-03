import React from "react";

const page = () => {
  return (
    <>
      <div>
        <div className="flex flex-col min-h-screen">
          <header
            id="siteHeader"
            className="w-full h-16 sm:h-20 lg:h-24 relative z-20">
            <div className="innerSticky text-gray-700 body-font fixed bg-white w-full h-16 sm:h-20 lg:h-24 z-20 ltr:pl-4 ltr:lg:pl-6 ltr:pr-4 ltr:lg:pr-6 rtl:pr-4 rtl:lg:pr-6 rtl:pl-4 rtl:lg:pl-6 transition duration-200 ease-in-out">
              <div className="flex items-center justify-center mx-auto max-w-[1920px] h-full w-full">
                <button
                  aria-label="Menu"
                  className="menuBtn md:flex ltr:pr-7 rtl:pl-7 hidden md:block flex-col items-center justify-center flex-shrink-0 h-full outline-none focus:outline-none">
                  <span className="menuIcon">
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                  </span>
                </button>
                <a className="inline-flex focus:outline-none shrink-0" href="/">
                  <img
                    alt="ChawkBazar"
                    loading="eager"
                    width="95"
                    height="30"
                    decoding="async"
                    data-nimg="1"
                    sizes="(max-width: 768px) 100vw"
                    src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F258%2Flogo-final2x.png&amp;w=3840&amp;q=75"
                  />
                </a>
                <div className="hidden md:flex justify-end items-center space-x-6 lg:space-x-5 xl:space-x-8 2xl:space-x-10 rtl:space-x-reverse ltr:ml-auto rtl:mr-auto flex-shrink-0">
                  <button
                    className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
                    aria-label="search-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="17px"
                      height="18px"
                      viewBox="0 0 18.942 20"
                      className="md:w-4 xl:w-5 md:h-4 xl:h-5">
                      <path
                        d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
                        transform="translate(-367.297 -371.285)"
                        fill="currentColor"
                        fill-rule="evenodd"></path>
                    </svg>
                  </button>
                  <button
                    className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
                    aria-label="cart-button">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18px"
                      height="18px"
                      viewBox="0 0 20 20"
                      className="md:w-4 xl:w-5 md:h-4 xl:h-5">
                      <path
                        d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z"
                        transform="translate(-2 -2)"
                        fill="currentColor"
                        fill-rule="evenodd"></path>
                    </svg>
                    <span className="cart-counter-badge flex items-center justify-center bg-heading text-white absolute -top-3 ltr:-right-2.5 ltr:xl:-right-3 rtl:-left-2.5 rtl:xl:-left-3 rounded-full font-bold">
                      0
                    </span>
                  </button>
                  <div
                    className="relative inline-block ltr:text-left rtl:text-right"
                    data-headlessui-state="">
                    <div
                      className="flex items-center focus:outline-0"
                      id="headlessui-menu-button-:r1q:"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      data-headlessui-state="">
                      <span className="relative block cursor-pointer overflow-hidden rounded-full border border-border-100 h-[38px] w-[38px] border-border-200">
                        <img
                          alt="user name"
                          fetchPriority="high"
                          decoding="async"
                          data-nimg="fill"
                          src="/avatar-placeholder.svg"
                          className="absolute h-full w-full inset-0"
                        />
                      </span>
                      <span className="sr-only">user-avatar</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </header>

          <div
            className="relative flex-grow"
            style={{ minHeight: "-webkit-fill-available" }}>
            <div className="mb-12 md:mb-14 xl:mb-16 px-2.5 grid grid-cols-2 sm:grid-cols-9 gap-2 md:gap-2.5 max-w-[1920px] mx-auto">
              <div className="mx-auto w-full col-span-full sm:col-span-5 ">
                <a
                  className="group flex justify-center relative overflow-hidden w-full aspect-square h-full"
                  href="/collections/new-kid's">
                  <img
                    alt="New Kid's"
                    fetchPriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover w-full sm:hidden"
                    sizes="(max-width: 768px) 100vw"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=3840&amp;q=100 3840w"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=3840&amp;q=100"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                  <img
                    alt="New Kid's"
                    fetchPriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover w-full hidden sm:block"
                    sizes="(max-width: 768px) 100vw"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=3840&amp;q=100 3840w"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=3840&amp;q=100"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                  <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -left-full z-5 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div>
                </a>
              </div>
              <div className="mx-auto w-full col-span-1 sm:col-span-2">
                <a
                  className="group flex justify-center relative overflow-hidden w-full aspect-square h-full"
                  href="/collections/new-kid's">
                  <img
                    alt="New Kid's"
                    fetchPriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover w-full sm:hidden"
                    sizes="(max-width: 768px) 100vw"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=3840&amp;q=100 3840w"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=3840&amp;q=100"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                  <img
                    alt="New Kid's"
                    fetchPriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover w-full hidden sm:block"
                    sizes="(max-width: 768px) 100vw"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=3840&amp;q=100 3840w"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=3840&amp;q=100"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                  <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -left-full z-5 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div>
                </a>
              </div>
              <div className="mx-auto w-full col-span-1 sm:col-span-2">
                <a
                  className="group flex justify-center relative overflow-hidden w-full aspect-square h-full"
                  href="/collections/new-kid's">
                  <img
                    alt="New Kid's"
                    fetchPriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover w-full sm:hidden"
                    sizes="(max-width: 768px) 100vw"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=3840&amp;q=100 3840w"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-mobile-8.jpg&amp;w=3840&amp;q=100"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                  <img
                    alt="New Kid's"
                    fetchPriority="high"
                    decoding="async"
                    data-nimg="fill"
                    className="bg-gray-300 object-cover w-full hidden sm:block"
                    sizes="(max-width: 768px) 100vw"
                    srcSet="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=3840&amp;q=100 3840w"
                    src="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fmasonry%2Fbanner-8.jpg&amp;w=3840&amp;q=100"
                    style={{
                      position: "absolute",
                      height: "100%",
                      width: "100%",
                      inset: "0px",
                      color: "transparent",
                    }}
                  />
                  <div className="absolute top-0 block w-1/2 h-full transform -skew-x-12 -left-full z-5 bg-gradient-to-r from-transparent to-white opacity-40 group-hover:animate-shine"></div>
                </a>
              </div>
            </div>
            <div className="mb-10 md:mb-11 lg:mb-12 xl:mb-14 lg:pb-1 xl:pb-0">
              <div className="flex items-center justify-between -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
                  Browse Categories
                </h3>
              </div>
              <div className="carouselWrapper relative  ">
                <div
                  className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
                  dir="ltr">
                  <div
                    className="swiper-wrapper"
                    style={{
                      transform: "translate3d(-1025px, 0px, 0px)",
                      transitionDuration: "0ms",
                    }}>
                    <div
                      className="swiper-slide"
                      style={{ width: "193px", marginRight: "12px" }}
                      data-swiper-slide-index="1">
                      <a
                        className="group flex justify-center text-left rounded-lg px-6 lg:px-8 pt-7 lg:pt-10 pb-5 lg:pb-8 bg-gray-200 flex-col relative"
                        href="/category/watch">
                        <div className="relative inline-flex w-full rounded-md mb-3.5 md:mb-4 lg:mb-5 xl:mb-6">
                          <div className="flex relative w-12 aspect-square">
                            <img
                              alt="Watch"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="false object-contain"
                              sizes="(max-width: 768px) 100vw"
                              src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F313%2Fwatch.png&amp;w=3840&amp;q=100"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent",
                              }}
                            />
                          </div>
                        </div>
                        <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold capitalize">
                          Watch
                        </h4>
                        <p className="text-body text-sm sm:leading-6 leading-7 text-body text-sm sm:leading-6 leading-7 pb-0.5 truncate">
                          7 Products
                        </p>
                        <div className="absolute top-0 left-0 bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-md"></div>
                        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="text-base text-white transition-all duration-300 ease-in-out transform scale-0 opacity-0 sm:text-xl lg:text-2xl xl:text-3xl group-hover:opacity-100 group-hover:scale-100"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                          </svg>
                        </div>
                      </a>
                    </div>

                    <div
                      className="swiper-slide"
                      style={{ width: "193px", marginRight: "12px" }}
                      data-swiper-slide-index="1">
                      <a
                        className="group flex justify-center text-left rounded-lg px-6 lg:px-8 pt-7 lg:pt-10 pb-5 lg:pb-8 bg-gray-200 flex-col relative"
                        href="/category/watch">
                        <div className="relative inline-flex w-full rounded-md mb-3.5 md:mb-4 lg:mb-5 xl:mb-6">
                          <div className="flex relative w-12 aspect-square">
                            <img
                              alt="Watch"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="false object-contain"
                              sizes="(max-width: 768px) 100vw"
                              src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F313%2Fwatch.png&amp;w=3840&amp;q=100"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent",
                              }}
                            />
                          </div>
                        </div>
                        <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold capitalize">
                          Watch
                        </h4>
                        <p className="text-body text-sm sm:leading-6 leading-7 text-body text-sm sm:leading-6 leading-7 pb-0.5 truncate">
                          7 Products
                        </p>
                        <div className="absolute top-0 left-0 bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-md"></div>
                        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="text-base text-white transition-all duration-300 ease-in-out transform scale-0 opacity-0 sm:text-xl lg:text-2xl xl:text-3xl group-hover:opacity-100 group-hover:scale-100"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div
                      className="swiper-slide"
                      style={{ width: "193px", marginRight: "12px" }}
                      data-swiper-slide-index="1">
                      <a
                        className="group flex justify-center text-left rounded-lg px-6 lg:px-8 pt-7 lg:pt-10 pb-5 lg:pb-8 bg-gray-200 flex-col relative"
                        href="/category/watch">
                        <div className="relative inline-flex w-full rounded-md mb-3.5 md:mb-4 lg:mb-5 xl:mb-6">
                          <div className="flex relative w-12 aspect-square">
                            <img
                              alt="Watch"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="false object-contain"
                              sizes="(max-width: 768px) 100vw"
                              src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F313%2Fwatch.png&amp;w=3840&amp;q=100"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent",
                              }}
                            />
                          </div>
                        </div>
                        <h4 className="text-heading text-sm md:text-base xl:text-lg font-semibold capitalize">
                          Watch
                        </h4>
                        <p className="text-body text-sm sm:leading-6 leading-7 text-body text-sm sm:leading-6 leading-7 pb-0.5 truncate">
                          7 Products
                        </p>
                        <div className="absolute top-0 left-0 bg-black w-full h-full opacity-0 transition-opacity duration-300 group-hover:opacity-30 rounded-md"></div>
                        <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full">
                          <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 512 512"
                            className="text-base text-white transition-all duration-300 ease-in-out transform scale-0 opacity-0 sm:text-xl lg:text-2xl xl:text-3xl group-hover:opacity-100 group-hover:scale-100"
                            height="1em"
                            width="1em"
                            xmlns="http://www.w3.org/2000/svg">
                            <path d="M326.612 185.391c59.747 59.809 58.927 155.698.36 214.59-.11.12-.24.25-.36.37l-67.2 67.2c-59.27 59.27-155.699 59.262-214.96 0-59.27-59.26-59.27-155.7 0-214.96l37.106-37.106c9.84-9.84 26.786-3.3 27.294 10.606.648 17.722 3.826 35.527 9.69 52.721 1.986 5.822.567 12.262-3.783 16.612l-13.087 13.087c-28.026 28.026-28.905 73.66-1.155 101.96 28.024 28.579 74.086 28.749 102.325.51l67.2-67.19c28.191-28.191 28.073-73.757 0-101.83-3.701-3.694-7.429-6.564-10.341-8.569a16.037 16.037 0 0 1-6.947-12.606c-.396-10.567 3.348-21.456 11.698-29.806l21.054-21.055c5.521-5.521 14.182-6.199 20.584-1.731a152.482 152.482 0 0 1 20.522 17.197zM467.547 44.449c-59.261-59.262-155.69-59.27-214.96 0l-67.2 67.2c-.12.12-.25.25-.36.37-58.566 58.892-59.387 154.781.36 214.59a152.454 152.454 0 0 0 20.521 17.196c6.402 4.468 15.064 3.789 20.584-1.731l21.054-21.055c8.35-8.35 12.094-19.239 11.698-29.806a16.037 16.037 0 0 0-6.947-12.606c-2.912-2.005-6.64-4.875-10.341-8.569-28.073-28.073-28.191-73.639 0-101.83l67.2-67.19c28.239-28.239 74.3-28.069 102.325.51 27.75 28.3 26.872 73.934-1.155 101.96l-13.087 13.087c-4.35 4.35-5.769 10.79-3.783 16.612 5.864 17.194 9.042 34.999 9.69 52.721.509 13.906 17.454 20.446 27.294 10.606l37.106-37.106c59.271-59.259 59.271-155.699.001-214.959z"></path>
                          </svg>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
                <div className="absolute z-10 flex items-center w-full top-2/4">
                  <button
                    id="categoriesSlidePrev"
                    aria-label="prev-button"
                    className="-mt-8 md:-mt-10 w-7 h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full text-gray-0 bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none ltr:left-0 rtl:right-0 transform shadow-navigation -translate-x-1/2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                    </svg>
                  </button>
                  <button
                    id="categoriesSlideNext"
                    aria-label="next-button"
                    className="-mt-8 md:-mt-10 w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none ltr:right-0 rtl:left-0 transform shadow-navigation translate-x-1/2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-12 md:mb-14 xl:mb-16">
              <div className="flex items-center justify-between -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
                  Featured Products
                </h3>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-3 md:gap-5 xl:gap-7">
                <div className="col-span-2 lg:row-span-2 col-span-full lg:col-span-2 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden">
                  <div
                    className="flex justify-center items-center p-4 h-full w-full 3xl:min-h-[330px]"
                    title="Nike Comfy Vapor Maxpro">
                    <div className="relative w-[260px] aspect-square w-[620px]">
                      <img
                        alt="Nike Comfy Vapor Maxpro"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw"
                        src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&amp;w=3840&amp;q=75"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col w-full px-4 md:px-5 3xl:px-7 pb-4 md:pb-5 3xl:pb-7 md:justify-between md:items-center md:flex-row 2xl:flex-row lg:items-start 2xl:items-center lg:flex-col"
                    title="Nike Comfy Vapor Maxpro">
                    <div className="ltr:md:pr-2 ltr:lg:pr-0 ltr:2xl:pr-2 rtl:md:pl-2 rtl:lg:pl-0 rtl:2xl:pl-2 overflow-hidden max-w-full">
                      <h2 className="mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg">
                        Nike Comfy Vapor Maxpro
                      </h2>
                      <p className="text-body text-xs md:text-[13px] xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px] lg:max-w-[190px]"></p>
                    </div>
                    <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col justify-end mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5 items-center md:items-end lg:items-start 2xl:items-end ltr:md:text-right rtl:md:text-left ltr:lg:text-left rtl:lg:text-right ltr:xl:text-right rtl:xl:text-left">
                      <div className="text-heading font-segoe font-semibold text-base xl:text-xl 3xl:mt-0.5 ltr:pr-2 ltr:md:pr-0 ltr:lg:pr-2 ltr:2xl:pr-0 rtl:pl-2 rtl:md:pl-0 rtl:lg:pl-2 rtl:2xl:pl-0">
                        $220.00 - $250.00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="col-span-2 lg:row-span-2 col-span-full lg:col-span-2 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden">
                  <div
                    className="flex justify-center items-center p-4 h-full w-full 3xl:min-h-[330px]"
                    title="Nike Comfy Vapor Maxpro">
                    <div className="relative w-[260px] aspect-square w-[620px]">
                      <img
                        alt="Nike Comfy Vapor Maxpro"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw"
                        src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&amp;w=3840&amp;q=75"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col w-full px-4 md:px-5 3xl:px-7 pb-4 md:pb-5 3xl:pb-7 md:justify-between md:items-center md:flex-row 2xl:flex-row lg:items-start 2xl:items-center lg:flex-col"
                    title="Nike Comfy Vapor Maxpro">
                    <div className="ltr:md:pr-2 ltr:lg:pr-0 ltr:2xl:pr-2 rtl:md:pl-2 rtl:lg:pl-0 rtl:2xl:pl-2 overflow-hidden max-w-full">
                      <h2 className="mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg">
                        Nike Comfy Vapor Maxpro
                      </h2>
                      <p className="text-body text-xs md:text-[13px] xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px] lg:max-w-[190px]"></p>
                    </div>
                    <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col justify-end mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5 items-center md:items-end lg:items-start 2xl:items-end ltr:md:text-right rtl:md:text-left ltr:lg:text-left rtl:lg:text-right ltr:xl:text-right rtl:xl:text-left">
                      <div className="text-heading font-segoe font-semibold text-base xl:text-xl 3xl:mt-0.5 ltr:pr-2 ltr:md:pr-0 ltr:lg:pr-2 ltr:2xl:pr-0 rtl:pl-2 rtl:md:pl-0 rtl:lg:pl-2 rtl:2xl:pl-0">
                        $220.00 - $250.00
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-2 lg:row-span-2 col-span-full lg:col-span-2 cursor-pointer group flex flex-col bg-gray-200 rounded-md relative items-center justify-between overflow-hidden">
                  <div
                    className="flex justify-center items-center p-4 h-full w-full 3xl:min-h-[330px]"
                    title="Nike Comfy Vapor Maxpro">
                    <div className="relative w-[260px] aspect-square w-[620px]">
                      <img
                        alt="Nike Comfy Vapor Maxpro"
                        loading="lazy"
                        decoding="async"
                        data-nimg="fill"
                        className="object-cover transition duration-500 ease-in-out transform group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw"
                        src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F321%2FFootwear-1.png&amp;w=3840&amp;q=75"
                        style={{
                          position: "absolute",
                          height: "100%",
                          width: "100%",
                          inset: "0px",
                          color: "transparent",
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="flex flex-col w-full px-4 md:px-5 3xl:px-7 pb-4 md:pb-5 3xl:pb-7 md:justify-between md:items-center md:flex-row 2xl:flex-row lg:items-start 2xl:items-center lg:flex-col"
                    title="Nike Comfy Vapor Maxpro">
                    <div className="ltr:md:pr-2 ltr:lg:pr-0 ltr:2xl:pr-2 rtl:md:pl-2 rtl:lg:pl-0 rtl:2xl:pl-2 overflow-hidden max-w-full">
                      <h2 className="mb-1 text-sm font-semibold truncate text-heading md:text-base xl:text-lg">
                        Nike Comfy Vapor Maxpro
                      </h2>
                      <p className="text-body text-xs md:text-[13px] xl:text-sm leading-normal xl:leading-relaxed truncate max-w-[250px] lg:max-w-[190px]"></p>
                    </div>
                    <div className="flex-shrink-0 flex flex-row-reverse md:flex-col lg:flex-row-reverse 2xl:flex-col justify-end mt-2 md:-mt-0.5 lg:mt-2 2xl:-mt-0.5 items-center md:items-end lg:items-start 2xl:items-end ltr:md:text-right rtl:md:text-left ltr:lg:text-left rtl:lg:text-right ltr:xl:text-right rtl:xl:text-left">
                      <div className="text-heading font-segoe font-semibold text-base xl:text-xl 3xl:mt-0.5 ltr:pr-2 ltr:md:pr-0 ltr:lg:pr-2 ltr:2xl:pr-0 rtl:pl-2 rtl:md:pl-0 rtl:lg:pl-2 rtl:2xl:pl-0">
                        $220.00 - $250.00
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-12 md:mb-14 xl:mb-16 ">
              <div className="flex flex-wrap items-center justify-between mb-5 md:mb-6">
                <div className="flex items-center justify-between -mt-2 lg:-mt-2.5 mb-0">
                  <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
                    Flash Sale
                  </h3>
                </div>
              </div>
              <div className="block">
                <div className="carouselWrapper relative">
                  <div
                    className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
                    dir="ltr">
                    <div
                      className="swiper-wrapper"
                      style={{
                        transform: "translate3d(-1435px, 0px, 0px)",
                        transitionDuration: "0ms",
                      }}>
                      <div
                        className="swiper-slide"
                        style={{ width: "193px", marginRight: "12px" }}
                        data-swiper-slide-index="1">
                        <div
                          className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start bg-white"
                          title="Zara Army Bag">
                          <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 pb-0 aspect-square w-full rounded-md overflow-hidden">
                            <img
                              alt="Zara Army Bag"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="bg-gray-300 object-cover transition duration-150 ease-linear transform group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw"
                              srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=3840&amp;q=100"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0">
                            <h2 className="text-heading font-semibold truncate mb-1 md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">
                              Zara Army Bag
                            </h2>
                            <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
                              <span className="inline-block">$260.00</span>
                              <del className="font-normal text-gray-800 sm:text-base ltr:pl-1 rtl:pr-1">
                                $300.00
                              </del>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="swiper-slide"
                        style={{ width: "193px", marginRight: "12px" }}
                        data-swiper-slide-index="1">
                        <div
                          className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start bg-white"
                          title="Zara Army Bag">
                          <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 pb-0 aspect-square w-full rounded-md overflow-hidden">
                            <img
                              alt="Zara Army Bag"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="bg-gray-300 object-cover transition duration-150 ease-linear transform group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw"
                              srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=3840&amp;q=100"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0">
                            <h2 className="text-heading font-semibold truncate mb-1 md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">
                              Zara Army Bag
                            </h2>
                            <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
                              <span className="inline-block">$260.00</span>
                              <del className="font-normal text-gray-800 sm:text-base ltr:pl-1 rtl:pr-1">
                                $300.00
                              </del>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="swiper-slide"
                        style={{ width: "193px", marginRight: "12px" }}
                        data-swiper-slide-index="1">
                        <div
                          className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start bg-white"
                          title="Zara Army Bag">
                          <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 pb-0 aspect-square w-full rounded-md overflow-hidden">
                            <img
                              alt="Zara Army Bag"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="bg-gray-300 object-cover transition duration-150 ease-linear transform group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw"
                              srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=3840&amp;q=100"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0">
                            <h2 className="text-heading font-semibold truncate mb-1 md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">
                              Zara Army Bag
                            </h2>
                            <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
                              <span className="inline-block">$260.00</span>
                              <del className="font-normal text-gray-800 sm:text-base ltr:pl-1 rtl:pr-1">
                                $300.00
                              </del>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="swiper-slide"
                        style={{ width: "193px", marginRight: "12px" }}
                        data-swiper-slide-index="1">
                        <div
                          className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 md:pb-1 flex-col items-start bg-white"
                          title="Zara Army Bag">
                          <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 pb-0 aspect-square w-full rounded-md overflow-hidden">
                            <img
                              alt="Zara Army Bag"
                              loading="lazy"
                              decoding="async"
                              data-nimg="fill"
                              className="bg-gray-300 object-cover transition duration-150 ease-linear transform group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw"
                              srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=3840&amp;q=100 3840w"
                              src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2F10.png&amp;w=3840&amp;q=100"
                              style={{
                                position: "absolute",
                                height: "100%",
                                width: "100%",
                                inset: "0px",
                                color: "transparent",
                              }}
                            />
                          </div>
                          <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0">
                            <h2 className="text-heading font-semibold truncate mb-1 md:mb-1.5 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg">
                              Zara Army Bag
                            </h2>
                            <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
                              <span className="inline-block">$260.00</span>
                              <del className="font-normal text-gray-800 sm:text-base ltr:pl-1 rtl:pr-1">
                                $300.00
                              </del>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute z-10 flex items-center w-full top-2/4">
                    <button
                      id="flashSellSlidePrev"
                      aria-label="prev-button"
                      className="-mt-8 md:-mt-10 w-7 h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full text-gray-0 bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none ltr:left-0 rtl:right-0 transform shadow-navigation -translate-x-1/2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                      </svg>
                    </button>
                    <button
                      id="flashSellSlideNext"
                      aria-label="next-button"
                      className="-mt-8 md:-mt-10 w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none ltr:right-0 rtl:left-0 transform shadow-navigation translate-x-1/2">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto w-full mb-12 md:mb-14 xl:mb-16 pb-0.5 md:pb-0 lg:pb-1 xl:pb-0 md:-mt-2.5">
              <a
                className="group flex justify-center relative overflow-hidden w-full md:aspect-[2.9/1] aspect-[2/1]"
                href="/collections/winter-collection">
                <img
                  alt="Winter Collection of Kid Items"
                  fetchPriority="high"
                  decoding="async"
                  data-nimg="fill"
                  className="bg-gray-300 object-cover w-full sm:hidden rounded-md"
                  sizes="(max-width: 768px) 100vw"
                  src="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-mobile-8.jpg&amp;w=3840&amp;q=100"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
                <img
                  alt="Winter Collection of Kid Items"
                  fetchPriority="high"
                  decoding="async"
                  data-nimg="fill"
                  className="bg-gray-300 object-cover w-full hidden sm:block rounded-md"
                  sizes="(max-width: 768px) 100vw"
                  srcSet="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-8.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-8.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-8.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-8.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-8.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-8.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-8.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-8.jpg&amp;w=3840&amp;q=100 3840w"
                  src="/_next/image?url=%2Fassets%2Fimages%2Fbanner%2Fbanner-8.jpg&amp;w=3840&amp;q=100"
                  style={{
                    position: "absolute",
                    height: "100%",
                    width: "100%",
                    inset: "0px",
                    color: "transparent",
                  }}
                />
              </a>
            </div>

            <div className="mb-12 md:mb-14 xl:mb-16">
              <div className="flex items-center justify-between -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
                  Top Brands
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-4 2xl:grid-cols-6 gap-2.5 md:gap-3 lg:gap-5 xl:gap-7">
                <a
                  className="relative flex justify-center overflow-hidden text-center rounded-md group"
                  href="/search?brand=hm-trades">
                  <img
                    alt="HM trades"
                    loading="lazy"
                    width="428"
                    height="428"
                    decoding="async"
                    data-nimg="1"
                    className="object-cover transition-transform duration-500 ease-in-out transform rounded-md group-hover:rotate-6 group-hover:scale-125"
                    srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F269%2Fh%2526m.png&amp;w=640&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F269%2Fh%2526m.png&amp;w=1080&amp;q=75 2x"
                    src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F269%2Fh%2526m.png&amp;w=1080&amp;q=75"
                    style={{ color: "transparent" }}
                  />
                  <div className="absolute w-full h-full transition-opacity duration-500 bg-black opacity-50 top left group-hover:opacity-80"></div>
                  <div className="absolute flex items-center justify-center w-full h-full p-8 top left">
                    <img
                      src="https://chawkbazarlaravel.s3.ap-southeast-1.amazonaws.com/271/logo16.png"
                      alt="HM trades"
                      className="flex-shrink-0"
                    />
                  </div>
                </a>
                {/* Repeat the above structure for other brand links */}
              </div>
            </div>
            <div className="mb-12 md:mb-14 xl:mb-16">
              <div className="flex items-center justify-between -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
                  Top Products
                </h3>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 md:gap-5 xl:gap-7 xl:-mt-1.5 2xl:mt-0">
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer flex-row items-center transition-transform ease-linear bg-gray-200 ltr:pr-2 ltr:lg:pr-3 ltr:2xl:pr-4 rtl:pl-2 rtl:lg:pl-3 rtl:2xl:pl-4"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md aspect-square flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover ltr:rounded-l-md rtl:rounded-r-md transition duration-200 ease-linear transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-3.5 ltr:sm:pl-5 ltr:md:pl-4 ltr:xl:pl-5 ltr:2xl:pl-6 ltr:3xl:pl-10 rtl:pr-3.5 rtl:sm:pr-5 rtl:md:pr-4 rtl:xl:pr-5 rtl:2xl:pr-6 rtl:3xl:pr-10">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer flex-row items-center transition-transform ease-linear bg-gray-200 ltr:pr-2 ltr:lg:pr-3 ltr:2xl:pr-4 rtl:pl-2 rtl:lg:pl-3 rtl:2xl:pl-4"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md aspect-square flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover ltr:rounded-l-md rtl:rounded-r-md transition duration-200 ease-linear transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-3.5 ltr:sm:pl-5 ltr:md:pl-4 ltr:xl:pl-5 ltr:2xl:pl-6 ltr:3xl:pl-10 rtl:pr-3.5 rtl:sm:pr-5 rtl:md:pr-4 rtl:xl:pr-5 rtl:2xl:pr-6 rtl:3xl:pr-10">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer flex-row items-center transition-transform ease-linear bg-gray-200 ltr:pr-2 ltr:lg:pr-3 ltr:2xl:pr-4 rtl:pl-2 rtl:lg:pl-3 rtl:2xl:pl-4"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md aspect-square flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover ltr:rounded-l-md rtl:rounded-r-md transition duration-200 ease-linear transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-3.5 ltr:sm:pl-5 ltr:md:pl-4 ltr:xl:pl-5 ltr:2xl:pl-6 ltr:3xl:pl-10 rtl:pr-3.5 rtl:sm:pr-5 rtl:md:pr-4 rtl:xl:pr-5 rtl:2xl:pr-6 rtl:3xl:pr-10">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer flex-row items-center transition-transform ease-linear bg-gray-200 ltr:pr-2 ltr:lg:pr-3 ltr:2xl:pr-4 rtl:pl-2 rtl:lg:pl-3 rtl:2xl:pl-4"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md aspect-square flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover ltr:rounded-l-md rtl:rounded-r-md transition duration-200 ease-linear transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-3.5 ltr:sm:pl-5 ltr:md:pl-4 ltr:xl:pl-5 ltr:2xl:pl-6 ltr:3xl:pl-10 rtl:pr-3.5 rtl:sm:pr-5 rtl:md:pr-4 rtl:xl:pr-5 rtl:2xl:pr-6 rtl:3xl:pr-10">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer flex-row items-center transition-transform ease-linear bg-gray-200 ltr:pr-2 ltr:lg:pr-3 ltr:2xl:pr-4 rtl:pl-2 rtl:lg:pl-3 rtl:2xl:pl-4"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md aspect-square flex-shrink-0 w-32 sm:w-44 md:w-40 lg:w-52 2xl:w-56 3xl:w-64">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover ltr:rounded-l-md rtl:rounded-r-md transition duration-200 ease-linear transform group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-3.5 ltr:sm:pl-5 ltr:md:pl-4 ltr:xl:pl-5 ltr:2xl:pl-6 ltr:3xl:pl-10 rtl:pr-3.5 rtl:sm:pr-5 rtl:md:pr-4 rtl:xl:pr-5 rtl:2xl:pr-6 rtl:3xl:pr-10">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm sm:text-base md:text-sm lg:text-base xl:text-lg md:mb-1.5">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse sm:text-lg md:text-base 3xl:text-xl md:mt-2.5 2xl:mt-3">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-md overflow-hidden lg:block mb-12 md:mb-14 xl:mb-16">
              <div className="flex justify-between">
                {/* Women Exclusive */}
                <div className="group w-2/4 flex justify-between items-end relative transition duration-200 ease-in bg-gray-150">
                  <div className="relative z-10 flex transition duration-200 ease-in transform exclusiveImage group-hover:scale-105">
                    <img
                      alt="button-women-exclusive"
                      fetchPriority="high"
                      width="600"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fwomen.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fwomen.png&amp;w=1200&amp;q=75 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fwomen.png&amp;w=1200&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <a
                    className="absolute z-10 bottom-3 sm:bottom-5 xl:bottom-7 inline-block bg-white shadow-product rounded-md text-heading lowercase text-sm xl:text-xl 2xl:text-xl sm:uppercase px-3 sm:px-5 xl:px-6 2xl:px-8 py-2.5 sm:py-4 xl:py-5 2xl:py-7 transform transition duration-300 ease-in-out hover:bg-heading hover:text-white ltr:right-3 ltr:sm:right-5 ltr:xl:right-7 rtl:left-3 rtl:sm:left-5 rtl:xl:left-7"
                    href="/collections/womens-collection">
                    #women exclusive
                  </a>
                  <div className="z-0 absolute top-10 xl:top-12 2xl:top-16 3xl:top-24 uppercase text-black opacity-10 text-xl xl:text-2xl 3xl:text-3xl tracking-widest leading-5 ltr:right-5 ltr:xl:right-7 rtl:left-5 rtl:xl:left-7">
                    New Year
                  </div>
                  <div className="exclusiveYear absolute top-16 xl:top-20 2xl:top-24 3xl:top-32 ltr:left-0 rtl:right-0 z-10 text-black font-bold leading-none tracking-widest ltr:text-right rtl:text-left ltr:right-0 rtl:left-0">
                    20
                  </div>
                </div>

                {/* Men Exclusive */}
                <div className="group w-2/4 flex justify-between items-end relative transition duration-200 ease-in flex-row-reverse bg-linenSecondary">
                  <div className="relative z-10 flex transition duration-200 ease-in transform exclusiveImage group-hover:scale-105">
                    <img
                      alt="button-men-exclusive"
                      fetchPriority="high"
                      width="600"
                      height="600"
                      decoding="async"
                      data-nimg="1"
                      srcSet="/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fmen.png&amp;w=640&amp;q=75 1x, /_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fmen.png&amp;w=1200&amp;q=75 2x"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fexclusive%2Fmen.png&amp;w=1200&amp;q=75"
                      style={{ color: "transparent" }}
                    />
                  </div>
                  <a
                    className="absolute z-10 bottom-3 sm:bottom-5 xl:bottom-7 inline-block bg-white shadow-product rounded-md text-heading lowercase text-sm xl:text-xl 2xl:text-xl sm:uppercase px-3 sm:px-5 xl:px-6 2xl:px-8 py-2.5 sm:py-4 xl:py-5 2xl:py-7 transform transition duration-300 ease-in-out hover:bg-heading hover:text-white ltr:left-3 ltr:sm:left-5 ltr:xl:left-7 rtl:right-3 rtl:sm:right-5 rtl:xl:right-7"
                    href="/collections/mens-collection">
                    #men exclusive
                  </a>
                  <div className="z-0 absolute top-10 xl:top-12 2xl:top-16 3xl:top-24 uppercase text-black opacity-10 text-xl xl:text-2xl 3xl:text-3xl tracking-widest leading-5 ltr:left-5 ltr:xl:left-7 rtl:right-5 rtl:xl:right-7">
                    Exclusive
                  </div>
                  <div className="exclusiveYear absolute top-16 xl:top-20 2xl:top-24 3xl:top-32 ltr:left-0 rtl:right-0 z-10 text-black font-bold leading-none tracking-widest ltr:text-left rtl:text-right pl-4 ltr:left-0 rtl:right-0">
                    21
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-9 md:mb-9 lg:mb-10 xl:mb-12">
              <div className="flex items-center justify-between -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
                  New Arrivals
                </h3>
              </div>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-x-3 md:gap-x-5 xl:gap-x-7 gap-y-3 xl:gap-y-5 2xl:gap-y-8">
                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 w-full aspect-[17/22]">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse 3xl:text-lg lg:mt-2.5">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 w-full aspect-[17/22]">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse 3xl:text-lg lg:mt-2.5">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 w-full aspect-[17/22]">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse 3xl:text-lg lg:mt-2.5">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 w-full aspect-[17/22]">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse 3xl:text-lg lg:mt-2.5">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 w-full aspect-[17/22]">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse 3xl:text-lg lg:mt-2.5">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 w-full aspect-[17/22]">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse 3xl:text-lg lg:mt-2.5">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 w-full aspect-[17/22]">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse 3xl:text-lg lg:mt-2.5">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 w-full aspect-[17/22]">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse 3xl:text-lg lg:mt-2.5">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>

                <div
                  className="group box-border overflow-hidden flex rounded-md cursor-pointer ltr:pr-0 rtl:pl-0 pb-2 lg:pb-3 flex-col items-start bg-white transition duration-200 ease-in-out transform hover:-translate-y-1 hover:md:-translate-y-1.5 hover:shadow-product"
                  title="Zara Monte Carlo">
                  <div className="flex relative ltr:rounded-l-md rtl:rounded-r-md mb-3 md:mb-3.5 w-full aspect-[17/22]">
                    <img
                      alt="Zara Monte Carlo"
                      loading="lazy"
                      decoding="async"
                      data-nimg="fill"
                      className="bg-gray-300 object-cover rounded-md transition duration-200 ease-in group-hover:rounded-b-none"
                      sizes="(max-width: 768px) 100vw"
                      srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=640&amp;q=100 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=750&amp;q=100 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=828&amp;q=100 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1080&amp;q=100 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1200&amp;q=100 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=1920&amp;q=100 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=2048&amp;q=100 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100 3840w"
                      src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F236%2Fkids-1.jpg&amp;w=3840&amp;q=100"
                      style={{
                        position: "absolute",
                        height: "100%",
                        width: "100%",
                        inset: "0px",
                        color: "transparent",
                      }}
                    />
                  </div>
                  <div className="w-full overflow-hidden ltr:pl-0 rtl:pr-0 ltr:lg:pl-2.5 ltr:xl:pl-4 rtl:lg:pr-2.5 rtl:xl:pr-4 ltr:pr-2.5 ltr:xl:pr-4 rtl:pl-2.5 rtl:xl:pl-4">
                    <h2 className="text-heading font-semibold truncate mb-1 text-sm md:text-base">
                      Zara Monte Carlo
                    </h2>
                    <div className="text-heading font-semibold text-sm sm:text-base mt-1.5 space-x-1 rtl:space-x-reverse 3xl:text-lg lg:mt-2.5">
                      <span className="inline-block">$80.00</span>
                      <span> - </span>
                      <span className="inline-block">$100.00</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="heightFull mb-10 md:mb-12 xl:mb-14 md:pb-1 xl:pb-0">
              <div className="flex items-center justify-between -mt-2 lg:-mt-2.5 pb-0.5 mb-4 md:mb-5 lg:mb-6 2xl:mb-7 3xl:mb-8">
                <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold">
                  Testimonial
                </h3>
              </div>
              <div className="carouselWrapper relative testimonial-carousel ">
                <div
                  className="swiper swiper-initialized swiper-horizontal swiper-backface-hidden"
                  dir="ltr">
                  <div className="swiper-wrapper transform -translate-x-1990 transition-transform duration-0">
                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ width: "398px" }}
                      data-swiper-slide-index={1}>
                      <div className="bg-gray-200 rounded-md p-6 md:p-8 lg:p-6 xl:p-8 transition duration-300 ease-in-out mx-auto md:mx-0">
                        <div className="w-[90px]">
                          <img
                            src="/assets/images/testimonials/2.jpg"
                            alt="Jiniya Snow"
                            className="rounded-full border-[5px] border-white shadow-avatar"
                          />
                        </div>
                        <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold 2xl:text-2xl mt-4 xl:mt-7">
                          Jiniya Snow
                        </h3>
                        <div className="inline-grid grid-cols-5 gap-1.5 mt-3 lg:mt-5">
                          {[...Array(3)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.5px"
                              height="16px"
                              viewBox="0 0 16.696 16"
                              className="">
                              <path
                                id="star"
                                d="M16.652,6.538a.886.886,0,0,0-.764-.61L11.07,5.49,9.164,1.03a.887.887,0,0,0-1.632,0L5.627,5.49l-4.82.438A.888.888,0,0,0,.3,7.48l3.642,3.194L2.872,15.406a.886.886,0,0,0,1.32.959L8.348,13.88,12.5,16.365a.887.887,0,0,0,1.32-.959L12.75,10.675l3.642-3.194a.888.888,0,0,0,.26-.943Zm0,0"
                                transform="translate(0 -0.491)"
                                fill={index < 3 ? "#FFC107" : "#e6e6e6"}></path>
                            </svg>
                          ))}
                        </div>
                        <p className="text-body text-sm sm:leading-6 leading-7 text-sm sm:leading-7 lg:text-base lg:leading-[1.625rem] mt-5 xl:mt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="18px"
                            viewBox="0 0 24.194 18"
                            className="mb-3 xl:mb-4">
                            <g
                              data-name="Group 3264"
                              transform="translate(0 0)">
                              <g data-name="Group 3263">
                                <path
                                  data-name="Path 3140"
                                  d="M228.223,57.633l-.776-3.715c-5.589.267-9.463,2.687-9.463,9.806v8.194h9.764v-10.3h-3.7C224.05,59.335,225.427,57.992,228.223,57.633Z"
                                  transform="translate(-204.029 -53.918)"
                                  fill="#efefef"></path>
                                <path
                                  data-name="Path 3141"
                                  d="M10.239,57.633l-.776-3.715C3.874,54.185,0,56.605,0,63.724v8.194H9.764v-10.3h-3.7C6.064,59.335,7.441,57.992,10.239,57.633Z"
                                  transform="translate(0 -53.918)"
                                  fill="#efefef"></path>
                              </g>
                            </g>
                          </svg>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex.
                        </p>
                      </div>
                    </div>

                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ width: "398px" }}
                      data-swiper-slide-index={1}>
                      <div className="bg-gray-200 rounded-md p-6 md:p-8 lg:p-6 xl:p-8 transition duration-300 ease-in-out mx-auto md:mx-0">
                        <div className="w-[90px]">
                          <img
                            src="/assets/images/testimonials/2.jpg"
                            alt="Jiniya Snow"
                            className="rounded-full border-[5px] border-white shadow-avatar"
                          />
                        </div>
                        <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold 2xl:text-2xl mt-4 xl:mt-7">
                          Jiniya Snow
                        </h3>
                        <div className="inline-grid grid-cols-5 gap-1.5 mt-3 lg:mt-5">
                          {[...Array(3)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.5px"
                              height="16px"
                              viewBox="0 0 16.696 16"
                              className="">
                              <path
                                id="star"
                                d="M16.652,6.538a.886.886,0,0,0-.764-.61L11.07,5.49,9.164,1.03a.887.887,0,0,0-1.632,0L5.627,5.49l-4.82.438A.888.888,0,0,0,.3,7.48l3.642,3.194L2.872,15.406a.886.886,0,0,0,1.32.959L8.348,13.88,12.5,16.365a.887.887,0,0,0,1.32-.959L12.75,10.675l3.642-3.194a.888.888,0,0,0,.26-.943Zm0,0"
                                transform="translate(0 -0.491)"
                                fill={index < 3 ? "#FFC107" : "#e6e6e6"}></path>
                            </svg>
                          ))}
                        </div>
                        <p className="text-body text-sm sm:leading-6 leading-7 text-sm sm:leading-7 lg:text-base lg:leading-[1.625rem] mt-5 xl:mt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="18px"
                            viewBox="0 0 24.194 18"
                            className="mb-3 xl:mb-4">
                            <g
                              data-name="Group 3264"
                              transform="translate(0 0)">
                              <g data-name="Group 3263">
                                <path
                                  data-name="Path 3140"
                                  d="M228.223,57.633l-.776-3.715c-5.589.267-9.463,2.687-9.463,9.806v8.194h9.764v-10.3h-3.7C224.05,59.335,225.427,57.992,228.223,57.633Z"
                                  transform="translate(-204.029 -53.918)"
                                  fill="#efefef"></path>
                                <path
                                  data-name="Path 3141"
                                  d="M10.239,57.633l-.776-3.715C3.874,54.185,0,56.605,0,63.724v8.194H9.764v-10.3h-3.7C6.064,59.335,7.441,57.992,10.239,57.633Z"
                                  transform="translate(0 -53.918)"
                                  fill="#efefef"></path>
                              </g>
                            </g>
                          </svg>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex.
                        </p>
                      </div>
                    </div>

                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ width: "398px" }}
                      data-swiper-slide-index={1}>
                      <div className="bg-gray-200 rounded-md p-6 md:p-8 lg:p-6 xl:p-8 transition duration-300 ease-in-out mx-auto md:mx-0">
                        <div className="w-[90px]">
                          <img
                            src="/assets/images/testimonials/2.jpg"
                            alt="Jiniya Snow"
                            className="rounded-full border-[5px] border-white shadow-avatar"
                          />
                        </div>
                        <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold 2xl:text-2xl mt-4 xl:mt-7">
                          Jiniya Snow
                        </h3>
                        <div className="inline-grid grid-cols-5 gap-1.5 mt-3 lg:mt-5">
                          {[...Array(3)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.5px"
                              height="16px"
                              viewBox="0 0 16.696 16"
                              className="">
                              <path
                                id="star"
                                d="M16.652,6.538a.886.886,0,0,0-.764-.61L11.07,5.49,9.164,1.03a.887.887,0,0,0-1.632,0L5.627,5.49l-4.82.438A.888.888,0,0,0,.3,7.48l3.642,3.194L2.872,15.406a.886.886,0,0,0,1.32.959L8.348,13.88,12.5,16.365a.887.887,0,0,0,1.32-.959L12.75,10.675l3.642-3.194a.888.888,0,0,0,.26-.943Zm0,0"
                                transform="translate(0 -0.491)"
                                fill={index < 3 ? "#FFC107" : "#e6e6e6"}></path>
                            </svg>
                          ))}
                        </div>
                        <p className="text-body text-sm sm:leading-6 leading-7 text-sm sm:leading-7 lg:text-base lg:leading-[1.625rem] mt-5 xl:mt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="18px"
                            viewBox="0 0 24.194 18"
                            className="mb-3 xl:mb-4">
                            <g
                              data-name="Group 3264"
                              transform="translate(0 0)">
                              <g data-name="Group 3263">
                                <path
                                  data-name="Path 3140"
                                  d="M228.223,57.633l-.776-3.715c-5.589.267-9.463,2.687-9.463,9.806v8.194h9.764v-10.3h-3.7C224.05,59.335,225.427,57.992,228.223,57.633Z"
                                  transform="translate(-204.029 -53.918)"
                                  fill="#efefef"></path>
                                <path
                                  data-name="Path 3141"
                                  d="M10.239,57.633l-.776-3.715C3.874,54.185,0,56.605,0,63.724v8.194H9.764v-10.3h-3.7C6.064,59.335,7.441,57.992,10.239,57.633Z"
                                  transform="translate(0 -53.918)"
                                  fill="#efefef"></path>
                              </g>
                            </g>
                          </svg>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex.
                        </p>
                      </div>
                    </div>

                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ width: "398px" }}
                      data-swiper-slide-index={1}>
                      <div className="bg-gray-200 rounded-md p-6 md:p-8 lg:p-6 xl:p-8 transition duration-300 ease-in-out mx-auto md:mx-0">
                        <div className="w-[90px]">
                          <img
                            src="/assets/images/testimonials/2.jpg"
                            alt="Jiniya Snow"
                            className="rounded-full border-[5px] border-white shadow-avatar"
                          />
                        </div>
                        <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold 2xl:text-2xl mt-4 xl:mt-7">
                          Jiniya Snow
                        </h3>
                        <div className="inline-grid grid-cols-5 gap-1.5 mt-3 lg:mt-5">
                          {[...Array(3)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.5px"
                              height="16px"
                              viewBox="0 0 16.696 16"
                              className="">
                              <path
                                id="star"
                                d="M16.652,6.538a.886.886,0,0,0-.764-.61L11.07,5.49,9.164,1.03a.887.887,0,0,0-1.632,0L5.627,5.49l-4.82.438A.888.888,0,0,0,.3,7.48l3.642,3.194L2.872,15.406a.886.886,0,0,0,1.32.959L8.348,13.88,12.5,16.365a.887.887,0,0,0,1.32-.959L12.75,10.675l3.642-3.194a.888.888,0,0,0,.26-.943Zm0,0"
                                transform="translate(0 -0.491)"
                                fill={index < 3 ? "#FFC107" : "#e6e6e6"}></path>
                            </svg>
                          ))}
                        </div>
                        <p className="text-body text-sm sm:leading-6 leading-7 text-sm sm:leading-7 lg:text-base lg:leading-[1.625rem] mt-5 xl:mt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="18px"
                            viewBox="0 0 24.194 18"
                            className="mb-3 xl:mb-4">
                            <g
                              data-name="Group 3264"
                              transform="translate(0 0)">
                              <g data-name="Group 3263">
                                <path
                                  data-name="Path 3140"
                                  d="M228.223,57.633l-.776-3.715c-5.589.267-9.463,2.687-9.463,9.806v8.194h9.764v-10.3h-3.7C224.05,59.335,225.427,57.992,228.223,57.633Z"
                                  transform="translate(-204.029 -53.918)"
                                  fill="#efefef"></path>
                                <path
                                  data-name="Path 3141"
                                  d="M10.239,57.633l-.776-3.715C3.874,54.185,0,56.605,0,63.724v8.194H9.764v-10.3h-3.7C6.064,59.335,7.441,57.992,10.239,57.633Z"
                                  transform="translate(0 -53.918)"
                                  fill="#efefef"></path>
                              </g>
                            </g>
                          </svg>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex.
                        </p>
                      </div>
                    </div>

                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ width: "398px" }}
                      data-swiper-slide-index={1}>
                      <div className="bg-gray-200 rounded-md p-6 md:p-8 lg:p-6 xl:p-8 transition duration-300 ease-in-out mx-auto md:mx-0">
                        <div className="w-[90px]">
                          <img
                            src="/assets/images/testimonials/2.jpg"
                            alt="Jiniya Snow"
                            className="rounded-full border-[5px] border-white shadow-avatar"
                          />
                        </div>
                        <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold 2xl:text-2xl mt-4 xl:mt-7">
                          Jiniya Snow
                        </h3>
                        <div className="inline-grid grid-cols-5 gap-1.5 mt-3 lg:mt-5">
                          {[...Array(3)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.5px"
                              height="16px"
                              viewBox="0 0 16.696 16"
                              className="">
                              <path
                                id="star"
                                d="M16.652,6.538a.886.886,0,0,0-.764-.61L11.07,5.49,9.164,1.03a.887.887,0,0,0-1.632,0L5.627,5.49l-4.82.438A.888.888,0,0,0,.3,7.48l3.642,3.194L2.872,15.406a.886.886,0,0,0,1.32.959L8.348,13.88,12.5,16.365a.887.887,0,0,0,1.32-.959L12.75,10.675l3.642-3.194a.888.888,0,0,0,.26-.943Zm0,0"
                                transform="translate(0 -0.491)"
                                fill={index < 3 ? "#FFC107" : "#e6e6e6"}></path>
                            </svg>
                          ))}
                        </div>
                        <p className="text-body text-sm sm:leading-6 leading-7 text-sm sm:leading-7 lg:text-base lg:leading-[1.625rem] mt-5 xl:mt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="18px"
                            viewBox="0 0 24.194 18"
                            className="mb-3 xl:mb-4">
                            <g
                              data-name="Group 3264"
                              transform="translate(0 0)">
                              <g data-name="Group 3263">
                                <path
                                  data-name="Path 3140"
                                  d="M228.223,57.633l-.776-3.715c-5.589.267-9.463,2.687-9.463,9.806v8.194h9.764v-10.3h-3.7C224.05,59.335,225.427,57.992,228.223,57.633Z"
                                  transform="translate(-204.029 -53.918)"
                                  fill="#efefef"></path>
                                <path
                                  data-name="Path 3141"
                                  d="M10.239,57.633l-.776-3.715C3.874,54.185,0,56.605,0,63.724v8.194H9.764v-10.3h-3.7C6.064,59.335,7.441,57.992,10.239,57.633Z"
                                  transform="translate(0 -53.918)"
                                  fill="#efefef"></path>
                              </g>
                            </g>
                          </svg>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex.
                        </p>
                      </div>
                    </div>

                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ width: "398px" }}
                      data-swiper-slide-index={1}>
                      <div className="bg-gray-200 rounded-md p-6 md:p-8 lg:p-6 xl:p-8 transition duration-300 ease-in-out mx-auto md:mx-0">
                        <div className="w-[90px]">
                          <img
                            src="/assets/images/testimonials/2.jpg"
                            alt="Jiniya Snow"
                            className="rounded-full border-[5px] border-white shadow-avatar"
                          />
                        </div>
                        <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold 2xl:text-2xl mt-4 xl:mt-7">
                          Jiniya Snow
                        </h3>
                        <div className="inline-grid grid-cols-5 gap-1.5 mt-3 lg:mt-5">
                          {[...Array(3)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.5px"
                              height="16px"
                              viewBox="0 0 16.696 16"
                              className="">
                              <path
                                id="star"
                                d="M16.652,6.538a.886.886,0,0,0-.764-.61L11.07,5.49,9.164,1.03a.887.887,0,0,0-1.632,0L5.627,5.49l-4.82.438A.888.888,0,0,0,.3,7.48l3.642,3.194L2.872,15.406a.886.886,0,0,0,1.32.959L8.348,13.88,12.5,16.365a.887.887,0,0,0,1.32-.959L12.75,10.675l3.642-3.194a.888.888,0,0,0,.26-.943Zm0,0"
                                transform="translate(0 -0.491)"
                                fill={index < 3 ? "#FFC107" : "#e6e6e6"}></path>
                            </svg>
                          ))}
                        </div>
                        <p className="text-body text-sm sm:leading-6 leading-7 text-sm sm:leading-7 lg:text-base lg:leading-[1.625rem] mt-5 xl:mt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="18px"
                            viewBox="0 0 24.194 18"
                            className="mb-3 xl:mb-4">
                            <g
                              data-name="Group 3264"
                              transform="translate(0 0)">
                              <g data-name="Group 3263">
                                <path
                                  data-name="Path 3140"
                                  d="M228.223,57.633l-.776-3.715c-5.589.267-9.463,2.687-9.463,9.806v8.194h9.764v-10.3h-3.7C224.05,59.335,225.427,57.992,228.223,57.633Z"
                                  transform="translate(-204.029 -53.918)"
                                  fill="#efefef"></path>
                                <path
                                  data-name="Path 3141"
                                  d="M10.239,57.633l-.776-3.715C3.874,54.185,0,56.605,0,63.724v8.194H9.764v-10.3h-3.7C6.064,59.335,7.441,57.992,10.239,57.633Z"
                                  transform="translate(0 -53.918)"
                                  fill="#efefef"></path>
                              </g>
                            </g>
                          </svg>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex.
                        </p>
                      </div>
                    </div>

                    <div
                      className="swiper-slide swiper-slide-next"
                      style={{ width: "398px" }}
                      data-swiper-slide-index={1}>
                      <div className="bg-gray-200 rounded-md p-6 md:p-8 lg:p-6 xl:p-8 transition duration-300 ease-in-out mx-auto md:mx-0">
                        <div className="w-[90px]">
                          <img
                            src="/assets/images/testimonials/2.jpg"
                            alt="Jiniya Snow"
                            className="rounded-full border-[5px] border-white shadow-avatar"
                          />
                        </div>
                        <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold 2xl:text-2xl mt-4 xl:mt-7">
                          Jiniya Snow
                        </h3>
                        <div className="inline-grid grid-cols-5 gap-1.5 mt-3 lg:mt-5">
                          {[...Array(3)].map((_, index) => (
                            <svg
                              key={index}
                              xmlns="http://www.w3.org/2000/svg"
                              width="16.5px"
                              height="16px"
                              viewBox="0 0 16.696 16"
                              className="">
                              <path
                                id="star"
                                d="M16.652,6.538a.886.886,0,0,0-.764-.61L11.07,5.49,9.164,1.03a.887.887,0,0,0-1.632,0L5.627,5.49l-4.82.438A.888.888,0,0,0,.3,7.48l3.642,3.194L2.872,15.406a.886.886,0,0,0,1.32.959L8.348,13.88,12.5,16.365a.887.887,0,0,0,1.32-.959L12.75,10.675l3.642-3.194a.888.888,0,0,0,.26-.943Zm0,0"
                                transform="translate(0 -0.491)"
                                fill={index < 3 ? "#FFC107" : "#e6e6e6"}></path>
                            </svg>
                          ))}
                        </div>
                        <p className="text-body text-sm sm:leading-6 leading-7 text-sm sm:leading-7 lg:text-base lg:leading-[1.625rem] mt-5 xl:mt-7">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="24px"
                            height="18px"
                            viewBox="0 0 24.194 18"
                            className="mb-3 xl:mb-4">
                            <g
                              data-name="Group 3264"
                              transform="translate(0 0)">
                              <g data-name="Group 3263">
                                <path
                                  data-name="Path 3140"
                                  d="M228.223,57.633l-.776-3.715c-5.589.267-9.463,2.687-9.463,9.806v8.194h9.764v-10.3h-3.7C224.05,59.335,225.427,57.992,228.223,57.633Z"
                                  transform="translate(-204.029 -53.918)"
                                  fill="#efefef"></path>
                                <path
                                  data-name="Path 3141"
                                  d="M10.239,57.633l-.776-3.715C3.874,54.185,0,56.605,0,63.724v8.194H9.764v-10.3h-3.7C6.064,59.335,7.441,57.992,10.239,57.633Z"
                                  transform="translate(0 -53.918)"
                                  fill="#efefef"></path>
                              </g>
                            </g>
                          </svg>
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod tempor incididunt ut labore et
                          dolore magna aliqua. Ut enim ad minim veniam, quis
                          nostrud exercitation ullamco laboris nisi ut aliquip
                          ex.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-scrollbar swiper-scrollbar-horizontal">
                    <div className="swiper-scrollbar-drag transform translate-x-0 translate-y-0 translate-z-0 width-65 transition-transform duration-0"></div>
                  </div>
                </div>
                <div className="absolute z-10 flex items-center w-full top-2/4">
                  <button
                    id=""
                    aria-label="prev-button"
                    className="hidden w-7 h-7 md:w-7 md:h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full text-gray-0 bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none ltr:left-0 rtl:right-0 transform shadow-navigation -translate-x-1/2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M217.9 256L345 129c9.4-9.4 9.4-24.6 0-33.9-9.4-9.4-24.6-9.3-34 0L167 239c-9.1 9.1-9.3 23.7-.7 33.1L310.9 417c4.7 4.7 10.9 7 17 7s12.3-2.3 17-7c9.4-9.4 9.4-24.6 0-33.9L217.9 256z"></path>
                    </svg>
                  </button>
                  <button
                    id=""
                    aria-label="next-button"
                    className="hidden w-7 h-7 lg:w-9 lg:h-9 xl:w-10 xl:h-10 3xl:w-12 3xl:h-12 text-sm md:text-base lg:text-xl 3xl:text-2xl text-black flex items-center justify-center rounded-full bg-white absolute transition duration-250 hover:bg-gray-900 hover:text-white focus:outline-none ltr:right-0 rtl:left-0 transform shadow-navigation translate-x-1/2">
                    <svg
                      stroke="currentColor"
                      fill="currentColor"
                      stroke-width="0"
                      viewBox="0 0 512 512"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <path d="M294.1 256L167 129c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.3 34 0L345 239c9.1 9.1 9.3 23.7.7 33.1L201.1 417c-4.7 4.7-10.9 7-17 7s-12.3-2.3-17-7c-9.4-9.4-9.4-24.6 0-33.9l127-127.1z"></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mb-12 md:mb-14 xl:mb-16 pb-0.5 lg:pt-1 xl:pt-0 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 xl:gap-7">
              <a
                className="group text-center flex flex-col sm:last:hidden lg:last:flex border sm:border-0 border-gray-300 overflow-hidden rounded-md pb-4 sm:pb-0"
                href="/search">
                <div className="flex mx-auto flex-col relative">
                  <div className="flex">
                    <img
                      alt="title"
                      loading="lazy"
                      width="580"
                      height="580"
                      decoding="async"
                      data-nimg="1"
                      className="bg-gray-300 object-cover sm:rounded-md transition duration-200 ease-in-out group-hover:opacity-90"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F4.jpg&amp;w=1200&amp;q=75"
                    />
                  </div>
                  <div className="overflow-hidden absolute bottom-3.5 lg:bottom-5 ltr:right-3.5 ltr:lg:right-5 rtl:left-3.5 rtl:lg:left-5 p-2">
                    <span className="inline-block text-[13px] md:text-sm leading-4 cursor-pointer transition ease-in-out duration-300 font-semibold text-center rounded-md bg-white text-heading shadow-navigation py-3 lg:py-4 px-4 lg:px-6 hover:bg-heading hover:text-white transform lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                      View Collection
                    </span>
                  </div>
                </div>

                <div className="pt-3.5 lg:pt-4 xl:pt-5 3xl:pt-7 px-4 sm:px-0">
                  <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">
                    New Spring Knits
                  </h3>
                  <p className="text-body text-[13px] md:text-sm leading-6 md:leading-7 xl:px-10 3xl:px-20">
                    Endlessly versatile new styles that say yes to spring. The
                    season’s looking bright.
                  </p>
                </div>
              </a>
              <a
                className="group text-center flex flex-col sm:last:hidden lg:last:flex border sm:border-0 border-gray-300 overflow-hidden rounded-md pb-4 sm:pb-0"
                href="/search">
                <div className="flex mx-auto flex-col relative">
                  <div className="flex">
                    <img
                      alt="title"
                      loading="lazy"
                      width="580"
                      height="580"
                      decoding="async"
                      data-nimg="1"
                      className="bg-gray-300 object-cover sm:rounded-md transition duration-200 ease-in-out group-hover:opacity-90"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F5.jpg&amp;w=1200&amp;q=75"
                    />
                  </div>
                  <div className="overflow-hidden absolute bottom-3.5 lg:bottom-5 ltr:right-3.5 ltr:lg:right-5 rtl:left-3.5 rtl:lg:left-5 p-2">
                    <span className="inline-block text-[13px] md:text-sm leading-4 cursor-pointer transition ease-in-out duration-300 font-semibold text-center rounded-md bg-white text-heading shadow-navigation py-3 lg:py-4 px-4 lg:px-6 hover:bg-heading hover:text-white transform lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                      View Collection
                    </span>
                  </div>
                </div>

                <div className="pt-3.5 lg:pt-4 xl:pt-5 3xl:pt-7 px-4 sm:px-0">
                  <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">
                    Ready To Party
                  </h3>
                  <p className="text-body text-[13px] md:text-sm leading-6 md:leading-7 xl:px-10 3xl:px-20">
                    From studio to street, our collection of technical,
                    high-performance activeness is made
                  </p>
                </div>
              </a>
              <a
                className="group text-center flex flex-col sm:last:hidden lg:last:flex border sm:border-0 border-gray-300 overflow-hidden rounded-md pb-4 sm:pb-0"
                href="/search">
                <div className="flex mx-auto flex-col relative">
                  <div className="flex">
                    <img
                      alt="title"
                      loading="lazy"
                      width="580"
                      height="580"
                      decoding="async"
                      data-nimg="1"
                      className="bg-gray-300 object-cover sm:rounded-md transition duration-200 ease-in-out group-hover:opacity-90"
                      src="/_next/image?url=%2Fassets%2Fimages%2Fcollection%2F6.jpg&amp;w=1200&amp;q=75"
                    />
                  </div>
                  <div className="overflow-hidden absolute bottom-3.5 lg:bottom-5 ltr:right-3.5 ltr:lg:right-5 rtl:left-3.5 rtl:lg:left-5 p-2">
                    <span className="inline-block text-[13px] md:text-sm leading-4 cursor-pointer transition ease-in-out duration-300 font-semibold text-center rounded-md bg-white text-heading shadow-navigation py-3 lg:py-4 px-4 lg:px-6 hover:bg-heading hover:text-white transform lg:translate-y-full lg:opacity-0 lg:group-hover:opacity-100 lg:group-hover:translate-y-0">
                      View Collection
                    </span>
                  </div>
                </div>

                <div className="pt-3.5 lg:pt-4 xl:pt-5 3xl:pt-7 px-4 sm:px-0">
                  <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-1.5 lg:mb-2.5 2xl:mb-3 3xl:mb-3.5">
                    New Winter Knits
                  </h3>
                  <p className="text-body text-[13px] md:text-sm leading-6 md:leading-7 xl:px-10 3xl:px-20">
                    Endlessly versatile new styles that say yes to spring. The
                    season’s looking bright.
                  </p>
                </div>
              </a>
            </div>
            <div className="relative px-5 overflow-hidden sm:px-8 md:px-16 2xl:px-24 sm:items-center lg:items-start flex flex-col justify-center xl:justify-between items-center rounded-lg bg-gray-200 py-10 md:py-14 lg:py-16 ">
              <div className="-mt-1.5 lg:-mt-2 xl:-mt-0.5 text-center ltr:xl:text-left rtl:xl:text-right mb-7  z-10 relative">
                <h3 className="text-heading text-lg md:text-xl lg:text-2xl 2xl:text-3xl xl:leading-10 font-bold mb-2 md:mb-2.5 lg:mb-3 xl:mb-3.5">
                  Get Expert Tips In Your Inbox
                </h3>
                <p className="text-body text-xs md:text-sm leading-6 md:leading-7">
                  Subscribe to our newsletter and stay updated.
                </p>
              </div>
              <form className="flex-shrink-0 w-full sm:w-96 md:w-[545px] z-10 relative">
                <div className="flex flex-col sm:flex-row items-start justify-end">
                  <div className="w-full">
                    <input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="Write your email here"
                      className="py-2 md:px-5 w-full appearance-none border text-input text-xs md:text-[13px] lg:text-sm font-body rounded-md placeholder-body min-h-12 transition duration-200 ease-in-out border-gray-300 focus:outline-none focus:border-heading md:h-12 px-4 lg:px-7 h-12 lg:h-14 text-center ltr:sm:text-left rtl:sm:text-right bg-white"
                      autoComplete="off"
                      spellCheck="false"
                      aria-invalid="false"
                    />
                  </div>
                  <button
                    data-variant="flat"
                    className="text-[13px] md:text-sm leading-4 inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none focus:bg-opacity-80 bg-heading text-white px-5 md:px-6 lg:px-8 py-4 md:py-3.5 lg:py-4 hover:text-white hover:bg-gray-600 hover:shadow-cart mt-3 sm:mt-0 w-full sm:w-auto ltr:sm:ml-2 rtl:sm:mr-2 md:h-full flex-shrink-0">
                    <span className="lg:py-0.5">Subscribe</span>
                  </button>
                </div>
              </form>
              <div className="hidden background-image: url('/assets/images/subscription-bg.png') z-0 xl:block bg-no-repeat bg-right xl:-right-24 2xl:-right-20 3xl:right-0 bg-contain xl:bg-cover 3xl:bg-contain absolute h-full w-full top-0"></div>
            </div>
          </div>
        </div>
        <footer className="border-b-4 border-heading mt-9 md:mt-11 lg:mt-16 3xl:mt-20 pt-2.5 lg:pt-0 2xl:pt-2">
          <div className="mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-5 md:gap-9 lg:gap-x-8 xl:gap-5  pb-9 md:pb-14 lg:pb-16 2xl:pb-20 3xl:pb-24 lg:mb-0.5 2xl:mb-0 3xl:-mb-1">
              <div>
                <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                  Social
                </h4>
                <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                  <li className="flex items-baseline">
                    <span className="ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          d="M480 257.35c0-123.7-100.3-224-224-224s-224 100.3-224 224c0 111.8 81.9 204.47 189 221.29V322.12h-56.89v-64.77H221V208c0-56.13 33.45-87.16 84.61-87.16 24.51 0 50.15 4.38 50.15 4.38v55.13H327.5c-27.81 0-36.51 17.26-36.51 35v42h62.12l-9.92 64.77H291v156.54c107.1-16.81 189-109.48 189-221.31z"></path>
                      </svg>
                    </span>
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      target="_blank"
                      href="https://www.facebook.com/redqinc">
                      /redqinc
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <span className="ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M496 109.5a201.8 201.8 0 01-56.55 15.3 97.51 97.51 0 0043.33-53.6 197.74 197.74 0 01-62.56 23.5A99.14 99.14 0 00348.31 64c-54.42 0-98.46 43.4-98.46 96.9a93.21 93.21 0 002.54 22.1 280.7 280.7 0 01-203-101.3A95.69 95.69 0 0036 130.4c0 33.6 17.53 63.3 44 80.7A97.5 97.5 0 0135.22 199v1.2c0 47 34 86.1 79 95a100.76 100.76 0 01-25.94 3.4 94.38 94.38 0 01-18.51-1.8c12.51 38.5 48.92 66.5 92.05 67.3A199.59 199.59 0 0139.5 405.6a203 203 0 01-23.5-1.4A278.68 278.68 0 00166.74 448c181.36 0 280.44-147.7 280.44-275.8 0-4.2-.11-8.4-.31-12.5A198.48 198.48 0 00496 109.5z"></path>
                      </svg>
                    </span>
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      target="_blank"
                      href="https://twitter.com/RedqTeam">
                      /RedqTeam
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <span className="ltr:mr-3 rtl:ml-3 relative top-0.5 lg:top-1 text-sm lg:text-base">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M349.33 69.33a93.62 93.62 0 0193.34 93.34v186.66a93.62 93.62 0 01-93.34 93.34H162.67a93.62 93.62 0 01-93.34-93.34V162.67a93.62 93.62 0 0193.34-93.34h186.66m0-37.33H162.67C90.8 32 32 90.8 32 162.67v186.66C32 421.2 90.8 480 162.67 480h186.66C421.2 480 480 421.2 480 349.33V162.67C480 90.8 421.2 32 349.33 32z"></path>
                        <path d="M377.33 162.67a28 28 0 1128-28 27.94 27.94 0 01-28 28zM256 181.33A74.67 74.67 0 11181.33 256 74.75 74.75 0 01256 181.33m0-37.33a112 112 0 10112 112 112 112 0 00-112-112z"></path>
                      </svg>
                    </span>
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      target="_blank"
                      href="https://www.instagram.com/redqteam">
                      /redqteam
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                  Contact
                </h4>
                <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/contact-us">
                      Contact Us
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    Website:
                    <a
                      className="ml-1 transition-colors duration-200 hover:text-black"
                      href="https://redq.io">
                      https://redq.io
                    </a>
                  </li>
                </ul>
              </div>
              <div className="undefined">
                <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                  About
                </h4>
                <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      Support Center
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      Customer Support
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      About Us
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      Copyright
                    </a>
                  </li>
                </ul>
              </div>
              <div className="undefined">
                <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                  Customer Care
                </h4>
                <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/faq">
                      FAQ &amp; Helps
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      Shipping &amp; Delivery
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      Return &amp; Exchanges
                    </a>
                  </li>
                </ul>
              </div>
              <div className="undefined">
                <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                  Our Information
                </h4>
                <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/privacy">
                      Privacy policy update
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/terms">
                      Terms &amp; conditions
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/privacy">
                      Return Policy
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      Site Map
                    </a>
                  </li>
                </ul>
              </div>
              <div className="undefined">
                <h4 className="mb-5 text-sm font-semibold text-heading md:text-base xl:text-lg 2xl:mb-6 3xl:mb-7">
                  Community
                </h4>
                <ul className="text-xs md:text-[13px] lg:text-sm text-body flex flex-col space-y-3 lg:space-y-3.5">
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      Announcements
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      Answer center
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      Discussion boards
                    </a>
                  </li>
                  <li className="flex items-baseline">
                    <a
                      className="transition-colors duration-200 hover:text-black"
                      href="/">
                      Giving works
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-300 pt-5 pb-16 sm:pb-20 md:pb-5 mb-2 sm:mb-0">
            <div className="flex flex-col-reverse md:flex-row text-center md:justify-between mx-auto max-w-[1920px] px-4 md:px-8 2xl:px-16">
              <p className="text-body text-xs md:text-[13px] lg:text-sm leading-6">
                ©2023{" "}
                <a
                  className="font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-body"
                  href="https://chawkbazar.redq.io/">
                  ChawkBazar
                </a>
                . Copyright © REDQ. All rights reserved worldwide.{" "}
                <a
                  className="font-semibold text-gray-700 transition-colors duration-200 ease-in-out hover:text-body"
                  href="https://redq.io">
                  REDQ
                </a>
              </p>
              <ul className="hidden md:flex flex-wrap justify-center items-center space-x-4 xs:space-x-5 lg:space-x-7 rtl:space-x-reverse mb-1 md:mb-0 mx-auto md:mx-0">
                <li className="mb-2 md:mb-0 transition hover:opacity-80">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="58"
                    height="24"
                    viewBox="0 0 58 24"
                    fill="none"
                    className="h-4 w-auto">
                    <path
                      d="M4.03506 9.36297C4.03506 8.74103 4.54542 8.50172 5.39085 8.50172C6.60287 8.50172 8.13393 8.86865 9.34607 9.52254V5.77445C8.02235 5.24817 6.71456 5.04082 5.39085 5.04082C2.15311 5.04082 0 6.73146 0 9.55451C0 13.9563 6.06056 13.2546 6.06056 15.1526C6.06056 15.8861 5.4227 16.1254 4.52949 16.1254C3.20578 16.1254 1.51514 15.5831 0.175389 14.8495V18.6453C1.65868 19.2833 3.15789 19.5544 4.52949 19.5544C7.84685 19.5544 10.1276 17.9117 10.1276 15.0568C10.1117 10.3041 4.03506 11.1493 4.03506 9.36297ZM14.8165 1.85108L10.925 2.68036L10.9091 15.4555C10.9091 17.8161 12.6795 19.5544 15.0399 19.5544C16.3477 19.5544 17.3046 19.3152 17.8309 19.0281V15.7905C17.3206 15.9978 14.8006 16.7314 14.8006 14.371V8.70907H17.8309V5.31198H14.8006L14.8165 1.85108ZM22.7911 6.49215L22.5359 5.31198H19.0909V19.2673H23.0782V9.80963C24.0191 8.58157 25.614 8.80484 26.1085 8.98023V5.31198C25.5981 5.12056 23.7321 4.76967 22.7911 6.49215ZM27.0813 5.31198H31.0845V19.2673H27.0813V5.31198ZM27.0813 4.09985L31.0845 3.2386V0.000976562L27.0813 0.846297V4.09985ZM39.4099 5.04082C37.8469 5.04082 36.8421 5.77445 36.2839 6.28492L36.0765 5.29606H32.5678V23.8924L36.555 23.0472L36.571 18.5336C37.1452 18.9483 37.9904 19.5384 39.394 19.5384C42.2488 19.5384 44.8485 17.2418 44.8485 12.186C44.8326 7.56075 42.201 5.04082 39.4099 5.04082ZM38.453 16.0296C37.512 16.0296 36.9536 15.6948 36.571 15.2801L36.555 9.36297C36.9697 8.9005 37.5438 8.58157 38.453 8.58157C39.9043 8.58157 40.9091 10.2083 40.9091 12.2976C40.9091 14.4348 39.9202 16.0296 38.453 16.0296ZM57.4163 12.3455C57.4163 8.26253 55.4385 5.04082 51.6587 5.04082C47.8627 5.04082 45.5661 8.26264 45.5661 12.3136C45.5661 17.1142 48.2775 19.5384 52.169 19.5384C54.0669 19.5384 55.5024 19.1078 56.5869 18.5018V15.3119C55.5025 15.8543 54.2584 16.1892 52.6794 16.1892C51.1323 16.1892 49.7607 15.6469 49.5853 13.765H57.3844C57.3844 13.5575 57.4163 12.7282 57.4163 12.3455ZM49.5375 10.8303C49.5375 9.02811 50.638 8.27845 51.6428 8.27845C52.6156 8.27845 53.6524 9.02811 53.6524 10.8303H49.5375Z"
                      fill="#6772E5"></path>
                  </svg>
                </li>
              </ul>
            </div>
          </div>
        </footer>
        <div className="md:hidden fixed z-50 bottom-0 flex items-center justify-between shadow-bottomNavigation text-gray-700 body-font bg-white w-full h-14 sm:h-16 px-4">
          <button
            aria-label="Menu"
            className="menuBtn flex flex-col items-center justify-center flex-shrink-0 outline-none focus:outline-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="14"
              viewBox="0 0 25.567 18">
              <g transform="translate(-776 -462)">
                <rect
                  id="Rectangle_941"
                  data-name="Rectangle 941"
                  width="12.749"
                  height="2.499"
                  rx="1.25"
                  transform="translate(776 462)"
                  fill="currentColor"></rect>
                <rect
                  id="Rectangle_942"
                  data-name="Rectangle 942"
                  width="25.567"
                  height="2.499"
                  rx="1.25"
                  transform="translate(776 469.75)"
                  fill="currentColor"></rect>
                <rect
                  id="Rectangle_943"
                  data-name="Rectangle 943"
                  width="17.972"
                  height="2.499"
                  rx="1.25"
                  transform="translate(776 477.501)"
                  fill="currentColor"></rect>
              </g>
            </svg>
          </button>
          <button
            className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none"
            aria-label="search-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="17px"
              height="18px"
              viewBox="0 0 18.942 20"
              className="md:w-4 xl:w-5 md:h-4 xl:h-5">
              <path
                d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
                transform="translate(-367.297 -371.285)"
                fill="currentColor"
                fill-rule="evenodd"></path>
            </svg>
          </button>
          <a className="flex-shrink-0" href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="20px"
              viewBox="0 0 17.996 20.442">
              <path
                d="M48.187,7.823,39.851.182A.7.7,0,0,0,38.9.2L31.03,7.841a.7.7,0,0,0-.211.5V19.311a.694.694,0,0,0,.694.694H37.3A.694.694,0,0,0,38,19.311V14.217h3.242v5.095a.694.694,0,0,0,.694.694h5.789a.694.694,0,0,0,.694-.694V8.335a.7.7,0,0,0-.228-.512ZM47.023,18.617h-4.4V13.522a.694.694,0,0,0-.694-.694H37.3a.694.694,0,0,0-.694.694v5.095H32.2V8.63l7.192-6.98L47.02,8.642v9.975Z"
                transform="translate(-30.619 0.236)"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="0.4"></path>
            </svg>
          </a>
          <button
            className="flex items-center justify-center flex-shrink-0 h-auto relative focus:outline-none transform"
            aria-label="cart-button">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="18px"
              viewBox="0 0 20 20"
              className="md:w-4 xl:w-5 md:h-4 xl:h-5">
              <path
                d="M5,4H19a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1H5a1,1,0,0,1-1-1V5A1,1,0,0,1,5,4ZM2,5A3,3,0,0,1,5,2H19a3,3,0,0,1,3,3V19a3,3,0,0,1-3,3H5a3,3,0,0,1-3-3Zm10,7C9.239,12,7,9.314,7,6H9c0,2.566,1.669,4,3,4s3-1.434,3-4h2C17,9.314,14.761,12,12,12Z"
                transform="translate(-2 -2)"
                fill="currentColor"
                fill-rule="evenodd"></path>
            </svg>
            <span className="cart-counter-badge flex items-center justify-center bg-heading text-white absolute -top-3 ltr:-right-2.5 ltr:xl:-right-3 rtl:-left-2.5 rtl:xl:-left-3 rounded-full font-bold">
              0
            </span>
          </button>
          <a className="flex-shrink-0" href="/my-account">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="18px"
              height="20px"
              viewBox="0 0 16.577 18.6">
              <path
                d="M-7722.37,2933a.63.63,0,0,1-.63-.63c0-4.424,2.837-6.862,7.989-6.862s7.989,2.438,7.989,6.862a.629.629,0,0,1-.63.63Zm.647-1.251h13.428c-.246-3.31-2.5-4.986-6.713-4.986s-6.471,1.673-6.714,4.986Zm2.564-12.518a4.1,4.1,0,0,1,1.172-3,4.1,4.1,0,0,1,2.979-1.229,4.1,4.1,0,0,1,2.979,1.229,4.1,4.1,0,0,1,1.171,3,4.341,4.341,0,0,1-4.149,4.5,4.344,4.344,0,0,1-4.16-4.5Zm1.251,0a3.1,3.1,0,0,0,2.9,3.254,3.094,3.094,0,0,0,2.9-3.253,2.878,2.878,0,0,0-.813-2.109,2.88,2.88,0,0,0-2.085-.872,2.843,2.843,0,0,0-2.1.856,2.841,2.841,0,0,0-.806,2.122Z"
                transform="translate(7723.3 -2914.703)"
                fill="currentColor"
                stroke="currentColor"
                stroke-width="0.6"></path>
            </svg>
          </a>
        </div>
        <div>
          <div className="overlay"></div>
          <div className="drawer-search relative hidden top-0 z-30 opacity-0 invisible transition duration-300 ease-in-out left-1/2 px-4 w-full md:w-[730px] lg:w-[930px]">
            <div className="w-full flex flex-col justify-center">
              <div className="flex-shrink-0 mt-3.5 lg:mt-4 w-full">
                <div className="flex flex-col mx-auto mb-1.5 w-full ">
                  <form
                    className="relative ltr:pr-12 rtl:pl-12 ltr:md:pr-14 rtl:md:pl-14 bg-white overflow-hidden rounded-md w-full"
                    role="search">
                    <label
                      htmlFor="search"
                      className="flex items-center py-0.5">
                      <span className="w-12 md:w-14 h-full flex flex-shrink-0 justify-center items-center cursor-pointer focus:outline-none">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="17px"
                          height="18px"
                          viewBox="0 0 18.942 20"
                          className="w-4 h-4">
                          <path
                            d="M381.768,385.4l3.583,3.576c.186.186.378.366.552.562a.993.993,0,1,1-1.429,1.375c-1.208-1.186-2.422-2.368-3.585-3.6a1.026,1.026,0,0,0-1.473-.246,8.343,8.343,0,1,1-3.671-15.785,8.369,8.369,0,0,1,6.663,13.262C382.229,384.815,382.025,385.063,381.768,385.4Zm-6.152.579a6.342,6.342,0,1,0-6.306-6.355A6.305,6.305,0,0,0,375.615,385.983Z"
                            transform="translate(-367.297 -371.285)"
                            fill="text-heading"
                            fill-rule="evenodd"></path>
                        </svg>
                      </span>
                      <input
                        id="search"
                        className="text-heading outline-none w-full h-12 lg:h-14 placeholder-gray-400 text-sm lg:text-base"
                        placeholder="Search..."
                        aria-label="Search"
                        autoComplete="off"
                        name="search"
                        value=""
                      />
                    </label>
                    <button
                      type="button"
                      className="outline-none text-2xl md:text-3xl text-gray-400 absolute top-0 ltr:right-0 rtl:left-0 w-12 md:w-14 h-full flex items-center justify-center transition duration-200 ease-in-out hover:text-heading focus:outline-none">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        className="w-6 h-6"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="32"
                          d="M368 368L144 144m224 0L144 368"></path>
                      </svg>
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
