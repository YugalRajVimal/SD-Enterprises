import React from 'react';
import { motion } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';

// ============ TIMELINE ITEM COMPONENT WITH BETTER DESIGN ============
export const TimelineItem = ({ year, title, description, isLeft, isLast }) => {
  return (
    <div className={`flex w-full items-center ${isLeft ? 'justify-end' : 'justify-start'} relative`}>
      {/* Timeline Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className={`
          bg-white shadow-xl rounded-xl px-8 py-6 max-w-md 
          border-l-4 border-orange-500
          ${isLeft ? 'ml-16' : 'mr-16'}
          relative z-10
        `}
      >
        <span className="inline-block bg-orange-100 text-orange-600 text-xs font-semibold px-2 py-1 rounded-full mb-2">
          {year}
        </span>
        <h3 className="text-2xl font-bold text-gray-900 mb-1 flex items-center gap-2">
          {title}
        </h3>
        <p className="text-gray-600 text-base leading-relaxed">{description}</p>
      </motion.div>

      {/* Timeline Dot and Connector */}
      <div className={`absolute ${isLeft ? 'left-0' : 'right-0'} top-1/2 transform -translate-y-1/2 flex flex-col items-center z-20`}>
        <span className="flex items-center justify-center w-8 h-8 bg-gradient-to-tr from-orange-500 to-orange-300 text-white rounded-full shadow-md border-2 border-white text-lg font-bold ring-2 ring-orange-200">
          {year.slice(-2)}
        </span>
        {!isLast && (
          <div className="w-1 h-28 bg-gradient-to-b from-orange-400 to-orange-100 mt-1 mb-1 rounded-full"></div>
        )}
      </div>
    </div>
  );
};

export const TimelineSection = () => {
  const timeline = [
    {
      year: '2016',
      title: 'Project Idea',
      description:
        'The inception of our vision, identifying the needs of clients and creative brainstorming sessions laid the foundation for our core mission.',
    },
    {
      year: '2018',
      title: 'Business Conception',
      description:
        'Solidifying our business model, gathering a passionate team, and executing financial & market analyses to shape a sustainable enterprise.',
    },
    {
      year: '2019',
      title: 'Project Development',
      description:
        'The launch of our flagship projects, hands-on execution, and perfecting our process standards with a keen focus on innovation and reliability.',
    },
    {
      year: '2021',
      title: 'Project Release',
      description:
        'Officially unveiling our achievements to clients, celebrating milestones, and setting new ambitions for continued excellence and client satisfaction.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-orange-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <p className="text-orange-500 font-semibold text-base mb-3 tracking-wide">WHAT WE DID</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900">Company Timeline</h2>
          <div className="mt-4 mx-auto max-w-2xl text-gray-600 text-lg">
            Our journey is marked by innovation, resilience, and building trust with every milestone. See how we have grown and evolved through the years.
          </div>
        </motion.div>

        <div className="relative">
          {/* Center Line for Large Screens */}
          <div className="hidden md:block absolute left-1/2 top-0 w-1 h-full bg-gradient-to-b from-orange-200 via-orange-100 to-orange-50 -translate-x-1/2 z-0 rounded-full" />
          <div className="flex flex-col space-y-20 md:space-y-0 md:grid md:grid-cols-1 relative z-10">
            {timeline.map((item, idx) => (
              <div
                key={idx}
                className={`relative py-8 md:py-12 ${idx % 2 === 0 ? 'md:pl-0 md:pr-40' : 'md:pr-0 md:pl-40'}`}
              >
                <TimelineItem
                  year={item.year}
                  title={item.title}
                  description={item.description}
                  isLeft={idx % 2 === 0}
                  isLast={idx === timeline.length - 1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};