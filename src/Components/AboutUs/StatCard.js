import { motion } from 'framer-motion';

export const StatCard = ({ number, label, description }) => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-white p-8 rounded-lg shadow-sm border border-gray-100"
      >
        <h3 className="text-4xl font-bold text-gray-900 mb-2">{number}</h3>
        <p className="text-gray-600 font-semibold mb-4">{label}</p>
        <p className="text-gray-500 text-sm">{description}</p>
      </motion.div>
    );
  };