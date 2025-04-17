// components/Offers.tsx
import Image from 'next/image';

const features = [
  {
    icon: '/icons/luggage.png',
    title: 'Free Luggage',
    desc: 'Responsive Lorem Ipsum used since the 1500s is reproduced below.',
  },
  {
    icon: '/icons/customer-care.png',
    title: 'Customer Support',
    desc: 'Responsive Lorem Ipsum used since the 1500s is reproduced below.',
  },
  {
    icon: '/icons/reception-bell.png',
    title: '5 Star Hotel',
    desc: 'Responsive Lorem Ipsum used since the 1500s is reproduced below.',
  },
  {
    icon: '/icons/kaaba.png',
    title: 'Hajj Tour',
    desc: 'Responsive Lorem Ipsum used since the 1500s is reproduced below.',
  },
];

export default function Offers() {
  return (
    <section className="flex flex-col md:flex-row items-stretch bg-[#e9f0ff] relative">
      {/* Left Content */}
      <div className="md:w-1/2 p-8 md:p-16 flex flex-col justify-center space-y-6 z-10">
        <p className="text-pink-500 font-bold uppercase tracking-wide">Featured</p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800">What Do We Offer?</h2>
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>

        {/* CTA Buttons */}
        <div className="flex items-center gap-4 mt-4">
          <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold px-6 py-2 rounded-full">
            Apply Now
          </button>
          <button className="text-gray-800 font-semibold hover:underline">Read More</button>
        </div>

        {/* Feature List */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-8">
          {features.map((f, idx) => (
            <div key={idx} className="flex items-start gap-3">
              <img src={f.icon} alt={f.title} className="w-8 h-8" />
              <div>
                <h4 className="font-semibold text-gray-800">{f.title}</h4>
                <p className="text-sm text-gray-600">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Image */}
<div className="md:w-1/2 hidden md:block relative overflow-hidden">
  <div
    className="absolute inset-0 w-full h-full"
    style={{
      clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)', // ini bikin efek jajar genjang
    }}
  >
    <Image
      src="/offers-image.jpg"
      alt="Offers Image"
      width={800}
      height={800}
      className="object-cover w-full h-full"
    />
  </div>
</div>

    </section>
  );
}
