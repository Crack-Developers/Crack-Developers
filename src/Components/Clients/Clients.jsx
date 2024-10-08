import React, { useState } from 'react';
import img1 from "../../assets/gowsan.png";
import img2 from "../../assets/selvas.png";
import img3 from "../../assets/rcm.png";
import img4 from "../../assets/rays.png";
import img5 from "../../assets/samporto.png";
import img6 from "../../assets/raju.png";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Clients = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false); // Animation state

  const clients = [
    { id: 1, img: img1, alt: "Gowsan Overseas Education Consultancy", size: "w-48 h-48" },
    { id: 2, img: img2, alt: "Selva's Anthro", size: "w-48 h-48" },
    { id: 3, img: img3, alt: "Rotary Club of Madras", size: "w-36 h-36" },
    { id: 4, img: img4, alt: "Gowsan Overseas Education Consultancy", size: "w-48 h-48" },
    { id: 5, img: img5, alt: "Selva's Anthro", size: "w-48 h-48" },
    { id: 6, img: img6, alt: "Rotary Club of Madras", size: "w-48 h-52" },
  ];

  const handlePrevClick = () => {
    if (isAnimating) return; // Prevent clicking while animating
    setIsAnimating(true);
    const newIndex = currentIndex === 0 ? clients.length - 3 : currentIndex - 3;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500); // Reset animation state after 500ms
  };

  const handleNextClick = () => {
    if (isAnimating) return; // Prevent clicking while animating
    setIsAnimating(true);
    const newIndex = currentIndex + 3 >= clients.length ? 0 : currentIndex + 3;
    setCurrentIndex(newIndex);
    setTimeout(() => setIsAnimating(false), 500); // Reset animation state after 500ms
  };

  return (
    <div className="bg-blue-400 py-10">
      <h2 className="text-white text-3xl font-bold text-center mb-8">Our Clients</h2>
      <div className="relative flex justify-center items-center space-x-4">
        {/* Left Arrow */}
        <button
          className="absolute z-10 left-4 md:left-28 bg-white p-2 rounded-full shadow-md text-blue-500 hover:bg-gray-200 focus:outline-none"
          onClick={handlePrevClick}
        >
          <FaChevronLeft size={24} />
        </button>

        {/* Client Logos */}
        <div className="flex justify-center items-center w-full px-4">
          <div className={`flex justify-center items-center bg-white shadow-md rounded-lg p-4 w-full max-w-[320px] md:max-w-[850px] h-36 md:h-48 overflow-hidden transition-transform duration-500 ${isAnimating ? 'transform scale-95' : 'transform scale-100'} mx-auto md:mx-0 md:translate-x--2 -translate-x-2`}>
            {clients.slice(currentIndex, currentIndex + (window.innerWidth < 768 ? 1 : 3)).map((client) => (
              <div key={client.id} className={`flex justify-center items-center ${client.size} mx-4`}>
                <img src={client.img} alt={client.alt} className="object-contain w-full h-full" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        <button
          className="absolute z-10 right-4 md:right-28 bg-white p-2 rounded-full shadow-md text-blue-500 hover:bg-gray-200 focus:outline-none"
          onClick={handleNextClick}
        >
          <FaChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default Clients;
