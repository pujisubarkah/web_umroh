import Image from "next/image";
import { FaCheckCircle } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="bg-pink-50 min-h-screen py-10 px-4 md:px-20 text-gray-800">
      <div className="max-w-6xl mx-auto">
        {/* Tentang Namira Travel */}
        <div className="bg-white shadow-xl rounded-2xl border border-pink-200 mb-10 p-6">
          <div className="md:flex md:items-start md:gap-8">
            {/* Logo */}
            <div className="flex justify-center md:justify-start mb-6 md:mb-0">
              <Image
                src="/logo.png"
                alt="Logo Namira Travel"
                width={800}
                height={800}
                className="rounded-xl shadow-md"
              />
            </div>
            <div>
            <h2 className="text-xl font-bold text-pink-500">TENTANG KAMI</h2>
            <h1 className="text-3xl font-bold mt-2">Khalifah Asia Tour & Travel</h1>
            <hr className="w-1/4 mx-auto my-4 border-gray-300" />
              <p className="mb-4">
                Khalifah Asia Tour & Travel secara resmi terdaftar di Kementerian Hukum & HAM pada Tgl 28 Agustus tahun 2000.
                Khalifah Asia adalah perusahaan Tour dan Travel yang bergerak di bidang:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start gap-2"><FaCheckCircle className="text-pink-500 mt-1" /> Penyelenggara Perjalanan Ibadah Umrah (PPIU), Berizin No. 183 / 2020 di Kemenag</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="text-pink-500 mt-1" /> Penyelenggara Ibadah Haji Khusus (PIHK), Berizin No. 693 / 2020 di Kemenag</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="text-pink-500 mt-1" /> Provider Resmi Visa Haji Furoda & Umrah</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="text-pink-500 mt-1" /> Jasa Land Arrangement berizin di Saudi (Tim Penyelenggara Umrah & Haji di Saudi)</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="text-pink-500 mt-1" /> Penjualan Tiket Pesawat Umrah & Haji</li>
                <li className="flex items-start gap-2"><FaCheckCircle className="text-pink-500 mt-1" /> Paket Umrah, Umrah Plus, Muslim Tour, Paket Haji Furoda dan Paket Haji Khusus</li>
              </ul>
              <p>
                Telah berpengalaman dalam melayani Jemaah Umrah & Haji Namira Travel ataupun beberapa Jemaah Travel di Indonesia yang menggunakan Jasa Kami.
              </p>
            </div>
          </div>
        </div>

        {/* VISI dan MISI */}
        <div className="bg-white shadow-xl rounded-2xl border border-pink-200 mb-10 p-6">
          <h2 className="text-2xl font-bold text-center mb-6">VISI & MISI</h2>
            <hr className="w-1/4 mx-auto my-4 border-gray-300" />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-pink-100 p-5 rounded-xl shadow">
              <h3 className="text-xl font-bold text-pink-600 mb-3">VISI</h3>
              <p className="text-gray-700 font-medium">
                Menjadi Biro Haji Umrah yang InsyaAllah amanah sesuai Syariat dengan Fasilitas serta Pelayanan yang nyaman, berkualitas dan terbaik.
              </p>
            </div>
            <div className="bg-pink-100 p-5 rounded-xl shadow">
              <h3 className="text-xl font-bold text-pink-600 mb-3">MISI</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2"><FaCheckCircle className="text-pink-500 min-w-[1rem] min-h-[1rem]" /> Memberikan Kepastian Jadwal Keberangkatan</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-pink-500 min-w-[1rem] min-h-[1rem]" /> Berorientasi pada Pelayanan untuk kepuasan Jemaah</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-pink-500 min-w-[1rem] min-h-[1rem]" /> Memberikan Fasilitas yang terbaik demi kenyamanan Jemaah</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-pink-500 min-w-[1rem] min-h-[1rem]" /> Menyiapkan Pembimbing sesuai sunnah yang amanah berkompeten dan berpengalaman</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-pink-500 min-w-[1rem] min-h-[1rem]" /> Mengembangkan SDM dan tata kelola Management yang Profesional</li>
                <li className="flex items-center gap-2"><FaCheckCircle className="text-pink-500 min-w-[1rem] min-h-[1rem]" /> Menyediakan Pemandu (Muthawif) di tanah suci yang keilmuannya InsyaAllah sesuai dengan Al-Quran dan As-sunnah</li></ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
