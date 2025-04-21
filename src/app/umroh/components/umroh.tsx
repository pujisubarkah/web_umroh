'use client';
import { useState } from 'react';
import {
  FaCalendarAlt, FaClock, FaStar, FaUsers, FaPlaneDeparture,
  FaMoneyBillWave, FaHotel, FaChair, FaSortAmountDownAlt, FaPlane
} from 'react-icons/fa';
import Image from 'next/image';

const dataPaket = [
  {
    id: 1,
    title: 'PAKET UMROH HEMAT',
    harga: 25700000,
    keberangkatan: '2025-04-09',
    durasi: 9,
    hotel: 3,
    totalSeat: 50,
    availableSeat: 40,
    dari: 'JAKARTA',
    maskapai: 'Garuda Indonesia',
    image: '/umroh/1.jpg'
  },
  {
    id: 2,
    title: 'PAKET UMROH PLUS TURKEY',
    harga: 39800000,
    keberangkatan: '2024-12-25',
    durasi: 14,
    hotel: 4,
    totalSeat: 45,
    availableSeat: 45,
    dari: 'JAKARTA',
    maskapai: 'Qatar Airways',
    image: '/umroh/2.jpg'
  },
  {
    id: 3,
    title: 'PAKET UMROH 9 HARI A',
    harga: 29500000,
    keberangkatan: '2026-02-28',
    durasi: 9,
    hotel: 3,
    totalSeat: 50,
    availableSeat: 40,
    dari: 'JAKARTA',
    maskapai: 'Saudia Airlines',
    image: '/umroh/3.jpg'
  },
  {
    id: 4,
    title: 'PAKET UMROH 9 HARI B',
    harga: 31500000,
    keberangkatan: '2026-02-28',
    durasi: 9,
    hotel: 4,
    totalSeat: 50,
    availableSeat: 40,
    dari: 'JAKARTA',
    maskapai: 'Saudia Airlines',
    image: '/umroh/4.jpg'
  },
  {
    id: 5,
    title: 'PAKET UMROH RAMADHAN LAILATUL QADAR',
    harga: 43500000,
    keberangkatan: '2024-03-30',
    durasi: 9,
    hotel: 4,
    totalSeat: 50,
    availableSeat: 40,
    dari: 'JAKARTA',
    maskapai: 'Garuda Indonesia',
    image: '/umroh/5.jpg'
  },
];

