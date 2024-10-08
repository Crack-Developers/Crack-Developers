import React from 'react';
import Navbar from '../Components/Navbar/Navbar';
import Hero from '../Components/Hero/Hero';
import AboutUs from '../Components/AboutUs/AboutUs';
import Services from '../Components/Servicer/Services';
import Clients from '../Components/Clients/Clients';
import Contact from '../Components/Contact/Contact';
import Footer from '../Components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar className="z-20 relative" /> {/* Ensure z-index is applied to the Navbar */}
      <div className="relative z-10"> {/* This z-index ensures the content stays above the background */}
        <Hero />
      </div>
      <AboutUs />
      <Services />
      <Clients />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
