'use client';
import Image from 'next/image';
import { Star, MapPin } from 'lucide-react';

const packages = [
  {
    title: 'Umrah Maulid September 2025',
    image: '/umroh/9.jpeg', // ganti sesuai path kamu
    mecca: { rating: 4, distance: '200 M To Masjidil Haram' },
    medina: { rating: 4, distance: '200 M To Nabawi Mosque' },
    priceOld: '40 Juta IDR',
    priceNew: '35,5 Juta IDR',
    booked: 100,
    total: 150,
  },
  {
    title: 'Umroh Plus Thoif 2025',
    image: '/umroh/6.jpg',
    mecca: { rating: 4, distance: '200 M To Masjidil Haram' },
    medina: { rating: 4, distance: '200 M To Nabawi Mosque' },
    priceOld: '40 Juta IDR',
    priceNew: '31,5 Juta IDR',
    booked: 100,
    total: 150,
  },
  {
    title: 'Haji Khusus 2032-2033',
    image: '/haji/1.jpg',
    mecca: { rating: 4, distance: '200 M To Masjidil Haram' },
    medina: { rating: 4, distance: '200 M To Nabawi Mosque' },
    priceOld: '30.000 USD',
    priceNew: '10.500 USD',
    booked: 100,
    total: 150,
  },
];

export default function PackagesCard() {
  return (
    <section className="py-12 px-4 bg-white text-gray-800">
      <div className="text-center mb-10">
        <p className="text-sm uppercase text-pink-500 font-semibold tracking-wide">Special Offers</p>
        <h2 className="text-3xl md:text-4xl font-bold">Hajj and Umrah Special Offer</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {packages.map((item, index) => {
          const percentage = (item.booked / item.total) * 100;
          return (
            <div key={index} className="border rounded-2xl overflow-hidden shadow-lg flex flex-col">
              {/* Gambar */}
              <div
              className="h-100 w-full relative cursor-pointer"
              onClick={() => window.open(item.image, '_blank')}
              >
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
              />
              </div>

              {/* Isi Card */}
              <div className="p-6 bg-white flex flex-col gap-4 flex-grow">
              <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>

              <div className="space-y-2 text-sm">
                {/* Mecca */}
                <div className="flex items-center gap-2">
                <MapPin className="text-pink-500" size={16} />
                <span className="font-medium">MECCA:</span>
                <span className="text-yellow-500">{'★'.repeat(item.mecca.rating)}</span>
                <span className="text-gray-500 ml-auto">{item.mecca.distance}</span>
                </div>

                {/* Medina */}
                <div className="flex items-center gap-2">
                <MapPin className="text-pink-500" size={16} />
                <span className="font-medium">MEDINA:</span>
                <span className="text-yellow-500">{'★'.repeat(item.medina.rating)}</span>
                <span className="text-gray-500 ml-auto">{item.medina.distance}</span>
                </div>
              </div>

              {/* Harga */}
              <div className="mt-2">
                <p className="text-sm line-through text-gray-400">{item.priceOld}/Pax</p>
                <p className="text-xl font-bold text-pink-600">{item.priceNew} <span className="text-sm">/ Pax</span></p>
              </div>

              {/* Tombol */}
              <div className="flex gap-2 mt-4">
                <button className="bg-pink-500 text-white px-4 py-2 rounded-lg font-semibold hover:bg-pink-600 transition w-full">
                Apply Now
                </button>
                <button className="bg-gray-100 text-gray-800 px-4 py-2 rounded-lg font-medium hover:bg-gray-200 transition w-full">
                Read More
                </button>
              </div>

              {/* Progress bar */}
              <div className="mt-4">
                <div className="bg-gray-200 h-3 rounded-full overflow-hidden">
                <div
                  className="bg-pink-500 h-full rounded-full transition-all"
                  style={{ width: `${percentage}%` }}
                />
                </div>
                <p className="text-sm text-gray-600 mt-1">Booked: {item.booked}/{item.total}</p>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
