export const CompanyProfile = () => {
  return (
    <section className="py-16 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold mb-5">
            About <span className="text-orange-600">S D Enterprises</span>
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            S D Enterprises delivers turnkey design and execution for healthcare, office, and institutional projects. Since 2017, our certified team has provided quality spaces with a focus on speed, precision, and teamwork.
          </p>

          {/* Key Highlights / Info Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-6">
            <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
              <h3 className="text-lg font-semibold text-orange-600 mb-1">Established</h3>
              <p className="text-sm text-gray-600">
                2017 | ISO 9001:2015 | MSME Registered
              </p>
            </div>
            <div className="bg-white rounded-lg p-4 shadow-sm border border-orange-100">
              <h3 className="text-lg font-semibold text-orange-600 mb-1">Pan-India Projects</h3>
              <p className="text-sm text-gray-600">
                Hospitals, institutions, and corporations across India.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
            <span className="text-base font-medium text-black">
              Let's build excellence together.
            </span>
            <a
              href="#contact"
              className="border border-orange-600 bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-white hover:text-orange-600 hover:border-orange-600 transition"
            >
              Contact Us
            </a>
          </div>
        </div>

        {/* Right Images */}
        <div className="relative flex justify-center items-center">
          <img
            src="/Images/img8.jpeg"
            alt="S D Enterprises working"
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
};