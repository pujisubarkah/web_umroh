// GaleriAcak.jsx
import React from "react";

const images = [
  "/images/1.jpg",
    "/images/2.jpg",
    "/images/3.jpg",
    "/images/4.jpg",
    "/images/5.jpg",
    "/images/6.jpg",
    "/images/7.jpg",
    "/images/8.jpg",
    "/images/9.jpg",
    "/images/10.jpg",
    "/images/11.jpg",
    "/images/12.jpg",
    "/images/13.jpg",
    "/images/14.jpg",
    "/images/15.jpg",
];

const getRandomRows = (images: string[]) => {
  const rows = [];
  let i = 0;
  while (i < images.length) {
    const layout = Math.random() > 0.5 ? "two" : "three";
    if (layout === "two" && i + 1 < images.length) {
      rows.push({ type: "two", images: images.slice(i, i + 2) });
      i += 2;
    } else if (layout === "three" && i + 2 < images.length) {
      rows.push({ type: "three", images: images.slice(i, i + 3) });
      i += 3;
    } else {
      // Fallback kalau sisa kurang
      rows.push({ type: "three", images: images.slice(i) });
      break;
    }
  }
  return rows;
};

const GaleriAcak = () => {
  const rows = getRandomRows(images);

  return (
    <div className="bg-pink-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-pink-500 mb-10 text-center">Galeri Perjalanan</h2>
        <div className="space-y-6">
          {rows.map((row, index) => (
            <div key={index} className="flex gap-4">
              {row.type === "two" ? (
                <>
                  <div className="w-2/3">
                    <img
                      src={row.images[0]}
                      alt={`img-${index}-0`}
                      className="h-64 w-full object-cover rounded-xl shadow-md"
                    />
                  </div>
                  <div className="w-1/3">
                    <img
                      src={row.images[1]}
                      alt={`img-${index}-1`}
                      className="h-64 w-full object-cover rounded-xl shadow-md"
                    />
                  </div>
                </>
              ) : (
                row.images.map((img: string, i: number) => (
                  <div key={i} className="w-1/3">
                    <img
                      src={img}
                      alt={`img-${index}-${i}`}
                      className="h-64 w-full object-cover rounded-xl shadow-md"
                    />
                  </div>
                ))
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GaleriAcak;
