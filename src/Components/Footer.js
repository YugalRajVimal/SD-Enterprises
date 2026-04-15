import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { useState, useEffect } from "react";

export const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleScroll = () => {
        setShowScroll(window.scrollY > 200);
      };
      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-black text-white pt-12 px-6">
      {/* 4-column grid */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 py-12 border-b border-orange-500">
        {/* Company Overview */}
        <div>
          <div className="flex flex-col items-start gap-2 mb-4">
            {/* Logo SVG or Text */}
            <img
              src="/logo.png"
              alt="S D Enterprises Logo"
              className="w-24 h-24 object-contain rounded bg-white aspect-square p-2"
            />
      
            <span className="text-2xl font-bold tracking-wide text-orange-500">S D ENTERPRISES</span>
          </div>
          <p className="text-gray-300 text-sm mb-6">
            S D Enterprises is a leading <span className="font-semibold text-orange-400">ISO 9001:2015 certified</span> turnkey firm delivering high-quality healthcare, commercial, and institutional projects with precision, speed, and excellence.
          </p>
          {/* Projects / Clients highlight */}
          <div className="text-xs text-gray-400 border-l-4 border-orange-500 pl-3">
            Trusted by leading organizations like{" "}
            <span className="font-semibold text-orange-400">GE Healthcare, Siemens, Philips, Indian Oil, AIIMS, Tata Memorial Hospital</span>, and{" "}
            <span className="font-semibold text-orange-400">Max Healthcare</span> for delivering large-scale projects across India.
          </div>
        </div>
        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <a href="/" className="hover:text-orange-400 transition-colors">Home</a>
            </li>
            <li>
              <a href="/about" className="hover:text-orange-400 transition-colors">About Us</a>
            </li>
            <li>
              <a href="/services" className="hover:text-orange-400 transition-colors">Services</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-orange-400 transition-colors">Projects</a>
            </li>
            <li>
              <a href="/contact" className="hover:text-orange-400 transition-colors">Contact Us</a>
            </li>
          </ul>
     
        </div>
        {/* Services Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Services</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/projects" className="hover:text-orange-400 transition-colors">Architectural Planning</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-orange-400 transition-colors">Turnkey Projects</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-orange-400 transition-colors">Interior Designing</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-orange-400 transition-colors">Civil Work</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-orange-400 transition-colors">Electrical &amp; Fabrication</a>
            </li>
            <li>
              <a href="/projects" className="hover:text-orange-400 transition-colors">Finishing Works</a>
            </li>
          </ul>
        </div>
        {/* Contact Info + Certifications */}
        <div>
          <h3 className="text-lg font-semibold mb-4 text-white">Contact Information</h3>
          <div className="space-y-2 mb-4 text-sm">
            <div className="flex items-start">
              <span className="mr-2 text-orange-400">📍</span>
              <span className="text-gray-200">
                25-A Shraddha Shri Colony, MR-9, Near Chintaman Hanuman Mandir, Indore, MP, 452001
              </span>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-orange-400">📞</span>
              <a href="tel:+919575577797" className="hover:text-orange-400 transition-colors underline underline-offset-2">
                +91 95755 77797
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-orange-400">📧</span>
              <a href="mailto:sd.enterprises0707@gmail.com" className="hover:text-orange-400 transition-colors underline underline-offset-2">
                sd.enterprises0707@gmail.com
              </a>
            </div>
            <div className="flex items-center">
              <span className="mr-2 text-orange-400">🕒</span>
              <span className="text-gray-200">Mon – Sat (9:00 AM – 6:00 PM)</span>
            </div>
          </div>
          {/* Certifications / Trust Badges */}
          <div>
            <h4 className="font-semibold text-white mb-2 text-sm">Certifications</h4>
            <div className="flex flex-wrap gap-2">
              <span className="bg-black px-2 py-1 rounded text-xs border border-orange-500 text-orange-400">ISO 9001:2015 Certified</span>
              <span className="bg-black px-2 py-1 rounded text-xs border border-orange-500 text-orange-400">MSME Registered</span>
              <span className="bg-black px-2 py-1 rounded text-xs border border-orange-500 text-orange-400">Comply Works Certified</span>
            </div>
          </div>
          {/* Social Media */}
          <div className="mt-6">
            <h4 className="font-semibold mb-2 text-white text-sm">Follow Us</h4>
            <div className="flex gap-4 text-gray-400">
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="hover:text-orange-400 transition-colors"
              >
                <FaLinkedinIn size={22} />
              </a>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:text-orange-400 transition-colors"
              >
                <FaFacebookF size={22} />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:text-orange-400 transition-colors"
              >
                <FaInstagram size={22} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-to-top Button */}
      {showScroll && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-2 rounded-full bg-orange-500 hover:bg-orange-400 text-white shadow-lg transition-all"
          aria-label="Scroll to top"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/>
          </svg>
        </button>
      )}

      {/* Bottom Bar */}
      <div className="max-w-7xl mx-auto py-6 px-2 text-center border-t border-orange-500 text-xs text-gray-300 flex flex-col md:flex-row items-center justify-between gap-2">
        <span>© 2026 <span className="text-orange-500">S D ENTERPRISES</span>. All Rights Reserved.</span>
        <span>
          <span>
            Designed &amp; Developed by{" "}
            <a
              href="https://gowappily.in"
              className="underline hover:text-orange-400 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              GoWappily Infotech
            </a>
          </span>
        </span>
      </div>
    </footer>
  );
};