"use client";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { ShopData } from "../../../../../type";
import { useSession } from "next-auth/react";
import Link from "next/link";
import toast, { Toaster } from "react-hot-toast";
import axios from "axios";

const MyShopStoreCustom = ({ item }: { item: ShopData }) => {
  const { data: session } = useSession();
  const [previewImage, setPreviewImage] = useState<string | null>();
  const [previewFavicon, setPreviewFavicon] = useState<string | null>();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const fileInputRefFav = useRef<HTMLInputElement | null>(null);
  const [selectedFiles, setSelectedFiles] = useState<any>();
  const [selectedFavicon, setSelectedFavicon] = useState<any>();
  const handleDivClick = () => {
    // Trigger a click event on the file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewImage(null);
    }
    setSelectedFiles(file);
  };

  /** Favicon Action */

  const handleDivClickFavicon = () => {
    // Trigger a click event on the file input
    if (fileInputRefFav.current) {
      fileInputRefFav.current.click();
    }
  };
  const handleImageChangeFavicon = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewFavicon(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreviewFavicon(null);
    }
    setSelectedFavicon(file);
  };

  /** End of Favicon Action */
  const [formData, setFormData] = useState({
    ...item,
    status: item.status,
  });

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value, type } = e.target;
    const inputValue =
      type === "checkbox" ? (e.target as HTMLInputElement).checked : value;
    setFormData((prevData) => ({
      ...prevData,
      [name]: inputValue,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    toast.loading("loading...");
    e.preventDefault();
    const formDataWithImage = new FormData();

    if (selectedFiles) {
      formDataWithImage.append("image", selectedFiles);
    }
    if (selectedFavicon) {
      formDataWithImage.append("favicon", selectedFavicon);
    }

    Object.keys(formData).forEach((key) => {
      if (key !== "image" && key !== "favicon") {
        formDataWithImage.append(
          key,
          (formData as unknown as Record<string, string>)[key]
        );
      }
    });

    const headers = {
      Authorization: `Bearer ${session?.bearer}`,
      "Content-Type": "multipart/form-data", // Use 'multipart/form-data' for FormData
    };
    axios
      .post(
        `${process.env.SERVER_ENDPOINT}/api/myshop-board/shop-update/${item.id}`,
        formDataWithImage,
        { headers }
      )
      .then((response) => {
        toast.dismiss();
        if (response.status == 200) {
          toast.success("Your store updated successfully");
        }
        if (response.status == 201) {
          console.log(response.data?.message.error);
        }
        console.log("Response:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <>
      <main className="ltr:xl:pl-76 rtl:xl:pr-76 w-full ltr:lg:pl-72 rtl:lg:pr-72 rtl:lg:pl-0 bg-gray-100">
        <div className="h-full p-5 md:p-8">
          <div className="flex border-b border-dashed border-border-base py-5 sm:py-8">
            <h1 className="text-lg font-semibold text-heading">Settings</h1>
          </div>
          <form onSubmit={handleSubmit}>
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
                    onClick={handleDivClick}
                    role="presentation"
                    tabIndex={0}
                    className="border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none">
                    <input
                      onChange={handleImageChange}
                      ref={fileInputRef}
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
                      className="text-muted-light">
                      <g transform="translate(0 -73.091)">
                        <path
                          data-name="Path 2125"
                          d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z"
                          transform="translate(0)"
                          fill="currentColor"></path>
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
                      <figure className="relative h-28 w-28">
                        {previewImage ? (
                          <Image
                            alt=""
                            width={500}
                            height={500}
                            src={previewImage}
                          />
                        ) : (
                          <Image
                            className="w-36 h-25"
                            alt=""
                            width={500}
                            height={500}
                            src={`${process.env.SERVER_ENDPOINT}/storage/logo/${item.logo}`}
                          />
                        )}
                      </figure>
                    </div>
                  </aside>
                </section>
              </div>
            </div>
            <div className="my-5 flex flex-wrap border-b border-dashed border-border-base pb-8 sm:my-8">
              <div className="w-full px-0 pb-5 sm:w-4/12 sm:py-8 sm:pe-4 md:w-1/3 md:pe-5">
                <h4 className="text-base font-semibold text-body-dark mb-2">
                  Favicon
                </h4>
                <p className="text-sm text-body">
                  <span>
                    Upload your site Favicon from here. Dimension of the logo
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
                    onClick={handleDivClickFavicon}
                    role="presentation"
                    tabIndex={0}
                    className="border-dashed border-2 border-border-base h-36 rounded flex flex-col justify-center items-center cursor-pointer focus:border-accent-400 focus:outline-none">
                    <input
                      onChange={handleImageChangeFavicon}
                      ref={fileInputRefFav}
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
                      className="text-muted-light">
                      <g transform="translate(0 -73.091)">
                        <path
                          data-name="Path 2125"
                          d="M39.129,89.827A8.064,8.064,0,0,0,34.58,86.94,5.446,5.446,0,0,0,30,78.546a5.207,5.207,0,0,0-3.537,1.321,10.921,10.921,0,0,0-10.1-6.776,10.511,10.511,0,0,0-7.713,3.2A10.508,10.508,0,0,0,5.454,84q0,.277.043.916A9.528,9.528,0,0,0,0,93.546a9.193,9.193,0,0,0,2.8,6.743,9.191,9.191,0,0,0,6.744,2.8H32.728a8.172,8.172,0,0,0,6.4-13.264Zm-12.06-.575a.656.656,0,0,1-.479.2H21.818v7.5a.691.691,0,0,1-.681.681H17.045a.691.691,0,0,1-.682-.681v-7.5H11.59a.655.655,0,0,1-.681-.681.8.8,0,0,1,.213-.512L18.6,80.783a.722.722,0,0,1,.98,0l7.5,7.5a.663.663,0,0,1,.191.49A.656.656,0,0,1,27.07,89.252Z"
                          transform="translate(0)"
                          fill="currentColor"></path>
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
                      <figure className="relative h-28 w-28">
                        {previewFavicon ? (
                          <Image
                            alt=""
                            width={500}
                            height={500}
                            src={previewFavicon}
                          />
                        ) : item.favicon ? (
                          <Image
                            className="w-36 h-25"
                            alt=""
                            width={500}
                            height={500}
                            src={`${process.env.SERVER_ENDPOINT}/storage/logo/${item.favicon}`}
                          />
                        ) : (
                          <Image
                            className="w-36 h-25"
                            alt=""
                            width={500}
                            height={500}
                            src={`/images/no_image.png`}
                          />
                        )}
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
                    htmlFor="company_name"
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                    Store Name
                  </label>
                  <input
                    value={formData.company_name}
                    onChange={handleInputChange}
                    name="company_name"
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
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                    Site Subtitle
                  </label>
                  <input
                    id="siteSubtitle"
                    value={formData.tagline?.toString()}
                    name="tagline"
                    onChange={handleInputChange}
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
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                    Email
                  </label>
                  <input
                    id="siteSubtitle"
                    value={formData.email}
                    name="email"
                    onChange={handleInputChange}
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
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                    Phone
                  </label>
                  <input
                    id="phone"
                    value={formData.phone}
                    name="phone"
                    onChange={handleInputChange}
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
                    className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                    Store Description
                  </label>

                  <textarea
                    value={formData?.description}
                    name="description"
                    onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
                      handleInputChange(e)
                    }
                    className="block w-full border bg-gray-50 focus:bg-white text-sm dark:text-gray-300 rounded-md focus:outline-none p-3 border-gray-200 dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700"
                    placeholder="Slider Description"
                    rows={4}
                    spellCheck="false"></textarea>
                </div>

                <div className="mb-5">
                  <div className="flex items-center gap-x-4">
                    <div className="form-control w-52">
                      <label className="cursor-pointer flex flex-row items-center gap-2">
                        <input
                          value="1"
                          checked={formData.status}
                          onChange={handleInputChange}
                          name="status"
                          type="checkbox"
                          className="toggle toggle-primary"
                        />
                        {formData.status ? (
                          <span className="label-text ml-1">Enabled</span>
                        ) : (
                          <span className="label-text ml-1">Disabled</span>
                        )}
                      </label>
                    </div>
                  </div>
                </div>
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
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-2">
                    Domain
                  </label>
                  <div className="relative">
                    <div className="relative flex items-center">
                      <input
                        readOnly
                        value="https://"
                        type="text"
                        className="bg-slate-200 pointer-events-none block w-1/3 px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-r-0 border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      <input
                        value={formData.domain?.toString()}
                        onChange={handleInputChange}
                        name="domain"
                        id="shop_sub_domain"
                        type="text"
                        placeholder="Sub Domain"
                        className="border-l-0 border-r-0 rounded-l-none rounded-r-none block w-full px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                    {/* <div className="">
                      <input
                        type="text"
                        placeholder="Search location form here"
                        className="flex h-12 w-full appearance-none items-center rounded border border-border-base text-sm text-heading transition duration-300 ease-in-out focus:border-accent focus:outline-none focus:ring-0 px-4 pac-target-input"
                        value={formData?.domain?.toString()}
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                    </div> */}
                  </div>
                  <div className="mt-1 bg-red-100 p-2 rounded-lg text-sm font-mono">
                    <p className="text-gray-700 ">
                      Mohon untuk segera mengupdate pengaturan Name Server pada
                      penyedia layanan domain Anda dengan informasi berikut:
                    </p>
                    <ul className="list-disc pl-6 mt-0">
                      <li className="text-blue-500">NS1 : n1.smartshop.id</li>
                      <li className="text-blue-500">NS2 : n2.smartshop.id</li>
                    </ul>
                  </div>
                </div>
                <div className="mb-5">
                  <label className="block text-body-dark font-semibold text-sm leading-none mb-2">
                    Sub Domain
                  </label>
                  <div className="relative">
                    <div className="relative flex items-center">
                      <input
                        readOnly
                        value="https://"
                        type="text"
                        className="bg-slate-200 rounded-r-none pointer-events-none block w-1/3 px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-r-0 border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      <input
                        onChange={handleInputChange}
                        value={formData.slug?.toString()}
                        name="slug"
                        id="shop_sub_domain"
                        type="text"
                        placeholder="Sub Domain"
                        className="border-l-0 border-r-0 rounded-l-none rounded-r-none block w-full px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 bg-white border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                      <input
                        value=".smartcommerce.id"
                        type="text"
                        className="bg-slate-200 rounded-l-none  border-l-0 pointer-events-none block w-2/3 px-2 py-3 mt-2 text-gray-700 placeholder-gray-400 border border-gray-200 rounded-md dark:placeholder-gray-600 dark:bg-gray-900 dark:text-gray-300 dark:border-gray-700 focus:border-blue-400 dark:focus:border-blue-400 focus:ring-blue-400 focus:outline-none focus:ring focus:ring-opacity-40"
                      />
                    </div>
                  </div>
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
                        data-headlessui-state="">
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
                        <div className="flex items-center text-body space-s-4">
                          <span className="flex h-4 w-4 items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 12 12"
                              className="w-4 h-4">
                              <path
                                data-name="_ionicons_svg_logo-facebook (6)"
                                d="M11.338 0H.662A.663.663 0 000 .663v10.674a.663.663 0 00.662.662H6V7.25H4.566V5.5H6V4.206a2.28 2.28 0 012.459-2.394c.662 0 1.375.05 1.541.072V3.5H8.9c-.753 0-.9.356-.9.881V5.5h1.794L9.56 7.25H8V12h3.338a.663.663 0 00.662-.663V.662A.663.663 0 0011.338 0z"
                                fill="currentColor"></path>
                            </svg>
                          </span>
                          <span className="ml-2">Facebook</span>
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="contactDetails.socials.0.url"
                          className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                          Add profile url
                        </label>
                        <input
                          id="contactDetails.socials.0.url"
                          name="contactDetails.socials.0.url"
                          type="text"
                          className="px-4 backdrop:flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
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
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4">
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
                        <div className="flex items-center text-body space-s-4">
                          <span className="flex h-4 w-4 items-center justify-center">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 14.747 12"
                              className="w-4 h-4">
                              <path
                                data-name="_ionicons_svg_logo-twitter (5)"
                                d="M14.747 1.422a6.117 6.117 0 01-1.737.478A3.036 3.036 0 0014.341.225a6.012 6.012 0 01-1.922.734 3.025 3.025 0 00-5.234 2.069 2.962 2.962 0 00.078.691A8.574 8.574 0 011.026.553a3.032 3.032 0 00.941 4.044 2.955 2.955 0 01-1.375-.378v.037A3.028 3.028 0 003.02 7.225a3.046 3.046 0 01-.8.106 2.854 2.854 0 01-.569-.056 3.03 3.03 0 002.828 2.1 6.066 6.066 0 01-3.759 1.3 6.135 6.135 0 01-.722-.044A8.457 8.457 0 004.631 12a8.557 8.557 0 008.616-8.619c0-.131 0-.262-.009-.391a6.159 6.159 0 001.509-1.568z"
                                fill="currentColor"></path>
                            </svg>
                          </span>
                          <span className="ml-2">Twitter</span>
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="contactDetails.socials.1.url"
                          className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                          Add profile url
                        </label>
                        <input
                          id="contactDetails.socials.1.url"
                          name="contactDetails.socials.1.url"
                          type="text"
                          className="px-4 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
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
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4">
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
                          <div className="flex items-center text-body space-s-4">
                            <span className="flex h-4 w-4 items-center justify-center">
                              <svg
                                data-name="Group 96"
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 12 12"
                                className="w-4 h-4">
                                <path
                                  data-name="Path 1"
                                  d="M8.5 1A2.507 2.507 0 0111 3.5v5A2.507 2.507 0 018.5 11h-5A2.507 2.507 0 011 8.5v-5A2.507 2.507 0 013.5 1h5m0-1h-5A3.51 3.51 0 000 3.5v5A3.51 3.51 0 003.5 12h5A3.51 3.51 0 0012 8.5v-5A3.51 3.51 0 008.5 0z"
                                  fill="currentColor"></path>
                                <path
                                  data-name="Path 2"
                                  d="M9.25 3.5a.75.75 0 11.75-.75.748.748 0 01-.75.75zM6 4a2 2 0 11-2 2 2 2 0 012-2m0-1a3 3 0 103 3 3 3 0 00-3-3z"
                                  fill="currentColor"></path>
                              </svg>
                            </span>
                            <span className="ml-2">Instagram</span>
                          </div>
                        </div>
                      </div>
                      <div className="sm:col-span-2">
                        <label
                          htmlFor="contactDetails.socials.2.url"
                          className="mb-3 block text-sm font-semibold leading-none text-body-dark">
                          Add profile url
                        </label>
                        <input
                          id="contactDetails.socials.2.url"
                          name="contactDetails.socials.2.url"
                          type="text"
                          className="px-4 flex items-center w-full rounded appearance-none transition duration-300 ease-in-out text-heading text-sm focus:outline-none focus:ring-0 border border-border-base focus:border-accent h-12 "
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
                        className="text-sm text-red-500 transition-colors duration-200 hover:text-red-700 focus:outline-none sm:col-span-1 sm:mt-4">
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
                <button
                  data-variant="normal"
                  className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12 w-full sm:w-auto"
                  type="button">
                  Add New Social Profile
                </button>
              </div>
            </div>

            <div className="mb-4 text-end flex flex-row gap-2 fixed right-10 bottom-2">
              <Link
                href={"/myshop/store"}
                data-variant="normal"
                className=" text-white inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12">
                Back
              </Link>
              <button
                data-variant="normal"
                className=" text-white inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none rounded outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow focus:ring-1 focus:ring-accent-700 bg-accent text-light border border-transparent hover:bg-accent-hover px-5 py-0 h-12">
                Save Settings
              </button>
            </div>
          </form>
        </div>
        <Toaster />
      </main>
    </>
  );
};

export default MyShopStoreCustom;
