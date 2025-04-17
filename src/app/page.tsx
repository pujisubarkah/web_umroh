import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import Profile from '@/components/Profile';
import Footer from '@/components/Footer';

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
      <h1 className="text-3xl font-bold">Selamat datang di Homepage!</h1>
      <p className="mt-2 text-gray-600">Ini konten homepage kamu, gaskeun kustomisasi 🎨</p>
      </section>

      <div className="mt-4">
      <Footer />
      </div>
    </main>
  );
}
