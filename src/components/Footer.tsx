'use client';
import Image from 'next/image';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="bg-pink-50  text-black text-sm">
      <div className="max-w-7xl mx-auto px-4 py-10 flex flex-col md:flex-row justify-between gap-10">
        {/* Kiri - Logo & tagline */}
        <div className="flex-1 max-w-md">
          <div className="mb-4">
            <Image src="/logo.png" alt="Khalifah Asia" width={150} height={50} />
          </div>
          <p className="mb-4">
            Perusahaan penyedia jasa layanan Tour dan Travel yang mampu mengeksplorasi semua rencana perjalanan wisata public dengan memberikan pelayanan terbaik dan berkualitas.
          </p>
        </div>

        {/* Kanan - Alamat & Sosmed */}
        <div className="flex-1 max-w-md">
          <h3 className="font-bold mb-2">PT Indonesia International Bussines, Khalifah Asia</h3>
          <p className="mb-2">Ruko Blossom Residence Jl. Prof. Dr. Hamka No.R-2 Gaga, Larangan, Tangerang, Banten 10110, Indonesia.</p>
          <p className="mb-2">Telp: (021) 7313194</p>

          <div className="mt-4">
            <p className="font-semibold mb-2">Ikuti media sosial kami di</p>
            <div className="flex gap-3 text-lg">
              <a href="https://facebook.com/khalifahasiatravel"><FaFacebookF /></a>
              <a href="https://instagram.com/khalifahasiatravel" target='_blank'><FaInstagram /></a>
              <a href="https://twitter.com/khalifahasia_"><FaTwitter /></a>
              <a href="https://youtube.com/khalifahasiatravel"><FaYoutube /></a>
              <a href="https://tiktok.com/khalifahasiatravel"><FaTiktok /></a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-900 text-black py-4 text-center text-xs">
        Khalifah Asia Tour & Travel © 2025 All Right Reserved
      </div>
    </footer>
  );
}
