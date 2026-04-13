import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const Testimonials = () => {
  const data = [1,2,3];
  return (
    <section className="bg-[#0f1a23] text-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left */}
        <div>
          <p className="text-xs tracking-widest text-gray-400 mb-4">WHAT PEOPLE SAY</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Client's Talk</h2>
          <p className="text-gray-400 mb-8">
            We have a wealth of experience working as main building contractors on all kinds of projects.
          </p>
          <button className="border px-6 py-3 rounded-full text-sm hover:bg-white hover:text-black transition">
            VIEW MORE ↗
          </button>
        </div>

        {/* Slider */}
        <Swiper spaceBetween={20} slidesPerView={1.2}>
          {data.map((_, i) => (
            <SwiperSlide key={i}>
              <div className="bg-white text-black p-8 rounded relative">
                <p className="text-gray-600 mb-6">
                  I noticed one thing: it's very productive to discuss a project with people who have technical background.
                </p>
                <div className="flex items-center gap-3">
                  <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full" />
                  <div>
                    <p className="font-semibold">Client Name</p>
                    <p className="text-xs text-gray-500">CUSTOMER</p>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};