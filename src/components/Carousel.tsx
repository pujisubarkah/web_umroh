'use client';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';

const banners = [
  '/banner/Banner1.jpg',
  '/banner/Banner2.jpg',
  '/banner/Banner3.jpg',
  '/banner/Banner4.jpeg'
];

export default function Carousel() {
  return (
    <div className="relative w-full h-[75vh] md:h-[75vh]">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        className="w-full h-full"
      >
        {banners.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                src={src}
                alt={`Banner ${index + 1}`}
                fill
                className="object-cover"
                priority={index === 0}
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black/60 z-10" />
              {/* Text overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-20 px-4">
                <h1 className="text-3xl md:text-7xl font-bold drop-shadow-lg">Khalifah Asia</h1>
                <p className="text-lg md:text-3xl mt-2 drop-shadow-md">Solusi Umroh dan Haji</p>
                <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
                  Apply Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
