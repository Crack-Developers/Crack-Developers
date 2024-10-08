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
import cdm from "../assets/Team/user.png" // Replace with the path to your banner image

const teamMembers = [
  {
    name: 'Lalith Kumar M',
    position: 'Chief Executive Officer',
    image: ceo, // Replace with actual image path
    linkedin: '#',
    twitter: '#',
    facebook: '#'
  },
  {
    name: 'Ashik C',
    position: 'Chief Financial Officer',
    image: cfo, // Replace with actual image path
    linkedin: '#',
    twitter: '#',
    facebook: '#'
  },
  {
    name: 'Kanishk KS',
    position: 'Chief Technology Officer',
    image: cto, // Replace with actual image path
    linkedin: '#',
    twitter: '#',
    facebook: '#'
  },
  {
    name: 'Pardha Sarathi',
    position: 'Web Developement Team Head',
    image: cdm1, // Replace with actual image path
    linkedin: '#',
    twitter: '#',
    facebook: '#'
  },
  {
    name: 'Esakki Raja M',
    position: 'Dackend Developement Team Head',
    image: cdm2, // Replace with actual image path
    linkedin: '#',
    twitter: '#',
    facebook: '#'
  },
  {
    name: 'Mohammed Asfar A',
    position: 'App Developement Team Head',
    image: cdm, // Replace with actual image path
    linkedin: '#',
    twitter: '#',
    facebook: '#'
  },
  {
    name: 'Karthik DB',
    position: 'Graphic Designer',
    image: cdm, // Replace with actual image path
    linkedin: '#',
    twitter: '#',
    facebook: '#'
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
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
              style={{ boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.2)' }} // Darker shadow
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-24 h-24 rounded-full mb-4"
              />
              <h2 className="text-xl font-semibold">{member.name}</h2>
              <p className="text-gray-600 mb-4">{member.position}</p>
              <div className="flex space-x-4">
                <a href={member.linkedin} className="text-blue-600 hover:text-blue-700">
                  <FaLinkedin size={24} />
                </a>
                <a href={member.twitter} className="text-blue-400 hover:text-blue-500">
                  <FaTwitter size={24} />
                </a>
                <a href={member.facebook} className="text-blue-800 hover:text-blue-900">
                  <FaFacebook size={24} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Team;
