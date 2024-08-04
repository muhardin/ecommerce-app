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
