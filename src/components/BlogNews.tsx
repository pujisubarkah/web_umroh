'use client';
import { useRef } from 'react';
import { ChevronRight, ChevronLeft, Calendar, Newspaper } from 'lucide-react';

const blogPosts = [
    {
      title: 'Renewable Energy Is Great—but the Grid Can Slow It Down',
      date: 'April 3, 2022',
      category: 'News',
      excerpt: 'How Do You Define Electric Field, Voltage, and Current? APPLY NOW',
      imageUrl: '/banner/Banner2.jpg',
    },
    {
      title: 'This Dam Simple Trick Is a Big Green Energy Win',
      date: 'April 3, 2022',
      category: 'News',
      excerpt: 'How Do You Define Electric Field, Voltage, and Current? APPLY NOW',
      imageUrl: '/banner/Banner1.jpg',
    },
    {
      title: 'Review: Span Smart Electrical Panel',
      date: 'April 3, 2022',
      category: 'News',
      excerpt: 'How Do You Define Electric Field, Voltage, and Current? APPLY NOW',
      imageUrl: '/banner/Banner3.jpg',
    },
    {
      title: 'Hydrogen Fuel Hype? It’s Getting Real',
      date: 'April 4, 2022',
      category: 'News',
      excerpt: 'A look into the upcoming hydrogen revolution in transportation.',
      imageUrl: '/banner/Banner1.jpg',
    },
  ];

export default function BlogNewsSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const { scrollLeft, clientWidth } = scrollRef.current;
    const scrollAmount = clientWidth * 0.9;
    scrollRef.current.scrollTo({
      left: direction === 'left' ? scrollLeft - scrollAmount : scrollLeft + scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-16 px-4 md:px-8 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <p className="text-sm font-semibold text-pink-600 uppercase tracking-wide">Blog & News</p>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mt-2">Keep always updated with our fresh blog posts</h2>
        </div>

        <div className="relative">
          {/* Scrollable Blog List */}
          <div
              ref={scrollRef}
              className="flex gap-6 snap-x snap-mandatory overflow-x-auto pb-4 scroll-smooth scrollbar-hide scroll-pl-4 md:scroll-pl-8"
            >
            {blogPosts.map((post, index) => (
              <div
                key={index}
                className="min-w-[90%] sm:min-w-[60%] md:min-w-[33%] bg-white rounded-xl shadow hover:shadow-md transition snap-start flex-shrink-0"
              >
                <img src={post.imageUrl} alt={post.title} className="h-48 w-full object-cover rounded-t-xl" />
                <div className="p-5 flex flex-col justify-between flex-1">
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{post.title}</h3>
                  <div className="text-sm text-gray-500 flex items-center gap-2 mb-2">
                    <Calendar className="w-4 h-4" />
                    <span>{post.date}</span>
                    <span className="mx-1">•</span>
                    <Newspaper className="w-4 h-4" />
                    <span>{post.category}</span>
                  </div>
                  <p className="text-sm text-gray-600">{post.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Left Arrow */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 absolute top-1/2 left-0 transform -translate-y-1/2 z-25"
            aria-label="Scroll Left"
          >
            <ChevronLeft className="text-white w-4 h-4" />
          </button>

          {/* Right Arrow */}
          <button
            onClick={() => scroll('right')}
            className="hidden md:flex items-center justify-center w-10 h-10 rounded-full bg-pink-500 hover:bg-pink-600 absolute top-1/2 right-0 transform -translate-y-1/2 z-25"
            aria-label="Scroll Right"
          >
            <ChevronRight className="text-white w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
