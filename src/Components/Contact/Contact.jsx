import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
  const navigate = useNavigate(); // Assuming you want to navigate to a contact page

  const handleContactClick = () => {
    navigate('/contact'); // Adjust this to your contact page route
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center w-full p-6 md:p-8 border border-gray-300 rounded-lg shadow-md">
      {/* Left Box */}
      <div className="flex-1 md:flex-none md:w-3/5 bg-gray-100 p-6 md:p-8 border border-gray-300 rounded-lg shadow-sm h-auto md:h-64 mb-6 md:mb-0">
        <p className="text-lg md:text-xl font-bold mb-4 leading-relaxed">
          "Empowering businesses with innovative IT solutions that drive success and growth"
        </p>
        <p className="text-base md:text-lg text-gray-600">
          Would you like to adjust it further, or does this work for you?
        </p>
      </div>

      {/* Right Box */}
      <div className="flex-1 md:flex-none md:w-2/5 text-center p-4">
        <p className="text-lg md:text-xl font-bold mb-6">
          Unlock the next level of your business with Crack Developers
        </p>
        <button onClick={handleContactClick} className="px-6 py-3 bg-black text-white rounded-md text-lg hover:bg-gray-800">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default Contact;
