import React from "react";

const MyProductPage = () => {
  return (
    <div className="w-full relative mb-4 bg-whi">
      <div className="flex-auto p-0 md:p-4">
        <div
          className="mb-4 border-b border-gray-200 dark:border-slate-700"
          data-fc-type="tab"
        >
          <ul
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            aria-label="Tabs"
          >
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 active "
                id="all-tab"
                data-fc-target="#all"
                type="button"
                role="tab"
                aria-controls="all"
                aria-selected="false"
              >
                All <span className="text-slate-400">(4251)</span>
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="published-tab"
                data-fc-target="#published"
                type="button"
                role="tab"
                aria-controls="published"
                aria-selected="false"
              >
                Published <span className="text-slate-400">(3255)</span>
              </button>
            </li>
            <li className="me-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="drafts-tab"
                data-fc-target="#drafts"
                type="button"
                role="tab"
                aria-controls="drafts"
                aria-selected="false"
              >
                Drafts <span className="text-slate-400">(25)</span>
              </button>
            </li>
            <li role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="discount-tab"
                data-fc-target="#discount"
                type="button"
                role="tab"
                aria-controls="discount"
                aria-selected="false"
              >
                On Discount <span className="text-slate-400">(532)</span>
              </button>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap gap-4 mb-3">
          <div className="mb-2 w-44">
            <select
              id="Category"
              className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
            >
              <option className="dark:text-slate-700">All Category</option>
              <option className="dark:text-slate-700">Electronics</option>
              <option className="dark:text-slate-700">Furniture</option>
              <option className="dark:text-slate-700">Footwear</option>
              <option className="dark:text-slate-700">Clothes</option>
            </select>
          </div>
          <div className="mb-2 w-36">
            <select
              id="Vendor"
              className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
            >
              <option className="dark:text-slate-700">Vendor</option>
              <option className="dark:text-slate-700">Vendor-2</option>
              <option className="dark:text-slate-700">Vendor-3</option>
            </select>
          </div>
          <div className="ms-auto">
            <form>
              <div className="relative">
                <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    stroke-linejoin="round"
                    data-lucide="search"
                    className="lucide lucide-search z-[1] w-5 h-5 stroke-slate-400"
                  >
                    <circle cx="11" cy="11" r="8"></circle>
                    <path d="m21 21-4.3-4.3"></path>
                  </svg>
                </div>
                <input
                  type="search"
                  id="productSearch"
                  className="form-input w-52 rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700 pl-10 p-2.5"
                  placeholder="search"
                />
              </div>
            </form>
          </div>
          <div>
            <button className="bg-sky-600 inline-block focus:outline-none bg-brand-500 mt-1 text-white hover:bg-brand-600 hover:text-white  text-md font-medium py-2 px-4 rounded">
              Add product
            </button>
          </div>
        </div>

        <div id="myTabContent">
          <div
            className="active  p-4 bg-gray-50 rounded-lg dark:bg-gray-900"
            id="all"
            role="tabpanel"
            aria-labelledby="all-tab"
          >
            <div className="grid grid-cols-1 p-0 md:p-4">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-slate-700/20">
                      <tr>
                        <th scope="col" className="p-3">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Product &amp; Title
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Categories
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Stock status
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Attributes
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/02.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                New Colorfull Shoes{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size-04-15 (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Footwear
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-purple-500"></i>
                              <i className="icofont-brand-mts text-pink-500"></i>
                              <i className="icofont-brand-mts text-blue-500"></i>
                              <i className="icofont-brand-mts text-green-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $99{" "}
                          <del className="text-slate-500 font-normal">$130</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          12 Sep 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/03.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Imported VR Box{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                35px 5D (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Entertainment
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Electronics
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-black"></i>
                              <i className="icofont-brand-mts text-gray-400"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="mx-1">M</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $129{" "}
                          <del className="text-slate-500 font-normal">$200</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          05 Aug 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-3.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat HD, Smart LED Fire TV{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                32 inc (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Electronics
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Entertainment
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-red-600/5 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            Soldout
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-black"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="mx-1">32 inc</span>
                            <span className="mx-1">51 inc</span>
                            <span className="mx-1">92 inc</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $399{" "}
                          <del className="text-slate-500 font-normal">$499</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          02 Sep 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-4.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat 530 Bluetooth Wireless{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size-M (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Footwear
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-red-500"></i>
                              <i className="icofont-brand-mts text-gray-500"></i>
                              <i className="icofont-brand-mts text-black"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $79{" "}
                          <del className="text-slate-500 font-normal">$99</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          12 Jan 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-5.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat Watch 3 Active{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Latest Model 2023
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Fashion
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-orange-500"></i>
                              <i className="icofont-brand-mts text-purple-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $219{" "}
                          <del className="text-slate-500 font-normal">$299</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          25 Nov 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-6.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat Watch 3 Active{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Latest Model 2023
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Fashion
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-orange-500"></i>
                              <i className="icofont-brand-mts text-purple-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $219{" "}
                          <del className="text-slate-500 font-normal">$299</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          25 Nov 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/01.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                White Table Camera
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                256px, 301px (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Electronics
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Security
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-red-600/5 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            Soldout
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-gray-100"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $99{" "}
                          <del className="text-slate-500 font-normal">$150</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          20 Jul 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-7.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat Air 2023 Laptop
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size- 13.3 Inch (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Electronics
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-black"></i>
                              <i className="icofont-brand-mts text-gray-300"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $499{" "}
                          <del className="text-slate-500 font-normal">$599</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          21 Feb 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-1.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                New Colorfull Shoes{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size-04-15 (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Footwear
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-gray-100"></i>
                              <i className="icofont-brand-mts text-pink-500"></i>
                              <i className="icofont-brand-mts text-blue-500"></i>
                              <i className="icofont-brand-mts text-yellow-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $99{" "}
                          <del className="text-slate-500 font-normal">$130</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          12 Sep 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/04.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                N95 Mask{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size-04-15 (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Safety
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-gray-100"></i>
                              <i className="icofont-brand-mts text-yellow-500"></i>
                              <i className="icofont-brand-mts text-black"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $8{" "}
                          <del className="text-slate-500 font-normal">$15</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          15 Oct 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="self-center">
                <p className="dark:text-slate-400">Showing 1 - 20 of 1,524</p>
              </div>
              <div className="self-center">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <a
                      href="#"
                      className=" py-2 px-3 ms-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <i className="icofont-simple-left"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 py-2 px-3 leading-tight text-brand-600 bg-brand-50 border border-brand-300 hover:bg-brand-100 hover:text-brand-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <i className="icofont-simple-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="published"
            role="tabpanel"
            aria-labelledby="published-tab"
          >
            <div className="grid grid-cols-1 p-0 md:p-4">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-600/20">
                      <tr>
                        <th scope="col" className="p-3">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Product &amp; Title
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Categories
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Stock status
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Attributes
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/03.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Imported VR Box{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                35px 5D (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Entertainment
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Electronics
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-black"></i>
                              <i className="icofont-brand-mts text-gray-400"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="mx-1">M</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $129{" "}
                          <del className="text-slate-500 font-normal">$200</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          05 Aug 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/02.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                New Colorfull Shoes{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size-04-15 (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Footwear
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-purple-500"></i>
                              <i className="icofont-brand-mts text-pink-500"></i>
                              <i className="icofont-brand-mts text-blue-500"></i>
                              <i className="icofont-brand-mts text-green-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $99{" "}
                          <del className="text-slate-500 font-normal">$130</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          12 Sep 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-3.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat HD, Smart LED Fire TV{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                32 inc (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Electronics
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Entertainment
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-red-600/5 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            Soldout
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-black"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="mx-1">32 inc</span>
                            <span className="mx-1">51 inc</span>
                            <span className="mx-1">92 inc</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $399{" "}
                          <del className="text-slate-500 font-normal">$499</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          02 Sep 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-4.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat 530 Bluetooth Wireless{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size-M (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Footwear
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-red-500"></i>
                              <i className="icofont-brand-mts text-gray-500"></i>
                              <i className="icofont-brand-mts text-black"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $79{" "}
                          <del className="text-slate-500 font-normal">$99</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          12 Jan 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-5.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat Watch 3 Active{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Latest Model 2023
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Fashion
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-orange-500"></i>
                              <i className="icofont-brand-mts text-purple-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $219{" "}
                          <del className="text-slate-500 font-normal">$299</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          25 Nov 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-6.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat Watch 3 Active{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Latest Model 2023
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Fashion
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-orange-500"></i>
                              <i className="icofont-brand-mts text-purple-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $219{" "}
                          <del className="text-slate-500 font-normal">$299</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          25 Nov 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/01.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                White Table Camera
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                256px, 301px (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Electronics
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Security
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-red-600/5 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            Soldout
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-gray-100"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $99{" "}
                          <del className="text-slate-500 font-normal">$150</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          20 Jul 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-7.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat Air 2023 Laptop
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size- 13.3 Inch (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Electronics
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-black"></i>
                              <i className="icofont-brand-mts text-gray-300"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $499{" "}
                          <del className="text-slate-500 font-normal">$599</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          21 Feb 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-1.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                New Colorfull Shoes{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size-04-15 (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Footwear
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-gray-100"></i>
                              <i className="icofont-brand-mts text-pink-500"></i>
                              <i className="icofont-brand-mts text-blue-500"></i>
                              <i className="icofont-brand-mts text-yellow-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $99{" "}
                          <del className="text-slate-500 font-normal">$130</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          12 Sep 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/04.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                N95 Mask{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size-04-15 (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Safety
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-gray-100"></i>
                              <i className="icofont-brand-mts text-yellow-500"></i>
                              <i className="icofont-brand-mts text-black"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $8{" "}
                          <del className="text-slate-500 font-normal">$15</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          15 Oct 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="flex justify-between mt-4">
              <div className="self-center">
                <p className="dark:text-slate-400">Showing 1 - 20 of 1,524</p>
              </div>
              <div className="self-center">
                <ul className="inline-flex items-center -space-x-px">
                  <li>
                    <a
                      href="#"
                      className=" py-2 px-3 ms-0 leading-tight text-gray-500 bg-white rounded-l-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <i className="icofont-simple-left"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      1
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      aria-current="page"
                      className="z-10 py-2 px-3 leading-tight text-brand-600 bg-brand-50 border border-brand-300 hover:bg-brand-100 hover:text-brand-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                    >
                      2
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="py-2 px-3 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      3
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className=" py-2 px-3 leading-tight text-gray-500 bg-white rounded-r-lg border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-900 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                    >
                      <i className="icofont-simple-right"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="drafts"
            role="tabpanel"
            aria-labelledby="drafts-tab"
          >
            <div className="grid grid-cols-1 p-0 md:p-4">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-600/20">
                      <tr>
                        <th scope="col" className="p-3">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Product &amp; Title
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Categories
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Stock status
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Attributes
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-4.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat 530 Bluetooth Wireless{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Size-M (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Footwear
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-red-500"></i>
                              <i className="icofont-brand-mts text-gray-500"></i>
                              <i className="icofont-brand-mts text-black"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $79{" "}
                          <del className="text-slate-500 font-normal">$99</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          12 Jan 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-5.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat Watch 3 Active{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Latest Model 2023
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Fashion
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-orange-500"></i>
                              <i className="icofont-brand-mts text-purple-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $219{" "}
                          <del className="text-slate-500 font-normal">$299</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          25 Nov 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-6.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat Watch 3 Active{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Latest Model 2023
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Fashion
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-orange-500"></i>
                              <i className="icofont-brand-mts text-purple-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $219{" "}
                          <del className="text-slate-500 font-normal">$299</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          25 Nov 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/01.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                White Table Camera
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                256px, 301px (Model 2023)
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Electronics
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Security
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-red-600/5 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            Soldout
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-gray-100"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $99{" "}
                          <del className="text-slate-500 font-normal">$150</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          20 Jul 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
          <div
            className="hidden p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
            id="discount"
            role="tabpanel"
            aria-labelledby="discount-tab"
          >
            <div className="grid grid-cols-1 p-0 md:p-4">
              <div className="sm:-mx-6 lg:-mx-8">
                <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
                  <table className="w-full">
                    <thead className="bg-gray-50 dark:bg-gray-600/20">
                      <tr>
                        <th scope="col" className="p-3">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Product &amp; Title
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Categories
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Stock status
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Attributes
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Price
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                        >
                          Action
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-5.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat Watch 3 Active{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Latest Model 2023
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Fashion
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-orange-500"></i>
                              <i className="icofont-brand-mts text-purple-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $219{" "}
                          <del className="text-slate-500 font-normal">$299</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          25 Nov 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>

                      <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                        <td className="w-4 p-4">
                          <label className="custom-label">
                            <div className="bg-white dark:bg-slate-600/40 border border-slate-200 dark:border-slate-600 rounded w-5 h-5  inline-block  text-center -mb-[5px]">
                              <input type="checkbox" className="hidden" />
                              <i className="icofont-verification-check hidden text-ms text-brand-500 dark:text-slate-200 leading-5"></i>
                            </div>
                          </label>
                        </td>
                        <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                          <div className="flex items-center">
                            <img
                              src="assets/images/products/pro-6.png"
                              alt=""
                              className="me-2 h-8 inline-block"
                            />
                            <div className="self-center">
                              <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                                Mannat Watch 3 Active{" "}
                              </h5>
                              <span className="block  font-medium text-slate-500">
                                Latest Model 2023
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#" className="text-brand-500 underline">
                            Fashion
                          </a>
                          ,
                          <a href="#" className="text-brand-500 underline">
                            Lifestayle
                          </a>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                            In stock
                          </span>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <div>
                            color :
                            <span className="ms-2">
                              <i className="icofont-brand-mts text-orange-500"></i>
                              <i className="icofont-brand-mts text-purple-500"></i>
                            </span>
                          </div>
                          <div>
                            Size :<span className="ms-2">S</span>
                            <span className="mx-1">M</span>
                            <span className="mx-1">L</span>
                            <span className="mx-1">XL</span>
                            <span className="mx-1">XXL</span>
                          </div>
                        </td>
                        <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                          $219{" "}
                          <del className="text-slate-500 font-normal">$299</del>
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          25 Nov 2023
                        </td>
                        <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                          <a href="#">
                            <i className="icofont-ui-edit text-lg text-gray-500 dark:text-gray-400"></i>
                          </a>
                          <a href="#">
                            <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                          </a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductPage;
