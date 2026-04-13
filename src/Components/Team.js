import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

export const Team = () => {
  const team = [
    { name: "Hugo Bob", role: "Constructor" },
    { name: "Shezuka Li", role: "Engineer" },
  ];

  return (
    <section className="bg-gray-100 py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="flex gap-6">
          {team.map((member, i) => (
            <div key={i} className="bg-white p-8 text-center shadow-sm">
              <img
                src={`https://randomuser.me/api/portraits/men/${30+i}.jpg`}
                className="w-40 h-40 mx-auto rounded-full mb-6"
              />
              <h3 className="text-xl font-semibold">{member.name}</h3>
              <p className="text-gray-500 text-sm mb-4">{member.role}</p>
              <div className="flex justify-center gap-4 text-gray-400">
                <FaFacebookF /> <FaTwitter /> <FaLinkedinIn />
              </div>
            </div>
          ))}
        </div>

        <div>
          <p className="text-xs tracking-widest text-gray-500 mb-4">OUR TEAM</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Meet Our Staff</h2>
          <p className="text-gray-500 mb-8">
            We have a wealth of experience working as main building contractors on all kinds of projects.
          </p>
          <button className="border px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
            VIEW MORE ↗
          </button>
        </div>
      </div>
    </section>
  );
};