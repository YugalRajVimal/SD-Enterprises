import { Swiper, SwiperSlide } from "swiper/react";
import React, { useRef } from "react";
import "swiper/css";

export const WorkShowcase = () => {
  // Data for Projects
  const projects = [
    {
      title: "AIIMS",
      collaborators: [
        "GE Healthcare",
        "Siemens",
        "Elekta",
        "Varian",
        "Philips",
        "Shapoorji Pallonji",
        "Indian Oil"
      ],
      locations: [
        "Delhi", "Jodhpur", "Raebareli", "Bhatinda", "Gorakhpur", "Jammu",
        "Nagpur", "Raipur", "Mangalagiri", "Bhopal", "Deoghar", "Bilaspur"
      ],
      image: "/projects/aiims.jpg",
    },
    {
      title: "Military Hospital",
      locations: [
        "Delhi", "Mumbai", "Pathankot", "Jhansi", "Gwalior", "Mathura", "Prayagraj",
        "Suratgarh", "Jaipur", "Pune", "Rajouri", "Jallandhar", "Udhampur", "Chennai",
        "Goa", "Jodhpur"
      ],
      image: "/projects/military-hospital.jpg",
    },
    {
      title: "National Cancer Institute",
      locations: ["Jhajjar"],
      image: "/projects/nci-jhajjar.jpg",
    },
    {
      title: "Tata Memorial Hospital",
      locations: ["Varanasi", "Vizag", "Mullanpur"],
      image: "/projects/tata-memorial.jpg",
    },
    {
      title: "Govt. Medical College",
      locations: [
        "Rajkot", "Jamnagar", "Chandrapur", "Kanpur", "Madurai", "Chennai",
        "Udaipur", "Ajmer", "Wardha", "Jammu", "Jodhpur", "Kadappa", "Kurnool",
        "Vizag", "Siddipet", "Gandhinagar"
      ],
      image: "/projects/govt-medical-college.jpg",
    },
    {
      title: "Max Hospital",
      locations: ["Delhi", "Mohali", "Dehradun", "Gurugram"],
      image: "/projects/max-hospital.jpg",
    },
    {
      title: "KGMU & Apollo",
      locations: ["Lucknow"],
      image: "/projects/kgmu-apollo.jpg",
    },
    {
      title: "PGIMS",
      locations: ["Rohtak", "Lucknow", "Chandigarh"],
      image: "/projects/pgims.jpg",
    },
    {
      title: "Lady Hardinge Medical College, ILBS & INMAS",
      locations: ["New Delhi"],
      image: "/projects/lady-hardinge.jpg",
    },
    {
      title: "ESIC Hospital",
      locations: ["Alwar"],
      image: "/projects/esic-alwar.jpg",
    },
    {
      title: "Fortis Hospital",
      locations: ["Noida"],
      image: "/projects/fortis-noida.jpg",
    },
    {
      title: "IGMC",
      locations: ["Shimla"],
      image: "/projects/igmc-shimla.jpg",
    },
    {
      title: "BCM Reliance Hospital",
      locations: ["Indore"],
      image: "/projects/bcm-indore.jpg",
    },
    {
      title: "Indian Oil Bottling Plant",
      locations: [],
      image: "/projects/indian-oil.jpg",
    },
  ];

  // To allow refs per slide (unique for collaborators and locations)
  const collaboratorsRefs = useRef([]);
  const locationsRefs = useRef([]);

  return (
    <section className="bg-[#0f1a23] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="mb-4">
          <p className="text-xs tracking-widest text-gray-400 mb-2">OUR CLIENTS & COLLABORATORS</p>
          <p className="text-sm text-gray-300 mb-4">
            We are working in collaboration with{" "}
            <span className="text-orange-300 font-semibold">
              GE Healthcare, Siemens, Elekta, Varian, Philips, Shapoorji Pallonji and Indian Oil
            </span>{" "}
            for various Projects:
          </p>
        </div>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">Projects Showcase</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1.2}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {projects.map((project, i) => {
            // Prepare refs for scrolling zones
            if (!collaboratorsRefs.current[i]) collaboratorsRefs.current[i] = React.createRef();
            if (!locationsRefs.current[i]) locationsRefs.current[i] = React.createRef();

            return (
              <SwiperSlide key={i}>
                <div
                  className="flex flex-col items-stretch h-full group/card"
                  // No explicit handlers needed; we'll use CSS via parent group
                >
                  {/* Card */}
                  <div className="relative group overflow-hidden bg-[#162531] rounded-t-lg shadow-sm flex flex-col h-full min-h-[320px]">
                    <img
                      src={project.image || "https://images.unsplash.com/photo-1503387762-592deb58ef4e"}
                      alt={project.title}
                      className="w-full h-[210px] object-cover group-hover:scale-105 transition duration-500"
                      loading="lazy"
                    />
                    <div className="flex-1 flex flex-col justify-end">
                      <div className="px-5 py-4">
                        <h3 className="text-lg font-bold mb-1">{project.title}</h3>
                      </div>
                    </div>
                    <div className="px-5 pb-3">
                      <span className="inline-block text-orange-400 text-sm font-semibold hover:underline cursor-pointer">
                        View More &rarr;
                      </span>
                    </div>
                  </div>
                  {/* Collaborators [& Location] below the card */}
                  <div className="bg-[#192e41] rounded-b-lg mt-0 px-4 pt-3 pb-4">
                    {/* Collaborators: single-line scrolling on card hover */}
                    {project.collaborators && project.collaborators.length > 0 && (
                      <div className="mb-2">
                        <span className="block text-xs font-semibold text-orange-300 mb-0.5">Collaborators:</span>
                        <div
                          ref={collaboratorsRefs.current[i]}
                          className="overflow-x-hidden whitespace-nowrap cursor-pointer transition-shadow relative scrolling-on-card"
                          style={{ maxWidth: "100%" }}
                        >
                          <div
                            className="inline-block transition-[transform] duration-1000"
                            style={{
                              willChange: "transform",
                              whiteSpace: "nowrap",
                              minWidth: "100%",
                            }}
                          >
                            {project.collaborators.map((collab, cidx) => (
                              <span
                                key={collab + cidx}
                                className="bg-orange-700/20 text-orange-100 px-2 py-0.5 text-[11px] rounded-full mx-0.5"
                              >
                                {collab}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                    {/* Locations: single-line scrolling on card hover */}
                    <div>
                      <span className="block text-xs font-semibold text-orange-200 mb-0.5">
                        {project.locations.length > 1 ? "Locations:" : "Location:"}
                      </span>
                      {project.locations.length > 0 ? (
                        <div
                          ref={locationsRefs.current[i]}
                          className="overflow-x-hidden whitespace-nowrap cursor-pointer transition-shadow relative scrolling-on-card"
                          style={{ maxWidth: "100%" }}
                        >
                          <div
                            className="inline-block transition-[transform] duration-1000"
                            style={{
                              willChange: "transform",
                              whiteSpace: "nowrap",
                              minWidth: "100%",
                            }}
                          >
                            {project.locations.map((loc, lidx) => (
                              <span
                                key={loc + lidx}
                                className="bg-white/10 border border-orange-200 text-orange-100 px-2 py-0.5 text-[11px] rounded mx-0.5"
                              >
                                {loc}
                              </span>
                            ))}
                          </div>
                        </div>
                      ) : (
                        <span className="text-xs text-gray-400">No locations listed</span>
                      )}
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
      {/* Inline CSS for the marquee-on-card-hover effect */}
      <style>{`
        /* Group for entire card+footer area */
        .group\\/card:hover .scrolling-on-card,
        .group\\/card:focus .scrolling-on-card {
          overflow-x: auto !important;
          scrollbar-width: none;
        }
        .scrolling-on-card::-webkit-scrollbar { display: none; }
        .group\\/card:hover .scrolling-on-card > div,
        .group\\/card:focus .scrolling-on-card > div {
          animation: marquee-x 10s linear infinite;
        }
        @keyframes marquee-x {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(calc(-50%));
          }
        }
        .scrolling-on-card > div {
          animation: none !important;
        }
        /* Pause animation if not hovered */
        .group\\/card:not(:hover) .scrolling-on-card > div {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};
