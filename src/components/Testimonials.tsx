'use client';
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const testimonials = [
  {
    name: 'Ali Hassan',
    role: 'Umroh Ramadhan 2019',
    image: 'https://i.pravatar.cc/300?u=ali',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    name: 'Amin Bukhari',
    role: 'Haji Plus 2021',
    image: 'https://i.pravatar.cc/300?u=amin',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    name: 'Faris Najd',
    role: 'Umroh Plus 2022',
    image: 'https://i.pravatar.cc/300?u=faris',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
  },
  {
    name: 'Zahra Amirah',
    role: 'Haji Plus 2023',
    image: 'https://i.pravatar.cc/300?u=zahra',
    text: 'Great experience! Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque facilisis.'
  },
  {
    name: 'Raihan Yusuf',
    role: 'Umroh Hemat 2024',
    image: 'https://i.pravatar.cc/300?u=raihan',
    text: 'Super satisfied with the service. Lorem ipsum dolor sit amet, consectetur.'
  }
];

export default function TestimonialSlider() {
  const sliderRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (sliderRef.current) {
      const { scrollLeft, clientWidth } = sliderRef.current;
      const scrollAmount = direction === 'left' ? -clientWidth : clientWidth;
      sliderRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section className="py-16 px-4 bg-pink-50">
      <div className="text-center mb-10">
        <h4 className="text-pink-500 font-bold tracking-widest uppercase mb-2">Testimonial</h4>
        <h2 className="text-3xl font-semibold">What did they say?</h2>
      </div>

      <div className="relative">
        <button onClick={() => scroll('left')} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full shadow-lg z-10">
          <FaArrowLeft />
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-scroll scrollbar-hide space-x-6 px-12"
        >
          {testimonials.map((item, idx) => (
            <div key={idx} className="min-w-[300px] max-w-sm bg-white p-6 rounded-xl shadow-md text-center">
              <p className="text-gray-600 mb-6">{item.text}</p>
              <div className="flex flex-col items-center">
                <img src={item.image} alt={item.name} className="w-16 h-16 rounded-full object-cover mb-2" />
                <p className="font-semibold text-pink-500">{item.name}</p>
                <p className="text-sm text-gray-500">{item.role}</p>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => scroll('right')} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-pink-500 text-white p-3 rounded-full shadow-lg z-10">
          <FaArrowRight />
        </button>
      </div>
    </section>
  );
}
