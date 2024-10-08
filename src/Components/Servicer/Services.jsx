import React from 'react';
import img from "../../assets/serviseCircle.png"; // Import the image for the round image
import bgImg from "../../assets/services.jpg"; // Import the background image

const Services = () => {
  return (
    <div
      className="bg-purple-700 text-white py-12 px-4 text-center bg-cover bg-center flex flex-col justify-center items-center"
      style={{ backgroundImage: `url(${bgImg})` }} // Adding background image here
    >
      <h1 className="text-4xl md:text-5xl font-bold mb-8">Services</h1>

      <div className="mb-8">
        <h2 className="text-2xl md:text-3xl font-bold">End-to-End Software Solutions:</h2>
        <p className="text-base md:text-lg max-w-3xl mx-auto">From web and mobile applications to enterprise-level desktop software</p>
      </div>

      <div className="flex justify-center mb-8">
        <img
          src={img}
          alt="Services"
          className="rounded-full w-52 h-52 md:w-64 md:h-64"
        />
      </div>

      <div className="flex flex-col md:flex-row justify-center gap-8 items-center w-full">
        <div className="text-left max-w-xs md:max-w-sm"> {/* Removed md:ml-100 */}
          <h2 className="text-xl md:text-2xl font-bold">Creative Digital Marketing</h2>
          <p className="text-base md:text-lg">Data-driven strategies to boost your online presence</p>
        </div>
        <div className="text-left max-w-xs md:max-w-sm md:text-right"> {/* Removed md:mr-100 */}
          <h2 className="text-xl md:text-2xl font-bold">Exceptional Graphic Design</h2>
          <p className="text-base md:text-lg">Turning ideas into impactful visuals</p>
        </div>
      </div>
    </div>
  );
}

export default Services;
