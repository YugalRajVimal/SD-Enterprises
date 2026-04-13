import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export const WorkShowcase = () => {
  const images = [
    "https://images.unsplash.com/photo-1581092335878-8c6c92f1c1d3",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
    "https://images.unsplash.com/photo-1513828583688-c52646db42da",
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd",
    "https://images.unsplash.com/photo-1503387762-592deb58ef4e",
  ];

  return (
    <section className="bg-[#0f1a23] text-white py-20 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <p className="text-xs tracking-widest text-gray-400 mb-4">
          WHAT WE OFFER
        </p>
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          Works Showcase
        </h2>

        <Swiper spaceBetween={20} slidesPerView={1.2} breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}>
          {images.map((img, i) => (
            <SwiperSlide key={i}>
              <div className="relative group overflow-hidden">
                <img
                  src={img}
                  className="w-full h-[350px] object-cover group-hover:scale-110 transition duration-500"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition flex flex-col justify-end p-6">
                  <p className="text-xs tracking-widest text-gray-300">
                    CONSTRUCTION, WORK
                  </p>
                  <h3 className="text-lg font-semibold">
                    Landscape Design
                  </h3>
                  <span className="text-sm text-orange-400 mt-2">
                    VIEW MORE →
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};
