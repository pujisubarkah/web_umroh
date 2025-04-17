'use client';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import clsx from 'clsx';

const banners = [
  '/banner/Banner1.jpg',
  '/banner/Banner2.jpg',
  '/banner/Banner3.jpg',
];

export default function Carousel() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % banners.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Carousel Images */}
      <div
        className="flex transition-transform duration-1000"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {banners.map((src, index) => (
          <div
          key={index}
          className="w-full flex-shrink-0 h-[30vh] md:h-[50vh] relative"
        >
          {/* Background image */}
          <Image
            src={src}
            alt={`Banner ${index + 1}`}
            fill
            className="object-cover"
            priority={index === 0}
          />
      
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/40 z-10" />
        </div>
        ))}
      </div>

      {/* Text Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white z-10 px-4">
        <h1 className="text-3xl md:text-7xl font-bold drop-shadow-lg">Khalifah Asia</h1>
        <p className="text-lg md:text-3xl mt-2 drop-shadow-md">Solusi Umroh dan Haji</p>
        <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-3 rounded-full shadow-md transition">
          Apply Now
        </button>
      </div>

      {/* Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={clsx(
              'w-3 h-3 rounded-full bg-gray-300 transition-colors duration-300',
              current === index && 'bg-pink-500'
            )}
          />
        ))}
      </div>
    </div>
  );
}
