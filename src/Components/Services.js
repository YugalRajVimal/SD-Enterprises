
import { motion } from "framer-motion";
import { FaDraftingCompass, FaHardHat, FaPaintRoller, FaCity } from "react-icons/fa";

export const Services = () => {
  const services = [
    {
      icon: <FaHardHat size={40} />,
      title: "Construction Management",
    },
    {
      icon: <FaDraftingCompass size={40} />,
      title: "Landscape Design",
    },
    {
      icon: <FaPaintRoller size={40} />,
      title: "Interior Design",
    },
    {
      icon: <FaCity size={40} />,
      title: "Urban Planning",
    },
  ];
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Image */}
      <img
        src="/serviceBG.webp"
        alt="services background"
        className="absolute inset-0 w-full h-full object-cover  "

      />
      {/* Optional overlay for contrast */}
      {/* <div className="absolute inset-0 bg-white/70" style={{zIndex: 1}}></div> */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Grid */}
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition relative"
            >
              <div className="text-orange-500 mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-6">
                We have a wealth of experience working as main building
                contractors.
              </p>

              {/* Arrow Button */}
              <div className="w-10 h-10 border rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition cursor-pointer">
                →
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right Content */}
        <div>
          <p className="text-xs tracking-widest text-gray-500 mb-4">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Providing solutions for construction, management, and restoration.
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            We are a long-established, independent building services and home
            improvements company. We have a wealth of experience working as main
            building contractors on all kinds of projects, big and small.
          </p>

          <button className="border px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
            VIEW MORE ↗
          </button>
        </div>
      </div>
    </section>
  );
};
