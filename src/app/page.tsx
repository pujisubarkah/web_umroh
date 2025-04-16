import Navbar from '@/components/Navbar';
import Carousel from '@/components/Carousel';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <div className="mt-4">
        <Carousel />
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
