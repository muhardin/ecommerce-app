"use client";
import { useEffect, useState } from "react";
import { Icons } from "@/app/components/ui/Icons";
import Image from "next/image";
import PageAbout from "@/app/web/about/page";
import Link from "next/link";
import useSWR from "swr";
import { PackageData } from "../../../type";
import FormattedPrice from "@/app/components/FormattedPrice";
import LandingPackage from "./LandingPackage";

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

  return (
    <>
      <main className="flex-auto">
        {/* LandingPackage */}
        <LandingPackage />
        {/* End LandingPackage */}

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
                Apa Itu Shopitycon?
              </h2>
              <p className="mt-2 text-lg text-gray-600">
                Jika kamu memiliki pertanyaan lain,{" "}
                <a
                  href="mailto:info@example.com"
                  className="text-gray-900 underline">
                  hubungi kami
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
                      Apa Itu Shopitycon?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Shopitycon adalah platform toko online yang mempertemukan
                      pemilik produk (supplier) dan penjual (seller) dalam satu
                      software otomatis bebas repot. Nama Shopitycon berasal
                      dari dua kata dengan terjemahan bebas: Shopi (toko online)
                      dan Tycon (bos/raja). Jadi Shopitycon artinya bosnya toko
                      online. Dengan Shopitycon, kamu bisa memulai bisnis toko
                      online bahkan tanpa modal stok produk sama sekali.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Apa Perbedaan Toko Subdomain Shopitycon dan Private
                      Domain?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Jika member menggunakan plan Start Up sampai Premier, maka
                      nama tokonya mengikuti subdomain shopitycon (contoh:
                      namatokoanda.shopitycon.com). Jika member menggunakan plan
                      Elite dan Royale, maka toko online bisa menggunakan
                      private domain (www.namatokoanda.com).
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Bagaimana Sistem Kerja Sebagai Seller di Shopitycon?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Setelah terdaftar dan bisa login, masuk ke dashboard
                      seller, pilih produk yang ingin ditampilkan di frontpage
                      toko onlinemu. Setiap produk yang terpilih akan langsung
                      tampil di toko onlinemu untuk bisa dijual. Kamu akan
                      mendapat keuntungan dari selisih harga jual.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="space-y-10">
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Berapa Lama Proses Pendaftaran Sampai Toko Saya Online?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Prosesnya instan dan cepat. Setelah menyelesaikan form
                      registrasi dan pembayaran Pin Akses, dashboard login
                      langsung aktif. Kamu bisa memilih produk untuk ditampilkan
                      di toko online dalam hitungan detik.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Bagaimana Proses Ketika Produk Supplier Terjual di Toko
                      Online Saya?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Setelah pembeli check out, sistem akan memberikan
                      notifikasi ke WhatsApp Seller dan Supplier. Supplier akan
                      mengirim produk, dan dana akan otomatis tersplit setelah
                      produk terkirim.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Apa Saja Opsi Pembayaran yang Tersedia untuk Pelanggan?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Kami menyediakan berbagai opsi pembayaran seperti Virtual
                      Account, E-Money, dan Kartu Kredit. Proses dilakukan oleh
                      payment gateway resmi.
                    </p>
                  </li>
                </ul>
              </li>
              <li>
                <ul role="list" className="space-y-10">
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Bagaimana Sistem Penghitungan Ongkos Kirim?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Ongkos kirim dihitung berdasarkan jarak antara gudang
                      supplier dan lokasi pembeli, menggunakan sistem API Raja
                      Ongkir.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Apa Produk yang Bisa Saya Jual?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Kamu bisa menjual produk yang sesuai dengan niche dan
                      target audiensmu. Lakukan riset pasar untuk menentukan
                      produk yang unik atau kompetitif.
                    </p>
                  </li>
                  <li>
                    <h3 className="text-lg font-semibold leading-6 text-gray-900">
                      Pertanyaan & Panduan Penggunaan?
                    </h3>
                    <p className="mt-4 text-sm text-gray-700">
                      Untuk info dan pertanyaan lainnya, kamu bisa melihat
                      tutorial di dashboard seller masing-masing.
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
