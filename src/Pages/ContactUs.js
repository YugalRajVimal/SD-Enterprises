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
import { FaMapMarkerAlt, FaCommentAlt, FaClock } from "react-icons/fa";

// ═══════════════════════════════════════════════════════════════════
// TEMPLATE DATA
// ═══════════════════════════════════════════════════════════════════

const COMPANY_NAME = "S D Enterprises";
const OFFICE_ADDRESS =
  "25-A Shraddha Shri Colony, MR-9, Near Chintaman Hanuman Mandir, Indore, MP, 452001";
const OFFICE_PHONE = "+91 95755 77797";
const OFFICE_PHONE_LINK = "tel:+919575577797";
const OFFICE_EMAIL = "sd.enterprises0707@gmail.com";
const OFFICE_EMAIL_LINK = "mailto:sd.enterprises0707@gmail.com";
const OFFICE_HOURS = "Monday – Friday 9 am to 6 pm IST";

const navLinks = [
  { label: "HOME", hasDropdown: true },
  { label: "ABOUT US", hasDropdown: false },
  { label: "SERVICES", hasDropdown: false },
  { label: "PROJECTS", hasDropdown: false },
  { label: "CAREERS", hasDropdown: false },
  { label: "CONTACT US", hasDropdown: false },
];

// Framer Motion variants
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

// ═══════════════════════════════════════════════════════════════════
// NAVBAR
// ═══════════════════════════════════════════════════════════════════

