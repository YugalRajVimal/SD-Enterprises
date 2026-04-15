import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HiOutlinePhone, HiOutlineMail, HiMenuAlt3, HiX } from "react-icons/hi";
import { HiArrowUpRight } from "react-icons/hi2";

// Move links outside the component for reusability - using only lines 7-11 as the source of truth
const links = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

const DiamondIcon = () => (
  <div className="w-8 h-8 border-2 border-orange-500 rounded-md flex items-center justify-center flex-shrink-0">
    <div className="w-3 h-3 bg-orange-500 rotate-45" />
  </div>
);

// Utility to check if a link matches the current page
function isActiveLink(linkHref) {
  if (typeof window === "undefined") return false;
  if (linkHref === "/") {
    return window.location.pathname === "/";
  }
  return window.location.pathname.startsWith(linkHref);
}

const PHONE_DISPLAY = "+91 95755 77797";
const PHONE_LINK = "tel:+919575577797";
const MAIL_DISPLAY = "sd.enterprises0707@gmail.com";
const MAIL_LINK = "mailto:sd.enterprises0707@gmail.com";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // No manual activeLink state, always highlight current page
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 1024) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <motion.nav
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,1)" : "rgba(15,15,25,0.25)",
        boxShadow: scrolled
          ? "0 2px 24px rgba(0,0,0,0.08)"
          : "0 0px 0px rgba(0,0,0,0)",
      }}
      transition={{ duration: 0.35, ease: "easeInOut" }}
      style={
        !scrolled
          ? { backdropFilter: "blur(18px)", WebkitBackdropFilter: "blur(18px)" }
          : {}
      }
      className="fixed top-0 left-0 right-0 z-50"
    >
      {/* Main bar */}
      <div className=" mx-auto px-6 lg:px-8 h-16 flex items-center gap-0">
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <img src="/logo.png" alt="S D Enterprises Logo" className="w-20 h-20 object-contain" />
     
          {/* <motion.span
            animate={{ color: scrolled ? "#111111" : "#ffffff" }}
            transition={{ duration: 0.35 }}
            className="text-base font-bold tracking-widest uppercase"
          >
            S D Enterprises
          </motion.span> */}
        </a>

        {/* Desktop nav links */}
        <ul className="hidden lg:flex items-center gap-1 ml-12">
          {links.map((link) => {
            const selected = typeof window !== "undefined" && isActiveLink(link.href);
            return (
              <li key={link.label}>
                <a
                  href={link.href}
                  className="relative px-3 py-1.5 text-xs font-semibold tracking-widest uppercase transition-colors duration-200 group"
                  style={{
                    color: selected
                      ? "#E87722"
                      : scrolled
                      ? "#555"
                      : "rgba(255,255,255,0.78)",
                  }}
                >
                  {link.label}
                  {selected && (
                    <motion.span
                      layoutId="nav-underline"
                      className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full"
                      transition={{ type: "spring", stiffness: 500, damping: 35 }}
                    />
                  )}
                  <span
                    className="absolute bottom-0 left-3 right-3 h-0.5 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                    style={{ display: selected ? "none" : "block" }}
                  />
                </a>
              </li>
            );
          })}
        </ul>

        <div className="flex-1" />

        {/* Contact info */}
        <div className="hidden xl:flex items-center gap-6 mr-6">
          <a
            href={PHONE_LINK}
            className="flex items-center gap-2 text-xs font-medium tracking-wider transition-colors duration-300 hover:text-orange-500"
            style={{ color: scrolled ? "#555" : "rgba(255,255,255,0.75)" }}
          >
            <span className="w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0"
              style={{ borderColor: scrolled ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.3)" }}>
              <HiOutlinePhone size={13} />
            </span>
            {PHONE_DISPLAY}
          </a>
          <a
            href={MAIL_LINK}
            className="flex items-center gap-2 text-xs font-medium tracking-wider transition-colors duration-300 hover:text-orange-500"
            style={{ color: scrolled ? "#555" : "rgba(255,255,255,0.75)" }}
          >
            <span className="w-7 h-7 rounded-full border flex items-center justify-center flex-shrink-0"
              style={{ borderColor: scrolled ? "rgba(0,0,0,0.2)" : "rgba(255,255,255,0.3)" }}>
              <HiOutlineMail size={13} />
            </span>
            {MAIL_DISPLAY.toUpperCase()}
          </a>
        </div>

        {/* CTA Button */}
        <motion.a
          href="#"
          whileHover={{ backgroundColor: "#E87722", color: "#fff" }}
          whileTap={{ scale: 0.97 }}
          animate={{
            borderColor: "#E87722",
            color: scrolled ? "#111" : "#fff",
          }}
          transition={{ duration: 0.2 }}
          className="hidden lg:flex items-center gap-1.5 px-5 py-2.5 border-2 rounded text-xs font-bold tracking-widest uppercase"
          style={{ borderColor: "#E87722" }}
        >
          Get a Quote
          <HiArrowUpRight size={13} />
        </motion.a>

        {/* Hamburger */}
        <button
          onClick={() => setMenuOpen((o) => !o)}
          className="lg:hidden ml-auto p-2 rounded transition-colors"
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            {menuOpen ? (
              <motion.span
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiX size={24} color={scrolled ? "#111" : "#fff"} />
              </motion.span>
            ) : (
              <motion.span
                key="open"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <HiMenuAlt3 size={24} color={scrolled ? "#111" : "#fff"} />
              </motion.span>
            )}
          </AnimatePresence>
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden lg:hidden"
            style={{
              backgroundColor: scrolled ? "#fff" : "rgba(15,15,25,0.92)",
              backdropFilter: scrolled ? "none" : "blur(18px)",
              WebkitBackdropFilter: scrolled ? "none" : "blur(18px)",
              borderTop: scrolled ? "1px solid #eee" : "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div className="px-6 pb-6 pt-2 flex flex-col gap-1">
              {links.map((link, i) => {
                const selected = typeof window !== "undefined" && isActiveLink(link.href);
                return (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.07, duration: 0.25 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-left py-3 text-sm font-semibold tracking-widest uppercase transition-colors duration-200 hover:text-orange-500"
                    style={{
                      color: selected
                        ? "#E87722"
                        : scrolled
                        ? "#333"
                        : "rgba(255,255,255,0.8)",
                      borderBottom: scrolled
                        ? "1px solid #f0f0f0"
                        : "1px solid rgba(255,255,255,0.07)",
                      position: "relative",
                    }}
                  >
                    {link.label}
                    {selected && (
                      <span
                        className="absolute left-0 right-0 bottom-0 h-0.5 bg-orange-500 rounded-full"
                        style={{ opacity: 1, transition: "opacity 0.2s" }}
                      />
                    )}
                  </motion.a>
                );
              })}

              {/* Contact in mobile */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.32 }}
                className="mt-3 flex flex-col gap-2"
              >
                <a href={PHONE_LINK}
                  className="flex items-center gap-2 text-xs font-medium hover:text-orange-500 transition-colors"
                  style={{ color: scrolled ? "#777" : "rgba(255,255,255,0.55)" }}>
                  <HiOutlinePhone size={14} /> {PHONE_DISPLAY}
                </a>
                <a href={MAIL_LINK}
                  className="flex items-center gap-2 text-xs font-medium hover:text-orange-500 transition-colors"
                  style={{ color: scrolled ? "#777" : "rgba(255,255,255,0.55)" }}>
                  <HiOutlineMail size={14} /> {MAIL_DISPLAY}
                </a>
              </motion.div>

              <motion.a
                href="#"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38 }}
                whileHover={{ backgroundColor: "#E87722", color: "#fff" }}
                className="mt-4 flex items-center justify-center gap-2 py-3 border-2 border-orange-500 rounded text-xs font-bold tracking-widest uppercase transition-colors"
                style={{ color: scrolled ? "#111" : "#fff" }}
              >
                Get a Quote <HiArrowUpRight size={13} />
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}