import { StatCard } from "./StatCard";
import { motion } from 'framer-motion';

export const WhoWeAreSection = () => {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-500 font-semibold text-sm mb-4">ABOUT S D ENTERPRISES</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Turnkey design & execution for your spaces.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Since 2017, our certified team has provided quality spaces with a focus on speed, precision, and teamwork.
            </p>
            <div className="mb-4">
              <div className="flex flex-col gap-2 text-sm">
                <div>
                  <span className="font-semibold text-gray-800">Established: </span>
                  <span className="text-orange-600 font-bold">2017</span>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 text-xs text-gray-600 mt-1">
                  <span className="border border-orange-400 rounded px-2 py-0.5 bg-orange-50 text-orange-700 font-semibold">ISO 9001:2015</span>
                  <span className="border border-orange-400 rounded px-2 py-0.5 bg-orange-50 text-orange-700 font-semibold">MSME Registered</span>
                </div>
              </div>
            </div>
            <div className="mb-6">
              <div>
                <span className="font-semibold text-gray-800">Pan-India Projects: </span>
                <span className="text-gray-700">Hospitals, institutions, and corporations across India.</span>
              </div>
            </div>
            <p className="text-lg font-semibold text-gray-800 mb-6">
              Let's build excellence together.
            </p>
            <motion.a
              href="/contact-us"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all inline-flex items-center gap-2"
            >
              Contact Us <span aria-hidden>→</span>
            </motion.a>
          </motion.div>
          {/* Right Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            <StatCard
              number="2017"
              label="Established"
              description="ISO 9001:2015 | MSME Registered"
            />
            <StatCard
              number="Pan-India"
              label="Projects Across"
              description="Hospitals, institutions & corporations"
            />
            <div className="col-span-2">
              <StatCard
                number="Turnkey"
                label="Design & Execution"
                description="Healthcare, office, & institutional projects"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};