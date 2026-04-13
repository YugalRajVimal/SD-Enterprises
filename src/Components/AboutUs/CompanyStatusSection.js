import React from 'react';
import { motion } from 'framer-motion';


// ============ PROGRESS BAR COMPONENT ============
export const ProgressBar = ({ label, percentage }) => {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-semibold text-gray-700 uppercase">{label}</span>
          <span className="text-sm font-bold text-orange-500">{percentage}%</span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${percentage}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1.5, ease: 'easeOut' }}
            className="h-full bg-orange-500 rounded-full"
          />
        </div>
      </motion.div>
    );
  };
   
  // ============ COMPANY STATUS SECTION ============
  export const CompanyStatusSection = () => {
    return (
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Images Collage */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="grid grid-cols-2 gap-4"
            >
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=400&h=400&fit=crop"
                alt="Construction planning"
                className="w-full h-64 object-cover rounded-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=400&h=400&fit=crop"
                alt="Construction work"
                className="w-full h-64 object-cover rounded-lg mt-8"
              />
            </motion.div>
   
            {/* Right Content */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-orange-500 font-semibold text-sm mb-4">COMPANY STATUS</p>
              <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                A clear choice for today and tomorrow.
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We have a wealth of experience working as main building contractors on all kinds of
                projects, big and small, from home maintenance and improvements to extensions,
                refurbishments and new builds.
              </p>
   
              <div className="space-y-6">
                <ProgressBar label="Business Strategy" percentage={68} />
                <ProgressBar label="Data Analytics" percentage={87} />
                <ProgressBar label="Customer Experience" percentage={79} />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    );
  };