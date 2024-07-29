import useSWR from "swr";
import { Benefit, PackageData } from "../../../type";
import FormattedPrice from "@/app/components/FormattedPrice";

const LandingPackage = () => {
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  const url = process.env.SERVER_ENDPOINT + "/api/package/";
  const { data, isValidating, isLoading, error } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });

  return (
    <div>
      <section
        id="pricing"
        aria-labelledby="pricing-title"
        className="border-t border-gray-200 bg-gray-100 py-4 sm:py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2
              id="pricing-title"
              className="text-3xl font-medium tracking-tight text-gray-900">
              Flat pricing, no management fees.
            </h2>
            <p className="mt-2 text-lg text-gray-600">
              Whether you’re one person trying to get ahead or a big firm trying
              to take over the world, we’ve got a plan for you.
            </p>
          </div>
          <div className="mt-8 flex justify-center">
            <div className="relative">
              <div
                className="grid grid-cols-2"
                id="headlessui-radiogroup-:re:"
                role="radiogroup">
                <div
                  className="cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 rounded-l-lg"
                  id="headlessui-radiogroup-option-:rf:"
                  role="radio"
                  aria-checked="true"
                  tabIndex={0}
                  data-headlessui-state="checked">
                  Annually
                </div>
                <div
                  className="cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 -ml-px rounded-r-lg"
                  id="headlessui-radiogroup-option-:rg:"
                  role="radio"
                  aria-checked="false"
                  tabIndex={-1}
                  data-headlessui-state="">
                  Monthly
                </div>
              </div>
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300 [clip-path:inset(0_50%_0_0)]">
                <div className="py-2 text-center text-sm font-semibold text-white">
                  Annually
                </div>
                <div className="py-2 text-center text-sm font-semibold text-white -ml-px">
                  Monthly
                </div>
              </div>
            </div>
          </div>
          <div
            className={`mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-${data?.length}`}>
            {isLoading ? (
              <div>Loading..</div>
            ) : (
              data.map((item: PackageData, index: Number) => (
                <section
                  key={item.id}
                  className={`${
                    index == 2
                      ? "flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 order-first bg-gray-900 lg:order-none"
                      : "flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white"
                  } `}>
                  <h3
                    className={`${
                      index == 2
                        ? "flex items-center text-sm font-semibold text-slate-50"
                        : "flex items-center text-sm font-semibold text-gray-900"
                    }`}>
                    <svg
                      viewBox="0 0 40 40"
                      aria-hidden="true"
                      className={`${
                        index == 2
                          ? "h-6 w-6 flex-none fill-cyan-500"
                          : "h-6 w-6 flex-none fill-gray-300"
                      } `}>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path>
                    </svg>
                    <span className="ml-4">{item.title}</span>
                  </h3>
                  <p
                    className={`${
                      index == 2
                        ? "relative mt-5 flex text-3xl tracking-tight text-slate-50"
                        : "relative mt-5 flex text-3xl tracking-tight text-gray-900"
                    } `}>
                    <FormattedPrice amount={item.price} />
                  </p>
                  <p
                    className={`${
                      index == 2
                        ? "mt-3 text-sm text-slate-50"
                        : "mt-3 text-sm text-gray-700"
                    } `}>
                    You’re new to investing but want to do it right. Get started
                    for free.
                  </p>
                  <div className="order-last mt-6">
                    <ul
                      role="list"
                      className={`${
                        index == 2
                          ? "-my-2 divide-y text-sm divide-gray-200 text-slate-50"
                          : "-my-2 divide-y text-sm divide-gray-200 text-gray-700"
                      } `}>
                      {item.benefit.map((benefit: Benefit) => (
                        <li key={benefit.id} className="flex py-2">
                          <svg
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none text-cyan-500">
                            <path
                              d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                              fill="currentColor"></path>
                            <circle
                              cx="12"
                              cy="12"
                              r="8.25"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"></circle>
                          </svg>
                          <span className="ml-4">{benefit.benefit}</span>
                        </li>
                      ))}
                      {/* <li className="flex py-2">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none text-cyan-500">
                          <path
                            d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                            fill="currentColor"></path>
                          <circle
                            cx="12"
                            cy="12"
                            r="8.25"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"></circle>
                        </svg>
                        <span className="ml-4">Multi-layered encryption</span>
                      </li>
                      <li className="flex py-2">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none text-cyan-500">
                          <path
                            d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                            fill="currentColor"></path>
                          <circle
                            cx="12"
                            cy="12"
                            r="8.25"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"></circle>
                        </svg>
                        <span className="ml-4">One tip every day</span>
                      </li>
                      <li className="flex py-2">
                        <svg
                          viewBox="0 0 24 24"
                          aria-hidden="true"
                          className="h-6 w-6 flex-none text-cyan-500">
                          <path
                            d="M9.307 12.248a.75.75 0 1 0-1.114 1.004l1.114-1.004ZM11 15.25l-.557.502a.75.75 0 0 0 1.15-.043L11 15.25Zm4.844-5.041a.75.75 0 0 0-1.188-.918l1.188.918Zm-7.651 3.043 2.25 2.5 1.114-1.004-2.25-2.5-1.114 1.004Zm3.4 2.457 4.25-5.5-1.187-.918-4.25 5.5 1.188.918Z"
                            fill="currentColor"></path>
                          <circle
                            cx="12"
                            cy="12"
                            r="8.25"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"></circle>
                        </svg>
                        <span className="ml-4">
                          Invest up to $1,500 each month
                        </span>
                      </li> */}
                    </ul>
                  </div>
                  <a
                    className={`${
                      index == 2
                        ? "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors mt-6"
                        : "inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6"
                    }`}
                    aria-label="Get started with the Starter plan for [object Object]"
                    href="/web/sign-up">
                    Register Now
                  </a>
                </section>
              ))
            )}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPackage;
