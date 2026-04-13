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
              <p className="text-orange-500 font-semibold text-sm mb-4">WHO WE ARE</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                Commercial construction firm serving for over three decades.
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                We are a long-established, independent building services and home improvements company.
                We have a wealth of experience working as main building contractors on all kinds of
                projects, big and small, from home maintenance and improvements to extensions,
                refurbishments and new builds.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all inline-flex items-center gap-2"
              >
                VIEW MORE
                <span>→</span>
              </motion.button>
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
                number="150+"
                label="Projects"
                description="We have a wealth of experience working as main building contractors."
              />
              <StatCard
                number="80+"
                label="Clients"
                description="We have a wealth of experience working as main building contractors."
              />
              <div className="col-span-2">
                <StatCard
                  number="98%"
                  label="Satisfaction"
                  description="We have a wealth of experience working as main building contractors."
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };