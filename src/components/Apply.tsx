'use client';
import { useState } from 'react';
import { Phone } from 'lucide-react';

export default function ApplyForm() {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '' });

  return (
    <section className="bg-pink-50 py-16 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Left Form */}
        <div className="bg-white rounded-xl shadow-md py-14 px-10">
          <div className="bg-pink-500 text-white text-center py-3 rounded-t-xl -mt-8 mb-6">
            <h2 className="text-lg font-medium">Apply Now</h2>
            <p className="text-xl font-bold">Up 10% Discount*</p>
          </div>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.firstName}
              onChange={(e) => setForm({ ...form, firstName: e.target.value })}
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.lastName}
              onChange={(e) => setForm({ ...form, lastName: e.target.value })}
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
            />
            <div className="flex gap-2">
              <span className="px-4 py-3 rounded-full bg-gray-100 text-sm text-gray-600 flex items-center">+62</span>
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full border border-gray-300 rounded-full px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-pink-400"
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full bg-pink-500 text-white rounded-full py-3 font-semibold hover:bg-pink-600 transition"
            >
              Apply Now
            </button>
          </form>
        </div>

        {/* Right Content */}
        <div>
          <p className="uppercase text-pink-500 font-semibold mb-2">KHALIFAH ASIA TOUR & TRAVEL</p>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Apply your Hajj and Umrah, and Get 10% Discount
          </h3>
          <p className="text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
            et dolore magna aliqua. Quis nostrud exercitation ullamco laboris nisi ut aliquip.
          </p>

          <div className="space-y-4">
            {['Register here', 'Fill in your details', 'Wait our Call', 'Go Umrah and Hajj'].map((text, idx) => (
              <div key={idx} className="flex items-center gap-4">
                <div className="bg-pink-500 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                  {idx + 1}
                </div>
                <span className="text-gray-800 font-medium">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
