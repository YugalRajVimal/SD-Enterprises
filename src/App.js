import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Navbar } from './Components/NavBar';
import HomePage from './Pages/HomePage';
import { Footer } from './Components/Footer';
import AboutUs from './Pages/AboutUs';
import ServicesPage from './Pages/ServicesPage';
import PortfolioPage from './Pages/Portfolio';
import ContactPage from './Pages/ContactUs';

const App = () => {
  return (
    <Router>
      <div className="relative">
        <Navbar />
        <div className="">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/projects" element={<PortfolioPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </Router>
  );
};

export default App;