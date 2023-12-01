"use client";
import { useSession } from "next-auth/react";
import Image from "next/image";
import useSWR from "swr";
import ProductList from "./ProductList";
import { Category, Product, Products, ShopData } from "../../../../../type";
import { useShopData } from "../../shop/ShopContext";
import { Supplier } from "../../../../../adminType";
import { useState } from "react";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import FormattedPrice from "../../FormattedPrice";
import Link from "next/link";
import UpdateProductComponent from "@/components/supplier/UpdateProductComponent";
import { Toaster } from "react-hot-toast";
import { calculatePercentage } from "@/app/helpers";
import { usePathname } from "next/navigation";
import { IoIosStar } from "react-icons/io";
import ProductModal from "./ProductModal";
import ProductModalGlobal from "./ProductModalGlobal";

const ProductAvailableGlobalComp = ({ shop }: { shop: ShopData }) => {
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [open, setOpen] = useState(false);
  const [isListed, setIsListed] = useState(false);

  const [selectedCity, setSelectedCity] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string>("");

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
  const url = process.env.SERVER_ENDPOINT + "/api/myshop-board/products/";
  const {
    data: products,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  const starArray = Array.from({ length: products?.rating }, (_, index) => (
    <span key={index} className=" text-yellow-400">
      <IoIosStar />
    </span>
  ));
  /** Start Supplier */
  const urlSupplier =
    process.env.SERVER_ENDPOINT + "/api/supplier/list/general";
  const { data: suppliers } = useSWR(urlSupplier, fetcher, {
    refreshInterval: 3000,
  });
  /** end of supplier */

  /** Start Categories */
  const urlCategory =
    process.env.SERVER_ENDPOINT + "/api/products/categories/list";
  const { data: categories } = useSWR(urlCategory, fetcher, {
    refreshInterval: 3000,
  });
  /** end of category */
  // console.log(selectedCity);
  const [productItem, setProductItem] = useState<Product | undefined | null>(
    undefined
  );
  const addToShop = (productItem: any) => {
    setProductItem(productItem);
  };
  const resetProduct = () => {
    setProductItem(null);
  };

  return (
    <>
      {productItem && (
        <ProductModalGlobal
          product={productItem}
          onReset={resetProduct}
          shops={shop}
        />
      )}
      <Tabs focusTabOnClick={true} className="flex flex-col gap-2 bg-white p-6">
        <div
          className="mb-4 border-b border-gray-200 dark:border-slate-700"
          data-fc-type="tab">
          <TabList
            className="flex flex-wrap -mb-px text-sm font-medium text-center"
            aria-label="Tabs">
            <Tab className="me-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 active "
                id="all-tab"
                data-fc-target="#all"
                type="button"
                role="tab"
                aria-controls="all"
                aria-selected="false">
                All <span className="text-slate-400">(0)</span>
              </button>
            </Tab>
            <Tab className="me-2" role="presentation">
              <button
                className="inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="published-tab"
                data-fc-target="#published"
                type="button"
                role="tab"
                aria-controls="published"
                aria-selected="false">
                Published <span className="text-slate-400">(0)</span>
              </button>
            </Tab>
            <Tab className="me-2" role="presentation">
              <button
                className=" inline-block p-4 rounded-t-lg border-b-2 border-transparent hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                id="drafts-tab"
                data-fc-target="#drafts"
                type="button"
                role="tab"
                aria-controls="drafts"
                aria-selected="false">
                Drafts <span className="text-slate-400">(0)</span>
              </button>
            </Tab>
          </TabList>
        </div>
        <div className="flex flex-wrap gap-4 mb-3">
          <div className="mb-2 w-44">
            <select
              id="Category"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700">
              <option className="dark:text-slate-700">All Category</option>
              {/* categories */}
              {categories
                ? categories.map((item: Category) => (
                    <option
                      key={item.id}
                      value={item.id}
                      className="dark:text-slate-700">
                      {item.name}
                    </option>
                  ))
                : null}
            </select>
          </div>
          <div className="mb-2 w-44 flex flex-row gap-2">
            <select
              id="City"
              value={selectedCity || ""}
              onChange={(e) => setSelectedCity(e.target.value)}
              className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700">
              <option selected className="dark:text-slate-700">
                City
              </option>
              {suppliers &&
                suppliers.map((item: Supplier) => (
                  <option
                    value={item.city_id}
                    key={item.id}
                    className="dark:text-slate-700">
                    {item.city_name}
                  </option>
                ))}
            </select>
            <div className="ms-auto">
              <button
                onClick={() => {
                  setSelectedCity("");
                }}
                className="bg-red-600 inline-block focus:outline-none bg-brand-500 mt-1 text-white hover:bg-brand-600 hover:text-white  text-md font-medium py-2 px-4 rounded">
                Reset
              </button>
            </div>
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
                    strokeLinejoin="round"
                    data-lucide="search"
                    className="lucide lucide-search z-[1] w-5 h-5 stroke-slate-400">
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
              Search
            </button>
          </div>
        </div>
        <hr className="mb-2" />
        <TabPanel className="">
          {products ? (
            <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
              {products
                .filter((product: Products) => {
                  if (selectedCity) {
                    return product.supplier.city_id.toString() === selectedCity;
                  }
                  return true; // If no city is selected, show all products
                })
                .map((product: Products) => (
                  <div className="" key={product.id}>
                    <div className="w-full rounded-lg overflow-hidden">
                      <div className={`${isListed ? "hidden" : "block"}`}>
                        <Link
                          href={{
                            pathname: "/product",
                            query: { id: product?.id, image: product?.image },
                          }}>
                          <div className=" w-full h-80 group overflow-hidden relative">
                            {product?.product_gallery?.length > 0 ? (
                              <Image
                                src={`${process.env.SERVER_ENDPOINT}${product.product_gallery[0].url}`}
                                alt="Product image"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
                              />
                            ) : (
                              <Image
                                src={`/images/no_image.png`}
                                alt="Product image"
                                width={500}
                                height={500}
                                className="w-full h-full object-cover group-hover:scale-110 duration-200 rounded-t-lg"
                              />
                            )}
                            {product?.isNew && (
                              <span className=" absolute top-2 right-2 font-medium text-xs py-1 px-3 rounded-full group-hover:bg-sky-500 group-hover:text-white bg-white duration-200">
                                New Arrival
                              </span>
                            )}
                          </div>
                        </Link>
                        <div className="border-[1px] border-slate-300 border-t-0 py-4 px-2 flex flex-col gap-y-2 bg-white rounded-b-lg">
                          <Link
                            href={{
                              pathname: "/product",
                              query: { id: product?.id, image: product?.image },
                            }}>
                            <p className="cursor-pointer hover:text-sky-600 font-semibold truncate">
                              {product?.title}
                            </p>
                            <p className="cursor-pointer hover:text-sky-600">
                              City : {product?.supplier.city_name}
                            </p>
                          </Link>
                          <div className=" flex items-center justify-between">
                            <div className=" border-[1px] border-sky-500 py-1 px-4 rounded-full text-xs">
                              <p>
                                {calculatePercentage(
                                  product?.price,
                                  product?.oldPrice
                                )}
                                % off
                              </p>
                            </div>

                            <div className=" flex items-center gap-x-2">
                              <p className="text-slate-500 line-through text-sm">
                                <FormattedPrice amount={product.oldPrice} />
                              </p>
                              <p className=" font-semibold">
                                <FormattedPrice amount={product?.price} />
                              </p>
                            </div>
                          </div>
                          <div className="flex flex-row items-center justify-between">
                            {/* Add to cart */}
                            <div className="flex flex-row justify-start gap-2">
                              <div className="flex flex-row gap-2 w-full h-full bg-white relative z-20">
                                {pathname.startsWith("/supplier") ? (
                                  <div className=" relative z-10">
                                    {/* <UpdateProductComponent
                                      buttonText={"Update"}
                                      isOpen={isModalOpen}
                                      closeModal={closeModal}
                                      openModal={openModal}
                                      itemProducts={item as Product}
                                    /> */}
                                  </div>
                                ) : (
                                  <>
                                    {/* <ProductModal product={item} /> */}
                                    <Link
                                      href={`/myshop/product/detail/${product.id}`}
                                      className=" bg-green-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200">
                                      Detail
                                    </Link>
                                    <button
                                      onClick={() => {
                                        addToShop(product);
                                      }}
                                      className="bg-sky-500 py-2 px-4 rounded-lg text-sm tracking-wide text-slate-100 hover:bg-sky-600 hover:text-white duration-200">
                                      Add To Shop
                                    </button>
                                  </>
                                )}
                              </div>
                            </div>
                            {/* Star Icons */}
                            <div className=" flex items-center">
                              {starArray}
                            </div>
                          </div>
                        </div>
                      </div>
                      <Toaster />
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <div className="flex items-center justify-center">
              <div>
                <span className="loading loading-infinity loading-lg"></span>
              </div>
            </div>
          )}
        </TabPanel>
        <TabPanel>
          <div className="">tab 2</div>
        </TabPanel>
      </Tabs>
    </>
  );
};

export default ProductAvailableGlobalComp;
