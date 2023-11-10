"use client";
import ProductList from "@/app/components/myshop/products/ProductList";
import { useShopData } from "@/app/components/shop/ShopContext";
import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWR from "swr";
import { Products } from "../../../../type";
import AddProductComponent from "../AddProductComponent";
import { useState } from "react";

const CatalogProductSupplier = () => {
  const shopData = useShopData();
  const { data: session } = useSession();

  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${session?.bearer}`,
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  const url = `${process.env.SERVER_ENDPOINT}/api/supplier-board/product`;
  const {
    data: products,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="relative bg-white w-full h-full z-50">
        <AddProductComponent isOpen={isModalOpen} closeModal={closeModal} />
      </div>
      <div className="flex flex-col gap-2 bg-white p-6">
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
              id="City"
              className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700"
            >
              <option className="dark:text-slate-700">Vendor</option>
              <option className="dark:text-slate-700">Vendor-2</option>
              <option className="dark:text-slate-700">Vendor-3</option>
            </select>
          </div>
          <div className="ms-auto">
            <form>
              <div className="relative z-0">
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
                    strokeLinejoin="round"
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
            <button
              onClick={() => {
                openModal();
              }}
              className="bg-sky-400 inline-block focus:outline-none bg-brand-500 mt-1 text-white hover:bg-brand-600 hover:text-white  text-md font-medium py-2 px-4 rounded"
            >
              Add product
            </button>
          </div>
        </div>
        <hr className="mb-2" />
        <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
          {products ? (
            products.data.map((product: Products) => (
              <ProductList key={product.id} item={product} />
            ))
          ) : (
            <div>Loading....</div>
          )}
        </div>
      </div>
    </>
  );
};

export default CatalogProductSupplier;
