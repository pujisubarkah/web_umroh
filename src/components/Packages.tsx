'use client';
import { CheckCircle, XCircle } from 'lucide-react';

const packages = [
  {
    title: 'Umrah',
    price: '$2000 USD / Person',
    color: 'bg-pink-500',
    buttonColor: 'bg-pink-500',
    features: [true, false, false, true, true, false, false],
  },
  {
    title: 'Hajj',
    price: '$8000 USD / Person',
    color: 'bg-teal-500',
    buttonColor: 'bg-teal-500',
    features: [true, false, false, true, true, false, false],
  },
  {
    title: 'Hajj Plus',
    price: '$10000 USD / Person',
    color: 'bg-indigo-500',
    buttonColor: 'bg-indigo-500',
    features: [true, false, false, true, true, false, false],
  },
];

const featureList = [
  'Private Airport Transfers',
  'International Airfare',
  'Umrah Visa',
  'Land Transportation',
  'Accomodation',
  'Lunch',
  'Dinner',
];

export default function Packages() {
  return (
    <section className="py-12 px-4 md:px-10 bg-white text-gray-800">
      <h2 className="text-center text-xl text-pink-600 font-semibold uppercase">Umrah & Hajj Packages</h2>
      <h3 className="text-center text-3xl md:text-4xl font-bold mt-2 mb-10">Find Your Perfect Package</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {packages.map((pkg, index) => (
          <div
            key={index}
            className="border rounded-2xl shadow-md overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className={`${pkg.color} text-white p-6`}>
              <h4 className="text-2xl font-semibold">{pkg.title}</h4>
              <p className="text-lg">{pkg.price}</p>
            </div>

            {/* Features */}
            <div className="p-6 flex flex-col gap-4 flex-grow bg-white">
              {featureList.map((feat, i) => (
                <div key={i} className="flex items-center gap-3 text-gray-700">
                  {pkg.features[i] ? (
                    <CheckCircle className="text-teal-500" size={20} />
                  ) : (
                    <XCircle className="text-red-400" size={20} />
                  )}
                  <span>{feat}</span>
                </div>
              ))}

              <button
                className={`mt-6 ${pkg.buttonColor} text-white font-semibold py-3 rounded-xl hover:opacity-90 transition`}
              >
                Get Started
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
