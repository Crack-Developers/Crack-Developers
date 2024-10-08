import React, { useState, useEffect } from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import Logo from "../../assets/cd_logo.png";
import 'aos/dist/aos.css'; // Import AOS styles
import AOS from 'aos'; // Import AOS

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false); // State to handle desktop dropdown visibility
  const [menuOpen, setMenuOpen] = useState(false); // State to handle mobile menu visibility
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false); // State to handle mobile dropdown visibility

  useEffect(() => {
    AOS.init({ duration: 800 }); // Initialize AOS with animation duration
  }, []);

  // Function to toggle dropdown menu for desktop
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside on desktop
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.desktop-dropdown')) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Function to toggle mobile menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to toggle dropdown menu for mobile
  const toggleMobileDropdown = () => {
    setMobileDropdownOpen(!mobileDropdownOpen);
  };

  return (
    <div>
      {/* Top Navbar - Hidden on mobile */}
      <div className="bg-black text-white text-sm hidden md:block">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-4 py-2" data-aos="fade-down">
          <div className="flex items-center space-x-2">
            <MdEmail className="mr-2" />
            <span>crackdeveloperschennai@gmail.com</span>
          </div>
          {/* Social Icons */}
          <div className="flex space-x-6">
            <FaInstagram className="hover:text-gray-400 transition duration-300" />
            <FaFacebookF className="hover:text-gray-400 transition duration-300" />
            <FaTwitter className="hover:text-gray-400 transition duration-300" />
            <FaLinkedinIn className="hover:text-gray-400 transition duration-300" />
          </div>
        </div>
      </div>

      {/* Bottom Navbar */}
      <div className="bg-white shadow-md relative z-50">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6 py-4" data-aos="fade-down">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <img
              src={Logo} // Replace with the correct logo image path
              alt="Crack Developers Logo"
              className="h-8"
            />
            <span className="font-bold text-lg">CRACK DEVELOPERS</span>
          </div>

          {/* Hamburger Menu - Visible on mobile */}
          <div className="md:hidden">
            <button onClick={toggleMenu}>
              {menuOpen ? <FaTimes className="h-6 w-6" /> : <FaBars className="h-6 w-6" />}
            </button>
          </div>

          {/* Nav Links - Hidden on mobile */}
          <div className="hidden md:flex space-x-8 text-black font-semibold">
            <a href="/" className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300">Home</a>

            {/* Dropdown Menu Trigger for Desktop */}
            <div className="relative desktop-dropdown">
              <button
                onClick={toggleDropdown} // Toggle dropdown on click
                className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300 focus:outline-none"
              >
                Who we are
              </button>
              {/* Dropdown Menu for Desktop */}
              {dropdownOpen && (
                <div className="absolute bg-white shadow-lg mt-2 rounded-lg py-2 w-40 z-50">
                  <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">Overview</a>
                  <a href="/leadership" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition duration-300">Our Leadership</a>
                </div>
              )}
            </div>

            <a href="/service" className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300">Services</a>
            <a href="/team" className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300">Team</a>
            <a href="/contact" className="hover:text-gray-700 hover:underline underline-offset-4 transition duration-300">Contact Us</a>
          </div>

          {/* Sign In Button */}
          <div className="hidden md:flex items-center">
            <button className="bg-black text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">SIGN IN</button>
          </div>
        </div>

        {/* Mobile Menu - Shown when menuOpen is true, centered */}
        {menuOpen && (
          <div className="md:hidden bg-white shadow-md p-4 flex flex-col items-center justify-center">
            <a href="/" className="block py-2 text-black hover:text-gray-700 transition duration-300">Home</a>

            {/* Dropdown Menu Trigger for Mobile */}
            <div className="w-full text-center">
              <button
                onClick={toggleMobileDropdown}
                className="block w-full py-2 text-black hover:text-gray-700 transition duration-300"
              >
                Who we are {mobileDropdownOpen ? '▲' : '▼'}
              </button>

              {/* Dropdown Menu for Mobile */}
              {mobileDropdownOpen && (
                <div className="w-full flex flex-col items-center bg-white shadow-lg mt-2 rounded-lg py-2">
                  <a href="/about" className="block px-4 py-2 text-black hover:bg-gray-100 transition duration-300">Overview</a>
                  <a href="/leadership" className="block px-4 py-2 text-black hover:bg-gray-100 transition duration-300">Our Leadership</a>
                </div>
              )}
            </div>

            <a href="/service" className="block py-2 text-black hover:text-gray-700 transition duration-300">Services</a>
            <a href="/team" className="block py-2 text-black hover:text-gray-700 transition duration-300">Team</a>
            <a href="contact" className="block py-2 text-black hover:text-gray-700 transition duration-300">Contact Us</a>
            <button className="bg-black text-white w-full py-2 rounded hover:bg-gray-800 transition duration-300 mt-2">SIGN IN</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
