"use client";
import { getProducts } from "../helpers";
import Container from "./Container";
import ProductsData from "./ProductsData";
import {
  Category,
  ProductShops,
  Products as ProductType,
  ShopProduct,
} from "../../../type";
import { ChangeEvent, useEffect, useState } from "react";
import { useShopData } from "./shop/ShopContext";
import useSWR from "swr";

const fetcher = (url: any) => fetch(url).then((res) => res.json());
const Products = ({ host }: any) => {
  //const products = await getProducts();
  const shopData = useShopData();
  const domain = host;

  // const [products, setProduct]: any = useState(null);
  const [loading, setLoading] = useState(true);
  // const [shop, setShop]: any = useState("");
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       process.env.SERVER_ENDPOINT + "/api/shop/" + domain
  //     );
  //     const data = await response.json();
  //     setShop(data);
  //   };
  //   fetchData();
  // }, [domain]);
  const [selectedOrder, setSelectedOrder] = useState<string>("");

  const handleColorChange = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedValue = e.target.value;
    setSelectedOrder(selectedValue);
    // You can perform additional actions based on the selected value here
  };
  const urlCategory = `${process.env.SERVER_ENDPOINT}/api/products/categories/list`;
  const { data: prodCategories } = useSWR(urlCategory, fetcher, {
    refreshInterval: 20000,
  });
  const url =
    process.env.SERVER_ENDPOINT +
    "/api/shop/product/" +
    shopData?.id +
    "?order=" +
    selectedOrder;
  const {
    data: productsData,
    isLoading,
    isValidating,
    error,
  } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });
  console.log(prodCategories);
  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch(
  //       process.env.SERVER_ENDPOINT + "/api/shop/product/" + shopData?.id
  //     );
  //     const data = await response.json();
  //     setProduct(data);
  //     setLoading(false);
  //   };
  //   fetchData();
  // }, [shopData?.id]);
  // console.log(domain);
  // console.log(products);
  // console.log(shopData?.id);
  return (
    <>
      <div className="">
        <div className="flex justify-between items-center mb-4 px-4">
          <div className="drawer z-50">
            <input id="my-drawer" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
              {/* Page content here */}
              <label
                htmlFor="my-drawer"
                className="btn drawer-button text-white bg-slate-500">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18px"
                  height="14px"
                  viewBox="0 0 18 14">
                  <g
                    id="Group_36196"
                    data-name="Group 36196"
                    transform="translate(-925 -1122.489)">
                    <path
                      id="Path_22590"
                      data-name="Path 22590"
                      d="M942.581,1295.564H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1295.564,942.581,1295.564Z"
                      transform="translate(0 -169.575)"
                      fill="currentColor"></path>
                    <path
                      id="Path_22591"
                      data-name="Path 22591"
                      d="M942.581,1951.5H925.419c-.231,0-.419-.336-.419-.75s.187-.75.419-.75h17.163c.231,0,.419.336.419.75S942.813,1951.5,942.581,1951.5Z"
                      transform="translate(0 -816.512)"
                      fill="currentColor"></path>
                    <path
                      id="Path_22593"
                      data-name="Path 22593"
                      d="M1163.713,1122.489a2.5,2.5,0,1,0,1.768.732A2.483,2.483,0,0,0,1163.713,1122.489Z"
                      transform="translate(-233.213)"
                      fill="currentColor"></path>
                    <path
                      id="Path_22594"
                      data-name="Path 22594"
                      d="M2344.886,1779.157a2.5,2.5,0,1,0,.731,1.768A2.488,2.488,0,0,0,2344.886,1779.157Z"
                      transform="translate(-1405.617 -646.936)"
                      fill="currentColor"></path>
                  </g>
                </svg>
                <span className="ltr:pl-2.5 rtl:pr-2.5">Filters</span>
              </label>
            </div>
            <div className="drawer-side ">
              <label
                htmlFor="my-drawer"
                aria-label="close sidebar"
                className="drawer-overlay"></label>
              <div className="menu p-4 w-80 min-h-full bg-base-200 text-base-content ">
                <div className="flex flex-col justify-between w-full h-full ">
                  <div className="w-full border-b border-gray-100 flex justify-between items-center relative ltr:pr-5 rtl:pl-5 ltr:md:pr-7 rtl:md:pl-7 flex-shrink-0 py-0.5">
                    <label
                      htmlFor="my-drawer"
                      className="flex cursor-pointer text-2xl items-center justify-center text-gray-500 px-4 md:px-5 py-6 lg:py-8 focus:outline-none transition-opacity hover:opacity-60"
                      aria-label="close">
                      <svg
                        stroke="currentColor"
                        fill="currentColor"
                        stroke-width="0"
                        viewBox="0 0 512 512"
                        className="text-black"
                        height="1em"
                        width="1em"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="48"
                          d="M244 400L100 256l144-144M120 256h292"></path>
                      </svg>
                    </label>
                    <h2 className="font-bold text-xl md:text-2xl m-0 text-heading w-full text-center ltr:pr-6 ltr:pl-6">
                      Filters
                    </h2>
                  </div>
                  <div
                    data-overlayscrollbars-initialize=""
                    className="os-theme-thin menu-scrollbar flex-grow mb-auto"
                    data-overlayscrollbars="host">
                    <div className="os-size-observer os-size-observer-appear">
                      <div className="os-size-observer-listener ltr"></div>
                    </div>
                    <div className="os-viewport os-viewport-scrollbar-hidden m-0 p-0 overflow-y-scroll">
                      <div className="flex flex-col py-7 px-5 md:px-7 text-heading">
                        <div className="pt-1">
                          <div className="block border-b border-gray-300 pb-7 mb-7">
                            <div className="flex items-center justify-between mb-2.5">
                              <h2 className="font-semibold text-heading text-xl md:text-2xl">
                                Filters
                              </h2>
                              <button
                                className="flex-shrink text-xs mt-0.5 transition duration-150 ease-in focus:outline-none hover:text-heading"
                                aria-label="Clear All">
                                Clear All
                              </button>
                            </div>
                            <div className="flex flex-wrap -m-1.5 pt-2"></div>
                          </div>
                          <div className="block border-b border-gray-300 pb-7 mb-7">
                            <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                              Category
                            </h3>
                            <div className="mt-2 flex flex-col space-y-4">
                              {isLoading ? (
                                <div>Loading...</div>
                              ) : prodCategories.length > 0 ? (
                                prodCategories.map((item: Category) => (
                                  <label
                                    key={item.id}
                                    className="group flex items-center text-heading text-sm cursor-pointer gap-2">
                                    <input
                                      type="checkbox"
                                      className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                      name="bags"
                                      value={`${item.id}`}
                                    />
                                    <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                      {item.name}
                                    </span>
                                  </label>
                                ))
                              ) : (
                                <div>No Data</div>
                              )}
                              {/* <label className="group flex items-center text-heading text-sm cursor-pointer gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="bags"
                                  value="bags"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Bags
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="kids"
                                  value="kids"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Kids
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="men"
                                  value="men"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Men
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="sneakers"
                                  value="sneakers"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Sneakers
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="sports"
                                  value="sports"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Sports
                                </span>
                              </label> */}
                              <div className="w-full">
                                <button
                                  data-variant="custom"
                                  className="md:text-sm inline-flex items-center cursor-pointer transition ease-in-out duration-300 font-semibold font-body text-center justify-center border-0 border-transparent rounded-md placeholder-white focus-visible:outline-none focus:outline-none focus:bg-opacity-80 text-sm text-heading ltr:pl-9 rtl:pr-9 pt-1">
                                  Load More
                                </button>
                              </div>
                            </div>
                          </div>
                          <div className="block border-b border-gray-300 pb-7 mb-7">
                            <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                              Brands
                            </h3>
                            <div className="mt-2 flex flex-col space-y-4">
                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="fusion"
                                  value="fusion"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Fusion
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="vintgae"
                                  value="vintgae"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Vintgae
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="masteriod"
                                  value="masteriod"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Masteriod
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="hoppister"
                                  value="hoppister"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Hoppister
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="klien shoes"
                                  value="klien-shoes"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Klien Shoes
                                </span>
                              </label>
                              <div className="w-full"></div>
                            </div>
                          </div>
                          <div className="block border-b border-gray-300 pb-7 mb-7">
                            <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                              Price
                            </h3>
                            <div className="mt-2 flex flex-col space-y-4">
                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="under $50"
                                  value="0-50"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Under Rp. 100.000,
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="$50 to $100"
                                  value="50-100"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Rp. 100.000 to Rp. 1.000.000,
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="$100 to $150"
                                  value="100-150"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Rp. 1.000.000 to Rp. 5.000.000,
                                </span>
                              </label>

                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="over $1000"
                                  value="1000+"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Over Rp. 5.000.000,
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="block border-b border-gray-300 pb-7 mb-7">
                            <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                              Size
                            </h3>
                            <div className="mt-2 flex flex-col space-y-4">
                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="small"
                                  value="Small"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Small
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer  gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="medium"
                                  value="Medium"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Medium
                                </span>
                              </label>
                              <label className="group flex items-center text-heading text-sm cursor-pointer gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="large"
                                  value="Large"
                                />
                                <span className="ltr:ml-4 rtl:mr-4 -mt-0.5">
                                  Large
                                </span>
                              </label>
                            </div>
                          </div>
                          <div className="block border-b border-gray-300 pb-7 mb-7">
                            <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
                              Colors
                            </h3>
                            <div className="mt-2 flex flex-col space-y-4">
                              <label className="group flex items-center text-heading text-sm cursor-pointer gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="red"
                                  value="Red"
                                />
                                <span className="ml-4 mt-0.5 flex items-center">
                                  <span className="w-5 h-5 rounded-full block mr-3 bg-red-500 border border-black border-opacity-20"></span>
                                  Red
                                </span>
                              </label>

                              <label className="group flex items-center text-heading text-sm cursor-pointer gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="blue"
                                  value="Blue"
                                />
                                <span className="ml-4 mt-0.5 flex items-center">
                                  <span className="w-5 h-5 rounded-full block mr-3 bg-blue-500 border border-black border-opacity-20"></span>
                                  Blue
                                </span>
                              </label>

                              <label className="group flex items-center text-heading text-sm cursor-pointer gap-2">
                                <input
                                  type="checkbox"
                                  className="form-checkbox w-5 h-5 border border-gray-300 rounded cursor-pointer transition duration-500 ease-in-out focus:ring-offset-0 text-heading hover:border-heading focus:outline-none focus:ring-0 focus-visible:outline-none checked:bg-heading"
                                  name="yellow"
                                  value="Yellow"
                                />
                                <span className="ml-4 mt-0.5 flex items-center">
                                  <span className="w-5 h-5 rounded-full block mr-3 bg-yellow-500 border border-black border-opacity-20"></span>
                                  Yellow
                                </span>
                              </label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-horizontal os-theme-dark os-scrollbar-handle-interactive os-scrollbar-cornerless os-scrollbar-unusable os-scrollbar-auto-hidden">
                      <div className="os-scrollbar-track">
                        <div className="os-scrollbar-handle w-full"></div>
                      </div>
                    </div>
                    <div className="os-scrollbar os-scrollbar-vertical os-theme-dark os-scrollbar-handle-interactive os-scrollbar-visible os-scrollbar-cornerless os-scrollbar-auto-hidden">
                      <div className="os-scrollbar-track">
                        <div className="os-scrollbar-handle h-[48.104%] transform translate-y-0"></div>
                      </div>
                    </div>
                  </div>
                  <div className="text-sm md:text-base leading-4 flex items-center justify-center px-7 flex-shrink-0 h-14 bg-heading text-white">
                    57 items
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center justify-end gap-2">
            <div className="flex-shrink-0 text-body text-xs md:text-sm leading-4 ltr:pr-4 rtl:pl-4 ltr:md:mr-6 rtl:md:ml-6 ltr:pl-2 rtl:pr-2 hidden lg:block">
              20 items
            </div>
            <div className="relative text-white bg-gray-700 rounded-md ltr:ml-2 rtl:mr-2 ltr:lg:ml-0 rtl:lg:mr-0 z-10 min-w-[180px]">
              <select
                className="select select-bordered w-full max-w-xs bg-slate-600"
                onChange={handleColorChange}>
                <option selected value={"all"}>
                  Sorting Options
                </option>
                <option>Popularity</option>
                <option value={"lowest"}>Price: low to high</option>
                <option value={"highest"}>Price: high to low</option>
              </select>
            </div>
          </div>
        </div>
        <Container className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 -mt-5">
          {productsData?.map((item: ShopProduct) => (
            <ProductsData item={item} key={item.id} />
          ))}
        </Container>
      </div>
    </>
  );
};

export default Products;
