import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';
import SpecialOffers from '@/components/SpecialOffers';
import Offers from '@/components/Offers';
import Packages from '@/components/Packages';
import Apply from '@/components/Apply';
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'; // Jangan lupa Navbar juga harus diimport
import Chatbot from '@/components/Chatbot'; // Impor komponen Chatbot

export default function Home() {
  return (
    <main className="relative">
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>
      <div className="mt-4">
        <Carousel />
      </div>
      <div className="mt-4">
        <Profile />
      </div>
      <section className="p-8">
        {/* Konten lainnya */}
        <SpecialOffers />
        <Offers />
        <Packages />
        <Apply />
      </section>
      <div className="mt-4">
        <Footer />
      </div>

      {/* Tambahkan komponen Chatbot di sini */}
      <div className="fixed bottom-0 right-0 m-4 sticky top-0 z-100">
        <Chatbot />
      </div>
    </main>
  );
}
