import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  FiPhone,
  FiMail,
  FiChevronDown,
  FiArrowUpRight,
  FiMenu,
  FiX,
} from "react-icons/fi";

// ─────────────────────────────────────────────
// TEMPLATE DATA (sample navigation, projects, company details)
// ─────────────────────────────────────────────

const navLinks = [
  { label: "HOME", hasDropdown: true },
  { label: "ABOUT", hasDropdown: false },
  { label: "SERVICES", hasDropdown: false },
  { label: "BLOG", hasDropdown: true },
  { label: "FEATURES", hasDropdown: true },
  { label: "CONTACT US", hasDropdown: false },
];

// Example (template/sample) portfolio items
const portfolioItems = [
  { id: 1, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", category: "Category One", title: "Project Title One" },
  { id: 2, image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80", category: "Category Two", title: "Project Title Two" },
  { id: 3, image: "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=800&q=80", category: "Category Three", title: "Project Title Three" },
  { id: 4, image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80", category: "Category Four", title: "Project Title Four" },
  { id: 5, image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80", category: "Category Five", title: "Project Title Five" },
  { id: 6, image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80", category: "Category Six", title: "Project Title Six" },
];

const topRightImages = [
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
];

const bottomGridImages = [
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=800&q=80",
  "https://images.unsplash.com/photo-1590725121839-892b458a74fe?w=800&q=80",
  "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&q=80",
  "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=800&q=80",
  "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=800&q=80",
];

// TEMPLATE CONSTANTS (UPDATE FOR REAL COMPANY INFO)
const COMPANY_NAME = "S D Enterprises";
const COMPANY_PHONE = "XXXXXXXXXX";
const COMPANY_EMAIL = "company@email.com";

// ─────────────────────────────────────────────
// FRAMER VARIANTS
// ─────────────────────────────────────────────

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

// ─────────────────────────────────────────────
// NAVBAR
// ─────────────────────────────────────────────

function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="absolute top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-sm border-b border-white/10">
      <div className="max-w-[1400px] mx-auto px-6 flex items-center justify-between h-[72px]">

        {/* Logo */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="w-8 h-8 border-2 border-orange-500 rounded flex items-center justify-center">
            <div className="w-3 h-3 bg-orange-500 rounded-sm rotate-45" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight">{COMPANY_NAME}</span>
        </div>

        {/* Desktop Nav Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => (
            <li key={link.label}>
              <button className="flex items-center gap-1 text-white text-[11px] font-semibold tracking-widest hover:text-orange-400 transition-colors">
                {link.label}
                {link.hasDropdown && <FiChevronDown className="w-3 h-3" />}
              </button>
            </li>
          ))}
        </ul>

        {/* Contact + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a
            href={`tel:${COMPANY_PHONE}`}
            className="flex items-center gap-2 text-white text-xs font-medium hover:text-orange-400 transition-colors"
          >
            <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center">
              <FiPhone className="w-3 h-3" />
            </span>
            {COMPANY_PHONE}
          </a>
          <a
            href={`mailto:${COMPANY_EMAIL}`}
            className="flex items-center gap-2 text-white text-xs font-medium hover:text-orange-400 transition-colors"
          >
            <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center">
              <FiMail className="w-3 h-3" />
            </span>
            {COMPANY_EMAIL.toUpperCase()}
          </a>
          <button className="flex items-center gap-2 bg-white text-gray-900 text-[11px] font-bold tracking-widest px-5 py-2.5 rounded hover:bg-orange-500 hover:text-white transition-all duration-300">
            GET A QUOTE <FiArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(!mobileOpen)}>
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
          >
            {navLinks.map((link) => (
              <button
                key={link.label}
                className="flex w-full items-center justify-between text-white text-[11px] font-semibold tracking-widest py-3 border-b border-white/10 hover:text-orange-400 transition-colors"
              >
                {link.label}
                {link.hasDropdown && <FiChevronDown className="w-3 h-3" />}
              </button>
            ))}
            <div className="flex flex-col gap-3 mt-4">
              <a href={`tel:${COMPANY_PHONE}`} className="flex items-center gap-2 text-white text-xs">
                <FiPhone /> {COMPANY_PHONE}
              </a>
              <a href={`mailto:${COMPANY_EMAIL}`} className="flex items-center gap-2 text-white text-xs">
                <FiMail /> {COMPANY_EMAIL.toUpperCase()}
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
}

// ─────────────────────────────────────────────
// PAGE HERO
// ─────────────────────────────────────────────

function PageHero({ title = "Portfolio Grid", breadcrumb = "Portfolio Grid" }) {
  return (
    <section className="relative w-full h-[280px] md:h-[340px] overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80')" }}
      />
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 via-orange-900/60 to-gray-900/70" />
      {/* Grid Texture */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px), repeating-linear-gradient(90deg, transparent, transparent 39px, rgba(255,255,255,0.3) 39px, rgba(255,255,255,0.3) 40px)",
        }}
      />

      {/* <Navbar /> */}

      {/* Breadcrumb + Title */}
      <div className="absolute bottom-0 left-0 right-0 pb-10 pl-8 md:pl-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 text-white/80 text-sm mb-2"
        >
          <span className="hover:text-white cursor-pointer transition-colors">Home</span>
          <span className="text-orange-400">•</span>
          <span className="text-white font-medium">{breadcrumb}</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
        >
          {title}
        </motion.h1>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PORTFOLIO CARD (sub-component)
// ─────────────────────────────────────────────

function PortfolioCard({ item }) {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className="relative overflow-hidden rounded-xl cursor-pointer group"
      style={{ aspectRatio: "4/3" }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.img
        src={item.image}
        alt={item.title}
        className="w-full h-full object-cover"
        animate={{ scale: hovered ? 1.07 : 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      />

      {/* Hover Overlay */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/40 to-transparent flex flex-col justify-end p-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-orange-400 text-[10px] font-bold tracking-widest uppercase mb-1">
          {item.category}
        </span>
        <div className="flex items-center justify-between">
          <h3 className="text-white font-bold text-lg leading-snug">{item.title}</h3>
          <motion.div
            className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shrink-0"
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: hovered ? 1 : 0, rotate: hovered ? 0 : -45 }}
            transition={{ duration: 0.3 }}
          >
            <FiArrowUpRight className="text-white w-4 h-4" />
          </motion.div>
        </div>
      </motion.div>

      {/* Always-visible label on last card */}
      {item.id === 6 && (
        <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between px-5 pb-4 pt-16 bg-gradient-to-t from-gray-900/80">
          <span className="text-white text-[11px] font-bold tracking-[0.2em] uppercase">
            {item.category}
          </span>
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
            <FiArrowUpRight className="text-white w-4 h-4" />
          </div>
        </div>
      )}
    </motion.div>
  );
}

// ─────────────────────────────────────────────
// PORTFOLIO GRID
// ─────────────────────────────────────────────

function PortfolioGrid() {
  return (
    <section className="bg-[#f0f1f3] py-16 px-6 md:px-10 lg:px-16">
      <div className="max-w-[1400px] mx-auto">
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          {portfolioItems.map((item) => (
            <PortfolioCard key={item.id} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// OUR WORK (dark section)
// ─────────────────────────────────────────────

function OurWork() {
  return (
    <section className="bg-[#111217] py-20 px-6 md:px-10 lg:px-16 relative overflow-hidden">
      {/* Decorative rings */}
      <div className="absolute left-[5%] top-[10%] w-[500px] h-[500px] rounded-full border border-white/5 pointer-events-none" />
      <div className="absolute left-[5%] top-[10%] w-[350px] h-[350px] rounded-full border border-white/5 pointer-events-none translate-x-[75px] translate-y-[75px]" />

      <div className="max-w-[1400px] mx-auto">

        {/* Top row: text + 2 portrait images */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8 items-start">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col justify-center pt-6"
          >
            <span className="text-white/50 text-[10px] font-bold tracking-[0.3em] uppercase mb-5">
              OUR WORK
            </span>
            <h2 className="text-white text-4xl md:text-5xl lg:text-[56px] font-black leading-[1.1] tracking-tight mb-6">
              some of our{" "}
              <span className="block">recent</span>
              <span className="block">work</span>
            </h2>
            <p className="text-white/60 text-sm leading-relaxed max-w-sm mb-8">
              We have a wealth of experience working as main building contractors on all kinds of
              projects, big and small, from home maintenance and improvements to extensions,
              refurbishments and new builds.
            </p>
            <motion.button
              className="flex items-center gap-2 border border-white/30 text-white text-[11px] font-bold tracking-[0.2em] uppercase px-6 py-3.5 rounded-full w-fit hover:bg-white hover:text-gray-900 transition-all duration-300 group"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              VIEW MORE
              <FiArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
            </motion.button>
          </motion.div>

          {/* Two portrait images */}
          <motion.div
            className="grid grid-cols-2 gap-4"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            {topRightImages.map((src, i) => (
              <div key={i} className="rounded-xl overflow-hidden" style={{ aspectRatio: "3/4" }}>
                <img
                  src={src}
                  alt={`Work ${i + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </motion.div>
        </div>

        {/* Bottom 3×2 grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {bottomGridImages.map((src, i) => (
            <motion.div
              key={i}
              className="rounded-xl overflow-hidden"
              style={{ aspectRatio: "4/3" }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <img
                src={src}
                alt={`Project ${i + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

// ─────────────────────────────────────────────
// PAGE EXPORT (composes all sections)
// ─────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <main className="min-h-screen">
      <PageHero title="Portfolio Grid" breadcrumb="Portfolio Grid" />
      <PortfolioGrid />
      <OurWork />
    </main>
  );
}

// Named exports for individual use
export { Navbar, PageHero, PortfolioGrid, OurWork };