import React from 'react';
import { motion } from 'framer-motion';
import {  FaUsers, FaHome, FaChartBar } from 'react-icons/fa';
import { FaShield } from 'react-icons/fa6';


export const ValueCard = ({ icon: Icon, title, description }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        whileHover={{ y: -10 }}
        transition={{ duration: 0.5 }}
        className="flex gap-4"
      >
        <div className="flex-shrink-0">
          <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-500">
            <Icon className="h-6 w-6 text-white" />
          </div>
        </div>
        <div>
          <h3 className="text-lg font-bold text-white mb-2">{title}</h3>
          <p className="text-gray-300 text-sm leading-relaxed">{description}</p>
        </div>
      </motion.div>
    );
  };
   
  // ============ VALUES AND MISSION SECTION ============
  export const ValuesSection = () => {
    const values = [
      {
        icon: FaShield,
        title: 'Safety & Wellness First',
        description:
          'Their separate existence is a myth. For science, music, sport, etc, Europe uses the same vocabulary. The languages only differ in their grammar, their pronunciation and their most common words.',
      },
      {
        icon: FaUsers,
        title: 'Client-Focused Solutions',
        description:
          'Everyone realizes why a new common language would be desirable: one could refuse to pay expensive translators. To achieve this, it would be necessary to have uniform grammar, pronunciation.',
      },
      {
        icon: FaHome,
        title: 'Family-oriented',
        description:
          'To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple and regular than that.',
      },
      {
        icon: FaChartBar,
        title: 'Weatherproofed Longevity',
        description:
          'To achieve this, it would be necessary to have uniform grammar, pronunciation and more common words. If several languages coalesce, the grammar of the resulting language is more simple.',
      },
    ];
   
    return (
      <section className="py-16 sm:py-24 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <p className="text-orange-500 font-semibold text-sm mb-4">OUR VALUES AND MISSION</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-white">
              We help you with your next project.
            </h2>
          </motion.div>
   
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {values.map((value, idx) => (
              <ValueCard
                key={idx}
                icon={value.icon}
                title={value.title}
                description={value.description}
              />
            ))}
          </div>
        </div>
      </section>
    );
  };