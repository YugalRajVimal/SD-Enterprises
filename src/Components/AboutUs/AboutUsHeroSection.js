import { motion } from 'framer-motion';

export const HeroSection = () => {
    return (
      <section className="relative h-96 overflow-hidden bg-gradient-to-r from-gray-900/80 to-gray-900/40">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              'url("/Images/img15.jpeg")',
          }}
        />
        <div className="absolute inset-0 bg-black/50" />
   
        <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-white/80 text-sm font-semibold mb-2">Home • About</p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
              About
            </h1>
          </motion.div>
        </div>
      </section>
    );
  };
   