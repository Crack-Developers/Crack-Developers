import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'
import ahero from "../assets/aboutbg.png"

const AboutUs = () => {
  return (
    <>
        <Navbar />
        <div className="relative">
      {/* Header Section */}
      <div
        className="relative h-96 bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${ahero})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <h1 className="relative text-white text-5xl font-bold z-10"><br/>Who We Are</h1>
      </div>

      <div className="container mx-auto px-6 py-16">
        
        {/* Our History Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">ABOUT US</h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          At Crack Developers, we pride ourselves on being far more than a traditional IT service provider. We position ourselves as your strategic partner, fully committed to working hand-in-hand with you to understand your unique challenges, goals, and aspirations. Our team is driven by innovation, constantly seeking out cutting-edge technologies and approaches to provide you with solutions that not only meet your immediate needs but also anticipate future opportunities and trends.
          </p><br />
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          We believe in fueling business growth by optimizing processes, enhancing user experiences, and offering scalable solutions tailored to your business objectives. Our expertise spans a wide array of services, from software development and cloud computing to cybersecurity, data analytics, and more. Through every project, we aim to inspire digital transformation, helping you transition seamlessly into the digital age, where automation, artificial intelligence, and advanced technologies lead the way.
          </p><br />
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          In a rapidly evolving global marketplace, where competition is fierce and technology is constantly changing, our mission is to be the driving force behind your success. We equip you with the tools, knowledge, and support necessary to stay ahead of the curve, paving the way for sustainable growth and long-term success. At Crack Developers, your success is our success, and we are here to build a brighter digital future together.
          </p>
        </section>

        <hr className="border-t border-gray-300 mx-auto w-2/3" /><br />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">VISSION AND MISSION</h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          At Crack Developers, we deliver exceptional business solutions using the latest cutting-edge technologies. By integrating AI-based assistants into our tools, we automate tasks and streamline processes, allowing businesses to focus on strategic growth. Our approach enhances efficiency, reduces manual workloads, and ensures you stay ahead in a rapidly evolving digital landscape. We don’t just help businesses adapt to change; we empower them to lead, driving innovation and success in every project we undertake.
          </p>
        </section>
        
        <hr className="border-t border-gray-300 mx-auto w-2/3" /><br />

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-center mb-6">OUR HISTORY</h2>
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          Founded in 2023 by three passionate individuals, Crack Developers emerged from a small idea into a thriving IT company. Our journey began at the national IDS 2.0 Ideathon, where the team and the name Crack Developers were formed, symbolizing our commitment to solving complex problems with innovative solutions.
          </p><br />
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          After the Ideathon, we expanded our skills through various college events, working on projects for clubs like Rotaract, CSI, IEEE, and IET, gaining practical experience in web development. As our expertise grew, we took on external projects, notably developing a comprehensive web-based dashboard for the Rotary Club of Madras, showcasing our ability to deliver large-scale, tailored solutions.
          </p><br />
          <p className="text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          From these humble beginnings, we’ve continuously pushed the boundaries of web and software development, turning ideas into impactful digital experiences, always focused on delivering innovative IT solutions.
          </p>
        </section>

      </div>
    </div>
    <Footer />
    </>
  )
}

export default AboutUs