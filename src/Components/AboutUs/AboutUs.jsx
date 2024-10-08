import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <motion.div 
      className="flex flex-col items-center px-6 py-10 sm:px-12 md:px-16 lg:p-16 w-screen bg-gray-100"
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      transition={{ duration: 1.5 }}
    >
      <motion.h2 
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8"
        initial={{ y: -50 }} 
        animate={{ y: 0 }} 
        transition={{ type: "spring", stiffness: 100 }}
      >
        About Us
      </motion.h2>
      <motion.p 
        className="text-center text-base sm:text-lg md:text-xl mb-8 md:mb-12 max-w-md sm:max-w-lg md:max-w-3xl"
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ delay: 0.5, duration: 1.2 }}
      >
        Your trusted partner in IT solutions, bringing innovation and growth to businesses worldwide.
      </motion.p>
      <div className="flex flex-col sm:flex-row justify-between items-center w-full max-w-xs sm:max-w-md md:max-w-6xl space-y-8 sm:space-y-0">
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.1 }} 
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold">8+</h3>
          <p className="text-sm sm:text-base md:text-lg">satisfied clients across diverse industries</p>
        </motion.div>
        <motion.div 
          className="text-center"
          whileHover={{ scale: 1.1 }} 
          transition={{ type: "spring", stiffness: 300 }}
        >
          <h3 className="text-3xl sm:text-4xl font-bold">7+</h3>
          <p className="text-sm sm:text-base md:text-lg">dedicated professionals delivering cutting-edge results</p>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AboutUs;
