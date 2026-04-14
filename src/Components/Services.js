
import { motion } from "framer-motion";
import { FaPencilRuler, FaProjectDiagram, FaPaintRoller, FaBolt } from "react-icons/fa";
import { Link } from "react-router-dom";

export const Services = () => {
  const services = [
    {
      icon: <FaPencilRuler size={40} />,
      title: "Architectural Planning & Design",
      description:
        "Intelligent layouts and innovative designs for functional, aesthetic spaces.",
    },
    {
      icon: <FaProjectDiagram size={40} />,
      title: "Turnkey Project Execution",
      description:
        "End-to-end project management for seamless, timely delivery.",
    },
    {
      icon: <FaPaintRoller size={40} />,
      title: "Interior & Finishing Works",
      description:
        "Expertise in civil, wood, and finishing work with premium materials.",
    },
    {
      icon: <FaBolt size={40} />,
      title: "Electrical & Fabrication Solutions",
      description:
        "Reliable electrical and fabrication services ensuring safety and quality.",
    },
  ];
  return (
    <section className="relative bg-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Background Image */}
      <img
        src="/serviceBG.webp"
        alt="services background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      {/* Optional overlay for contrast */}
      {/* <div className="absolute inset-0 bg-white/70" style={{zIndex: 1}}></div> */}
      <div className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Grid (Service Cards) */}
        <div className="grid sm:grid-cols-2 gap-8">
          {services.map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -5 }}
              className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition relative"
            >
              <div className="h-full w-full flex flex-col justify-between">
              <div>
              <div className="text-orange-500 mb-4">{item.icon}</div>
              <h3 className="text-lg font-semibold mb-3">{item.title}</h3>
              <p className="text-gray-500 text-sm mb-6">
                {item.description}
              </p>

              </div>
             

              {/* Arrow Button */}
              <div className="w-10 h-10 border rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition cursor-pointer">
                →
              </div>

              </div>
           
            </motion.div>
          ))}
        </div>

        {/* Right Content (Heading & CTA) */}
        <div>
          <p className="text-xs tracking-widest text-gray-500 mb-4">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
            Our Services
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            At S D Enterprises, we offer end-to-end turnkey solutions tailored for healthcare, office, and institutional spaces. From concept to completion, our experienced team ensures every project is executed with precision, speed, and superior quality—delivering functional and elegant environments that stand the test of time.
          </p>

          <div className="flex flex-col gap-5">
            <div className="font-semibold text-base text-gray-900 mb-2">
              Let’s Build Your Next Project with Excellence
            </div>
            <Link
              to="/contact"
              className="border px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition w-fit"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
