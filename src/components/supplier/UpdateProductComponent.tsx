"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Switch from "react-switch";
import { Product, ProductGallery, SupplierData } from "../../../type";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";
import Select from "react-tailwindcss-select";
import toast from "react-hot-toast";
import { ClipboardEdit } from "lucide-react";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";
import useSWR from "swr";
import Swal from "sweetalert2";
import ReactQuill from "react-quill";

interface ModalProps {
  isOpen: boolean;
  // suppliers?: SupplierData;
  buttonText?: string;
  itemProducts: Product;
  closeModal: () => void;
  openModal?: () => void;
}
const UpdateProductComponent: React.FC<ModalProps> = ({
  openModal,
  isOpen,
  closeModal,
  itemProducts,
  buttonText,
  // suppliers,
}) => {
  const [loading, setLoading] = useState(false);
  const { data: session } = useSession();
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const handleDivClick = () => {
    // Trigger a click event on the file input
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  /*
  get Supplier 
  */

  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

  const url = `${process.env.SERVER_ENDPOINT}/api/supplier-board/suppliers`;
  const { data: suppliers } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const [valSupp, setValSupp] = useState<any | null>(null);
  const [valSuppG, setValSuppG] = useState<any | null>(null);
  const selectOptionsSupplier = suppliers?.map((item: any) => ({
    value: item.id,
    label: item.supplier_name,
  }));
  const handleChangeSupplier = (value: any) => {
    setValSupp(value);
    setValSuppG(value.value);
  };

  // const [suppliers, setSuppliers] = useState([]);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     setTimeout(async () => {
  //       const headers = {
  //         Authorization: `Bearer ${session?.bearer}`,
  //         "Content-Type": "multipart/form-data", // Use 'multipart/form-data' for FormData
  //       };
  //       const response = await axios.get(
  //         `${process.env.SERVER_ENDPOINT}/api/supplier-board/suppliers`,
  //         { headers }
  //       );
  //       setSuppliers(response.data);
  //     }, 9000);
  //   };
  //   fetchData();
  // }, [session?.bearer]);
  // // console.log(suppliers);
  // const [valSupp, setValSupp] = useState<any | null>(null);
  // const [valSuppG, setValSuppG] = useState<any | null>(null);
  // const selectOptionsSupplier = suppliers.map((item: any) => ({
  //   value: item.id,
  //   label: item.supplier_name,
  // }));
  // const handleChangeSupplier = (value: any) => {
  //   setValSupp(value);
  //   setValSuppG(value.value);
  // };
  /** end of get supplier  */

  /** get categories */
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const response = await axios.get(
          `${process.env.SERVER_ENDPOINT}/api/products/categories/list`
        );
        setCategories(response.data);
      }, 9000);
    };
    fetchData();
  }, []);

  const selectOptions = categories.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
  const [valCat, setValCat] = useState<any | null>(null);
  const [valCatG, setValCatG] = useState<any | null>(null);
  const handleChangeCategory = (value: any) => {
    setValCat(value);
    setValCatG(value.value);
  };

  // console.log(categories);

  /* end of get categories */
  const product = itemProducts as Product;
  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<FileList>();
  const [title, setTitle] = useState(product.title);
  const [isNew, setIsNew] = useState(product.isNew);
  const [description, setDescription] = useState(product.description);
  const [sku, setSku] = useState(product.sku);
  const [price, setPrice] = useState(product.price);
  const [quantity, setQuantity] = useState(product.quantity);
  const [weight, setWeight] = useState(product.weight);
  const [slug, setSlug] = useState(product.slug);
  const [barcode, setBarcode] = useState("");
  const [salePrice, setSalePrice] = useState(product.company_price);
  const [errMessage, setErrMessage]: any = useState<string[]>([]);
  const [content, setContent] = useState(product.description);
  const [publish, setPublish] = useState(product.isPublish);

  useEffect(() => {
    setValCat({
      value: product?.category?.id,
      label: product?.category?.name,
      disabled: false,
    });
    setValCatG(product?.category?.id);
    setValSupp({
      value: product?.supplier?.id,
      label: product?.supplier?.supplier_name,
      disabled: false,
    });
    setValSuppG(product?.supplier?.id);
  }, [
    product?.category?.id,
    product?.category?.name,
    product?.supplier?.id,
    product?.supplier?.supplier_name,
  ]);

  const handleSalePrice = (e: Number) => {
    setPrice(Number(e));
    setSalePrice(Number(e) + Number(e) * 0.1);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const newImages: string[] = [];
      for (let i = 0; i < e.target.files.length; i++) {
        if (selectedImages.length >= 5) {
          // Limit to a maximum of 5 images
          break;
        }
        const selectedFile = e.target.files[i];
        const imageUrl = URL.createObjectURL(selectedFile);
        newImages.push(imageUrl);
      }

      setSelectedFiles(e.target.files);
      setSelectedImages([...selectedImages, ...newImages]);
    }
  };

  const removeSelectedImage = (index: number) => {
    const updatedImages = [...selectedImages];
    updatedImages.splice(index, 1);
    setSelectedImages(updatedImages);
  };

  const [checked, setChecked] = useState(false);
  const toggleChecked = () => {
    setChecked(!checked);
  };

  const handleAmountWeight = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleanedValue = inputValue.replace(/^0+/, ""); // Remove leading zeros
    setWeight(Number(cleanedValue));
  };
  const handleAmountQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value;
    const cleanedValue = inputValue.replace(/^0+/, ""); // Remove leading zeros
    setQuantity(Number(cleanedValue));
  };

  const [open, setOpen] = useState(false);
  const [type, setType] = useState(product?.isNew);

  const handleSubmit = async (e: React.FormEvent) => {
    setLoading(true);
    toast.loading("Loading...");
    e.preventDefault();
    const formData = new FormData();
    if (selectedFiles) {
      for (let i = 0; i < selectedFiles.length; i++) {
        formData.append("images[]", selectedFiles[i]);
      }
    }
    formData.append("title", title);
    formData.append("isNew", type.toString());
    formData.append("description", content);
    formData.append("sku", sku);
    formData.append("price", price?.toString());
    formData.append("quantity", quantity?.toString());
    formData.append("weight", weight?.toString());
    formData.append("slug", slug);
    formData.append("isPublish", publish.toString());
    if (valSuppG !== null) {
      formData.append("supplier_id", valSuppG as string);
    }
    if (valCatG !== null) {
      formData.append("category", valCatG as string);
    }
    const headers = {
      Authorization: `Bearer ${session?.bearer}`,
      "Content-Type": "multipart/form-data", // Use 'multipart/form-data' for FormData
    };
    axios
      .post(
        `${process.env.SERVER_ENDPOINT}/api/supplier-board/product/update/${product.id}`,
        formData,
        { headers }
      )
      .then((response) => {
        toast.dismiss();
        if (response.status == 200) {
          toast.success("Product created successfully");
          setOpen(false);
        }
        if (response.status == 201) {
          setLoading(false);
          setErrMessage(response.data?.message.error);
          console.log(response.data?.message.error);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const galleries = product.product_gallery;

  const subDelGallery = async (itemId?: number, act?: string) => {
    const swalWithBootstrapButtons = Swal.mixin({
      customClass: {
        confirmButton:
          "bg-darkText mr-2 ml-2 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200",
        cancelButton:
          "bg-darkText hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring focus:ring-blue-200 ",
      },
      buttonsStyling: false,
    });

    swalWithBootstrapButtons
      .fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes, delete it!",
        cancelButtonText: "No, cancel!",
        reverseButtons: true,
      })
      .then((result) => {
        if (result.isConfirmed) {
          toast.loading("loading...");
          if (act == "del") {
            axios
              .delete(
                `${process.env.SERVER_ENDPOINT}/api/supplier-board/product/gallery/delete/${itemId}`,
                {
                  headers: {
                    Authorization: `Bearer ${session?.bearer}`,
                    "Content-Type": "multipart/form-data",
                  },
                }
              )
              .then((response) => {
                toast.dismiss();
                if (response.status == 200) {
                  toast.success("Image deleted successfully", {
                    duration: 6000,
                  });
                } else {
                  toast.error("Fail !");
                }
              });
          } else {
          }
        }
      });
  };
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline"],
      ["blockquote", "code-block"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "blockquote",
    "code-block",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];
  const handleEditorChange = (content: string, editor: any) => {
    setContent(content);
  };
  if (!open)
    return (
      <>
        {/* bg-green-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200 */}
        {buttonText ? (
          <button
            onClick={() => {
              setOpen(true);
            }}
            className={` bg-sky-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200`}>
            Update
          </button>
        ) : (
          <button
            onClick={() => {
              setOpen(true);
            }}
            className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none ">
            <p data-tip="true" data-for="edit" className="text-xl">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
              </svg>
            </p>
          </button>
        )}
        {/* <button
          onClick={() => {
            setOpen(true);
          }}
          className="p-2 cursor-pointer text-gray-400 hover:text-emerald-600 focus:outline-none relative z-0"
        >
          <p data-tip="true" data-for="edit" className="text-xl">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              strokeLinecap="round"
              strokeLinejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
            </svg>
          </p>
        </button> */}
      </>
    );
  return (
    <>
      <div
        tabIndex={-1}
        className="fixed drawer drawer-right drawer-open bg-white z-30">
        <div className="fixed inset-0 bg-black opacity-50 z-50"></div>
        <div className="drawer-content-wrapper w-5/6 relative z-50">
          <div className="drawer-content">
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="fixed top-16 focus:outline-none z-10 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center">
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="2"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="mx-auto"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="fixed top-16 right-0 flex flex-col w-full h-full md:w-4/5  bg-white">
              <div className="w-full relative top-0 p-6 border-b border-gray-100 bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <div className="flex md:flex-row flex-col justify-between mr-20">
                  <div>
                    <h4 className="text-xl font-medium dark:text-gray-300">
                      Update Product
                    </h4>
                    <p className="mb-0 text-sm dark:text-gray-300">
                      Update products info, combinations and extras.
                    </p>
                  </div>
                  {/* <select
                    name="language"
                    className="block w-20 h-10 border border-emerald-400 bg-gray-100 dark:bg-gray-700 px-2 py-1 text-sm dark:text-gray-300 focus:outline-none rounded-md form-select focus:bg-white dark:focus:bg-gray-700">
                    <option value="en">en</option>
                    <option value="bn">bn </option>
                    <option value="de">de </option>
                    <option value="en">en </option>
                  </select> */}
                </div>
              </div>
              <div className="bg-white text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-600 dark:bg-gray-700">
                <div className="mb-3 flex flex-wrap justify-end items-center mr-8 h-2">
                  <div className="flex flex-wrap items-center mt-4">
                    <label className="block text-base font-normal text-orange-500 dark:text-orange-400 mx-4">
                      Have variants?
                    </label>
                    <div className="react-switch md:ml-0 ml-3 relative inline-block text-left  direction-ltr rounded-15 ease-in-out touch-none select-none">
                      <Switch
                        onChange={() => {
                          toggleChecked();
                        }}
                        checked={checked == true}
                      />
                    </div>
                  </div>
                </div>

                <ul className="flex flex-wrap -mb-px">
                  <li className="mr-2">
                    <button
                      className="inline-block px-4 py-2 text-base text-emerald-600 border-emerald-600 dark:text-emerald-500 dark:border-emerald-500 rounded-t-lg border-b-2 focus:outline-none"
                      aria-current="page">
                      Basic Info
                    </button>
                  </li>
                  <li className="mr-2 hidden">
                    <button
                      className="inline-block px-4 py-2 text-base false focus:outline-none"
                      aria-current="page">
                      Combination
                    </button>
                  </li>
                </ul>
              </div>
              <div className="bg-white relative  z-50 overflow-hidden h-full track-horizontal thumb-horizontal w-full dark:bg-gray-700 dark:text-gray-200">
                <div className="absolute inset-0 overflow-y-scroll mr-[-17px] mb-[-17px]">
                  <form className="block" id="block" onSubmit={handleSubmit}>
                    <div className="px-6 pt-8 flex-grow w-full  h-full max-h-full pb-56 md:pb-56 lg:pb-56 xl:pb-56">
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                          Status
                        </label>
                        <div className="col-span-8 sm:col-span-4 flex sm:flex-row items-center gap-6">
                          <div className="cursor-pointer flex items-center mb-4 sm:mb-0">
                            <input
                              checked={publish == 0}
                              id="default-radio-1"
                              type="radio"
                              value={1}
                              onChange={(e) => {
                                setPublish(0);
                              }}
                              name="draft_status"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="default-radio-1"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                              Draft
                            </label>
                          </div>
                          <div className="cursor-pointer flex items-center">
                            <input
                              onChange={(e) => {
                                setPublish(1);
                              }}
                              checked={publish == 1}
                              id="default-radio-2"
                              type="radio"
                              value={0}
                              name="draft_status"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="default-radio-2"
                              className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300 cursor-pointer">
                              Publish
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Title/Name
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <input
                            required
                            value={title || ""}
                            onChange={(e) => {
                              setTitle(e.target.value);
                            }}
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700"
                            type="text"
                            name="title"
                            placeholder="Product Title/Name"
                          />
                          {errMessage?.title ? (
                            <p className="text-red-400 text-sm">
                              Required title
                            </p>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm items-center">
                          Product Description
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <ReactQuill
                            className="h-auto"
                            value={content}
                            onChange={handleEditorChange}
                            modules={modules}
                            formats={formats}
                          />
                          {/* <textarea
                            value={description}
                            onChange={(e) => {
                              setDescription(e.target.value);
                            }}
                            className="block bg-gray-100 focus:bg-white dark:text-gray-300 rounded-md focus:outline-none p-3 board dark:border-gray-600 dark:focus:border-gray-600 dark:bg-gray-700 text-sm  w-full  border-gray-200"
                            name="description"
                            placeholder="Product Description"
                            spellCheck="false"></textarea>
                          {errMessage?.description ? (
                            <p className="text-red-400 text-sm">
                              Required description
                            </p>
                          ) : (
                            ""
                          )} */}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm items-center">
                          Product Images
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="w-full text-center">
                            <div
                              onClick={handleDivClick}
                              className="border-2 border-gray-300 dark:border-gray-600 border-dashed rounded-md cursor-pointer px-6 pt-5 pb-6"
                              role="presentation"
                              tabIndex={0}>
                              <input
                                ref={fileInputRef}
                                className="hidden"
                                onChange={handleFileChange}
                                accept="image/*,.jpeg,.jpg,.png,.webp"
                                multiple
                                type="file"
                                tabIndex={-1}
                              />
                              <span className="mx-auto flex justify-center">
                                <svg
                                  stroke="currentColor"
                                  fill="none"
                                  strokeWidth="2"
                                  viewBox="0 0 24 24"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
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
                              {galleries.length > 0
                                ? galleries.map(
                                    (item: ProductGallery, index) => (
                                      <div key={item.id} className="relative">
                                        <Image
                                          width={150}
                                          height={150}
                                          className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2 m-2"
                                          src={`${process.env.SERVER_ENDPOINT}${item.url}`}
                                          alt="product"
                                        />
                                        {index == 0 ? (
                                          <div>
                                            <p className="text-xs absolute py-1 w-full bottom-0 inset-x-0 bg-blue-500 rounded-full text-white text-center ">
                                              Default Image
                                            </p>
                                          </div>
                                        ) : (
                                          ""
                                        )}
                                        <button
                                          onClick={() =>
                                            subDelGallery(item.id, "del")
                                          }
                                          type="button"
                                          className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                          <svg
                                            stroke="currentColor"
                                            fill="none"
                                            strokeWidth="2"
                                            viewBox="0 0 24 24"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            height="1em"
                                            width="1em"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <circle
                                              cx="12"
                                              cy="12"
                                              r="10"></circle>
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
                                    )
                                  )
                                : null}
                              {selectedImages
                                .slice(0, 5)
                                .map((imageUrl, index) => (
                                  <div key={index} className="relative">
                                    <Image
                                      width={150}
                                      height={150}
                                      className="inline-flex border rounded-md border-gray-100 dark:border-gray-600 w-24 max-h-24 p-2 m-2"
                                      src={imageUrl}
                                      alt="product"
                                    />
                                    {index == 0 ? (
                                      <div>
                                        <p className="text-xs absolute py-1 w-full bottom-0 inset-x-0 bg-blue-500 rounded-full text-white text-center ">
                                          Default Image
                                        </p>
                                      </div>
                                    ) : (
                                      ""
                                    )}
                                    <button
                                      onClick={() => removeSelectedImage(index)}
                                      type="button"
                                      className="absolute top-0 right-0 text-red-500 focus:outline-none">
                                      <svg
                                        stroke="currentColor"
                                        fill="none"
                                        strokeWidth="2"
                                        viewBox="0 0 24 24"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
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
                                ))}
                            </aside>
                            {selectedImages.length >= 5 && (
                              <p className="text-sm mt-2 text-red-600">
                                You can only select up to 5 images.
                              </p>
                            )}
                          </div>
                          {errMessage?.images && (
                            <p className="text-sm mt-2 text-red-600">
                              {errMessage?.images}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                          Product Type
                        </label>
                        <div className="col-span-8 sm:col-span-4 flex sm:flex-row items-center gap-6">
                          <div className="cursor-pointer flex items-center mb-4 sm:mb-0">
                            <input
                              checked={type == 1}
                              onChange={() => {
                                setType(true);
                              }}
                              required
                              id="default-new-1"
                              type="radio"
                              value={1}
                              name="type_product"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="default-new-1"
                              className="cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              New
                            </label>
                          </div>
                          <div className="cursor-pointer flex items-center">
                            <input
                              checked={type == 0}
                              onChange={() => {
                                setType(false);
                              }}
                              required
                              id="default-new-2"
                              type="radio"
                              value={0}
                              name="type_product"
                              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label
                              htmlFor="default-new-2"
                              className="cursor-pointer ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
                              Second
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                          Product SKU
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <input
                            onChange={(e) => {
                              setSku(e.target.value);
                            }}
                            value={sku}
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 p-2"
                            type="text"
                            name="sku"
                            placeholder="Product SKU"
                          />
                          {errMessage?.sku && (
                            <p className="text-sm mt-2 text-red-600">
                              {errMessage.sku}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Barcode
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <input
                            onChange={(e) => {
                              setBarcode(e.target.value);
                            }}
                            value={barcode}
                            className="block w-full border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700 mr-2 h-12 p-2"
                            type="text"
                            name="barcode"
                            placeholder="Product Barcode"
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Category
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="mb-2">
                            <div>
                              <Select
                                isSearchable
                                primaryColor={"indigo"}
                                value={valCat as SelectValue}
                                onChange={handleChangeCategory}
                                options={selectOptions}
                              />
                            </div>
                          </div>
                          {errMessage.category && (
                            <p className="text-sm mt-2 text-red-600">
                              {errMessage.category}
                            </p>
                          )}
                        </div>
                      </div>

                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                          Product Price
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="flex flex-row">
                            <span className="inline-flex items-center px-3 rounded rounded-r-none border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm  focus:border-emerald-300 dark:bg-gray-700 dark:text-gray-300 dark:border dark:border-gray-600">
                              Rp
                            </span>
                            <CurrencyInput
                              onValueChange={(e) => {
                                handleSalePrice(Number(e));
                              }}
                              value={price}
                              name="fee"
                              className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:bg-white dark:focus:bg-gray-700 border-gray-400 opacity-50 bg-gray-300 dark:bg-gray-800 mr-2 p-2 rounded-l-none"
                              // intlConfig={{ locale: "id", currency: "IDR" }}
                            />

                            {/* <input
                              onChange={(e) => {
                                setPrice(e.target.value);
                              }}
                              className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:bg-white dark:focus:bg-gray-700 border-gray-400 opacity-50 bg-gray-300 dark:bg-gray-800 mr-2 p-2 rounded-l-none"
                              type="number"
                              name="originalPrice"
                              step="0.01"
                              placeholder="OriginalPrice"
                              defaultValue={0}
                            /> */}
                          </div>
                          {errMessage?.price && (
                            <p className="text-red-400 text-sm">
                              {errMessage?.price}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                          Default Sale Price
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="flex flex-row">
                            <span className="inline-flex items-center px-3 rounded rounded-r-none border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm  focus:border-emerald-300 dark:bg-gray-700 dark:text-gray-300 dark:border dark:border-gray-600">
                              Rp
                            </span>
                            <CurrencyInput
                              disabled
                              placeholder="Sale price"
                              value={salePrice}
                              className="block w-full h-12 px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md focus:bg-white dark:focus:bg-gray-700 border border-gray-400 cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800 mr-2 p-2 rounded-l-none"
                              // intlConfig={{ locale: "id", currency: "IDR" }}
                            />
                            {/* <input
                              className="block w-full h-12 px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 border border-gray-400 cursor-not-allowed opacity-50 bg-gray-300 dark:bg-gray-800 mr-2 p-2 rounded-l-none"
                              type="number"
                              name="price"
                              step="0.01"
                              placeholder="Sale price"
                              value={salePrice}
                              disabled
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative items-center">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                          Product Quantity
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="flex flex-row">
                            <input
                              onChange={handleAmountQuantity}
                              className="block w-full h-12 px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 border border-gray-400 cursor-not-allowed opacity-50  dark:bg-gray-800 mr-2 p-2"
                              type="text"
                              name="stock"
                              placeholder="Product Quantity"
                              value={quantity}
                            />
                          </div>
                          {errMessage.quantity && (
                            <p className="text-sm mt-2 text-red-600">
                              {errMessage.quantity}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 relative items-center">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                          Product Weight (gram)
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="flex flex-row">
                            <input
                              onChange={handleAmountWeight}
                              className="block w-full h-12 px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 border border-gray-400 cursor-not-allowed opacity-50 dark:bg-gray-800 mr-2 p-2"
                              type="text"
                              name="stock"
                              placeholder="Product Quantity"
                              value={weight}
                            />
                          </div>
                          {errMessage.weight && (
                            <p className="text-sm mt-2 text-red-600">
                              {errMessage.weight}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6 items-center">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Supplier Setup
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="mb-2">
                            <div>
                              <Select
                                isSearchable
                                primaryColor={"indigo"}
                                value={valSupp}
                                onChange={handleChangeSupplier}
                                options={selectOptionsSupplier}
                              />
                            </div>
                          </div>
                          {!valSupp && (
                            <p className="text-sm mt-2 text-red-600">
                              Require supplier
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-sm text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium">
                          Product Slug
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <input
                            onChange={(e) => {
                              setSlug(e.target.value);
                            }}
                            className="block w-full h-12 border px-3 py-1 text-sm focus:outline-none dark:text-gray-300 leading-5 rounded-md bg-gray-100 focus:bg-white dark:focus:bg-gray-700 focus:border-gray-200 border-gray-200 dark:border-gray-600 dark:focus:border-gray-500 dark:bg-gray-700  mr-2 p-2"
                            type="text"
                            name="slug"
                            placeholder="Product Slug"
                            value={slug}
                          />
                        </div>
                      </div>
                      <div className="grid grid-cols-6 gap-3 md:gap-5 xl:gap-6 lg:gap-6 mb-6">
                        <label className="block text-gray-800 dark:text-gray-400 col-span-4 sm:col-span-2 font-medium text-sm">
                          Product Tags
                        </label>
                        <div className="col-span-8 sm:col-span-4">
                          <div className="react-tag-input">
                            <input
                              className="react-tag-input__input"
                              placeholder="Product Tag (Write then press enter to add new tag )"
                              value=""
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="fixed z-10 bottom-0 w-full md:w-4/5 right-0 py-4 lg:py-8 px-6 grid gap-4 lg:gap-6 xl:gap-6 md:flex xl:flex bg-gray-50 border-t border-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                      <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <button
                          onClick={() => {
                            setOpen(false);
                          }}
                          className="align-bottom inline-flex justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 text-sm text-gray-600 border-gray-200 border dark:text-gray-400 rounded-lg bg-gray-200  mr-3 items-center h-12 w-full hover:bg-red-50 hover:border-red-100 hover:text-red-600 dark:bg-gray-700 dark:border-gray-700 dark:hover:bg-gray-800 dark:hover:text-red-700"
                          type="button">
                          Cancel
                        </button>
                      </div>
                      <div className="flex-grow-0 md:flex-grow lg:flex-grow xl:flex-grow">
                        <button
                          className="align-bottom inline-flex items-center justify-center cursor-pointer leading-5 transition-colors duration-150 font-medium focus:outline-none px-4 py-2 rounded-lg text-sm text-white bg-emerald-500 border border-transparent active:bg-emerald-600 hover:bg-emerald-600 w-full h-12"
                          type="submit">
                          <span>Update Product</span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
                <div role="tree" className="rc-tree">
                  <div>
                    <input
                      tabIndex={0}
                      aria-label="for screen reader"
                      value=""
                      className="w-0 h-0 flex overflow-hidden opacity-0 border-0 p-0 m-0"
                    />
                  </div>
                  <div className="rc-tree-treenode" aria-hidden="true">
                    <div className="absolute pointer-events-none invisible h-0 overflow-hidden border-0 p-0">
                      <div className="rc-tree-indent">
                        <div className="rc-tree-indent-unit"></div>
                      </div>
                    </div>
                  </div>
                  <div className="rc-tree-list relative hidden">
                    <div className="rc-tree-list-holder">
                      <div>
                        <div className="rc-tree-list-holder-inner flex flex-col">
                          <div
                            className="rc-tree-treenode rc-tree-treenode-switcher-close rc-tree-treenode-leaf-last"
                            draggable="false">
                            <span
                              aria-hidden="true"
                              className="rc-tree-indent"></span>
                            <span className="rc-tree-switcher rc-tree-switcher_close"></span>
                            <span
                              title="Home"
                              className="rc-tree-node-content-wrapper rc-tree-node-content-wrapper-close">
                              <span className="rc-tree-iconEle rc-tree-icon__close"></span>
                              <span className="rc-tree-title">Home_</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="drawer-handle">
            <i className="drawer-handle-icon"></i>
          </div>
        </div>
      </div>
    </>
  );
};

export default UpdateProductComponent;
