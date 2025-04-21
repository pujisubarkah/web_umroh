import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';

export default function RegulerPage() {
  return (
    <>
      <Navbar />

      <div className="px-4 py-8">
        <h1 className="text-2xl font-bold mb-4">Paket Reguler</h1>
        <p>Selamat datang di halaman paket reguler. Pilih paket umroh terbaik untuk Anda.</p>
      </div>

      <Footer />
    </>
  );
}
