import React from 'react';
import img from "../../assets/footer_logo.jpeg"

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-5 text-center md:text-left">
        
        {/* Logo and Company Info */}
        <div className="flex flex-col items-center md:items-start">
          <img 
            src= {img} 
            alt="Crack Developers Logo" 
            className="w-20 h-20 mb-4" 
          />
          <p className="text-center md:text-left">
            Crack Developers<br />Chennai, Tamil Nadu
          </p>
        </div>

        {/* Pages Section */}
        <div>
          <h3 className="text-xl mb-6 font-semibold">Pages</h3>
          <ul className="space-y-2">
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Team</li>
          </ul>
        </div>

        {/* Links Section */}
        <div>
          <h3 className="text-xl mb-6 font-semibold">Links</h3>
          <ul className="space-y-2">
            <li>LinkedIn</li>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h3 className="text-xl mb-6 font-semibold">Contact Us</h3>
          <ul className="space-y-2">
            <li>
              <span className="mr-2">📧</span> 
              crackdeveloperschennai@gmail.com
            </li>
            <li>
              <span className="mr-2">📞</span> 
              +91 12345 67890
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
