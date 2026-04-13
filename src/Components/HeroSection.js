import { motion } from "framer-motion";
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
            className="bg-black/50 backdrop-blur-md p-8 md:p-10 max-w-lg rounded-lg"
          >
            <h1 className="text-white text-2xl md:text-4xl font-semibold mb-4">
              Safe, Reliable, & High Quality Construction
            </h1>
            <p className="text-gray-200 text-sm md:text-base mb-6">
              Construction quality is a crucial factor in growing your business
              and staying profitable.
            </p>
  
            <button className="text-orange-400 text-sm font-medium hover:underline">
              VIEW MORE →
            </button>
          </motion.div>
        </div>
  
        {/* Play Button */}
        <div className="absolute right-10 bottom-20 md:bottom-32 z-10">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur flex items-center justify-center cursor-pointer hover:scale-110 transition">
            ▶
          </div>
          <p className="text-white text-xs mt-2 text-center">PLAY PROMO</p>
        </div>
      </section>
    );
  };