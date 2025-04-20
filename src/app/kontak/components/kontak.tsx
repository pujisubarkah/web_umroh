// components/Contact.tsx
'use client';

import { FaFacebookF, FaTwitter, FaInstagram, FaWhatsapp, FaTiktok, FaYoutube } from 'react-icons/fa';

export default function Contact() {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-10 shadow-xl rounded-3xl p-10 border border-pink-200">
        {/* Left: Info */}
        <div className="space-y-6">
          <h2 className="text-4xl font-bold text-pink-600">Khalifah Asia</h2>

          <div>
            <h4 className="text-pink-500 font-semibold">BUSINESS ADDRESS</h4>
            <p className="text-gray-700">PT Indonesia International Bussines, Khalifah Asia.<br />
            Ruko Blossom Residence Jl. Prof. Dr. Hamka No.R-2 Gaga, Larangan, Tangerang, Banten 10110, Indonesia.</p>
          </div>

          <div>
            <h4 className="text-pink-500 font-semibold">BUSINESS E-MAIL</h4>
            <p className="text-gray-700">cs@khalifahasia.co.id</p>
          </div>

          <div>
            <h4 className="text-pink-500 font-semibold">TELEPHONE</h4>
            <p className="text-gray-700">+62 (021) 7313194</p>
          </div>

          <div className="flex space-x-4 pt-4">
            <a href="https://facebook.com/khalifahasiatravel" className="text-pink-500 hover:text-pink-700 text-xl">
              <FaFacebookF />
            </a>
            <a href="https://twitter.com/khalifahasia_" className="text-pink-500 hover:text-pink-700 text-xl">
              <FaTwitter />
            </a>
            <a href="https://instagram.com/khalifahasiatravel" className="text-pink-500 hover:text-pink-700 text-xl">
              <FaInstagram />
            </a>
            <a href="https://tiktok.com/khalifahasiatravel" className="text-pink-500 hover:text-pink-700 text-xl">
              <FaTiktok />
            </a>
            <a href="https://youtube.com/khalifahasiatravel" className="text-pink-500 hover:text-pink-700 text-xl">
              <FaYoutube />
            </a>
            <a href="https://wa.me/6281316401651" className="text-pink-500 hover:text-pink-700 text-xl">
              <FaWhatsapp />
            </a>
          </div>
        </div>

        {/* Right: Form */}
        <form className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">First Name</label>
              <input type="text" placeholder="First name here" className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Last Name <span className="text-red-500">*</span></label>
              <input type="text" placeholder="Last name here" className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-medium text-gray-700">Email Address</label>
              <input type="email" placeholder="Add email" className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />
            </div>
            <div>
              <label className="block font-medium text-gray-700">Subject <span className="text-red-500">*</span></label>
              <input type="text" placeholder="How can we help you" className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />
            </div>
          </div>

          <div>
            <label className="block font-medium text-gray-700">Comments / Questions</label>
            <textarea rows={4} placeholder="Comments" className="mt-1 w-full rounded-md border border-gray-300 px-4 py-2 focus:ring-pink-500 focus:border-pink-500 bg-pink-50" />
          </div>

          <button type="submit" className="bg-pink-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-pink-600 transition-all">
            SEND MESSAGE
          </button>
        </form>
      </div>
    </section>
  );
}