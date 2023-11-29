"use client";
import useSWR from "swr";
import { useShopData } from "../../shop/ShopContext";
import { useSession } from "next-auth/react";
import Products from "../../Products";
import MyProductList from "./MyProductList";
import { Supplier } from "../../../../../adminType";
import { Category, Product, ShopProduct } from "../../../../../type";

const MyProductComponent = () => {
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
  const url =
    process.env.SERVER_ENDPOINT +
    "/api/myshop-board/products/myproducts/" +
    shopData?.id;
  const {
    data: productsData,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

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
  console.log(productsData);
  return (
    <div className="flex flex-col gap-2 bg-white pb-20 md:pb-0 p-4 md:p-6">
      <div
        className="mb-4 border-b border-gray-200 dark:border-slate-700"
        data-fc-type="tab">
        <ul
          className="flex flex-wrap -mb-px text-sm font-medium text-center"
          aria-label="Tabs">
          <li className="me-2" role="presentation">
            <button
              className="inline-block p-4 rounded-t-lg border-b-2 active "
              id="all-tab"
              data-fc-target="#all"
              type="button"
              role="tab"
              aria-controls="all"
              aria-selected="false">
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
              aria-selected="false">
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
              aria-selected="false">
              Drafts <span className="text-slate-400">(25)</span>
            </button>
          </li>
        </ul>
      </div>
      <div className="flex flex-wrap gap-4 mb-3">
        <div className="mb-2 w-44">
          <select
            id="Category"
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
        <div className="mb-2 w-36">
          <select
            id="City"
            className="w-full rounded-md mt-1 border border-slate-300/60 dark:border-slate-700 dark:text-slate-300 bg-transparent px-3 py-2 focus:outline-none focus:ring-0 placeholder:text-slate-400/70 placeholder:font-normal placeholder:text-sm hover:border-slate-400 focus:border-primary-500 dark:focus:border-primary-500  dark:hover:border-slate-700">
            <option selected className="dark:text-slate-700">
              City
            </option>
            {suppliers &&
              suppliers.map((item: Supplier) => (
                <option
                  value={item.id}
                  key={item.id}
                  className="dark:text-slate-700">
                  {item.city_name}
                </option>
              ))}
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
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-4 ">
        {isLoading ? (
          <div className="flex flex-row justify-center items-center">
            <span className="loading loading-dots loading-lg"></span>
          </div>
        ) : productsData?.length > 0 ? (
          productsData.map((product: ShopProduct) => (
            <MyProductList key={product.id} item={product} />
          ))
        ) : (
          <div className="flex flex-row justify-center items-center">
            <span className="">No Data</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default MyProductComponent;
