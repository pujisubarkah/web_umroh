'use client';
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaEnvelope } from "react-icons/fa";

const BoardManagement = () => {
  const boardMembers = [
    {
      name: "Nora Aliyah",
      position: "Manager",
      image: "https://demo.afkaristudio.com/azwa/wp-content/uploads/sites/2/2023/01/21.jpg",
      socials: {
        facebook: "https://facebook.com/noraaliyah",
        linkedin: "https://linkedin.com/noraaliyah",
        email: "nora.aliyah@example.com",
      },
    },
    {
      name: "Ahmad Al-Sheikh",
      position: "Director",
      image: "https://demo.afkaristudio.com/azwa/wp-content/uploads/sites/2/2023/01/23-1.jpg",
      socials: {
        facebook: "https://facebook.com/ahmadalsheikh",
        linkedin: "https://linkedin.com/ahmadalsheikh",
        email: "ahmad.sheikh@example.com",
      },
    },
    {
      name: "Fatima Al-Khatabi",
      position: "Vice President",
      image: "https://demo.afkaristudio.com/azwa/wp-content/uploads/sites/2/2023/01/22-1.jpg",
      socials: {
        facebook: "https://facebook.com/fatimakhatabi",
        linkedin: "https://linkedin.com/fatimakhatabi",
        email: "fatima.khatabi@example.com",
      },
    },
    {
      name: "Mohammed Al-Harbi",
      position: "Secretary",
      image: "https://demo.afkaristudio.com/azwa/wp-content/uploads/sites/2/2023/01/24-1.jpg",
      socials: {
        facebook: "https://facebook.com/mohammedalharbi",
        linkedin: "https://linkedin.com/mohammedalharbi",
        email: "mohammed.harbi@example.com",
      },
    },
    {
      name: "Laila Al-Rashed",
      position: "Treasurer",
      image: "https://demo.afkaristudio.com/azwa/wp-content/uploads/sites/2/2023/01/26.jpg",
      socials: {
        facebook: "https://facebook.com/lailarashed",
        linkedin: "https://linkedin.com/lailarashed",
        email: "laila.rashed@example.com",
      },
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const handleNext = () => {
    if (currentIndex < boardMembers.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold text-pink-500">OUR TEAM</h2>
          <h1 className="text-3xl font-bold mt-2">Board Management</h1>
          <hr className="w-1/4 mx-auto my-4 border-gray-300" />
        </div>

        {/* Board Members Slider */}
        <div className="relative overflow-hidden">
          {/* Arrow Buttons */}
          <button
            className={`absolute top-1/2 transform -translate-y-1/2 left-4 bg-pink-500 text-white rounded-full p-2 z-10 ${
              currentIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handlePrev}
            disabled={currentIndex === 0}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            className={`absolute top-1/2 transform -translate-y-1/2 right-4 bg-pink-500 text-white rounded-full p-2 z-10 ${
              currentIndex >= boardMembers.length - 4 ? "opacity-50 cursor-not-allowed" : ""
            }`}
            onClick={handleNext}
            disabled={currentIndex >= boardMembers.length - 4}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>

          {/* Sliding Container */}
          <div
            className="flex transition-transform duration-300 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 300}px)` }}
          >
            {boardMembers.map((member, index) => (
              <div
              key={index}
              className="w-64 h-100 flex-shrink-0 relative group overflow-hidden rounded-lg shadow-md"            
                onMouseEnter={() => setIsHovering(index)}
                onMouseLeave={() => setIsHovering(null)}
              >
                {/* Image */}
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover rounded-lg shadow-md transition-transform duration-300 ease-in-out group-hover:scale-110"
                />

                {/* Hover Overlay */}
                {isHovering === index && (
                  <>
                    {/* Bottom Hover Info */}
                    <div className="absolute bottom-0 left-0 right-0 bg-pink-300 text-black px-4 py-3 transition-transform duration-300 transform translate-y-full group-hover:translate-y-0 rounded-b-lg">
                      <h3 className="text-lg font-semibold">{member.name}</h3>
                      <p className="text-sm">{member.position}</p>

                      {/* Social Icons */}
                      <div className="flex space-x-4 mt-2">
                        <a href={member.socials.facebook} target="_blank" rel="noopener noreferrer">
                          <FaFacebook className="h-5 w-5 text-black hover:text-white transition" />
                        </a>
                        <a href={member.socials.linkedin} target="_blank" rel="noopener noreferrer">
                          <FaLinkedin className="h-5 w-5 text-black hover:text-white transition" />
                        </a>
                        <a href={`mailto:${member.socials.email}`}>
                          <FaEnvelope className="h-5 w-5 text-black hover:text-white transition" />
                        </a>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BoardManagement;
