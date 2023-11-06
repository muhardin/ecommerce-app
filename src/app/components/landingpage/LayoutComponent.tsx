"use client";
import { useEffect, useState } from "react";
import BannerFlash from "@/components/landingpage/BannerFlash";
import Image from "next/image";
import Link from "next/link";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const includedFeatures = [
  "Private forum access",
  "Member resources",
  "Entry to annual conference",
  "Official member t-shirt",
];

const navigation = [
  { name: "Product", href: "#" },
  { name: "Features", href: "#" },
  { name: "Marketplace", href: "#" },
  { name: "Company", href: "#" },
];

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const route = useRouter();
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const [menuMobile, setMenuMobile] = useState(false);
  const toggleMenuMobile = () => setMenuMobile(!menuMobile);

  return (
    <>
      <div className="flex min-h-full flex-col">
        <BannerFlash />
        <header className="">
          <nav>
            <div
              className={`${
                isSticky ? "fixed top-0" : "relative"
              } bg-white  mx-auto px-4 sm:px-6 lg:px-8 z-50 flex justify-between py-4 shadow-lg shadow-gray-200 w-full`}
            >
              <div className="relative z-10 flex items-center gap-16">
                <Link aria-label="Home" href="/">
                  <div className="h-12 w-14">
                    <Image
                      className="object-fill"
                      src={"/images/address.png"}
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                </Link>
                <div className="hidden lg:flex lg:gap-10">
                  <Link
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/"
                  >
                    <span className="relative z-10">Home</span>
                  </Link>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#features"
                  >
                    <span className="relative z-10">Features</span>
                  </a>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#reviews"
                  >
                    <span className="relative z-10">Reviews</span>
                  </a>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#pricing"
                  >
                    <span className="relative z-10">Pricing</span>
                  </a>
                  <Link
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#about"
                  >
                    <span className="relative z-10">About</span>
                  </Link>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#faqs"
                  >
                    <span className="relative z-10">FAQs</span>
                  </a>
                </div>
              </div>
              <div className="flex items-center gap-6">
                <div className="lg:hidden" data-headlessui-state="open">
                  <button
                    onClick={toggleMenuMobile}
                    className="relative z-10 -m-2 inline-flex items-center rounded-lg stroke-gray-900 p-2 hover:bg-gray-200/50 hover:stroke-gray-600 active:stroke-gray-900 ui-not-focus-visible:outline-none"
                    aria-label="Toggle site navigation"
                    type="button"
                    aria-expanded="true"
                    data-headlessui-state="open"
                    id="headlessui-popover-button-:Raplla:"
                    aria-controls="headlessui-popover-panel-:r2g:"
                  >
                    {menuMobile ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          d="M17 14l-5-5-5 5"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="h-6 w-6"
                      >
                        <path
                          d="M5 6h14M5 18h14M5 12h14"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        ></path>
                      </svg>
                    )}
                  </button>
                  <div
                    className={`${
                      menuMobile ? "block" : "hidden"
                    } fixed inset-0 z-0 bg-gray-300/60 backdrop-blur opacity-100`}
                    id="headlessui-popover-overlay-:r2f:"
                    aria-hidden="true"
                    data-headlessui-state="open"
                  ></div>
                  <div
                    className={`${
                      menuMobile ? "block" : "hidden"
                    } absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20 opacity-100 transform-none`}
                    id="headlessui-popover-panel-:r2g:"
                    tabIndex={-1}
                    data-headlessui-state="open"
                  >
                    <div className="space-y-4">
                      <Link
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#top"
                      >
                        Home
                      </Link>
                      <a
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#features"
                      >
                        Features
                      </a>
                      <a
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#reviews"
                      >
                        Reviews
                      </a>
                      <a
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#pricing"
                      >
                        Pricing
                      </a>
                      <Link
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#about"
                      >
                        About
                      </Link>
                      <a
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#faqs"
                      >
                        FAQs
                      </a>
                    </div>
                    <div className="mt-8 flex flex-col gap-4">
                      {session ? (
                        <button
                          onClick={() => {
                            setMenuMobile(false);
                            route.push("/web/sign-in");
                            signOut({
                              redirect: false,
                              callbackUrl: `${process.env.LANDING_PAGE}/sign-in`,
                            });
                          }}
                          className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                        >
                          Log Out
                        </button>
                      ) : (
                        <Link
                          onClick={() => {
                            setMenuMobile(false);
                          }}
                          className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                          href="/web/sign-in"
                        >
                          Log in
                        </Link>
                      )}
                      <Link
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80"
                        href="/web/sign-up"
                      >
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="fixed top-1 left-1 w-1 h-0 p-0 m--1 overflow-hidden clip-rect-0 border-0 invisible"></div>
                {session ? (
                  <button
                    onClick={() => {
                      route.push("/web/sign-in");
                      signOut({
                        redirect: false,
                        callbackUrl: `${process.env.LANDING_PAGE}/sign-in`,
                      });
                    }}
                    className="md:inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 hidden lg:block"
                  >
                    Log Out
                  </button>
                ) : (
                  <Link
                    className="md:inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 hidden lg:block"
                    href="/web/sign-in"
                  >
                    Log in
                  </Link>
                )}

                <Link
                  className="md:inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hidden lg:block"
                  href="/web/sign-up"
                >
                  Register
                </Link>
              </div>
            </div>
          </nav>
        </header>
        {children}

        <footer className="border-t border-gray-200">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
              <div>
                <div className="flex items-center text-gray-900">
                  <div className="h-10 w-10 flex-none fill-cyan-500">
                    <Image
                      src={"/images/address.png"}
                      width={150}
                      height={150}
                      alt=""
                    />
                  </div>
                  <div className="ml-4">
                    <p className="text-base font-semibold">Pocket</p>
                    <p className="mt-1 text-sm">Invest at the perfect time.</p>
                  </div>
                </div>
                <nav className="mt-11 flex gap-8">
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#features"
                  >
                    <span className="relative z-10">Features</span>
                  </a>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#reviews"
                  >
                    <span className="relative z-10">Reviews</span>
                  </a>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#pricing"
                  >
                    <span className="relative z-10">Pricing</span>
                  </a>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#faqs"
                  >
                    <span className="relative z-10">FAQs</span>
                  </a>
                </nav>
              </div>
              <div className="group relative -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
                <div className="relative flex h-24 w-24 flex-none items-center justify-center">
                  <svg
                    viewBox="0 0 96 96"
                    fill="none"
                    aria-hidden="true"
                    className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500"
                  >
                    <path
                      d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
                      strokeWidth="2"
                      strokeLinecap="round"
                    ></path>
                  </svg>
                  <Image
                    alt=""
                    loading="lazy"
                    width="80"
                    height="80"
                    decoding="async"
                    data-nimg="1"
                    src="/images/playstore.png"
                  />
                </div>
                <div className="ml-8 lg:w-64">
                  <p className="text-base font-semibold text-gray-900">
                    <a href="#">
                      <span className="absolute inset-0 sm:rounded-2xl"></span>
                      Download the app{" "}
                    </a>
                  </p>
                  <p className="mt-1 text-sm text-gray-700">
                    Scan the QR code to download the app from the App Store.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
              <form className="flex w-full justify-center md:w-auto">
                <div className="w-60 min-w-0 shrink">
                  <input
                    id=":S5:"
                    aria-label="Email address"
                    placeholder="Email address"
                    autoComplete="email"
                    required
                    className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
                    type="email"
                  />
                </div>
                <button
                  className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors ml-4 flex-none"
                  type="submit"
                >
                  <span className="hidden lg:inline">Join our newsletter</span>
                  <span className="lg:hidden">Join newsletter</span>
                </button>
              </form>
              <p className="mt-6 text-sm text-gray-500 md:mt-0">
                © Copyright 2023. All rights reserved.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LayoutComponent;
