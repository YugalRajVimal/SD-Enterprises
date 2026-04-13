import { useState, useEffect } from "react";
import { FiMenu, FiX, FiPhone, FiMail, FiArrowUpRight } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

// Define nav links.
const navLinks = [
  { label: "HOME", to: "/" },
  { label: "ABOUT", to: "/about" },
  { label: "SERVICES", to: "/services" },
  { label: "PROJECTS", to: "/projects" },
  { label: "CONTACT", to: "/contact" },
];

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Highlight logic
  const pathMap = {
    "/": "HOME",
    "/about": "ABOUT",
    "/services": "SERVICES",
    "/projects": "PROJECTS",
    "/contact": "CONTACT",
  };
  const activePage = pathMap[location.pathname] || "";

  // Scrolled handler
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-colors duration-300
        ${scrolled ? "bg-white shadow-md border-b border-white/20 backdrop-blur-sm" : "bg-white/10 border-b border-white/10 backdrop-blur-sm"}
      `}
    >
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[72px]">
        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 shrink-0"
          onClick={() => setMobileOpen(false)}
        >
          <div className="w-8 h-8 border-2 border-orange-500 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-orange-500 rounded-sm rotate-45" />
          </div>
          <span className={`font-bold text-xl tracking-tight transition-colors ${scrolled ? "text-orange-500" : "text-white"}`}>bygge</span>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activePage === link.label;
            return (
              <li key={link.label}>
                <Link
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`flex items-center gap-1 text-[11px] font-semibold tracking-widest transition-colors relative pb-0.5 ${
                    isActive
                      ? "text-orange-400"
                      : scrolled
                        ? "text-gray-800 hover:text-orange-400"
                        : "text-white hover:text-orange-400"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-orange-500 rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Contact + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href="tel:+800123456789"
            className={`flex items-center gap-2 text-xs font-medium hover:text-orange-400 transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <span className={`w-7 h-7 rounded-full border flex items-center justify-center ${
              scrolled ? "border-gray-400" : "border-white/40"
            }`}>
              <FiPhone className="w-3 h-3" />
            </span>
            +800 123 456 789
          </a>
          <a
            href="mailto:info@codeless.co"
            className={`flex items-center gap-2 text-xs font-medium hover:text-orange-400 transition-colors ${
              scrolled ? "text-gray-900" : "text-white"
            }`}
          >
            <span className={`w-7 h-7 rounded-full border flex items-center justify-center ${
              scrolled ? "border-gray-400" : "border-white/40"
            }`}>
              <FiMail className="w-3 h-3" />
            </span>
            INFO@CODELESS.CO
          </a>
          <button className={`flex items-center gap-2 text-[11px] font-bold tracking-widest px-5 py-2.5 rounded transition-all duration-300
            ${scrolled ? "bg-orange-500 text-white hover:bg-white hover:text-gray-900 border border-orange-500" : "bg-white text-gray-900 hover:bg-orange-500 hover:text-white"}
          `}>
            GET A QUOTE <FiArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button
          className={scrolled ? "lg:hidden text-gray-900" : "lg:hidden text-white"}
          onClick={() => setMobileOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          type="button"
        >
          {mobileOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden bg-gray-900 border-t border-white/10 px-6 py-4"
            style={{ zIndex: 1001 }}
          >
            {navLinks.map((link) => {
              const isActive = activePage === link.label;
              return (
                <Link
                  to={link.to}
                  key={link.label}
                  onClick={() => setMobileOpen(false)}
                  className={`flex w-full items-center justify-between text-[11px] font-semibold tracking-widest py-3 border-b border-white/10 transition-colors ${
                    isActive ? "text-orange-400" : "text-white hover:text-orange-400"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="flex flex-col gap-3 mt-4">
              <a href="tel:+800123456789" className="flex items-center gap-2 text-white text-xs">
                <FiPhone /> +800 123 456 789
              </a>
              <a href="mailto:info@codeless.co" className="flex items-center gap-2 text-white text-xs">
                <FiMail /> INFO@CODELESS.CO
              </a>
              <button className="flex items-center justify-center gap-2 bg-orange-500 text-white text-[11px] font-bold tracking-widest px-5 py-3 rounded mt-1">
                GET A QUOTE <FiArrowUpRight />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};