"use client";

import React from "react";

const KisahPerjalanan = () => {
  return (
    <section className="bg-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 relative">
        {/* Text Content */}
        <img
            src="/logo_without_text.png"
            alt="Logo Background"
            className="absolute -top-10 -left-10 w-40 md:w-48 opacity-30 z-0"
          />
        <div className="md:w-1/2 space-y-6 z-10">
        
          <h2 className="text-3xl md:text-4xl font-bold text-gray-700 leading-snug">
            Menapaki Perjalanan Suci <br />
            Solusi Haji & Umroh <br />
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            Sejak 2014, Khalifah Asia Tour & Travel hadir sebagai mitra terpercaya perjalanan Umrah dan Haji. Berizin resmi dan terakreditasi A, kami berkomitmen memberikan pelayanan terbaik untuk ibadah yang nyaman, aman, dan penuh keikhlasan.
          </p>
          <button
            onClick={() => window.location.href = "/about"}
            className="bg-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-pink-600 transition"
          >
            Selengkapnya
          </button>
        </div>

        {/* YouTube Embed + Background Logo */}
        <div className="md:w-1/2 w-full aspect-video relative z-10">
          <iframe
            className="w-full h-full rounded-lg shadow-lg relative z-10"
            src="https://www.youtube.com/embed/kyQcIOPU9xs"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
          {/* Background Logo */}
          <img
            src="/logo_without_text.png"
            alt="Logo Background"
            className="absolute -bottom-20 -right-30 w-40 md:w-48 opacity-30 z-0"
          />
        </div>
      </div>
    </section>
  );
};

export default KisahPerjalanan;
