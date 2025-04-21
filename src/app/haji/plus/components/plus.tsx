import Image from 'next/image'
import Link from 'next/link'

export default function HajiList() {
  const data = [
    {
      title: 'HAJI KHUSUS Kuota Kemenag Indonesia',
      url: '/listings/haji-khusus-masa-tunggu-5-7-tahun-kuota-kemenag-indonesia-bbjrbm315o',
      img: 'https://storage.googleapis.com/muslimpergi/uploads/listing/pict/751/medium_Haji_Khusus.jpg',
      price: '$16.000',
      duration: '25 Hari',
      depart: '1 Jul 31',
      seat: '500',
      available: '269',
      hotelStars: 5,
      origin: 'JAKARTA',
    },
    {
      title: 'HAJI FURODA 2025 BATCH 3',
      url: '/listings/haji-furoda-2025-batch-3-graqv6wqdx',
      img: 'https://storage.googleapis.com/muslimpergi/uploads/listing/pict/6673/medium_Flyer_Haji_Furoda_18_Hari__Batch_3__-_Agen-01.jpg',
      price: '$18.500',
      duration: '18 Hari',
      depart: '29 May 25',
      seat: '23',
      available: '17',
      hotelStars: 3,
      origin: 'JAKARTA',
    },
    {
      title: '🕋HAJI FURODA 2025 NAMIRA TRAVEL🕋',
      url: '/listings/haji-cepat-12-hari-namira-travel-xqe7br7jk4',
      img: 'https://storage.googleapis.com/muslimpergi/uploads/listing/pict/5465/medium_haji_namira_wev.jpg',
      price: '$17.900',
      duration: '18 Hari',
      depart: '27 May 25',
      seat: '70',
      available: '0',
      hotelStars: 5,
      origin: 'JAKARTA',
    },
  ]

  return (
   <div className="container mx-auto px-4 py-6">
  <div id="listings_package" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {data.map((item, index) => (
      <div key={index} className="bg-white shadow-md rounded-2xl overflow-hidden flex flex-col">
        <figure className="relative">
          <img src={item.img} alt={item.title} className="w-full h-44 object-cover" />
          <span className="absolute top-2 left-2 bg-pink-600 text-white text-xs px-2 py-0.5 rounded-md font-semibold shadow">UMROH</span>
        </figure>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-base font-semibold text-pink-700 hover:underline leading-snug">
            <Link href={item.url}>{item.title}</Link>
          </h3>
          <div className="mt-2 text-gray-800 text-sm">
            <p><strong className="text-pink-600">{item.price}</strong> /pax</p>
            <p className="text-xs">QUAD</p>
          </div>
          <table className="mt-3 text-sm text-gray-700 w-full">
            <tbody>
              <tr><td className="py-1 w-6"><i className="fa fa-calendar"></i></td><td className="pr-2">Jadwal</td><td>{item.depart}</td></tr>
              <tr><td className="py-1"><i className="fa fa-clock-o"></i></td><td className="pr-2">Durasi</td><td>{item.duration}</td></tr>
              <tr>
                <td className="py-1"><i className="fa fa-building-o"></i></td>
                <td className="pr-2">Hotel</td>
                <td>
                  {[...Array(item.hotelStars)].map((_, i) => (
                    <i key={i} className="fa fa-star text-yellow-400" />
                  ))}
                  {[...Array(5 - item.hotelStars)].map((_, i) => (
                    <i key={i} className="fa fa-star-o text-gray-300" />
                  ))}
                </td>
              </tr>
              <tr><td className="py-1"><i className="fa fa-user"></i></td><td className="pr-2">Seat</td><td>{item.seat} pax</td></tr>
              <tr><td className="py-1"><i className="fa fa-user"></i></td><td className="pr-2 font-bold">Available</td><td className="font-bold">{item.available} pax</td></tr>
              <tr><td className="py-1"><i className="fa fa-map-marker"></i></td><td className="pr-2">Asal</td><td>{item.origin}</td></tr>
              <tr><td className="py-1"><i className="fa fa-plane"></i></td><td className="pr-2">Maskapai</td><td>-</td></tr>
            </tbody>
          </table>
          <Link href={item.url} className="mt-4 bg-pink-600 text-white text-center py-2 rounded-lg hover:bg-pink-700 font-semibold text-sm">
            Lihat Detail
          </Link>
        </div>
      </div>
    ))}
  </div>
</div>

  )
}
