import React from "react";

const MyProductPage = () => {
  return (
    <div
      className="active p-4 bg-gray-50 rounded-lg dark:bg-gray-800"
      id="myOrders"
      role="tabpanel"
      aria-labelledby="myOrders-tab"
    >
      <div className="grid grid-cols-1">
        <div className="sm:-mx-6 lg:-mx-8">
          <div className="relative overflow-x-auto block w-full sm:px-6 lg:px-8">
            <table className="w-full">
              <thead className="bg-gray-50 dark:bg-gray-600/20">
                <tr>
                  <th
                    scope="col"
                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                  >
                    Order ID
                  </th>
                  <th
                    scope="col"
                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                  >
                    Product & Title
                  </th>
                  <th
                    scope="col"
                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                  >
                    Delivery Method
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
                    Status
                  </th>
                  <th
                    scope="col"
                    className="p-3 text-xs font-medium tracking-wider text-left text-gray-700 dark:text-gray-400 uppercase"
                  >
                    Payment
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
                {/* 1 */}
                <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                  <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                    <a href="#" className="text-brand-500">
                      #556633
                    </a>
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <div className="flex items-center">
                      <img
                        src="/images/products/default.jpeg"
                        alt=""
                        className="me-2 h-8 inline-block"
                      />
                      <div className="self-center">
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                          New Colorful Shoes
                        </h5>
                        <span className="block font-medium text-slate-500">
                          Size-04-15 (Model 2023)
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    Cash on delivery
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    05 June 2023
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <span className="bg-green-600/5 text-green-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                      Shipped
                    </span>
                  </td>
                  <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                    $99
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <a href="#">
                      <i className="icofont-shopping-cart text-lg text-gray-500 dark:text-gray-400"></i>
                    </a>
                    <a href="#">
                      <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                    </a>
                  </td>
                </tr>
                {/* 2 */}
                <tr className="bg-white border-b border-dashed dark:bg-gray-900 dark:border-gray-700/40">
                  <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                    <a href="#" className="text-brand-500">
                      #362514
                    </a>
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <div className="flex items-center">
                      <img
                        src="/images/products/default.jpeg"
                        alt=""
                        className="me-2 h-8 inline-block"
                      />
                      <div className="self-center">
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                          Mannat Air 2023 Laptop
                        </h5>
                        <span className="block font-medium text-slate-500">
                          Size- 13.3 Inch (Model 2023)
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    Cash on delivery
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    21 July 2023
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <span className="bg-red-600/5 text-red-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                      Cancelled
                    </span>
                  </td>
                  <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                    $120
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <a href="#">
                      <i className="icofont-shopping-cart text-lg text-gray-500 dark:text-gray-400"></i>
                    </a>
                    <a href="#">
                      <i className="icofont-ui-delete text-lg text-red-500 dark:text-red-400"></i>
                    </a>
                  </td>
                </tr>
                {/* 3 */}
                <tr className="bg-white dark:bg-gray-900">
                  <td className="p-3 text-sm font-medium whitespace-nowrap dark:text-white">
                    <a href="#" className="text-brand-500">
                      #965847
                    </a>
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <div className="flex items-center">
                      <img
                        src="/images/products/default.jpeg"
                        alt=""
                        className="me-2 h-8 inline-block"
                      />
                      <div className="self-center">
                        <h5 className="text-sm font-semibold text-slate-700 dark:text-gray-400">
                          Mannat Watch 3 Active
                        </h5>
                        <span className="block font-medium text-slate-500">
                          Latest Model 2023
                        </span>
                      </div>
                    </div>
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    Online
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    05 June 2023
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <span className="bg-yellow-600/5 text-yellow-600 text-[11px] font-medium px-2.5 py-0.5 rounded h-5">
                      Pending
                    </span>
                  </td>
                  <td className="p-3 font-semibold text-lg text-gray-800 whitespace-nowrap dark:text-gray-400">
                    $320
                  </td>
                  <td className="p-3 text-sm text-gray-500 whitespace-nowrap dark:text-gray-400">
                    <a href="#">
                      <i className="icofont-shopping-cart text-lg text-gray-500 dark:text-gray-400"></i>
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
  );
};

export default MyProductPage;
