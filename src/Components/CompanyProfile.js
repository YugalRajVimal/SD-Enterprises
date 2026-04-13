export const CompanyProfile = () => {
    return (
      <section className=" py-20 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <p className="text-xs tracking-widest text-gray-500 mb-4">
              WHAT WE OFFER
            </p>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Company Profile
            </h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              We are a long-established, independent building services and home
              improvements company. We have a wealth of experience working as main
              building contractors on all kinds of projects, big and small, from
              home maintenance and improvements to extensions, refurbishments and
              new builds.
            </p>
  
            <button className="border px-6 py-3 rounded-full text-sm font-medium hover:bg-black hover:text-white transition">
              VIEW MORE ↗
            </button>
          </div>
  
          {/* Right Images */}
          <div className="relative flex justify-center items-center">
            <img
              src="/BG3.png"
              className="w-full "
            />
  
        
  
            {/* Circle Badge */}
            {/* <div className="absolute top-10 right-32 w-24 h-24 rounded-full border border-gray-400 flex items-center justify-center text-xs text-center bg-white/70 backdrop-blur">
              ABOUT US • ABOUT US
            </div> */}
          </div>
        </div>
      </section>
    );
  };
  