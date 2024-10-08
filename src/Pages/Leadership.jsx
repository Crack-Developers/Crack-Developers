import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import ceo from "../assets/Team/lk.jpeg";  // Ensure correct image paths
import cfo from "../assets/Team/ashik.jpeg";
import cto from "../assets/Team/kani.jpeg";
import img from "../assets/limg.jpg";  // Banner image

const Leadership = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div className="relative h-64 bg-cover bg-center" 
        style={{ backgroundImage: `url(${img})` }}> 
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10 flex items-center justify-center h-full">
          <h1 className="text-4xl font-bold text-white">Our Leadership</h1>
        </div>
      </div>

      {/* Leadership Cards Section */}
      <div className="container mx-auto py-12">
        {/* Card 1: CEO */}
        <div className="flex items-center mb-8 border border-gray-300 p-6 shadow-lg" style={{ minHeight: '200px' }}>
          <div className="w-3/4 pl-6">
            <h2 className="text-xl font-bold">Lalith Kumar M</h2>
            <p className="text-gray-700">Chief Executive Officer & Managing Director</p>
          </div>
          <div className="w-1/4">
            <img 
              src={ceo}
              alt="CEO"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Card 2: CFO */}
        <div className="flex items-center mb-8 border border-gray-300 p-6 shadow-lg" style={{ minHeight: '200px' }}>
          <div className="w-1/4">
            <img 
              src={cfo}
              alt="CFO"
              className="object-cover w-full h-full"
            />
          </div>
          <div className="w-3/4 pl-6">
            <h2 className="text-xl font-bold">Ashik C</h2>
            <p className="text-gray-700">Chief Financial Officer & Managing Director</p>
          </div>
        </div>

        {/* Card 3: CTO */}
        <div className="flex items-center mb-8 border border-gray-300 p-6 shadow-lg" style={{ minHeight: '200px' }}>
          <div className="w-3/4 pl-6">
            <h2 className="text-xl font-bold">Kanishk KS</h2>
            <p className="text-gray-700">Chief Technology Officer & Managing Director</p>
          </div>
          <div className="w-1/4">
            <img 
              src={cto}
              alt="CTO"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Leadership;