export function Navbar({ activePage = "" }) {
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

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-7">
          {navLinks.map((link) => {
            const isActive = activePage === link.label;
            return (
              <li key={link.label}>
                <button
                  className={`flex items-center gap-1 text-[11px] font-semibold tracking-widest transition-colors relative pb-0.5
                    ${isActive ? "text-white" : "text-white hover:text-orange-400"}`}
                >
                  {link.label}
                  {link.hasDropdown && <FiChevronDown className="w-3 h-3" />}
                  {isActive && (
                    <span className="absolute -bottom-1 left-0 right-0 h-[2px] bg-orange-500 rounded-full" />
                  )}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Contact + CTA */}
        <div className="hidden lg:flex items-center gap-5">
          <a href={OFFICE_PHONE_LINK} className="flex items-center gap-2 text-white text-xs font-medium hover:text-orange-400 transition-colors">
            <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center">
              <FiPhone className="w-3 h-3" />
            </span>
            {OFFICE_PHONE}
          </a>
          <a href={OFFICE_EMAIL_LINK} className="flex items-center gap-2 text-white text-xs font-medium hover:text-orange-400 transition-colors">
            <span className="w-7 h-7 rounded-full border border-white/40 flex items-center justify-center">
              <FiMail className="w-3 h-3" />
            </span>
            {OFFICE_EMAIL}
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
              <a href={OFFICE_PHONE_LINK} className="flex items-center gap-2 text-white text-xs">
                <FiPhone /> {OFFICE_PHONE}
              </a>
              <a href={OFFICE_EMAIL_LINK} className="flex items-center gap-2 text-white text-xs">
                <FiMail /> {OFFICE_EMAIL}
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

// ═══════════════════════════════════════════════════════════════════
// CONTACT HERO
// ═══════════════════════════════════════════════════════════════════

export function ContactHero() {
  return (
    <section className="relative w-full h-[280px] md:h-[340px] overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/Images/img15.jpeg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/80 via-orange-900/60 to-gray-900/70" />
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage:
            "repeating-linear-gradient(0deg,transparent,transparent 39px,rgba(255,255,255,0.3) 39px,rgba(255,255,255,0.3) 40px),repeating-linear-gradient(90deg,transparent,transparent 39px,rgba(255,255,255,0.3) 39px,rgba(255,255,255,0.3) 40px)",
        }}
      />

      {/* <Navbar activePage="CONTACT US" /> */}

      <div className="absolute bottom-0 left-0 right-0 pb-10 pl-8 md:pl-16 max-w-[1400px] mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center gap-2 text-white/80 text-sm mb-2"
        >
          <span className="hover:text-white cursor-pointer transition-colors">Home</span>
          <span className="text-orange-400">•</span>
          <span className="text-white font-medium">Contact Us</span>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-tight"
        >
          Contact Us
        </motion.h1>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// OFFICE CARD (sub-component)
// ═══════════════════════════════════════════════════════════════════

function OfficeCard() {
  return (
    <motion.div
      variants={cardVariants}
      className="bg-white rounded-2xl p-7 flex flex-col shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300"
    >
      <h3 className="text-[18px] font-black text-gray-900 tracking-tight mb-4">
        Office in Indore
      </h3>
      <div className="w-full h-px bg-gray-200 mb-5" />

      <div className="flex flex-col gap-4 flex-1">
        {/* Address */}
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shrink-0 mt-0.5">
            <FaMapMarkerAlt className="text-white w-3.5 h-3.5" />
          </span>
          <p className="text-[13px] font-bold text-gray-900 leading-snug">
            {OFFICE_ADDRESS}
          </p>
        </div>

        {/* Phone + Email */}
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shrink-0 mt-0.5">
            <FaCommentAlt className="text-white w-3.5 h-3.5" />
          </span>
          <div>
            <p className="text-[13px] font-bold text-gray-900">
              <a href={OFFICE_PHONE_LINK} className="hover:text-orange-500 transition">{OFFICE_PHONE}</a>
            </p>
            <p className="text-[13px] font-bold text-gray-900">
              <a href={OFFICE_EMAIL_LINK} className="hover:text-orange-500 transition">{OFFICE_EMAIL}</a>
            </p>
          </div>
        </div>

        {/* Hours */}
        <div className="flex items-center gap-3">
          <span className="w-9 h-9 rounded-full bg-orange-500 flex items-center justify-center shrink-0 mt-0.5">
            <FaClock className="text-white w-3.5 h-3.5" />
          </span>
          <div>
            <p className="text-[13px] font-bold text-gray-900">{OFFICE_HOURS}</p>
          </div>
        </div>
      </div>

      <div className="w-full h-px bg-gray-200 mt-6 mb-4" />
      {/* No View More button, or you can keep if desired */}
    </motion.div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// COMPANY OFFICES
// ═══════════════════════════════════════════════════════════════════

export function CompanyOffices() {
  return (
    <section className="relative bg-[#f0f1f3] py-20 px-6 md:px-10 lg:px-16 overflow-hidden">
      {/* Topographic decoration */}
      <div className="absolute top-0 right-0 w-[520px] h-[380px] opacity-100 pointer-events-none">
        <svg viewBox="0 0 520 380" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <ellipse cx="400" cy="80" rx="230" ry="160" stroke="#f97316" strokeWidth="1" strokeOpacity="0.18" fill="none" />
          <ellipse cx="400" cy="80" rx="190" ry="125" stroke="#f97316" strokeWidth="1" strokeOpacity="0.18" fill="none" />
          <ellipse cx="400" cy="80" rx="155" ry="95"  stroke="#f97316" strokeWidth="1" strokeOpacity="0.18" fill="none" />
          <ellipse cx="400" cy="80" rx="120" ry="68"  stroke="#f97316" strokeWidth="1" strokeOpacity="0.18" fill="none" />
          <ellipse cx="400" cy="80" rx="88"  ry="45"  stroke="#f97316" strokeWidth="1" strokeOpacity="0.18" fill="none" />
          <ellipse cx="400" cy="80" rx="58"  ry="26"  stroke="#f97316" strokeWidth="1.2" strokeOpacity="0.22" fill="none" />
          <ellipse cx="400" cy="80" rx="30"  ry="12"  stroke="#f97316" strokeWidth="1.2" strokeOpacity="0.22" fill="none" />
          <ellipse cx="400" cy="80" rx="80"  ry="55"  fill="#f97316" fillOpacity="0.04" />
          <ellipse cx="400" cy="80" rx="140" ry="100" fill="#f97316" fillOpacity="0.025" />
        </svg>
      </div>

      <div className="max-w-[1400px] mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <p className="text-[10px] font-black tracking-[0.3em] text-gray-400 uppercase mb-3">
            CONTACT DETAILS
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-gray-900 tracking-tight leading-tight">
            {COMPANY_NAME} Office
          </h2>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-1 xl:grid-cols-1 gap-5"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          <OfficeCard />
        </motion.div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// SPINNING BADGE (sub-component)
// ═══════════════════════════════════════════════════════════════════

function SpinningBadge() {
  return (
    <div className="relative w-[130px] h-[130px] flex items-center justify-center">
      <motion.div
        className="absolute inset-0"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <svg viewBox="0 0 130 130" className="w-full h-full">
          <defs>
            <path id="circle-path-ct" d="M 65,65 m -47,0 a 47,47 0 1,1 94,0 a 47,47 0 1,1 -94,0" />
            <radialGradient id="badgeGrad-ct" cx="40%" cy="40%">
              <stop offset="0%" stopColor="#fb923c" />
              <stop offset="100%" stopColor="#ef4444" />
            </radialGradient>
          </defs>
          <circle cx="65" cy="65" r="60" fill="url(#badgeGrad-ct)" />
          <text fontSize="11.5" fontWeight="800" letterSpacing="3.5" fill="white" textAnchor="middle">
            <textPath href="#circle-path-ct">• JOIN OUR TEAM • JOIN OUR TEAM</textPath>
          </text>
        </svg>
      </motion.div>
      <div className="relative z-10 w-12 h-12 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <rect x="13" y="2" width="6" height="28" rx="2" fill="white" />
          <rect x="2" y="13" width="28" height="6" rx="2" fill="white" />
        </svg>
      </div>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// JOIN TEAM
// ═══════════════════════════════════════════════════════════════════

export function JoinTeam() {
  return (
    <section className="w-full grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">
      {/* Left — dark text */}
      <div className="bg-[#111217] flex flex-col justify-center px-10 md:px-16 py-16 lg:py-0 relative">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-4">
            <SpinningBadge />
          </div>
          <p className="text-[10px] font-black tracking-[0.3em] text-white/50 uppercase mb-4">
            CAREERS
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-[52px] font-black text-white tracking-tight leading-[1.05] mb-6">
            Join our team.
          </h2>
          <p className="text-white/60 text-[13px] font-semibold leading-relaxed max-w-md mb-8">
            We have a wealth of experience working as main building contractors on all kinds of
            projects, big and small, from home maintenance and improvements to extensions,
            refurbishments and new builds.
          </p>
          <motion.button
            className="flex items-center gap-2 border border-white/30 text-white text-[11px] font-black tracking-[0.2em] uppercase px-6 py-3.5 rounded-full w-fit hover:bg-white hover:text-gray-900 transition-all duration-300 group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
          >
            VIEW MORE
            <FiArrowUpRight className="w-4 h-4 group-hover:rotate-45 transition-transform duration-300" />
          </motion.button>
        </motion.div>
      </div>

      {/* Right — full-bleed image */}
      <motion.div
        className="relative overflow-hidden min-h-[380px] lg:min-h-0"
        initial={{ opacity: 0, scale: 1.04 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <img
          src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1200&q=80"
          alt="Team at S D Enterprises"
          className="w-full h-full object-cover"
          style={{ minHeight: "380px" }}
        />
        <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#111217] to-transparent lg:block hidden" />
      </motion.div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PIN ICON (generic for office map)
// ═══════════════════════════════════════════════════════════════════

function PinIcon() {
  return (
    <div className="flex flex-col items-center">
      <div className="bg-gray-900 rounded-xl p-3 shadow-2xl flex items-center justify-center w-16 h-16">
        <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
          <rect x="1" y="1" width="34" height="34" rx="7" stroke="#f97316" strokeWidth="2" fill="none" />
          <rect x="10" y="10" width="7" height="7" rx="1.5" fill="#f97316" transform="rotate(45 13.5 13.5)" />
        </svg>
      </div>
      <div
        className="w-0 h-0"
        style={{
          borderLeft: "8px solid transparent",
          borderRight: "8px solid transparent",
          borderTop: "10px solid #111827",
        }}
      />
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════════
// CONTACT FORM + MAP
// ═══════════════════════════════════════════════════════════════════

export function ContactFormMap() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <section className="w-full bg-white grid grid-cols-1 lg:grid-cols-2 min-h-[500px]">
      {/* Left — Form */}
      <div className="px-10 md:px-16 py-16">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-10">
            {COMPANY_NAME} Office
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col w-full max-w-lg">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mb-1">
              <div className="flex flex-col">
                <label className="text-[13px] font-black text-gray-900 tracking-wide mb-2">Name</label>
                <input
                  type="text" name="name" value={form.name} onChange={handleChange} required
                  className="border-0 border-b-2 border-gray-200 focus:border-orange-500 focus:outline-none bg-transparent py-2 text-sm text-gray-900 transition-colors duration-200 mb-8"
                />
              </div>
              <div className="flex flex-col">
                <label className="text-[13px] font-black text-gray-900 tracking-wide mb-2">Email</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange} required
                  className="border-0 border-b-2 border-gray-200 focus:border-orange-500 focus:outline-none bg-transparent py-2 text-sm text-gray-900 transition-colors duration-200 mb-8"
                />
              </div>
            </div>

            <div className="flex flex-col mb-10">
              <label className="text-[13px] font-black text-gray-900 tracking-wide mb-2">Message</label>
              <textarea
                name="message" value={form.message} onChange={handleChange} rows={4} required
                className="border-0 border-b-2 border-gray-200 focus:border-orange-500 focus:outline-none bg-transparent py-2 text-sm text-gray-900 resize-none transition-colors duration-200"
              />
            </div>

            <motion.button
              type="submit"
              className="bg-gray-900 hover:bg-orange-500 text-white font-black text-[13px] tracking-widest uppercase px-10 py-4 rounded-full w-fit transition-all duration-300"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              {submitted ? "Sent ✓" : "Submit"}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Right — Map */}
      <div className="relative min-h-[400px] lg:min-h-0 overflow-hidden">
        <iframe
          title={`Office Location – ${COMPANY_NAME}`}
          // Centered on Indore with marker (approximate)
          src="https://www.openstreetmap.org/export/embed.html?bbox=75.8851,22.6946,75.8891,22.6986&layer=mapnik&marker=22.6966,75.8871"
          className="w-full h-full absolute inset-0 border-0"
          style={{ filter: "grayscale(100%) contrast(0.88) brightness(1.05)", minHeight: "500px" }}
          loading="lazy"
          allowFullScreen
        />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-full pointer-events-none z-10">
          <PinIcon />
        </div>
      </div>
    </section>
  );
}

// ═══════════════════════════════════════════════════════════════════
// PAGE EXPORT (composes all sections)
// ═══════════════════════════════════════════════════════════════════

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <ContactHero />
      <CompanyOffices />
      <JoinTeam />
      <ContactFormMap />
    </main>
  );
}