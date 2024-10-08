import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/AboutUs';
import Services from './Pages/Services';
import Team from './Pages/Team';
import Contact from './Pages/Contact';
import Leadership from './Pages/Leadership';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Services />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/leadership" element={<Leadership />} />
      </Routes>
    </div>
  )
}

export default App