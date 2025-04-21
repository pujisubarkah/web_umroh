// pages/umroh.jsx
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import Link from 'next/link';

export default function UmrohPage() {
    const data = [
        {
            title: 'PAKET UMROH (SYAWAL) 28 MARET 2026',
            url: '/listings/paket-umroh-syawal-28-maret-2026-x9pxv4gm5d',
            img: 'https://storage.googleapis.com/muslimpergi/uploads/listing/pict/6733/medium_syawal_2026.jpg',
            price: 'Rp27.900.000,-',
            duration: '9 Hari',
            depart: '28 Mar 26',
            seat: '40',
            available: '40',
            hotelStars: 4,
            origin: 'JAKARTA',
        },
        {
            title: 'PAKET UMROH IKTIKAF MAKKAH 2026',
            url: '/listings/paket-umroh-iktikaf-makkah-2026-vdvdl8xla5',
            img: 'https://storage.googleapis.com/muslimpergi/uploads/listing/pict/6732/medium_WhatsApp_Image_2025-04-16_at_08.57.00.jpeg',
            price: 'Rp45.300.000,-',
            duration: '18 Hari',
            depart: '8 Mar 26',
            seat: '45',
            available: '45',
            hotelStars: 3,
            origin: 'JAKARTA',
        },
        {
            title: 'PAKET UMROH GOLD TENGAH RAMADHAN 28 FEBRUARI 2026',
            url: '/listings/paket-umroh-gold-tengah-ramadhan-28-februari-2026-jerrmx8mka',
            img: 'https://storage.googleapis.com/muslimpergi/uploads/listing/pict/6741/medium_umroh_tengah_ramadhan.jpg',
            price: 'Rp37.300.000,-',
            duration: '9 Hari',
            depart: '28 Feb 26',
            seat: '40',
            available: '40',
            hotelStars: 4,
            origin: 'JAKARTA',
        },
    ];

    return (
        <div>
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold text-center text-pink-700 mb-6">Daftar Umroh Hemat</h1>
                <div id="listings_package" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {data.map((item, index) => (
                        <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
                            <figure className="relative">
                                <img src={item.img} alt={item.title} className="w-full h-44 object-cover" />
                                <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-0.5 rounded-md font-semibold shadow">
                                    UMROH
                                </span>
                            </figure>
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-base font-semibold text-pink-700 hover:underline leading-snug">
                                    <Link href={item.url}>{item.title}</Link>
                                </h3>
                                <div className="mt-2 text-gray-800 text-sm">
                                    <p>
                                        <strong className="text-pink-600">{item.price}</strong> /pax
                                    </p>
                                    <p className="text-xs">QUAD</p>
                                </div>
                                <table className="mt-3 text-sm text-gray-700 w-full">
                                    <tbody>
                                        <tr>
                                            <td className="py-1 w-6">
                                                <i className="fa fa-calendar"></i>
                                            </td>
                                            <td className="pr-2">Jadwal</td>
                                            <td>{item.depart}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <i className="fa fa-clock-o"></i>
                                            </td>
                                            <td className="pr-2">Durasi</td>
                                            <td>{item.duration}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <i className="fa fa-building-o"></i>
                                            </td>
                                            <td className="pr-2">Hotel</td>
                                            <td>
                                                {[...Array(item.hotelStars)].map((_, i) => (
                                                    <i key={i} className="fa fa-star text-yellow-400" />
                                                ))}
                                                {[...Array(5 - item.hotelStars)].map((_, i) => (
                                                    <i key={i} className="fa fa-star-o text-gray-300" />
                                                ))}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <i className="fa fa-user"></i>
                                            </td>
                                            <td className="pr-2">Seat</td>
                                            <td>{item.seat} pax</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <i className="fa fa-user"></i>
                                            </td>
                                            <td className="pr-2 font-bold">Available</td>
                                            <td className="font-bold">{item.available} pax</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <i className="fa fa-map-marker"></i>
                                            </td>
                                            <td className="pr-2">Asal</td>
                                            <td>{item.origin}</td>
                                        </tr>
                                        <tr>
                                            <td className="py-1">
                                                <i className="fa fa-plane"></i>
                                            </td>
                                            <td className="pr-2">Maskapai</td>
                                            <td>-</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <Link
                                    href={item.url}
                                    className="mt-4 bg-pink-600 text-white text-center py-2 rounded-lg hover:bg-pink-700 font-semibold text-sm"
                                >
                                    Lihat Detail
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}