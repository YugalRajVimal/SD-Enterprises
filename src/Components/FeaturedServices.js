import { FaDraftingCompass, FaHardHat, FaTools, FaComments, FaCogs, FaPaintRoller } from "react-icons/fa";

export const FeaturedServices = () => {
  const services = [
    { id: "01.", title: "Preconstruction", icon: <FaDraftingCompass size={36} /> },
    { id: "02.", title: "Construction", icon: <FaHardHat size={36} /> },
    { id: "03.", title: "Restoration", icon: <FaTools size={36} /> },
    { id: "04.", title: "Reconstruction", icon: <FaPaintRoller size={36} /> },
    { id: "05.", title: "Consulting", icon: <FaComments size={36} /> },
    { id: "06.", title: "Special Projects", icon: <FaCogs size={36} /> },
  ];

  return (
    <section className="bg-gray-100 py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12">
        {/* Left Content */}
        <div className="my-auto">
          <p className="text-xs tracking-widest text-gray-500 mb-4">
            WHAT WE OFFER
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured Services
          </h2>
          <p className="text-gray-500 leading-relaxed mb-8">
            We have a wealth of experience working as main building contractors on all kinds of projects, big and small, from home maintenance and improvements to extensions, refurbishments and new builds.
          </p>

          <button className="border px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
            VIEW MORE ↗
          </button>
        </div>

        {/* Right Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {services.map((item, i) => (
            <div
              key={i}
              className={`
                p-8 border rounded-lg relative transition group bg-white hover:shadow-md
                hover:bg-gradient-to-br hover:from-orange-500 hover:to-orange-400 hover:text-white hover:border-none
              `}
            >
              <span className="absolute top-4 left-4 text-xs text-gray-400 group-hover:text-white">
                {item.id}
              </span>

              <div className={`mb-6 text-orange-500 group-hover:text-white`}>
                {item.icon}
              </div>

              <h3 className="text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <span className={`text-sm flex items-center gap-1 text-gray-500 group-hover:text-white`}>
                VIEW MORE ↗
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
