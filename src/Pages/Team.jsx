import React from 'react';
import { FaLinkedin, FaTwitter, FaFacebook } from 'react-icons/fa';
import Navbar from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';
import bannerImg from '../assets/team.jpg';
import ceo from "../assets/Team/lk.jpeg"
import cfo from "../assets/Team/ashik.jpeg"
import cto from "../assets/Team/kani.jpeg"
import cdm1 from "../assets/Team/partha.jpeg"
import cdm2 from "../assets/Team/esakki.jpeg"
import cdm3 from "../assets/Team/pro.jpg"
import cdm from "../assets/Team/user.png" 

const teamMembers = [
  {
    name: 'Lalith Kumar M',
    position: 'Chief Executive Officer',
    image: ceo, 
    linkedin: '#',
    twitter: '#',
    facebook: '#',
    portfolio: '/team' // Add portfolio link here
  },
  {
    name: 'Ashik C',
    position: 'Chief Financial Officer',
    image: cfo,
    linkedin: '#',
    twitter: '#',
    facebook: '#',
    portfolio: 'https://minicodedev.github.io/Ashik-Christober.github.io/' // Add portfolio link here
  },
  {
    name: 'Kanishk KS',
    position: 'Chief Technology Officer',
    image: cto,
    linkedin: '#',
    twitter: '#',
    facebook: '#',
    portfolio: '/team' // Add portfolio link here
  },
  {
    name: 'Pardha Saradhi M',
    position: 'Web Development Team Head',
    image: cdm1,
    linkedin: '#',
    twitter: '#',
    facebook: '#',
    portfolio: '/team' // Add portfolio link here
  },
  {
    name: 'Esakki Raja M',
    position: 'Backend Development Team Head',
    image: cdm2,
    linkedin: '#',
    twitter: '#',
    facebook: '#',
    portfolio: 'https://minicodedev.github.io/esakki-raja.github.io/' // Add portfolio link here
  },
  {
    name: 'Mohammed Asfar A',
    position: 'App Development Team Head',
    image: cdm3,
    linkedin: '#',
    twitter: '#',
    facebook: '#',
    portfolio: 'https://minicodedev.github.io/mohammed-asfar.github.io/' // Add portfolio link here
  },
  {
    name: 'Karthik DB',
    position: 'Graphic Designer',
    image: cdm,
    linkedin: '#',
    twitter: '#',
    facebook: '#',
    portfolio: '/team' // Add portfolio link here
  }
];

const Team = () => {
  return (
    <>
      <Navbar />

      {/* Banner Section */}
      <div
        className="h-72 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${bannerImg})` }}
      >
        <h1 className="text-5xl font-bold text-white">Our Team</h1>
      </div>

      {/* Team Members Section */}
      <div className="py-16 px-4 bg-white">
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <a href={member.portfolio} key={index} target="_blank" rel="noopener noreferrer">
              <div
                className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
                style={{ boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }} 
              >
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-24 h-24 rounded-full mb-4"
                />
                <h2 className="text-xl font-semibold">{member.name}</h2>
                <p className="text-gray-600 mb-4">{member.position}</p>
                <div className="flex space-x-4">
                  <a href={member.linkedin} className="text-blue-600 hover:text-blue-700" onClick={e => e.stopPropagation()}>
                    <FaLinkedin size={24} />
                  </a>
                  <a href={member.twitter} className="text-blue-400 hover:text-blue-500" onClick={e => e.stopPropagation()}>
                    <FaTwitter size={24} />
                  </a>
                  <a href={member.facebook} className="text-blue-800 hover:text-blue-900" onClick={e => e.stopPropagation()}>
                    <FaFacebook size={24} />
                  </a>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