export default function PaketUmroh() {
  const [filter, setFilter] = useState<{
    maxHarga: number;
    minHotel: number;
    durasi: number | null;
    minAvailableSeat: number;
    dari: string;
    maskapai: string;
  }>({
    maxHarga: Infinity,
    minHotel: 0,
    durasi: null,
    minAvailableSeat: 0,
    dari: '',
    maskapai: '',
  });

  const [sortOrder, setSortOrder] = useState('');

  const filteredPaket = dataPaket
    .filter((paket) => {
      const hargaOK = paket.harga <= filter.maxHarga;
      const hotelOK = paket.hotel >= filter.minHotel;
      const durasiOK = filter.durasi ? paket.durasi === filter.durasi : true;
      const availableSeatOK = paket.availableSeat >= filter.minAvailableSeat;
      const dariOK = filter.dari ? paket.dari.toLowerCase().includes(filter.dari.toLowerCase()) : true;
      return hargaOK && hotelOK && durasiOK && availableSeatOK && dariOK;
    })
    .sort((a, b) => {
      switch (sortOrder) {
        case 'harga_asc':
          return a.harga - b.harga;
        case 'harga_desc':
          return b.harga - a.harga;
        case 'durasi_asc':
          return a.durasi - b.durasi;
        case 'durasi_desc':
          return b.durasi - a.durasi;
        default:
          return 0;
      }
    });

  return (
    <div className="min-h-screen bg-pink-50 py-10 px-5">
      <h2 className="text-xl font-bold text-pink-500 text-center">KHALIFAH ASIA</h2>
          <h1 className="text-3xl font-bold mt-2 text-center">Paket Umroh</h1>
          <hr className="w-1/4 mx-auto my-4 border-gray-300" />
      {/* FILTER SECTION */}
<div className="flex flex-wrap lg:flex-nowrap gap-4 justify-center mb-12 bg-white rounded-2xl p-6 shadow-xl border border-pink-100 overflow-x-auto">

{/* Filter Items */}
{[
  {
    label: "Biaya",
    icon: <FaMoneyBillWave className="text-pink-500" />,
    component: (
    <select
      className="border border-gray-300 rounded-lg px-3 py-2 w-40 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
      onChange={(e) => setFilter({ ...filter, maxHarga: Number(e.target.value) })}
    >
      <option value={Infinity}>Semua Biaya</option>
      <option value={30000000}>Di bawah 30 Juta</option>
      <option value={40000000}>Di bawah 40 Juta</option>
    </select>
    ),
  },
  {
    label: "Hotel",
    icon: <FaHotel className="text-pink-500" />,
    component: (
      <select
        className="border border-gray-300 rounded-lg px-3 py-2 w-40 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
        onChange={(e) => setFilter({ ...filter, minHotel: Number(e.target.value) })}
      >
        <option value={0}>Semua</option>
        <option value={3}>3★+</option>
        <option value={4}>4★+</option>
      </select>
    ),
  },
  {
    label: "Durasi",
    icon: <FaClock className="text-pink-500" />,
    component: (
      <select
        className="border border-gray-300 rounded-lg px-3 py-2 w-40 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
        onChange={(e) =>
          setFilter({ ...filter, durasi: e.target.value ? Number(e.target.value) : null })
        }
      >
        <option value="">Semua</option>
        <option value={9}>9 Hari</option>
        <option value={18}>18 Hari</option>
      </select>
    ),
  },
  {
    label: "Seat",
    icon: <FaChair className="text-pink-500" />,
    component: (
      <input
        type="number"
        className="border border-gray-300 rounded-lg px-3 py-2 w-40 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
        placeholder="Min Seat"
        onChange={(e) =>
          setFilter({ ...filter, minAvailableSeat: Number(e.target.value) })
        }
      />
    ),
  },
  {
    label: "Dari",
    icon: <FaPlaneDeparture className="text-pink-500" />,
    component: (
      <input
        type="text"
        className="border border-gray-300 rounded-lg px-3 py-2 w-40 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
        placeholder="Kota"
        onChange={(e) => setFilter({ ...filter, dari: e.target.value })}
      />
    ),
  },
  {
    label: "Urutkan",
    icon: <FaSortAmountDownAlt className="text-pink-500" />,
    component: (
      <select
        className="border border-gray-300 rounded-lg px-3 py-2 w-40 text-sm focus:outline-none focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-all"
        onChange={(e) => setSortOrder(e.target.value)}
      >
        <option value="">Default</option>
        <option value="harga_asc">Termurah</option>
        <option value="harga_desc">Termahal</option>
        <option value="durasi_asc">Durasi Pendek</option>
        <option value="durasi_desc">Durasi Panjang</option>
      </select>
    ),
  },
].map((item, idx) => (
  <div key={idx} className="flex flex-col items-start min-w-[130px]">
    <label className="text-sm text-pink-500 font-medium flex items-center gap-1 mb-1">
      {item.icon}
      {item.label}
    </label>
    {item.component}
  </div>
))}
</div>


      {/* KARTU PAKET */}
      <div className="grid md:grid-cols-3 gap-6">
        {filteredPaket.map((paket) => (
          <div key={paket.id} className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <Image src={paket.image} alt={paket.title} width={400} height={250} className="w-full object-cover" />
            <div className="p-4">
              <h2 className="font-semibold text-lg mb-2 text-gray-800">{paket.title}</h2>
              <p className="text-pink-500 font-bold mb-3">
                Rp{paket.harga.toLocaleString('id-ID')},-{' '}
                <span className="text-sm font-normal text-gray-600">/ pax</span>
              </p>
              <ul className="space-y-1 text-sm text-gray-700">
                <li className="flex items-center gap-2">
                  <FaCalendarAlt /> Jadwal Berangkat: {new Date(paket.keberangkatan).toLocaleDateString('id-ID')}
                </li>
                <li className="flex items-center gap-2">
                  <FaClock /> Durasi: {paket.durasi} Hari
                </li>
                <li className="flex items-center gap-2">
                  <FaStar className="text-yellow-400" /> Kelas Hotel: {'★'.repeat(paket.hotel)}
                </li>
                <li className="flex items-center gap-2">
                  <FaUsers /> Total Seat: {paket.totalSeat}
                </li>
                <li className="flex items-center gap-2 text-pink-600 font-semibold">
                  <FaUsers /> Available Seat: {paket.availableSeat} pax
                </li>
                <li className="flex items-center gap-2">
                  <FaPlaneDeparture /> Berangkat dari: {paket.dari}
                </li>
                <li className="flex items-center gap-2">
                  <FaPlane /> Maskapai: {paket.maskapai}
                </li>
              </ul>
              <button className="mt-4 w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-xl font-semibold transition-all">
                Lihat Detail
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
