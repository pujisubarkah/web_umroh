
// pages/haji.jsx
import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar'; // Import Navbar
import HajiList from './components/plus'; // Ensure the import matches the filename

export default function HajiPage() {
  return (
    <div>
      <Navbar /> {/* Render the Navbar */}
      <main className="min-h-screen bg-gray-100">
        <section className="py-10">
          <div className="container mx-auto">
            <h1 className="text-3xl font-bold text-center mb-6">Daftar Paket Haji</h1>
            <HajiList /> {/* Render the HajiList component */}
          </div>
        </section>
      </main>
      <Footer /> {/* Render the Footer */}
    </div>
  );
}
