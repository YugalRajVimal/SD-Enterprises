import { useState } from "react";

// Demo data for testimonials
const testimonialsData = [
  {
    quote:
      "We were thoroughly impressed by the team's dedication and attention to detail. The entire process was seamless.",
    name: "Sandeep Kumar",
    role: "Homeowner",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    quote:
      "Their technical skill and expertise truly set them apart. Our office space transformation exceeded expectations!",
    name: "Ayesha Rani",
    role: "Business Owner",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    quote:
      "Clear communication and on-time delivery made the whole experience stress-free. Highly recommended.",
    name: "Rahul Sharma",
    role: "Customer",
    image: "https://randomuser.me/api/portraits/men/68.jpg",
  },
];

export const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  const prevTestimonial = () => {
    setCurrent((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrent((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="bg-[#0f1a23] text-white py-16 px-4 sm:px-8 md:px-12 lg:px-16">
      <div className="max-w-6xl mx-auto grid gap-12 items-center lg:grid-cols-2">
        {/* Left Column */}
        <div className="mb-10 lg:mb-0">
          <span className="text-xs tracking-widest text-orange-400 font-medium mb-3 block">
            TESTIMONIALS
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            What our Clients Say
          </h2>
          <p className="text-gray-400 mb-6 sm:mb-8 max-w-md">
            Our partners appreciate quality, timeliness, and excellent communication. See what they say about working with us.
          </p>
          <button className="border border-orange-500 px-6 py-2.5 rounded-full text-sm font-semibold tracking-wide hover:bg-orange-500 hover:text-white transition-colors duration-200">
            Read All Reviews
          </button>
        </div>

        {/* Testimonials Slider (custom implementation) */}
        <div className="relative">
          <div className="bg-white max-w-xl w-full text-black p-8 rounded-xl shadow-xl h-full flex flex-col justify-between">
            <svg
              width={44}
              height={44}
              viewBox="0 0 44 44"
              fill="none"
              className="mb-3 text-orange-300"
            >
              <circle cx="22" cy="22" r="22" fill="#FFF7EE" />
              <text x="14" y="32" fontSize="32" fill="#E87722">
                “
              </text>
            </svg>
            <p className="italic text-gray-700 mb-7 text-lg leading-relaxed font-medium">
              {testimonialsData[current].quote}
            </p>
            <div className="flex items-center gap-4 mt-auto">
              <img
                src={testimonialsData[current].image}
                className="w-12 h-12 rounded-full object-cover border-2 border-orange-400"
                alt={testimonialsData[current].name}
              />
              <div>
                <p className="font-bold text-base text-gray-900">{testimonialsData[current].name}</p>
                <p className="text-xs text-gray-500 tracking-wide">{testimonialsData[current].role}</p>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            aria-label="Previous Testimonial"
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-2 shadow-lg hover:bg-orange-600 transition-colors duration-150 z-10"
            style={{ transform: 'translateY(-50%)' }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M15.5 19L9.5 12L15.5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            aria-label="Next Testimonial"
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-orange-500 text-white rounded-full p-2 shadow-lg hover:bg-orange-600 transition-colors duration-150 z-10"
            style={{ transform: 'translateY(-50%)' }}
          >
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path d="M8.5 5L14.5 12L8.5 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          {/* Pagination Dots */}
          <div className="flex gap-2 justify-center mt-6">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrent(idx)}
                className={`w-3 h-3 rounded-full ${current === idx ? "bg-orange-500" : "bg-gray-300"} focus:outline-none transition-colors`}
                aria-label={`Go to testimonial ${idx + 1}`}
                style={{ outline: current === idx ? '2px solid #E87722' : undefined }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};