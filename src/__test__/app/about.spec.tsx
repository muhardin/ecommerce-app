import AboutUs from "@/app/aboutus/page";
import { render, screen } from "@testing-library/react";

describe("About US", () => {
  it("should render", () => {
    const page = render(<AboutUs />);
    expect(page).toMatchInlineSnapshot(`
{
  "asFragment": [Function],
  "baseElement": <body>
    <div>
      <section
        class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800"
      >
        <div
          class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-2 md:px-6"
        >
          <div
            class="px-4 mb-10 md:text-center md:mb-20"
          >
            <p
              class="mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400"
            >
              About Us
            </p>
            <h2
              class="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300"
            >
              What we do
            </h2>
            <div
              class="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14"
            >
              <div
                class="flex-1 h-2 bg-blue-200"
              />
              <div
                class="flex-1 h-2 bg-blue-400"
              />
              <div
                class="flex-1 h-2 bg-blue-300"
              />
            </div>
          </div>
          <div
            class="flex flex-wrap"
          >
            <div
              class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0"
            >
              <img
                alt=""
                class="relative z-40 object-cover w-full h-96"
                data-nimg="1"
                decoding="async"
                height="500"
                loading="lazy"
                src="/_next/image?url=%2Fimages%2Faboutus.png&w=1080&q=75"
                srcset="/_next/image?url=%2Fimages%2Faboutus.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Faboutus.png&w=1080&q=75 2x"
                style="color: transparent;"
                width="500"
              />
            </div>
            <div
              class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0"
            >
              <h2
                class="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-blue-500 dark:border-blue-400 dark:text-gray-300"
              >
                We are providing a better facility
              </h2>
              <p
                class="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400"
              >
                Welcome to My Shop, your go-to online store for all things of product. We are dedicated to providing you with the very best of products, with an emphasis on quality, customer service, and uniqueness.
              </p>
              <ul
                class="mb-10"
              >
                <li
                  class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400"
                >
                  <span
                    class="mr-3 text-blue-500 dark:text-blue-400"
                  >
                    <svg
                      class="w-5 h-5 bi bi-patch-check-fill"
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"
                      />
                    </svg>
                  </span>
                  Temukan beragam [Kategori Produk Anda] yang unik dan sulit ditemukan di tempat lain.
                </li>
                <li
                  class="flex items-=center mb-4 text-base text-gray-600 dark:text-gray-400"
                >
                  <span
                    class="mr-3 text-blue-500 dark:text-blue-400"
                  >
                    <svg
                      class="w-5 h-5 bi bi-patch-check-fill"
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"
                      />
                    </svg>
                  </span>
                  Eli orem ipsum dolor sit amet, consectetur advice
                </li>
                <li
                  class="flex items-center text-base text-gray-600 dark:text-gray-400"
                >
                  <span
                    class="mr-3 text-blue-500 dark:text-blue-400"
                  >
                    <svg
                      class="w-5 h-5 bi bi-patch-check-fill"
                      fill="currentColor"
                      height="16"
                      viewBox="0 0 16 16"
                      width="16"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a.5.5 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01.89.636-.622a2.89 2.89 0 0 0 0-4.134l.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"
                      />
                    </svg>
                  </span>
                  Iron man ipsum dolor sit amet, consectetur adipiscing
                </li>
              </ul>
              <a
                class="px-4 py-3 text-blue-700 transition-all transform border border-blue-500 hover:bg-blue-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100"
                href="#"
              >
                Discover more
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </body>,
  "container": <div>
    <section
      class="flex items-center bg-stone-100 xl:h-screen font-poppins dark:bg-gray-800"
    >
      <div
        class="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-2 md:px-6"
      >
        <div
          class="px-4 mb-10 md:text-center md:mb-20"
        >
          <p
            class="mb-2 text-lg font-semibold text-blue-500 dark:text-gray-400"
          >
            About Us
          </p>
          <h2
            class="pb-2 text-2xl font-bold text-gray-800 md:text-4xl dark:text-gray-300"
          >
            What we do
          </h2>
          <div
            class="flex w-32 mt-1 mb-6 overflow-hidden rounded md:mx-auto md:mb-14"
          >
            <div
              class="flex-1 h-2 bg-blue-200"
            />
            <div
              class="flex-1 h-2 bg-blue-400"
            />
            <div
              class="flex-1 h-2 bg-blue-300"
            />
          </div>
        </div>
        <div
          class="flex flex-wrap"
        >
          <div
            class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0"
          >
            <img
              alt=""
              class="relative z-40 object-cover w-full h-96"
              data-nimg="1"
              decoding="async"
              height="500"
              loading="lazy"
              src="/_next/image?url=%2Fimages%2Faboutus.png&w=1080&q=75"
              srcset="/_next/image?url=%2Fimages%2Faboutus.png&w=640&q=75 1x, /_next/image?url=%2Fimages%2Faboutus.png&w=1080&q=75 2x"
              style="color: transparent;"
              width="500"
            />
          </div>
          <div
            class="w-full px-4 mb-10 lg:w-1/2 lg:mb-0"
          >
            <h2
              class="py-3 pl-2 mb-4 text-2xl font-bold text-gray-700 border-l-4 border-blue-500 dark:border-blue-400 dark:text-gray-300"
            >
              We are providing a better facility
            </h2>
            <p
              class="mb-4 text-base leading-7 text-gray-500 dark:text-gray-400"
            >
              Welcome to My Shop, your go-to online store for all things of product. We are dedicated to providing you with the very best of products, with an emphasis on quality, customer service, and uniqueness.
            </p>
            <ul
              class="mb-10"
            >
              <li
                class="flex items-center mb-4 text-base text-gray-600 dark:text-gray-400"
              >
                <span
                  class="mr-3 text-blue-500 dark:text-blue-400"
                >
                  <svg
                    class="w-5 h-5 bi bi-patch-check-fill"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"
                    />
                  </svg>
                </span>
                Temukan beragam [Kategori Produk Anda] yang unik dan sulit ditemukan di tempat lain.
              </li>
              <li
                class="flex items-=center mb-4 text-base text-gray-600 dark:text-gray-400"
              >
                <span
                  class="mr-3 text-blue-500 dark:text-blue-400"
                >
                  <svg
                    class="w-5 h-5 bi bi-patch-check-fill"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"
                    />
                  </svg>
                </span>
                Eli orem ipsum dolor sit amet, consectetur advice
              </li>
              <li
                class="flex items-center text-base text-gray-600 dark:text-gray-400"
              >
                <span
                  class="mr-3 text-blue-500 dark:text-blue-400"
                >
                  <svg
                    class="w-5 h-5 bi bi-patch-check-fill"
                    fill="currentColor"
                    height="16"
                    viewBox="0 0 16 16"
                    width="16"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a.5.5 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01.89.636-.622a2.89 2.89 0 0 0 0-4.134l.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01-.622-.636zm.287 5.984-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7 8.793l2.646-2.647a.5.5 0 0 1 .708.708z"
                    />
                  </svg>
                </span>
                Iron man ipsum dolor sit amet, consectetur adipiscing
              </li>
            </ul>
            <a
              class="px-4 py-3 text-blue-700 transition-all transform border border-blue-500 hover:bg-blue-600 dark:border-blue-400 dark:hover:bg-blue-500 dark:hover:text-gray-100 dark:hover:border-blue-500 dark:text-blue-400 hover:text-gray-100"
              href="#"
            >
              Discover more
            </a>
          </div>
        </div>
      </div>
    </section>
  </div>,
  "debug": [Function],
  "findAllByAltText": [Function],
  "findAllByDisplayValue": [Function],
  "findAllByLabelText": [Function],
  "findAllByPlaceholderText": [Function],
  "findAllByRole": [Function],
  "findAllByTestId": [Function],
  "findAllByText": [Function],
  "findAllByTitle": [Function],
  "findByAltText": [Function],
  "findByDisplayValue": [Function],
  "findByLabelText": [Function],
  "findByPlaceholderText": [Function],
  "findByRole": [Function],
  "findByTestId": [Function],
  "findByText": [Function],
  "findByTitle": [Function],
  "getAllByAltText": [Function],
  "getAllByDisplayValue": [Function],
  "getAllByLabelText": [Function],
  "getAllByPlaceholderText": [Function],
  "getAllByRole": [Function],
  "getAllByTestId": [Function],
  "getAllByText": [Function],
  "getAllByTitle": [Function],
  "getByAltText": [Function],
  "getByDisplayValue": [Function],
  "getByLabelText": [Function],
  "getByPlaceholderText": [Function],
  "getByRole": [Function],
  "getByTestId": [Function],
  "getByText": [Function],
  "getByTitle": [Function],
  "queryAllByAltText": [Function],
  "queryAllByDisplayValue": [Function],
  "queryAllByLabelText": [Function],
  "queryAllByPlaceholderText": [Function],
  "queryAllByRole": [Function],
  "queryAllByTestId": [Function],
  "queryAllByText": [Function],
  "queryAllByTitle": [Function],
  "queryByAltText": [Function],
  "queryByDisplayValue": [Function],
  "queryByLabelText": [Function],
  "queryByPlaceholderText": [Function],
  "queryByRole": [Function],
  "queryByTestId": [Function],
  "queryByText": [Function],
  "queryByTitle": [Function],
  "rerender": [Function],
  "unmount": [Function],
}
`);
  });
});
