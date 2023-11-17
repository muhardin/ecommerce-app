import Image from "next/image";
import React from "react";

const MyShopStoreCustom = () => {
  return (
    <>
      <main className="ltr:xl:pl-76 rtl:xl:pr-76 w-full ltr:lg:pl-72 rtl:lg:pr-72 rtl:lg:pl-0 bg-gray-200">
        <div className="h-full p-5 md:p-8">
          <div className="flex border-b border-dashed border-border-base py-5 sm:py-8">
            <h1 className="text-lg font-semibold text-heading">Settings</h1>
          </div>
          <form>
            <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
              <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                <h4 className="text-base font-semibold text-body-dark mb-2">
                  Logo
                </h4>
                <p className="text-sm text-body">
                  <span>
                    Upload your site logo from here. Dimension of the logo
                    should be &nbsp;
                    <span className="font-bold">128x40 Pixel</span>Image size
                    should not be more than &nbsp;
                    <span className="font-bold">2 MB </span>
                  </span>
                </p>
              </div>
              <div className="bg-white p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                <section className="upload">
                  <div
                    role="presentation"
                    tabIndex={0}
                    className="border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none"
                  >
                    <input
                      accept="image/*,.jpg,.jpeg,.png,.webp"
                      type="file"
                      tabIndex={-1}
                      className="hidden"
                    />
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="41px"
                      height="30px"
                      viewBox="0 0 40.909 30"
                      className="text-muted-light"
                    >
                      <g transform="translate(0 -73.091)">
                        <path
                          data-name="Path 2125"
                          d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z"
                          transform="translate(0)"
                          fill="currentColor"
                        ></path>
                      </g>
                    </svg>
                    <p className="mt-4 text-center text-sm text-body">
                      <span className="font-semibold text-accent">
                        Upload an image
                      </span>{" "}
                      or drag and drop{" "}
                      <span className="text-xs text-body">PNG, JPG</span>
                    </p>
                  </div>
                  <aside className="mt-2 flex flex-wrap">
                    <div className="relative mt-2 inline-flex flex-col overflow-hidden rounded me-2 border border-border-200">
                      <figure className="relative h-16 w-28">
                        <Image
                          alt=""
                          width={500}
                          height={500}
                          src="/images/no_image.png"
                        />
                      </figure>
                    </div>
                  </aside>
                </section>
              </div>
            </div>
            <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
              <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                <h4 className="text-base font-semibold text-body-dark mb-2">
                  Information
                </h4>
                <p className="text-sm text-body">
                  Change your site information from here
                </p>
              </div>
              <div className="bg-white p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                <div className="mb-5">
                  <label
                    htmlFor="siteTitle"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Site Title
                  </label>
                  <input
                    id="siteTitle"
                    name="siteTitle"
                    type="text"
                    className="px-4 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="siteSubtitle"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Site Subtitle
                  </label>
                  <input
                    id="siteSubtitle"
                    name="siteSubtitle"
                    type="text"
                    className="px-4 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="minimumOrderAmount"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Minimum Order Amount (in currency)
                  </label>
                  <input
                    id="minimumOrderAmount"
                    name="minimumOrderAmount"
                    type="number"
                    className="px-4 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="mb-5">
                  <div className="flex items-center gap-x-4">
                    <div className="form-control w-52">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          className="toggle toggle-primary"
                        />
                        <span className="label-text">Use OTP at checkout</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex items-center gap-x-4">
                    <div className="form-control w-52">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          className="toggle toggle-primary"
                        />
                        <span className="label-text">
                          Enable Must Verify Email
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex items-center gap-x-4">
                    <div>
                      <button
                        className="bg-accent relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none "
                        dir="ltr"
                        id="headlessui-switch-:r4:"
                        role="switch"
                        type="button"
                        tabIndex={0}
                        aria-checked="true"
                        data-headlessui-state="checked"
                      >
                        <span className="sr-only">Enable </span>
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-light transition-transform"></span>
                      </button>
                    </div>
                    <label className="block text-body-dark font-semibold text-sm leading-none mb-3 mb-0">
                      Enable AI
                    </label>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Select AI
                  </label>
                  <div className=" css-b62m3t-container">
                    <span
                      id="react-select-2-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className=" css-15aq8md">
                      <div className=" css-1n0qa22">
                        <div className=" css-15bgx2d-singleValue">openai</div>
                        <div className=" css-19bb58m" data-value="">
                          <input
                            className="appearance-none bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-2-input"
                            spellCheck="false"
                            tabIndex={0}
                            type="text"
                            aria-autoComplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            value=""
                          />
                        </div>
                      </div>
                      <div className=" css-1wy0on6">
                        <span className=" css-1hyfx7x"></span>
                        <div
                          className=" css-wnbgnj-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input name="defaultAi" type="hidden" value="openai" />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Tax Class
                  </label>
                  <div className=" css-b62m3t-container">
                    <span
                      id="react-select-3-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className=" css-15aq8md">
                      <div className=" css-1n0qa22">
                        <div className=" css-15bgx2d-singleValue">Global</div>
                        <div className=" css-19bb58m" data-value="">
                          <input
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-3-input"
                            spellCheck="false"
                            tabIndex={0}
                            type="text"
                            aria-autoComplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            value=""
                            className="text-inherit bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                          />
                        </div>
                      </div>
                      <div className=" css-1wy0on6">
                        <span className=" css-1hyfx7x"></span>
                        <div
                          className=" css-wnbgnj-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input name="taxClass" type="hidden" value="1" />
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Shipping Class
                  </label>
                  <div className=" css-b62m3t-container">
                    <span
                      id="react-select-4-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className=" css-15aq8md">
                      <div className=" css-1n0qa22">
                        <div className=" css-15bgx2d-singleValue">Global</div>
                        <div className=" css-19bb58m" data-value="">
                          <input
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-4-input"
                            spellCheck="false"
                            tabIndex={0}
                            type="text"
                            aria-autoComplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            value=""
                            className="text-current bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                          />
                        </div>
                      </div>
                      <div className=" css-1wy0on6">
                        <span className=" css-1hyfx7x"></span>
                        <div
                          className=" css-wnbgnj-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input name="shippingClass" type="hidden" value="1" />
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex items-center gap-x-4">
                    <div>
                      <button
                        className="bg-accent relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none "
                        dir="ltr"
                        id="headlessui-switch-:r5:"
                        role="switch"
                        type="button"
                        tabIndex={0}
                        aria-checked="true"
                        data-headlessui-state="checked"
                      >
                        <span className="sr-only">Enable </span>
                        <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-light transition-transform"></span>
                      </button>
                    </div>
                    <label className="block text-body-dark font-semibold text-sm leading-none mb-3 mb-0">
                      Enable Guest Checkout
                    </label>
                  </div>
                </div>
                <div className="flex items-center gap-x-4">
                  <div>
                    <button
                      className="bg-gray-300 relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none "
                      dir="ltr"
                      id="headlessui-switch-:r6:"
                      role="switch"
                      type="button"
                      tabIndex={0}
                      aria-checked="false"
                      data-headlessui-state=""
                    >
                      <span className="sr-only">Enable </span>
                      <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-light transition-transform"></span>
                    </button>
                  </div>
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3 mb-0">
                    Enable Free Shipping
                  </label>
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="mailchimpSubscribeText"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Subscribe Text
                  </label>
                  <input
                    id="mailchimpSubscribeText"
                    name="mailchimpSubscribeText"
                    type="text"
                    className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
              </div>
            </div>

            <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
              <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                <h4 className="text-base font-semibold text-body-dark mb-2">
                  Payment
                </h4>
                <p className="text-sm text-body">Configure Payment Option</p>
              </div>
              <div className="bg-white p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                <div className="mb-5">
                  <div className="flex items-center gap-x-4">
                    <div className="form-control w-52">
                      <label className="cursor-pointer label">
                        <input
                          type="checkbox"
                          className="toggle toggle-accent"
                        />
                        <span className="label-text">
                          Enable Cash On Delivery
                        </span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Currency
                  </label>
                  <div className=" css-b62m3t-container">
                    <span
                      id="react-select-5-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className=" css-15aq8md">
                      <div className=" css-1n0qa22">
                        <div className=" css-15bgx2d-singleValue">
                          US Dollar
                        </div>
                        <div className=" css-19bb58m" data-value="">
                          <input
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-5-input"
                            spellCheck="false"
                            tabIndex={0}
                            type="text"
                            aria-autoComplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            value=""
                            className="text-inherit bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                          />
                        </div>
                      </div>
                      <div className=" css-1wy0on6">
                        <span className=" css-1hyfx7x"></span>
                        <div
                          className=" css-wnbgnj-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input name="currency" type="hidden" value="USD" />
                  </div>
                  <p className="my-2 text-xs text-start text-red-500"></p>
                </div>
                <div className="flex items-center gap-x-4">
                  <div>
                    <button
                      className="bg-accent relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none "
                      dir="ltr"
                      id="headlessui-switch-:r8:"
                      role="switch"
                      type="button"
                      tabIndex={0}
                      aria-checked="true"
                      data-headlessui-state="checked"
                    >
                      <span className="sr-only">Enable </span>
                      <span className="translate-x-6 inline-block h-4 w-4 transform rounded-full bg-light transition-transform"></span>
                    </button>
                  </div>
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3 mb-0">
                    Enable Gateway
                  </label>
                </div>
                <div className="mb-5 mt-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Select Payment Gateway
                  </label>
                  <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4 3xl:grid-cols-5">
                    <label
                      aria-label="stripe"
                      className="pointer-events-none cursor-not-allowed opacity-60"
                    >
                      <input
                        type="checkbox"
                        className="peer invisible absolute -z-[1] opacity-0"
                        name="stripe"
                        value="stripe"
                        checked
                      />
                      <span className="relative block w-full overflow-hidden rounded-md bg-gray-100 pb-[52%] peer-checked:border-2 peer-checked:border-accent peer-checked:shadow-md">
                        <span className="absolute flex h-full w-full items-center justify-center p-6 md:p-9">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="58"
                            height="24"
                            viewBox="0 0 58 24"
                            fill="none"
                          >
                            <path
                              d="M4.03506 9.36297C4.03506 8.74103 4.54542 8.50172 5.39085 8.50172C6.60287 8.50172 8.13393 8.86865 9.34607 9.52254V5.77445C8.02235 5.24817 6.71456 5.04082 5.39085 5.04082C2.15311 5.04082 0 6.73146 0 9.55451C0 13.9563 6.06056 13.2546 6.06056 15.1526C6.06056 15.8861 5.4227 16.1254 4.52949 16.1254C3.20578 16.1254 1.51514 15.5831 0.175389 14.8495V18.6453C1.65868 19.2833 3.15789 19.5544 4.52949 19.5544C7.84685 19.5544 10.1276 17.9117 10.1276 15.0568C10.1117 10.3041 4.03506 11.1493 4.03506 9.36297ZM14.8165 1.85108L10.925 2.68036L10.9091 15.4555C10.9091 17.8161 12.6795 19.5544 15.0399 19.5544C16.3477 19.5544 17.3046 19.3152 17.8309 19.0281V15.7905C17.3206 15.9978 14.8006 16.7314 14.8006 14.371V8.70907H17.8309V5.31198H14.8006L14.8165 1.85108ZM22.7911 6.49215L22.5359 5.31198H19.0909V19.2673H23.0782V9.80963C24.0191 8.58157 25.614 8.80484 26.1085 8.98023V5.31198C25.5981 5.12056 23.7321 4.76967 22.7911 6.49215ZM27.0813 5.31198H31.0845V19.2673H27.0813V5.31198ZM27.0813 4.09985L31.0845 3.2386V0.000976562L27.0813 0.846297V4.09985ZM39.4099 5.04082C37.8469 5.04082 36.8421 5.77445 36.2839 6.28492L36.0765 5.29606H32.5678V23.8924L36.555 23.0472L36.571 18.5336C37.1452 18.9483 37.9904 19.5384 39.394 19.5384C42.2488 19.5384 44.8485 17.2418 44.8485 12.186C44.8326 7.56075 42.201 5.04082 39.4099 5.04082ZM38.453 16.0296C37.512 16.0296 36.9536 15.6948 36.571 15.2801L36.555 9.36297C36.9697 8.9005 37.5438 8.58157 38.453 8.58157C39.9043 8.58157 40.9091 10.2083 40.9091 12.2976C40.9091 14.4348 39.9202 16.0296 38.453 16.0296ZM57.4163 12.3455C57.4163 8.26253 55.4385 5.04082 51.6587 5.04082C47.8627 5.04082 45.5661 8.26264 45.5661 12.3136C45.5661 17.1142 48.2775 19.5384 52.169 19.5384C54.0669 19.5384 55.5024 19.1078 56.5869 18.5018V15.3119C55.5025 15.8543 54.2584 16.1892 52.6794 16.1892C51.1323 16.1892 49.7607 15.6469 49.5853 13.765H57.3844C57.3844 13.5575 57.4163 12.7282 57.4163 12.3455ZM49.5375 10.8303C49.5375 9.02811 50.638 8.27845 51.6428 8.27845C52.6156 8.27845 53.6524 9.02811 53.6524 10.8303H49.5375Z"
                              fill="#6772E5"
                            ></path>
                          </svg>
                        </span>
                        <span className="absolute -top-7 -right-7 flex h-14 w-14 rotate-45 items-end justify-center bg-accent p-2 text-white">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 25.056 24"
                            className="h-auto w-2.5"
                          >
                            <g data-name="Group 36413" fill="currentColor">
                              <path
                                id="Path_22667"
                                data-name="Path 22667"
                                d="M19.474,34.679l-6.946-4.346L5.583,34.679a.734.734,0,0,1-1.1-.8L6.469,25.93.263,20.668a.735.735,0,0,1,.421-1.3l8.1-.566,3.064-7.6a.765.765,0,0,1,1.362,0l3.064,7.6,8.1.566a.735.735,0,0,1,.421,1.3L18.588,25.93l1.987,7.949a.734.734,0,0,1-1.1.8Z"
                                transform="translate(0 -10.792)"
                              ></path>
                            </g>
                          </svg>
                        </span>
                      </span>
                    </label>
                    <label aria-label="paypal" className="cursor-pointer">
                      <input
                        type="checkbox"
                        className="peer invisible absolute -z-[1] opacity-0"
                        name="paypal"
                        value="paypal"
                      />
                      <span className="relative block w-full overflow-hidden rounded-md bg-gray-100 pb-[52%] peer-checked:border-2 peer-checked:border-accent peer-checked:shadow-md">
                        <span className="absolute flex h-full w-full items-center justify-center p-6 md:p-9">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="91"
                            height="24"
                            viewBox="0 0 91 24"
                            fill="none"
                          >
                            <path
                              d="M33.7439 5.91309H28.7528C28.5876 5.91298 28.4277 5.97189 28.3021 6.0792C28.1765 6.18651 28.0933 6.33517 28.0675 6.49838L26.0489 19.2967C26.0397 19.3561 26.0434 19.4168 26.0598 19.4747C26.0762 19.5325 26.105 19.586 26.1441 19.6317C26.1832 19.6773 26.2318 19.7139 26.2864 19.739C26.341 19.7641 26.4004 19.777 26.4605 19.7769H28.8433C29.0086 19.777 29.1686 19.718 29.2942 19.6106C29.4199 19.5031 29.503 19.3543 29.5286 19.1909L30.073 15.739C30.0986 15.5758 30.1816 15.4271 30.3071 15.3196C30.4326 15.2122 30.5923 15.1531 30.7576 15.153H32.3376C35.6253 15.153 37.5227 13.562 38.0183 10.4093C38.2416 9.03003 38.0277 7.94629 37.3819 7.1873C36.6725 6.35388 35.4144 5.91309 33.7439 5.91309ZM34.3197 10.5874C34.0467 12.3783 32.6784 12.3783 31.3553 12.3783H30.6021L31.1305 9.03368C31.1459 8.93583 31.1958 8.84671 31.2711 8.78236C31.3465 8.71801 31.4423 8.68265 31.5413 8.68265H31.8865C32.7878 8.68265 33.638 8.68265 34.0774 9.19642C34.3394 9.50293 34.4197 9.95832 34.3197 10.5874ZM48.663 10.5298H46.2729C46.1739 10.5298 46.0781 10.5651 46.0027 10.6295C45.9274 10.6938 45.8775 10.7829 45.8621 10.8808L45.7562 11.5493L45.5891 11.307C45.0717 10.556 43.9179 10.305 42.7663 10.305C40.1252 10.305 37.8694 12.3053 37.43 15.1114C37.2016 16.5111 37.5264 17.8496 38.3204 18.783C39.0487 19.6412 40.0909 19.9988 41.3308 19.9988C43.4589 19.9988 44.6389 18.6304 44.6389 18.6304L44.5324 19.2946C44.5229 19.3539 44.5264 19.4147 44.5426 19.4726C44.5589 19.5305 44.5874 19.5841 44.6264 19.6299C44.6654 19.6757 44.7139 19.7125 44.7684 19.7378C44.823 19.763 44.8824 19.7761 44.9425 19.7762H47.0954C47.2607 19.7763 47.4207 19.7173 47.5463 19.6098C47.672 19.5024 47.7551 19.3535 47.7807 19.1902L49.0724 11.01C49.0819 10.9507 49.0785 10.8901 49.0623 10.8323C49.0461 10.7746 49.0175 10.721 48.9786 10.6753C48.9396 10.6297 48.8913 10.593 48.8368 10.5679C48.7823 10.5427 48.723 10.5297 48.663 10.5298ZM45.3315 15.1814C45.1009 16.5469 44.0171 17.4635 42.6349 17.4635C41.9409 17.4635 41.3862 17.2409 41.0301 16.8191C40.6769 16.4002 40.5426 15.804 40.655 15.1399C40.8703 13.7861 41.9723 12.8395 43.3333 12.8395C44.012 12.8395 44.5638 13.0651 44.9272 13.4905C45.2914 13.9204 45.4359 14.5203 45.3315 15.1814ZM61.392 10.5298H58.9903C58.877 10.5299 58.7655 10.5577 58.6654 10.6108C58.5653 10.6638 58.4797 10.7405 58.4159 10.8341L55.1034 15.7135L53.6993 11.0246C53.6562 10.8815 53.5682 10.7562 53.4483 10.6671C53.3285 10.578 53.1831 10.5298 53.0337 10.5298H50.6736C50.6073 10.5296 50.542 10.5452 50.483 10.5754C50.424 10.6056 50.3731 10.6494 50.3345 10.7032C50.2959 10.7571 50.2707 10.8193 50.261 10.8849C50.2513 10.9504 50.2574 11.0173 50.2788 11.08L52.9243 18.8435L50.4371 22.3546C50.3929 22.4168 50.3667 22.49 50.3614 22.5662C50.356 22.6424 50.3717 22.7185 50.4067 22.7864C50.4418 22.8542 50.4948 22.9111 50.56 22.9507C50.6253 22.9904 50.7001 23.0114 50.7765 23.0114H53.1753C53.2873 23.0115 53.3977 22.9845 53.4969 22.9327C53.5962 22.8808 53.6814 22.8057 53.7453 22.7136L61.7336 11.1829C61.7769 11.1205 61.8023 11.0475 61.807 10.9717C61.8118 10.8959 61.7957 10.8203 61.7605 10.753C61.7253 10.6857 61.6723 10.6293 61.6074 10.59C61.5425 10.5506 61.468 10.5298 61.392 10.5298Z"
                              fill="#253B80"
                            ></path>
                            <path
                              d="M69.3436 5.91382H64.3518C64.1867 5.91389 64.027 5.97287 63.9016 6.08017C63.7761 6.18746 63.693 6.33602 63.6673 6.49911L61.6487 19.2975C61.6393 19.3568 61.6429 19.4174 61.6591 19.4752C61.6754 19.5329 61.7041 19.5865 61.7431 19.6321C61.782 19.6778 61.8304 19.7144 61.885 19.7395C61.9395 19.7647 61.9988 19.7777 62.0588 19.7777H64.6204C64.7359 19.7775 64.8477 19.7361 64.9354 19.6609C65.0232 19.5857 65.0812 19.4817 65.0991 19.3675L65.672 15.7397C65.6976 15.5765 65.7806 15.4278 65.9061 15.3203C66.0316 15.2129 66.1913 15.1538 66.3566 15.1537H67.9358C71.2243 15.1537 73.121 13.5628 73.6173 10.4101C73.8413 9.03076 73.626 7.94702 72.9802 7.18803C72.2715 6.35461 71.0141 5.91382 69.3436 5.91382ZM69.9194 10.5881C69.6472 12.379 68.2788 12.379 66.955 12.379H66.2026L66.7317 9.03441C66.7468 8.93655 66.7965 8.84736 66.8718 8.78297C66.947 8.71858 67.0428 8.68325 67.1418 8.68338H67.487C68.3876 8.68338 69.2385 8.68338 69.6778 9.19715C69.9398 9.50366 70.0194 9.95905 69.9194 10.5881ZM84.262 10.5305H81.8734C81.7743 10.5302 81.6785 10.5655 81.6032 10.6299C81.5279 10.6943 81.4783 10.7836 81.4633 10.8815L81.3574 11.55L81.1896 11.3077C80.6722 10.5568 79.5191 10.3057 78.3675 10.3057C75.7264 10.3057 73.4713 12.3061 73.032 15.1121C72.8043 16.5119 73.1276 17.8503 73.9216 18.7837C74.6514 19.6419 75.6921 19.9995 76.932 19.9995C79.0601 19.9995 80.2401 18.6312 80.2401 18.6312L80.1336 19.2953C80.1241 19.3548 80.1276 19.4156 80.1439 19.4736C80.1602 19.5316 80.189 19.5854 80.2281 19.6312C80.2672 19.677 80.3159 19.7138 80.3706 19.7389C80.4254 19.7641 80.4849 19.7771 80.5452 19.777H82.6973C82.8625 19.7769 83.0223 19.7178 83.1478 19.6103C83.2733 19.5029 83.3563 19.3541 83.3819 19.1909L84.6743 11.0107C84.6835 10.9513 84.6797 10.8905 84.6632 10.8327C84.6467 10.7749 84.6178 10.7213 84.5786 10.6757C84.5395 10.6301 84.4909 10.5935 84.4362 10.5684C84.3816 10.5434 84.3221 10.5304 84.262 10.5305ZM80.9305 15.1822C80.7014 16.5476 79.6162 17.4642 78.2339 17.4642C77.5414 17.4642 76.9853 17.2417 76.6291 16.8198C76.2759 16.4009 76.1431 15.8047 76.254 15.1406C76.4707 13.7868 77.5713 12.8403 78.9323 12.8403C79.611 12.8403 80.1628 13.0658 80.5262 13.4912C80.8918 13.9211 81.0363 14.521 80.9305 15.1822ZM87.0797 6.26485L85.0312 19.2975C85.0218 19.3568 85.0254 19.4174 85.0417 19.4752C85.058 19.5329 85.0866 19.5865 85.1256 19.6321C85.1646 19.6778 85.213 19.7144 85.2675 19.7395C85.322 19.7647 85.3813 19.7777 85.4414 19.7777H87.5008C87.8431 19.7777 88.1336 19.5296 88.1861 19.1917L90.2062 6.39402C90.2155 6.3347 90.212 6.27405 90.1957 6.21624C90.1794 6.15843 90.1508 6.10484 90.1118 6.05914C90.0728 6.01344 90.0244 5.97673 89.9699 5.95151C89.9154 5.9263 89.8561 5.91319 89.796 5.91309H87.4899C87.3909 5.91344 87.2952 5.94903 87.2201 6.01348C87.1449 6.07794 87.0952 6.16705 87.0797 6.26485Z"
                              fill="#179BD7"
                            ></path>
                            <path
                              d="M5.32231 22.2644L5.70399 19.84L4.85378 19.8203H0.793945L3.61532 1.93094C3.62372 1.87628 3.65148 1.82646 3.69355 1.79056C3.73561 1.75465 3.78918 1.73506 3.84448 1.73535H10.6899C12.9625 1.73535 14.5308 2.20826 15.3497 3.14166C15.7335 3.57954 15.978 4.03712 16.0962 4.54068C16.2203 5.06905 16.2225 5.70032 16.1013 6.47025L16.0926 6.52644V7.01978L16.4765 7.23726C16.7695 7.38573 17.0329 7.58657 17.2537 7.82985C17.5821 8.20423 17.7945 8.68006 17.8842 9.24419C17.9769 9.82437 17.9463 10.5148 17.7945 11.2964C17.6193 12.1955 17.3361 12.9785 16.9537 13.6193C16.6163 14.1933 16.1627 14.6905 15.6219 15.0789C15.1139 15.4394 14.5104 15.7131 13.828 15.8882C13.1668 16.0604 12.413 16.1473 11.5861 16.1473H11.0534C10.6724 16.1473 10.3024 16.2845 10.012 16.5304C9.72191 16.779 9.5295 17.1224 9.46899 17.4996L9.42885 17.7178L8.75452 21.9907L8.72387 22.1476C8.71584 22.1973 8.70197 22.2221 8.68154 22.2389C8.66175 22.2551 8.63705 22.2641 8.61148 22.2644H5.32231Z"
                              fill="#253B80"
                            ></path>
                            <path
                              d="M16.8402 6.58301C16.8197 6.71364 16.7964 6.84719 16.7701 6.98439C15.8674 11.6193 12.7789 13.2205 8.83435 13.2205H6.82596C6.34357 13.2205 5.93708 13.5708 5.86191 14.0466L4.83363 20.568L4.54244 22.4166C4.53084 22.4899 4.53527 22.5649 4.55542 22.6363C4.57558 22.7078 4.61097 22.774 4.65918 22.8305C4.70738 22.8869 4.76725 22.9323 4.83466 22.9634C4.90206 22.9945 4.97541 23.0106 5.04965 23.0106H8.61176C9.03359 23.0106 9.39191 22.7041 9.45832 22.2881L9.49335 22.1072L10.164 17.851L10.2071 17.6175C10.2728 17.2 10.6318 16.8935 11.0536 16.8935H11.5864C15.0376 16.8935 17.7393 15.4923 18.5289 11.4376C18.8588 9.74374 18.688 8.3294 17.8152 7.33469C17.5385 7.02699 17.2081 6.77226 16.8402 6.58301Z"
                              fill="#179BD7"
                            ></path>
                            <path
                              d="M15.8952 6.2071C15.607 6.12372 15.3138 6.05863 15.0173 6.01225C14.4315 5.92222 13.8395 5.87903 13.2468 5.88307H7.88139C7.6772 5.88291 7.47969 5.95581 7.32456 6.08859C7.16943 6.22136 7.06692 6.40526 7.03556 6.60703L5.89417 13.8363L5.86133 14.0473C5.89689 13.8171 6.01364 13.6073 6.19047 13.4558C6.36729 13.3043 6.59251 13.221 6.82538 13.2211H8.83377C12.7783 13.2211 15.8668 11.6192 16.7695 6.98506C16.7965 6.84786 16.8192 6.71431 16.8396 6.58367C16.6014 6.45875 16.3531 6.35403 16.0974 6.27059C16.0304 6.24835 15.963 6.22718 15.8952 6.2071Z"
                              fill="#222D65"
                            ></path>
                            <path
                              d="M7.03569 6.60695C7.06678 6.40513 7.16924 6.22115 7.32444 6.08844C7.47965 5.95573 7.67731 5.88309 7.88152 5.88373H13.247C13.8826 5.88373 14.4759 5.92533 15.0174 6.0129C15.3839 6.07049 15.7452 6.15663 16.0982 6.27052C16.3646 6.35882 16.612 6.46318 16.8404 6.5836C17.109 4.87078 16.8383 3.70457 15.9122 2.64856C14.8912 1.486 13.0484 0.988281 10.6905 0.988281H3.84504C3.36337 0.988281 2.9525 1.33858 2.87806 1.81514L0.0267633 19.8884C0.0134824 19.9724 0.0185353 20.0581 0.0415745 20.1399C0.0646136 20.2217 0.105092 20.2975 0.160226 20.3621C0.215359 20.4268 0.283839 20.4787 0.360955 20.5143C0.438071 20.55 0.521993 20.5685 0.606948 20.5686H4.83318L5.89429 13.8363L7.03569 6.60695Z"
                              fill="#253B80"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </label>
                    <label aria-label="razorpay" className="cursor-pointer">
                      <input
                        type="checkbox"
                        className="peer invisible absolute -z-[1] opacity-0"
                        name="razorpay"
                        value="razorpay"
                      />
                      <span className="relative block w-full overflow-hidden rounded-md bg-gray-100 pb-[52%] peer-checked:border-2 peer-checked:border-accent peer-checked:shadow-md">
                        <span className="absolute flex h-full w-full items-center justify-center p-6 md:p-9">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="114"
                            height="24"
                            viewBox="0 0 114 24"
                            fill="none"
                          >
                            <path
                              d="M7.27893 6.32871L6.33789 9.79232L11.7242 6.30899L8.20144 19.4524L11.7792 19.4554L16.9832 0.0419922"
                              fill="#3395FF"
                            ></path>
                            <path
                              d="M1.48176 13.9301L0 19.4557H7.33291L10.3335 8.21521L1.48176 13.9301ZM26.9537 9.06542C26.7744 9.73162 26.4291 10.221 25.914 10.5334C25.4002 10.8453 24.679 11.0019 23.7482 11.0019H20.7906L21.8291 7.13018H24.7866C25.7163 7.13018 26.355 7.28552 26.7015 7.60219C27.0481 7.91885 27.1317 8.40282 26.9537 9.072M30.0158 8.98835C30.3922 7.59024 30.2368 6.51477 29.5485 5.76194C28.8614 5.01509 27.6557 4.63867 25.935 4.63867H19.3346L15.3613 19.4622H18.568L20.1692 13.4874H22.2724C22.7444 13.4874 23.116 13.5651 23.3873 13.7144C23.6591 13.8698 23.8187 14.1387 23.8677 14.527L24.4401 19.4622H27.8756L27.3187 14.8616C27.2052 13.8339 26.735 13.2305 25.9087 13.0512C26.962 12.7465 27.8445 12.2387 28.5555 11.5336C29.2616 10.8338 29.766 9.95658 30.0158 8.99432M37.8105 14.1566C37.5417 15.1604 37.1294 15.9192 36.572 16.4509C36.0139 16.9827 35.3471 17.2456 34.5692 17.2456C33.7769 17.2456 33.2398 16.9887 32.956 16.4688C32.6716 15.949 32.662 15.1962 32.9261 14.2104C33.1902 13.2245 33.6114 12.4538 34.191 11.8981C34.7705 11.3424 35.4481 11.0646 36.226 11.0646C37.0027 11.0646 37.5345 11.3335 37.8034 11.867C38.0782 12.403 38.0842 13.1695 37.8153 14.1673L37.8105 14.1566ZM39.2158 8.91068L38.8143 10.4104C38.641 9.87262 38.3047 9.44244 37.8075 9.1198C37.3092 8.80313 36.6926 8.64181 35.9571 8.64181C35.0549 8.64181 34.1886 8.87483 33.3581 9.34087C32.5276 9.8069 31.7987 10.4641 31.1773 11.3126C30.5559 12.161 30.1018 13.1229 29.809 14.2044C29.5222 15.2918 29.4625 16.2418 29.6358 17.0663C29.815 17.8968 30.1914 18.5302 30.771 18.9723C31.3565 19.4204 32.1034 19.6415 33.0175 19.6415C33.7439 19.6452 34.4621 19.488 35.1207 19.1814C35.7717 18.8877 36.3508 18.4555 36.8175 17.9147L36.3993 19.4778H39.5002L42.3317 8.91605H39.2248L39.2158 8.91068ZM53.4748 8.91068H44.4569L43.8266 11.2648H49.0737L42.1369 17.2575L41.5442 19.4682H50.853L51.4833 17.1141H45.861L52.9042 11.0317M61.4123 14.1387C61.1333 15.1783 60.7192 15.9598 60.1725 16.4688C59.6258 16.9827 58.9638 17.2396 58.1865 17.2396C56.5614 17.2396 56.0272 16.2059 56.5817 14.1387C56.8565 13.111 57.2724 12.3384 57.828 11.818C58.3837 11.2958 59.057 11.0353 59.8487 11.0353C60.6254 11.0353 61.15 11.294 61.4201 11.815C61.6901 12.3349 61.6878 13.1098 61.4123 14.1375M63.2275 9.308C62.5135 8.86348 61.6023 8.64121 60.491 8.64121C59.3659 8.64121 58.3245 8.86228 57.3662 9.30442C56.4118 9.74379 55.573 10.3997 54.9165 11.2199C54.2413 12.0505 53.7556 13.0243 53.4574 14.1357C53.1647 15.2428 53.1288 16.2149 53.3559 17.0472C53.5829 17.8777 54.0609 18.517 54.7779 18.9592C55.5008 19.4049 56.4209 19.6265 57.5502 19.6265C58.6615 19.6265 59.6952 19.4031 60.6452 18.9586C61.5951 18.5116 62.4077 17.8771 63.0829 17.0406C63.758 16.2077 64.242 15.2362 64.5407 14.1249C64.8395 13.0136 64.8753 12.0433 64.6483 11.2092C64.4212 10.3787 63.9492 9.73939 63.2382 9.29426M74.2976 11.732L75.0923 8.8581C74.8234 8.72068 74.4709 8.64898 74.0288 8.64898C73.3178 8.64898 72.6366 8.82464 71.9794 9.18074C71.4142 9.48307 70.9338 9.90967 70.5275 10.4438L70.9398 8.89634L70.0394 8.89992H67.8287L64.9787 19.4575H68.1232L69.602 13.9385C69.8171 13.1361 70.2043 12.5045 70.7629 12.0564C71.3186 11.6065 72.0117 11.3813 72.8482 11.3813C73.362 11.3813 73.84 11.499 74.2941 11.7338M83.0472 14.1894C82.7783 15.1753 82.372 15.9281 81.8164 16.4479C81.2607 16.9701 80.5915 17.2306 79.8148 17.2306C79.0381 17.2306 78.5063 16.9677 78.2255 16.442C77.9387 15.9132 77.9327 15.1514 78.2016 14.15C78.4705 13.1492 78.8827 12.3815 79.4503 11.8497C80.018 11.3138 80.6871 11.0461 81.4639 11.0461C82.2286 11.0461 82.7425 11.3209 83.0173 11.8766C83.2922 12.4322 83.2981 13.203 83.034 14.1888M85.2328 9.32533C84.6502 8.85929 83.9064 8.62627 83.0042 8.62627C82.2137 8.62627 81.4603 8.80552 80.7457 9.16759C80.0317 9.52907 79.4521 10.022 79.007 10.6458L79.0178 10.5741L79.5453 8.89514H76.4743L75.6916 11.8168L75.6677 11.9184L72.4413 23.9541H75.59L77.2152 17.8956C77.3765 18.4346 77.7051 18.8576 78.207 19.1635C78.7089 19.4682 79.3284 19.6194 80.0651 19.6194C80.9793 19.6194 81.8516 19.3983 82.6791 18.9562C83.5096 18.5128 84.2266 17.8747 84.8361 17.0502C85.4455 16.2257 85.8978 15.2697 86.1864 14.1882C86.4791 13.105 86.5389 12.1389 86.3716 11.2934C86.2013 10.4468 85.8243 9.79137 85.2423 9.32772M95.6774 14.1464C95.4085 15.1442 94.9963 15.909 94.4406 16.4348C93.8849 16.9642 93.2158 17.2276 92.439 17.2276C91.6444 17.2276 91.1066 16.9707 90.8258 16.4509C90.539 15.9311 90.5331 15.1783 90.7959 14.1924C91.0588 13.2066 91.4783 12.4358 92.0578 11.8802C92.6374 11.3245 93.3155 11.0473 94.0935 11.0473C94.8702 11.0473 95.396 11.3161 95.6708 11.8479C95.9457 12.3815 95.9474 13.148 95.6798 14.1482L95.6774 14.1464ZM97.0815 8.89753L96.6794 10.3972C96.5061 9.85649 96.1715 9.42631 95.6756 9.10665C95.1737 8.7876 94.5583 8.62866 93.8234 8.62866C92.9212 8.62866 92.0501 8.86168 91.2184 9.32772C90.3879 9.79376 89.6589 10.4474 89.0376 11.2934C88.4162 12.1395 87.9621 13.1038 87.6693 14.1853C87.3795 15.2709 87.3228 16.2227 87.496 17.0508C87.6711 17.8753 88.0481 18.5122 88.6313 18.9568C89.2132 19.3989 89.9637 19.6224 90.8778 19.6224C91.6127 19.6224 92.3148 19.4694 92.9809 19.1623C93.6305 18.8673 94.2081 18.4344 94.6736 17.8938L94.2554 19.458H97.3563L100.187 8.90052H97.0863L97.0815 8.89753ZM113.206 8.90112L113.208 8.89813H111.302C111.241 8.89813 111.187 8.90112 111.131 8.90231H110.142L109.635 9.60734L109.509 9.77464L109.455 9.85829L105.437 15.4555L104.607 8.90112H101.316L102.983 18.8612L99.3023 23.9577H102.582L103.473 22.6952C103.498 22.6582 103.521 22.6271 103.55 22.5877L104.59 21.1119L104.62 21.0701L109.276 14.4679L113.202 8.91127L113.208 8.90769H113.206V8.90112Z"
                              fill="#072654"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </label>
                    <label aria-label="mollie" className="cursor-pointer">
                      <input
                        type="checkbox"
                        className="peer invisible absolute -z-[1] opacity-0"
                        name="mollie"
                        value="mollie"
                      />
                      <span className="relative block w-full overflow-hidden rounded-md bg-gray-100 pb-[52%] peer-checked:border-2 peer-checked:border-accent peer-checked:shadow-md">
                        <span className="absolute flex h-full w-full items-center justify-center p-6 md:p-9">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="82"
                            height="24"
                            viewBox="0 0 82 24"
                            fill="none"
                          >
                            <path
                              d="M34.3586 7.83789C29.8972 7.83789 26.2773 11.4675 26.2773 15.9191C26.2773 20.3708 29.9069 24.0004 34.3586 24.0004C38.8102 24.0004 42.4398 20.3708 42.4398 15.9191C42.4398 11.4675 38.82 7.83789 34.3586 7.83789ZM34.3586 20.1758C32.0158 20.1758 30.1084 18.2684 30.1084 15.9256C30.1084 13.5828 32.0158 11.6754 34.3586 11.6754C36.7014 11.6754 38.6088 13.5828 38.6088 15.9256C38.6088 18.2684 36.7014 20.1758 34.3586 20.1758Z"
                              fill="black"
                            ></path>
                            <path
                              d="M61.2413 5.03981C62.632 5.03981 63.7628 3.91227 63.7628 2.51828C63.7628 1.12429 62.632 0 61.2413 0C59.8505 0 58.7197 1.12754 58.7197 2.52153C58.7197 3.91552 59.8505 5.03981 61.2413 5.03981Z"
                              fill="black"
                            ></path>
                            <path
                              d="M17.8587 7.84435C17.6474 7.82811 17.446 7.81836 17.238 7.81836C15.2884 7.81836 13.4395 8.61771 12.1137 10.0279C10.788 8.62421 8.94557 7.81836 7.01543 7.81836C3.14866 7.82161 0 10.9605 0 14.8273V23.6721H3.77904V14.9345C3.77904 13.3293 5.09829 11.8509 6.6515 11.6916C6.76198 11.6819 6.86921 11.6754 6.96994 11.6754C8.71812 11.6754 10.1446 13.1019 10.1543 14.85V23.6689H14.0179V14.9183C14.0179 13.3228 15.3274 11.8444 16.8903 11.6851C17.0008 11.6754 17.108 11.6689 17.2088 11.6689C18.9569 11.6689 20.3932 13.0889 20.3997 14.8273V23.6721H24.2632V14.9345C24.2632 13.1636 23.6068 11.4544 22.424 10.1384C21.2445 8.81267 19.6231 7.99708 17.8587 7.84435Z"
                              fill="black"
                            ></path>
                            <path
                              d="M48.387 0.376953H44.5234V23.6881H48.387V0.376953ZM55.7826 0.376953H51.9191V23.6881H55.7826V0.376953ZM63.1749 8.22423H59.3114V23.6816H63.1749V8.22423Z"
                              fill="black"
                            ></path>
                            <path
                              d="M81.2351 15.5581C81.2351 13.5077 80.4358 11.5776 78.9931 10.1056C77.5406 8.63689 75.6234 7.82129 73.5828 7.82129H73.4821C71.3667 7.84728 69.3651 8.68563 67.8704 10.1901C66.3757 11.6946 65.5341 13.6832 65.5113 15.8083C65.4853 17.9756 66.3172 20.026 67.8541 21.5792C69.3911 23.1324 71.4252 23.9903 73.5926 23.9903H73.6023C76.4423 23.9903 79.1035 22.4695 80.5593 20.026L80.7445 19.7141L77.5536 18.1446L77.3944 18.4046C76.5885 19.7238 75.2043 20.5037 73.6673 20.5037C71.7014 20.5037 70.0052 19.1942 69.4821 17.329H81.2351V15.5581ZM73.4301 11.3306C75.1945 11.3306 76.7737 12.4907 77.3294 14.1349H69.5406C70.0865 12.4907 71.6657 11.3306 73.4301 11.3306Z"
                              fill="black"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </label>
                    <label aria-label="paystack" className="cursor-pointer">
                      <input
                        type="checkbox"
                        className="peer invisible absolute -z-[1] opacity-0"
                        name="paystack"
                        value="paystack"
                      />
                      <span className="relative block w-full overflow-hidden rounded-md bg-gray-100 pb-[52%] peer-checked:border-2 peer-checked:border-accent peer-checked:shadow-md">
                        <span className="absolute flex h-full w-full items-center justify-center p-6 md:p-9">
                          <svg
                            width="90"
                            height="24"
                            viewBox="0 0 153 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <g clip-path="url(#clip0_907_69)">
                              <path
                                d="M28.462 2.29h-18.05c-.607 0-1.123.516-1.123 1.145v2.043c0 .629.516 1.145 1.123 1.145h18.05c.629 0 1.123-.516 1.145-1.145v-2.02c0-.652-.516-1.168-1.145-1.168zm0 11.338h-18.05c-.292 0-.584.112-.786.336a1.102 1.102 0 00-.337.809v2.043c0 .628.516 1.145 1.123 1.145h18.05c.629 0 1.123-.494 1.145-1.145v-2.043c-.022-.651-.516-1.145-1.145-1.145zm-7.88 5.657h-10.17c-.292 0-.584.113-.786.337-.202.225-.337.494-.337.808v2.043c0 .629.516 1.145 1.123 1.145h10.147c.629 0 1.123-.516 1.123-1.122v-2.043c.022-.674-.471-1.19-1.1-1.168zm9.025-11.337H10.412c-.292 0-.584.112-.786.336-.202.225-.337.494-.337.809v2.043c0 .628.516 1.145 1.123 1.145h19.173a1.13 1.13 0 001.122-1.145V9.093c.023-.629-.494-1.123-1.1-1.145z"
                                fill="#00C3F7"
                              ></path>
                              <path
                                d="M50.599 6.87a5.857 5.857 0 00-1.954-1.347 5.944 5.944 0 00-2.335-.472 4.983 4.983 0 00-2.267.494 4.228 4.228 0 00-1.257.92v-.358c0-.18-.068-.36-.18-.494a.643.643 0 00-.494-.225H39.62c-.18 0-.359.068-.471.225a.595.595 0 00-.18.494V22.9c0 .18.067.36.18.494a.646.646 0 00.471.202h2.56c.18 0 .336-.067.471-.202a.562.562 0 00.202-.494v-5.747c.36.404.83.696 1.347.875a6.03 6.03 0 004.445-.09 5.95 5.95 0 001.976-1.347 6.517 6.517 0 001.347-2.11c.36-.876.516-1.819.494-2.762a7.44 7.44 0 00-.494-2.784c-.337-.74-.786-1.459-1.37-2.065zm-2.29 6.084c-.135.36-.337.674-.606.966a2.751 2.751 0 01-2.021.875c-.382 0-.763-.067-1.123-.247a3.194 3.194 0 01-.92-.628 2.708 2.708 0 01-.606-.966 3.283 3.283 0 010-2.357c.134-.36.359-.674.606-.943.27-.27.584-.494.92-.651a2.81 2.81 0 011.123-.247c.404 0 .763.067 1.145.247.337.157.651.359.898.628.27.27.449.584.606.943.27.786.247 1.617-.022 2.38zm17.87-7.543h-2.536c-.18 0-.36.067-.472.202a.71.71 0 00-.202.516v.314a3.323 3.323 0 00-1.145-.875 5.097 5.097 0 00-2.222-.494 6.207 6.207 0 00-4.356 1.796 6.283 6.283 0 00-1.392 2.11 6.896 6.896 0 00-.516 2.784 7.04 7.04 0 00.516 2.784c.337.786.786 1.504 1.392 2.11a6.083 6.083 0 004.333 1.82 4.8 4.8 0 002.223-.495c.426-.224.853-.516 1.167-.875v.336c0 .18.067.36.202.494.135.113.292.202.472.202h2.537c.18 0 .359-.067.471-.202a.697.697 0 00.202-.494V6.152c0-.18-.067-.36-.18-.494a.662.662 0 00-.493-.247zm-3.434 7.543c-.135.36-.337.674-.607.966-.269.269-.56.494-.898.65a2.67 2.67 0 01-2.267 0 3.27 3.27 0 01-.92-.65 2.706 2.706 0 01-.607-.966 3.54 3.54 0 010-2.357c.135-.36.337-.651.606-.943.27-.27.562-.494.92-.651a2.62 2.62 0 012.246 0c.337.157.651.359.898.628.247.27.449.584.606.943a3.23 3.23 0 01.023 2.38zm28.714-1.527a4.372 4.372 0 00-1.234-.763c-.472-.202-.988-.337-1.482-.449l-1.931-.382c-.494-.09-.853-.224-1.033-.381a.617.617 0 01-.27-.494c0-.202.113-.382.36-.539.337-.18.696-.27 1.078-.247.494 0 .987.112 1.436.292.45.202.876.404 1.28.674.562.359 1.055.291 1.392-.113l.92-1.055c.18-.18.27-.404.293-.651a1.005 1.005 0 00-.36-.674c-.381-.336-1.01-.696-1.84-1.055-.831-.359-1.887-.539-3.121-.539a6.743 6.743 0 00-2.223.315 6.144 6.144 0 00-1.706.875 3.785 3.785 0 00-1.482 2.986c0 1.056.314 1.909.943 2.537.629.629 1.46 1.056 2.492 1.258l2.02.448c.427.068.876.203 1.28.405.225.09.36.314.36.56 0 .225-.113.428-.36.607-.247.18-.65.292-1.19.292-.538 0-1.1-.112-1.594-.36a6.2 6.2 0 01-1.302-.852 2.479 2.479 0 00-.584-.337c-.224-.068-.516 0-.808.247l-1.1.83c-.314.225-.471.607-.382.966.068.381.36.74.921 1.167a8.081 8.081 0 004.737 1.392c.786 0 1.572-.09 2.313-.314a5.865 5.865 0 001.796-.898c.493-.36.898-.83 1.167-1.392.27-.539.404-1.123.404-1.729a3.46 3.46 0 00-.314-1.571 4.76 4.76 0 00-.876-1.056zm11.091 3.076a.783.783 0 00-.561-.381c-.225 0-.472.067-.651.202a2.168 2.168 0 01-1.033.336c-.112 0-.247-.022-.36-.044a.618.618 0 01-.336-.18 1.476 1.476 0 01-.27-.382 1.424 1.424 0 01-.112-.673V8.778h3.278c.202 0 .382-.09.516-.224a.68.68 0 00.225-.494V6.107c0-.202-.067-.382-.225-.494a.694.694 0 00-.493-.202h-3.3V2.268c0-.18-.068-.382-.203-.494a.893.893 0 00-.471-.202h-2.56c-.18 0-.359.067-.494.202a.721.721 0 00-.224.494V5.41h-1.46c-.179 0-.359.067-.493.224a.784.784 0 00-.18.494v1.953c0 .18.067.36.18.494.112.157.292.225.494.225h1.459v5.478a4.178 4.178 0 00.382 1.886c.246.494.56.92.987 1.28.404.336.876.583 1.392.718a5.495 5.495 0 001.594.247 6.66 6.66 0 002.088-.337 3.923 3.923 0 001.639-1.033c.292-.292.315-.763.09-1.1l-.898-1.437zm13.875-9.092h-2.537a.647.647 0 00-.472.202.714.714 0 00-.202.516v.314a3.125 3.125 0 00-1.145-.875 5.096 5.096 0 00-2.222-.494 6.21 6.21 0 00-4.356 1.796 6.282 6.282 0 00-1.392 2.11 6.855 6.855 0 00-.516 2.762 7.034 7.034 0 00.516 2.784c.314.786.808 1.504 1.392 2.11a6.044 6.044 0 004.333 1.819c.763.022 1.527-.157 2.223-.472a3.793 3.793 0 001.167-.875v.336c0 .18.068.36.202.472a.647.647 0 00.472.202h2.537a.662.662 0 00.673-.674V6.152c0-.18-.067-.36-.179-.494a.597.597 0 00-.494-.247zm-3.413 7.543c-.135.36-.337.674-.606.966-.269.269-.561.494-.898.65a2.834 2.834 0 01-1.145.248c-.404 0-.763-.09-1.123-.247a3.272 3.272 0 01-.92-.651 2.37 2.37 0 01-.584-.966 3.544 3.544 0 010-2.357c.135-.36.337-.674.584-.943.269-.27.584-.494.92-.651.36-.157.741-.247 1.123-.247s.763.067 1.145.247c.337.157.629.359.898.628.269.27.471.584.606.943a3.342 3.342 0 010 2.38zm17.332 1.37l-1.459-1.123c-.27-.224-.539-.292-.763-.202-.202.09-.382.225-.539.382a5.906 5.906 0 01-1.1 1.01c-.449.247-.921.382-1.415.337a2.685 2.685 0 01-1.594-.494c-.471-.337-.83-.786-1.01-1.347a3.414 3.414 0 01-.202-1.145c0-.404.067-.786.202-1.19a2.56 2.56 0 01.584-.943c.269-.27.561-.494.898-.629a2.834 2.834 0 011.145-.247c.494-.022.988.113 1.414.36.427.269.786.606 1.1 1.01.135.157.315.292.517.382.224.09.493.022.763-.202l1.459-1.1a.928.928 0 00.382-.495.72.72 0 00-.067-.673 6.332 6.332 0 00-2.246-2.11c-.965-.54-2.11-.831-3.39-.831-.898 0-1.796.18-2.649.516a6.558 6.558 0 00-2.133 1.415 6.624 6.624 0 00-1.437 2.133 6.87 6.87 0 000 5.253c.337.786.809 1.527 1.437 2.11 1.28 1.258 2.986 1.931 4.782 1.931 1.28 0 2.425-.292 3.39-.83a6.257 6.257 0 002.268-2.133.83.83 0 00.067-.651 1.39 1.39 0 00-.404-.494zm13.516 2.626l-4.019-5.882 3.435-4.535a.803.803 0 00.135-.74c-.068-.18-.225-.36-.651-.36h-2.717c-.157 0-.314.045-.449.112a.95.95 0 00-.404.382l-2.739 3.84h-.651V.695a.7.7 0 00-.202-.494.647.647 0 00-.472-.202h-2.537a.698.698 0 00-.494.202.663.663 0 00-.202.494v16.726c0 .202.068.36.202.494a.698.698 0 00.494.202h2.537c.18 0 .359-.067.472-.202a.7.7 0 00.202-.494v-4.423h.718l2.986 4.58c.18.337.517.539.876.539h2.851c.427 0 .606-.202.696-.382a.813.813 0 00-.067-.786zM80.593 5.41h-2.851a.795.795 0 00-.584.225 1 1 0 00-.27.472l-2.11 7.813h-.516l-2.245-7.813a1.505 1.505 0 00-.225-.472.671.671 0 00-.516-.247H68.38c-.382 0-.606.112-.719.382a1.225 1.225 0 000 .696l3.593 11c.067.158.134.338.269.45a.765.765 0 00.539.202h1.526l-.134.36-.337 1.01a1.646 1.646 0 01-.561.785c-.247.18-.54.292-.853.27-.27 0-.517-.068-.764-.158a3.354 3.354 0 01-.673-.404 1.07 1.07 0 00-.651-.202h-.023a.797.797 0 00-.651.404l-.898 1.325c-.36.584-.157.943.067 1.145a4.57 4.57 0 001.684.988c.696.247 1.415.359 2.133.359 1.302 0 2.38-.36 3.21-1.055.854-.764 1.505-1.751 1.819-2.874l4.176-13.605c.09-.247.112-.494.022-.719-.022-.157-.18-.336-.561-.336z"
                                fill="#011B33"
                              ></path>
                            </g>
                            <defs>
                              <clipPath id="clip0_907_69">
                                <path
                                  fill="#fff"
                                  transform="rotate(180 76.5 0)"
                                  d="M0 0H152.672V-24H0z"
                                ></path>
                              </clipPath>
                            </defs>
                          </svg>
                        </span>
                      </span>
                    </label>
                    <label aria-label="iyzico" className="cursor-pointer">
                      <input
                        type="checkbox"
                        className="peer invisible absolute -z-[1] opacity-0"
                        name="iyzico"
                        value="iyzico"
                      />
                      <span className="relative block w-full overflow-hidden rounded-md bg-gray-100 pb-[52%] peer-checked:border-2 peer-checked:border-accent peer-checked:shadow-md">
                        <span className="absolute flex h-full w-full items-center justify-center p-6 md:p-9">
                          <svg
                            className="w-14 h-6"
                            viewBox="0 0 868 410"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M26.2094 123.389C14.2609 123.389 4.625 133.025 4.625 144.819V270.471C4.625 282.342 14.338 291.978 26.2094 291.978C38.1579 291.978 47.7937 282.419 47.7937 270.471V144.819C47.7937 132.947 38.0808 123.389 26.2094 123.389Z"
                              fill="#1E64FF"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M26.2095 54.916C13.0276 54.916 2.3125 65.554 2.3125 78.6588C2.3125 91.7636 13.0276 102.402 26.2095 102.402C39.3914 102.402 50.1065 91.7636 50.1065 78.6588C50.0294 65.554 39.3914 54.916 26.2095 54.916Z"
                              fill="#1E64FF"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M413.032 270.47C413.032 258.599 403.319 248.963 391.371 248.963H331.706L408.022 158.617C415.653 149.521 414.497 135.953 405.324 128.399C401.084 124.853 395.842 123.157 390.677 123.388C390.446 123.388 295.243 123.388 295.243 123.388C283.295 123.388 273.659 133.024 273.659 144.818C273.659 156.69 283.295 166.326 295.243 166.326H345.119L268.803 256.595C261.094 265.691 262.327 279.258 271.424 286.813C275.509 290.205 280.443 291.823 285.299 291.823H391.294C403.319 291.901 413.032 282.342 413.032 270.47ZM603.514 163.474C615.386 163.474 626.409 168.022 634.812 176.347C643.214 184.75 656.936 184.75 665.415 176.347C673.818 167.945 673.818 154.377 665.415 145.975C648.842 129.555 626.872 120.459 603.514 120.459C580.157 120.459 558.187 129.478 541.691 145.975C525.194 162.394 516.021 184.21 516.021 207.49C516.021 230.693 525.117 252.586 541.691 268.929C558.187 285.348 580.157 294.444 603.514 294.444C626.872 294.444 648.842 285.348 665.415 268.929C673.818 260.603 673.818 246.959 665.415 238.556C656.936 230.154 643.291 230.154 634.812 238.556C626.409 246.805 615.309 251.43 603.514 251.43C591.72 251.43 580.62 246.805 572.217 238.556C563.815 230.231 559.267 219.207 559.267 207.413C559.267 195.696 563.892 184.595 572.217 176.347C580.543 168.022 591.643 163.474 603.514 163.474ZM778.194 251.43C753.834 251.43 733.946 231.696 733.946 207.413C733.946 183.131 753.757 163.396 778.194 163.396C802.63 163.396 822.442 183.131 822.442 207.413C822.442 231.696 802.63 251.43 778.194 251.43ZM778.194 120.459C730.014 120.459 690.777 159.465 690.777 207.413C690.777 255.361 730.014 294.367 778.194 294.367C826.45 294.367 865.687 255.361 865.687 207.413C865.687 159.465 826.45 120.459 778.194 120.459ZM466.068 123.388C454.12 123.388 444.484 133.024 444.484 144.818V270.47C444.484 282.342 454.12 291.978 466.068 291.978C478.017 291.978 487.653 282.419 487.653 270.47V144.818C487.73 132.947 478.017 123.388 466.068 123.388Z"
                              fill="#1E64FF"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M466.094 54.916C452.912 54.916 442.197 65.554 442.197 78.6588C442.197 91.7636 452.912 102.402 466.094 102.402C479.276 102.402 489.991 91.7636 489.991 78.6588C489.991 65.554 479.276 54.916 466.094 54.916Z"
                              fill="#1E64FF"
                            ></path>
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M236.041 125.778C225.403 120.305 212.375 124.39 206.902 134.951L160.573 223.755L114.243 134.951C108.77 124.467 95.6653 120.305 85.1044 125.778C74.5435 131.251 70.3808 144.202 75.931 154.763L136.29 270.393L108.462 323.892C102.989 334.452 107.074 347.403 117.635 352.876C121.104 354.726 124.881 355.42 128.504 355.266C135.982 354.958 143.074 350.795 146.774 343.703L245.291 154.763C250.764 144.202 246.602 131.251 236.041 125.778Z"
                              fill="#1E64FF"
                            ></path>
                          </svg>
                        </span>
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Set default payment gateway
                  </label>
                  <div className=" css-b62m3t-container">
                    <span
                      id="react-select-6-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className=" css-15aq8md">
                      <div className=" css-1n0qa22">
                        <div className=" css-15bgx2d-singleValue">Stripe</div>
                        <div className=" css-19bb58m" data-value="">
                          <input
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-6-input"
                            spellCheck="false"
                            tabIndex={0}
                            type="text"
                            aria-autoComplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            value=""
                            className="text-inherit bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                          />
                        </div>
                      </div>
                      <div className=" css-1wy0on6">
                        <span className=" css-1hyfx7x"></span>
                        <div
                          className=" css-wnbgnj-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input
                      name="defaultPaymentGateway"
                      type="hidden"
                      value="stripe"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <div className="flex items-center gap-x-4">
                    <div>
                      <button
                        className="bg-gray-300 relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none "
                        dir="ltr"
                        id="headlessui-switch-:r9:"
                        role="switch"
                        type="button"
                        tabIndex={0}
                        aria-checked="false"
                        data-headlessui-state=""
                      >
                        <span className="sr-only">Enable </span>
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-light transition-transform"></span>
                      </button>
                    </div>
                    <label className="block text-body-dark font-semibold text-sm leading-none mb-3 !mb-0">
                      Enable Stripe Element
                    </label>
                  </div>
                </div>
                <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                  Webhook URL
                </label>
                <div className="relative flex flex-col overflow-hidden rounded-md border border-solid border-[#D1D5DB]">
                  <div className="flex items-center border-t border-t-[#D1D5DB] px-5 py-4 transition-all first:border-t-0 hover:bg-gray-100">
                    <span className="relative h-5 min-w-[80px] sm:min-w-[100px] lg:min-w-[120px]">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="58"
                        height="24"
                        viewBox="0 0 58 24"
                        fill="none"
                        className="h-4 w-auto"
                      >
                        <path
                          d="M4.03506 9.36297C4.03506 8.74103 4.54542 8.50172 5.39085 8.50172C6.60287 8.50172 8.13393 8.86865 9.34607 9.52254V5.77445C8.02235 5.24817 6.71456 5.04082 5.39085 5.04082C2.15311 5.04082 0 6.73146 0 9.55451C0 13.9563 6.06056 13.2546 6.06056 15.1526C6.06056 15.8861 5.4227 16.1254 4.52949 16.1254C3.20578 16.1254 1.51514 15.5831 0.175389 14.8495V18.6453C1.65868 19.2833 3.15789 19.5544 4.52949 19.5544C7.84685 19.5544 10.1276 17.9117 10.1276 15.0568C10.1117 10.3041 4.03506 11.1493 4.03506 9.36297ZM14.8165 1.85108L10.925 2.68036L10.9091 15.4555C10.9091 17.8161 12.6795 19.5544 15.0399 19.5544C16.3477 19.5544 17.3046 19.3152 17.8309 19.0281V15.7905C17.3206 15.9978 14.8006 16.7314 14.8006 14.371V8.70907H17.8309V5.31198H14.8006L14.8165 1.85108ZM22.7911 6.49215L22.5359 5.31198H19.0909V19.2673H23.0782V9.80963C24.0191 8.58157 25.614 8.80484 26.1085 8.98023V5.31198C25.5981 5.12056 23.7321 4.76967 22.7911 6.49215ZM27.0813 5.31198H31.0845V19.2673H27.0813V5.31198ZM27.0813 4.09985L31.0845 3.2386V0.000976562L27.0813 0.846297V4.09985ZM39.4099 5.04082C37.8469 5.04082 36.8421 5.77445 36.2839 6.28492L36.0765 5.29606H32.5678V23.8924L36.555 23.0472L36.571 18.5336C37.1452 18.9483 37.9904 19.5384 39.394 19.5384C42.2488 19.5384 44.8485 17.2418 44.8485 12.186C44.8326 7.56075 42.201 5.04082 39.4099 5.04082ZM38.453 16.0296C37.512 16.0296 36.9536 15.6948 36.571 15.2801L36.555 9.36297C36.9697 8.9005 37.5438 8.58157 38.453 8.58157C39.9043 8.58157 40.9091 10.2083 40.9091 12.2976C40.9091 14.4348 39.9202 16.0296 38.453 16.0296ZM57.4163 12.3455C57.4163 8.26253 55.4385 5.04082 51.6587 5.04082C47.8627 5.04082 45.5661 8.26264 45.5661 12.3136C45.5661 17.1142 48.2775 19.5384 52.169 19.5384C54.0669 19.5384 55.5024 19.1078 56.5869 18.5018V15.3119C55.5025 15.8543 54.2584 16.1892 52.6794 16.1892C51.1323 16.1892 49.7607 15.6469 49.5853 13.765H57.3844C57.3844 13.5575 57.4163 12.7282 57.4163 12.3455ZM49.5375 10.8303C49.5375 9.02811 50.638 8.27845 51.6428 8.27845C52.6156 8.27845 53.6524 9.02811 53.6524 10.8303H49.5375Z"
                          fill="#6772E5"
                        ></path>
                      </svg>
                    </span>
                    <span className="ml-5 flex-grow truncate pr-2 text-xs text-gray-500">
                      https://chawkbazar-admin-api.redq.io/webhooks/stripe
                    </span>
                    <div className="relative flex items-center">
                      <button
                        type="button"
                        className="text-accent-500 transition hover:text-accent-400"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="18"
                          viewBox="0 0 14 18"
                          fill="none"
                        >
                          <path
                            d="M9.8125 12.9375V15.4688C9.8125 15.9345 9.4345 16.3125 8.96875 16.3125H1.65625C1.43247 16.3125 1.21786 16.2236 1.05963 16.0654C0.901395 15.9071 0.8125 15.6925 0.8125 15.4688V5.90625C0.8125 5.4405 1.1905 5.0625 1.65625 5.0625H3.0625C3.43943 5.06224 3.81573 5.09335 4.1875 5.1555M9.8125 12.9375H12.3438C12.8095 12.9375 13.1875 12.5595 13.1875 12.0938V8.4375C13.1875 5.0925 10.7552 2.31675 7.5625 1.7805C7.19073 1.71835 6.81443 1.68725 6.4375 1.6875H5.03125C4.5655 1.6875 4.1875 2.0655 4.1875 2.53125V5.1555M9.8125 12.9375H5.03125C4.80747 12.9375 4.59286 12.8486 4.43463 12.6904C4.27639 12.5321 4.1875 12.3175 4.1875 12.0938V5.1555M13.1875 10.125V8.71875C13.1875 8.04742 12.9208 7.40359 12.4461 6.92889C11.9714 6.45419 11.3276 6.1875 10.6562 6.1875H9.53125C9.30747 6.1875 9.09286 6.09861 8.93463 5.94037C8.77639 5.78214 8.6875 5.56753 8.6875 5.34375V4.21875C8.6875 3.88634 8.62203 3.55719 8.49482 3.25008C8.36761 2.94298 8.18116 2.66394 7.94611 2.42889C7.71107 2.19384 7.43202 2.00739 7.12492 1.88018C6.81781 1.75297 6.48866 1.6875 6.15625 1.6875H5.3125"
                            stroke="currentColor"
                            stroke-width="1.5"
                            strokeLinecap="round"
                            stroke-linejoin="round"
                          ></path>
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
              <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pr-4 md:w-1/3 md:pr-5">
                <h4 className="text-base font-semibold text-body-dark mb-2">
                  Currency Options
                </h4>
                <p className="text-sm text-body">
                  The following options effect how prices are displayed on the
                  frontend
                </p>
              </div>
              <div className="bg-white p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Select Currency Formation *
                  </label>
                  <div className=" css-b62m3t-container">
                    <span
                      id="react-select-7-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className=" css-15aq8md">
                      <div className=" css-1n0qa22">
                        <div className=" css-15bgx2d-singleValue">
                          English (United States)
                        </div>
                        <div className=" css-19bb58m" data-value="">
                          <input
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-7-input"
                            spellCheck="false"
                            tabIndex={0}
                            type="text"
                            aria-autoComplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            value=""
                            className="text-inherit bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                          />
                        </div>
                      </div>
                      <div className=" css-1wy0on6">
                        <span className=" css-1hyfx7x"></span>
                        <div
                          className=" css-wnbgnj-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <input
                      name="currencyOptions.formation"
                      type="hidden"
                      value="en-US"
                    />
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="currencyOptions.fractions"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Number of Factional Digit *
                  </label>
                  <input
                    id="currencyOptions.fractions"
                    name="currencyOptions.fractions"
                    type="number"
                    className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                    placeholder="Enter number Between 1-5"
                  />
                </div>
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Sample Output:{" "}
                    <span className="px-3 py-1 rounded-full text-xs whitespace-nowrap relative text-light bg-accent">
                      $987,456,321.12
                    </span>
                  </label>
                </div>
              </div>
            </div>
            <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
              <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pr-4 md:w-1/3 md:pr-5">
                <h4 className="text-base font-semibold text-body-dark mb-2">
                  SEO
                </h4>
                <p className="text-sm text-body">
                  Change your site SEO from here
                </p>
              </div>
              <div className="bg-white p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                <div className="mb-5">
                  <label
                    htmlFor="seo.metaTitle"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Meta Title
                  </label>
                  <input
                    id="seo.metaTitle"
                    name="seo.metaTitle"
                    type="text"
                    className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="relative">
                  <div className="absolute right-0 -top-1 z-10 cursor-pointer text-sm font-medium text-accent hover:text-accent-hover">
                    Generate Description With AI
                  </div>
                  <div className="mb-5">
                    <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                      Meta Description
                    </label>
                    <textarea
                      id="seo.metaDescription"
                      name="seo.metaDescription"
                      className="py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent "
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                    ></textarea>
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="seo.metaTags"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Meta Tags
                  </label>
                  <input
                    id="seo.metaTags"
                    name="seo.metaTags"
                    type="text"
                    className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="seo.canonicalUrl"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Canonical URL
                  </label>
                  <input
                    id="seo.canonicalUrl"
                    name="seo.canonicalUrl"
                    type="text"
                    className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="seo.ogTitle"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    OG Title
                  </label>
                  <input
                    id="seo.ogTitle"
                    name="seo.ogTitle"
                    type="text"
                    className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="relative">
                  <div className="absolute right-0 -top-1 z-10 cursor-pointer text-sm font-medium text-accent hover:text-accent-hover">
                    Generate Description With AI
                  </div>
                  <div className="mb-5">
                    <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                      OG Description
                    </label>
                    <textarea
                      id="seo.ogDescription"
                      name="seo.ogDescription"
                      className="py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent "
                      autoComplete="off"
                      autoCorrect="off"
                      autoCapitalize="off"
                      spellCheck="false"
                    ></textarea>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    OG Image
                  </label>
                  <section className="upload">
                    <div
                      role="presentation"
                      tabIndex={0}
                      className="border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none"
                    >
                      <input
                        accept="image/*,.jpg,.jpeg,.png,.webp"
                        type="file"
                        tabIndex={-1}
                        className="hidden"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="41px"
                        height="30px"
                        viewBox="0 0 40.909 30"
                        className="text-muted-light"
                      >
                        <g transform="translate(0 -73.091)">
                          <path
                            data-name="Path 2125"
                            d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z"
                            transform="translate(0)"
                            fill="currentColor"
                          ></path>
                        </g>
                      </svg>
                      <p className="mt-4 text-center text-sm text-body">
                        <span className="font-semibold text-accent">
                          Upload an image
                        </span>{" "}
                        or drag and drop{" "}
                        <span className="text-xs text-body">PNG, JPG</span>
                      </p>
                    </div>
                  </section>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="seo.twitterHandle"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Twitter Handle
                  </label>
                  <input
                    id="seo.twitterHandle"
                    name="seo.twitterHandle"
                    type="text"
                    className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                    placeholder="your twitter username (exp: @username)"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="seo.twitterCardType"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Twitter Card Type
                  </label>
                  <input
                    id="seo.twitterCardType"
                    name="seo.twitterCardType"
                    type="text"
                    className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                    placeholder="one of summary, summary_large_image, app, or player"
                  />
                </div>
              </div>
            </div>
            <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
              <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                <h4 className="text-base font-semibold text-body-dark mb-2">
                  SMS Event Setting
                </h4>
                <p className="text-sm text-body">
                  Set This to Send SMS on Selected Event
                </p>
              </div>
              <div className="bg-white p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Select SMS Options
                  </label>
                  <div className=" css-b62m3t-container">
                    <span
                      id="react-select-8-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className=" css-15aq8md">
                      <div className=" css-1krubfd">
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Admin: Status Change Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Admin: Status Change Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">Admin: Refund Order</div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Admin: Refund Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Admin: Payment Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Admin: Payment Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Owner: Status Change Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Owner: Status Change Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Owner: Payment Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Owner: Payment Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">Owner: Refund Order</div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Owner: Refund Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Customer: Status Change Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Customer: Status Change Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Customer: Refund Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Customer: Refund Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Customer: Payment Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Customer: Payment Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-19bb58m" data-value="">
                          <input
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-8-input"
                            spellCheck="false"
                            tabIndex={0}
                            type="text"
                            aria-autoComplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            value=""
                            className="text-inherit bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                          />
                        </div>
                      </div>
                      <div className=" css-1wy0on6">
                        <div
                          className=" css-1vbg55u-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                          </svg>
                        </div>
                        <span className=" css-1hyfx7x"></span>
                        <div
                          className=" css-wnbgnj-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        name="smsEvent"
                        type="hidden"
                        value="admin-statusChangeOrder"
                      />
                      <input
                        name="smsEvent"
                        type="hidden"
                        value="admin-refundOrder"
                      />
                      <input
                        name="smsEvent"
                        type="hidden"
                        value="admin-paymentOrder"
                      />
                      <input
                        name="smsEvent"
                        type="hidden"
                        value="vendor-statusChangeOrder"
                      />
                      <input
                        name="smsEvent"
                        type="hidden"
                        value="vendor-paymentOrder"
                      />
                      <input
                        name="smsEvent"
                        type="hidden"
                        value="vendor-refundOrder"
                      />
                      <input
                        name="smsEvent"
                        type="hidden"
                        value="customer-statusChangeOrder"
                      />
                      <input
                        name="smsEvent"
                        type="hidden"
                        value="customer-refundOrder"
                      />
                      <input
                        name="smsEvent"
                        type="hidden"
                        value="customer-paymentOrder"
                      />
                    </div>
                  </div>
                  <p className="my-2 text-xs text-start text-red-500"></p>
                </div>
              </div>
            </div>
            <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
              <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                <h4 className="text-base font-semibold text-body-dark mb-2">
                  Email Event Setting
                </h4>
                <p className="text-sm text-body">
                  Set This to Send SMS on Selected Event
                </p>
              </div>
              {/* bg-white  */}
              <div className="bg-white p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Select Email Options
                  </label>
                  <div className=" css-b62m3t-container">
                    <span
                      id="react-select-9-live-region"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <span
                      aria-live="polite"
                      aria-atomic="false"
                      aria-relevant="additions text"
                      className="css-7pg0cj-a11yText"
                    ></span>
                    <div className=" css-15aq8md">
                      <div className=" css-1krubfd">
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Admin: Status Change Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Admin: Status Change Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">Admin: Refund Order</div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Admin: Refund Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Admin: Payment Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Admin: Payment Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Owner: Create Question
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Owner: Create Question"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Owner: Status Change Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Owner: Status Change Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">Owner: Refund Order</div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Owner: Refund Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Owner: Payment Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Owner: Payment Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Owner: Create Review
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Owner: Create Review"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Customer: Status Change Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Customer: Status Change Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Customer: Refund Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Customer: Refund Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Customer: Payment Order
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Customer: Payment Order"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-1kirg9x-multiValue">
                          <div className=" css-41umyv">
                            Customer: Answer Question
                          </div>
                          <div
                            role="button"
                            className=" css-10yl8ep"
                            aria-label="Remove Customer: Answer Question"
                          >
                            <svg
                              height="14"
                              width="14"
                              viewBox="0 0 20 20"
                              aria-hidden="true"
                              focusable="false"
                              className="css-8mmkcg"
                            >
                              <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                            </svg>
                          </div>
                        </div>
                        <div className=" css-19bb58m" data-value="">
                          <input
                            autoCapitalize="none"
                            autoComplete="off"
                            autoCorrect="off"
                            id="react-select-9-input"
                            spellCheck="false"
                            tabIndex={0}
                            type="text"
                            aria-autoComplete="list"
                            aria-expanded="false"
                            aria-haspopup="true"
                            role="combobox"
                            value=""
                            className="text-inherit bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                          />
                        </div>
                      </div>
                      <div className=" css-1wy0on6">
                        <div
                          className=" css-1vbg55u-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                          </svg>
                        </div>
                        <span className=" css-1hyfx7x"></span>
                        <div
                          className=" css-wnbgnj-indicatorContainer"
                          aria-hidden="true"
                        >
                          <svg
                            height="20"
                            width="20"
                            viewBox="0 0 20 20"
                            aria-hidden="true"
                            focusable="false"
                            className="css-8mmkcg"
                          >
                            <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div>
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="admin-statusChangeOrder"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="admin-refundOrder"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="admin-paymentOrder"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="vendor-createQuestion"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="vendor-statusChangeOrder"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="vendor-refundOrder"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="vendor-paymentOrder"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="vendor-createReview"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="customer-statusChangeOrder"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="customer-refundOrder"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="customer-paymentOrder"
                      />
                      <input
                        name="emailEvent"
                        type="hidden"
                        value="customer-answerQuestion"
                      />
                    </div>
                  </div>
                  <p className="my-2 text-xs text-start text-red-500"></p>
                </div>
              </div>
            </div>
            <div className="my-5 flex flex-wrap border-b border-dashed border-gray-300 pb-8 sm:my-8">
              <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pr-4 md:w-1/3 md:pr-5">
                <h4 className="text-base font-semibold text-body-dark mb-2">
                  Delivery Schedule
                </h4>
                <p className="text-sm text-body">
                  Add your delivery schedule time with proper description from
                  here
                </p>
              </div>
              <div className="bg-white p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                <div>
                  <div className="border-b border-dashed border-border-200 py-5 first:pt-0 last:border-0 md:py-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
                      <div className="grid grid-cols-1 gap-5 sm:col-span-4">
                        <div>
                          <label
                            htmlFor="deliveryTime.0.title"
                            className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                          >
                            Title/Time
                          </label>
                          <input
                            id="deliveryTime.0.title"
                            name="deliveryTime.0.title"
                            type="text"
                            className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            aria-invalid="false"
                            value="Express Delivery"
                          />
                        </div>
                        <div>
                          <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                            Description
                          </label>
                          <textarea
                            id="deliveryTime.0.description"
                            name="deliveryTime.0.description"
                            className="py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                          >
                            90 min express delivery
                          </textarea>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="border-b border-dashed border-border-200 py-5 first:pt-0 last:border-0 md:py-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
                      <div className="grid grid-cols-1 gap-5 sm:col-span-4">
                        <div>
                          <label
                            htmlFor="deliveryTime.1.title"
                            className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                          >
                            Title/Time
                          </label>
                          <input
                            id="deliveryTime.1.title"
                            name="deliveryTime.1.title"
                            type="text"
                            className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            aria-invalid="false"
                            value="Morning"
                          />
                        </div>
                        <div>
                          <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                            Description
                          </label>
                          <textarea
                            id="deliveryTime.1.description"
                            name="deliveryTime.1.description"
                            className="py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                          >
                            8.00 AM - 11.00 AM
                          </textarea>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="border-b border-dashed border-border-200 py-5 first:pt-0 last:border-0 md:py-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
                      <div className="grid grid-cols-1 gap-5 sm:col-span-4">
                        <div>
                          <label
                            htmlFor="deliveryTime.2.title"
                            className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                          >
                            Title/Time
                          </label>
                          <input
                            id="deliveryTime.2.title"
                            name="deliveryTime.2.title"
                            type="text"
                            className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            aria-invalid="false"
                            value="Noon"
                          />
                        </div>
                        <div>
                          <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                            Description
                          </label>
                          <textarea
                            id="deliveryTime.2.description"
                            name="deliveryTime.2.description"
                            className="py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                          >
                            11.00 AM - 2.00 PM
                          </textarea>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="border-b border-dashed border-border-200 py-5 first:pt-0 last:border-0 md:py-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
                      <div className="grid grid-cols-1 gap-5 sm:col-span-4">
                        <div>
                          <label
                            htmlFor="deliveryTime.3.title"
                            className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                          >
                            Title/Time
                          </label>
                          <input
                            id="deliveryTime.3.title"
                            name="deliveryTime.3.title"
                            type="text"
                            className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            aria-invalid="false"
                            value="Afternoon"
                          />
                        </div>
                        <div>
                          <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                            Description
                          </label>
                          <textarea
                            id="deliveryTime.3.description"
                            name="deliveryTime.3.description"
                            className="py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                          >
                            2.00 PM - 5.00 PM
                          </textarea>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="border-b border-dashed border-border-200 py-5 first:pt-0 last:border-0 md:py-8">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
                      <div className="grid grid-cols-1 gap-5 sm:col-span-4">
                        <div>
                          <label
                            htmlFor="deliveryTime.4.title"
                            className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                          >
                            Title/Time
                          </label>
                          <input
                            id="deliveryTime.4.title"
                            name="deliveryTime.4.title"
                            type="text"
                            className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                            aria-invalid="false"
                            value="Evening"
                          />
                        </div>
                        <div>
                          <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                            Description
                          </label>
                          <textarea
                            id="deliveryTime.4.description"
                            name="deliveryTime.4.description"
                            className="py-3 px-4 w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent "
                            autoComplete="off"
                            autoCorrect="off"
                            autoCapitalize="off"
                            spellCheck="false"
                          >
                            5.00 PM - 8.00 PM
                          </textarea>
                        </div>
                      </div>
                      <button
                        type="button"
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  data-variant="normal"
                  className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12 w-full sm:w-auto"
                  type="button"
                >
                  Add Delivery Time
                </button>
              </div>
            </div>
            <div className="my-5 flex flex-wrap border-b border-dashed border-gray-300 pb-8 sm:my-8">
              <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                <h4 className="text-base font-semibold text-body-dark mb-2">
                  Shop Settings
                </h4>
                <p className="text-sm text-body">
                  Add your shop settings information from here
                </p>
              </div>
              <div className="bg-white p-5 md:p-8 bg-light shadow rounded w-full sm:w-8/12 md:w-2/3">
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                    Set location from map
                  </label>
                  <div className="relative">
                    <div className="">
                      <input
                        type="text"
                        placeholder="Search location form here"
                        className="flex h-12 w-full appearance-none items-center rounded border border-border-base text-sm text-heading transition duration-300 ease-in-out focus:border-accent focus:outline-none focus:ring-0 px-4 pac-target-input"
                        value="NY State Thruway, New York, USA"
                        autoComplete="off"
                      />
                    </div>
                  </div>
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="contactDetails.contact"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Contact Number
                  </label>
                  <input
                    id="contactDetails.contact"
                    name="contactDetails.contact"
                    type="text"
                    className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="mb-5">
                  <label
                    htmlFor="contactDetails.website"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                  >
                    Website
                  </label>
                  <input
                    id="contactDetails.website"
                    name="contactDetails.website"
                    type="text"
                    className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                    autoComplete="off"
                    autoCorrect="off"
                    autoCapitalize="off"
                    spellCheck="false"
                    aria-invalid="false"
                  />
                </div>
                <div className="mt-6">
                  <div className="flex items-center gap-x-4">
                    <div>
                      <button
                        className="bg-gray-300 relative inline-flex h-6 w-11 items-center rounded-full focus:outline-none "
                        dir="ltr"
                        id="headlessui-switch-:ra:"
                        role="switch"
                        type="button"
                        tabIndex={0}
                        aria-checked="false"
                        data-headlessui-state=""
                      >
                        <span className="sr-only">Enable </span>
                        <span className="translate-x-1 inline-block h-4 w-4 transform rounded-full bg-light transition-transform"></span>
                      </button>
                    </div>
                    <label className="block text-body-dark font-semibold text-sm leading-none mb-3">
                      Enable product review system before publish ?
                    </label>
                  </div>
                </div>
                <div>
                  <div className="border-b border-dashed border-border-200 py-5 first:mt-5 first:border-t last:border-b-0 md:py-8 md:first:mt-10">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
                      <div className="sm:col-span-2">
                        <label className="block text-body-dark font-semibold text-sm leading-none mb-3 whitespace-nowrap">
                          Select social platform
                        </label>
                        <div className=" css-b62m3t-container">
                          <span
                            id="react-select-10-live-region"
                            className="css-7pg0cj-a11yText"
                          ></span>
                          <span
                            aria-live="polite"
                            aria-atomic="false"
                            aria-relevant="additions text"
                            className="css-7pg0cj-a11yText"
                          ></span>
                          <div className=" css-15aq8md">
                            <div className=" css-1n0qa22">
                              <div className=" css-15bgx2d-singleValue">
                                <div className="flex items-center text-body space-s-4">
                                  <span className="flex h-4 w-4 items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 12 12"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        data-name="_ionicons_svg_logo-facebook (6)"
                                        d="M11.338 0H.662A.663.663 0 000 .663v10.674a.663.663 0 00.662.662H6V7.25H4.566V5.5H6V4.206a2.28 2.28 0 012.459-2.394c.662 0 1.375.05 1.541.072V3.5H8.9c-.753 0-.9.356-.9.881V5.5h1.794L9.56 7.25H8V12h3.338a.663.663 0 00.662-.663V.662A.663.663 0 0011.338 0z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span>Facebook</span>
                                </div>
                              </div>
                              <div className=" css-19bb58m" data-value="">
                                <input
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-10-input"
                                  spellCheck="false"
                                  tabIndex={0}
                                  type="text"
                                  aria-autoComplete="list"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  role="combobox"
                                  value=""
                                  className="text-inherit bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                                />
                              </div>
                            </div>
                            <div className=" css-1wy0on6">
                              <div
                                className=" css-1vbg55u-indicatorContainer"
                                aria-hidden="true"
                              >
                                <svg
                                  height="20"
                                  width="20"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  focusable="false"
                                  className="css-8mmkcg"
                                >
                                  <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                                </svg>
                              </div>
                              <span className=" css-1hyfx7x"></span>
                              <div
                                className=" css-wnbgnj-indicatorContainer"
                                aria-hidden="true"
                              >
                                <svg
                                  height="20"
                                  width="20"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  focusable="false"
                                  className="css-8mmkcg"
                                >
                                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <input
                            name="contactDetails.socials.0.icon"
                            type="hidden"
                            value="FacebookIcon"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="contactDetails.socials.0.url"
                          className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                        >
                          Add profile url
                        </label>
                        <input
                          id="contactDetails.socials.0.url"
                          name="contactDetails.socials.0.url"
                          type="text"
                          className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                          autoComplete="off"
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          aria-invalid="false"
                          value="https://www.facebook.com/"
                        />
                      </div>
                      <button
                        type="button"
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="border-b border-dashed border-border-200 py-5 first:mt-5 first:border-t last:border-b-0 md:py-8 md:first:mt-10">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
                      <div className="sm:col-span-2">
                        <label className="block text-body-dark font-semibold text-sm leading-none mb-3 whitespace-nowrap">
                          Select social platform
                        </label>
                        <div className=" css-b62m3t-container">
                          <span
                            id="react-select-11-live-region"
                            className="css-7pg0cj-a11yText"
                          ></span>
                          <span
                            aria-live="polite"
                            aria-atomic="false"
                            aria-relevant="additions text"
                            className="css-7pg0cj-a11yText"
                          ></span>
                          <div className=" css-15aq8md">
                            <div className=" css-1n0qa22">
                              <div className=" css-15bgx2d-singleValue">
                                <div className="flex items-center text-body space-s-4">
                                  <span className="flex h-4 w-4 items-center justify-center">
                                    <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 14.747 12"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        data-name="_ionicons_svg_logo-twitter (5)"
                                        d="M14.747 1.422a6.117 6.117 0 01-1.737.478A3.036 3.036 0 0014.341.225a6.012 6.012 0 01-1.922.734 3.025 3.025 0 00-5.234 2.069 2.962 2.962 0 00.078.691A8.574 8.574 0 011.026.553a3.032 3.032 0 00.941 4.044 2.955 2.955 0 01-1.375-.378v.037A3.028 3.028 0 003.02 7.225a3.046 3.046 0 01-.8.106 2.854 2.854 0 01-.569-.056 3.03 3.03 0 002.828 2.1 6.066 6.066 0 01-3.759 1.3 6.135 6.135 0 01-.722-.044A8.457 8.457 0 004.631 12a8.557 8.557 0 008.616-8.619c0-.131 0-.262-.009-.391a6.159 6.159 0 001.509-1.568z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span>Twitter</span>
                                </div>
                              </div>
                              <div className=" css-19bb58m" data-value="">
                                <input
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-11-input"
                                  spellCheck="false"
                                  tabIndex={0}
                                  type="text"
                                  aria-autoComplete="list"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  role="combobox"
                                  value=""
                                  className="text-inherit bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                                />
                              </div>
                            </div>
                            <div className=" css-1wy0on6">
                              <div
                                className=" css-1vbg55u-indicatorContainer"
                                aria-hidden="true"
                              >
                                <svg
                                  height="20"
                                  width="20"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  focusable="false"
                                  className="css-8mmkcg"
                                >
                                  <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                                </svg>
                              </div>
                              <span className=" css-1hyfx7x"></span>
                              <div
                                className=" css-wnbgnj-indicatorContainer"
                                aria-hidden="true"
                              >
                                <svg
                                  height="20"
                                  width="20"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  focusable="false"
                                  className="css-8mmkcg"
                                >
                                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <input
                            name="contactDetails.socials.1.icon"
                            type="hidden"
                            value="TwitterIcon"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="contactDetails.socials.1.url"
                          className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                        >
                          Add profile url
                        </label>
                        <input
                          id="contactDetails.socials.1.url"
                          name="contactDetails.socials.1.url"
                          type="text"
                          className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                          autoComplete="off"
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          aria-invalid="false"
                          value="https://twitter.com/home"
                        />
                      </div>
                      <button
                        type="button"
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <div className="border-b border-dashed border-border-200 py-5 first:mt-5 first:border-t last:border-b-0 md:py-8 md:first:mt-10">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-5">
                      <div className="sm:col-span-2">
                        <label className="block text-body-dark font-semibold text-sm leading-none mb-3 whitespace-nowrap">
                          Select social platform
                        </label>
                        <div className=" css-b62m3t-container">
                          <span
                            id="react-select-12-live-region"
                            className="css-7pg0cj-a11yText"
                          ></span>
                          <span
                            aria-live="polite"
                            aria-atomic="false"
                            aria-relevant="additions text"
                            className="css-7pg0cj-a11yText"
                          ></span>
                          <div className=" css-15aq8md">
                            <div className=" css-1n0qa22">
                              <div className=" css-15bgx2d-singleValue">
                                <div className="flex items-center text-body space-s-4">
                                  <span className="flex h-4 w-4 items-center justify-center">
                                    <svg
                                      data-name="Group 96"
                                      xmlns="http://www.w3.org/2000/svg"
                                      viewBox="0 0 12 12"
                                      className="w-4 h-4"
                                    >
                                      <path
                                        data-name="Path 1"
                                        d="M8.5 1A2.507 2.507 0 0111 3.5v5A2.507 2.507 0 018.5 11h-5A2.507 2.507 0 011 8.5v-5A2.507 2.507 0 013.5 1h5m0-1h-5A3.51 3.51 0 000 3.5v5A3.51 3.51 0 003.5 12h5A3.51 3.51 0 0012 8.5v-5A3.51 3.51 0 008.5 0z"
                                        fill="currentColor"
                                      ></path>
                                      <path
                                        data-name="Path 2"
                                        d="M9.25 3.5a.75.75 0 11.75-.75.748.748 0 01-.75.75zM6 4a2 2 0 11-2 2 2 2 0 012-2m0-1a3 3 0 103 3 3 3 0 00-3-3z"
                                        fill="currentColor"
                                      ></path>
                                    </svg>
                                  </span>
                                  <span>Instagram</span>
                                </div>
                              </div>
                              <div className=" css-19bb58m" data-value="">
                                <input
                                  autoCapitalize="none"
                                  autoComplete="off"
                                  autoCorrect="off"
                                  id="react-select-12-input"
                                  spellCheck="false"
                                  tabIndex={0}
                                  type="text"
                                  aria-autoComplete="list"
                                  aria-expanded="false"
                                  aria-haspopup="true"
                                  role="combobox"
                                  value=""
                                  className="text-inherit bg-center opacity-100 w-full col-span-1/2 font-inherit min-w-2 border-0 m-0 outline-none p-0"
                                />
                              </div>
                            </div>
                            <div className=" css-1wy0on6">
                              <div
                                className=" css-1vbg55u-indicatorContainer"
                                aria-hidden="true"
                              >
                                <svg
                                  height="20"
                                  width="20"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  focusable="false"
                                  className="css-8mmkcg"
                                >
                                  <path d="M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"></path>
                                </svg>
                              </div>
                              <span className=" css-1hyfx7x"></span>
                              <div
                                className=" css-wnbgnj-indicatorContainer"
                                aria-hidden="true"
                              >
                                <svg
                                  height="20"
                                  width="20"
                                  viewBox="0 0 20 20"
                                  aria-hidden="true"
                                  focusable="false"
                                  className="css-8mmkcg"
                                >
                                  <path d="M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"></path>
                                </svg>
                              </div>
                            </div>
                          </div>
                          <input
                            name="contactDetails.socials.2.icon"
                            type="hidden"
                            value="InstagramIcon"
                          />
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="contactDetails.socials.2.url"
                          className="mb-3 block text-sm font-semibold leading-none text-body-dark"
                        >
                          Add profile url
                        </label>
                        <input
                          id="contactDetails.socials.2.url"
                          name="contactDetails.socials.2.url"
                          type="text"
                          className="px-4 h-12 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
                          autoComplete="off"
                          autoCorrect="off"
                          autoCapitalize="off"
                          spellCheck="false"
                          aria-invalid="false"
                          value=""
                        />
                      </div>
                      <button
                        type="button"
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  data-variant="normal"
                  className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12 w-full sm:w-auto"
                  type="button"
                >
                  Add New Social Profile
                </button>
              </div>
            </div>
            <div className="mb-4 text-end">
              <button
                data-variant="normal"
                className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12"
              >
                Save Settings
              </button>
            </div>
          </form>
        </div>
      </main>
    </>
  );
};

export default MyShopStoreCustom;
