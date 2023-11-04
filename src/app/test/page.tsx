"use client";

import React, { useState } from "react";

const Quickreview4 = () => {
  const [color, setColor] = useState("White");
  const [size, setSize] = useState("");
  const [menu, setMenu] = useState(true);
  const [slide, setSlide] = useState(true);

  const slideToggle = () => setSlide(!slide);

  const getColor = (value: any) => {
    setColor(value);
  };

  const getSize = (value: any) => {
    setSize(value);
  };

  return (
    <div>
      <div className="flex justify-center items-center">
        <button
          onClick={() => setMenu(true)}
          className="hover:bg-black top-20 absolute z-0 w-40 py-4 bg-gray-800 text-white rounded focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 cursor-pointer"
        >
          Show Modal
        </button>
        <div
          id="menu"
          className={
            "md:px-6 px-4 py-12 w-full h-full flex justify-center  bg-gray-800 " +
            (menu ? "block" : "hidden")
          }
        >
          <div className="2xl:container 2xl:mx-auto relative  flex justify-start w-96 md:w-10/12 xl:w-8/12 2xl:w-7/12 item-start flex-col lg:flex-row   lg:space-x-8 py-12 md:py-16 lg:py-12 px-4 md:px-8 lg:px-24 bg-white">
            <div className="w-full">
              <div className="relative">
                <div className="slider">
                  <div className="slide-ana flex flex-shrink-0">
                    <div
                      className={
                        "flex flex-shrink-0 transform " +
                        (slide ? "translate-x-0" : "-translate-x-full")
                      }
                    >
                      <img
                        className=" lg:block hidden w-full h-full object-center object-cover"
                        src="https://i.ibb.co/wBknrzK/pexels-monstera-6311641-1-2.png"
                        alt="A girl posing front"
                      />
                      <img
                        className=" hidden md:block lg:hidden w-full h-full object-center object-cover"
                        src="https://i.ibb.co/JqhZhhp/pexels-monstera-6311641-1-3.png"
                        alt="A girl posing front"
                      />
                      <img
                        className=" block md:hidden w-full h-full object-center object-cover"
                        src="https://i.ibb.co/FXb2RfJ/pexels-dominika-roseclay-5462562-1.png"
                        alt="A girl posing front"
                      />
                    </div>
                    <div
                      className={
                        "flex flex-shrink-0 transform " +
                        (slide ? "translate-x-full" : "translate-x-0")
                      }
                    >
                      <img
                        className=" lg:block hidden w-full h-full object-center object-cover"
                        src="https://i.ibb.co/FwRy0WL/pexels-monstera-6311575-2-1.png"
                        alt="A girl posing Back"
                      />
                      <img
                        className=" hidden md:block lg:hidden w-full h-full object-center object-cover"
                        src="https://i.ibb.co/k0bJRQk/pexels-monstera-6311575-3-1.png"
                        alt="A girl posing Back"
                      />
                      <img
                        className=" block md:hidden w-full h-full object-center object-cover"
                        src="https://i.ibb.co/0f1gRTt/pexels-monstera-6311575-4.png"
                        alt="A girl posing Back"
                      />
                    </div>
                  </div>
                </div>
                <div className=" transition duration-150 absolute bottom-0 w-full h-full flex justify-between items-center px-4">
                  <button
                    onClick={slideToggle}
                    aria-label="previous"
                    className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                  >
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="26" cy="26" r="26" fill="white" />
                      <path
                        d="M28.4987 19.333L21.832 25.9997L28.4987 32.6663"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button
                    onClick={slideToggle}
                    aria-label="Next"
                    className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 rounded-full flex justify-center items-center"
                  >
                    <svg
                      width="52"
                      height="52"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="26" cy="26" r="26" fill="white" />
                      <path
                        d="M23.5013 19.333L30.168 25.9997L23.5013 32.6663"
                        stroke="#4B5563"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="mt-6 md:mt-8 lg:mt-0 flex justify-start items-start w-full flex-col space-y-6">
              <h2 className=" lg:text-2xl text-xl lg:leading-6 leading-5 text-gray-800 font-semibold">
                Plain White Tshirt
              </h2>
              <div className=" flex justify-start items-center mt-4">
                <p className="font-normal text-lg leading-6 text-gray-600 mr-4">
                  $190
                </p>
                <div className="cursor-pointer flex space-x-2 mr-3">
                  {/* Add your color selection icons here */}
                </div>
                <p className=" font-normal text-sm leading-3 hover:text-gray-700 duration-100 cursor-pointer text-gray-500 underline">
                  18 reviews
                </p>
              </div>
              <div className=" mt-10">
                <p
                  id="text"
                  className=" font-semibold text-base leading-4 text-gray-800"
                >
                  {color}
                </p>
                <div className=" flex space-x-2 mt-4">
                  {/* Add your color selection buttons here */}
                </div>
              </div>
              <div className=" mt-10 w-full">
                <div className=" flex justify-between">
                  <p className="font-semibold text-base leading-4 text-gray-800">
                    Size: {size}
                  </p>
                  <p className=" cursor-pointer font-normal text-base leading-4 hover:text-gray-600 text-gray-500 underline">
                    Size Guide
                  </p>
                </div>
                <div className=" mt-3">
                  <div id="size-buttons" className=" flex space-x-3">
                    {/* Add your size selection buttons here */}
                  </div>
                </div>
              </div>
              <div className="flex space-x-6 items-center mt-10">
                <button
                  className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded flex items-center justify-center px-7 py-2 bg-gray-800 text-white"
                  onClick={() => setMenu(false)}
                >
                  Add to Cart
                </button>
                <button
                  className=" focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-600 rounded flex items-center justify-center px-7 py-2 bg-white"
                  onClick={() => setMenu(false)}
                >
                  Buy Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Quickreview4;
