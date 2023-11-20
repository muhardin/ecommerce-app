"use client";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

const MyShopStoreCustom = () => {
  return (
    <>
      <main className="h-full overflow-y-auto">
        <div className="sm:container grid lg:px-6 sm:px-4 px-2 mx-auto">
          <div className="flex justify-between text-center items-center">
            <div>
              <h1 className="my-6 text-lg font-bold text-gray-700 dark:text-gray-300">
                Store Customizations
              </h1>
            </div>
            <div className="pb-4">
              <select
                name="language"
                className="block w-20 h-10 border border-emerald-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700">
                <option value="en" className="hidden">
                  en
                </option>
                <option value="bn">bn </option>
                <option value="de">de </option>
                <option value="en">en </option>
              </select>
            </div>
          </div>
          <ul className="sm:flex grid grid-cols-3 text-sm font-medium text-center text-gray-500 sm:divide-x divide-gray-200 rounded-lg dark:divide-gray-700 dark:text-gray-400 mb-5">
            <li>
              <a
                className="inline-block w-full px-4 py-3 shadow-md bg-emerald-500 text-white dark:bg-emerald-500 dark:text-white hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500 sm:rounded-l-md rounded-tl-md"
                href="/store/customization?storeTab=home-settings">
                <span className="text-sm font-medium font-serif xl:inline-block hidden">
                  Home Page
                </span>
                <span className="text-sm font-medium font-serif xl:hidden">
                  Home
                </span>
              </a>
            </li>
            <li>
              <a
                className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500"
                href="/store/customization?storeTab=single-setting">
                <span className="text-sm font-medium font-serif xl:inline-block hidden">
                  Product Slug Page
                </span>
                <span className="text-sm font-medium font-serif xl:hidden">
                  Setting
                </span>
              </a>
            </li>
            <li>
              <a
                className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500 focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500 sm:rounded-tr-none rounded-tr-md"
                href="/store/customization?storeTab=about-us-setting">
                <span className="text-sm font-medium font-serif xl:inline-block hidden">
                  About Us
                </span>
                <span className="text-sm font-medium font-serif xl:hidden">
                  About
                </span>
              </a>
            </li>
            <li>
              <a
                className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500"
                href="/store/customization?storeTab=privacy-setting">
                <span className="text-sm font-medium font-serif xl:inline-block hidden">
                  Privacy Policy and T&amp;C
                </span>
                <span className="text-sm font-medium font-serif xl:hidden">
                  Privacy
                </span>
              </a>
            </li>
            <li>
              <a
                className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500"
                href="/store/customization?storeTab=FAQ-setting">
                <span className="text-sm font-medium font-serif xl:inline-block hidden">
                  FAQs
                </span>
                <span className="text-sm font-medium font-serif xl:hidden">
                  FAQs
                </span>
              </a>
            </li>
            <li>
              <a
                className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500"
                href="/store/customization?storeTab=offers-setting">
                <span className="text-sm font-medium font-serif xl:inline-block hidden">
                  Offers
                </span>
                <span className="text-sm font-medium font-serif xl:hidden">
                  Offers
                </span>
              </a>
            </li>
            <li>
              <a
                className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500 sm:rounded-bl-none rounded-bl-md"
                href="/store/customization?storeTab=contact-us-setting">
                <span className="text-sm font-medium font-serif xl:inline-block hidden">
                  Contact Us
                </span>
                <span className="text-sm font-medium font-serif xl:hidden">
                  Contact
                </span>
              </a>
            </li>
            <li>
              <a
                className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500 sm:rounded-bl-none rounded-bl-md"
                href="/store/customization?storeTab=checkout-setting">
                <span className="text-sm font-medium font-serif xl:inline-block hidden">
                  Checkout
                </span>
                <span className="text-sm font-medium font-serif xl:hidden">
                  Checkout
                </span>
              </a>
            </li>
            <li>
              <a
                className="inline-block w-full py-3 px-4 shadow-md bg-gray-200 text-gray-800 font-medium dark:bg-gray-600 dark:text-gray-300 hover:text-white hover:bg-emerald-500  focus:outline-none dark:hover:text-white dark:hover:bg-emerald-500 sm:rounded-bl-none rounded-bl-md"
                href="/store/customization?storeTab=dashboard-setting">
                <span className="text-sm font-medium font-serif xl:inline-block hidden">
                  Dashboard Setting
                </span>
                <span className="text-sm font-medium font-serif xl:hidden">
                  Dashboard
                </span>
              </a>
            </li>
          </ul>
          <div className="sm:container md:p-6 p-4 mx-auto bg-white dark:bg-gray-800 dark:text-gray-200 rounded-lg">
            <form>
              <div className="grid grid-cols-12 font-sans pr-4">
                <div className="col-span-12 md:col-span-12 lg:col-span-12">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    Header
                  </div>
                  <hr className="md:mb-6 mb-3" />
                  <div className="flex-grow scrollbar-hide w-full max-h-full xl:px-10">
                    <div className="inline-flex md:text-base text-sm my-3 text-gray-500 dark:text-gray-400">
                      <strong>Header Contacts</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Header Text
                      </label>
                      <div className="sm:col-span-4">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="help_text"
                          placeholder="We are available 24/7, Need help?"
                          autoComplete="new-password"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Phone Number
                      </label>
                      <div className="sm:col-span-4">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="phone_number"
                          placeholder="+01234560352"
                          autoComplete="new-password"
                          value=""
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                      <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Header Logo
                      </label>
                      <div className="sm:col-span-4">
                        <div className="w-full text-center">
                          <div
                            className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                            role="presentation"
                            tabIndex={0}>
                            <input
                              accept="image/*,.jpeg,.jpg,.png,.webp"
                              type="file"
                              tabIndex={-1}
                              className="hidden"
                            />
                            <span className="mx-auto flex justify-center">
                              <svg
                                stroke="currentColor"
                                fill="none"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                                strokeLinecap="round"
                                stroke-linejoin="round"
                                className="text-3xl text-emerald-500"
                                height="1em"
                                width="1em"
                                xmlns="http://www.w3.org/2000/svg">
                                <polyline points="16 16 12 12 8 16"></polyline>
                                <line x1="12" y1="12" x2="12" y2="21"></line>
                                <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                <polyline points="16 16 12 12 8 16"></polyline>
                              </svg>
                            </span>
                            <p className="text-sm mt-2">
                              Drag your images here
                            </p>
                            <em className="text-xs text-gray-400">
                              (Only *.jpeg, *.webp and *.png images will be
                              accepted)
                            </em>
                          </div>
                          <div className="text-emerald-500"></div>
                          <aside className="flex flex-row flex-wrap mt-4">
                            <div className="relative">
                              {" "}
                              <img
                                className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                src="https://res.cloudinary.com/ahossain/image/upload/v1697687802/settings/logo-light_hls14v.svg"
                                alt="product"
                              />
                              <button
                                type="button"
                                className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <circle cx="12" cy="12" r="10"></circle>
                                  <line x1="15" y1="9" x2="9" y2="15"></line>
                                  <line x1="9" y1="9" x2="15" y2="15"></line>
                                </svg>
                              </button>
                            </div>
                          </aside>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-end items-center flex-shrink-0 space-x-6">
                    <div className="fixed right-auto md:mb-6 mb-3 bottom-0 z-40">
                      <button
                        className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 h-10 px-6"
                        type="submit">
                        {" "}
                        Update
                      </button>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 mt-5">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>{" "}
                    Main Slider
                  </div>
                  <hr className="mb-3" />
                  <div className="flex-grow scrollbar-hide w-full max-h-full xl:px-10">
                    <Tabs className="react-tabs" data-rttabs="true">
                      <TabList className="react-tabs__tab-list" role="tablist">
                        <Tab
                          className="react-tabs__tab react-tabs__tab--selected"
                          role="tab"
                          id="tab:rj:0"
                          aria-selected="true"
                          aria-disabled="false"
                          aria-controls="panel:rj:0"
                          data-rttab="true">
                          Slider 1
                        </Tab>
                        <Tab
                          className="react-tabs__tab"
                          role="tab"
                          id="tab:rj:1"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="panel:rj:1"
                          data-rttab="true">
                          Slider 2
                        </Tab>
                        <Tab
                          className="react-tabs__tab"
                          role="tab"
                          id="tab:rj:2"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="panel:rj:2"
                          data-rttab="true">
                          Slider 3
                        </Tab>
                        <Tab
                          className="react-tabs__tab"
                          role="tab"
                          id="tab:rj:3"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="panel:rj:3"
                          data-rttab="true">
                          Slider 4
                        </Tab>
                        <Tab
                          className="react-tabs__tab"
                          role="tab"
                          id="tab:rj:4"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="panel:rj:4"
                          data-rttab="true">
                          Slider 5
                        </Tab>
                        <Tab
                          className="react-tabs__tab"
                          role="tab"
                          id="tab:rj:5"
                          aria-selected="false"
                          aria-disabled="false"
                          aria-controls="panel:rj:5"
                          data-rttab="true">
                          Options
                        </Tab>
                      </TabList>
                      <TabPanel>
                        <div
                          className="md:mt-10 mt-3 react-tabs__tab-panel--selected"
                          role="tabpanel"
                          id="panel:rj:0"
                          aria-labelledby="tab:rj:0">
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Images 1
                            </label>
                            <div className="sm:col-span-4">
                              <div className="w-full text-center">
                                <div
                                  className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                                  role="presentation"
                                  tabIndex={0}>
                                  <input
                                    accept="image/*,.jpeg,.jpg,.png,.webp"
                                    type="file"
                                    tabIndex={-1}
                                    className="hidden"
                                  />
                                  <span className="mx-auto flex justify-center">
                                    <svg
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      strokeLinecap="round"
                                      stroke-linejoin="round"
                                      className="text-3xl text-emerald-500"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <polyline points="16 16 12 12 8 16"></polyline>
                                      <line
                                        x1="12"
                                        y1="12"
                                        x2="12"
                                        y2="21"></line>
                                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                      <polyline points="16 16 12 12 8 16"></polyline>
                                    </svg>
                                  </span>
                                  <p className="text-sm mt-2">
                                    Drag your images here
                                  </p>
                                  <em className="text-xs text-gray-400">
                                    (Only *.jpeg, *.webp and *.png images will
                                    be accepted)
                                  </em>
                                </div>
                                <div className="text-emerald-500"></div>
                                <aside className="flex flex-row flex-wrap mt-4">
                                  <div className="relative">
                                    {" "}
                                    <img
                                      className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                      src="https://res.cloudinary.com/ahossain/image/upload/v1697688491/settings/slider-1_rl8qdc.jpg"
                                      alt="product"
                                    />
                                    <button
                                      type="button"
                                      className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line
                                          x1="15"
                                          y1="9"
                                          x2="9"
                                          y2="15"></line>
                                        <line
                                          x1="9"
                                          y1="9"
                                          x2="15"
                                          y2="15"></line>
                                      </svg>
                                    </button>
                                  </div>
                                </aside>
                              </div>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 ">
                              Slider Title
                            </label>
                            <div className="sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                                type="text"
                                name="slider_title"
                                placeholder="Slider Title"
                                autoComplete="new-password"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Description
                            </label>
                            <div className="sm:col-span-4">
                              <textarea
                                className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                                name="slider_description"
                                placeholder="Slider Description"
                                rows={4}
                                spellCheck="false"></textarea>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Button Name
                            </label>
                            <div className="sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                                type="text"
                                name="slider_button_name"
                                placeholder="Slider Button Name"
                                autoComplete="new-password"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Button Link
                            </label>
                            <div className="sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                                type="text"
                                name="slider_button_link"
                                placeholder="Slider Button Link"
                                autoComplete="new-password"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                      <TabPanel>
                        <div
                          className="md:mt-10 mt-3 react-tabs__tab-panel--selected"
                          role="tabpanel"
                          id="panel:rj:0"
                          aria-labelledby="tab:rj:0">
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Images
                            </label>
                            <div className="sm:col-span-4">
                              <div className="w-full text-center">
                                <div
                                  className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                                  role="presentation"
                                  tabIndex={0}>
                                  <input
                                    accept="image/*,.jpeg,.jpg,.png,.webp"
                                    type="file"
                                    tabIndex={-1}
                                    className="hidden"
                                  />
                                  <span className="mx-auto flex justify-center">
                                    <svg
                                      stroke="currentColor"
                                      fill="none"
                                      strokeWidth="2"
                                      viewBox="0 0 24 24"
                                      strokeLinecap="round"
                                      stroke-linejoin="round"
                                      className="text-3xl text-emerald-500"
                                      height="1em"
                                      width="1em"
                                      xmlns="http://www.w3.org/2000/svg">
                                      <polyline points="16 16 12 12 8 16"></polyline>
                                      <line
                                        x1="12"
                                        y1="12"
                                        x2="12"
                                        y2="21"></line>
                                      <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                      <polyline points="16 16 12 12 8 16"></polyline>
                                    </svg>
                                  </span>
                                  <p className="text-sm mt-2">
                                    Drag your images here
                                  </p>
                                  <em className="text-xs text-gray-400">
                                    (Only *.jpeg, *.webp and *.png images will
                                    be accepted)
                                  </em>
                                </div>
                                <div className="text-emerald-500"></div>
                                <aside className="flex flex-row flex-wrap mt-4">
                                  <div className="relative">
                                    {" "}
                                    <img
                                      className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                      src="https://res.cloudinary.com/ahossain/image/upload/v1697688491/settings/slider-1_rl8qdc.jpg"
                                      alt="product"
                                    />
                                    <button
                                      type="button"
                                      className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        stroke-linejoin="round"
                                        height="1em"
                                        width="1em"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <circle cx="12" cy="12" r="10"></circle>
                                        <line
                                          x1="15"
                                          y1="9"
                                          x2="9"
                                          y2="15"></line>
                                        <line
                                          x1="9"
                                          y1="9"
                                          x2="15"
                                          y2="15"></line>
                                      </svg>
                                    </button>
                                  </div>
                                </aside>
                              </div>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1 ">
                              Slider Title
                            </label>
                            <div className="sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                                type="text"
                                name="slider_title"
                                placeholder="Slider Title"
                                autoComplete="new-password"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Description
                            </label>
                            <div className="sm:col-span-4">
                              <textarea
                                className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                                name="slider_description"
                                placeholder="Slider Description"
                                rows={4}
                                spellCheck="false"></textarea>
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Button Name
                            </label>
                            <div className="sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                                type="text"
                                name="slider_button_name"
                                placeholder="Slider Button Name"
                                autoComplete="new-password"
                                value=""
                              />
                            </div>
                          </div>
                          <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                            <label className="block md:text-sm  md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                              Slider Button Link
                            </label>
                            <div className="sm:col-span-4">
                              <input
                                className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                                type="text"
                                name="slider_button_link"
                                placeholder="Slider Button Link"
                                autoComplete="new-password"
                                value=""
                              />
                            </div>
                          </div>
                        </div>
                      </TabPanel>
                    </Tabs>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 mt-5">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    Discount Coupon Code Box
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Show/Hide
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 relative transition-2">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Home Page Discount Title
                      </label>
                      <div className="sm:col-span-4">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="discount_title"
                          placeholder="Home Page Discount Title"
                          autoComplete="new-password"
                          value=""
                        />
                      </div>
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Super Discount Active Coupon Code
                      </label>
                      <div className="sm:col-span-4">
                        <div className="react-tag-input">
                          <div className="react-tag-input__tag">
                            <div className="react-tag-input__tag__content">
                              WINTER21
                            </div>
                            <div className="react-tag-input__tag__remove"></div>
                          </div>
                          <div className="react-tag-input__tag">
                            <div className="react-tag-input__tag__content">
                              OCTOBER21
                            </div>
                            <div className="react-tag-input__tag__remove"></div>
                          </div>
                          <input
                            className="react-tag-input__input"
                            placeholder="Enter the coupon code from the coupon table and click enter"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="h-auto transition-all duration-500 ease-out invisible opacity-0">
                      <div>
                        <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400">
                          <div className="relative">
                            <strong>Slider Full Width</strong>
                          </div>
                        </div>
                        <hr className="mb-4 mt-2" />
                        <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                          <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                            Slider Full Width
                          </label>
                          <div className="sm:col-span-4">
                            <div className="mb-3">
                              <div className="flex flex-wrap items-center">
                                <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                                <div className="react-switch md:ml-0 ml-3">
                                  <div className="react-switch-bg h-30 w-80 bg-red-600 rounded-15 cursor-pointer transition-background duration-250 ease-out">
                                    <div className="h-30 w-45 opacity-0 transition-opacity duration-250 ease-out">
                                      <div className="flex items-center justify-center h-full text-white text-14 px-8 pt-1">
                                        Yes
                                      </div>
                                    </div>
                                    <div className="h-30 w-45 absolute opacity-1 right-0 top-0 transition-opacity duration-250 ease-out">
                                      <div className="flex items-center justify-center h-full text-white text-14 pr-5 pt-1">
                                        No
                                      </div>
                                    </div>
                                  </div>
                                  <div className="react-switch-handle w-28 h-28 bg-white cursor-pointer rounded-full absolute transform translate-x-1 top-1 outline-0 border-0 transition-all duration-250 ease-out box-shadow-0.15s"></div>
                                  <input
                                    type="checkbox"
                                    role="switch"
                                    aria-checked="false"
                                    className="border-0 clip-rect-0 overflow-hidden h-1 m--1 absolute w-1"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3 md:mt-0 mt-10">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>{" "}
                    Promotion Banner
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4"></div>
                    </div>
                    <div className="transition-all duration-400 ease-out height-auto visibility-visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promotion_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Description
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="promotion_description"
                            placeholder="Promotion Description"
                            rows={4}
                            spellCheck="false"></textarea>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button Name
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promotion_button_name"
                            placeholder="Button Name"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button Link
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promotion_button_link"
                            placeholder="https://kachabazar-store.vercel.app/search?category=fruits-vegetable&amp;_id=632aca2b4d87ff2494210be8"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:mt-0 mt-15">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3 relative">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>{" "}
                    Featured Categories
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                    </div>
                    <div className="transition-all duration-500 ease-in-out visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="feature_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Featured Categories
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="feature_description"
                            placeholder="Featured Categories"
                            rows={4}
                            spellCheck="false"></textarea>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Products Limit
                        </label>
                        <div className="sm:col-span-4">
                          <select
                            className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5"
                            name="feature_product_limit">
                            <option value="" className="hidden">
                              Select Products Limit
                            </option>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="18">18</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:mt-0 mt-15">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3 relative">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>
                    Popular Products
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4"></div>
                    </div>
                    <div className="transition-all duration-500 ease-in-out visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="popular_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Description
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full  bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="popular_description"
                            placeholder="Popular Description"
                            rows={4}
                            spellCheck="false"></textarea>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Products Limit
                        </label>
                        <div className="sm:col-span-4">
                          <select
                            className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5"
                            name="popular_product_limit">
                            <option value="" className="hidden">
                              Select Products Limit
                            </option>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="18">18</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 mt-15">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>{" "}
                    Quick Delivery Section
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4"></div>
                    </div>
                    <div className="transition-all duration-500 ease-in-out visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Sub Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="quick_delivery_subtitle"
                            placeholder="Sub Title"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="quick_delivery_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Description
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="quick_delivery_description"
                            placeholder="Quick Delivery Section"
                            rows={4}
                            spellCheck="false"></textarea>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button Name
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="quick_delivery_button"
                            placeholder="Button Name"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button Link
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="quick_delivery_link"
                            placeholder="https://kachabazar-store.vercel.app/search?category=fruits-vegetable&amp;_id=632aca2b4d87ff2494210be8"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Image
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}>
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                className="hidden"
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                  <line x1="12" y1="12" x2="12" y2="21"></line>
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500"></div>
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688032/settings/delivery-boy_rluuoq.webp"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:mt-0 mt-10">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>{" "}
                    Latest Discounted Products
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                            <div className="react-switch md:ml-0 ml-3 relative inline-block text-left opacity-1 direction-ltr border-radius-15 transition-opacity duration-250 ease touch-action-none select-none">
                              <div className="react-switch-bg relative h-30 w-80 m-0 bg-rgb-47-133-90 border-radius-15 cursor-pointer transition-background duration-250 ease">
                                <div className="relative h-30 w-45 opacity-1 pointer-events-none transition-opacity duration-250 ease">
                                  <div className="flex justify-center items-center h-full text-white text-14 pl-8 pt-1">
                                    Yes
                                  </div>
                                </div>
                                <div className="absolute h-30 w-45 opacity-0 right-0 top-0 pointer-events-none transition-opacity duration-250 ease">
                                  <div className="flex justify-center items-center h-full text-white text-14 pr-5 pt-1">
                                    No
                                  </div>
                                </div>
                              </div>
                              <div className="react-switch-handle h-28 w-28 bg-rgb-255-255-255 inline-block cursor-pointer border-radius-50 position-absolute transform translate-x-51 top-1 outline-0 border-0 transition-background-color duration-250 ease transform duration-250 ease box-shadow duration-150 ease"></div>
                              <input
                                type="checkbox"
                                role="switch"
                                aria-checked="true"
                                checked
                                className="border-0 clip-rect-0px-0px-0px-0px h-1 margin--1 overflow-hidden padding-0 position-absolute w-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transition-all duration-500 ease-in-out visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="latest_discount_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Description
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="latest_discount_description"
                            placeholder="Latest Discount Description"
                            rows={4}
                            spellCheck="false"></textarea>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Products Limit
                        </label>
                        <div className="sm:col-span-4">
                          <select
                            className="block w-full h-12 border bg-gray-100 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 focus:shadow-none dark:focus:border-gray-500 dark:bg-gray-700 leading-5"
                            name="latest_discount_product_limit">
                            <option value="" className="hidden">
                              Select Products Limit
                            </option>
                            <option value="6">6</option>
                            <option value="12">12</option>
                            <option value="18">18</option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:my-0 my-24">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>{" "}
                    Get Your Daily Needs
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                            <div className="react-switch md:ml-0 ml-3 relative inline-block text-left opacity-1 direction-ltr border-radius-15 transition-opacity duration-250 ease touch-action-none select-none">
                              <div className="react-switch-bg relative h-30 w-80 m-0 position-relative bg-rgb-47-133-90 border-radius-15 cursor-pointer transition-background duration-250 ease">
                                <div className="relative h-30 w-45 position-relative opacity-1 pointer-events-none transition-opacity duration-250 ease">
                                  <div className="flex justify-center items-center h-full text-white text-14 pl-8 pt-1">
                                    Yes
                                  </div>
                                </div>
                                <div className="absolute h-30 w-45 position-absolute opacity-0 right-0 top-0 pointer-events-none transition-opacity duration-250 ease">
                                  <div className="flex justify-center items-center h-full text-white text-14 pr-5 pt-1">
                                    No
                                  </div>
                                </div>
                              </div>
                              <div className="react-switch-handle h-28 w-28 bg-rgb-255-255-255 inline-block cursor-pointer border-radius-50 position-absolute transform translate-x-51 top-1 outline-0 border-0 transition-background-color duration-250 ease transform duration-250 ease box-shadow duration-150 ease"></div>
                              <input
                                type="checkbox"
                                role="switch"
                                aria-checked="true"
                                checked
                                className="border-0 clip-rect-0px-0px-0px-0px h-1 margin--1 overflow-hidden padding-0 position-absolute w-1"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transition-all duration-500 ease-in-out visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="daily_need_title"
                            placeholder="Title"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Description
                        </label>
                        <div className="sm:col-span-4">
                          <textarea
                            className="block w-full border bg-gray-100 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                            name="daily_need_description"
                            placeholder="Daily Need Description"
                            rows={4}
                            spellCheck="false"></textarea>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Image Left
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}>
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                className="hidden"
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                  <line x1="12" y1="12" x2="12" y2="21"></line>
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500"></div>
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688091/settings/app-download-img-left_s5n2zf.webp"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Image Right
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}>
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                className="hidden"
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                  <line x1="12" y1="12" x2="12" y2="21"></line>
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500"></div>
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688091/settings/app-download-img_c7xqg4.webp"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button 1 Image
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}>
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                className="hidden"
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                  <line x1="12" y1="12" x2="12" y2="21"></line>
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500"></div>
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688165/settings/app-store_cyyc0f.svg"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button 1 Link
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="daily_need_app_link"
                            placeholder="https://kachabazar-store.vercel.app/search?category=fruits-vegetable&amp;_id=632aca2b4d87ff2494210be8"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button 2 Image
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}>
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                className="hidden"
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                  <line x1="12" y1="12" x2="12" y2="21"></line>
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500"></div>
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688167/settings/play-store_cavwua.svg"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Button 2 Link
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="daily_need_google_link"
                            placeholder="https://kachabazar-store.vercel.app/search?category=fruits-vegetable&amp;_id=632aca2b4d87ff2494210be8"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:mt-0 mt-10">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>{" "}
                    Feature Promo Section
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                    </div>
                    <div className="transition-all duration-500 ease-in-out visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Free Shipping
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promo_free_shipping"
                            placeholder="From $500.00"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Support
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promo_support"
                            placeholder="24/7 At Anytime"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Secure Payment
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promo_payment"
                            placeholder="Secure Payment"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 relative">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Latest Offer
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="promo_offer"
                            placeholder="Upto 20% Off"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-span-12 md:col-span-12 lg:col-span-12 md:mt-0 mt-10">
                  <div className="inline-flex md:text-lg text-base text-gray-800 font-semibold dark:text-gray-400 mb-3">
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      stroke-linejoin="round"
                      className="mt-1 mr-2"
                      height="1em"
                      width="1em"
                      xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="3"></circle>
                      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                    </svg>{" "}
                    Footer
                  </div>
                  <hr className="md:mb-12 mb-3" />
                  <div className="xl:px-10 flex-grow scrollbar-hide w-full max-h-full pb-0">
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative">
                      <strong>Block 1</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transition-all duration-500 ease-in-out visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-4">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_title"
                            placeholder="Company"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 1
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_one_title"
                            placeholder="About Us"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4 mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_one"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 2
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_two_title"
                            placeholder="Contact Us"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_two"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 3
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_three_title"
                            placeholder="Careers"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_three"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 4
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_four_title"
                            placeholder="Neuesten Nachrichten"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4 mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_one_link_four"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative md:mt-0 mt-24">
                      <strong>Block 2</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transition-all duration-500 ease-in-out visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_title"
                            placeholder="Top Category"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 1
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_one_title"
                            placeholder="Fish &amp; Meat"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_one"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 2
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_two_title"
                            placeholder="Soft Drinks"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_two"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 3
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_three_title"
                            placeholder="Baby Care"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_three"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 4
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_four_title"
                            placeholder="Beauty &amp; Health"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_two_link_four"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative md:mt-0 mt-24">
                      <strong>Block 3</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="transition-all ease-in-out duration-500 h-auto visibility-visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Title
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_title"
                            placeholder="My Account"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 1
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_one_title"
                            placeholder="Dashboard"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_one"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 2
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_two_title"
                            placeholder="My Orders"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_two"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 3
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_three_title"
                            placeholder="Recent Orders"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_three"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-1">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Link 4
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_four_title"
                            placeholder="Updated Profile"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                        <label className="md:col-span-1 sm:col-span-2"></label>
                        <div className="sm:col-span-4  mb-5">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_three_link_four"
                            placeholder="Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative md:mt-0 mt-24">
                      <strong>Block 4</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-auto transition-all duration-500 ease-in-out visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Footer Logo
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}>
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                className="hidden"
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                  <line x1="12" y1="12" x2="12" y2="21"></line>
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500"></div>
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688576/settings/logo-color_el4zmy.svg"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Address
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_four_address"
                            placeholder="Address"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Phone
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_four_phone"
                            placeholder="Phone"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Email
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="footer_block_four_email"
                            placeholder="Email"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative mt-24 md:mt-0">
                      <strong>Social Links</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-auto transition-all duration-500 ease-in-out visibility-visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Facebook
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="social_facebook"
                            placeholder="Facebook link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Twitter
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="social_twitter"
                            placeholder="Twitter Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Pinterest
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="social_pinterest"
                            placeholder="Pinterest Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Linkedin
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="social_linkedin"
                            placeholder="Linkedin Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          WhatsApp
                        </label>
                        <div className="sm:col-span-4">
                          <input
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="social_whatsapp"
                            placeholder="whatsApp Link"
                            autoComplete="new-password"
                            value=""
                          />
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative mt-24 md:mt-0">
                      <strong>Payment Method</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="h-auto transition-all duration-500 ease-in-out visible opacity-100">
                      <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                        <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                          Payment Method
                        </label>
                        <div className="sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}>
                              <input
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                type="file"
                                tabIndex={-1}
                                className="none;"
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  stroke-linejoin="round"
                                  className="text-3xl text-emerald-500"
                                  height="1em"
                                  width="1em"
                                  xmlns="http://www.w3.org/2000/svg">
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                  <line x1="12" y1="12" x2="12" y2="21"></line>
                                  <path d="M20.39 18.39A5 5 0 0 0 18 9h-1.26A8 8 0 1 0 3 16.3"></path>
                                  <polyline points="16 16 12 12 8 16"></polyline>
                                </svg>
                              </span>
                              <p className="text-sm mt-2">
                                Drag your images here
                              </p>
                              <em className="text-xs text-gray-400">
                                (Only *.jpeg, *.webp and *.png images will be
                                accepted)
                              </em>
                            </div>
                            <div className="text-emerald-500"></div>
                            <aside className="flex flex-row flex-wrap mt-4">
                              <div className="relative">
                                {" "}
                                <img
                                  className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2"
                                  src="https://res.cloudinary.com/ahossain/image/upload/v1697688607/settings/payment-logo_qhslgz.webp"
                                  alt="product"
                                />
                                <button
                                  type="button"
                                  className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                  <svg
                                    stroke="currentColor"
                                    fill="none"
                                    strokeWidth="2"
                                    viewBox="0 0 24 24"
                                    strokeLinecap="round"
                                    stroke-linejoin="round"
                                    height="1em"
                                    width="1em"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <line x1="15" y1="9" x2="9" y2="15"></line>
                                    <line x1="9" y1="9" x2="15" y2="15"></line>
                                  </svg>
                                </button>
                              </div>
                            </aside>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="inline-flex md:text-base text-sm mb-3 text-gray-500 dark:text-gray-400 relative mt-16 md:mt-0">
                      <strong>Footer Bottom Contact Number</strong>
                    </div>
                    <hr className="md:mb-12 mb-3" />
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Enable This Block
                      </label>
                      <div className="sm:col-span-4">
                        <div className="mb-3">
                          <div className="flex flex-wrap items-center">
                            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-1"></label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="grid md:grid-cols-5 sm:grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 md:mb-6 mb-3 transition-all duration-500 ease-in-out visible opacity-100">
                      <label className="block md:text-sm md:col-span-1 sm:col-span-2 text-xs font-semibold text-gray-600 dark:text-gray-400 mb-1">
                        Footer Bottom Contact Number
                      </label>
                      <div className="sm:col-span-4 mb-20 md:mb-0">
                        <input
                          className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                          type="text"
                          name="footer_Bottom_Contact"
                          placeholder="Footer Bottom Contact Number"
                          autoComplete="new-password"
                          value=""
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default MyShopStoreCustom;
