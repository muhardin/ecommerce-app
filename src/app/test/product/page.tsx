import React from "react";
import ProductDetail from "./ProductDetail";
import Image from "next/image";

const product = {
  title: "Sample Product",
  description: "This is a sample product description.",
  price: 49.99,
  images: [
    "/images/shipping/jne.png",
    "/images/shipping/jnt.png",
    "/images/shipping/pos.png",
  ],
};

const ProductPage: React.FC = () => {
  return (
    <div>
      <div className="w-full bg-white pb-[60px] p-8">
        <div className="container-x mx-auto">
          <div className="product-view w-full lg:flex justify-between ">
            <div
              data-aos="fade-right"
              className="lg:w-1/2 xl:mr-[70px] lg:mr-[50px] aos-init aos-animate"
            >
              <div className="w-full">
                <div className="w-full h-[600px] border border-qgray-border flex justify-center items-center overflow-hidden relative mb-3">
                  <Image
                    width={350}
                    height={350}
                    src="/assets/images/product-details-1.png"
                    alt=""
                    className="object-contain"
                  />
                  <div className="w-[80px] h-[80px] rounded-full bg-qyellow text-qblack flex justify-center items-center text-xl font-medium absolute left-[30px] top-[30px]">
                    <span>-50%</span>
                  </div>
                </div>
                <div className="flex gap-2 flex-wrap">
                  <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
                    <Image
                      width={350}
                      height={350}
                      src="/assets/images/product-details-1.png"
                      alt=""
                      className="w-full h-full object-contain  "
                    />
                  </div>
                  <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
                    <Image
                      width={350}
                      height={350}
                      src="/assets/images/product-details-2.png"
                      alt=""
                      className="w-full h-full object-contain opacity-50 "
                    />
                  </div>
                  <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
                    <Image
                      width={350}
                      height={350}
                      src="/assets/images/product-details-3.png"
                      alt=""
                      className="w-full h-full object-contain opacity-50 "
                    />
                  </div>
                  <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
                    <Image
                      width={350}
                      height={350}
                      src="/assets/images/product-details-4.png"
                      alt=""
                      className="w-full h-full object-contain opacity-50 "
                    />
                  </div>
                  <div className="w-[110px] h-[110px] p-[15px] border border-qgray-border cursor-pointer">
                    <Image
                      width={350}
                      height={350}
                      src="/assets/images/product-details-5.png"
                      alt=""
                      className="w-full h-full object-contain opacity-50 "
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-1">
              <div className="product-details w-full mt-10 lg:mt-0">
                <span
                  data-aos="fade-up"
                  className="text-qgray text-xs font-normal uppercase tracking-wider mb-2 inline-block aos-init aos-animate"
                >
                  Mobile Phones
                </span>
                <p
                  data-aos="fade-up"
                  className="text-xl font-medium text-qblack mb-4 aos-init aos-animate"
                >
                  Samsung Galaxy Z Fold3 5G 3 colors in 512GB
                </p>
                <div
                  data-aos="fade-up"
                  className="flex space-x-[10px] items-center mb-6 aos-init aos-animate"
                >
                  <div className="flex">
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                        fill="#FFA800"
                      ></path>
                    </svg>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                        fill="#FFA800"
                      ></path>
                    </svg>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                        fill="#FFA800"
                      ></path>
                    </svg>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                        fill="#FFA800"
                      ></path>
                    </svg>
                    <svg
                      width="18"
                      height="17"
                      viewBox="0 0 18 17"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9 0L11.0206 6.21885H17.5595L12.2694 10.0623L14.2901 16.2812L9 12.4377L3.70993 16.2812L5.73056 10.0623L0.440492 6.21885H6.97937L9 0Z"
                        fill="#FFA800"
                      ></path>
                    </svg>
                  </div>
                  <span className="text-[13px] font-normal text-qblack">
                    6 Reviews
                  </span>
                </div>
                <div
                  data-aos="fade-up"
                  className="flex space-x-2 items-center mb-7 aos-init aos-animate"
                >
                  <span className="text-sm font-500 text-qgray line-through mt-2">
                    $9.99
                  </span>
                  <span className="text-2xl font-500 text-qred">$6.99</span>
                </div>
                <p
                  data-aos="fade-up"
                  className="text-qgray text-sm text-normal mb-[30px] leading-7 aos-init aos-animate"
                >
                  It is a long established fact that a reader will be distracted
                  by the readable there content of a page when looking at its
                  layout.
                </p>
                <div
                  data-aos="fade-up"
                  className="colors mb-[30px] aos-init aos-animate"
                >
                  <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">
                    COLOR
                  </span>
                  <div className="flex space-x-4 items-center">
                    <div>
                      <button
                        type="button"
                        className="w-[20px] h-[20px]  rounded-full focus:ring-2  ring-offset-2 flex justify-center items-center"
                      >
                        <span className="w-[20px] h-[20px] block rounded-full border bg-[rgb(255, 188, 99)]"></span>
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-[20px] h-[20px]  rounded-full focus:ring-2  ring-offset-2 flex justify-center items-center"
                      >
                        <span className="w-[20px] h-[20px] block rounded-full border bg-[rgb(100, 158, 255)]"></span>
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-[20px] h-[20px]  rounded-full focus:ring-2  ring-offset-2 flex justify-center items-center"
                      >
                        <span className="w-[20px] h-[20px] block rounded-full border bg-[rgb(255, 255, 255)]"></span>
                      </button>
                    </div>
                    <div>
                      <button
                        type="button"
                        className="w-[20px] h-[20px]  rounded-full focus:ring-2  ring-offset-2 flex justify-center items-center"
                      >
                        <span className="w-[20px] h-[20px] block rounded-full border bg-[rgb(255, 113, 115)]"></span>
                      </button>
                    </div>
                    <div></div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="product-size mb-[30px] aos-init aos-animate"
                >
                  <span className="text-sm font-normal uppercase text-qgray mb-[14px] inline-block">
                    SIZE
                  </span>
                  <div className="w-full">
                    <div className=" border border-qgray-border h-[50px] flex justify-between items-center px-6 cursor-pointer">
                      <div className="my-select-box w-full flex flex-col">
                        <button type="button" className="my-select-box-btn ">
                          <div>
                            <span className="text-[13px] text-qblack">
                              Small
                            </span>
                          </div>
                          <div className="flex space-x-10 items-center">
                            <span className="text-[13px] text-qblack">
                              3”W x 3”D x 7”H
                            </span>
                            <span>
                              <svg
                                width="11"
                                height="7"
                                viewBox="0 0 11 7"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M5.4 6.8L0 1.4L1.4 0L5.4 4L9.4 0L10.8 1.4L5.4 6.8Z"
                                  fill="#222222"
                                ></path>
                              </svg>
                            </span>
                          </div>
                        </button>
                        <div className="">
                          <select className="list">
                            <option className="selected">Small</option>
                            <option className="">Medium</option>
                            <option className="">Large</option>
                            <option className="">Extra Large</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="quantity-card-wrapper w-full flex items-center h-[50px] space-x-[10px] mb-[30px] aos-init aos-animate"
                >
                  <div className="w-[120px] h-full px-[26px] flex items-center border border-qgray-border">
                    <div className="flex justify-between items-center w-full">
                      <button type="button" className="text-base text-qgray">
                        -
                      </button>
                      <span className="text-qblack">1</span>
                      <button type="button" className="text-base text-qgray">
                        +
                      </button>
                    </div>
                  </div>
                  <div className="w-[60px] h-full flex justify-center items-center border border-qgray-border">
                    <button type="button">
                      <span>
                        <svg
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M17 1C14.9 1 13.1 2.1 12 3.7C10.9 2.1 9.1 1 7 1C3.7 1 1 3.7 1 7C1 13 12 22 12 22C12 22 23 13 23 7C23 3.7 20.3 1 17 1Z"
                            stroke="#D5D5D5"
                            stroke-width="2"
                            stroke-miterlimit="10"
                            stroke-linecap="square"
                          ></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                  <div className="flex-1 h-full">
                    <button
                      type="button"
                      className="black-btn text-sm font-semibold w-full h-full"
                    >
                      Add To Cart
                    </button>
                  </div>
                </div>
                <div
                  data-aos="fade-up"
                  className="mb-[20px] aos-init aos-animate"
                >
                  <p className="text-[13px] text-qgray leading-7">
                    <span className="text-qblack">Category :</span> Kitchen
                  </p>
                  <p className="text-[13px] text-qgray leading-7">
                    <span className="text-qblack">Tags :</span> Beer, Foamer
                  </p>
                  <p className="text-[13px] text-qgray leading-7">
                    <span className="text-qblack">SKU:</span> KE-91039
                  </p>
                </div>
                <div
                  data-aos="fade-up"
                  className="flex space-x-2 items-center mb-[20px] aos-init aos-animate"
                >
                  <span>
                    <svg
                      width="12"
                      height="13"
                      viewBox="0 0 12 13"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 0C0.247634 0 0.475436 0 0.729172 0C0.738324 0.160174 0.747477 0.316279 0.757647 0.493233C1.05816 0.392044 1.33885 0.282211 1.62818 0.203395C3.11296 -0.201361 4.51385 0.0366111 5.84202 0.779512C6.47661 1.13494 7.14171 1.39071 7.86987 1.47207C8.88125 1.58496 9.82093 1.35817 10.7098 0.88426C10.9335 0.765274 11.1522 0.636627 11.411 0.491199C11.4161 0.606117 11.4237 0.693577 11.4237 0.780529C11.4242 3.18822 11.4222 5.5954 11.4288 8.00309C11.4293 8.1892 11.3718 8.29089 11.2096 8.38039C9.31956 9.42279 7.4285 9.43499 5.54557 8.37734C4.06231 7.54443 2.55363 7.43307 0.992568 8.13835C0.804428 8.22327 0.737816 8.33005 0.739341 8.53904C0.749003 9.9206 0.744426 11.3027 0.744426 12.6842C0.744426 12.7849 0.744426 12.8851 0.744426 13C0.48764 13 0.254244 13 0 13C0 8.67582 0 4.34961 0 0Z"
                        fill="#EB5757"
                      ></path>
                    </svg>
                  </span>
                  <button
                    type="button"
                    className="text-qred font-semibold text-[13px]"
                  >
                    Report This Item
                  </button>
                </div>
                <div
                  data-aos="fade-up"
                  className="social-share flex items-center w-full aos-init aos-animate"
                >
                  <span className="text-qblack text-[13px] mr-[17px] inline-block">
                    Share This
                  </span>
                  <div className="flex space-x-5 items-center">
                    <span>
                      <svg
                        width="10"
                        height="16"
                        viewBox="0 0 10 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 16V9H0V6H3V4C3 1.3 4.7 0 7.1 0C8.3 0 9.2 0.1 9.5 0.1V2.9H7.8C6.5 2.9 6.2 3.5 6.2 4.4V6H10L9 9H6.3V16H3Z"
                          fill="#3E75B2"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M8 0C3.6 0 0 3.6 0 8C0 11.4 2.1 14.3 5.1 15.4C5 14.8 5 13.8 5.1 13.1C5.2 12.5 6 9.1 6 9.1C6 9.1 5.8 8.7 5.8 8C5.8 6.9 6.5 6 7.3 6C8 6 8.3 6.5 8.3 7.1C8.3 7.8 7.9 8.8 7.6 9.8C7.4 10.6 8 11.2 8.8 11.2C10.2 11.2 11.3 9.7 11.3 7.5C11.3 5.6 9.9 4.2 8 4.2C5.7 4.2 4.4 5.9 4.4 7.7C4.4 8.4 4.7 9.1 5 9.5C5 9.7 5 9.8 5 9.9C4.9 10.2 4.8 10.7 4.8 10.8C4.8 10.9 4.7 11 4.5 10.9C3.5 10.4 2.9 9 2.9 7.8C2.9 5.3 4.7 3 8.2 3C11 3 13.1 5 13.1 7.6C13.1 10.4 11.4 12.6 8.9 12.6C8.1 12.6 7.3 12.2 7.1 11.7C7.1 11.7 6.7 13.2 6.6 13.6C6.4 14.3 5.9 15.2 5.6 15.7C6.4 15.9 7.2 16 8 16C12.4 16 16 12.4 16 8C16 3.6 12.4 0 8 0Z"
                          fill="#E12828"
                        ></path>
                      </svg>
                    </span>
                    <span>
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 18 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M17.0722 1.60052C16.432 1.88505 15.7562 2.06289 15.0448 2.16959C15.7562 1.74278 16.3253 1.06701 16.5742 0.248969C15.8985 0.640206 15.1515 0.924742 14.3335 1.10258C13.6933 0.426804 12.7686 0 11.7727 0C9.85206 0 8.28711 1.56495 8.28711 3.48557C8.28711 3.7701 8.32268 4.01907 8.39382 4.26804C5.51289 4.12577 2.9165 2.73866 1.17371 0.604639C0.889175 1.13814 0.71134 1.70722 0.71134 2.34742C0.71134 3.5567 1.31598 4.62371 2.27629 5.26392C1.70722 5.22835 1.17371 5.08608 0.675773 4.83711V4.87268C0.675773 6.5799 1.88505 8.00258 3.48557 8.32268C3.20103 8.39382 2.88093 8.42938 2.56082 8.42938C2.34742 8.42938 2.09845 8.39382 1.88505 8.35825C2.34742 9.74536 3.62784 10.7768 5.15722 10.7768C3.94794 11.7015 2.45412 12.2706 0.818041 12.2706C0.533505 12.2706 0.248969 12.2706 0 12.2351C1.56495 13.2309 3.37887 13.8 5.37062 13.8C11.8082 13.8 15.3294 8.46495 15.3294 3.84124C15.3294 3.69897 15.3294 3.52113 15.3294 3.37887C16.0052 2.9165 16.6098 2.31186 17.0722 1.60052Z"
                          fill="#3FD1FF"
                        ></path>
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
