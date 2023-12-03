"use client";
import { useEffect, useState } from "react";
import { Icons } from "@/app/components/ui/Icons";
import Image from "next/image";
import PageAbout from "@/app/web/about/page";
import Link from "next/link";
import useSWR from "swr";
import { PackageData } from "../../../type";

export default function LandingPageComponent() {
  const [close, setClose] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsVisible(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  const fetcher = (url: any) =>
    fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  const url = process.env.SERVER_ENDPOINT + "/api/package/";
  const { data, isValidating, error } = useSWR(url, fetcher, {
    refreshInterval: 3000,
  });
  console.log(data);
  return (
    <>
      <main className="flex-auto">
        <div className="overflow-hidden py-20 sm:py-32 lg:pb-32 xl:pb-36">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
              <div className="relative z-0 mx-auto max-w-2xl lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
                <h1 className="text-4xl font-medium tracking-tight text-gray-900">
                  Mulai Bisnis dengan Toko Online Profesional
                </h1>
                <p className="mt-6 text-lg text-gray-600">
                  Mulai bisnis online dengan website builder intuitif dan kaya
                  fitur.
                </p>
                <div className="mt-8 flex flex-wrap gap-x-6 gap-y-4">
                  <a
                    aria-label="Download on the App Store"
                    className="rounded-lg transition-colors bg-gray-800 text-white hover:bg-gray-900"
                    href="#">
                    <Icons.appstore />
                  </a>
                  <a
                    className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                    href="#">
                    <Icons.play />
                    <span className="ml-2.5">Watch the video</span>
                  </a>
                </div>
              </div>
              <div className="relative mt-10 sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
                <div className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0">
                  <svg
                    viewBox="0 0 1026 1026"
                    fill="none"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full animate-spin-slow">
                    <path
                      d="M1025 513c0 282.77-229.23 512-512 512S1 795.77 1 513 230.23 1 513 1s512 229.23 512 512Z"
                      stroke="#D4D4D4"
                      stroke-opacity="0.7"></path>
                    <path
                      d="M513 1025C230.23 1025 1 795.77 1 513"
                      stroke="url(#:S2:-gradient-1)"
                      strokeLinecap="round"></path>
                    <defs>
                      <linearGradient
                        id=":S2:-gradient-1"
                        x1="1"
                        y1="513"
                        x2="1"
                        y2="1025"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06b6d4"></stop>
                        <stop
                          offset="1"
                          stop-color="#06b6d4"
                          stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                  <svg
                    viewBox="0 0 1026 1026"
                    fill="none"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full animate-spin-reverse-slower">
                    <path
                      d="M913 513c0 220.914-179.086 400-400 400S113 733.914 113 513s179.086-400 400-400 400 179.086 400 400Z"
                      stroke="#D4D4D4"
                      stroke-opacity="0.7"></path>
                    <path
                      d="M913 513c0 220.914-179.086 400-400 400"
                      stroke="url(#:S2:-gradient-2)"
                      strokeLinecap="round"></path>
                    <defs>
                      <linearGradient
                        id=":S2:-gradient-2"
                        x1="913"
                        y1="513"
                        x2="913"
                        y2="913"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#06b6d4"></stop>
                        <stop
                          offset="1"
                          stop-color="#06b6d4"
                          stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div className="-mx-4 h-[448px] px-9 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
                  <div className="relative aspect-[366/729] mx-auto max-w-[500px]">
                    <Image
                      src={"/images/landing/cover-homepage.png"}
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="relative -mt-4 lg:col-span-7 lg:mt-0 xl:col-span-6">
                <p className="text-center text-sm font-semibold text-gray-900 lg:text-left">
                  As featured in
                </p>
                <ul
                  role="list"
                  className=" mx-auto mt-8 flex max-w-xl flex-wrap justify-center gap-x-10 gap-y-8 lg:mx-0 lg:justify-start">
                  <li className="flex">
                    <Image
                      alt="Forbes"
                      loading="lazy"
                      width="82"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 text-transparent"
                      src="/images/landing/forbes.c4b4b0dd.svg"
                    />
                  </li>
                  <li className="flex">
                    <Image
                      alt="TechCrunch"
                      loading="lazy"
                      width="181"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 text-transparent"
                      src="/images/landing/techcrunch.fe121d74.svg"
                    />
                  </li>
                  <li className="flex">
                    <Image
                      alt="Wired"
                      loading="lazy"
                      width="121"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 text-transparent"
                      src="/images/landing/wired.42c588dc.svg"
                    />
                  </li>
                  <li className="md:flex hidden xl:block">
                    <Image
                      alt="CNN"
                      loading="lazy"
                      width="68"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 text-transparent"
                      src="/images/landing/cnn.eaae184a.svg"
                    />
                  </li>
                  <li className="flex">
                    <Image
                      alt="BBC"
                      loading="lazy"
                      width="83"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 text-transparent"
                      src="/images/landing/bbc.9cfc75a9.svg"
                    />
                  </li>
                  <li className="flex">
                    <Image
                      alt="CBS"
                      loading="lazy"
                      width="101"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 text-transparent"
                      src="/images/landing/cbs.aa596395.svg"
                    />
                  </li>
                  <li className="flex">
                    <Image
                      alt="Fast Company"
                      loading="lazy"
                      width="124"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 text-transparent"
                      src="/images/landing/fast-company.8fba32a5.svg"
                    />
                  </li>
                  <li className="md:flex hidden xl:block">
                    <Image
                      alt="HuffPost"
                      loading="lazy"
                      width="142"
                      height="32"
                      decoding="async"
                      data-nimg="1"
                      className="h-8 text-transparent"
                      src="/images/landing/huffpost.eeec742f.svg"
                    />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <section
          id="features"
          aria-label="Features for investing all your money"
          className="bg-gray-900 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-3xl">
              <h2 className="text-3xl font-medium tracking-tight text-white">
                Paket Lengkap Business Toko Online
              </h2>
              <p className="mt-2 text-lg text-gray-400">
                Miliki toko online, bisnis, blog, atau website personal dengan
                paket lengkap website toko online dan web hosting.
              </p>
            </div>
          </div>
          <div className="mt-16 md:hidden">
            <div className="-mb-4 flex snap-x snap-mandatory -space-x-4 overflow-x-auto overscroll-x-contain scroll-smooth pb-4 [scrollbar-width:none] sm:-space-x-6 [&amp;::-webkit-scrollbar]:hidden">
              <div className="w-full flex-none snap-center px-4 sm:px-6">
                <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg
                      viewBox="0 0 558 558"
                      width="558"
                      height="558"
                      fill="none"
                      aria-hidden="true">
                      <defs>
                        <linearGradient
                          id=":r3:"
                          x1="79"
                          y1="16"
                          x2="105"
                          y2="237"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#13B5C8"></stop>
                          <stop
                            offset="1"
                            stop-color="#13B5C8"
                            stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        opacity=".2"
                        d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                        stroke="#13B5C8"></path>
                      <path
                        d="M1 279C1 125.465 125.465 1 279 1"
                        stroke="url(#:r3:)"
                        strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div className="aspect-[366/729] relative mx-auto w-full max-w-[366px]">
                    <div className="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
                    <div className="absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900 pt-[calc(23/318*100%)]">
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between px-4 pt-4">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none">
                            <path
                              d="M5 6h14M5 18h14M5 12h14"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                          <svg
                            viewBox="0 0 79 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 flex-none">
                            <path
                              d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12ZM2.4 12a9.004 9.004 0 0 0 6.055 8.507c1.565.542 2.945-.85 2.945-2.507V6c0-1.657-1.38-3.049-2.945-2.507A9.004 9.004 0 0 0 2.4 12Z"
                              fill="#06B6D4"></path>
                            <path
                              d="M33.004 17V6.818h3.818c.783 0 1.439.146 1.97.438.533.291.935.692 1.207 1.203.275.507.413 1.084.413 1.73 0 .653-.138 1.233-.413 1.74a2.948 2.948 0 0 1-1.218 1.198c-.537.288-1.198.433-1.983.433h-2.531v-1.517h2.282c.457 0 .832-.08 1.124-.238.291-.16.507-.378.646-.657.142-.278.214-.598.214-.96 0-.36-.072-.679-.214-.954a1.452 1.452 0 0 0-.651-.641c-.292-.156-.668-.234-1.129-.234h-1.69V17h-1.845Zm12.152.15c-.746 0-1.392-.165-1.939-.493a3.343 3.343 0 0 1-1.273-1.377c-.298-.59-.447-1.28-.447-2.068 0-.79.15-1.48.447-2.073a3.335 3.335 0 0 1 1.273-1.383c.547-.328 1.193-.492 1.94-.492.745 0 1.391.164 1.938.492.547.329.97.79 1.268 1.383.301.593.452 1.284.452 2.073 0 .789-.15 1.478-.452 2.068a3.309 3.309 0 0 1-1.268 1.377c-.547.328-1.193.492-1.939.492Zm.01-1.443c.404 0 .742-.11 1.014-.333.272-.225.474-.527.607-.905.136-.377.204-.798.204-1.262 0-.468-.068-.89-.204-1.268a2.007 2.007 0 0 0-.607-.91c-.272-.225-.61-.338-1.014-.338-.414 0-.759.113-1.034.338a2.041 2.041 0 0 0-.612.91 3.81 3.81 0 0 0-.198 1.268c0 .464.066.885.198 1.262.136.378.34.68.612.905.275.222.62.333 1.034.333Zm8.508 1.442c-.763 0-1.417-.167-1.964-.502a3.352 3.352 0 0 1-1.258-1.387c-.292-.593-.437-1.276-.437-2.048 0-.776.149-1.46.447-2.054a3.34 3.34 0 0 1 1.263-1.392c.547-.334 1.193-.502 1.939-.502.62 0 1.168.115 1.645.343.48.226.864.546 1.149.96.285.41.447.891.487 1.441h-1.72a1.644 1.644 0 0 0-.497-.92c-.259-.248-.605-.372-1.04-.372-.367 0-.69.1-.969.298-.278.196-.495.478-.651.845-.153.368-.229.81-.229 1.323 0 .52.076.968.229 1.342.152.371.366.658.641.86.279.2.605.298.98.298.265 0 .502-.05.71-.149.213-.102.39-.25.532-.442.143-.192.24-.426.294-.701h1.72a2.999 2.999 0 0 1-.477 1.437c-.275.414-.65.739-1.124.974-.474.232-1.03.348-1.67.348Zm6.39-2.545-.006-2.173h.289l2.744-3.067h2.103l-3.376 3.758h-.372l-1.383 1.482ZM58.422 17V6.818h1.8V17h-1.8Zm4.792 0-2.485-3.475 1.213-1.268L65.368 17h-2.153Zm6.245.15c-.766 0-1.427-.16-1.984-.478a3.233 3.233 0 0 1-1.278-1.362c-.298-.59-.447-1.285-.447-2.083 0-.786.149-1.475.447-2.069a3.384 3.384 0 0 1 1.263-1.392c.54-.334 1.175-.502 1.904-.502.47 0 .915.076 1.333.229.42.149.792.381 1.113.696.325.315.58.716.766 1.203.186.484.278 1.06.278 1.73v.552h-6.259v-1.213h4.534a1.935 1.935 0 0 0-.224-.92 1.625 1.625 0 0 0-.611-.641 1.719 1.719 0 0 0-.905-.234c-.368 0-.691.09-.97.269a1.848 1.848 0 0 0-.65.696c-.153.285-.231.598-.234.94v1.058c0 .444.08.825.243 1.144.163.315.39.556.681.726.292.165.634.248 1.025.248.261 0 .498-.036.71-.11.213-.075.397-.187.552-.332.156-.146.274-.327.353-.542l1.68.189a2.62 2.62 0 0 1-.606 1.163 2.958 2.958 0 0 1-1.133.766c-.461.179-.988.268-1.581.268Zm8.731-7.786v1.392h-4.39V9.364h4.39Zm-3.306-1.83h1.8v7.17c0 .241.036.427.109.556a.59.59 0 0 0 .298.258c.123.047.259.07.408.07.113 0 .215-.008.308-.025.096-.016.17-.031.219-.045l.303 1.407c-.096.034-.233.07-.412.11-.176.04-.392.063-.647.07a2.934 2.934 0 0 1-1.218-.204 1.895 1.895 0 0 1-.86-.706c-.209-.319-.311-.716-.308-1.194V7.534Z"
                              fill="#fff"></path>
                          </svg>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none">
                            <path
                              d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <div className="mt-6 px-4 text-white">
                          <div className="text-2xl text-white">
                            Invite people
                          </div>
                          <div className="text-sm text-gray-500">
                            Get tips{" "}
                            <span className="text-white">5s sooner</span> for
                            every invite.{" "}
                          </div>
                        </div>
                        <div className="mt-6 flex-auto rounded-t-2xl bg-white">
                          <div className="px-4 py-6">
                            <div className="space-y-6">
                              <div>
                                <div className="text-sm text-gray-500">
                                  Full name
                                </div>
                                <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                                  Albert H. Wiggin
                                </div>
                              </div>
                              <div>
                                <div className="text-sm text-gray-500">
                                  Email address
                                </div>
                                <div className="mt-2 border-b border-gray-200 pb-2 text-sm text-gray-900">
                                  awiggin@chase.com
                                </div>
                              </div>
                            </div>
                            <div className="mt-6 rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white">
                              Invite person
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 366 729"
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100">
                      <path
                        fill="#F2F2F2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"></path>
                      <rect
                        x="154"
                        y="29"
                        width="56"
                        height="5"
                        rx="2.5"
                        fill="#D4D4D4"></rect>
                    </svg>
                    <Image
                      alt=""
                      loading="lazy"
                      width="366"
                      height="729"
                      decoding="async"
                      data-nimg="1"
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      src="/images/landing/phone-frame.d4b6b62a.svg"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                    <svg
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      className="h-8 w-8">
                      <circle
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#A3A3A3"
                        fillOpacity="0.2"></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
                        fill="#737373"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
                        fill="#A3A3A3"></path>
                    </svg>
                    <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                      Invite friends for better returns
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      For every friend you invite to Pocket, you get insider
                      notifications 5 seconds sooner. And it’s 10 seconds if you
                      invite an insider.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex-none snap-center px-4 sm:px-6">
                <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg
                      viewBox="0 0 558 558"
                      width="558"
                      height="558"
                      fill="none"
                      aria-hidden="true"
                      className="rotate-180">
                      <defs>
                        <linearGradient
                          id=":r4:"
                          x1="79"
                          y1="16"
                          x2="105"
                          y2="237"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#13B5C8"></stop>
                          <stop
                            offset="1"
                            stop-color="#13B5C8"
                            stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        opacity=".2"
                        d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                        stroke="#13B5C8"></path>
                      <path
                        d="M1 279C1 125.465 125.465 1 279 1"
                        stroke="url(#:r4:)"
                        strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div className=" aspect-[366/729] relative mx-auto w-full max-w-[366px]">
                    <div className="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
                    <div className="absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900 pt-[calc(23/318*100%)]">
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between px-4 pt-4">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none">
                            <path
                              d="M5 6h14M5 18h14M5 12h14"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                          <svg
                            viewBox="0 0 79 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 flex-none">
                            <path
                              d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12ZM2.4 12a9.004 9.004 0 0 0 6.055 8.507c1.565.542 2.945-.85 2.945-2.507V6c0-1.657-1.38-3.049-2.945-2.507A9.004 9.004 0 0 0 2.4 12Z"
                              fill="#06B6D4"></path>
                            <path
                              d="M33.004 17V6.818h3.818c.783 0 1.439.146 1.97.438.533.291.935.692 1.207 1.203.275.507.413 1.084.413 1.73 0 .653-.138 1.233-.413 1.74a2.948 2.948 0 0 1-1.218 1.198c-.537.288-1.198.433-1.983.433h-2.531v-1.517h2.282c.457 0 .832-.08 1.124-.238.291-.16.507-.378.646-.657.142-.278.214-.598.214-.96 0-.36-.072-.679-.214-.954a1.452 1.452 0 0 0-.651-.641c-.292-.156-.668-.234-1.129-.234h-1.69V17h-1.845Zm12.152.15c-.746 0-1.392-.165-1.939-.493a3.343 3.343 0 0 1-1.273-1.377c-.298-.59-.447-1.28-.447-2.068 0-.79.15-1.48.447-2.073a3.335 3.335 0 0 1 1.273-1.383c.547-.328 1.193-.492 1.94-.492.745 0 1.391.164 1.938.492.547.329.97.79 1.268 1.383.301.593.452 1.284.452 2.073 0 .789-.15 1.478-.452 2.068a3.309 3.309 0 0 1-1.268 1.377c-.547.328-1.193.492-1.939.492Zm.01-1.443c.404 0 .742-.11 1.014-.333.272-.225.474-.527.607-.905.136-.377.204-.798.204-1.262 0-.468-.068-.89-.204-1.268a2.007 2.007 0 0 0-.607-.91c-.272-.225-.61-.338-1.014-.338-.414 0-.759.113-1.034.338a2.041 2.041 0 0 0-.612.91 3.81 3.81 0 0 0-.198 1.268c0 .464.066.885.198 1.262.136.378.34.68.612.905.275.222.62.333 1.034.333Zm8.508 1.442c-.763 0-1.417-.167-1.964-.502a3.352 3.352 0 0 1-1.258-1.387c-.292-.593-.437-1.276-.437-2.048 0-.776.149-1.46.447-2.054a3.34 3.34 0 0 1 1.263-1.392c.547-.334 1.193-.502 1.939-.502.62 0 1.168.115 1.645.343.48.226.864.546 1.149.96.285.41.447.891.487 1.441h-1.72a1.644 1.644 0 0 0-.497-.92c-.259-.248-.605-.372-1.04-.372-.367 0-.69.1-.969.298-.278.196-.495.478-.651.845-.153.368-.229.81-.229 1.323 0 .52.076.968.229 1.342.152.371.366.658.641.86.279.2.605.298.98.298.265 0 .502-.05.71-.149.213-.102.39-.25.532-.442.143-.192.24-.426.294-.701h1.72a2.999 2.999 0 0 1-.477 1.437c-.275.414-.65.739-1.124.974-.474.232-1.03.348-1.67.348Zm6.39-2.545-.006-2.173h.289l2.744-3.067h2.103l-3.376 3.758h-.372l-1.383 1.482ZM58.422 17V6.818h1.8V17h-1.8Zm4.792 0-2.485-3.475 1.213-1.268L65.368 17h-2.153Zm6.245.15c-.766 0-1.427-.16-1.984-.478a3.233 3.233 0 0 1-1.278-1.362c-.298-.59-.447-1.285-.447-2.083 0-.786.149-1.475.447-2.069a3.384 3.384 0 0 1 1.263-1.392c.54-.334 1.175-.502 1.904-.502.47 0 .915.076 1.333.229.42.149.792.381 1.113.696.325.315.58.716.766 1.203.186.484.278 1.06.278 1.73v.552h-6.259v-1.213h4.534a1.935 1.935 0 0 0-.224-.92 1.625 1.625 0 0 0-.611-.641 1.719 1.719 0 0 0-.905-.234c-.368 0-.691.09-.97.269a1.848 1.848 0 0 0-.65.696c-.153.285-.231.598-.234.94v1.058c0 .444.08.825.243 1.144.163.315.39.556.681.726.292.165.634.248 1.025.248.261 0 .498-.036.71-.11.213-.075.397-.187.552-.332.156-.146.274-.327.353-.542l1.68.189a2.62 2.62 0 0 1-.606 1.163 2.958 2.958 0 0 1-1.133.766c-.461.179-.988.268-1.581.268Zm8.731-7.786v1.392h-4.39V9.364h4.39Zm-3.306-1.83h1.8v7.17c0 .241.036.427.109.556a.59.59 0 0 0 .298.258c.123.047.259.07.408.07.113 0 .215-.008.308-.025.096-.016.17-.031.219-.045l.303 1.407c-.096.034-.233.07-.412.11-.176.04-.392.063-.647.07a2.934 2.934 0 0 1-1.218-.204 1.895 1.895 0 0 1-.86-.706c-.209-.319-.311-.716-.308-1.194V7.534Z"
                              fill="#fff"></path>
                          </svg>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none">
                            <path
                              d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <div className="mt-6 px-4 text-white">
                          <div className="text-2xl text-white">Stocks</div>
                          <div className="text-sm text-gray-500">
                            March 9, 2022
                          </div>
                        </div>
                        <div className="mt-6 flex-auto rounded-t-2xl bg-white">
                          <div className="divide-y divide-gray-100">
                            <div className="flex items-center gap-4 px-4 py-3">
                              <div className="flex-none rounded-full bg-red-600">
                                <svg
                                  viewBox="0 0 40 40"
                                  fill="#fff"
                                  aria-hidden="true"
                                  className="h-10 w-10">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M29.982 14.509c.002.005.006.01.007.015a.316.316 0 0 1 .011.082v4.293a.304.304 0 0 1-.043.156.32.32 0 0 1-.119.115l-3.709 2.075v4.112a.305.305 0 0 1-.043.157.32.32 0 0 1-.119.114l-7.742 4.33a.286.286 0 0 1-.056.023l-.022.008a.33.33 0 0 1-.18-.005l-.01-.005c-.018-.006-.036-.011-.053-.021l-7.742-4.33a.32.32 0 0 1-.119-.115.304.304 0 0 1-.043-.156v-12.88a.33.33 0 0 1 .01-.08c.004-.01.01-.018.012-.027l.01-.027a.158.158 0 0 1 .011-.022c.006-.01.015-.018.023-.028.009-.012.017-.025.028-.036.01-.01.02-.016.031-.024.012-.009.023-.019.036-.026l3.871-2.165a.33.33 0 0 1 .322 0l3.872 2.165c.013.007.024.017.036.026l.01.008c.008.005.015.01.021.016a.175.175 0 0 1 .021.025l.008.011.022.028c.008.015.014.032.02.049l.006.01.006.016a.307.307 0 0 1 .01.082v8.044l3.227-1.804v-4.112c0-.028.004-.055.011-.082.003-.01.008-.017.011-.026l.004-.01a.228.228 0 0 1 .017-.039.132.132 0 0 1 .013-.018.203.203 0 0 0 .01-.01c.009-.012.017-.025.028-.036l.015-.013.016-.01.019-.016a.126.126 0 0 1 .017-.011l3.871-2.165a.33.33 0 0 1 .322 0l3.871 2.165c.014.007.024.018.036.026l.012.008.02.016a.162.162 0 0 1 .02.026l.009.01.008.01c.005.006.01.012.013.018a.254.254 0 0 1 .018.04l.003.009.005.01Zm-15.138 8.717 3.22 1.77 7.094-3.933-3.223-1.803-7.091 3.966Zm10.64-2.704v-3.57l-3.226-1.804v3.57l3.225 1.804Zm3.547-5.916-3.225-1.803-3.224 1.803 3.224 1.803 3.225-1.803Zm-14.515.218v7.863l3.226-1.805V13.02l-3.226 1.804Zm2.902-2.346-3.225-1.803-3.224 1.803 3.224 1.803 3.225-1.803Zm-3.547 2.347-3.226-1.805v12.155l7.098 3.97V25.54l-3.708-2.038h-.001l-.002-.002c-.013-.008-.024-.018-.035-.027a.28.28 0 0 0-.011-.007.133.133 0 0 1-.02-.015v-.001l-.019-.022a.452.452 0 0 0-.008-.011l-.016-.02a.086.086 0 0 1-.008-.01v-.002a.123.123 0 0 1-.013-.027l-.005-.012-.008-.016a.115.115 0 0 1-.007-.02.18.18 0 0 1-.005-.033l-.002-.013a.293.293 0 0 0-.002-.013l-.002-.022v-8.405Zm4.516 10.715v3.605l7.096-3.969v-3.572l-7.096 3.935Zm7.742-5.019 3.226-1.804v-3.57l-3.226 1.805v3.57Z"></path>
                                </svg>
                              </div>
                              <div className="flex-auto text-sm text-gray-900">
                                Laravel
                              </div>
                              <div className="flex-none text-right">
                                <div className="text-sm font-medium text-gray-900">
                                  4,098.01
                                </div>
                                <div className="text-xs leading-5 text-cyan-500">
                                  +4.98%
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 px-4 py-3">
                              <div className="flex-none rounded-full bg-indigo-500">
                                <svg
                                  viewBox="0 0 40 40"
                                  fill="#fff"
                                  aria-hidden="true"
                                  className="h-10 w-10">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M22.5 8 12 11.692v12l3.5 1.231v3.385L26 32V12.615l-3.5 1.231V8Zm-5.833 17.334 5.833 2.05v-12.24l2.333-.82v15.968l-8.166-2.87v-2.088Z"></path>
                                </svg>
                              </div>
                              <div className="flex-auto text-sm text-gray-900">
                                Tuple
                              </div>
                              <div className="flex-none text-right">
                                <div className="text-sm font-medium text-gray-900">
                                  5,451.10
                                </div>
                                <div className="text-xs leading-5 text-gray-500">
                                  -3.38%
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 px-4 py-3">
                              <div className="flex-none rounded-full bg-blue-700">
                                <svg
                                  viewBox="0 0 40 40"
                                  fill="#fff"
                                  aria-hidden="true"
                                  className="h-10 w-10">
                                  <path d="M20 32c-6.617 0-12-5.383-12-12S13.383 8 20 8s12 5.383 12 12-5.383 12-12 12Zm0-22.4C14.267 9.6 9.6 14.266 9.6 20S14.267 30.4 20 30.4c5.734 0 10.4-4.666 10.4-10.4S25.734 9.6 20 9.6Z"></path>
                                  <path d="M19.434 27.749c.15.15.354.234.566.235.433 0 .8-.368.8-.8V12.815a.8.8 0 0 0-1.6 0v14.368c0 .212.084.415.234.565ZM12.833 20.8h3.833a.802.802 0 0 0 .802-.8.8.8 0 0 0-.801-.8h-3.834c-.45 0-.8.35-.8.8a.8.8 0 0 0 .8.8ZM23.333 20.8h3.85c.433 0 .783-.35.783-.8a.799.799 0 0 0-.8-.8h-3.833c-.45 0-.8.35-.8.8a.8.8 0 0 0 .8.8Z"></path>
                                </svg>
                              </div>
                              <div className="flex-auto text-sm text-gray-900">
                                Transistor
                              </div>
                              <div className="flex-none text-right">
                                <div className="text-sm font-medium text-gray-900">
                                  4,098.41
                                </div>
                                <div className="text-xs leading-5 text-cyan-500">
                                  +6.25%
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 px-4 py-3">
                              <div className="flex-none rounded-full bg-indigo-700">
                                <svg
                                  viewBox="0 0 40 40"
                                  fill="#fff"
                                  stroke="#fff"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                  className="h-10 w-10">
                                  <path
                                    d="M22.16 19 26 13H14l3.84 6"
                                    fill="none"></path>
                                  <path d="M25 24a5 5 0 1 1-10 0 5 5 0 0 1 10 0Z"></path>
                                </svg>
                              </div>
                              <div className="flex-auto text-sm text-gray-900">
                                Diageo
                              </div>
                              <div className="flex-none text-right">
                                <div className="text-sm font-medium text-gray-900">
                                  250.65
                                </div>
                                <div className="text-xs leading-5 text-cyan-500">
                                  +1.25%
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 px-4 py-3">
                              <div className="flex-none rounded-full bg-indigo-700">
                                <svg
                                  viewBox="0 0 40 40"
                                  fill="#fff"
                                  aria-hidden="true"
                                  className="h-10 w-10">
                                  <path d="m26.068 10.555-11.49 13.089L12 21.089 23.489 8l2.58 2.555ZM28 18.91 16.512 32l-2.579-2.555 11.489-13.089L28 18.911Z"></path>
                                </svg>
                              </div>
                              <div className="flex-auto text-sm text-gray-900">
                                StaticKit
                              </div>
                              <div className="flex-none text-right">
                                <div className="text-sm font-medium text-gray-900">
                                  250.65
                                </div>
                                <div className="text-xs leading-5 text-gray-500">
                                  -3.38%
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 px-4 py-3">
                              <div className="flex-none rounded-full bg-indigo-700">
                                <svg
                                  viewBox="0 0 40 40"
                                  fill="#fff"
                                  aria-hidden="true"
                                  className="h-10 w-10">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M30.177 27.293c0 1.921-.644 2.707-2.398 2.707H12.22c-1.754 0-2.397-.786-2.397-2.707v-3.741c0-1.805-.837-2.824-1.642-3.291a.385.385 0 0 1-.133-.143.403.403 0 0 1 .133-.526c.837-.551 1.642-1.704 1.642-3.241v-3.677c0-2.072.547-2.674 2.3-2.674h15.754c1.754 0 2.3.602 2.3 2.674v3.675c0 1.537.805 2.69 1.641 3.24.243.168.243.52 0 .67-.804.484-1.64 1.503-1.64 3.29v3.743h-.001Zm-14.739-2.455c1.271 1.152 2.64 1.737 4.522 1.737 2.96 0 4.891-1.537 4.891-4.026 0-2.637-2.3-3.31-4.17-3.856-1.282-.375-2.363-.691-2.363-1.54 0-.551.564-1.086 1.513-1.086.917 0 1.674.2 2.397.584.242.117.467.2.676.2.306 0 .547-.15.756-.45l.29-.451a.955.955 0 0 0 .161-.55c0-.336-.161-.67-.402-.837-.966-.635-2.27-1.17-4.039-1.17-2.51 0-4.44 1.37-4.44 3.826 0 2.746 2.349 3.443 4.23 4h.001c1.255.372 2.3.681 2.3 1.497 0 .785-.707 1.17-1.592 1.17a5.19 5.19 0 0 1-2.992-.92c-.274-.183-.532-.3-.805-.3-.242 0-.451.117-.644.368l-.387.517a.888.888 0 0 0-.192.585c0 .25.08.501.29.702Z"></path>
                                </svg>
                              </div>
                              <div className="flex-auto text-sm text-gray-900">
                                Statamic
                              </div>
                              <div className="flex-none text-right">
                                <div className="text-sm font-medium text-gray-900">
                                  5,040.85
                                </div>
                                <div className="text-xs leading-5 text-gray-500">
                                  -3.11%
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 px-4 py-3">
                              <div className="flex-none rounded-full bg-indigo-700">
                                <svg
                                  viewBox="0 0 40 40"
                                  fill="#fff"
                                  aria-hidden="true"
                                  className="h-10 w-10">
                                  <path
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                    d="M24.05 9c2.307 0 4.177 1.885 4.177 4.21a4.21 4.21 0 0 1-2.762 3.964l3.366 6.057h2.304c.355 0 .642.29.642.647a.645.645 0 0 1-.642.647H7.142a.645.645 0 0 1-.642-.647c0-.358.288-.647.643-.647h2.304l5.994-10.747a.641.641 0 0 1 1.097-.036l3.444 5.32 1.071-1.627a4.214 4.214 0 0 1-1.178-2.93c0-2.326 1.87-4.211 4.176-4.211Zm-3.304 9.948 2.772 4.283h3.84l-4.317-7.769-2.295 3.486Zm1.239 4.283-5.944-9.183-5.121 9.183h11.065Zm5.038-10.02a2.995 2.995 0 0 1-2.159 2.883l-1.216-2.19a.64.64 0 0 0-1.096-.04l-.811 1.232a3 3 0 0 1-.663-1.885c0-1.655 1.332-2.997 2.973-2.997 1.641 0 2.972 1.341 2.972 2.997Z"></path>
                                  <path d="M12.069 26.469c-.354 0-.641.289-.641.646 0 .358.287.646.64.646h14.139c.354 0 .641-.29.641-.646a.644.644 0 0 0-.64-.646h-14.14Zm4.928 3.236a.645.645 0 0 0-.642.648c0 .357.288.647.642.647h4.282c.355 0 .643-.29.643-.647a.645.645 0 0 0-.643-.648h-4.282Z"></path>
                                </svg>
                              </div>
                              <div className="flex-auto text-sm text-gray-900">
                                Mirage
                              </div>
                              <div className="flex-none text-right">
                                <div className="text-sm font-medium text-gray-900">
                                  140.44
                                </div>
                                <div className="text-xs leading-5 text-cyan-500">
                                  +9.09%
                                </div>
                              </div>
                            </div>
                            <div className="flex items-center gap-4 px-4 py-3">
                              <div className="flex-none rounded-full bg-indigo-700">
                                <svg
                                  viewBox="0 0 40 40"
                                  fill="none"
                                  stroke="#fff"
                                  strokeWidth="2"
                                  strokeLinecap="square"
                                  strokeLinejoin="round"
                                  aria-hidden="true"
                                  className="h-10 w-10">
                                  <path d="M15 26v-5.25m0 0V16a2 2 0 0 1 2-2h4.21c.968 0 1.37 1.24.587 1.809L15 20.75Zm0 0L25 26"></path>
                                </svg>
                              </div>
                              <div className="flex-auto text-sm text-gray-900">
                                Reversable
                              </div>
                              <div className="flex-none text-right">
                                <div className="text-sm font-medium text-gray-900">
                                  550.60
                                </div>
                                <div className="text-xs leading-5 text-gray-500">
                                  -1.25%
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 366 729"
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100">
                      <path
                        fill="#F2F2F2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"></path>
                      <rect
                        x="154"
                        y="29"
                        width="56"
                        height="5"
                        rx="2.5"
                        fill="#D4D4D4"></rect>
                    </svg>
                    <Image
                      alt=""
                      loading="lazy"
                      width="366"
                      height="729"
                      decoding="async"
                      data-nimg="1"
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      src="/images/landing/phone-frame.d4b6b62a.svg"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                    <svg
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      className="h-8 w-8">
                      <circle
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#A3A3A3"
                        fillOpacity="0.2"></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                        fill="#A3A3A3"></path>
                      <path
                        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
                        fill="#737373"></path>
                    </svg>
                    <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                      Notifications on stock dips
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      Get a push notification every time we find out something
                      that’s going to lower the share price on your holdings so
                      you can sell before the information hits the public
                      markets.
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full flex-none snap-center px-4 sm:px-6">
                <div className="relative transform overflow-hidden rounded-2xl bg-gray-800 px-5 py-6">
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                    <svg
                      viewBox="0 0 558 558"
                      width="558"
                      height="558"
                      fill="none"
                      aria-hidden="true">
                      <defs>
                        <linearGradient
                          id=":r5:"
                          x1="79"
                          y1="16"
                          x2="105"
                          y2="237"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#13B5C8"></stop>
                          <stop
                            offset="1"
                            stop-color="#13B5C8"
                            stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <path
                        opacity=".2"
                        d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                        stroke="#13B5C8"></path>
                      <path
                        d="M1 279C1 125.465 125.465 1 279 1"
                        stroke="url(#:r5:)"
                        strokeLinecap="round"></path>
                    </svg>
                  </div>
                  <div className="aspect-[366/729] relative mx-auto w-full max-w-[366px]">
                    <div className="absolute inset-y-[calc(1/729*100%)] left-[calc(7/729*100%)] right-[calc(5/729*100%)] rounded-[calc(58/366*100%)/calc(58/729*100%)] shadow-2xl"></div>
                    <div className="absolute left-[calc(23/366*100%)] top-[calc(23/729*100%)] grid h-[calc(686/729*100%)] w-[calc(318/366*100%)] transform grid-cols-1 overflow-hidden bg-gray-900 pt-[calc(23/318*100%)]">
                      <div className="flex flex-col w-full">
                        <div className="flex justify-between px-4 pt-4">
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none">
                            <path
                              d="M5 6h14M5 18h14M5 12h14"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                          <svg
                            viewBox="0 0 79 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 flex-none">
                            <path
                              d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12ZM2.4 12a9.004 9.004 0 0 0 6.055 8.507c1.565.542 2.945-.85 2.945-2.507V6c0-1.657-1.38-3.049-2.945-2.507A9.004 9.004 0 0 0 2.4 12Z"
                              fill="#06B6D4"></path>
                            <path
                              d="M33.004 17V6.818h3.818c.783 0 1.439.146 1.97.438.533.291.935.692 1.207 1.203.275.507.413 1.084.413 1.73 0 .653-.138 1.233-.413 1.74a2.948 2.948 0 0 1-1.218 1.198c-.537.288-1.198.433-1.983.433h-2.531v-1.517h2.282c.457 0 .832-.08 1.124-.238.291-.16.507-.378.646-.657.142-.278.214-.598.214-.96 0-.36-.072-.679-.214-.954a1.452 1.452 0 0 0-.651-.641c-.292-.156-.668-.234-1.129-.234h-1.69V17h-1.845Zm12.152.15c-.746 0-1.392-.165-1.939-.493a3.343 3.343 0 0 1-1.273-1.377c-.298-.59-.447-1.28-.447-2.068 0-.79.15-1.48.447-2.073a3.335 3.335 0 0 1 1.273-1.383c.547-.328 1.193-.492 1.94-.492.745 0 1.391.164 1.938.492.547.329.97.79 1.268 1.383.301.593.452 1.284.452 2.073 0 .789-.15 1.478-.452 2.068a3.309 3.309 0 0 1-1.268 1.377c-.547.328-1.193.492-1.939.492Zm.01-1.443c.404 0 .742-.11 1.014-.333.272-.225.474-.527.607-.905.136-.377.204-.798.204-1.262 0-.468-.068-.89-.204-1.268a2.007 2.007 0 0 0-.607-.91c-.272-.225-.61-.338-1.014-.338-.414 0-.759.113-1.034.338a2.041 2.041 0 0 0-.612.91 3.81 3.81 0 0 0-.198 1.268c0 .464.066.885.198 1.262.136.378.34.68.612.905.275.222.62.333 1.034.333Zm8.508 1.442c-.763 0-1.417-.167-1.964-.502a3.352 3.352 0 0 1-1.258-1.387c-.292-.593-.437-1.276-.437-2.048 0-.776.149-1.46.447-2.054a3.34 3.34 0 0 1 1.263-1.392c.547-.334 1.193-.502 1.939-.502.62 0 1.168.115 1.645.343.48.226.864.546 1.149.96.285.41.447.891.487 1.441h-1.72a1.644 1.644 0 0 0-.497-.92c-.259-.248-.605-.372-1.04-.372-.367 0-.69.1-.969.298-.278.196-.495.478-.651.845-.153.368-.229.81-.229 1.323 0 .52.076.968.229 1.342.152.371.366.658.641.86.279.2.605.298.98.298.265 0 .502-.05.71-.149.213-.102.39-.25.532-.442.143-.192.24-.426.294-.701h1.72a2.999 2.999 0 0 1-.477 1.437c-.275.414-.65.739-1.124.974-.474.232-1.03.348-1.67.348Zm6.39-2.545-.006-2.173h.289l2.744-3.067h2.103l-3.376 3.758h-.372l-1.383 1.482ZM58.422 17V6.818h1.8V17h-1.8Zm4.792 0-2.485-3.475 1.213-1.268L65.368 17h-2.153Zm6.245.15c-.766 0-1.427-.16-1.984-.478a3.233 3.233 0 0 1-1.278-1.362c-.298-.59-.447-1.285-.447-2.083 0-.786.149-1.475.447-2.069a3.384 3.384 0 0 1 1.263-1.392c.54-.334 1.175-.502 1.904-.502.47 0 .915.076 1.333.229.42.149.792.381 1.113.696.325.315.58.716.766 1.203.186.484.278 1.06.278 1.73v.552h-6.259v-1.213h4.534a1.935 1.935 0 0 0-.224-.92 1.625 1.625 0 0 0-.611-.641 1.719 1.719 0 0 0-.905-.234c-.368 0-.691.09-.97.269a1.848 1.848 0 0 0-.65.696c-.153.285-.231.598-.234.94v1.058c0 .444.08.825.243 1.144.163.315.39.556.681.726.292.165.634.248 1.025.248.261 0 .498-.036.71-.11.213-.075.397-.187.552-.332.156-.146.274-.327.353-.542l1.68.189a2.62 2.62 0 0 1-.606 1.163 2.958 2.958 0 0 1-1.133.766c-.461.179-.988.268-1.581.268Zm8.731-7.786v1.392h-4.39V9.364h4.39Zm-3.306-1.83h1.8v7.17c0 .241.036.427.109.556a.59.59 0 0 0 .298.258c.123.047.259.07.408.07.113 0 .215-.008.308-.025.096-.016.17-.031.219-.045l.303 1.407c-.096.034-.233.07-.412.11-.176.04-.392.063-.647.07a2.934 2.934 0 0 1-1.218-.204 1.895 1.895 0 0 1-.86-.706c-.209-.319-.311-.716-.308-1.194V7.534Z"
                              fill="#fff"></path>
                          </svg>
                          <svg
                            viewBox="0 0 24 24"
                            fill="none"
                            aria-hidden="true"
                            className="h-6 w-6 flex-none">
                            <path
                              d="M15 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM6.696 19h10.608c1.175 0 2.08-.935 1.532-1.897C18.028 15.69 16.187 14 12 14s-6.028 1.689-6.836 3.103C4.616 18.065 5.521 19 6.696 19Z"
                              stroke="#fff"
                              strokeWidth="2"
                              strokeLinecap="round"
                              strokeLinejoin="round"></path>
                          </svg>
                        </div>
                        <div className="mt-6 px-4 text-white">
                          <div className="text-2xl text-white">Buy $LA</div>
                          <div className="text-sm text-gray-500">
                            <span className="text-white">$34.28</span> per share
                          </div>
                        </div>
                        <div className="mt-6 flex-auto rounded-t-2xl bg-white">
                          <div className="px-4 py-6">
                            <div className="space-y-4">
                              <div className="flex justify-between border-b border-gray-100 pb-4">
                                <div className="text-sm text-gray-500">
                                  Number of shares
                                </div>
                                <div className="text-sm font-semibold text-gray-900">
                                  100
                                </div>
                              </div>
                              <div className="flex justify-between border-b border-gray-100 pb-4">
                                <div className="text-sm text-gray-500">
                                  Current market price
                                </div>
                                <div className="text-sm font-semibold text-gray-900">
                                  <div className="flex">
                                    $34.28{" "}
                                    <svg
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      className="h-6 w-6">
                                      <path
                                        d="M17 15V7H9M17 7 7 17"
                                        stroke="#06B6D4"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"></path>
                                    </svg>
                                  </div>
                                </div>
                              </div>
                              <div className="flex justify-between border-b border-gray-100 pb-4">
                                <div className="text-sm text-gray-500">
                                  Estimated cost
                                </div>
                                <div className="text-sm font-semibold text-gray-900">
                                  $3,428.00
                                </div>
                              </div>
                              <div className="rounded-lg bg-cyan-500 px-3 py-2 text-center text-sm font-semibold text-white">
                                Buy shares
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <svg
                      viewBox="0 0 366 729"
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 h-full w-full fill-gray-100">
                      <path
                        fill="#F2F2F2"
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M300.092 1c41.22 0 63.223 21.99 63.223 63.213V184.94c-.173.184-.329.476-.458.851.188-.282.404-.547.647-.791.844-.073 2.496.257 2.496 2.157V268.719c-.406 2.023-2.605 2.023-2.605 2.023a7.119 7.119 0 0 1-.08-.102v394.462c0 41.213-22.001 63.212-63.223 63.212h-95.074c-.881-.468-2.474-.795-4.323-.838l-33.704-.005-.049.001h-.231l-.141-.001c-2.028 0-3.798.339-4.745.843H66.751c-41.223 0-63.223-21.995-63.223-63.208V287.739c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 284.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-16.289c-.402-.024-2.165-.23-2.524-2.02v-.973A2.039 2.039 0 0 1 1 214.62v-47.611c0-.042.001-.084.004-.126v-.726c0-1.9 1.652-2.23 2.496-2.157l.028.028v-26.041a2.26 2.26 0 0 0 .093-.236l-.064-.01a3.337 3.337 0 0 1-.72-.12l-.166-.028A2 2 0 0 1 1 135.62v-24.611a2 2 0 0 1 1.671-1.973l.857-.143v-44.68C3.528 22.99 25.53 1 66.75 1h233.341ZM3.952 234.516a5.481 5.481 0 0 0-.229-.278c.082.071.159.163.228.278Zm89.99-206.304A4.213 4.213 0 0 0 89.727 24H56.864C38.714 24 24 38.708 24 56.852v618.296C24 693.292 38.714 708 56.864 708h250.272c18.15 0 32.864-14.708 32.864-32.852V56.852C340 38.708 325.286 24 307.136 24h-32.864a4.212 4.212 0 0 0-4.213 4.212v2.527c0 10.235-8.3 18.532-18.539 18.532H112.48c-10.239 0-18.539-8.297-18.539-18.532v-2.527Z"></path>
                      <rect
                        x="154"
                        y="29"
                        width="56"
                        height="5"
                        rx="2.5"
                        fill="#D4D4D4"></rect>
                    </svg>
                    <Image
                      alt=""
                      loading="lazy"
                      width="366"
                      height="729"
                      decoding="async"
                      data-nimg="1"
                      className="pointer-events-none absolute inset-0 h-full w-full"
                      src="/images/landing/phone-frame.d4b6b62a.svg"
                    />
                  </div>
                  <div className="absolute inset-x-0 bottom-0 bg-gray-800/95 p-6 backdrop-blur sm:p-10">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      aria-hidden="true"
                      className="h-8 w-8">
                      <defs>
                        <linearGradient
                          id=":r6:-gradient"
                          x1="14"
                          y1="14.5"
                          x2="7"
                          y2="17"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#737373"></stop>
                          <stop
                            offset="1"
                            stop-color="#D4D4D4"
                            stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <circle
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#A3A3A3"
                        fillOpacity="0.2"></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
                        fill="#A3A3A3"></path>
                      <path
                        d="M7 22c0-4.694 3.5-8 8-8"
                        stroke="url(#:r6:-gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                      <path
                        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
                        fill="#A3A3A3"></path>
                    </svg>
                    <h3 className="mt-6 text-sm font-semibold text-white sm:text-lg">
                      Invest what you want
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      We hide your stock purchases behind thousands of anonymous
                      trading accounts, so suspicious activity can never be
                      traced back to you.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center gap-3">
              <button
                type="button"
                className="relative h-0.5 w-4 rounded-full bg-gray-300"
                aria-label="Go to slide 1">
                <span className="absolute -inset-x-1.5 -inset-y-3"></span>
              </button>
              <button
                type="button"
                className="relative h-0.5 w-4 rounded-full bg-gray-500"
                aria-label="Go to slide 2">
                <span className="absolute -inset-x-1.5 -inset-y-3"></span>
              </button>
              <button
                type="button"
                className="relative h-0.5 w-4 rounded-full bg-gray-500"
                aria-label="Go to slide 3">
                <span className="absolute -inset-x-1.5 -inset-y-3"></span>
              </button>
            </div>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 hidden md:mt-20 md:block">
            <div className="grid grid-cols-12 items-center gap-8 lg:gap-16 xl:gap-24">
              <div
                className="relative z-10 order-last col-span-6 space-y-6"
                role="tablist"
                aria-orientation="vertical">
                <div className="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                  <div className="absolute inset-0 bg-gray-800 rounded-lg opacity-100"></div>
                  <div className="relative z-10 p-8">
                    <svg
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      className="h-8 w-8">
                      <circle
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#A3A3A3"
                        fillOpacity="0.2"></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M16 23a3 3 0 100-6 3 3 0 000 6zm-1 2a4 4 0 00-4 4v1a2 2 0 002 2h6a2 2 0 002-2v-1a4 4 0 00-4-4h-2z"
                        fill="#737373"></path>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v24a4.002 4.002 0 01-3.01 3.877c-.535.136-.99-.325-.99-.877s.474-.98.959-1.244A2 2 0 0025 28V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 001.041 1.756C8.525 30.02 9 30.448 9 31s-.455 1.013-.99.877A4.002 4.002 0 015 28V4z"
                        fill="#A3A3A3"></path>
                    </svg>
                    <h3 className="mt-6 text-lg font-semibold text-white">
                      <button
                        className="text-left ui-not-focus-visible:outline-none"
                        id="headlessui-tabs-tab-:r7:"
                        role="tab"
                        type="button"
                        aria-selected="true"
                        tabIndex={0}
                        data-headlessui-state="selected"
                        aria-controls="headlessui-tabs-panel-:rd:">
                        <span className="absolute inset-0 rounded-2xl"></span>
                        Undang teman untuk mendapatkan hasil yang lebih baik
                      </button>
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      Raih keuntungan tanpa batas lewat Program Afiliasi.
                      Pendaftaran GRATIS tanpa dipungut biaya apa pun
                    </p>
                  </div>
                </div>
                <div className="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                  <div className="relative z-10 p-8">
                    <svg
                      viewBox="0 0 32 32"
                      aria-hidden="true"
                      className="h-8 w-8">
                      <circle
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#A3A3A3"
                        fillOpacity="0.2"></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                        fill="#A3A3A3"></path>
                      <path
                        d="M9 8a2 2 0 012-2h10a2 2 0 012 2v2a2 2 0 01-2 2H11a2 2 0 01-2-2V8z"
                        fill="#737373"></path>
                    </svg>
                    <h3 className="mt-6 text-lg font-semibold text-white">
                      <button
                        className="text-left ui-not-focus-visible:outline-none"
                        id="headlessui-tabs-tab-:r8:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabIndex={-1}
                        data-headlessui-state="">
                        <span className="absolute inset-0 rounded-2xl"></span>
                        Mudah digunakan
                      </button>
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      Interface dan tool desain website builder Hostinger
                      membebaskan Anda untuk berkreasi dengan tampilan dan
                      fungsionalitas website Anda.
                    </p>
                  </div>
                </div>
                <div className="relative rounded-2xl transition-colors hover:bg-gray-800/30">
                  <div className="relative z-10 p-8">
                    <svg
                      viewBox="0 0 32 32"
                      fill="none"
                      aria-hidden="true"
                      className="h-8 w-8">
                      <defs>
                        <linearGradient
                          id=":r9:-gradient"
                          x1="14"
                          y1="14.5"
                          x2="7"
                          y2="17"
                          gradientUnits="userSpaceOnUse">
                          <stop stop-color="#737373"></stop>
                          <stop
                            offset="1"
                            stop-color="#D4D4D4"
                            stopOpacity="0"></stop>
                        </linearGradient>
                      </defs>
                      <circle
                        cx="16"
                        cy="16"
                        r="16"
                        fill="#A3A3A3"
                        fillOpacity="0.2"></circle>
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M5 4a4 4 0 014-4h14a4 4 0 014 4v13h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h4v2H9a4 4 0 01-4-4V4z"
                        fill="#A3A3A3"></path>
                      <path
                        d="M7 22c0-4.694 3.5-8 8-8"
                        stroke="url(#:r9:-gradient)"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"></path>
                      <path
                        d="M21 20l.217-5.513a1.431 1.431 0 00-2.85-.226L17.5 21.5l-1.51-1.51a2.107 2.107 0 00-2.98 0 .024.024 0 00-.005.024l3.083 9.25A4 4 0 0019.883 32H25a4 4 0 004-4v-5a3 3 0 00-3-3h-5z"
                        fill="#A3A3A3"></path>
                    </svg>
                    <h3 className="mt-6 text-lg font-semibold text-white">
                      <button
                        className="text-left ui-not-focus-visible:outline-none"
                        id="headlessui-tabs-tab-:ra:"
                        role="tab"
                        type="button"
                        aria-selected="false"
                        tabIndex={-1}
                        data-headlessui-state="">
                        <span className="absolute inset-0 rounded-2xl"></span>
                        Tidak perlu business
                      </button>
                    </h3>
                    <p className="mt-2 text-sm text-gray-400">
                      Tidak perlu skill coding atau desain web sama sekali.
                      Website buildernya punya fitur lengkap. Tampilan
                      buildernya minimalis dan tidak membingungkan.
                    </p>
                  </div>
                </div>
              </div>
              <div className="relative col-span-6">
                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                  <svg
                    viewBox="0 0 558 558"
                    width="558"
                    height="558"
                    fill="none"
                    aria-hidden="true"
                    className="animate-spin-slower">
                    <defs>
                      <linearGradient
                        id=":rb:"
                        x1="79"
                        y1="16"
                        x2="105"
                        y2="237"
                        gradientUnits="userSpaceOnUse">
                        <stop stop-color="#13B5C8"></stop>
                        <stop
                          offset="1"
                          stop-color="#13B5C8"
                          stopOpacity="0"></stop>
                      </linearGradient>
                    </defs>
                    <path
                      opacity=".2"
                      d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                      stroke="#13B5C8"></path>
                    <path
                      d="M1 279C1 125.465 125.465 1 279 1"
                      stroke="url(#:rb:)"
                      strokeLinecap="round"></path>
                  </svg>
                </div>
                <div className="">
                  <Image
                    src="/images/landing/ecomerce-mobile.webp"
                    width={650}
                    height={650}
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        <section
          id="secondary-features"
          aria-label="Features for building a portfolio"
          className="py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl sm:text-center">
              <h2 className="text-3xl font-medium tracking-tight text-gray-900">
                Now is the time to build your portfolio.
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                With typical market returns, you have to start young to secure
                your future. With Pocket, it’s never too late to build your nest
                egg.
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 text-sm sm:mt-20 sm:grid-cols-2 md:gap-y-10 lg:max-w-none lg:grid-cols-3">
              <li className="rounded-2xl border border-gray-200 p-8">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                    fill="#737373"></path>
                  <path
                    d="M12 25l8-8m0 0h-6m6 0v6"
                    stroke="#171717"
                    strokeWidth="2"
                    strokeLinecap="round"></path>
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#A3A3A3"
                    fillOpacity="0.2"></circle>
                </svg>
                <h3 className="mt-6 font-semibold text-gray-900">
                  RIBUAN PRODUK
                </h3>
                <p className="mt-2 text-gray-700">
                  Tersedia ribuan produk fashion siap jual dengan kualitas
                  terbaik.
                </p>
              </li>
              <li className="rounded-2xl border border-gray-200 p-8">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                    fill="#737373"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 13a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm0 6a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H10a1 1 0 01-1-1v-2zm1 5a1 1 0 00-1 1v2a1 1 0 001 1h12a1 1 0 001-1v-2a1 1 0 00-1-1H10z"
                    fill="url(#:S3:-gradient)"></path>
                  <rect
                    x="9"
                    y="6"
                    width="14"
                    height="4"
                    rx="1"
                    fill="#171717"></rect>
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#A3A3A3"
                    fillOpacity="0.2"></circle>
                  <defs>
                    <linearGradient
                      id=":S3:-gradient"
                      x1="16"
                      y1="12"
                      x2="16"
                      y2="28"
                      gradientUnits="userSpaceOnUse">
                      <stop stop-color="#737373"></stop>
                      <stop
                        offset="1"
                        stop-color="#737373"
                        stopOpacity="0"></stop>
                    </linearGradient>
                  </defs>
                </svg>
                <h3 className="mt-6 font-semibold text-gray-900">
                  HARGA TERMURAH
                </h3>
                <p className="mt-2 text-gray-700">
                  Kami menjamin harga barang kompetitif untuk anda jual kembali.
                </p>
              </li>
              <li className="rounded-2xl border border-gray-200 p-8">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#A3A3A3"
                    fillOpacity="0.2"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
                    fill="#737373"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M24 32a8 8 0 100-16 8 8 0 000 16zm1-8.414V19h-2v5.414l4 4L28.414 27 25 23.586z"
                    fill="#171717"></path>
                </svg>
                <h3 className="mt-6 font-semibold text-gray-900">
                  CEK STOK ONLINE
                </h3>
                <p className="mt-2 text-gray-700">
                  Informasi stok barang tersedia di web dan di-update setiap
                  hari.
                </p>
              </li>
              <li className="rounded-2xl border border-gray-200 p-8">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                  className="h-8 w-8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                    fill="#737373"></path>
                  <circle cx="11" cy="14" r="2" fill="#171717"></circle>
                  <circle cx="11" cy="20" r="2" fill="#171717"></circle>
                  <circle cx="11" cy="26" r="2" fill="#171717"></circle>
                  <path
                    d="M16 14h6M16 20h6M16 26h6"
                    stroke="#737373"
                    strokeWidth="2"
                    strokeLinecap="square"></path>
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#A3A3A3"
                    fillOpacity="0.2"></circle>
                </svg>
                <h3 className="mt-6 font-semibold text-gray-900">
                  TOKO ONLINE GRATIS
                </h3>
                <p className="mt-2 text-gray-700">
                  Anda bisa membuat banyak toko online sesuai kebutuhan
                </p>
              </li>
              <li className="rounded-2xl border border-gray-200 p-8">
                <svg viewBox="0 0 32 32" aria-hidden="true" className="h-8 w-8">
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#A3A3A3"
                    fillOpacity="0.2"></circle>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5 4a4 4 0 014-4h14a4 4 0 014 4v10h-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9a2 2 0 00-2 2v24a2 2 0 002 2h5v2H9a4 4 0 01-4-4V4z"
                    fill="#737373"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18 19.5a3.5 3.5 0 117 0V22a2 2 0 012 2v6a2 2 0 01-2 2h-7a2 2 0 01-2-2v-6a2 2 0 012-2v-2.5zm2 2.5h3v-2.5a1.5 1.5 0 00-3 0V22z"
                    fill="#171717"></path>
                </svg>
                <h3 className="mt-6 font-semibold text-gray-900">
                  BUAT BRAND SENDIRI
                </h3>
                <p className="mt-2 text-gray-700">
                  Jualan di Shopee Mall, Tokopedia Official Store, LazMall dll
                </p>
              </li>
              <li className="rounded-2xl border border-gray-200 p-8">
                <svg
                  viewBox="0 0 32 32"
                  fill="none"
                  aria-hidden="true"
                  className="h-8 w-8">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M9 0a4 4 0 00-4 4v24a4 4 0 004 4h14a4 4 0 004-4V4a4 4 0 00-4-4H9zm0 2a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2h-1.382a1 1 0 00-.894.553l-.448.894a1 1 0 01-.894.553h-6.764a1 1 0 01-.894-.553l-.448-.894A1 1 0 0010.382 2H9z"
                    fill="#737373"></path>
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 13.838V26a2 2 0 01-2 2H11a2 2 0 01-2-2V15.65l2.57 3.212a1 1 0 001.38.175L15.4 17.2a1 1 0 011.494.353l1.841 3.681c.399.797 1.562.714 1.843-.13L23 13.837z"
                    fill="#171717"></path>
                  <path
                    d="M10 12h12"
                    stroke="#737373"
                    strokeWidth="2"
                    strokeLinecap="square"></path>
                  <circle
                    cx="16"
                    cy="16"
                    r="16"
                    fill="#A3A3A3"
                    fillOpacity="0.2"></circle>
                </svg>
                <h3 className="mt-6 font-semibold text-gray-900">
                  GARANSI RETUR
                </h3>
                <p className="mt-2 text-gray-700">
                  Kami berikan garansi pengembalian 40 hari. Bisa ganti model/
                  ukuran.
                </p>
              </li>
            </ul>
          </div>
        </section>
        <section
          id="get-free-shares-today"
          className="relative overflow-hidden bg-gray-900 py-20 sm:py-28">
          <div className="absolute left-20 top-1/2 -translate-y-1/2 sm:left-1/2 sm:-translate-x-1/2">
            <svg
              viewBox="0 0 558 558"
              width="558"
              height="558"
              fill="none"
              aria-hidden="true"
              className="animate-spin-slower">
              <defs>
                <linearGradient
                  id=":S4:"
                  x1="79"
                  y1="16"
                  x2="105"
                  y2="237"
                  gradientUnits="userSpaceOnUse">
                  <stop stop-color="#fff"></stop>
                  <stop offset="1" stop-color="#fff" stopOpacity="0"></stop>
                </linearGradient>
              </defs>
              <path
                opacity=".2"
                d="M1 279C1 125.465 125.465 1 279 1s278 124.465 278 278-124.465 278-278 278S1 432.535 1 279Z"
                stroke="#fff"></path>
              <path
                d="M1 279C1 125.465 125.465 1 279 1"
                stroke="url(#:S4:)"
                strokeLinecap="round"></path>
            </svg>
          </div>
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
            <div className="mx-auto max-w-md sm:text-center">
              <h2 className="text-3xl font-medium tracking-tight text-white sm:text-4xl">
                Get your first tips today
              </h2>
              <p className="mt-4 text-lg text-gray-300">
                It takes 30 seconds to sign up. Download the app and create an
                account today and we’ll send you a tip guaranteed to double your
                first investment.
              </p>
              <div className="mt-8 flex justify-center">
                <a
                  aria-label="Download on the App Store"
                  className="rounded-lg transition-colors bg-white text-gray-900 hover:bg-gray-50"
                  href="#">
                  <svg viewBox="0 0 120 40" aria-hidden="true" className="h-10">
                    <path
                      fill="currentColor"
                      d="M24.769 20.301a4.947 4.947 0 0 1 2.357-4.152 5.066 5.066 0 0 0-3.992-2.157c-1.679-.177-3.307 1.004-4.163 1.004-.872 0-2.19-.987-3.608-.958a5.315 5.315 0 0 0-4.473 2.728c-1.934 3.349-.491 8.27 1.361 10.976.927 1.326 2.01 2.806 3.428 2.753 1.387-.057 1.905-.884 3.58-.884 1.658 0 2.144.884 3.59.851 1.489-.024 2.426-1.331 3.32-2.669a10.96 10.96 0 0 0 1.52-3.092 4.782 4.782 0 0 1-2.92-4.4ZM22.037 12.211a4.872 4.872 0 0 0 1.115-3.49 4.957 4.957 0 0 0-3.208 1.66 4.635 4.635 0 0 0-1.143 3.36 4.099 4.099 0 0 0 3.236-1.53ZM42.302 27.14H37.57l-1.137 3.356h-2.005l4.484-12.418h2.083l4.483 12.418h-2.039l-1.136-3.356Zm-4.243-1.55h3.752l-1.85-5.446h-.051l-1.85 5.447ZM55.16 25.97c0 2.813-1.506 4.62-3.779 4.62a3.068 3.068 0 0 1-2.848-1.584h-.043v4.485H46.63V21.442h1.8v1.506h.033a3.21 3.21 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.622Zm-1.91 0c0-1.833-.948-3.039-2.393-3.039-1.42 0-2.375 1.23-2.375 3.038 0 1.825.955 3.046 2.375 3.046 1.445 0 2.392-1.196 2.392-3.046ZM65.124 25.97c0 2.813-1.505 4.62-3.778 4.62a3.07 3.07 0 0 1-2.848-1.584h-.043v4.485h-1.859V21.442h1.799v1.506h.034a3.21 3.21 0 0 1 2.883-1.6c2.298 0 3.813 1.816 3.813 4.621Zm-1.91 0c0-1.834-.947-3.039-2.392-3.039-1.42 0-2.375 1.23-2.375 3.038 0 1.825.955 3.046 2.375 3.046 1.445 0 2.392-1.196 2.392-3.046ZM71.71 27.036c.138 1.232 1.335 2.04 2.97 2.04 1.566 0 2.693-.808 2.693-1.919 0-.964-.68-1.54-2.29-1.936l-1.609-.388c-2.28-.55-3.339-1.617-3.339-3.348 0-2.142 1.867-3.614 4.519-3.614 2.624 0 4.423 1.472 4.483 3.614h-1.876c-.112-1.239-1.136-1.987-2.634-1.987-1.497 0-2.521.757-2.521 1.858 0 .878.654 1.395 2.255 1.79l1.368.336c2.548.603 3.606 1.626 3.606 3.443 0 2.323-1.85 3.778-4.793 3.778-2.754 0-4.614-1.42-4.734-3.667h1.902ZM83.346 19.3v2.142h1.722v1.472h-1.722v4.991c0 .776.345 1.137 1.102 1.137.204-.004.408-.018.611-.043v1.463c-.34.064-.686.092-1.032.086-1.833 0-2.548-.689-2.548-2.444v-5.19h-1.316v-1.472h1.316V19.3h1.867ZM86.065 25.97c0-2.849 1.678-4.639 4.294-4.639 2.625 0 4.295 1.79 4.295 4.639 0 2.856-1.661 4.638-4.295 4.638-2.633 0-4.294-1.782-4.294-4.638Zm6.695 0c0-1.954-.895-3.108-2.401-3.108-1.506 0-2.4 1.162-2.4 3.108 0 1.962.894 3.106 2.4 3.106 1.506 0 2.401-1.144 2.401-3.106ZM96.186 21.442h1.772v1.541h.043a2.16 2.16 0 0 1 2.178-1.636c.214 0 .428.023.637.07v1.738a2.594 2.594 0 0 0-.835-.112 1.872 1.872 0 0 0-1.937 2.083v5.37h-1.858v-9.054ZM109.384 27.837c-.25 1.643-1.85 2.771-3.898 2.771-2.634 0-4.269-1.764-4.269-4.595 0-2.84 1.644-4.682 4.191-4.682 2.505 0 4.08 1.72 4.08 4.466v.637h-6.395v.112a2.353 2.353 0 0 0 .639 1.832 2.364 2.364 0 0 0 1.797.732 2.045 2.045 0 0 0 2.091-1.273h1.764Zm-6.282-2.702h4.526a2.167 2.167 0 0 0-.608-1.634 2.168 2.168 0 0 0-1.612-.664 2.293 2.293 0 0 0-2.306 2.298ZM37.826 8.731a2.64 2.64 0 0 1 2.808 2.965c0 1.906-1.03 3.002-2.808 3.002h-2.155V8.731h2.155Zm-1.228 5.123h1.125a1.877 1.877 0 0 0 1.967-2.146 1.881 1.881 0 0 0-1.967-2.133h-1.125v4.28ZM41.68 12.445a2.133 2.133 0 1 1 4.248 0 2.132 2.132 0 1 1-4.247 0Zm3.334 0c0-.976-.439-1.547-1.209-1.547-.772 0-1.206.57-1.206 1.547 0 .984.434 1.55 1.207 1.55.769 0 1.208-.57 1.208-1.55ZM51.573 14.697h-.922l-.93-3.316h-.07l-.927 3.316h-.913l-1.242-4.503h.902l.806 3.436h.067l.925-3.436h.853l.926 3.436h.07l.803-3.436h.889l-1.237 4.503ZM53.853 10.195h.856v.715h.066a1.348 1.348 0 0 1 1.344-.802 1.466 1.466 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.314-1.084-.972-1.084a1.034 1.034 0 0 0-1.075 1.141v2.635h-.889v-4.503ZM59.094 8.437h.888v6.26h-.888v-6.26ZM61.218 12.444a2.133 2.133 0 1 1 4.248 0 2.134 2.134 0 1 1-4.248 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.772 0-1.207.57-1.207 1.547 0 .984.435 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM66.4 13.425c0-.81.604-1.278 1.676-1.344l1.22-.07v-.39c0-.475-.315-.744-.922-.744-.497 0-.84.183-.939.5h-.86c.09-.773.818-1.269 1.84-1.269 1.128 0 1.765.562 1.765 1.514v3.076h-.855v-.633h-.07a1.515 1.515 0 0 1-1.353.707 1.36 1.36 0 0 1-1.501-1.347Zm2.895-.385v-.376l-1.1.07c-.62.041-.9.252-.9.65 0 .405.351.64.834.64a1.062 1.062 0 0 0 1.166-.984ZM71.348 12.444c0-1.423.732-2.324 1.87-2.324a1.484 1.484 0 0 1 1.38.79h.067V8.437h.888v6.26h-.851v-.711h-.07a1.563 1.563 0 0 1-1.415.785c-1.145 0-1.869-.9-1.869-2.327Zm.918 0c0 .955.45 1.53 1.203 1.53.75 0 1.212-.583 1.212-1.526 0-.939-.468-1.53-1.212-1.53-.748 0-1.203.579-1.203 1.526ZM79.23 12.445a2.133 2.133 0 1 1 4.247 0 2.132 2.132 0 1 1-4.247 0Zm3.333 0c0-.976-.439-1.547-1.208-1.547-.773 0-1.207.57-1.207 1.547 0 .984.434 1.55 1.207 1.55.77 0 1.208-.57 1.208-1.55ZM84.67 10.195h.855v.715h.066a1.349 1.349 0 0 1 1.344-.802 1.466 1.466 0 0 1 1.559 1.675v2.915h-.889v-2.692c0-.724-.315-1.084-.972-1.084a1.034 1.034 0 0 0-1.075 1.141v2.635h-.889v-4.503ZM93.515 9.074v1.142h.976v.748h-.976v2.316c0 .472.195.678.637.678.113 0 .226-.007.339-.02v.74c-.16.028-.322.043-.484.045-.988 0-1.382-.348-1.382-1.216v-2.543h-.714v-.748h.715V9.074h.89ZM95.705 8.437h.88v2.481h.07a1.386 1.386 0 0 1 1.374-.807 1.485 1.485 0 0 1 1.55 1.679v2.907h-.889V12.01c0-.719-.335-1.083-.963-1.083a1.05 1.05 0 0 0-1.134 1.141v2.63h-.888v-6.26ZM104.761 13.482a1.823 1.823 0 0 1-1.951 1.302 2.047 2.047 0 0 1-2.08-2.324 2.093 2.093 0 0 1 .071-.88 2.08 2.08 0 0 1 2.005-1.473c1.253 0 2.009.856 2.009 2.27v.31h-3.18v.05a1.19 1.19 0 0 0 1.2 1.29 1.077 1.077 0 0 0 1.071-.545h.855Zm-3.126-1.452h2.275a1.094 1.094 0 0 0-.667-1.084 1.086 1.086 0 0 0-.442-.082 1.151 1.151 0 0 0-1.166 1.166Z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section
          id="reviews"
          aria-labelledby="reviews-title"
          className="pb-4 pt-8 sm:pb-4 sm:pt-4">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2
              id="reviews-title"
              className="text-3xl font-medium tracking-tight text-gray-900 sm:text-center">
              Everyone is changing their life with Pocket.
            </h2>
            <p className="mt-2 text-lg text-gray-600 sm:text-center">
              Thousands of people have doubled their net-worth in the last 30
              days.
            </p>
            <div className="relative -mx-4 mt-2 grid  grid-cols-1 items-start gap-8 overflow-hidden px-4 sm:mt-20 md:grid-cols-2 lg:grid-cols-3">
              <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-gray-50"></div>
              <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-gray-50"></div>
            </div>
          </div>
        </section>
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
                Whether you’re one person trying to get ahead or a big firm
                trying to take over the world, we’ve got a plan for you.
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
                    Monthly
                  </div>
                  <div
                    className="cursor-pointer border border-gray-300 px-[calc(theme(spacing.3)-1px)] py-[calc(theme(spacing.2)-1px)] text-sm text-gray-700 outline-2 outline-offset-2 transition-colors hover:border-gray-400 -ml-px rounded-r-lg"
                    id="headlessui-radiogroup-option-:rg:"
                    role="radio"
                    aria-checked="false"
                    tabIndex={-1}
                    data-headlessui-state="">
                    Annually
                  </div>
                </div>
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 z-10 grid grid-cols-2 overflow-hidden rounded-lg bg-cyan-500 transition-all duration-300 [clip-path:inset(0_50%_0_0)]">
                  <div className="py-2 text-center text-sm font-semibold text-white">
                    Monthly
                  </div>
                  <div className="py-2 text-center text-sm font-semibold text-white -ml-px">
                    Annually
                  </div>
                </div>
              </div>
            </div>
            <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-10 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              {data.map((item: PackageData) => (
                <section
                  key={item.id}
                  className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
                  <h3 className="flex items-center text-sm font-semibold text-gray-900">
                    <svg
                      viewBox="0 0 40 40"
                      aria-hidden="true"
                      className="h-6 w-6 flex-none fill-gray-300">
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path>
                    </svg>
                    <span className="ml-4">Starter</span>
                  </h3>
                  <p className="relative mt-5 flex text-3xl tracking-tight text-gray-900">
                    $0
                  </p>
                  <p className="mt-3 text-sm text-gray-700">
                    You’re new to investing but want to do it right. Get started
                    for free.
                  </p>
                  <div className="order-last mt-6">
                    <ul
                      role="list"
                      className="-my-2 divide-y text-sm divide-gray-200 text-gray-700">
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
                        <span className="ml-4">Commission-free trading</span>
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
                      </li>
                    </ul>
                  </div>
                  <a
                    className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6"
                    aria-label="Get started with the Starter plan for [object Object]"
                    href="/register">
                    Get started for free
                  </a>
                </section>
              ))}
              {/* <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 bg-white">
                <h3 className="flex items-center text-sm font-semibold text-gray-900">
                  <svg
                    viewBox="0 0 40 40"
                    aria-hidden="true"
                    className="h-6 w-6 flex-none fill-gray-500">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path>
                  </svg>
                  <span className="ml-4">Investor</span>
                </h3>
                <p className="relative mt-5 flex text-3xl tracking-tight text-gray-900">
                  <span aria-hidden="false" className="transition duration-300">
                    $7
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 transition duration-300 pointer-events-none -translate-x-6 select-none opacity-0">
                    $70
                  </span>
                </p>
                <p className="mt-3 text-sm text-gray-700">
                  You’ve been investing for a while. Invest more and grow your
                  wealth faster.
                </p>
                <div className="order-last mt-6">
                  <ul
                    role="list"
                    className="-my-2 divide-y text-sm divide-gray-200 text-gray-700">
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
                      <span className="ml-4">Commission-free trading</span>
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
                      <span className="ml-4">One tip every hour</span>
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
                        Invest up to $15,000 each month
                      </span>
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
                        Basic transaction anonymization
                      </span>
                    </li>
                  </ul>
                </div>
                <a
                  className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 mt-6"
                  aria-label="Get started with the Investor plan for [object Object]"
                  href="/register">
                  Subscribe
                </a>
              </section>
              <section className="flex flex-col overflow-hidden rounded-3xl p-6 shadow-lg shadow-gray-900/5 order-first bg-gray-900 lg:order-none">
                <h3 className="flex items-center text-sm font-semibold text-white">
                  <svg
                    viewBox="0 0 40 40"
                    aria-hidden="true"
                    className="h-6 w-6 flex-none fill-cyan-500">
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M20 40C8.954 40 0 31.046 0 20S8.954 0 20 0s20 8.954 20 20-8.954 20-20 20ZM4 20c0 7.264 5.163 13.321 12.02 14.704C17.642 35.03 19 33.657 19 32V8c0-1.657-1.357-3.031-2.98-2.704C9.162 6.68 4 12.736 4 20Z"></path>
                  </svg>
                  <span className="ml-4">VIP</span>
                </h3>
                <p className="relative mt-5 flex text-3xl tracking-tight text-white">
                  <span aria-hidden="false" className="transition duration-300">
                    $199
                  </span>
                  <span
                    aria-hidden="true"
                    className="absolute left-0 top-0 transition duration-300 pointer-events-none -translate-x-6 select-none opacity-0">
                    $1,990
                  </span>
                </p>
                <p className="mt-3 text-sm text-gray-300">
                  You’ve got a huge amount of assets but it’s not enough. To the
                  moon.
                </p>
                <div className="order-last mt-6">
                  <ul
                    role="list"
                    className="-my-2 divide-y text-sm divide-gray-800 text-gray-300">
                    <li className="flex py-2">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none text-white">
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
                      <span className="ml-4">Commission-free trading</span>
                    </li>
                    <li className="flex py-2">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none text-white">
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
                        className="h-6 w-6 flex-none text-white">
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
                      <span className="ml-4">Real-time tip notifications</span>
                    </li>
                    <li className="flex py-2">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none text-white">
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
                      <span className="ml-4">No investment limits</span>
                    </li>
                    <li className="flex py-2">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none text-white">
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
                        Advanced transaction anonymization
                      </span>
                    </li>
                    <li className="flex py-2">
                      <svg
                        viewBox="0 0 24 24"
                        aria-hidden="true"
                        className="h-6 w-6 flex-none text-white">
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
                        Automated tax-loss harvesting
                      </span>
                    </li>
                  </ul>
                </div>
                <a
                  className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors mt-6"
                  aria-label="Get started with the VIP plan for [object Object]"
                  href="/register">
                  Subscribe
                </a>
              </section> */}
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          aria-label="About for investing all your money"
          className="border-t border-gray-200 bg-stone-100 py-4 sm:py-4">
          <PageAbout />
        </section>

        <section
          id="faqs"
          aria-labelledby="faqs-title"
          className="border-t border-gray-200 py-20 sm:py-32">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2
                id="faqs-title"
                className="text-3xl font-medium tracking-tight text-gray-900">
                Tanya Jawab (FAQ) Website Business Toko Online SmartShop
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                If you have anything else you want to ask,{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-gray-900 underline">
                  reach out to us
                </a>{" "}
              </p>
            </div>
            <ul
              role="list"
              className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:mt-20 lg:max-w-none lg:grid-cols-3">
              <li>
                <ul role="list" className="space-y-10">
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Apa Itu Toko Online?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Toko online adalah toko yang menjual produk dan layanannya
                      melalui internet. Jenis usaha ini berbeda dengan toko
                      konvensional yang masih berjualan lewat bangunan fisik.
                      Website eCommerce adalah platform yang mendukung aktivitas
                      jual beli produk atau layanan di internet. Dengan kata
                      lain, website eCommerce adalah toko online. Setelah
                      pembeli melunasi pembayaran, produk yang dipesan akan
                      diantarkan ke alamat pembeli. Opsi pembayaran di transaksi
                      eCommerce bervariasi, mulai dari pembayaran digital hingga
                      COD.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Mengapa Saya Perlu Website untuk Jualan Online?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Meskipun sudah berjualan di marketplace, Anda masih bisa
                      mendapatkan keuntungan lebih banyak dengan memiliki
                      website toko online sendiri. Anda bebas melakukan optimasi
                      untuk mendatangkan lebih banyak pelanggan lewat mesin
                      pencari, seperti Google, dan menautkannya dengan akun
                      media sosial yang dimiliki. Sudah jadi rahasia umum kalau
                      persaingan di marketplace lebih sulit karena mereka
                      memiliki algoritmanya sendiri. Anda pun harus berusaha
                      lebih keras agar toko terlihat pembeli. Tapi, apabila
                      punya website toko online sendiri, Anda tidak perlu
                      mengalami hal ini. Cukup pilih domain profesional yang
                      memuat nama usaha dan buat website toko online terbaik
                      versi Anda. Selain itu, banyak marketplace yang
                      membebankan biaya administrasi hingga 15% dari setiap
                      produk yang berhasil terjual membuat margin keuntungan
                      Anda menjadi lebih kecil.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Apakah Bisnis Toko Online Menguntungkan?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Jika dibandingkan dengan toko konvensional, tentu saja
                      lebih menguntungkan. Toko online tidak perlu bangunan
                      fisik. Jadi, Anda tidak perlu memikirkan biaya listrik,
                      air, dan sewa bulanan. Toko online bisa diakses 24/7 oleh
                      siapa saja dari seluruh dunia; tidak dibatasi waktu buka
                      atau lokasi toko. Biaya operasionalnya juga bisa lebih
                      murah karena Anda tidak perlu mempekerjakan banyak
                      karyawan.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="space-y-10">
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Apakah Jualan Online Hanya untuk Bisnis Profesional?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Tidak. Mulai dari bisnis individu dan kecil hingga
                      perusahaan multinasional bisa berjulan online. Meskipun
                      sudah memiliki website, Anda bisa meningkatkan penjualan
                      dengan membuka toko online. Anda juga bisa memperluas
                      jangkauan bisnis dengan menerima pesanan di website
                      eCommerce. Buat toko online mudah dan cepat. Jangan
                      khawatir jika Anda belum memiliki ide bisnis! Kami siap
                      membantu mewujudkan bisnis Anda sekarang.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Apa Saja Opsi Pembayaran yang Tersedia untuk Pelanggan?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Kami menyediakan berbagai opsi pembayaran berbeda untuk
                      tiap negara. Anda bisa memilih opsi pembayaran yang sesuai
                      dengan lokasi target audiens. Hubungkan website ke Stripe
                      dan aktifkan 20+ opsi pembayaran internasional seperti
                      Apple Pay, EPS, Sofort, dan masih banyak lagi.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Apa Produk yang Bisa Saya Jual?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Tergantung dari niche dan target audiens Anda. Sebelum
                      merintis website jualan online, lakukan riset untuk
                      mengetahui tren produk di pasaran. Dengan begitu, Anda
                      dapat menentukan strategi yang tepat untuk bersaing dengan
                      kompetitor. Jual produk yang unik atau produk dengan harga
                      yang menarik di toko online Anda. Sebagai rekomendasi,
                      kami sudah membuat daftar produk jualan online paling
                      laris di tahun ini khusus untuk Anda.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="space-y-10">
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Berapa Lama Waktu untuk Buat Website Toko Online?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Lama cepatnya tergantung pada produk yang ingin dijual dan
                      tampilan toko online yang diinginkan. Kebanyakan website
                      builder membutuhkan beberapa hari hingga beberapa minggu
                      untuk menyiapkan dan mengonlinekan website, tergantung
                      tingkat kemampuan Anda. Untungnya,dengan website builder
                      drag-and-drop intuitif Hostinger, Anda bisa buat buat toko
                      online tanpa skill coding dalam sekejap.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      How do I explain the money I withdraw from Pocket to the
                      IRS?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      This feels like one-hundred percent a you problem. Pocket
                      is not responsible in any way for your tax returns.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      How do I become an insider?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Contact us with some details about your industry and the
                      type of access you have to apply for an insider account.
                      Once approved, we &apos ll send you a guide on collecting
                      insider information without being detected at work.
                    </p>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <button
            className={`${
              isVisible ? "block" : "hidden"
            } fixed bottom-4 right-4 bg-blue-500 text-white p-2 rounded`}
            onClick={scrollToTop}>
            Top
          </button>
        </section>
      </main>
    </>
  );
}
