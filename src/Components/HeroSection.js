import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

// List all image URLs used for the Hero background
const HERO_IMAGES = [

  "/Images/img5.jpeg",
  "/Images/img6.jpeg",
  "/Images/img7.jpeg",
  "/Images/img8.jpeg",
  "/Images/img9.jpeg",
  "/Images/img10.jpeg",
  "/Images/img11.jpeg",
  "/Images/img12.jpeg",
  "/Images/img13.jpeg",
  "/Images/img14.jpeg",
  "/Images/img15.jpeg",
  "/Images/img16.jpeg",
  "/Images/img17.jpeg",
  "/Images/img18.jpeg",
  "/Images/img19.jpeg",
  "/Images/img20.jpeg",
  "/Images/img21.jpeg",
  "/Images/img22.jpeg",
  "/Images/img23.jpeg",
  "/Images/img24.jpeg",
  "/Images/img25.jpeg",
  "/Images/img26.jpeg",
  "/Images/img27.jpeg",
  "/Images/img28.jpeg",
  "/Images/img29.jpeg",
  "/Images/img30.jpeg",
  "/Images/img31.jpeg",
  "/Images/img32.jpeg",
];

// ================= HERO COMPONENT =================
export const Hero = () => {
  const [imgIndex, setImgIndex] = useState(0);

  useEffect(() => {
    // Cycle hero images every 6 seconds for a slideshow effect
    const interval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={HERO_IMAGES[imgIndex]}
        alt={`hero background ${imgIndex + 1}`}
        className="absolute w-full h-full object-cover"
        loading="eager"
        draggable="false"
      />

      {/* Overlay Gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-orange-600/70 via-black/50 to-transparent"></div>

      {/* Content */}
      <div className="relative z-10 flex items-center h-full px-6 md:px-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-md p-8 md:p-10 max-w-xl rounded-lg"
        >
          {/* Headline */}
          <h1 className="text-white text-3xl md:text-5xl font-bold mb-4 leading-tight">
            Building Intelligent Spaces for Healthcare & Institutions
          </h1>

          {/* Subheadline */}
          <p className="text-gray-200 text-base md:text-lg mb-2 font-semibold">
            Design. Execute. Deliver.
          </p>
          <p className="text-gray-300 text-sm md:text-base mb-6 max-w-lg">
            Since 2017, S D Enterprises has been transforming healthcare, office, and institutional environments with turnkey solutions, precision engineering, and unmatched speed.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 md:gap-6">
            <Link
              to="/projects"
              className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-5 py-2.5 rounded transition"
            >
              View Our Projects
            </Link>
            <Link
              to="/contact"
              className="bg-white hover:bg-orange-500 hover:text-white text-orange-600 font-bold px-5 py-2.5 rounded border border-orange-500 transition"
            >
              Get a Quote
            </Link>
          </div>

          {/* Key Highlights Strip */}
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-2 items-center text-xs md:text-sm font-medium text-orange-200">
            <span className="inline-block border-l-2 border-orange-400 pl-2">ISO 9001:2015 Certified</span>
            <span className="inline-block border-l-2 border-orange-400 pl-2">MSME Registered</span>
            <span className="inline-block border-l-2 border-orange-400 pl-2">Trusted by Industry Leaders</span>
          </div>
        </motion.div>
      </div>

      {/* Mention all images as comments for reference */}
      {/*
        Images used as backgrounds in the hero section:
        /Images/img1.jpeg
        /Images/img2.jpeg
        /Images/img3.jpeg
        /Images/img4.jpeg
        /Images/img5.jpeg
        /Images/img6.jpeg
        /Images/img7.jpeg
        /Images/img8.jpeg
        /Images/img9.jpeg
        /Images/img10.jpeg
        /Images/img11.jpeg
        /Images/img12.jpeg
        /Images/img13.jpeg
        /Images/img14.jpeg
        /Images/img15.jpeg
        /Images/img16.jpeg
        /Images/img17.jpeg
        /Images/img18.jpeg
        /Images/img19.jpeg
        /Images/img20.jpeg
        /Images/img21.jpeg
        /Images/img22.jpeg
        /Images/img23.jpeg
        /Images/img24.jpeg
        /Images/img25.jpeg
        /Images/img26.jpeg
        /Images/img27.jpeg
        /Images/img28.jpeg
        /Images/img29.jpeg
        /Images/img30.jpeg
        /Images/img31.jpeg
        /Images/img32.jpeg
        /Images/img33.jpeg
      */}
    </section>
  );
};