import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const Team = () => {
  // Sample template data for demonstration
  const team = [
    {
      name: "Alex Johnson",
      role: "Project Manager",
      img: "https://randomuser.me/api/portraits/men/32.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Maria Lee",
      role: "Senior Architect",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "Priya Singh",
      role: "Interior Designer",
      img: "https://randomuser.me/api/portraits/women/68.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
    {
      name: "David Zhang",
      role: "Site Engineer",
      img: "https://randomuser.me/api/portraits/men/50.jpg",
      socials: {
        facebook: "#",
        twitter: "#",
        linkedin: "#",
      },
    },
  ];

  return (
    <section className="bg-gray-100 py-20 px-4 sm:px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Staff Grid */}
        <div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {team.map((member, i) => (
              <div
                key={i}
                className="bg-white rounded-lg p-6 flex flex-col items-center shadow transition hover:shadow-lg"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 md:w-36 md:h-36 rounded-full mb-4 object-cover border-4 border-orange-50"
                />
                <h3 className="text-lg md:text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-orange-600 text-xs font-medium uppercase mb-2 tracking-wide">{member.role}</p>
                <div className="flex items-center justify-center gap-3 mt-2">
                  <a href={member.socials.facebook} aria-label="facebook" className="text-gray-400 hover:text-orange-600 transition">
                    <FaFacebookF />
                  </a>
                  <a href={member.socials.twitter} aria-label="twitter" className="text-gray-400 hover:text-orange-600 transition">
                    <FaTwitter />
                  </a>
                  <a href={member.socials.linkedin} aria-label="linkedin" className="text-gray-400 hover:text-orange-600 transition">
                    <FaLinkedinIn />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Team Description */}
        <div className="text-center lg:text-left flex flex-col justify-center">
          <p className="text-xs tracking-widest text-gray-500 mb-2">OUR TEAM</p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5">Meet Our Staff</h2>
          <p className="text-gray-500 mb-8 max-w-lg mx-auto lg:mx-0">
            Our skilled and passionate professionals work together to deliver outstanding results for every project. <br />
            From design to execution, each member brings years of expertise and creativity.
          </p>
          <button className="border border-orange-600 px-6 py-2.5 rounded-full font-semibold hover:bg-orange-600 hover:text-white transition hover:shadow-orange-100 shadow">
            VIEW MORE ↗
          </button>
        </div>
      </div>
    </section>
  );
};