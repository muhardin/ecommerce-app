import ProductDetailShow from "@/components/product/ProductDetailShow";
import Image from "next/image";
import React from "react";
interface Props {
  searchParams: { [key: string]: string | Number | string[] | undefined };
}
const page = ({ searchParams }: Props) => {
  console.log(searchParams);
  return (
    <div>
      {/* <ProductDetailShow product={searchParams?.id} /> */}
      <div className="mx-auto max-w-screen-2xl px-4 font-body">
        <div className="flex flex-col rounded-lg border border-neutral-200 bg-white p-8 dark:border-neutral-800 dark:bg-black md:p-12 lg:flex-row lg:gap-8">
          <div className="h-full w-full basis-full lg:basis-4/6">
            <div className="relative z-50 aspect-square h-full max-h-[550px] w-full overflow-hidden">
              <Image
                width={500}
                height={500}
                alt=""
                fetchPriority="high"
                decoding="async"
                data-nimg="fill"
                className="object-contain absolute h-full w-full inset-0 visible text-transparent"
                sizes="(min-width: 1024px) 66vw, 100vw"
                src="/images/dump/Men-Jacket-Front-Black__15466__96550.png"
              />
              <div className="absolute bottom-[15%] flex w-full justify-center">
                <div className="mx-auto flex h-11 items-center rounded-full border border-white bg-neutral-50/80 text-neutral-500 backdrop-blur dark:border-black dark:bg-neutral-900/80">
                  <a
                    aria-label="Previous product image"
                    className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
                    href="/matte-black-magic-mug?image=5">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"></path>
                    </svg>
                  </a>
                  <div className="mx-1 h-6 w-px bg-neutral-500"></div>
                  <a
                    aria-label="Next product image"
                    className="h-full px-6 transition-all ease-in-out hover:scale-110 hover:text-black dark:hover:text-white flex items-center justify-center"
                    href="/matte-black-magic-mug?image=1">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      aria-hidden="true"
                      className="h-5">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <ul className="my-12 flex items-center justify-center gap-2 overflow-auto py-1 lg:mb-0">
              <li className="h-20 w-20">
                <a
                  aria-label="Enlarge product image"
                  className="h-full w-full"
                  href="/matte-black-magic-mug?image=0">
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg bg-white hover:border-blue-600 dark:bg-black border-2 border-blue-600">
                    <Image
                      alt=""
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg="1"
                      className="relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105 bg-transparent"
                      src="/images/dump/Men-Jacket-Back-Black__33864__06038.png"
                    />
                  </div>
                </a>
              </li>
              <li className="h-20 w-20">
                <a
                  aria-label="Enlarge product image"
                  className="h-full w-full"
                  href="/matte-black-magic-mug?image=1">
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                    <Image
                      alt=""
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg="1"
                      className="bg-transparent relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      src="/images/dump/Men-Jacket-Front-Black__15466__96550.png"
                    />
                  </div>
                </a>
              </li>
              <li className="h-20 w-20">
                <a
                  aria-label="Enlarge product image"
                  className="h-full w-full"
                  href="/matte-black-magic-mug?image=2">
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                    <Image
                      alt=""
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg="1"
                      className="bg-transparent relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      src="/images/dump/Men-Jacket-Front-White__95300__66017.png"
                    />
                  </div>
                </a>
              </li>
              <li className="h-20 w-20">
                <a
                  aria-label="Enlarge product image"
                  className="h-full w-full"
                  href="/matte-black-magic-mug?image=3">
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                    <Image
                      alt=""
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg="1"
                      className="bg-transparent relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      src="/images/dump/Men-Jacket-Side-White__91924__27388.png"
                    />
                  </div>
                </a>
              </li>
              <li className="h-20 w-20">
                <a
                  aria-label="Enlarge product image"
                  className="h-full w-full"
                  href="/matte-black-magic-mug?image=4">
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                    <Image
                      alt=""
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg="1"
                      className="bg-transparent relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      src="/images/dump/Men-Jacket-Back-White__02866__76756.png"
                    />
                  </div>
                </a>
              </li>
              <li className="h-20 w-20">
                <a
                  aria-label="Enlarge product image"
                  className="h-full w-full"
                  href="/matte-black-magic-mug?image=5">
                  <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black border-neutral-200 dark:border-neutral-800">
                    <Image
                      alt=""
                      loading="lazy"
                      width={80}
                      height={80}
                      decoding="async"
                      data-nimg="1"
                      className="bg-transparent relative h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                      src="/images/dump/Men-Jacket-Side-White__91924__27388.png"
                    />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          <div className="basis-full lg:basis-2/6">
            <div className="mb-6 flex flex-col border-b pb-6 dark:border-neutral-700">
              <h1 className="mb-2 text-5xl font-medium">Lightweight Jacket</h1>
              <div className="mr-auto w-auto rounded-full bg-blue-600 p-2 text-sm text-white">
                <p>
                  $249.99<span className="ml-1 inline">USD</span>
                </p>
              </div>
            </div>
            <dl className="mb-8">
              <dt className="mb-4 text-sm uppercase tracking-wide">Color</dt>
              <dd className="flex flex-wrap gap-3">
                <button
                  aria-disabled="false"
                  title="Color Black"
                  className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ">
                  Black
                </button>
                <button
                  aria-disabled="false"
                  title="Color White"
                  className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ">
                  White
                </button>
              </dd>
            </dl>
            <dl className="mb-8">
              <dt className="mb-4 text-sm uppercase tracking-wide">Size</dt>
              <dd className="flex flex-wrap gap-3">
                <button
                  aria-disabled="false"
                  title="Size S"
                  className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ">
                  S
                </button>
                <button
                  aria-disabled="false"
                  title="Size M"
                  className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ">
                  M
                </button>
                <button
                  aria-disabled="false"
                  title="Size L"
                  className="flex min-w-[48px] items-center justify-center rounded-full border bg-neutral-100 px-2 py-1 text-sm dark:border-neutral-800 dark:bg-neutral-900 ring-1 ring-transparent transition duration-300 ease-in-out hover:scale-110 hover:ring-blue-600 ">
                  L
                </button>
              </dd>
            </dl>
            <div className="prose mx-auto max-w-6xl text-black prose-headings:mt-8 prose-headings:font-semibold prose-headings:tracking-wide prose-headings:text-black prose-h1:text-5xl prose-h2:text-4xl prose-h3:text-3xl prose-h4:text-2xl prose-h5:text-xl prose-h6:text-lg prose-a:text-black prose-a:underline hover:prose-a:text-neutral-300 prose-strong:text-black prose-ol:mt-8 prose-ol:list-decimal prose-ol:pl-6 prose-ul:mt-8 prose-ul:list-disc prose-ul:pl-6 dark:text-white dark:prose-headings:text-white dark:prose-a:text-white dark:prose-strong:text-white mb-6 text-sm leading-tight dark:text-white/[60%]">
              <p>
                Add a little zing to your winter wardrobe with this vibrant
                Winter-breaker Jacket. With a brushed fleece inside, and a
                relaxed unisex fit, this jacket is just the stuff of the dreams,
                so be quick to grab yourself one!
                <br />
                <br />
                <span>
                  Long sleeve ripstop jacket colorblocked in black. Rough
                  pattern in obsidian black and brown printed throughout.
                  Printed graphic in white throughout. Logo-woven webbing trim
                  in white and black throughout. Bungee-style drawstring at hood
                  featuring rubberized logo hardware. Zip closure at front.
                  Rubberized logo appliqué at chest. Welt pockets and textile
                  logo patch in orange at waist. Elasticized cuffs. Partially
                  lined. Black hardware.
                </span>
              </p>
            </div>
            <form action="javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')">
              <button
                aria-label="Please select an option"
                aria-disabled="true"
                className="relative flex w-full items-center justify-center rounded-full bg-blue-600 p-4 tracking-wide text-white cursor-not-allowed opacity-60 hover:opacity-60">
                <div className="absolute left-0 ml-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    aria-hidden="true"
                    className="h-5">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"></path>
                  </svg>
                </div>
                Buy
              </button>
              <p aria-live="polite" className="sr-only" role="status"></p>
            </form>
          </div>
        </div>
        <div className="py-8">
          <h2 className="mb-4 text-2xl font-bold">Related Products</h2>
          <ul className="flex w-full gap-4 overflow-x-auto pt-1">
            <li className="aspect-square w-full flex-none min-[475px]:w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/5">
              <a
                className="relative h-full w-full"
                href="/purple-insulated-jacket">
                <div className="group flex h-full w-full items-center justify-center overflow-hidden rounded-lg border bg-white hover:border-blue-600 dark:bg-black relative border-neutral-200 dark:border-neutral-800">
                  <Image
                    width={500}
                    height={500}
                    alt="Purple Insulated Jacket"
                    loading="lazy"
                    decoding="async"
                    data-nimg="fill"
                    className="absolute inset-0 invisible  h-full w-full object-contain transition duration-300 ease-in-out group-hover:scale-105"
                    sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                    src="/images/dump/Men-Jacket-Front-Black__15466__96550.png"
                  />
                  <div className="absolute bottom-0 left-0 flex w-full px-4 pb-4 @container/label">
                    <div className="flex items-center rounded-full border bg-white/70 p-1 text-xs font-semibold text-black backdrop-blur-md dark:border-neutral-800 dark:bg-black/70 dark:text-white">
                      <h3 className="mr-4 line-clamp-2 flex-grow pl-2 leading-none tracking-tight">
                        Purple Insulated Jacket
                      </h3>
                      <p className="flex-none rounded-full bg-blue-600 p-2 text-white">
                        $500.00
                        <span className="ml-1 inline  @[275px]/label:inline">
                          USD
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default page;
