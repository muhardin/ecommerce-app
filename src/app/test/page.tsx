"use client";
import { useState, useEffect } from "react";

interface Step {
  title: string;
  steps: string[];
}

function MyComponent() {
  const [decodedArray, setDecodedArray] = useState<Step[]>([]);
  const jsonString =
    '[{"title":"Internet Banking","steps":["Login ke internet banking klikbca Anda","Pilih menu <b>Transfer Dana<\\/b> lalu pilih <b>Transfer ke BCA Virtual Account<\\/b>","Pilih <b>Dari Rekening<\\/b>","Masukkan Nomor VA (<b>253332213566280<\\/b>) lalu klik <b>Lanjutkan<\\/b>","Detail transaksi akan ditampilkan, pastikan data sudah sesuai lalu masukkan respon <b>Key BCA Appli 1<\\/b>","Klik <b>Kirim<\\/b>","Transaksi sukses, simpan bukti transaksi Anda"]},{"title":"Mobile Banking","steps":["Login pada aplikasi BCA mobile","Pilih <b>m-BCA<\\/b> masukkan kode akses m-BCA","Pilih <b>m-Transfer<\\/b>","Pilih <b>BCA Virtual Account<\\/b>","Masukkan Nomor VA (<b>253332213566280<\\/b>) lalu klik <b>OK<\\/b>","Konfirmasi no virtual account dan rekening pendebetan","Periksa kembalian rincian pembayaran anda, lalu klik <b>Ya<\\/b>","Masukkan pin m-BCA","Pembayaran Selesai"]},{"title":"ATM BCA","steps":["Masukkan kartu ATM BCA & PIN","Pilih menu <b>Transaksi Lainnya > Transfer > Ke Rekening BCA Virtual Account<\\/b>","Masukkan Nomor VA (<b>253332213566280<\\/b>)","Di halaman konfirmasi, pastikan detail pembayaran sudah sesuai seperti Nomor VA, Nama, Produk dan Total Tagihan","Jika sudah benar, klik <b>Ya<\\/b>","Simpan struk transaksi sebagai bukti pembayaran"]}]';

  useEffect(() => {
    try {
      const decodedArray: Step[] = JSON.parse(jsonString);
      setDecodedArray(decodedArray);
    } catch (error) {
      console.error("Error decoding JSON:", error);
    }
  }, []);

  return (
    <div>
      <h2>Decoded Array:</h2>
      {decodedArray.map((item, index) => (
        <details key={index}>
          <summary>{item.title}</summary>
          <ol>
            {item.steps.map((step, stepIndex) => (
              <li key={stepIndex}>
                <span dangerouslySetInnerHTML={{ __html: step }} />
              </li>
            ))}
          </ol>
        </details>
      ))}
    </div>
  );
}

export default MyComponent;
