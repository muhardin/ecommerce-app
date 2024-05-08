"use client";
import { useEffect, useState } from "react";
import BannerFlash from "@/components/landingpage/BannerFlash";
import Image from "next/image";
import Link from "next/link";
import { SessionProvider, signOut, useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import {
  closeProfileMenu,
  openProfileMenu,
  toggleProfileMenu,
} from "@/redux/profileSlice";
import { useDispatch } from "react-redux";
import SideBarWeb from "../menu/SideBarWeb";
import { ClipboardList, ShoppingBag } from "lucide-react";
import LucidaIcon from "../ui/LucidaIcons";
import toast, { Toaster } from "react-hot-toast";
import { useUserData } from "../supplier/UserData";

const LayoutComponent = ({ children }: { children: React.ReactNode }) => {
  const userData = useUserData();
  const dispatch = useDispatch();
  const route = useRouter();
  const { data: session } = useSession();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const pathName = usePathname();
  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 0) {
  //       setIsSticky(true);
  //     } else {
  //       setIsSticky(false);
  //     }
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  const [menuMobile, setMenuMobile] = useState(false);
  const toggleMenuMobile = () => setMenuMobile(!menuMobile);
  const handleToggleMenu = () => {
    dispatch(toggleProfileMenu());
  };
  const closeMenu = () => {
    dispatch(closeProfileMenu());
  };
  const [profileMenu, setProfileMenu] = useState(false);
  const handleToggleProfile = () => {
    setProfileMenu(!profileMenu);
  };
  const onSignOut = async () => {
    await signOut({ redirect: false });
    route.push("/web/sign-in");
    toast.dismiss();
  };
  // console.log(session);
  return (
    <>
      <div className="flex min-h-full flex-col">
        {/* <BannerFlash /> */}
        <header className="w-full z-40 top-0 ">
          <nav>
            <div
              className={`${
                isSticky ? "fixed top-0" : "relative"
              }  bg-white  mx-auto px-4 sm:px-6 lg:px-8 z-10 flex justify-between py-3 shadow-lg shadow-gray-200 w-full`}>
              {/* <div
              className={`${"fixed top-0"} bg-white  mx-auto px-4 sm:px-6 lg:px-8 z-10 flex justify-between py-3 shadow-lg shadow-gray-200 w-full`}
            > */}
              <div className="relative z-10 flex items-center gap-16">
                {session && (
                  <div>
                    <button
                      onClick={() => {
                        handleToggleMenu();
                      }}
                      className="px-2 py-3 text-blue-500 bg-blue-100 rounded dark:text-gray-400 dark:bg-gray-800">
                      <svg
                        width="18"
                        height="10"
                        viewBox="0 0 18 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M1.50002 1.66667H16.5C16.721 1.66667 16.933 1.57887 17.0893 1.42259C17.2456 1.26631 17.3334 1.05435 17.3334 0.833333C17.3334 0.61232 17.2456 0.400358 17.0893 0.244078C16.933 0.0877975 16.721 0 16.5 0H1.50002C1.27901 0 1.06704 0.0877975 0.910765 0.244078C0.754484 0.400358 0.666687 0.61232 0.666687 0.833333C0.666687 1.05435 0.754484 1.26631 0.910765 1.42259C1.06704 1.57887 1.27901 1.66667 1.50002 1.66667V1.66667ZM16.5 8.33333H1.50002C1.27901 8.33333 1.06704 8.42113 0.910765 8.57741C0.754484 8.73369 0.666687 8.94565 0.666687 9.16667C0.666687 9.38768 0.754484 9.59964 0.910765 9.75592C1.06704 9.9122 1.27901 10 1.50002 10H16.5C16.721 10 16.933 9.9122 17.0893 9.75592C17.2456 9.59964 17.3334 9.38768 17.3334 9.16667C17.3334 8.94565 17.2456 8.73369 17.0893 8.57741C16.933 8.42113 16.721 8.33333 16.5 8.33333ZM16.5 4.16667H1.50002C1.27901 4.16667 1.06704 4.25446 0.910765 4.41074C0.754484 4.56702 0.666687 4.77899 0.666687 5C0.666687 5.22101 0.754484 5.43298 0.910765 5.58926C1.06704 5.74554 1.27901 5.83333 1.50002 5.83333H16.5C16.721 5.83333 16.933 5.74554 17.0893 5.58926C17.2456 5.43298 17.3334 5.22101 17.3334 5C17.3334 4.77899 17.2456 4.56702 17.0893 4.41074C16.933 4.25446 16.721 4.16667 16.5 4.16667Z"
                          fill="currentColor"></path>
                      </svg>
                    </button>
                  </div>
                )}
                <Link aria-label="Home" href="/">
                  <div className="h-12 w-14">
                    <Image
                      className="object-fill"
                      src={`${process.env.SERVER_ENDPOINT}/images/logo.png`}
                      width={500}
                      height={500}
                      alt=""
                    />
                  </div>
                </Link>
                <div className="hidden lg:flex lg:gap-10">
                  <Link
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/">
                    <span className="relative z-10">Home</span>
                  </Link>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#features">
                    <span className="relative z-10">Features</span>
                  </a>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#reviews">
                    <span className="relative z-10">Reviews</span>
                  </a>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#pricing">
                    <span className="relative z-10">Pricing</span>
                  </a>
                  <Link
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#about">
                    <span className="relative z-10">About</span>
                  </Link>
                  <a
                    className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
                    href="/#faqs">
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
                    aria-controls="headlessui-popover-panel-:r2g:">
                    {menuMobile ? (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="h-6 w-6">
                        <path
                          d="M17 14l-5-5-5 5"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"></path>
                      </svg>
                    ) : (
                      <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="h-6 w-6">
                        <path
                          d="M5 6h14M5 18h14M5 12h14"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"></path>
                      </svg>
                    )}
                  </button>
                  <div
                    className={`${
                      menuMobile ? "block" : "hidden"
                    } fixed inset-0 z-0 bg-gray-300/60 backdrop-blur opacity-100`}
                    id="headlessui-popover-overlay-:r2f:"
                    aria-hidden="true"
                    data-headlessui-state="open"></div>
                  <div
                    className={`${
                      menuMobile ? "block" : "hidden"
                    } absolute inset-x-0 top-0 z-0 origin-top rounded-b-2xl bg-gray-50 px-6 pb-6 pt-32 shadow-2xl shadow-gray-900/20 opacity-100 transform-none`}
                    id="headlessui-popover-panel-:r2g:"
                    tabIndex={-1}
                    data-headlessui-state="open">
                    <div className="space-y-4">
                      <Link
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#top">
                        Home
                      </Link>
                      <a
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#features">
                        Features
                      </a>
                      <a
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#reviews">
                        Reviews
                      </a>
                      <a
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#pricing">
                        Pricing
                      </a>
                      <Link
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#about">
                        About
                      </Link>
                      <a
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="block text-base leading-7 tracking-tight text-gray-700"
                        data-headlessui-state="open"
                        href="/#faqs">
                        FAQs
                      </a>
                    </div>
                    <div className="mt-8 flex flex-col gap-4">
                      {session?.is_company ? (
                        <button
                          onClick={() => {
                            setMenuMobile(false);
                            route.push("/web/sign-in");
                            signOut({
                              redirect: false,
                              callbackUrl: `${process.env.LANDING_PAGE}/sign-in`,
                            });
                          }}
                          className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80">
                          Log Out
                        </button>
                      ) : (
                        <Link
                          onClick={() => {
                            setMenuMobile(false);
                          }}
                          className="inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80"
                          href="/web/sign-in">
                          Log in
                        </Link>
                      )}
                      <Link
                        onClick={() => {
                          setMenuMobile(false);
                        }}
                        className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80"
                        href="/web/sign-up">
                        Register
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="fixed top-1 left-1 w-1 h-0 p-0 m--1 overflow-hidden clip-rect-0 border-0 invisible"></div>

                {session ? (
                  <button
                    onClick={onSignOut}
                    className="md:inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 hidden lg:block">
                    Log Out
                  </button>
                ) : (
                  <Link
                    className="md:inline-flex justify-center rounded-lg border py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-sm outline-2 outline-offset-2 transition-colors border-gray-300 text-gray-700 hover:border-gray-400 active:bg-gray-100 active:text-gray-700/80 hidden lg:block"
                    href="/web/sign-in">
                    Log in
                  </Link>
                )}

                <Link
                  className="md:inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors bg-gray-800 text-white hover:bg-gray-900 active:bg-gray-800 active:text-white/80 hidden lg:block"
                  href="/web/sign-up">
                  Register
                </Link>

                {/* Avatar Menu */}
                {session ? (
                  <div className="relative text-left lg:inline-block">
                    <div
                      onClick={() => {
                        handleToggleProfile();
                      }}
                      className="lg:block">
                      <button className="flex items-center">
                        <div className=" mr-3 text-right md:block">
                          <p className="text-sm font-bold text-black dark:text-gray-400">
                            {" "}
                            {session.user?.name}
                          </p>
                        </div>
                        <div className="mr-2">
                          {session.is_company ? (
                            <Image
                              width={250}
                              height={250}
                              src="/images/admin.png"
                              className="object-cover object-right w-10 h-10 rounded-full"
                              alt="person"
                            />
                          ) : (
                            <Image
                              width={250}
                              height={250}
                              src="/images/avatar.png"
                              className="object-cover object-right w-10 h-10 rounded-full"
                              alt="person"
                            />
                          )}
                        </div>
                        <span>
                          <svg
                            className="text-gray-400"
                            width="10"
                            height="6"
                            viewBox="0 0 10 6"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                              d="M9.08335 0.666657C8.75002 0.333323 8.25002 0.333323 7.91669 0.666657L5.00002 3.58332L2.08335 0.666657C1.75002 0.333323 1.25002 0.333323 0.916687 0.666657C0.583354 0.99999 0.583354 1.49999 0.916687 1.83332L4.41669 5.33332C4.58335 5.49999 4.75002 5.58332 5.00002 5.58332C5.25002 5.58332 5.41669 5.49999 5.58335 5.33332L9.08335 1.83332C9.41669 1.49999 9.41669 0.99999 9.08335 0.666657Z"
                              fill="currentColor"></path>
                          </svg>
                        </span>
                      </button>
                    </div>
                    <div
                      id="dropdown_profile"
                      className={`${
                        profileMenu ? "block" : "hidden"
                      } absolute right-0 w-48 mt-3 origin-top-right bg-white rounded shadow dark:bg-gray-800 dark:text-gray-100 `}>
                      <div className="py-1">
                        <Link
                          onClick={() => {
                            setProfileMenu(false);
                          }}
                          href="/profile"
                          className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                          <svg
                            className="mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <circle cx="12" cy="12" r="3"></circle>
                            <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"></path>
                          </svg>
                          Account
                        </Link>

                        <Link
                          onClick={() => {
                            setProfileMenu(false);
                          }}
                          href="/profile/orders"
                          className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                          <div className="mr-2">
                            <ClipboardList size={18} />
                          </div>
                          Order
                        </Link>
                        {session.is_company == 1 && (
                          <Link
                            onClick={() => {
                              setProfileMenu(false);
                            }}
                            href="/admin"
                            className="flex px-4 py-2 text-sm text-sky-400 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                            <div className="mr-2">
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
                                className="lucide lucide-blocks">
                                <rect
                                  width="7"
                                  height="7"
                                  x="14"
                                  y="3"
                                  rx="1"
                                />
                                <path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3" />
                              </svg>
                            </div>
                            Administrator
                          </Link>
                        )}

                        {session.is_supplier == 1 && (
                          <Link
                            onClick={() => {
                              setProfileMenu(false);
                            }}
                            href="/supplier"
                            className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                            <div className="mr-2">
                              <LucidaIcon name="Store" size={18} />
                            </div>
                            Supplier
                          </Link>
                        )}
                        {session?.is_seller == 1 ? (
                          <Link
                            onClick={() => {
                              setProfileMenu(false);
                            }}
                            href="/myshop"
                            className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                            <div className="mr-2">
                              <ShoppingBag name="Store" size={18} />
                            </div>
                            My Shop
                          </Link>
                        ) : null}
                        {session?.is_seller == 2 && (
                          <Link
                            onClick={() => {
                              setProfileMenu(false);
                            }}
                            href="/myshop"
                            className="flex px-4 py-2 text-sm text-gray-700 dark:text-gray-400 dark:hover:bg-gray-800 hover:bg-gray-100">
                            <div className="mr-2">
                              <ShoppingBag name="Store" size={18} />
                            </div>
                            My Shop
                          </Link>
                        )}

                        <button
                          onClick={() => {
                            toast.loading("Loading...");
                            setProfileMenu(false);
                            closeMenu();
                            onSignOut();
                          }}
                          className="w-full flex px-4 py-2 text-sm text-red-500 dark:hover:bg-gray-800 dark:text-gray-400 hover:bg-gray-100">
                          <svg
                            className="mr-2"
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round">
                            <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path>
                            <polyline points="16 17 21 12 16 7"></polyline>
                            <line x1="21" y1="12" x2="9" y2="12"></line>
                          </svg>
                          Logout
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  ""
                )}
              </div>
            </div>
          </nav>
        </header>
        <div>
          <SideBarWeb />
        </div>

        {children}
        {["/supplier", "/myshop", "/admin"].some((path) =>
          pathName.startsWith(path)
        ) ? (
          ""
        ) : (
          <footer className="footer p-10 bg-base-200 text-base-content">
            <aside>
              <svg
                width="50"
                height="50"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                clipRule="evenodd"
                className="fill-current">
                <path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path>
              </svg>
              <p>
                JualanYuk.
                <br />
                PT. Panca Asia Teknologi
              </p>
            </aside>
            <nav>
              <header className="footer-title">Services</header>
              <a className="link link-hover">Branding</a>
              <a className="link link-hover">Design</a>
              <a className="link link-hover">Marketing</a>
              <a className="link link-hover">Advertisement</a>
            </nav>
            <nav>
              <header className="footer-title">Company</header>
              <a className="link link-hover">About us</a>
              <a className="link link-hover">Contact</a>
              <a className="link link-hover">Jobs</a>
              <a className="link link-hover">Press kit</a>
            </nav>
            <nav>
              <header className="footer-title">Legal</header>
              <a className="link link-hover">Terms of use</a>
              <a className="link link-hover">Privacy policy</a>
              <a className="link link-hover">Cookie policy</a>
            </nav>
          </footer>
          // <footer className="border-t border-gray-200 md:mt-36">
          //   <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          //     <div className="flex flex-col items-start justify-between gap-y-12 pb-6 pt-16 lg:flex-row lg:items-center lg:py-16">
          //       <div>
          //         <div className="flex items-center text-gray-900">
          //           <div className="h-10 w-10 flex-none fill-cyan-500">
          //             <Image
          //               src={"/images/address.png"}
          //               width={150}
          //               height={150}
          //               alt=""
          //             />
          //           </div>
          //           <div className="ml-4">
          //             <p className="text-base font-semibold">Pocket</p>
          //             <p className="mt-1 text-sm">
          //               Invest at the perfect time.
          //             </p>
          //           </div>
          //         </div>
          //         <nav className="mt-11 flex gap-8">
          //           <a
          //             className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
          //             href="/#features"
          //           >
          //             <span className="relative z-10">Features</span>
          //           </a>
          //           <a
          //             className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
          //             href="/#reviews"
          //           >
          //             <span className="relative z-10">Reviews</span>
          //           </a>
          //           <a
          //             className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
          //             href="/#pricing"
          //           >
          //             <span className="relative z-10">Pricing</span>
          //           </a>
          //           <a
          //             className="relative -mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
          //             href="/#faqs"
          //           >
          //             <span className="relative z-10">FAQs</span>
          //           </a>
          //         </nav>
          //       </div>
          //       <div className="group relative z-0 -mx-4 flex items-center self-stretch p-4 transition-colors hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
          //         <div className="relative flex h-24 w-24 flex-none items-center justify-center">
          //           <svg
          //             viewBox="0 0 96 96"
          //             fill="none"
          //             aria-hidden="true"
          //             className="absolute inset-0 h-full w-full stroke-gray-300 transition-colors group-hover:stroke-cyan-500"
          //           >
          //             <path
          //               d="M1 17V9a8 8 0 0 1 8-8h8M95 17V9a8 8 0 0 0-8-8h-8M1 79v8a8 8 0 0 0 8 8h8M95 79v8a8 8 0 0 1-8 8h-8"
          //               strokeWidth="2"
          //               strokeLinecap="round"
          //             ></path>
          //           </svg>
          //           <Image
          //             alt=""
          //             loading="lazy"
          //             width="80"
          //             height="80"
          //             decoding="async"
          //             data-nimg="1"
          //             src="/images/playstore.png"
          //           />
          //         </div>
          //         <div className="ml-8 lg:w-64">
          //           <p className="text-base font-semibold text-gray-900">
          //             <a href="#">
          //               <span className="absolute inset-0 sm:rounded-2xl"></span>
          //               Download the app{" "}
          //             </a>
          //           </p>
          //           <p className="mt-1 text-sm text-gray-700">
          //             Scan the QR code to download the app from the App Store.
          //           </p>
          //         </div>
          //       </div>
          //     </div>
          //     <div className="flex flex-col items-center border-t border-gray-200 pb-12 pt-8 md:flex-row-reverse md:justify-between md:pt-6">
          //       <form className="flex w-full justify-center md:w-auto">
          //         <div className="w-60 min-w-0 shrink">
          //           <input
          //             id=":S5:"
          //             aria-label="Email address"
          //             placeholder="Email address"
          //             autoComplete="email"
          //             required
          //             className="block w-full appearance-none rounded-lg border border-gray-200 bg-white py-[calc(theme(spacing.2)-1px)] px-[calc(theme(spacing.3)-1px)] text-gray-900 placeholder:text-gray-400 focus:border-cyan-500 focus:outline-none focus:ring-cyan-500 sm:text-sm"
          //             type="email"
          //           />
          //         </div>
          //         <button
          //           className="inline-flex justify-center rounded-lg py-2 px-3 text-sm font-semibold outline-2 outline-offset-2 transition-colors relative overflow-hidden bg-cyan-500 text-white before:absolute before:inset-0 active:before:bg-transparent hover:before:bg-white/10 active:bg-cyan-600 active:text-white/80 before:transition-colors ml-4 flex-none"
          //           type="submit"
          //         >
          //           <span className="hidden lg:inline">
          //             Join our newsletter
          //           </span>
          //           <span className="lg:hidden">Join newsletter</span>
          //         </button>
          //       </form>
          //       <p className="mt-6 text-sm text-gray-500 md:mt-0">
          //         © Copyright 2023. All rights reserved.
          //       </p>
          //     </div>
          //   </div>
          // </footer>
        )}
        <Toaster />
      </div>
    </>
  );
};

export default LayoutComponent;
