import React from "react";

const HeaderOne = () => {
  return (
    <header className="  header-section-wrapper relative">
      <div className="w-full h-[86px] bg-white quomodo-shop-middle-bar lg:block hidden">
        <div className="container-x mx-auto h-full">
          <div className="relative h-full">
            <div className="flex justify-between items-center h-full">
              <div>
                <a href="/">
                  <img
                    width="152"
                    height="36"
                    src="/assets/images/logo.svg"
                    alt="logo"
                  />
                </a>
              </div>
              <div className="w-[517px] h-[44px]">
                <div className="w-full h-full flex items-center  border border-qgray-border bg-white search-com">
                  <div className="flex-1 bg-red-500 h-full">
                    <form action="#" className="h-full">
                      <input
                        type="text"
                        className="search-input"
                        placeholder="Search Product..."
                      />
                    </form>
                  </div>
                  <div className="w-[1px] h-[22px] bg-qgray-border"></div>
                  <div className="flex-1 flex items-center px-4">
                    <button
                      type="button"
                      className="w-full text-xs font-500 text-qgray flex justify-between items-center"
                    >
                      <span>All Categories</span>
                      <span>
                        <svg
                          width="10"
                          height="5"
                          viewBox="0 0 10 5"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            x="9.18359"
                            y="0.90918"
                            width="5.78538"
                            height="1.28564"
                            transform="rotate(135 9.18359 0.90918)"
                            fill="#8E8E8E"
                          ></rect>
                          <rect
                            x="5.08984"
                            y="5"
                            width="5.78538"
                            height="1.28564"
                            transform="rotate(-135 5.08984 5)"
                            fill="#8E8E8E"
                          ></rect>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <button
                    className=" w-[93px] h-full text-sm font-600  search-btn"
                    type="button"
                  >
                    Search
                  </button>
                </div>
              </div>
              <div className="flex space-x-6 items-center">
                <div className="compaire relative">
                  <a href="/products-compaire">
                    <span>
                      <svg
                        width="20"
                        height="22"
                        viewBox="0 0 20 22"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8.33556 0.70842C8.33556 1.09592 8.32306 1.41675 8.31056 1.41675C8.29806 1.41675 8.09389 1.45425 7.86473 1.50425C3.90639 2.30425 0.952225 5.43342 0.402225 9.40843C0.273058 10.3168 0.327225 11.7001 0.523058 12.6251C1.01889 14.9918 2.55639 17.2126 4.58973 18.5126L4.82722 18.6626L5.41472 18.2209C5.73556 17.9793 6.00222 17.7709 6.00222 17.7543C6.00222 17.7418 5.89806 17.6751 5.77306 17.6084C5.13556 17.2751 4.30639 16.6084 3.74389 15.9793C2.67722 14.7834 1.99389 13.3251 1.77306 11.7918C1.69389 11.2251 1.69389 10.1001 1.77306 9.56259C1.94389 8.42509 2.34389 7.35009 2.94389 6.40842C3.69389 5.23759 4.83556 4.21259 6.08556 3.58342C6.71889 3.26676 7.59806 2.96675 8.20223 2.85842L8.33556 2.83342V3.41675C8.33556 3.73759 8.34389 4.00009 8.35639 4.00009C8.39806 4.00009 11.0022 2.02925 11.0022 2.00009C11.0022 1.97092 8.39806 8.58307e-05 8.35639 8.58307e-05C8.34389 8.58307e-05 8.33556 0.316753 8.33556 0.70842Z"
                          fill="black"
                        ></path>
                        <path
                          d="M13.9234 3.11266C13.6026 3.35432 13.3443 3.56682 13.3568 3.58349C13.3693 3.60432 13.4943 3.68349 13.6401 3.76266C14.8609 4.45432 15.9984 5.62099 16.7026 6.91683C17.1276 7.69599 17.4859 8.82933 17.5859 9.71266C17.6693 10.4085 17.6193 11.6043 17.4859 12.2377C16.9109 14.9627 15.0151 17.1585 12.3984 18.1335C12.0693 18.2543 11.1776 18.5002 11.0609 18.5002C11.0151 18.5002 11.0026 18.396 11.0026 17.9168C11.0026 17.596 10.9943 17.3335 10.9818 17.3335C10.9401 17.3335 8.33594 19.3043 8.33594 19.3335C8.33594 19.3627 10.9401 21.3335 10.9818 21.3335C10.9943 21.3335 11.0026 21.0168 11.0026 20.6252V19.921L11.1609 19.896C11.5484 19.8335 12.6443 19.5377 13.0026 19.396C16.2526 18.1252 18.4776 15.3085 18.9401 11.8752C19.0609 10.9918 19.0068 9.60849 18.8151 8.70849C18.3193 6.34183 16.7818 4.12099 14.7484 2.82099L14.5109 2.67099L13.9234 3.11266Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>
                  </a>
                  <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">
                    2
                  </span>
                </div>
                <div className="favorite relative">
                  <a href="/wishlist">
                    <span>
                      <svg
                        width="21"
                        height="18"
                        viewBox="0 0 21 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M4.97214 0.0251923C3.71435 0.183434 2.6616 0.701674 1.7705 1.60365C0.970091 2.41068 0.489057 3.26519 0.213053 4.37683C-0.275867 6.30342 0.0789948 8.20232 1.25398 9.98649C2.00708 11.1298 2.98097 12.1781 4.76711 13.7764C5.90266 14.7931 9.36848 17.7601 9.53802 17.859C9.69574 17.954 9.75488 17.9658 10.09 17.9658C10.4252 17.9658 10.4843 17.954 10.642 17.859C10.8116 17.7601 14.2853 14.7891 15.413 13.7764C17.207 12.1702 18.173 11.1258 18.9261 9.98649C20.1011 8.20232 20.4559 6.30342 19.967 4.37683C19.691 3.26519 19.21 2.41068 18.4096 1.60365C17.6131 0.800575 16.7614 0.337719 15.6456 0.100357C15.0857 -0.0183239 14.0526 -0.0301933 13.5637 0.0805759C12.1995 0.377279 11.1546 1.06167 10.2004 2.28013L10.09 2.41859L9.98357 2.28013C9.04122 1.08541 8.01212 0.401016 6.69913 0.100357C6.30878 0.00936699 5.4098 -0.0301933 4.97214 0.0251923ZM6.28907 1.23178C7.40885 1.42958 8.37487 2.07837 9.13979 3.15046C9.26991 3.3364 9.43156 3.55793 9.49465 3.64892C9.78643 4.06035 10.3936 4.06035 10.6854 3.64892C10.7485 3.55793 10.9102 3.3364 11.0403 3.15046C12.0851 1.68673 13.5401 0.998377 15.1251 1.21596C16.8837 1.45728 18.2558 2.69156 18.7802 4.50738C19.1942 5.94342 19.0128 7.45067 18.2597 8.80759C17.6289 9.94298 16.5761 11.1337 14.7427 12.7834C13.8555 13.5786 10.1255 16.7988 10.09 16.7988C10.0506 16.7988 6.33638 13.5904 5.4374 12.7834C2.61823 10.2476 1.50633 8.66518 1.23821 6.8098C1.06472 5.61112 1.31312 4.32145 1.91639 3.30475C2.82326 1.77376 4.58968 0.935081 6.28907 1.23178Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>
                  </a>
                  <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">
                    1
                  </span>
                </div>
                <div className="cart-wrapper group relative py-4">
                  <div className="cart relative cursor-pointer">
                    <a href="/cart">
                      <span>
                        <svg
                          width="18"
                          height="20"
                          viewBox="0 0 18 20"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M16.1568 5.1772C16.0284 4.84626 15.7343 4.81766 14.2887 4.81766H13.0875V4.2947C13.0875 3.48165 12.9716 2.91374 12.6899 2.32949C12.1804 1.2713 11.3272 0.531797 10.2213 0.188601C9.68279 0.0251747 8.87923 -0.0442816 8.39047 0.0292604C7.03602 0.241715 5.88039 1.09562 5.29223 2.31315C5.00642 2.90966 4.89045 3.48165 4.89045 4.2947V4.82175H3.68511C2.23954 4.82175 1.94546 4.85035 1.81705 5.19354C1.75078 5.41008 1.12948 10.0637 0.864385 12.0697C0.632431 13.8184 0.417045 15.469 0.259648 16.711C-0.0137267 18.8519 -0.00544266 18.8846 0.00284141 18.9214V18.9255C0.0401198 19.0644 0.408761 19.428 0.520596 19.5342L1.00521 20H16.9438L17.3041 19.6854C17.4657 19.5424 18 19.0562 18 18.8152C18 18.6517 16.1899 5.27117 16.1568 5.1772ZM16.6911 18.5046C16.687 18.5332 16.6538 18.619 16.5958 18.6803L16.513 18.7702H1.46498L1.2496 18.5414L2.09871 12.2863C2.39694 10.0596 2.66203 8.11888 2.81943 6.95855C2.88984 6.45193 2.92298 6.19453 2.93955 6.06788C3.49872 6.06379 5.94252 6.0597 8.98278 6.0597H15.0302L15.0384 6.10465C15.1047 6.4315 16.6621 18.141 16.6911 18.5046ZM6.1372 4.82175V4.35598C6.1372 4.04139 6.17862 3.6083 6.22418 3.40811C6.46856 2.38669 7.30111 1.5573 8.34076 1.29173C8.77568 1.1855 9.48811 1.22228 9.92303 1.37753H9.92717C10.3828 1.5287 10.7556 1.77384 11.0994 2.14972C11.6544 2.74623 11.8408 3.28145 11.8408 4.27018V4.82175H6.1372Z"
                            fill="black"
                          ></path>
                        </svg>
                      </span>
                    </a>
                    <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow">
                      15
                    </span>
                  </div>
                  <div className="w-[300px] bg-white border-t-[3px] cart-wrappwer  absolute -right-[45px] top-11 z-50 hidden group-hover:block">
                    <div className="w-full h-full">
                      <div className="product-items h-[310px] overflow-y-scroll">
                        <ul>
                          <li className="w-full h-full flex">
                            <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                              <div className="w-[65px] h-full">
                                <img
                                  src="/assets/images/product-img-1.jpg"
                                  alt=""
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="flex-1 h-full flex flex-col justify-center ">
                                <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                                  iPhone 12 Pro Max 128GB Golen colour
                                </p>
                                <p className="price">
                                  <span className="offer-price text-qred font-600 text-[15px] ml-2">
                                    $38
                                  </span>
                                </p>
                              </div>
                            </div>
                            <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer ">
                              <svg
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                className="inline fill-current text-[#AAAAAA] hover:text-qred"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="w-full h-full flex">
                            <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                              <div className="w-[65px] h-full">
                                <img
                                  src="/assets/images/product-img-1.jpg"
                                  alt=""
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="flex-1 h-full flex flex-col justify-center ">
                                <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                                  iPhone 12 Pro Max 128GB Golen colour
                                </p>
                                <p className="price">
                                  <span className="offer-price text-qred font-600 text-[15px] ml-2">
                                    $38
                                  </span>
                                </p>
                              </div>
                            </div>
                            <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer">
                              <svg
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                className="inline fill-current text-[#AAAAAA] hover:text-qred"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="w-full h-full flex">
                            <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                              <div className="w-[65px] h-full">
                                <img
                                  src="/assets/images/product-img-1.jpg"
                                  alt=""
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="flex-1 h-full flex flex-col justify-center ">
                                <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                                  iPhone 12 Pro Max 128GB Golen colour
                                </p>
                                <p className="price">
                                  <span className="offer-price text-qred font-600 text-[15px] ml-2">
                                    $38
                                  </span>
                                </p>
                              </div>
                            </div>
                            <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer">
                              <svg
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                className="inline fill-current text-[#AAAAAA] hover:text-qred"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="w-full h-full flex">
                            <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                              <div className="w-[65px] h-full">
                                <img
                                  src="/assets/images/product-img-1.jpg"
                                  alt=""
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="flex-1 h-full flex flex-col justify-center ">
                                <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                                  iPhone 12 Pro Max 128GB Golen colour
                                </p>
                                <p className="price">
                                  <span className="offer-price text-qred font-600 text-[15px] ml-2">
                                    $38
                                  </span>
                                </p>
                              </div>
                            </div>
                            <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer">
                              <svg
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                className="inline fill-current text-[#AAAAAA] hover:text-qred"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="w-full h-full flex">
                            <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                              <div className="w-[65px] h-full">
                                <img
                                  src="/assets/images/product-img-1.jpg"
                                  alt=""
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="flex-1 h-full flex flex-col justify-center ">
                                <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                                  iPhone 12 Pro Max 128GB Golen colour
                                </p>
                                <p className="price">
                                  <span className="offer-price text-qred font-600 text-[15px] ml-2">
                                    $38
                                  </span>
                                </p>
                              </div>
                            </div>
                            <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer">
                              <svg
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                className="inline fill-current text-[#AAAAAA] hover:text-qred"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z"></path>
                              </svg>
                            </span>
                          </li>
                          <li className="w-full h-full flex">
                            <div className="flex space-x-[6px] justify-center items-center px-4 my-[20px]">
                              <div className="w-[65px] h-full">
                                <img
                                  src="/assets/images/product-img-1.jpg"
                                  alt=""
                                  className="w-full h-full object-contain"
                                />
                              </div>
                              <div className="flex-1 h-full flex flex-col justify-center ">
                                <p className="title mb-2 text-[13px] font-600 text-qblack leading-4 line-clamp-2 hover:text-blue-600">
                                  iPhone 12 Pro Max 128GB Golen colour
                                </p>
                                <p className="price">
                                  <span className="offer-price text-qred font-600 text-[15px] ml-2">
                                    $38
                                  </span>
                                </p>
                              </div>
                            </div>
                            <span className="mt-[20px] mr-[15px] inline-flex cursor-pointer">
                              <svg
                                width="8"
                                height="8"
                                viewBox="0 0 8 8"
                                fill="none"
                                className="inline fill-current text-[#AAAAAA] hover:text-qred"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M7.76 0.24C7.44 -0.08 6.96 -0.08 6.64 0.24L4 2.88L1.36 0.24C1.04 -0.08 0.56 -0.08 0.24 0.24C-0.08 0.56 -0.08 1.04 0.24 1.36L2.88 4L0.24 6.64C-0.08 6.96 -0.08 7.44 0.24 7.76C0.56 8.08 1.04 8.08 1.36 7.76L4 5.12L6.64 7.76C6.96 8.08 7.44 8.08 7.76 7.76C8.08 7.44 8.08 6.96 7.76 6.64L5.12 4L7.76 1.36C8.08 1.04 8.08 0.56 7.76 0.24Z"></path>
                              </svg>
                            </span>
                          </li>
                        </ul>
                      </div>
                      <div className="w-full px-4 mt-[20px] mb-[12px]">
                        <div className="h-[1px] bg-[#F0F1F3]"></div>
                      </div>
                      <div className="product-actions px-4 mb-[30px]">
                        <div className="total-equation flex justify-between items-center mb-[28px]">
                          <span className="text-[15px] font-500 text-qblack">
                            Subtotal
                          </span>
                          <span className="text-[15px] font-500 text-qred ">
                            $365
                          </span>
                        </div>
                        <div className="product-action-btn">
                          <a href="#">
                            <div className="gray-btn w-full h-[50px] mb-[10px] ">
                              <span>View Cart</span>
                            </div>
                          </a>
                          <a href="#">
                            <div className="w-full h-[50px]">
                              <div className="yellow-btn">
                                <span className="text-sm">Checkout Now</span>
                              </div>
                            </div>
                          </a>
                        </div>
                      </div>
                      <div className="w-full px-4 mt-[20px]">
                        <div className="h-[1px] bg-[#F0F1F3]"></div>
                      </div>
                      <div className="flex justify-center py-[15px]">
                        <p className="text-[13px] font-500 text-qgray">
                          Get Return within{" "}
                          <span className="text-qblack">30 days</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <a href="/profile">
                    <span>
                      <svg
                        width="21"
                        height="20"
                        viewBox="0 0 21 20"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M19.992 19.729C19.9004 18.043 19.438 16.4886 18.617 15.1176C17.6046 13.4237 16.2096 12.1244 14.4679 11.2475C14.0773 11.0522 13.878 10.9645 13.3878 10.7772L12.9334 10.6138L13.4954 10.1833C14.5476 9.38621 15.3408 8.08689 15.6118 6.70387C15.6955 6.28936 15.7035 5.22918 15.6317 4.78278C15.4643 3.77043 14.9582 2.70227 14.2766 1.92507C13.4356 0.976485 12.2439 0.30291 11.0084 0.079713C10.7971 0.0398565 10.1515 0 9.75289 0C9.60542 0 9.55361 0.00398565 9.53766 0.0079713H9.53368C9.49781 0.011957 9.42607 0.0239139 9.33838 0.0358709H9.32642C9.25468 0.0438422 9.17896 0.0557991 9.10323 0.0677561C8.1666 0.195297 7.01873 0.73336 6.25349 1.41092C5.27302 2.27581 4.59147 3.50339 4.38023 4.78278C4.3045 5.22918 4.31646 6.28936 4.40016 6.70387C4.67118 8.08689 5.46433 9.38621 6.51654 10.1833L7.07852 10.6138L6.62415 10.7772C6.13392 10.9645 5.93464 11.0522 5.54404 11.2475C3.80231 12.1244 2.40335 13.4237 1.39498 15.1176C0.569948 16.4926 0.107613 18.043 0.0159426 19.729L0 20H0.255082H1.1957H18.8123H19.4938H20.008L19.992 19.729ZM5.56397 4.98605C5.73934 3.92188 6.28537 2.95735 7.10642 2.25986C7.91949 1.57035 8.94779 1.19171 10 1.19171C10.2352 1.19171 10.4743 1.21164 10.7094 1.24751C13.1606 1.64607 14.8386 3.95775 14.444 6.39299C14.2686 7.45715 13.7226 8.42168 12.9016 9.11917C12.0885 9.80869 11.0602 10.1873 10.008 10.1873C9.77282 10.1873 9.53368 10.1674 9.29852 10.1315C6.84735 9.72898 5.16939 7.42128 5.56397 4.98605ZM2.54285 15.5281C3.73057 13.7146 5.31287 12.4751 7.25389 11.8414C8.17059 11.5424 9.09526 11.391 10.004 11.391C10.9127 11.391 11.8374 11.5424 12.7541 11.8414C14.6951 12.4751 16.2814 13.7146 17.4651 15.5281C18.047 16.4169 18.5134 17.6963 18.7086 18.8721H1.29932C1.49462 17.6963 1.96094 16.4169 2.54285 15.5281Z"
                          fill="black"
                        ></path>
                      </svg>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quomodo-shop-drawer lg:hidden block w-full h-[60px] bg-white">
        <div className="w-full h-full flex justify-between items-center px-5">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4 6h16M4 12h16M4 18h7"
              ></path>
            </svg>
          </div>
          <div>
            <a href="/">
              <img
                width="152"
                height="36"
                src="/assets/images/logo.svg"
                alt="logo"
              />
            </a>
          </div>
          <div className="cart relative cursor-pointer">
            <a href="/cart">
              <span>
                <svg
                  width="18"
                  height="20"
                  viewBox="0 0 18 20"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M16.1568 5.1772C16.0284 4.84626 15.7343 4.81766 14.2887 4.81766H13.0875V4.2947C13.0875 3.48165 12.9716 2.91374 12.6899 2.32949C12.1804 1.2713 11.3272 0.531797 10.2213 0.188601C9.68279 0.0251747 8.87923 -0.0442816 8.39047 0.0292604C7.03602 0.241715 5.88039 1.09562 5.29223 2.31315C5.00642 2.90966 4.89045 3.48165 4.89045 4.2947V4.82175H3.68511C2.23954 4.82175 1.94546 4.85035 1.81705 5.19354C1.75078 5.41008 1.12948 10.0637 0.864385 12.0697C0.632431 13.8184 0.417045 15.469 0.259648 16.711C-0.0137267 18.8519 -0.00544266 18.8846 0.00284141 18.9214V18.9255C0.0401198 19.0644 0.408761 19.428 0.520596 19.5342L1.00521 20H16.9438L17.3041 19.6854C17.4657 19.5424 18 19.0562 18 18.8152C18 18.6517 16.1899 5.27117 16.1568 5.1772ZM16.6911 18.5046C16.687 18.5332 16.6538 18.619 16.5958 18.6803L16.513 18.7702H1.46498L1.2496 18.5414L2.09871 12.2863C2.39694 10.0596 2.66203 8.11888 2.81943 6.95855C2.88984 6.45193 2.92298 6.19453 2.93955 6.06788C3.49872 6.06379 5.94252 6.0597 8.98278 6.0597H15.0302L15.0384 6.10465C15.1047 6.4315 16.6621 18.141 16.6911 18.5046ZM6.1372 4.82175V4.35598C6.1372 4.04139 6.17862 3.6083 6.22418 3.40811C6.46856 2.38669 7.30111 1.5573 8.34076 1.29173C8.77568 1.1855 9.48811 1.22228 9.92303 1.37753H9.92717C10.3828 1.5287 10.7556 1.77384 11.0994 2.14972C11.6544 2.74623 11.8408 3.28145 11.8408 4.27018V4.82175H6.1372Z"
                    fill="black"
                  ></path>
                </svg>
              </span>
            </a>
            <span className="w-[18px] h-[18px] rounded-full  absolute -top-2.5 -right-2.5 flex justify-center items-center text-[9px] bg-qyellow text-qblack">
              15
            </span>
          </div>
        </div>
      </div>
      {/* <div className="nav-widget-wrapper w-full  h-[60px] relative z-30 bg-qyellow  quomodo-shop-nav-bar lg:block hidden">
      <div className="container-x mx-auto h-full">
        <div className="w-full h-full relative">
          <div className="w-full h-full flex justify-between items-center">
            <div className="category-and-nav flex xl:space-x-7 space-x-3 items-center">
              <div className="category w-[270px] h-[53px] bg-white px-5 rounded-t-md mt-[6px] relative"><button
                  type="button" className="w-full h-full flex justify-between items-center">
                  <div className="flex space-x-3 items-center"><span><svg className="fill-current" width="14" height="9"
                        viewBox="0 0 14 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="14" height="1"></rect>
                        <rect y="8" width="14" height="1"></rect>
                        <rect y="4" width="10" height="1"></rect>
                      </svg></span><span className="text-sm font-600 text-qblacktext">All Categories</span></div>
                  <div><svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current text-qblacktext"
                      xmlns="http://www.w3.org/2000/svg">
                      <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564"
                        transform="rotate(135 9.18359 0.90918)"></rect>
                      <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)">
                      </rect>
                    </svg></div>
                </button>
                <div className="category-dropdown w-full absolute left-0 top-[53px] overflow-hidden" style="height: 0px;">
                  <ul className="categories-list">
                    <li className="category-item"><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="12"
                                height="16" viewBox="0 0 12 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M0.911344 0.0514231C0.633547 0.132053 0.157324 0.565442 0.0722839 0.822452C-0.0240946 1.12481 -0.0240946 14.8132 0.0722839 15.1156C0.162993 15.3928 0.633547 15.811 0.94536 15.8917C1.10977 15.932 1.72773 15.9521 2.94663 15.9521H4.71546L4.85152 15.8262C5.03861 15.6649 5.03861 15.4331 4.85152 15.2718L4.71546 15.1458H2.9523H1.18914L1.05308 15.0199L0.911344 14.8989V8.85526V1.03914L1.05308 0.9182L1.18914 0.792214H5.90035H10.6116L10.7476 0.9182L10.8894 1.03914V8.85526V14.8989L10.7476 15.0199L10.6116 15.1458H8.8484H7.08524L6.94917 15.2718C6.76208 15.4331 6.76208 15.6649 6.94917 15.8262L7.08524 15.9521H8.85406C10.073 15.9521 10.6909 15.932 10.8553 15.8917C11.1842 15.806 11.6377 15.3877 11.7284 15.0955C11.7851 14.9191 11.7964 14.8673 11.7851 8.72423L11.7681 0.807333L11.598 0.560402C11.4903 0.409221 11.3202 0.258039 11.1501 0.16229L10.8723 0.0111084L5.99106 0.00102901C2.53844 -0.0040102 1.05308 0.0111074 0.911344 0.0514231Z">
                                </path>
                                <path
                                  d="M1.96009 1.72447C1.86938 1.80006 1.81836 1.90588 1.81836 2.00163C1.81836 2.09738 1.86938 2.20321 1.96009 2.2788C2.09049 2.39975 2.13584 2.40479 2.72545 2.40479C3.31506 2.40479 3.36042 2.39975 3.49081 2.2788C3.58152 2.20321 3.63254 2.09738 3.63254 2.00163C3.63254 1.90588 3.58152 1.80006 3.49081 1.72447C3.36042 1.60352 3.31506 1.59848 2.72545 1.59848C2.13584 1.59848 2.09049 1.60352 1.96009 1.72447Z">
                                </path>
                                <path
                                  d="M8.16214 1.66399C7.83899 1.76981 7.61221 1.93611 7.4478 2.19312C7.31174 2.3947 7.28906 2.48541 7.28906 2.81297C7.28906 3.15061 7.31174 3.22116 7.45914 3.44289C7.56686 3.59407 7.73694 3.74526 7.90702 3.84101C8.15647 3.97707 8.23584 3.99219 8.62135 3.99219C9.00687 3.99219 9.08624 3.97707 9.33569 3.84101C9.50577 3.74526 9.67585 3.59407 9.78357 3.44289C9.93664 3.22116 9.95364 3.15061 9.95364 2.80793C9.95364 2.46525 9.93664 2.3947 9.78357 2.17296C9.54545 1.83029 9.18829 1.64383 8.7234 1.61863C8.50797 1.60351 8.28686 1.62367 8.16214 1.66399ZM8.93317 2.53076C9.02388 2.60635 9.0749 2.71218 9.0749 2.80793C9.0749 2.90368 9.02388 3.0095 8.93317 3.0851C8.84813 3.16573 8.72907 3.21108 8.62135 3.21108C8.51364 3.21108 8.39458 3.16573 8.30954 3.0851C8.21883 3.0095 8.16781 2.90368 8.16781 2.80793C8.16781 2.71218 8.21883 2.60635 8.30954 2.53076C8.39458 2.45013 8.51364 2.40478 8.62135 2.40478C8.72907 2.40478 8.84813 2.45013 8.93317 2.53076Z">
                                </path>
                                <path
                                  d="M1.96009 3.33677C1.86938 3.41236 1.81836 3.51819 1.81836 3.61394C1.81836 3.70969 1.86938 3.81551 1.96009 3.8911C2.09049 4.01205 2.13584 4.01709 2.72545 4.01709C3.31506 4.01709 3.36042 4.01205 3.49081 3.8911C3.58152 3.81551 3.63254 3.70969 3.63254 3.61394C3.63254 3.51819 3.58152 3.41236 3.49081 3.33677C3.36042 3.21583 3.31506 3.21079 2.72545 3.21079C2.13584 3.21079 2.09049 3.21583 1.96009 3.33677Z">
                                </path>
                                <path
                                  d="M1.96009 4.94908C1.86938 5.02467 1.81836 5.13049 1.81836 5.22624C1.81836 5.32199 1.86938 5.42782 1.96009 5.50341C2.09049 5.62436 2.13584 5.62939 2.72545 5.62939C3.31506 5.62939 3.36042 5.62436 3.49081 5.50341C3.58152 5.42782 3.63254 5.32199 3.63254 5.22624C3.63254 5.13049 3.58152 5.02467 3.49081 4.94908C3.36042 4.82813 3.31506 4.82309 2.72545 4.82309C2.13584 4.82309 2.09049 4.82813 1.96009 4.94908Z">
                                </path>
                                <path
                                  d="M1.96009 6.56187C1.86938 6.63746 1.81836 6.74329 1.81836 6.83904C1.81836 6.93478 1.86938 7.04061 1.96009 7.1162C2.09049 7.23715 2.13584 7.24219 2.72545 7.24219C3.31506 7.24219 3.36042 7.23715 3.49081 7.1162C3.58152 7.04061 3.63254 6.93478 3.63254 6.83904C3.63254 6.74329 3.58152 6.63746 3.49081 6.56187C3.36042 6.44092 3.31506 6.43588 2.72545 6.43588C2.13584 6.43588 2.09049 6.44092 1.96009 6.56187Z">
                                </path>
                                <path
                                  d="M6.03052 7.19834C4.31271 8.72024 4.08594 8.94197 4.08594 9.07804C4.08594 9.17379 4.13696 9.28465 4.22767 9.37032L4.36373 9.50135H5.71303H7.05666L5.5713 10.8267C4.27303 11.9807 4.08594 12.1722 4.08594 12.3083C4.08594 12.5149 4.32405 12.7266 4.56216 12.7266C4.71523 12.7266 4.96468 12.5199 6.67682 10.998C8.80848 9.10324 8.79148 9.12339 8.47966 8.82607L8.3436 8.69504H6.9943H5.65067L7.13603 7.36968C8.42297 6.21566 8.6214 6.01912 8.6214 5.8881C8.6214 5.68148 8.38328 5.46983 8.14517 5.46983C7.9921 5.46983 7.74265 5.6714 6.03052 7.19834Z">
                                </path>
                                <path
                                  d="M5.589 15.2714C5.49829 15.347 5.44727 15.4528 5.44727 15.5486C5.44727 15.6443 5.49829 15.7502 5.589 15.8257C5.8668 16.0777 6.35436 15.9013 6.35436 15.5486C6.35436 15.342 6.13325 15.1454 5.90081 15.1454C5.79309 15.1454 5.67404 15.1908 5.589 15.2714Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Mobile &amp; Laptops</span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                    <li className="category-item"><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="19"
                                height="17" viewBox="0 0 19 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.83349 1.13498C8.6063 1.41528 8.76533 1.90723 9.0834 1.90723C9.16973 1.90723 9.26515 1.85574 9.33331 1.76422C9.40601 1.67841 9.44691 1.55829 9.44691 1.4496C9.44691 1.34091 9.40601 1.22079 9.33331 1.13498C9.26515 1.04346 9.16973 0.991975 9.0834 0.991975C8.99707 0.991975 8.90165 1.04346 8.83349 1.13498Z">
                                </path>
                                <path
                                  d="M8.83376 2.5077L8.72016 2.64499V4.79583V6.94095H7.74778H6.77539L6.43461 6.71214C6.01203 6.42612 5.53492 6.22019 5.04419 6.1115C2.73137 5.59668 0.47308 7.63311 0.0641336 10.5962C-0.222129 12.6498 0.463992 14.7377 1.84078 15.9905C2.17248 16.2994 2.86769 16.7055 3.29026 16.8371C4.32172 17.1689 5.58945 16.963 6.45732 16.3166L6.75722 16.0935H9.06095H11.3647L11.6509 16.2937C12.5143 16.9057 13.5503 17.1346 14.5045 16.9229C15.4087 16.7227 16.1675 16.225 16.8355 15.3841C17.4443 14.6176 17.8079 13.8168 18.0169 12.7757C18.1486 12.1293 18.1396 10.8022 17.9987 10.1443C17.5807 8.19942 16.4083 6.71786 14.868 6.18587C14.4 6.0257 13.314 6.00854 12.8369 6.15727C12.4416 6.28311 11.9963 6.50621 11.6691 6.74646C11.4147 6.93523 11.3965 6.94095 10.9012 6.94095C10.4286 6.94095 10.3923 6.94667 10.2878 7.08396C10.2151 7.16976 10.1742 7.28989 10.1742 7.39858C10.1742 7.50726 10.2151 7.62739 10.2878 7.71319C10.3923 7.85048 10.4196 7.8562 10.9966 7.8562H11.601L11.9099 7.62739C13.4094 6.50049 15.2224 6.79794 16.4038 8.35387C16.94 9.06319 17.2399 9.77823 17.3807 10.7049C17.5398 11.7632 17.3671 12.9358 16.9127 13.8854C16.6719 14.3774 16.1221 15.081 15.7404 15.3841C14.5227 16.3337 13.0459 16.3223 11.8236 15.3498L11.61 15.1782H9.08367H6.55729L6.34373 15.3498C5.7712 15.8074 5.25775 16.0191 4.59889 16.0763C3.58107 16.1621 2.63141 15.7216 1.87258 14.8178C0.345852 12.9873 0.345852 10.0471 1.87258 8.21658C2.63141 7.31277 3.58107 6.87231 4.59889 6.95811C5.25775 7.01532 5.7712 7.22697 6.34373 7.68459L6.55729 7.8562H7.88864H9.22453L9.33358 7.71319L9.44718 7.57591V5.11045V2.64499L9.33358 2.5077C9.26542 2.41618 9.17 2.36469 9.08367 2.36469C8.99733 2.36469 8.90191 2.41618 8.83376 2.5077Z">
                                </path>
                                <path
                                  d="M3.98967 7.93135C3.73067 8.05147 3.54892 8.24024 3.41714 8.53198C3.30355 8.77795 3.28992 8.86376 3.27174 9.46439L3.25811 10.1337L2.72648 10.1508C2.22666 10.1737 2.17667 10.1852 1.9722 10.3453C1.32697 10.8487 1.32697 12.1873 1.9722 12.6907C2.17667 12.8508 2.22666 12.8623 2.72648 12.8851L3.25811 12.9023L3.27174 13.5716C3.28992 14.2008 3.299 14.2637 3.42623 14.5269C3.51257 14.6985 3.64888 14.8701 3.7852 14.9788C3.98513 15.1332 4.04874 15.1504 4.35772 15.1504C4.6667 15.1504 4.73032 15.1332 4.93025 14.9788C5.06656 14.8701 5.20288 14.6985 5.28921 14.5269C5.41644 14.2637 5.42552 14.2008 5.4437 13.5716L5.45733 12.9023L5.98896 12.8851C6.48878 12.8623 6.53877 12.8508 6.74778 12.6907C6.8841 12.582 7.02041 12.4104 7.10675 12.2387C7.22943 11.9871 7.24306 11.907 7.24306 11.518C7.24306 11.129 7.22943 11.0489 7.10675 10.7972C7.02041 10.6256 6.8841 10.454 6.74778 10.3453C6.53877 10.1852 6.48878 10.1737 5.98896 10.1508L5.45733 10.1337L5.4437 9.46439C5.42552 8.83516 5.41644 8.77223 5.28921 8.5091C5.09837 8.12012 4.81211 7.90846 4.43951 7.87986C4.26684 7.8627 4.08963 7.88558 3.98967 7.93135ZM4.60763 8.91524C4.71668 9.04681 4.72123 9.07541 4.72123 9.9163C4.72123 10.7572 4.72577 10.7858 4.83482 10.9174C4.93933 11.0546 4.96205 11.0604 5.63 11.0604C6.29794 11.0604 6.32066 11.0661 6.42517 11.2034C6.57512 11.3864 6.57512 11.6496 6.42517 11.8326C6.32066 11.9699 6.29794 11.9756 5.63 11.9756C4.96205 11.9756 4.93933 11.9813 4.83482 12.1186C4.72577 12.2502 4.72123 12.2788 4.72123 13.1082C4.72123 13.8633 4.71214 13.9834 4.6349 14.0979C4.51221 14.2866 4.20323 14.2866 4.08055 14.0979C4.0033 13.9834 3.99421 13.8633 3.99421 13.1082C3.99421 12.2788 3.98967 12.2502 3.88062 12.1186C3.77611 11.9813 3.75339 11.9756 3.08544 11.9756C2.4175 11.9756 2.39478 11.9699 2.29027 11.8326C2.21757 11.7468 2.17667 11.6267 2.17667 11.518C2.17667 11.4093 2.21757 11.2892 2.29027 11.2034C2.39478 11.0661 2.4175 11.0604 3.08544 11.0604C3.75339 11.0604 3.77611 11.0546 3.88062 10.9174C3.98967 10.7858 3.99421 10.7572 3.99421 9.9163C3.99421 9.07541 3.99876 9.04681 4.10781 8.91524C4.17597 8.82372 4.27139 8.77223 4.35772 8.77223C4.44405 8.77223 4.53947 8.82372 4.60763 8.91524Z">
                                </path>
                                <path
                                  d="M13.4419 7.93045C13.1829 8.05058 13.0012 8.23935 12.8694 8.53109C12.7604 8.7599 12.7422 8.86287 12.7422 9.23469C12.7422 9.61795 12.7604 9.69803 12.8785 9.94973C12.9648 10.1213 13.1012 10.2929 13.2375 10.4016C13.4374 10.5561 13.501 10.5732 13.81 10.5732C14.119 10.5732 14.1826 10.5561 14.3825 10.4016C14.5188 10.2929 14.6551 10.1213 14.7415 9.94973C14.8642 9.69803 14.8778 9.61795 14.8778 9.22897C14.8778 8.83998 14.8642 8.7599 14.7415 8.50821C14.5506 8.11922 14.2644 7.90757 13.8918 7.87897C13.7191 7.86181 13.5419 7.88469 13.4419 7.93045ZM14.0599 8.91435C14.2871 9.19464 14.1281 9.68659 13.81 9.68659C13.6237 9.68659 13.4465 9.4635 13.4465 9.22897C13.4465 8.99443 13.6237 8.77134 13.81 8.77134C13.8963 8.77134 13.9917 8.82282 14.0599 8.91435Z">
                                </path>
                                <path
                                  d="M11.6236 10.2185C11.3646 10.3387 11.1828 10.5274 11.0511 10.8192C10.942 11.048 10.9238 11.151 10.9238 11.5228C10.9238 11.906 10.942 11.9861 11.0601 12.2378C11.1465 12.4094 11.2828 12.581 11.4191 12.6897C11.619 12.8442 11.6827 12.8613 11.9916 12.8613C12.3006 12.8613 12.3642 12.8442 12.5642 12.6897C12.7005 12.581 12.8368 12.4094 12.9231 12.2378C13.0458 11.9861 13.0594 11.906 13.0594 11.5171C13.0594 11.1281 13.0458 11.048 12.9231 10.7963C12.7323 10.4073 12.446 10.1957 12.0734 10.1671C11.9008 10.1499 11.7235 10.1728 11.6236 10.2185ZM12.2415 11.2024C12.4687 11.4827 12.3097 11.9747 11.9916 11.9747C11.8053 11.9747 11.6281 11.7516 11.6281 11.5171C11.6281 11.2825 11.8053 11.0594 11.9916 11.0594C12.078 11.0594 12.1734 11.1109 12.2415 11.2024Z">
                                </path>
                                <path
                                  d="M15.2583 10.2185C14.9993 10.3387 14.8176 10.5274 14.6858 10.8192C14.5768 11.048 14.5586 11.151 14.5586 11.5228C14.5586 11.906 14.5768 11.9861 14.6949 12.2378C14.7812 12.4094 14.9176 12.581 15.0539 12.6897C15.2538 12.8442 15.3174 12.8613 15.6264 12.8613C15.9354 12.8613 15.999 12.8442 16.1989 12.6897C16.3352 12.581 16.4716 12.4094 16.5579 12.2378C16.6806 11.9861 16.6942 11.906 16.6942 11.5171C16.6942 11.1281 16.6806 11.048 16.5579 10.7963C16.367 10.4073 16.0808 10.1957 15.7082 10.1671C15.5355 10.1499 15.3583 10.1728 15.2583 10.2185ZM15.8763 11.2024C16.1035 11.4827 15.9445 11.9747 15.6264 11.9747C15.4401 11.9747 15.2629 11.7516 15.2629 11.5171C15.2629 11.2825 15.4401 11.0594 15.6264 11.0594C15.7127 11.0594 15.8082 11.1109 15.8763 11.2024Z">
                                </path>
                                <path
                                  d="M13.4419 12.5076C13.1829 12.6277 13.0012 12.8165 12.8694 13.1082C12.7604 13.337 12.7422 13.44 12.7422 13.8118C12.7422 14.1951 12.7604 14.2752 12.8785 14.5269C12.9648 14.6985 13.1012 14.8701 13.2375 14.9788C13.4374 15.1332 13.501 15.1504 13.81 15.1504C14.119 15.1504 14.1826 15.1332 14.3825 14.9788C14.5188 14.8701 14.6551 14.6985 14.7415 14.5269C14.8642 14.2752 14.8778 14.1951 14.8778 13.8061C14.8778 13.4171 14.8642 13.337 14.7415 13.0854C14.5506 12.6964 14.2644 12.4847 13.8918 12.4561C13.7191 12.439 13.5419 12.4618 13.4419 12.5076ZM14.0599 13.4915C14.2871 13.7718 14.1281 14.2637 13.81 14.2637C13.6237 14.2637 13.4465 14.0406 13.4465 13.8061C13.4465 13.5716 13.6237 13.3485 13.81 13.3485C13.8963 13.3485 13.9917 13.4 14.0599 13.4915Z">
                                </path>
                                <path
                                  d="M7.37922 13.4914C7.30652 13.5772 7.26562 13.6974 7.26562 13.806C7.26562 13.9147 7.30652 14.0349 7.37922 14.1207C7.48373 14.258 7.52008 14.2637 7.99264 14.2637C8.4652 14.2637 8.50155 14.258 8.60606 14.1207C8.67876 14.0349 8.71966 13.9147 8.71966 13.806C8.71966 13.6974 8.67876 13.5772 8.60606 13.4914C8.50155 13.3541 8.4652 13.3484 7.99264 13.3484C7.52008 13.3484 7.48373 13.3541 7.37922 13.4914Z">
                                </path>
                                <path
                                  d="M9.56086 13.4914C9.48816 13.5772 9.44727 13.6974 9.44727 13.806C9.44727 13.9147 9.48816 14.0349 9.56086 14.1207C9.66537 14.258 9.70172 14.2637 10.1743 14.2637C10.6468 14.2637 10.6832 14.258 10.7877 14.1207C10.8604 14.0349 10.9013 13.9147 10.9013 13.806C10.9013 13.6974 10.8604 13.5772 10.7877 13.4914C10.6832 13.3541 10.6468 13.3484 10.1743 13.3484C9.70172 13.3484 9.66537 13.3541 9.56086 13.4914Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Gaming Entertainment</span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                    <li className="category-item"><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="18"
                                height="14" viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M8.53736 0.241684C8.48733 0.278066 8.1417 0.841993 7.76423 1.50142L7.07751 2.70204L4.23969 2.72478C1.73385 2.74752 1.37457 2.75662 1.21085 2.82483C0.633281 3.05222 0.228527 3.50245 0.0784495 4.06638C-0.0261499 4.47114 -0.0261499 12.257 0.0784495 12.6617C0.196692 13.1074 0.465013 13.4667 0.874315 13.7305C1.32455 14.0215 0.910697 14.0079 8.86025 13.9942L16.0867 13.9806L16.3459 13.876C16.6506 13.7532 16.9963 13.453 17.1918 13.1483C17.4783 12.7072 17.4738 12.7982 17.4738 8.36405C17.4738 3.98452 17.4783 4.04819 17.2191 3.60705C17.0508 3.32054 16.6506 2.97491 16.3459 2.85212L16.0867 2.74752L12.8896 2.73388L9.69705 2.72023L9.58335 2.83393C9.44692 2.97036 9.43327 3.17047 9.55606 3.32054L9.64247 3.42969L12.8214 3.45243L16.0048 3.47517L16.2277 3.6116C16.3641 3.69801 16.5006 3.83444 16.587 3.97088L16.7234 4.19372V8.36405V12.5344L16.587 12.7572C16.5006 12.8937 16.3641 13.0301 16.2277 13.1165L16.0048 13.2529H8.74201H1.47917L1.25633 13.1165C1.1199 13.0301 0.983462 12.8937 0.897054 12.7572L0.76062 12.5344V8.36405V4.19372L0.897054 3.97088C0.983462 3.83444 1.1199 3.69801 1.25633 3.6116L1.47917 3.47517L4.47162 3.45243C6.80465 3.43424 7.47772 3.41605 7.5232 3.37057C7.55503 3.33873 7.89157 2.77936 8.26449 2.11992L8.95121 0.928401H10.743H12.5349L12.7896 1.37863C12.9305 1.62421 13.0943 1.86525 13.1488 1.91073C13.2625 2.00623 13.4308 2.01987 13.5627 1.95166C13.6673 1.89708 13.7446 1.67424 13.7128 1.53781C13.6673 1.37409 13.067 0.346283 12.9624 0.255327C12.876 0.182562 12.7031 0.178015 10.7476 0.178015C9.00123 0.178015 8.60557 0.18711 8.53736 0.241684Z">
                                </path>
                                <path
                                  d="M1.94377 1.01875C1.83463 1.12335 1.83008 1.15973 1.83008 1.6327C1.83008 2.10567 1.83463 2.14206 1.94377 2.24666C2.01199 2.31942 2.10749 2.36035 2.1939 2.36035C2.42584 2.36035 2.55773 2.18754 2.55773 1.88283V1.6327H2.92155H3.28537V1.88283C3.28537 2.09203 3.30357 2.1557 3.39907 2.24666C3.5446 2.39673 3.7538 2.39673 3.89933 2.24666C4.00847 2.14206 4.01302 2.10567 4.01302 1.6327C4.01302 1.15973 4.00847 1.12335 3.89933 1.01875C3.79018 0.905056 3.78108 0.905056 2.92155 0.905056C2.06202 0.905056 2.05292 0.905056 1.94377 1.01875Z">
                                </path>
                                <path
                                  d="M8.49178 2.83917C8.26439 3.06201 8.42357 3.45312 8.74191 3.45312C8.82832 3.45312 8.92383 3.41219 8.99204 3.33943C9.06481 3.27121 9.10574 3.17571 9.10574 3.0893C9.10574 3.00289 9.06481 2.90739 8.99204 2.83917C8.92383 2.76641 8.82832 2.72548 8.74191 2.72548C8.65551 2.72548 8.56 2.76641 8.49178 2.83917Z">
                                </path>
                                <path
                                  d="M2.36085 3.88046C1.58318 4.16697 1.25119 4.99012 1.62866 5.68594C1.86969 6.12253 2.23351 6.34082 2.73832 6.34082C3.24767 6.34082 3.6024 6.12707 3.85253 5.67229C3.97077 5.46764 3.98897 5.38123 3.98897 5.09018C3.98897 4.79912 3.97077 4.71271 3.85253 4.50806C3.707 4.23974 3.54783 4.08966 3.26586 3.94413C3.03393 3.82589 2.59279 3.79405 2.36085 3.88046ZM3.11124 4.71726C3.37956 4.98103 3.2977 5.40852 2.94752 5.57224C2.74287 5.67229 2.51548 5.62682 2.34721 5.44945C2.09708 5.19023 2.19713 4.73545 2.53367 4.58537C2.69739 4.5126 2.97026 4.57173 3.11124 4.71726Z">
                                </path>
                                <path
                                  d="M9.82429 4.24878C8.29623 4.53984 7.10016 5.65405 6.68631 7.17756C6.54988 7.67327 6.54988 8.69198 6.68631 9.18769C7.07287 10.6021 8.13706 11.6708 9.54233 12.0573C10.0562 12.1983 11.0658 12.1983 11.5797 12.0573C12.985 11.6708 14.0492 10.6021 14.4358 9.18769C14.5767 8.68743 14.5722 7.67327 14.4358 7.16392C14.0492 5.7541 12.9623 4.67627 11.5661 4.31245C11.1068 4.18966 10.2882 4.16237 9.82429 4.24878ZM11.5388 5.06283C12.5894 5.39937 13.3306 6.14066 13.6854 7.20485C13.79 7.51865 13.8036 7.64598 13.8082 8.15989C13.8127 8.83296 13.7309 9.17859 13.4352 9.75162C13.2079 10.1882 12.5666 10.8294 12.13 11.0568C11.5661 11.3479 11.2068 11.4343 10.561 11.4343C9.91525 11.4343 9.55597 11.3479 8.99204 11.0568C8.55546 10.8294 7.91422 10.1882 7.68683 9.75162C7.39577 9.18769 7.30936 8.82841 7.30936 8.18262C7.30936 7.53684 7.39577 7.17756 7.68683 6.61363C7.91422 6.1725 8.55546 5.53126 8.99204 5.30842C9.61054 4.99462 10.0108 4.90366 10.6975 4.93095C11.0476 4.94459 11.2705 4.97643 11.5388 5.06283Z">
                                </path>
                                <path
                                  d="M9.98241 5.70365C9.00008 5.9174 8.19512 6.79513 8.04959 7.80474C7.75399 9.8467 9.84597 11.3611 11.6924 10.4516C12.2063 10.1969 12.5747 9.82851 12.8293 9.31461C13.7798 7.38179 12.0926 5.24433 9.98241 5.70365ZM11.0329 6.4313C11.3831 6.52226 11.6514 6.68598 11.897 6.95885C12.2836 7.38634 12.4428 7.92298 12.3473 8.47781C12.279 8.88257 12.1335 9.15998 11.8379 9.46014C11.5378 9.75574 11.2603 9.90127 10.8556 9.96949C10.2917 10.065 9.75957 9.90127 9.31843 9.50107C8.60442 8.85073 8.5544 7.6774 9.20928 6.96794C9.68225 6.45404 10.3553 6.25394 11.0329 6.4313Z">
                                </path>
                                <path
                                  d="M1.21526 6.84113C1.14249 6.90934 1.10156 7.00485 1.10156 7.09125C1.10156 7.17766 1.14249 7.27317 1.21526 7.34138L1.3244 7.45508H3.64833H5.97226L6.0814 7.34138C6.15417 7.27317 6.1951 7.17766 6.1951 7.09125C6.1951 7.00485 6.15417 6.90934 6.0814 6.84113L5.97226 6.72743H3.64833H1.3244L1.21526 6.84113Z">
                                </path>
                                <path
                                  d="M15.0414 6.84113C14.9687 6.90934 14.9277 7.00485 14.9277 7.09125C14.9277 7.17766 14.9687 7.27317 15.0414 7.34138C15.146 7.45053 15.1824 7.45508 15.6554 7.45508C16.1284 7.45508 16.1647 7.45053 16.2693 7.34138C16.3421 7.27317 16.383 7.17766 16.383 7.09125C16.383 7.00485 16.3421 6.90934 16.2693 6.84113C16.1647 6.73198 16.1284 6.72743 15.6554 6.72743C15.1824 6.72743 15.146 6.73198 15.0414 6.84113Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Image &amp; Video</span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                    <li className="category-item"><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="20"
                                height="16" viewBox="0 0 20 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M0.749276 0.46558C0.471946 0.567754 0.277329 0.728313 0.136232 0.97645C0.0194617 1.17107 0 1.25864 0 1.5749C0 1.90088 0.0194617 1.969 0.145963 2.18308C0.238406 2.32904 0.384369 2.475 0.530331 2.56744C0.739545 2.69394 0.817392 2.71341 1.11418 2.71341C1.37692 2.70854 1.50828 2.68421 1.67371 2.59664L1.88292 2.4896L2.00456 2.6015C2.16998 2.75233 2.55435 3.32645 2.73437 3.68649C3.21118 4.64012 3.6442 6.1484 3.82422 7.50585C3.87288 7.86589 3.90694 7.98753 3.99451 8.07511C4.22806 8.30865 4.64648 8.14322 4.64648 7.81724C4.64648 7.24312 4.3205 5.69591 3.98478 4.69364C3.59555 3.5162 3.17226 2.71827 2.57868 2.03225C2.35 1.76951 2.32081 1.71113 2.29648 1.45326C2.2381 0.864545 1.8148 0.45585 1.23095 0.421792C1.04607 0.407195 0.856315 0.426657 0.749276 0.46558ZM1.41097 1.30243C1.65424 1.54084 1.48395 1.95927 1.14338 1.95927C0.943893 1.95927 0.754141 1.76951 0.754141 1.57003C0.754141 1.37055 0.943893 1.1808 1.14338 1.1808C1.23582 1.1808 1.33799 1.22459 1.41097 1.30243Z">
                                </path>
                                <path
                                  d="M6.45619 4.76213C6.11561 4.8497 5.83828 5.01999 5.59014 5.27786C5.13279 5.75467 5.03548 6.09525 5.03548 7.18024C5.03548 7.92952 5.04035 7.94898 5.15712 8.06575C5.29821 8.21171 5.51716 8.22145 5.67285 8.09494C5.78476 8.0025 5.78962 7.97331 5.81395 7.13159C5.83828 6.26068 5.83828 6.25581 5.98424 6.01741C6.07668 5.87144 6.22265 5.72548 6.36861 5.63304L6.60701 5.48708L9.54573 5.47248C11.8568 5.46275 12.5039 5.47248 12.6012 5.52113C12.6645 5.55519 13.2726 6.37258 13.9635 7.36026C14.6496 8.33822 15.2577 9.17507 15.3113 9.21886C15.394 9.29184 15.5156 9.30643 16.1335 9.30643C16.9655 9.30643 17.2574 9.35509 17.6515 9.55944C18.0067 9.74919 18.284 10.0557 18.4787 10.4644C18.6295 10.7855 18.6343 10.8099 18.6489 11.6029L18.6684 12.4203H18.0651H17.4569L17.4034 12.1722C17.238 11.457 16.6347 10.7077 15.9681 10.3817C15.3307 10.0752 14.5474 10.0265 13.8614 10.2601C13.0537 10.5277 12.3239 11.3353 12.1293 12.1722L12.0758 12.4203H10.0955H8.1153L8.06178 12.1722C7.89635 11.457 7.29304 10.7077 6.62648 10.3817C5.9891 10.0752 5.20577 10.0265 4.51975 10.2601C3.71209 10.5277 2.98227 11.3353 2.78765 12.1722L2.73413 12.4203H2.13082H1.53237V10.8634V9.30643H7.24925H12.971L13.0878 9.1848C13.2337 9.0437 13.2435 8.82476 13.117 8.66906L13.0245 8.55229H6.98165H0.938792L0.846349 8.66906C0.758772 8.7761 0.753906 8.88801 0.753906 10.8731V12.9604L0.875542 13.0771C0.992312 13.1988 1.00204 13.1988 1.86322 13.1988H2.73413L2.79252 13.4664C3.05525 14.6292 4.19376 15.5342 5.40039 15.5342C6.65567 15.5342 7.78931 14.6487 8.05691 13.4664L8.1153 13.1988H10.0955H12.0758L12.1341 13.4664C12.3969 14.6292 13.5354 15.5342 14.742 15.5342C15.9973 15.5342 17.1309 14.6487 17.3985 13.4664L17.4569 13.1988H18.3278C19.515 13.1988 19.4371 13.2864 19.4371 11.9678C19.4371 10.8439 19.369 10.4401 19.0868 9.94381C18.7706 9.38428 18.0797 8.84908 17.4423 8.66906C17.3207 8.63501 16.8877 8.59608 16.4741 8.58149L15.7248 8.55229L14.4793 6.77641C13.2143 4.98107 13.0926 4.83511 12.7277 4.73293C12.6207 4.70374 11.4481 4.68428 9.63331 4.68915C7.26385 4.68915 6.6654 4.70374 6.45619 4.76213ZM5.93072 10.985C6.30536 11.0823 6.59242 11.2575 6.85515 11.5494C7.26871 12.0067 7.439 12.5809 7.33683 13.1744C7.26385 13.6075 7.10815 13.9043 6.7919 14.2254C6.47078 14.5416 6.17399 14.6973 5.74097 14.7703C4.43703 14.9941 3.28879 13.8459 3.5126 12.5419C3.71209 11.3937 4.79708 10.6931 5.93072 10.985ZM15.2723 10.985C15.647 11.0823 15.934 11.2575 16.1968 11.5494C16.6103 12.0067 16.7806 12.5809 16.6784 13.1744C16.6055 13.6075 16.4498 13.9043 16.1335 14.2254C15.8124 14.5416 15.5156 14.6973 15.0826 14.7703C13.7787 14.9941 12.6304 13.8459 12.8542 12.5419C13.0537 11.3937 14.1387 10.6931 15.2723 10.985Z">
                                </path>
                                <path
                                  d="M5.03053 11.7541C4.7532 11.8563 4.55858 12.0169 4.41748 12.265C4.30071 12.4596 4.28125 12.5472 4.28125 12.8634C4.28125 13.1894 4.30071 13.2575 4.42721 13.4716C4.51966 13.6176 4.66562 13.7635 4.81158 13.856C5.02566 13.9874 5.09378 14.002 5.42462 14.002C5.75547 14.002 5.82359 13.9874 6.03767 13.856C6.18363 13.7635 6.32959 13.6176 6.42204 13.4716C6.5534 13.2575 6.568 13.1894 6.568 12.8586C6.568 12.5277 6.5534 12.4596 6.42204 12.2455C6.21769 11.9147 5.91117 11.7347 5.5122 11.7103C5.32732 11.6957 5.13756 11.7152 5.03053 11.7541ZM5.69222 12.591C5.93549 12.8294 5.7652 13.2478 5.42462 13.2478C5.33218 13.2478 5.23001 13.204 5.15703 13.1262C5.07918 13.0532 5.03539 12.951 5.03539 12.8586C5.03539 12.7661 5.07918 12.664 5.15703 12.591C5.23001 12.5131 5.33218 12.4693 5.42462 12.4693C5.51707 12.4693 5.61924 12.5131 5.69222 12.591Z">
                                </path>
                                <path
                                  d="M14.3723 11.7541C14.095 11.8563 13.9004 12.0169 13.7593 12.265C13.6425 12.4596 13.623 12.5472 13.623 12.8634C13.623 13.1894 13.6425 13.2575 13.769 13.4716C13.8615 13.6176 14.0074 13.7635 14.1534 13.856C14.3675 13.9874 14.4356 14.002 14.7664 14.002C15.0973 14.002 15.1654 13.9874 15.3795 13.856C15.5254 13.7635 15.6714 13.6176 15.7638 13.4716C15.8952 13.2575 15.9098 13.1894 15.9098 12.8586C15.9098 12.5277 15.8952 12.4596 15.7638 12.2455C15.5595 11.9147 15.253 11.7347 14.854 11.7103C14.6691 11.6957 14.4794 11.7152 14.3723 11.7541ZM15.034 12.591C15.2773 12.8294 15.107 13.2478 14.7664 13.2478C14.5669 13.2478 14.3772 13.0581 14.3772 12.8586C14.3772 12.6591 14.5669 12.4693 14.7664 12.4693C14.8589 12.4693 14.961 12.5131 15.034 12.591Z">
                                </path>
                                <path
                                  d="M9.82867 5.97373C9.70703 6.0905 9.70703 6.10023 9.70703 7.0198C9.70703 7.93936 9.70703 7.94909 9.82867 8.06586C9.90165 8.14371 10.0038 8.1875 10.0963 8.1875C10.1887 8.1875 10.2909 8.14371 10.3639 8.06586C10.4855 7.94909 10.4855 7.93936 10.4855 7.0198C10.4855 6.10023 10.4855 6.0905 10.3639 5.97373C10.2909 5.89588 10.1887 5.8521 10.0963 5.8521C10.0038 5.8521 9.90165 5.89588 9.82867 5.97373Z">
                                </path>
                                <path
                                  d="M13.72 8.69864C13.4767 8.93704 13.647 9.35547 13.9876 9.35547C14.187 9.35547 14.3768 9.16572 14.3768 8.96623C14.3768 8.76675 14.187 8.577 13.9876 8.577C13.8951 8.577 13.7929 8.62079 13.72 8.69864Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Vehicles</span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                    <li className="category-item"><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="17"
                                height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M4.99241 0.888779C3.33655 1.18984 2.02775 2.50282 1.73923 4.16705C1.64306 4.70228 1.6556 4.94898 1.78105 5.07024C1.91485 5.20823 2.1072 5.20823 2.24101 5.07024C2.32464 4.9908 2.34554 4.92808 2.34554 4.76082C2.34554 4.4723 2.44172 3.99561 2.57134 3.65273C2.88913 2.81225 3.63344 2.05959 4.46973 1.73762C5.07186 1.50345 5.16803 1.49509 8.03234 1.49509C10.8716 1.49509 10.9803 1.50345 11.5657 1.72507C12.2013 1.96342 12.8703 2.52373 13.2299 3.10914C13.5142 3.57746 13.7191 4.27158 13.7191 4.76082C13.7191 4.92808 13.74 4.9908 13.8237 5.07024C13.9617 5.21241 14.1498 5.20823 14.292 5.06606C14.3965 4.96153 14.4007 4.9448 14.3756 4.57683C14.2669 2.97533 13.1797 1.562 11.6493 1.03513C11.0764 0.838602 10.8716 0.826057 7.9947 0.830238C5.97506 0.83442 5.21821 0.846964 4.99241 0.888779Z">
                                </path>
                                <path
                                  d="M4.45805 2.60347C4.39115 2.66619 4.35352 2.754 4.35352 2.83345C4.35352 2.9129 4.39115 3.00071 4.45805 3.06343C4.55423 3.16379 4.58768 3.16797 5.02255 3.16797C5.45742 3.16797 5.49087 3.16379 5.58705 3.06343C5.65395 3.00071 5.69158 2.9129 5.69158 2.83345C5.69158 2.754 5.65395 2.66619 5.58705 2.60347C5.49087 2.50312 5.45742 2.49893 5.02255 2.49893C4.58768 2.49893 4.55423 2.50312 4.45805 2.60347Z">
                                </path>
                                <path
                                  d="M10.4795 2.60347C10.4126 2.66619 10.375 2.754 10.375 2.83345C10.375 2.9129 10.4126 3.00071 10.4795 3.06343C10.5757 3.16379 10.6092 3.16797 11.044 3.16797C11.4789 3.16797 11.5124 3.16379 11.6085 3.06343C11.6754 3.00071 11.7131 2.9129 11.7131 2.83345C11.7131 2.754 11.6754 2.66619 11.6085 2.60347C11.5124 2.50312 11.4789 2.49893 11.044 2.49893C10.6092 2.49893 10.5757 2.50312 10.4795 2.60347Z">
                                </path>
                                <path
                                  d="M7.46782 3.94136C7.40091 4.00408 7.36328 4.09189 7.36328 4.17134C7.36328 4.25079 7.40091 4.3386 7.46782 4.40132C7.56399 4.50168 7.59744 4.50586 8.03232 4.50586C8.46719 4.50586 8.50064 4.50168 8.59681 4.40132C8.66372 4.3386 8.70135 4.25079 8.70135 4.17134C8.70135 4.09189 8.66372 4.00408 8.59681 3.94136C8.50064 3.84101 8.46719 3.83682 8.03232 3.83682C7.59744 3.83682 7.56399 3.84101 7.46782 3.94136Z">
                                </path>
                                <path
                                  d="M4.45805 5.27925C4.39115 5.34197 4.35352 5.42978 4.35352 5.50923C4.35352 5.58868 4.39115 5.67649 4.45805 5.73921C4.55423 5.83957 4.58768 5.84375 5.02255 5.84375C5.45742 5.84375 5.49087 5.83957 5.58705 5.73921C5.65395 5.67649 5.69158 5.58868 5.69158 5.50923C5.69158 5.42978 5.65395 5.34197 5.58705 5.27925C5.49087 5.1789 5.45742 5.17472 5.02255 5.17472C4.58768 5.17472 4.55423 5.1789 4.45805 5.27925Z">
                                </path>
                                <path
                                  d="M10.4795 5.27925C10.4126 5.34197 10.375 5.42978 10.375 5.50923C10.375 5.58868 10.4126 5.67649 10.4795 5.73921C10.5757 5.83957 10.6092 5.84375 11.044 5.84375C11.4789 5.84375 11.5124 5.83957 11.6085 5.73921C11.6754 5.67649 11.7131 5.58868 11.7131 5.50923C11.7131 5.42978 11.6754 5.34197 11.6085 5.27925C11.5124 5.1789 11.4789 5.17472 11.044 5.17472C10.6092 5.17472 10.5757 5.1789 10.4795 5.27925Z">
                                </path>
                                <path
                                  d="M1.60621 5.52997C0.861914 5.69304 0.255601 6.3119 0.0674353 7.10638C-0.0203755 7.48689 -0.024557 11.6224 0.0674353 12.0447C0.25142 12.9144 1.02917 13.6713 1.9031 13.826C2.07454 13.8594 4.04401 13.872 8.04985 13.872C14.5938 13.872 14.2593 13.8845 14.8196 13.5918C15.3925 13.2908 15.8107 12.7514 15.9779 12.0907C16.0574 11.7896 16.0615 11.6224 16.0615 9.53581C16.0615 7.04366 16.0532 6.93494 15.7856 6.48334C15.6016 6.16973 15.2336 5.83103 14.9116 5.67632C13.7534 5.12436 12.4153 5.80594 12.1101 7.10638C12.0641 7.30709 12.0473 7.65833 12.0473 8.61171V9.85778H8.30492H4.55833L4.45797 9.96232C4.31999 10.0961 4.31999 10.2885 4.45797 10.4223L4.55833 10.5268H8.52654C12.3735 10.5268 12.5031 10.5226 12.5951 10.4474L12.6955 10.3679L12.7164 8.80405L12.7373 7.24437L12.8585 6.98512C13.0927 6.47916 13.515 6.20318 14.0586 6.199C14.3388 6.199 14.4099 6.21573 14.6649 6.34535C14.8698 6.44989 14.9953 6.55024 15.1082 6.70078C15.4009 7.08129 15.3967 7.06456 15.3841 9.63199C15.3716 11.6934 15.3632 11.9485 15.2963 12.1158C15.1416 12.5172 14.7109 12.9521 14.3053 13.1068C14.1297 13.1779 13.7325 13.1821 8.14185 13.1946C2.85229 13.203 2.13726 13.1988 1.91146 13.1402C1.31769 12.9855 0.841006 12.4879 0.715563 11.8942C0.686292 11.7436 0.673748 10.945 0.682111 9.43546L0.694655 7.20255L0.832644 6.92239C1.33024 5.9063 2.68921 5.89794 3.2119 6.90149C3.3248 7.11474 3.32898 7.13983 3.34989 8.05139C3.37079 8.97131 3.37079 8.98804 3.47115 9.06749C3.60496 9.17621 3.79312 9.16784 3.91438 9.0424C4.01892 8.94204 4.01892 8.93786 4.01892 8.12248C4.01892 7.52871 4.00219 7.22346 3.95202 7.01439C3.78476 6.27845 3.12409 5.65123 2.37142 5.51324C2.06199 5.4547 1.93237 5.45888 1.60621 5.52997Z">
                                </path>
                                <path
                                  d="M6.90391 7.22374C6.06343 7.30319 4.73373 7.59171 4.49538 7.74643C4.36994 7.82587 4.33649 7.99313 4.41594 8.14785C4.52047 8.34438 4.62501 8.3611 5.06824 8.24402C6.12197 7.97641 7.11716 7.87605 8.4636 7.90532C9.48387 7.92623 10.0233 7.99313 10.8763 8.21057C11.3697 8.33601 11.4659 8.33601 11.5788 8.21475C11.7795 8.0015 11.6457 7.69625 11.3112 7.60426C11.0143 7.52063 10.1529 7.35337 9.66368 7.28647C9.09082 7.20702 7.46841 7.17357 6.90391 7.22374Z">
                                </path>
                                <path
                                  d="M3.45387 9.96382C3.24479 10.1687 3.39115 10.5283 3.68385 10.5283C3.7633 10.5283 3.85111 10.4907 3.91383 10.4238C3.98073 10.3611 4.01837 10.2733 4.01837 10.1938C4.01837 10.1144 3.98073 10.0265 3.91383 9.96382C3.85111 9.89692 3.7633 9.85929 3.68385 9.85929C3.6044 9.85929 3.51659 9.89692 3.45387 9.96382Z">
                                </path>
                                <path
                                  d="M2.11626 14.3118C2.0159 14.408 2.01172 14.4289 2.01172 15.0436C2.01172 15.6583 2.0159 15.6792 2.11626 15.7753L2.21661 15.8799H3.51705H4.81748L4.91784 15.7753C5.01819 15.6792 5.02237 15.6583 5.02237 15.0436C5.02237 14.4289 5.01819 14.408 4.91784 14.3118C4.85512 14.2449 4.76731 14.2073 4.68786 14.2073C4.60841 14.2073 4.5206 14.2449 4.45788 14.3118C4.3617 14.4038 4.35334 14.4456 4.35334 14.8136V15.2108H3.51705H2.68075V14.8136C2.68075 14.4456 2.67239 14.4038 2.57622 14.3118C2.51349 14.2449 2.42568 14.2073 2.34624 14.2073C2.26679 14.2073 2.17898 14.2449 2.11626 14.3118Z">
                                </path>
                                <path
                                  d="M11.1495 14.3118C11.0491 14.408 11.0449 14.4289 11.0449 15.0436C11.0449 15.6583 11.0491 15.6792 11.1495 15.7753L11.2498 15.8799H12.5502H13.8507L13.951 15.7753C14.0514 15.6792 14.0556 15.6583 14.0556 15.0436C14.0556 14.4289 14.0514 14.408 13.951 14.3118C13.8883 14.2449 13.8005 14.2073 13.7211 14.2073C13.6416 14.2073 13.5538 14.2449 13.4911 14.3118C13.3949 14.4038 13.3865 14.4456 13.3865 14.8136V15.2108H12.5502H11.714V14.8136C11.714 14.4456 11.7056 14.4038 11.6094 14.3118C11.5467 14.2449 11.4589 14.2073 11.3794 14.2073C11.3 14.2073 11.2122 14.2449 11.1495 14.3118Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Furnitures</span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                    <li className="category-item"><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="17"
                                height="18" viewBox="0 0 17 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M7.64435 1.35847L6.55911 2.42386L4.75403 5.58403C2.53408 9.47054 2.74915 9.06021 2.81981 9.27423C2.89226 9.49383 3.14133 9.61886 3.34126 9.536C3.44281 9.49396 3.85143 8.81169 5.37629 6.13821L7.28428 2.79306L7.93976 2.1388L8.59524 1.48461L8.86841 2.52878C9.01863 3.10312 9.14102 3.58816 9.14035 3.60667C9.13967 3.62518 8.0385 5.17652 6.69339 7.05417C4.40204 10.2524 4.24925 10.4782 4.27328 10.6296C4.33028 10.9885 4.73276 11.1074 4.98202 10.8391C5.04926 10.7667 6.17715 9.22067 7.48837 7.40358C8.79964 5.58642 9.87747 4.09306 9.8836 4.08497C9.88973 4.07688 10.1072 4.03943 10.3669 4.0018C10.6265 3.96411 10.909 3.92133 10.9945 3.90662L11.1501 3.8799V4.63571V5.39146L8.20827 8.33676C6.10925 10.4382 5.2566 11.3222 5.23226 11.4223C5.16546 11.6966 5.44451 11.9757 5.7189 11.9089C5.81904 11.8846 6.70939 11.0256 8.82839 8.90895L11.7976 5.94319H12.5521H13.3066L13.2835 6.05087C13.2707 6.11014 13.2251 6.39562 13.1821 6.68533L13.1039 7.21205L9.68612 9.70136C7.25112 11.4749 6.25266 12.2285 6.21393 12.322C6.10894 12.5755 6.28944 12.8862 6.54152 12.8859C6.72624 12.8856 6.63069 12.9514 10.2739 10.3158C12.085 9.00567 13.5995 7.93391 13.6394 7.93422C13.699 7.93464 15.6488 8.43237 15.6867 8.45683C15.6931 8.46099 15.3914 8.77007 15.0164 9.14363L14.3343 9.82295L11.0189 11.7159C9.19545 12.7571 7.6818 13.6496 7.6552 13.6992C7.49934 13.9904 7.69093 14.3225 8.01472 14.3225C8.13172 14.3225 8.98143 13.8585 11.4438 12.45L14.7173 10.5775L15.7842 9.51725C17.315 7.99593 17.3399 8.08781 15.244 7.52383C14.533 7.33248 13.9457 7.17135 13.9389 7.16571C13.9321 7.16008 13.9838 6.77359 14.0537 6.30681L14.1809 5.45821L14.0849 5.32962L13.9889 5.20098L13.0004 5.18805L12.012 5.17511V4.24463C12.012 2.88358 12.04 2.91116 10.8412 3.09313C10.3976 3.16049 10.0279 3.20891 10.0198 3.20075C10.0116 3.1926 9.84449 2.60509 9.64837 1.89512C9.22486 0.362284 9.25723 0.450724 9.08782 0.363142C8.81147 0.220217 8.78561 0.238052 7.64435 1.35847ZM1.56915 10.6715C0.407053 11.8422 0.163737 12.2507 0.029085 13.2569C-0.283856 15.5959 1.98218 17.6402 4.24355 17.0589C4.84486 16.9043 4.81409 16.1112 4.21052 16.2092C2.54708 16.4793 1.26565 15.7255 0.881552 14.251C0.617826 13.2383 0.910357 12.4628 1.96397 11.3818L2.6213 10.7074L4.50299 12.5862L6.38468 14.4651L6.00297 14.8491L5.62126 15.233L4.3513 13.9638C3.01735 12.6305 2.99301 12.6122 2.70116 12.7242C2.5825 12.7698 2.47335 13.0181 2.5062 13.1677C2.56644 13.4418 5.39872 16.1899 5.62108 16.1899C5.89663 16.1899 7.36689 14.7399 7.36836 14.4667C7.36984 14.1949 2.91873 9.77374 2.64361 9.77374C2.46936 9.77374 2.41641 9.81793 1.56915 10.6715ZM1.8132 12.0721C1.56713 12.3181 1.74903 12.7424 2.10046 12.7424C2.35585 12.7424 2.48352 12.6147 2.48352 12.3593C2.48352 12.2317 2.45159 12.1359 2.38779 12.0721C2.32392 12.0082 2.22813 11.9763 2.10046 11.9763C1.9728 11.9763 1.87701 12.0082 1.8132 12.0721Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Sport </span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                    <li className="category-item "><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="17"
                                height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M5.7357 0.911472C5.55227 1.03555 5.50911 1.2028 5.56306 1.56425C5.62241 1.99045 5.80583 2.40585 6.09176 2.75652C6.42624 3.16653 6.53414 3.43088 6.53414 3.84629C6.53414 4.2509 6.43164 4.50986 6.10794 4.93605C5.55767 5.66436 5.36345 6.6732 5.72491 6.86742C5.88136 6.95374 6.07558 6.93216 6.22124 6.81347C6.32913 6.73255 6.3669 6.63544 6.39927 6.39806C6.44782 5.98805 6.52335 5.82621 6.84165 5.43238C7.64549 4.44512 7.64009 3.33917 6.83086 2.30875C6.52875 1.92571 6.44782 1.74228 6.39927 1.34306C6.3669 1.11108 6.32913 1.01398 6.22124 0.933052C6.05939 0.803575 5.89754 0.79818 5.7357 0.911472Z">
                                </path>
                                <path
                                  d="M3.27421 2.66498C3.02605 2.8592 3.09079 3.43645 3.41448 3.92199C3.51159 4.06765 3.63567 4.25108 3.68422 4.32661C3.82988 4.53701 3.8083 4.92004 3.64646 5.14663C3.34434 5.56743 3.17171 5.97204 3.14473 6.3335C3.12315 6.66798 3.12855 6.69496 3.26882 6.80285C3.57093 7.04023 3.90541 6.89996 3.97015 6.50614C4.01331 6.24718 4.10502 6.04757 4.34779 5.71309C4.82254 5.05491 4.78478 4.27266 4.23989 3.60909C4.11042 3.44724 4.03489 3.28539 3.99713 3.08578C3.91081 2.60564 3.58711 2.41682 3.27421 2.66498Z">
                                </path>
                                <path
                                  d="M8.4539 2.66498C8.20573 2.8592 8.27047 3.43645 8.59417 3.92199C8.69127 4.06765 8.81536 4.25108 8.86391 4.32661C9.00957 4.53701 8.98799 4.92004 8.82615 5.14663C8.52403 5.56743 8.3514 5.97204 8.32442 6.3335C8.30284 6.66798 8.30824 6.69496 8.4485 6.80285C8.75062 7.04023 9.0851 6.89996 9.14984 6.50614C9.193 6.24718 9.28471 6.04757 9.52748 5.71309C10.0022 5.05491 9.96447 4.27266 9.41958 3.60909C9.29011 3.44724 9.21458 3.28539 9.17681 3.08578C9.09049 2.60564 8.7668 2.41682 8.4539 2.66498Z">
                                </path>
                                <path
                                  d="M0.134872 7.91994L0 8.05481L0.0161846 11.3349C0.0377642 14.5287 0.0377642 14.6204 0.156451 15.0358C0.636596 16.7514 1.97453 18.0515 3.67391 18.4507C4.02997 18.5371 4.36985 18.5479 6.47925 18.5479C8.58865 18.5479 8.92852 18.5371 9.28459 18.4507C10.984 18.0515 12.3381 16.7406 12.7967 15.0358C12.8992 14.6689 12.9207 14.4262 12.9423 13.2771L12.9639 11.9445L12.8236 11.8096C12.6618 11.6424 12.4244 11.6262 12.2464 11.7719C12.1169 11.8744 12.1169 11.8906 12.0845 13.2177C12.0576 14.4046 12.036 14.5988 11.9335 14.9333C11.7069 15.6238 11.4587 16.0284 10.9354 16.5571C10.3959 17.0912 9.99132 17.3394 9.28459 17.5606C8.88537 17.6847 8.8476 17.6847 6.47925 17.6847C4.1109 17.6847 4.07313 17.6847 3.67391 17.5606C2.96718 17.3394 2.56257 17.0912 2.02308 16.5571C1.49978 16.0284 1.25701 15.6346 1.02503 14.9333C0.900945 14.561 0.900945 14.5233 0.879365 11.5992L0.863181 8.64825H6.47385H12.0899V9.15537C12.0899 9.94302 12.0252 9.91065 13.5034 9.94302L14.7064 9.96999L15.0463 10.1534C15.424 10.3584 15.5912 10.5311 15.8016 10.9357C15.9203 11.1677 15.9419 11.2809 15.9419 11.6694C15.9419 12.0632 15.9203 12.1657 15.7962 12.4085C15.5103 12.9642 15.0032 13.3148 14.3989 13.3796C14.1508 13.4065 14.0321 13.4443 13.9404 13.536C13.676 13.8058 13.881 14.2589 14.2641 14.2589C14.906 14.2589 15.5696 13.973 16.0606 13.4821C17.0856 12.457 17.0856 10.8817 16.0659 9.86749C15.4509 9.24708 14.9546 9.07984 13.7515 9.07984H12.9531V8.56733C12.9531 8.09258 12.9423 8.03863 12.8182 7.91994L12.6888 7.78507H6.47925H0.269744L0.134872 7.91994Z">
                                </path>
                                <path
                                  d="M12.2247 10.509C12.1384 10.5899 12.0898 10.7032 12.0898 10.8057C12.0898 10.9082 12.1384 11.0215 12.2247 11.1024C12.3056 11.1888 12.4189 11.2373 12.5214 11.2373C12.6239 11.2373 12.7372 11.1888 12.8182 11.1024C12.9045 11.0215 12.953 10.9082 12.953 10.8057C12.953 10.7032 12.9045 10.5899 12.8182 10.509C12.7372 10.4227 12.6239 10.3741 12.5214 10.3741C12.4189 10.3741 12.3056 10.4227 12.2247 10.509Z">
                                </path>
                                <path
                                  d="M0.140731 20.0041C0.0544133 20.085 0.00585938 20.1983 0.00585938 20.3008C0.00585938 20.4033 0.0544133 20.5166 0.140731 20.5975L0.270208 20.7324H6.47971H12.6892L12.8187 20.5975C12.905 20.5166 12.9536 20.4033 12.9536 20.3008C12.9536 20.1983 12.905 20.085 12.8187 20.0041L12.6892 19.8692H6.47971H0.270208L0.140731 20.0041Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Food &amp; Drinks</span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                    <li className="category-item"><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="16"
                                height="18" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M4.57965 0.592365L4.00601 1.15652L3.72156 1.18971C1.85841 1.41253 0.34134 2.87271 0.0474084 4.72164C0.0189634 4.90179 0 6.00166 0 7.34332V9.65685L0.118521 9.77063L0.232301 9.88915H1.32744H2.42257L2.53635 9.77063C2.6928 9.61892 2.6928 9.40084 2.53635 9.24914C2.42257 9.13062 2.40835 9.13062 1.58818 9.13062H0.753793L0.768016 6.9119L0.786979 4.69793L0.9055 4.33289C1.10462 3.74976 1.3464 3.36576 1.79678 2.92012C2.3562 2.36544 2.98199 2.05254 3.74052 1.94825L3.99179 1.91506L5.3287 3.24724C6.89792 4.80697 6.78414 4.75008 7.27719 4.29022L7.58534 4.00103V5.11987V6.24345L7.70386 6.35723C7.77498 6.43308 7.87453 6.47575 7.96461 6.47575C8.05469 6.47575 8.15424 6.43308 8.22536 6.35723L8.34388 6.24345V5.02979V3.82088L8.85115 4.20014C9.42005 4.63156 9.52909 4.66001 9.77561 4.44193C9.86095 4.36607 10.3824 3.77821 10.9276 3.1382C11.8142 2.10469 11.9374 1.97669 12.0654 1.97669C12.3688 1.97195 12.8903 2.11892 13.317 2.33225C13.6915 2.51715 13.8338 2.62144 14.1704 2.96278C14.6207 3.41316 14.8341 3.74028 15.0048 4.23333C15.1944 4.78327 15.2181 5.0772 15.2181 7.17265V9.17803H14.3742C13.5493 9.17803 13.5256 9.18277 13.4261 9.28706C13.2981 9.42455 13.2933 9.65211 13.4118 9.79908C13.5019 9.91286 13.5161 9.91286 14.5591 9.92708C15.7064 9.9413 15.8391 9.92234 15.9292 9.69952C15.9671 9.6047 15.9766 8.9078 15.9671 7.15843C15.9482 4.82119 15.9434 4.73112 15.8391 4.36607C15.4836 3.11923 14.7108 2.17581 13.573 1.59742C13.2222 1.42201 12.6059 1.23712 12.2077 1.18971L11.9232 1.15652L11.3496 0.592365L10.7759 0.0282049H7.96461H5.15329L4.57965 0.592365ZM8.82744 1.64957L7.96461 2.51715L7.10178 1.64957L6.2342 0.786739H7.96461H9.69502L8.82744 1.64957ZM6.37643 2.01936L7.41941 3.06234L7.12074 3.35627L6.82681 3.65495L5.77434 2.60248L4.71713 1.54527L5.00159 1.26082C5.15803 1.10438 5.29552 0.976373 5.30974 0.976373C5.32396 0.976373 5.80279 1.44572 6.37643 2.01936ZM10.9703 1.25608C11.2263 1.51209 11.2453 1.55001 11.1836 1.62587C10.8613 2.03358 9.46272 3.63124 9.42953 3.63124C9.40583 3.63124 9.20671 3.4985 8.98863 3.33257L8.5904 3.0339L9.59072 2.00988C10.1454 1.44572 10.6195 0.981113 10.6432 0.981113C10.6716 0.976373 10.8186 1.10438 10.9703 1.25608Z">
                                </path>
                                <path
                                  d="M3.15368 5.07793L3.03516 5.19171V10.8286V16.4654L3.1442 16.6266C3.31012 16.8731 3.76525 17.0817 4.4337 17.2145C5.25387 17.3757 5.87492 17.4278 7.37302 17.461C10.4735 17.5226 12.4315 17.2145 12.8013 16.6077C12.8914 16.4607 12.8961 16.3327 12.8961 11.3927V6.32951L12.7776 6.21573C12.7065 6.13988 12.6069 6.09721 12.5168 6.09721C12.4268 6.09721 12.3272 6.13988 12.2561 6.21573L12.1376 6.32951V11.2837V16.2379L11.8816 16.3327C11.1847 16.5934 10.1132 16.693 7.96563 16.693C5.82277 16.693 4.75134 16.5934 4.0497 16.3327L3.79369 16.2379V10.7148V5.19171L3.67517 5.07793C3.60406 5.00208 3.5045 4.95941 3.41442 4.95941C3.32435 4.95941 3.22479 5.00208 3.15368 5.07793Z">
                                </path>
                                <path
                                  d="M12.2552 5.07776C12.1794 5.14887 12.1367 5.24843 12.1367 5.33851C12.1367 5.42858 12.1794 5.52814 12.2552 5.59925C12.3264 5.67511 12.4259 5.71777 12.516 5.71777C12.6061 5.71777 12.7056 5.67511 12.7767 5.59925C12.8526 5.52814 12.8953 5.42858 12.8953 5.33851C12.8953 5.24843 12.8526 5.14887 12.7767 5.07776C12.7056 5.00191 12.6061 4.95924 12.516 4.95924C12.4259 4.95924 12.3264 5.00191 12.2552 5.07776Z">
                                </path>
                                <path
                                  d="M8.84118 6.59534C8.76532 6.66645 8.72266 6.76601 8.72266 6.85608C8.72266 6.94616 8.76532 7.04572 8.84118 7.11683L8.95496 7.23535H10.2397H11.5245L11.6383 7.11683C11.7141 7.04572 11.7568 6.94616 11.7568 6.85608C11.7568 6.76601 11.7141 6.66645 11.6383 6.59534L11.5245 6.47682H10.2397H8.95496L8.84118 6.59534Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Fashion Accessories</span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                    <li className="category-item"><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="13"
                                height="20" viewBox="0 0 13 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M3.31426 0.0918814C3.24257 0.171032 3.23113 0.325861 3.23113 1.21433C3.23113 2.50658 3.15969 2.41116 4.12673 2.41116H4.83857V3.13175C4.83857 3.96807 4.86197 4.0186 5.24917 4.0186C5.61644 4.0186 5.64229 3.95971 5.64229 3.123V2.41116H6.04415H6.44601V3.13175C6.44601 3.96807 6.46941 4.0186 6.85661 4.0186C7.22388 4.0186 7.24973 3.95971 7.24973 3.123V2.41116H7.95964H8.66949L9.91204 2.81302C11.7169 3.39672 11.6377 3.42919 11.6609 2.09778C11.6835 0.799606 11.8321 0.965236 10.1393 0.401282L8.93484 0H6.16612C3.5476 0 3.3929 0.00501528 3.31426 0.0918814ZM9.76801 1.15749L10.8665 1.51125V1.86077C10.8665 2.05296 10.8567 2.21023 10.8447 2.21023C10.8327 2.21023 10.4338 2.07463 9.95814 1.90887L9.09334 1.60744H6.56412H4.03485V1.20558V0.803721H6.3522H8.66955L9.76801 1.15749ZM3.31426 4.51235C3.26276 4.56925 3.23113 4.69045 3.23113 4.83107C3.23113 5.24457 3.10124 5.22418 5.73417 5.22418H8.05345V5.94477C8.05345 6.81857 8.0458 6.80687 8.66318 6.87702C9.8552 7.01243 10.7289 7.70594 11.1059 8.81579L11.2423 9.21765L11.2577 14.0526L11.273 18.8874H6.04415H0.815334L0.833016 14.0526C0.852627 8.69008 0.834367 8.98515 1.18852 8.31349C1.78481 7.1825 2.51067 6.88248 4.73813 6.84629C6.48542 6.81787 6.44601 6.82751 6.44601 6.42977C6.44601 6.0173 6.49262 6.02791 4.67937 6.02791C3.26938 6.02791 3.05424 6.03871 2.70986 6.12679C1.46712 6.44462 0.433342 7.47737 0.115969 8.71812C-0.0335875 9.30297 -0.0409175 19.4731 0.108124 19.608C0.257874 19.7436 11.8661 19.735 11.9889 19.5993C12.1293 19.4442 12.1146 9.27436 11.9732 8.72153C11.7594 7.88591 11.1936 7.09377 10.475 6.62446C10.0093 6.3202 9.70899 6.20466 8.99528 6.05497L8.85717 6.02598V5.30636C8.85717 4.67296 8.84618 4.57677 8.76529 4.5036C8.61657 4.36903 3.43643 4.37732 3.31426 4.51235ZM6.94837 6.1284C6.69021 6.38649 6.88105 6.83163 7.24973 6.83163C7.51766 6.83163 7.65159 6.69769 7.65159 6.42977C7.65159 6.29583 7.61809 6.19534 7.55116 6.1284C7.48416 6.0614 7.38366 6.02791 7.24973 6.02791C7.1158 6.02791 7.0153 6.0614 6.94837 6.1284ZM1.70682 9.33467C1.57167 9.48403 1.58009 17.4761 1.71557 17.5987C1.86499 17.7339 10.2589 17.7255 10.3815 17.59C10.5166 17.4406 10.5082 9.44854 10.3727 9.32592C10.2233 9.19071 1.82944 9.19913 1.70682 9.33467ZM9.66089 13.4623V16.8781H6.04415H2.4274V13.4623V10.0465H6.04415H9.66089V13.4623ZM5.73031 10.9684C5.38188 11.2914 4.60967 12.443 4.27706 13.1358C3.57139 14.6055 4.44706 16.0493 6.04415 16.0493C7.27776 16.0493 8.02831 15.3158 8.02831 14.1103V13.5757L7.74186 13C7.46538 12.4444 6.78299 11.4249 6.42846 11.0378C6.21434 10.8041 5.93741 10.7765 5.73031 10.9684ZM6.45707 12.5367C7.21424 13.6454 7.34913 14.1291 7.04771 14.6547C6.33516 15.8971 4.4277 14.9482 4.99192 13.6319C5.20712 13.13 5.96423 11.9873 6.06042 12.0194C6.09128 12.0296 6.26977 12.2625 6.45707 12.5367Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Toilet &amp; Sanitation</span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                    <li className="category-item "><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="14"
                                height="20" viewBox="0 0 14 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                  d="M4.31169 0.0624969C4.23983 0.0984272 3.63928 0.49366 2.972 0.940223C2.2072 1.44838 1.73497 1.79742 1.69904 1.87441C1.66311 1.96167 1.64258 2.51089 1.64258 3.5426V5.08247L1.7709 5.20566C1.84789 5.28779 1.95569 5.33398 2.05321 5.33398C2.15074 5.33398 2.25853 5.28779 2.33552 5.20566L2.46384 5.08247V3.67093V2.25938L3.25944 1.72042C3.70087 1.42272 4.07044 1.17634 4.08071 1.17634C4.0961 1.17634 4.10637 2.05406 4.10637 3.12684V5.08247L4.23469 5.20566C4.31169 5.28779 4.41948 5.33398 4.517 5.33398C4.61453 5.33398 4.72232 5.28779 4.79931 5.20566L4.92763 5.08247V2.66488V0.247281L4.79931 0.124092C4.66072 -0.0196294 4.5016 -0.0350281 4.31169 0.0624969Z">
                                </path>
                                <path
                                  d="M0.949586 5.87307C0.821264 5.99626 0.821264 5.99626 0.821264 7.10497V8.20854H0.538954C0.302841 8.20854 0.23098 8.22907 0.128322 8.33686L0 8.46005V13.1721C0 18.2485 0 18.228 0.266911 18.6745C0.538954 19.1365 1.02145 19.5009 1.5296 19.6292C1.79651 19.7011 2.10962 19.7114 3.42878 19.696C4.92758 19.6806 5.01998 19.6703 5.29715 19.5625C5.64106 19.4239 6.03116 19.0903 6.25187 18.7413C6.57524 18.2382 6.57011 18.3665 6.57011 13.1721V8.46005L6.44179 8.33686L6.3186 8.20854H4.92758H3.53657L3.41338 8.33686C3.24399 8.50112 3.24399 8.73723 3.41338 8.90148C3.53657 9.02981 3.53657 9.02981 4.64527 9.02981H5.74885L5.73858 13.5365L5.72318 18.0483L5.5692 18.2998C5.47167 18.4538 5.31768 18.6078 5.1637 18.7053L4.91218 18.8593H3.28506H1.65793L1.40641 18.7053C1.25243 18.6078 1.09844 18.4538 1.00092 18.2998L0.846928 18.0483L0.83153 13.5365L0.821264 9.02981H1.10357C1.33969 9.02981 1.41155 9.00927 1.51421 8.90148C1.64253 8.77829 1.64253 8.77829 1.64253 7.66959V6.56601H3.28506H4.92758V6.84832C4.92758 7.19223 5.07644 7.38728 5.33822 7.38728C5.43574 7.38728 5.54353 7.34108 5.62052 7.25896C5.74371 7.1409 5.74885 7.09984 5.74885 6.56601C5.74885 6.03219 5.74371 5.99113 5.62052 5.87307L5.49733 5.74475H3.28506H1.07278L0.949586 5.87307Z">
                                </path>
                                <path
                                  d="M2.18133 8.33636C1.92469 8.58787 2.10434 9.0293 2.46364 9.0293C2.67409 9.0293 2.87428 8.82911 2.87428 8.61866C2.87428 8.40822 2.67409 8.20803 2.46364 8.20803C2.36612 8.20803 2.25833 8.25423 2.18133 8.33636Z">
                                </path>
                                <path
                                  d="M8.88943 12.3917C8.39154 12.5303 7.92958 12.8896 7.65754 13.3464C7.40602 13.7673 7.39062 13.9418 7.39062 16.7957V19.4545L7.51895 19.5777L7.64214 19.7061H10.6757H13.7092L13.8324 19.5777L13.9607 19.4545V16.7957C13.9607 13.9059 13.9505 13.7827 13.6733 13.3105C13.4834 12.9871 13.0317 12.597 12.6878 12.4584C12.4055 12.3455 12.3336 12.3403 10.7783 12.3301C9.48998 12.3198 9.10501 12.3352 8.88943 12.3917ZM12.5543 13.3156C12.7083 13.4131 12.8623 13.5671 12.9598 13.7211L13.1138 13.9726L13.1292 16.4313L13.1446 18.8848H10.6757H8.20676L8.22215 16.4364L8.23755 13.9829L8.38127 13.7416C8.45827 13.6082 8.59172 13.4491 8.67898 13.3875C9.01775 13.1462 9.12041 13.1359 10.7578 13.1513L12.3028 13.1616L12.5543 13.3156Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Makeup Corner</span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                    <li className="category-item"><a href="/all-products">
                        <div
                          className="flex justify-between items-center px-5 h-10 bg-white  transition-all duration-300 ease-in-out cursor-pointer text-qblack hover:bg-qyellow">
                          <div className="flex items-center space-x-6"><span><svg className="fill-current" width="12"
                                height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd"
                                  d="M5.33134 0.0585212C4.21138 0.271167 3.66452 1.02808 3.70545 2.30909L3.72294 2.85721L3.48817 2.9339C2.69258 3.19379 1.94407 3.77655 1.53723 4.45275C1.37223 4.7271 1.33584 4.75871 1.13079 4.80665C-0.248122 5.12877 -0.410044 6.93812 0.889205 7.50525L1.20958 7.64505L5.83093 7.645H10.4523L10.7652 7.51546C12.1208 6.95439 11.9709 5.2257 10.5305 4.80858C10.3173 4.74681 10.2767 4.70978 10.0874 4.4044C9.74838 3.85744 9.11237 3.33236 8.45647 3.0579L7.93091 2.83796L7.91355 2.08618C7.87856 0.571472 6.85648 -0.231111 5.33134 0.0585212ZM6.23744 0.820161C6.91745 1.07841 7.18594 1.79719 6.96232 2.76097C6.83939 3.29095 6.87151 3.33767 7.48568 3.52302C8.03748 3.68947 8.60658 4.00244 8.91627 4.30968C9.33453 4.72453 9.68314 4.68336 5.75481 4.68336H2.2796L2.44205 4.50419C2.79261 4.11757 3.42173 3.73578 3.95197 3.58788C4.52053 3.4293 4.57208 3.40521 4.63738 3.26757C4.67184 3.1949 4.68699 3.07872 4.67104 3.00949C4.65514 2.9402 4.61455 2.77077 4.58089 2.63295C4.44194 2.06372 4.61408 1.2745 4.93011 1.03216C5.25022 0.786742 5.88034 0.68456 6.23744 0.820161ZM10.3217 5.5743C10.5904 5.71223 10.7392 5.93053 10.7392 6.18698C10.7392 6.44343 10.5904 6.66173 10.3217 6.79966C10.035 6.94675 1.53195 6.94675 1.24523 6.79966C0.589732 6.46332 0.72795 5.65799 1.46805 5.50151C1.90941 5.40825 10.1297 5.47585 10.3217 5.5743ZM0.879924 8.10073C0.810347 8.16145 0.775559 8.25261 0.775559 8.37409C0.775559 8.49558 0.810347 8.58674 0.879924 8.64751C0.949433 8.70822 1.0538 8.73861 1.19288 8.73861C1.33197 8.73861 1.43633 8.70822 1.50591 8.64751C1.57542 8.58674 1.61021 8.49558 1.61021 8.37409C1.61021 8.25261 1.57542 8.16145 1.50591 8.10073C1.43633 8.03996 1.33197 8.00957 1.19288 8.00957C1.0538 8.00957 0.949433 8.03996 0.879924 8.10073ZM10.043 8.45744C9.96425 8.53349 9.95664 8.85969 9.95624 12.2052C9.95571 16.7581 9.97594 16.6162 9.27857 16.9588L8.99165 17.0997H5.78346H2.57526L2.28835 16.9588C1.59726 16.6193 1.61121 16.7101 1.61068 12.5617C1.61014 8.81315 1.64593 9.10313 1.1838 9.10313C0.739101 9.10313 0.771285 8.79437 0.787377 12.9126L0.801666 16.553L0.94142 16.8135C1.13666 17.1774 1.50297 17.5032 1.91663 17.6811L2.2601 17.8288H5.78346H9.30681L9.65029 17.6811C10.0639 17.5032 10.4303 17.1774 10.6255 16.8135L10.7652 16.553L10.7794 12.5479C10.7954 8.01214 10.8306 8.37409 10.374 8.37409C10.2032 8.37409 10.1033 8.39923 10.043 8.45744ZM3.36584 8.82195C3.24432 8.93924 3.24999 9.29349 3.37493 9.39224C3.45632 9.45657 3.60936 9.46765 4.41824 9.46765H5.36613V11.4725V13.4774H4.40916C3.30749 13.4774 3.27951 13.4866 3.27951 13.8498C3.27951 14.1944 3.31763 14.2064 4.41824 14.2064H5.36613V15.2245C5.36613 16.5264 5.19907 16.3935 6.83585 16.3935C8.29862 16.3935 8.28741 16.3964 8.28741 16.021C8.28741 15.6764 8.24928 15.6645 7.14868 15.6645H6.20078V13.6596V11.6548H7.15776C8.25943 11.6548 8.28741 11.6455 8.28741 11.2823C8.28741 10.9377 8.24928 10.9257 7.14868 10.9257H6.20078V9.90758C6.20078 8.97908 6.19237 8.88278 6.10536 8.81402C5.95319 8.6937 3.49131 8.70082 3.36584 8.82195Z">
                                </path>
                              </svg></span><span className="text-xs font-400">Baby Items</span></div>
                          <div><span><svg className="fill-current" width="6" height="9" viewBox="0 0 6 9" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <rect x="1.49805" y="0.818359" width="5.78538" height="1.28564"
                                  transform="rotate(45 1.49805 0.818359)"></rect>
                                <rect x="5.58984" y="4.90918" width="5.78538" height="1.28564"
                                  transform="rotate(135 5.58984 4.90918)"></rect>
                              </svg></span></div>
                        </div>
                      </a></li>
                  </ul>
                </div>
              </div>
              <div className="nav">
                <ul className="nav-wrapper flex xl:space-x-10 space-x-5">
                  <li className="relative"><span
                      className="flex items-center text-sm font-600 cursor-pointer text-qblacktext"><span>Homepage</span><span
                        className="ml-1.5 "><svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564"
                            transform="rotate(135 9.18359 0.90918)"></rect>
                          <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)">
                          </rect>
                        </svg></span></span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div className="w-full bg-white flex justify-between items-center "
                        style="box-shadow: rgba(0, 0, 0, 0.14) 0px 15px 50px 0px;">
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li><a href="/"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Home
                                      One</span></a></li>
                                <li><a href="/home-two"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Home
                                      Two</span></a></li>
                                <li><a href="/home-three"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Home
                                      Three</span></a></li>
                                <li><a href="/home-four"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Home
                                      Four</span></a></li>
                                <li><a href="/home-five"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Home
                                      Five</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><span
                      className="flex items-center text-sm font-600 cursor-pointer text-qblacktext"><span>Shop</span><span
                        className="ml-1.5 "><svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564"
                            transform="rotate(135 9.18359 0.90918)"></rect>
                          <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)">
                          </rect>
                        </svg></span></span>
                    <div className="sub-menu w-full absolute left-0 top-[60px]">
                      <div className="mega-menu-wrapper w-full bg-white p-[30px] flex justify-between items-center "
                        style="min-height: 295px; box-shadow: rgba(0, 0, 0, 0.14) 0px 15px 50px 0px;">
                        <div className="categories-wrapper flex-1 h-full flex justify-around -ml-[70px]">
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">Shop List</h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Shop
                                      Sidebar</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Shop
                                      Fullwidth</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Shop
                                      Category Icon</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Shop
                                      Category Icon</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Shop
                                      List View</span></a></li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">Product Layouts</h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Horizonral
                                      Thumbnail</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Vertical
                                      Thumbnail</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Gallery
                                      Thumbnail</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Sticky
                                      Summary</span></a></li>
                              </ul>
                            </div>
                          </div>
                          <div>
                            <div className="category">
                              <h1 className="text-[13px] font-700 text-qblack uppercase mb-[13px]">Polular Category</h1>
                            </div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Phone
                                      &amp; Tablet</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Gaming
                                      &amp; Sports</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Home
                                      Appliance</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Fashion
                                      Clothes</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                        <div className="thumbnil w-[348px] h-full">
                          <div className="w-full h-[235px]"><img width="" src="/assets/images/mega-menu-thumb.jpg" alt=""
                              className="w-full h-full object-contain"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="relative"><span
                      className="flex items-center text-sm font-600 cursor-pointer text-qblacktext"><span>Pages</span><span
                        className="ml-1.5 "><svg width="10" height="5" viewBox="0 0 10 5" fill="none" className="fill-current"
                          xmlns="http://www.w3.org/2000/svg">
                          <rect x="9.18359" y="0.90918" width="5.78538" height="1.28564"
                            transform="rotate(135 9.18359 0.90918)"></rect>
                          <rect x="5.08984" y="5" width="5.78538" height="1.28564" transform="rotate(-135 5.08984 5)">
                          </rect>
                        </svg></span></span>
                    <div className="sub-menu w-[220px] absolute left-0 top-[60px]">
                      <div className="w-full bg-white flex justify-between items-center "
                        style="box-shadow: rgba(0, 0, 0, 0.14) 0px 15px 50px 0px;">
                        <div className="categories-wrapper w-full h-full p-5">
                          <div>
                            <div className="category-items">
                              <ul className="flex flex-col space-y-2">
                                <li><a href="/privacy-policy"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Privacy
                                      Policy</span></a></li>
                                <li><a href="/terms-condition"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Terms
                                      and Conditions</span></a></li>
                                <li><a href="/faq"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">FAQ</span></a>
                                </li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Shop
                                      Category Icon</span></a></li>
                                <li><a href="/all-products"><span
                                      className="text-qgray text-sm font-400 border-b border-transparent   hover:text-qyellow hover:border-qyellow">Shop
                                      List View</span></a></li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li><a href="/about"><span
                        className="flex items-center text-sm font-600 cursor-pointer text-qblacktext"><span>About</span></span></a>
                  </li>
                  <li><a href="/blogs"><span
                        className="flex items-center text-sm font-600 cursor-pointer text-qblacktext"><span>Blog</span></span></a>
                  </li>
                  <li><a href="/contact"><span
                        className="flex items-center text-sm font-600 cursor-pointer text-qblacktext"><span>Contact</span></span></a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="become-seller-btn"><a href="/become-saller">
                <div className="black-btn w-[161px] h-[40px] flex justify-center items-center cursor-pointer">
                  <div className="flex space-x-2 items-center"><span className="text-sm font-600">Become a
                      Seller</span><span><svg className="fill-current" width="6" height="10" viewBox="0 0 6 10" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <rect x="1.08984" width="6.94106" height="1.54246" transform="rotate(45 1.08984 0)"
                          fill="white"></rect>
                        <rect x="6" y="4.9082" width="6.94106" height="1.54246" transform="rotate(135 6 4.9082)"
                          fill="white"></rect>
                      </svg></span></div>
                </div>
              </a></div>
          </div>
        </div>
      </div>
    </div> */}
    </header>
  );
};

export default HeaderOne;
