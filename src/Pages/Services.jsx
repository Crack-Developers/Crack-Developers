import React, { useState } from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import img from "../assets/simg.jpg";

const Services = () => {
  const [isWebDevOpen, setIsWebDevOpen] = useState(false);
  const [isGraphicDesignOpen, setIsGraphicDesignOpen] = useState(false);
  const [isDigitalMarketingOpen, setIsDigitalMarketingOpen] = useState(false);
  const [isAppDevOpen, setIsAppDevOpen] = useState(false);

  const handleWebDevClick = () => {
    setIsWebDevOpen(true);
    setIsGraphicDesignOpen(false);
    setIsDigitalMarketingOpen(false);
    setIsAppDevOpen(false);
  };

  const handleGraphicDesignClick = () => {
    setIsGraphicDesignOpen(true);
    setIsWebDevOpen(false);
    setIsDigitalMarketingOpen(false);
    setIsAppDevOpen(false);
  };

  const handleDigitalMarketingClick = () => {
    setIsDigitalMarketingOpen(true);
    setIsWebDevOpen(false);
    setIsGraphicDesignOpen(false);
    setIsAppDevOpen(false);
  };

  const handleAppDevClick = () => {
    setIsAppDevOpen(true);
    setIsWebDevOpen(false);
    setIsGraphicDesignOpen(false);
    setIsDigitalMarketingOpen(false);
  };

  const handleClosePopup = () => {
    setIsWebDevOpen(false);
    setIsGraphicDesignOpen(false);
    setIsDigitalMarketingOpen(false);
    setIsAppDevOpen(false);
  };

  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div className="bg-cover bg-center h-72 flex items-center justify-center text-white" style={{ backgroundImage: `url(${img})` }}>
        <h1 className="text-4xl font-bold">Service We Provide</h1>
      </div>

      {/* Services Section */}
      <div className="p-8 space-y-8">
        {/* Service Block 1 */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Web Development</h2>
          <p className="mb-4">We build robust, user-friendly websites tailored to your needs, offering custom development, eCommerce solutions, CMS integration, and ongoing maintenance for seamless user experiences.</p>
          <button onClick={handleWebDevClick} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">More &rarr;</button>
        </div>

        {/* Service Block 2 */}
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Graphic Designing</h2>
          <p className="mb-4">Visual appeal is a critical component of brand identity, and we ensure your brand makes an impact with striking visuals that engage your audience.</p>
          <button onClick={handleGraphicDesignClick} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">More &rarr;</button>
        </div>

        {/* Service Block 3 */}
        <div className="bg-gray-100 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Digital Marketing</h2>
          <p className="mb-4">To stay competitive in today’s market, a strong online presence is crucial. Our digital marketing experts create strategies to boost your brand’s visibility and drive growth.</p>
          <button onClick={handleDigitalMarketingClick} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">More &rarr;</button>
        </div>

        {/* Service Block 4 */}
        <div className="bg-gray-200 p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">App Development</h2>
          <p className="mb-4">We create high-performing mobile apps for Android, iOS, and cross-platform, focusing on user engagement, with services including development, UI/UX design, and app maintenance.</p>
          <button onClick={handleAppDevClick} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">More &rarr;</button>
        </div>
      </div>

      {/* Popup for Web Development */}
      {isWebDevOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-4 overflow-y-auto max-h-screen">
            <h2 className="text-2xl font-bold">Web Development</h2>
            <p>In today’s online-driven world, a website is the face of your business. We specialize in building robust, scalable, and user-friendly websites tailored to your specific needs.</p>
            <ul className="list-disc pl-5">
              <li>Custom website development</li>
              <li>CMS integration (WordPress, Joomla, etc.)</li>
              <li>eCommerce solutions (Shopify, WooCommerce)</li>
              <li>Front-end and back-end development</li>
              <li>Website maintenance and support</li>
            </ul>
            <button onClick={handleClosePopup} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">Close</button>
          </div>
        </div>
      )}

      {/* Popup for Graphic Designing */}
      {isGraphicDesignOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-4 overflow-y-auto max-h-screen">
            <h2 className="text-2xl font-bold">Graphic Designing</h2>
            <p>Visual appeal is a critical component of brand identity. Our graphic design team combines creativity with strategy to produce visuals that reflect your brand's values.</p>
            <ul className="list-disc pl-5">
              <li>Logo and brand identity design</li>
              <li>Marketing collateral (brochures, flyers, posters)</li>
              <li>Social media graphics and banners</li>
              <li>Website and app design elements</li>
              <li>Infographics and presentations</li>
            </ul>
            <button onClick={handleClosePopup} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">Close</button>
          </div>
        </div>
      )}

      {/* Popup for Digital Marketing */}
      {isDigitalMarketingOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-4 overflow-y-auto max-h-screen">
            <h2 className="text-2xl font-bold">Digital Marketing</h2>
            <p>To stay competitive, a strong online presence is crucial. Our digital marketing experts create strategies to boost your brand’s visibility and increase conversions.</p>
            <ul className="list-disc pl-5">
              <li>Search Engine Optimization (SEO)</li>
              <li>Pay-Per-Click (PPC) advertising</li>
              <li>Social media marketing and management</li>
              <li>Content marketing and blogging</li>
              <li>Email marketing campaigns</li>
              <li>Analytics and performance tracking</li>
            </ul>
            <button onClick={handleClosePopup} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">Close</button>
          </div>
        </div>
      )}

      {/* Popup for App Development */}
      {isAppDevOpen && (
        <div className="fixed inset-0 bg-gray-900 bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full space-y-4 overflow-y-auto max-h-screen">
            <h2 className="text-2xl font-bold">App Development</h2>
            <p>Take your business mobile with cutting-edge mobile app development. We build intuitive, high-performing mobile applications for both Android and iOS/ Desktop platforms.</p>
            <ul className="list-disc pl-5">
              <li>Android and iOS/ Desktop app development</li>
              <li>Cross-platform development (React Native, Flutter)</li>
              <li>Native app development</li>
              <li>UI/UX design for mobile apps</li>
              <li>App maintenance and updates</li>
            </ul>
            <button onClick={handleClosePopup} className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700 transition">Close</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
};

export default Services;
