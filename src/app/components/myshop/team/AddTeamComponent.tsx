"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { Editor } from "@tinymce/tinymce-react";
import Switch from "react-switch";
import Image from "next/image";
import { useSession } from "next-auth/react";
import axios from "axios";
import CurrencyInput from "react-currency-input-field";
import Select from "react-tailwindcss-select";
import toast from "react-hot-toast";
import { ClipboardEdit } from "lucide-react";
import { SelectValue } from "react-tailwindcss-select/dist/components/type";
import Categories from "@/data/categories.json";
import RegisterComponent from "@/components/register/RegisterComponent";
import FormAddTeam from "./FormAddTeam";

interface ModalProps {
  isOpen: boolean;
  isUpdate?: boolean;
  closeModal: () => void;
}
const AddTeamComponent: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  isUpdate,
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
  const [suppliers, setSuppliers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        const headers = {
          Authorization: `Bearer ${session?.bearer}`,
          "Content-Type": "multipart/form-data", // Use 'multipart/form-data' for FormData
        };
        const response = await axios.get(
          `${process.env.SERVER_ENDPOINT}/api/supplier-board/suppliers`,
          { headers }
        );
        setSuppliers(response.data);
      }, 9000);
    };
    fetchData();
  }, [session?.bearer]);
  // console.log(suppliers);
  const [valSupp, setValSupp] = useState(null);
  const [valSuppG, setValSuppG] = useState(null);
  const selectOptionsSupplier = suppliers.map((item: any) => ({
    value: item.id,
    label: item.supplier_name,
  }));
  const handleChangeSupplier = (value: any) => {
    setValSupp(value);
    setValSuppG(value.value);
  };
  /** end of get supplier  */

  /** get categories */
  const [categories, setCategories] = useState(Categories);
  useEffect(() => {
    setCategories(Categories);
    // const fetchData = async () => {
    //   setTimeout(async () => {
    //     const response = await axios.get(`Categories`);
    //     setCategories(response.data);
    //   }, 9000);
    // };
    // fetchData();
  }, []);

  const selectOptions = categories.map((item: any) => ({
    value: item.id,
    label: item.name,
  }));
  const [valCat, setValCat] = useState<any | null>(null);
  const [valCatG, setValCatG] = useState(null);
  const handleChangeCategory = (value: any) => {
    setValCat(value);
    setValCatG(value.value);
  };

  // console.log(categories);

  /* end of get categories */

  const [selectedImages, setSelectedImages] = useState<string[]>([]);
  const [selectedFiles, setSelectedFiles] = useState<FileList>();
  const [title, setTitle] = useState("");
  const [isNew, setIsNew] = useState(1);
  const [description, setDescription] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [weight, setWeight] = useState(0);
  const [slug, setSlug] = useState("");
  const [barcode, setBarcode] = useState("");
  const [salePrice, setSalePrice] = useState(0);
  const [errMessage, setErrMessage]: any = useState<string[]>([]);

  const clearState = () => {
    setSelectedImages([]);
    setTitle("");
    setIsNew(1);
    setDescription("");
    setSku("");
    setPrice(0);
    setQuantity(0);
    setWeight(0);
    setSlug("");
    setBarcode("");
    setSalePrice(0);
    setErrMessage([]);
  };

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

  const [type, setType] = useState(0);
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
    formData.append("description", description);
    formData.append("sku", sku);
    formData.append("price", price?.toString());
    formData.append("quantity", quantity?.toString());
    formData.append("weight", weight?.toString());
    formData.append("slug", slug);
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
        `${process.env.SERVER_ENDPOINT}/api/supplier-board/product/store`,
        formData,
        { headers }
      )
      .then((response) => {
        toast.dismiss();
        if (response.status == 200) {
          toast.success("Product created successfully");
          clearState();
          closeModal();
        }
        if (response.status == 201) {
          setLoading(false);
          setErrMessage(response.data?.message.error);
          console.log(response.data?.message.error);
        }
        console.log("Response:", response);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  if (!isOpen) return null;

  return (
    <>
      <div tabIndex={-1} className="drawer drawer-right drawer-open bg-white">
        <div className="fixed inset-0 bg-black opacity-50"></div>
        <div className="drawer-content-wrapper w-5/6 ">
          <div className="drawer-content ">
            <button
              onClick={closeModal}
              className="fixed focus:outline-none z-10 text-red-500 hover:bg-red-100 hover:text-gray-700 transition-colors duration-150 bg-white shadow-md mr-6 mt-6 right-0 left-auto w-10 h-10 rounded-full block text-center"
            >
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
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            </button>
            <div className="fixed flex flex-col w-full h-full justify-between bg-white">
              <div className="w-full relative p-6 border-b border-gray-100 bg-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-300">
                <div className="flex md:flex-row flex-col justify-between mr-20">
                  <div>
                    <h4 className="text-xl font-medium dark:text-gray-300">
                      Add Team
                    </h4>
                    <p className="mb-0 text-sm dark:text-gray-300">
                      Add new Team
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-white relative overflow-hidden h-full track-horizontal thumb-horizontal w-full dark:bg-gray-700 dark:text-gray-200">
                <div className="absolute inset-0 overflow-y-scroll mr-[-17px] mb-[-17px]">
                  <div className="block" id="block">
                    <div className="p-4 md:p-2">
                      <FormAddTeam closeModal={closeModal} />
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

export default AddTeamComponent;
