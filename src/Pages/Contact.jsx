import React from "react";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import AOS from "aos";
import "aos/dist/aos.css";
import OtherHero from "../Components/OtherHero/OtherHero";
import ContactForm from "../Components/ContactForm/ContactForm";
import bg from "../assets/cbg.jpg"

const Contuct = () => {
  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);
    return (
    <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
      <Navbar />
      <OtherHero
        HeroImg={bg}
        title="Contact"
      />
      <ContactForm/>
      <Footer />
    </div>
  );
};

export default Contuct;