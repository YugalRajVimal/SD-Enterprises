import { useState } from "react";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

// ================= NAVBAR COMPONENT =================
export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  // Optional: Close mobile menu when navigating
  const handleNavClick = () => {
    setMobileOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <div className="px-6 md:px-12 py-4 flex items-center justify-between text-white relative">
        {/* Logo */}
        <div className="text-2xl font-bold z-20">SD Enterprises</div>
        
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm tracking-wide">
          <Link to="/" onClick={handleNavClick}>HOME</Link>
          <Link to="/about" onClick={handleNavClick}>ABOUT</Link>
          <Link to="/services" onClick={handleNavClick}>SERVICES</Link>
          <Link to="/projects" onClick={handleNavClick}>PROJECTS</Link>
          <Link to="/contact" onClick={handleNavClick}>CONTACT</Link>
        </div>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center gap-2 text-sm">
            <FaPhoneAlt />
            <span>+91 XXXXX XXXXX</span>
          </div>
          <div className="flex items-center gap-2 text-sm">
            <FaEnvelope />
            <span>info@sdenterprises.com</span>
          </div>
          <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition">
            GET A QUOTE
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <button
          className="md:hidden flex flex-col justify-center items-end z-20"
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {mobileOpen ? (
            <FiX className="w-7 h-7" />
          ) : (
            <FiMenu className="w-7 h-7" />
          )}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 z-40 flex flex-col px-8 py-8 md:hidden transition-all duration-300">
          <nav className="flex flex-col gap-5 text-lg font-semibold text-white mt-12">
            <Link to="/" onClick={handleNavClick}>HOME</Link>
            <Link to="/about" onClick={handleNavClick}>ABOUT</Link>
            <Link to="/services" onClick={handleNavClick}>SERVICES</Link>
            <Link to="/projects" onClick={handleNavClick}>PROJECTS</Link>
            <Link to="/contact" onClick={handleNavClick}>CONTACT</Link>
          </nav>
          <div className="flex flex-col gap-4 mt-8 text-white text-base">
            <div className="flex items-center gap-2">
              <FaPhoneAlt />
              <span>+91 XXXXX XXXXX</span>
            </div>
            <div className="flex items-center gap-2">
              <FaEnvelope />
              <span>info@sdenterprises.com</span>
            </div>
            <button className="bg-white text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-gray-200 transition mt-4 self-start">
              GET A QUOTE
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};