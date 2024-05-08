import Image from "next/image";
import React from "react";

const OrderDetailAdmin = () => {
  return (
    <>
      <main className="relative flex-grow min-h-screen">
        <div className="border-t border-gray-300 mb-12 lg:mb-14 xl:mb-16 pb-0.5 lg:pb-1 xl:pb-0"></div>
        <div className="mx-auto max-w-full px-4 md:px-8 2xl:px-16">
          <div className="max-w-screen-xl mx-auto mb-14 lg:mb-16">
            <div className="bg-[#F7F7F7] rounded-lg mb-4 lg:px-7 p-4 lg:py-4 undefined">
              <div className="mb-0 flex flex-col flex-wrap items-center justify-between gap-x-8 text-base font-bold text-heading sm:flex-row lg:flex-nowrap">
                <div className="order-2 flex w-full gap-4 xs:flex-nowrap sm:order-1 max-w-full basis-full justify-between">
                  <div className="flex flex-wrap items-center">
                    <span className="mb-2 block font-semibold text-heading text-base lg:mb-0 lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
                      Status :
                    </span>
                    <div className="w-full lg:w-auto flex">
                      <span className="px-3 py-1 rounded-full text-sm text-light bg-[#F59E0B] min-h-[2rem] flex items-center font-semibold !leading-none xs:text-sm">
                        Order Processing
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap items-center">
                    <span className="mb-2 block text-heading font-semibold text-base lg:mb-0 lg:inline-block lg:ltr:mr-4 lg:rtl:ml-4">
                      Payment Status :
                    </span>
                    <div className="w-full lg:w-auto flex">
                      <span className="px-3 py-1 rounded-full text-sm text-light bg-heading text-white min-h-[2rem] flex items-center pb-2 font-semibold !leading-none xs:text-sm">
                        Payment Success
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full mx-auto shadow-sm">
              <div className="grid gap-4 lg:gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-4">
                <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
                  <h3 className="mb-2 text-base text-heading font-semibold">
                    Order number
                  </h3>
                  <p className="text-sm text-body">20231110982738</p>
                </div>
                <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
                  <h3 className="mb-2 text-base text-heading font-semibold">
                    Date
                  </h3>
                  <p className="text-sm text-body">November 10, 2023</p>
                </div>
                <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
                  <h3 className="mb-2 text-base text-heading font-semibold">
                    Total
                  </h3>
                  <p className="text-sm text-body">$356.00</p>
                </div>
                <div className="p-5 md:p-6 border border-gray-100 bg-gray-200 rounded-md shadow-sm">
                  <h3 className="mb-2 text-base text-heading font-semibold">
                    Payment method
                  </h3>
                  <p className="text-sm text-body">STRIPE</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row border border-gray-100 rounded-md">
                <div className="w-full md:w-1/2 ltr:md:pr-3 rtl:md:pl-3 border-r px-5 lg:px-7 py-2 lg:py-2 xl:py-2 border-gray-100">
                  <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-5 lg:mb-6">
                    Total Amount
                  </h2>
                  <div className="space-y-2 lg:space-y-2">
                    <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                      <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                        Subtotal
                      </strong>
                      :
                      <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                        $300.00
                      </span>
                    </p>
                    <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                      <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                        Shipping Charge
                      </strong>
                      :
                      <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                        $50.00
                      </span>
                    </p>
                    <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                      <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                        Tax
                      </strong>
                      :
                      <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                        $6.00
                      </span>
                    </p>
                    <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                      <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                        Discount
                      </strong>
                      :
                      <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                        $0.00
                      </span>
                    </p>
                    <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                      <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                        Total
                      </strong>
                      :
                      <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                        $356.00
                      </span>
                    </p>
                  </div>
                </div>
                <div className="w-full md:w-1/2 px-5 lg:px-7 py-4 lg:py-4 xl:py-4">
                  <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-4 lg:mb-4">
                    Order details
                  </h2>
                  <div className="space-y-4 lg:space-y-5">
                    <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                      <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                        Total Item
                      </strong>
                      :
                      <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7 capitalize">
                        2 Items
                      </span>
                    </p>
                    <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                      <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                        Deliver Time
                      </strong>
                      :
                      <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                        Express Delivery
                      </span>
                    </p>
                    <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                      <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                        Shipping Address
                      </strong>
                      :
                      <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                        -, -, -, -, -
                      </span>
                    </p>
                    <p className="flex text-body text-sm lg:text-[15px] xl:text-base mb-0">
                      <strong className="w-1/2 md:w-4/12 ltr:pr-4 rtl:pl-4 text-heading font-semibold">
                        Billing Address
                      </strong>
                      :
                      <span className="w-1/2 md:w-8/12 ltr:pl-7 rtl:pr-7">
                        fewdfee, 345345wef, breda, 4345re, 234
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <div className="rc-table w-full orderDetailsTable rc-table-fixed-header rc-table-scroll-horizontal">
                  <div className="rc-table-container">
                    <div className="rc-table-header overflow-hidden">
                      <table className="table-fixed">
                        <colgroup>
                          <col className="w-5/12 md:w-3/7 lg:w-3/7" />
                          <col className="w-2/12 md:w-1/7 lg:w-1/7" />
                          <col className="w-2/12 md:w-1/7 lg:w-1/7" />
                          <col className="w-1/12" />
                        </colgroup>
                        <thead className="rc-table-thead">
                          <tr>
                            <th
                              title="Product"
                              className="rc-table-cell rc-table-cell-ellipsis text-left"
                            >
                              <span className="pl-5 md:pl-8 ltr:ml-2 rtl:mr-2">
                                Product
                              </span>
                            </th>
                            <th className="rc-table-cell text-center">
                              Quantity
                            </th>
                            <th className="rc-table-cell text-center">Price</th>
                            <th className="rc-table-cell rc-table-cell-scrollbar"></th>
                          </tr>
                        </thead>
                      </table>
                    </div>

                    <div className="rc-table-body overflow-auto scroll max-h-500">
                      <table className="w-full min-w-full table-fixed">
                        <colgroup>
                          <col className="w-2/3" />
                          <col className="w-1/6" />
                          <col className="w-1/6" />
                        </colgroup>
                        <tbody className="rc-table-tbody">
                          <tr
                            aria-hidden="true"
                            className="rc-table-measure-row h-0 text-0"
                          >
                            <td className="p-0 border-0 h-0">
                              <div className="h-0 overflow-hidden">&nbsp;</div>
                            </td>
                            <td className="p-0 border-0 h-0">
                              <div className="h-0 overflow-hidden">&nbsp;</div>
                            </td>
                            <td className="p-0 border-0 h-0">
                              <div className="h-0 overflow-hidden">&nbsp;</div>
                            </td>
                          </tr>

                          <tr
                            data-row-key="2021-10-10T21:49:55.000000Z"
                            className="rc-table-row rc-table-row-level-0"
                          >
                            <td className="rc-table-cell rc-table-cell-ellipsis text-left">
                              <div className="flex items-center">
                                <div className="relative flex flex-shrink-0 w-16 h-16 overflow-hidden rounded">
                                  {/* <img
                                    alt="Zara Army Bag"
                                    loading="lazy"
                                    decoding="async"
                                    data-nimg="fill"
                                    className="object-cover w-full h-full bg-gray-200 absolute inset-0"
                                    sizes="100vw"
                                    srcSet="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2Fconversions%2F10-thumbnail.jpg&amp;w=640&amp;q=75 640w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2Fconversions%2F10-thumbnail.jpg&amp;w=750&amp;q=75 750w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2Fconversions%2F10-thumbnail.jpg&amp;w=828&amp;q=75 828w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2Fconversions%2F10-thumbnail.jpg&amp;w=1080&amp;q=75 1080w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2Fconversions%2F10-thumbnail.jpg&amp;w=1200&amp;q=75 1200w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2Fconversions%2F10-thumbnail.jpg&amp;w=1920&amp;q=75 1920w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2Fconversions%2F10-thumbnail.jpg&amp;w=2048&amp;q=75 2048w, /_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2Fconversions%2F10-thumbnail.jpg&amp;w=3840&amp;q=75 3840w"
                                    src="/_next/image?url=https%3A%2F%2Fchawkbazarlaravel.s3.ap-southeast-1.amazonaws.com%2F292%2Fconversions%2F10-thumbnail.jpg&amp;w=3840&amp;q=75"
                                  /> */}
                                </div>
                                <div className="flex flex-col overflow-hidden ml-4">
                                  <div className="flex mb-2 text-body">
                                    <span className="text-[15px] truncate inline-block overflow-hidden">
                                      Zara Army Bag x&nbsp;
                                    </span>
                                    <span className="text-[15px] text-heading font-semibold truncate inline-block overflow-hidden">
                                      1 pc
                                    </span>
                                  </div>
                                  <span className="text-[15px] text-accent font-semibold mb-1 truncate inline-block overflow-hidden">
                                    $260.00
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="rc-table-cell text-center">
                              <p className="text-[15px] md:text-base font-semibold text-heading">
                                1
                              </p>
                            </td>
                            <td className="rc-table-cell text-center">
                              <p className="text-[15px] md:text-base font-semibold text-heading">
                                $260.00
                              </p>
                            </td>
                          </tr>
                          <tr
                            data-row-key="49"
                            className="rc-table-row rc-table-row-level-0"
                          >
                            <td className="rc-table-cell rc-table-cell-ellipsis text-left">
                              <div className="flex items-center">
                                <div className="relative flex flex-shrink-0 w-16 h-16 overflow-hidden rounded">
                                  <Image
                                    src={"/images/no_image.png"}
                                    alt=""
                                    width={500}
                                    height={500}
                                  />
                                </div>
                                <div className="flex flex-col overflow-hidden ml-4">
                                  <div className="flex mb-2 text-body">
                                    <span className="text-[15px] truncate inline-block overflow-hidden">
                                      Tuma Kidsa bag - Red x&nbsp;
                                    </span>
                                    <span className="text-[15px] text-heading font-semibold truncate inline-block overflow-hidden">
                                      1 pcs
                                    </span>
                                  </div>
                                  <span className="text-[15px] text-accent font-semibold mb-1 truncate inline-block overflow-hidden">
                                    $40.00
                                  </span>
                                </div>
                              </div>
                            </td>
                            <td className="rc-table-cell text-center">
                              <p className="text-[15px] md:text-base font-semibold text-heading">
                                1
                              </p>
                            </td>
                            <td className="rc-table-cell text-center">
                              <p className="text-[15px] md:text-base font-semibold text-heading">
                                $40.00
                              </p>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-11">
                <h2 className="text-lg lg:text-xl xl:text-2xl font-bold text-heading mb-3 lg:mb-5 xl:mb-6">
                  Sub Orders
                </h2>
                <div>
                  <div className="flex items-start mb-6">
                    <p className="text-heading text-sm leading-6">
                      <span className="font-bold">Note:</span> This order has
                      products from multiple vendors. So we divided this order
                      into multiple vendor orders.
                    </p>
                  </div>
                  <div className="rc-table subOrderTable w-full rc-table-scroll-horizontal">
                    <div className="rc-table-container">
                      <div className="rc-table-content overflow-auto">
                        <table className="w-full min-w-full table-auto">
                          <colgroup></colgroup>
                          <thead className="rc-table-thead">
                            <tr>
                              <th className="rc-table-cell text-left">
                                Tracking Number
                              </th>
                              <th className="rc-table-cell text-left">Date</th>
                              <th className="rc-table-cell text-left">
                                Status
                              </th>
                              <th className="rc-table-cell text-left">Item</th>
                              <th className="rc-table-cell text-left">
                                Total Price
                              </th>
                              <th className="rc-table-cell text-center">
                                {/* If you have content here, add it within this cell */}
                              </th>
                            </tr>
                          </thead>
                          <tbody className="rc-table-tbody">
                            <tr
                              aria-hidden="true"
                              className="rc-table-measure-row"
                              style={{ height: "0px", fontSize: "0px" }}
                            >
                              <td className="p-0 border-0 h-0">
                                <div className="h-0 overflow-hidden">
                                  &nbsp;
                                </div>
                              </td>
                              <td className="p-0 border-0 h-0">
                                <div className="h-0 overflow-hidden">
                                  &nbsp;
                                </div>
                              </td>
                              <td className="p-0 border-0 h-0">
                                <div className="h-0 overflow-hidden">
                                  &nbsp;
                                </div>
                              </td>
                              <td className="p-0 border-0 h-0">
                                <div className="h-0 overflow-hidden">
                                  &nbsp;
                                </div>
                              </td>
                              <td className="p-0 border-0 h-0">
                                <div className="h-0 overflow-hidden">
                                  &nbsp;
                                </div>
                              </td>
                              <td className="p-0 border-0 h-0">
                                <div className="h-0 overflow-hidden">
                                  &nbsp;
                                </div>
                              </td>
                            </tr>

                            <tr
                              data-row-key="241"
                              className="rc-table-row rc-table-row-level-0"
                            >
                              <td className="rc-table-cell text-left">
                                20231110843179
                              </td>
                              <td className="rc-table-cell text-left">
                                November 10, 2023
                              </td>
                              <td className="rc-table-cell text-left">
                                <span className="px-3 py-1 rounded-full text-sm bg-heading text-light font-semibold text-white">
                                  Order Processing
                                </span>
                              </td>
                              <td className="rc-table-cell text-left">
                                2 Items
                              </td>
                              <td className="rc-table-cell text-left">
                                <p>$300.00</p>
                              </td>
                              <td className="rc-table-cell text-center">
                                <a
                                  className="inline-flex items-center justify-center flex-shrink-0 font-semibold leading-none outline-none transition duration-300 ease-in-out focus:outline-none focus:shadow text-heading underline hover:no-underline"
                                  href="/orders/20231110843179"
                                >
                                  View
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
        </div>
      </main>
    </>
  );
};

export default OrderDetailAdmin;
