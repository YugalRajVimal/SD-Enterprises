import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// ================= HERO COMPONENT =================
export const Hero = () => {
  return (
    <section className="relative h-[90vh] w-full overflow-hidden">
      {/* Background Image */}
      <img
        src="/heroBG.jpg"
        alt="construction"
        className="absolute w-full h-full object-cover"
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
    </section>
  );
};