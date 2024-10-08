import React, { useState, useEffect } from 'react';
import bg1Desktop from "../../assets/HeroBg/heroBg1.jpg";
import bg2Desktop from "../../assets/HeroBg/heroBg2.jpg";
import bg1Mobile from "../../assets/HeroBg/mobile.jpg";
import bg2Mobile from "../../assets/HeroBg/heroBg2.jpg";

const bannersDesktop = [
  {
    image: bg1Desktop,
    title: 'Project Report Management Tool',
    description: 'We Developed a Project Report Management Tool for Rotary Club of Madras',
  },
  {
    image: bg2Desktop,
    title: (
      <>
        Comprehensive Software <br /> Development
      </>
    ),
    description: 'Description for another project goes here.',
  },
];

const bannersMobile = [
  {
    image: bg1Mobile,
    title: 'Mobile Project Report Management Tool',
    description: 'We Developed a Project Report Management Tool for Rotary Club of Madras (Mobile)',
  },
  {
    image: bg2Mobile,
    title: (
      <>
        Comprehensive Software <br /> Development
      </>
    ),
    description: 'Description for another mobile project goes here.',
  },
];

const Hero = () => {
  const [currentBanner, setCurrentBanner] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768); // Define mobile width breakpoint

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBanner((prevBanner) => (prevBanner + 1) % (isMobile ? bannersMobile.length : bannersDesktop.length));
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [isMobile]);

  const banners = isMobile ? bannersMobile : bannersDesktop;

  return (
    <div className="relative w-full overflow-hidden" style={{ height: '100vh' }}>
      {banners.map((banner, index) => (
        <div
          key={index}
          className={`absolute inset-0 w-full transition-opacity duration-1000 ease-in-out ${
            index === currentBanner ? 'opacity-100' : 'opacity-0'
          }`}
          style={{
            backgroundImage: `url('${banner.image}')`,
            height: '100%',
            width: '100vw',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        >
          <div className="absolute inset-0 bg-black opacity-0"></div>
          <div className="relative z-10 flex flex-col items-start justify-center h-full px-8 text-white text-left">
            <h1 className="text-4xl font-bold mb-4">{banner.title}</h1>
            <p className="mb-6">{banner.description}</p>
            <button className="bg-white text-black font-semibold py-2 px-4 rounded hover:bg-gray-300">
              Learn more
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Hero;
