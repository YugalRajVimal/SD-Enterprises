import React from 'react';
import { motion } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import { FaPhone, FaEnvelope, FaArrowRight } from 'react-icons/fa';
import { IoMenu, IoClose } from 'react-icons/io5';
import {
  FaFileAlt,
  FaHardHat,
  FaHome,
  FaTools,
  FaRedoAlt,
  FaCog,
} from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// ============ NAVBAR COMPONENT ============
const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex items-center gap-2"
          >
            <div className="w-8 h-8 bg-gray-900 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">B</span>
            </div>
            <span className="font-bold text-xl text-gray-900">bygge</span>
          </motion.div>

          <div className="hidden md:flex items-center gap-8">
            {['HOME', 'ABOUT', 'SERVICES', 'BLOG', 'FEATURES', 'CONTACT US'].map((item, idx) => (
              <motion.a
                key={item}
                href="#"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className={`text-sm font-semibold ${
                  item === 'SERVICES' ? 'text-orange-500' : 'text-gray-700'
                } hover:text-orange-500 transition-colors`}
              >
                {item}
              </motion.a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-gray-600"
            >
              <FaPhone className="w-4 h-4 text-orange-500" />
              <span className="text-sm">+800 123 456 789</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex items-center gap-2 text-gray-600"
            >
              <FaEnvelope className="w-4 h-4 text-orange-500" />
              <span className="text-sm">INFO@CODELESS.CO</span>
            </motion.div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-2 bg-white border-2 border-gray-900 text-gray-900 font-bold rounded-full hover:bg-gray-900 hover:text-white transition-all"
            >
              GET A QUOTE
            </motion.button>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-gray-900 text-2xl"
          >
            {isOpen ? <IoClose /> : <IoMenu />}
          </button>
        </div>

        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden pb-4 border-t border-gray-200"
          >
            {['HOME', 'ABOUT', 'SERVICES', 'BLOG', 'FEATURES', 'CONTACT US'].map((item) => (
              <a
                key={item}
                href="#"
                className="block py-2 text-sm font-semibold text-gray-700 hover:text-orange-500"
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </div>
    </nav>
  );
};

// ============ HERO SECTION COMPONENT ============
const HeroSection = () => {
  return (
    <section className="relative h-96 overflow-hidden bg-gradient-to-r from-gray-900/80 to-gray-900/40">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("/Images/img15.jpeg")',
        }}
      />
      <div className="absolute inset-0 bg-black/50" />

      <div className="relative h-full flex flex-col justify-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-white/80 text-sm font-semibold mb-2">Home • Services</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4">
            Services
          </h1>
        </motion.div>
      </div>
    </section>
  );
};

// ============ WHAT WE OFFER SECTION ============
const WhatWeOfferSection = () => {
  const services = [
    'Landscape Design',
    'Rural Management',
    'Rural Management Planning',
    'Urban Planning',
    'Construction Management',
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-orange-500 font-semibold text-sm mb-4">WHAT WE OFFER</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              Providing solutions for construction, management, and restoration.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a long-established, independent building services and home improvements company.
              We have a wealth of experience working as main building contractors on all kinds of
              projects, big and small, from home maintenance and improvements to extensions,
              refurbishments and new builds.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all inline-flex items-center gap-2"
            >
              VIEW MORE
              <span>→</span>
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            {services.map((service, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="flex items-center gap-4 pb-6 border-b border-gray-200 last:border-b-0"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-orange-100">
                    <span className="text-orange-500 font-bold text-lg">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service}</h3>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ WORKS SHOWCASE SECTION ============
const WorksShowcaseSection = () => {
  const works = [
    {
      title: 'Rural Management',
      category: 'CONSTRUCTION, WORK',
      image: '/Images/img9.jpeg',
    },
    {
      title: 'Urban Development',
      category: 'CONSTRUCTION, PLANNING',
      image: '/Images/img31.jpeg',
    },
    {
      title: 'Landscape Design',
      category: 'DESIGN, PLANNING',
      image: '/Images/img17.jpeg',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <p className="text-orange-500 font-semibold text-sm mb-4">WHAT WE DO</p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">Works Showcase</h2>
          <p className="text-gray-400 max-w-3xl">
            We have a wealth of experience working as main building contractors on all kinds of
            projects, big and small, from home maintenance and improvements to extensions,
            refurbishments and new builds.
          </p>
        </motion.div>

        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="mt-12"
        >
          {works.map((work, idx) => (
            <SwiperSlide key={idx}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64 overflow-hidden group">
                  <img
                    src={work.image}
                    alt={work.title}
                    className="  w-full mx-auto object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors" />
                </div>
                <div className="p-6">
                  <p className="text-xs font-semibold text-gray-500 mb-2">{work.category}</p>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{work.title}</h3>
                  {/* <motion.button
                    whileHover={{ x: 5 }}
                    className="text-orange-500 font-semibold text-sm inline-flex items-center gap-2 hover:gap-3 transition-all"
                  >
                    VIEW MORE
                    <FaArrowRight className="w-4 h-4" />
                  </motion.button> */}
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

// ============ COMPANY DATA SECTION ============
const CompanyDataCard = ({ icon: Icon, value, label, description }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg border border-gray-200"
    >
      <div className="flex items-center gap-4 mb-4">
        <Icon className="w-8 h-8 text-orange-500" />
        <h3 className="text-3xl font-bold text-gray-900">{value}</h3>
      </div>
      <p className="text-gray-600 font-semibold mb-2">{label}</p>
      <p className="text-gray-500 text-sm">{description}</p>
    </motion.div>
  );
};

const CompanyDataSection = () => {
  const data = [
    {
      icon: FaHome,
      value: '150+',
      label: 'Projects',
      description: 'We have a wealth of experience working as main building contractors.',
    },
    {
      icon: FaHardHat,
      value: '80+',
      label: 'Clients',
      description: 'We have a wealth of experience working as main building contractors.',
    },
    {
      icon: FaTools,
      value: '200+',
      label: 'Professionals',
      description: 'We have a wealth of experience working as main building contractors.',
    },
    {
      icon: FaRedoAlt,
      value: '98%',
      label: 'Satisfaction',
      description: 'We have a wealth of experience working as main building contractors.',
    },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <img
              src="/Images/img26.jpeg"
              alt="Company data"
              className="w-full rounded-lg shadow-lg"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-orange-500 font-semibold text-sm mb-4">WHAT WE DO</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">Company Data</h2>
            <div className="grid grid-cols-2 gap-6">
              {data.map((item, idx) => (
                <CompanyDataCard
                  key={idx}
                  icon={item.icon}
                  value={item.value}
                  label={item.label}
                  description={item.description}
                />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ SERVICE CARD COMPONENT ============
const ServiceCard = ({ number, icon: Icon, title, description, isHighlight }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -5 }}
      className={`relative p-8 rounded-lg transition-all ${
        isHighlight
          ? 'bg-orange-500 text-white shadow-xl'
          : 'bg-white border border-gray-200 text-gray-900 hover:shadow-lg'
      }`}
    >
      <div className={`text-sm font-semibold mb-4 ${isHighlight ? 'text-orange-100' : 'text-gray-500'}`}>
        {String(number).padStart(2, '0')}.
      </div>
      <Icon className={`w-8 h-8 mb-4 ${isHighlight ? 'text-white' : 'text-orange-500'}`} />
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      {/* <motion.button
        whileHover={{ x: 5 }}
        className={`mt-4 font-semibold text-sm inline-flex items-center gap-2 ${
          isHighlight ? 'text-white' : 'text-gray-900'
        }`}
      >
        VIEW MORE
        <FaArrowRight className="w-3 h-3" />
      </motion.button> */}
    </motion.div>
  );
};

const FeaturedServicesSection = () => {
  const services = [
    {
      number: 1,
      icon: FaFileAlt,
      title: 'Preconstruction',
      isHighlight: false,
    },
    {
      number: 2,
      icon: FaHardHat,
      title: 'Construction',
      isHighlight: false,
    },
    {
      number: 3,
      icon: FaHome,
      title: 'Restoration',
      isHighlight: false,
    },
    {
      number: 4,
      icon: FaTools,
      title: 'Reconstruction',
      isHighlight: false,
    },
    {
      number: 5,
      icon: FaCog,
      title: 'Consulting',
      isHighlight: true,
    },
    {
      number: 6,
      icon: FaRedoAlt,
      title: 'Special Projects',
      isHighlight: false,
    },
  ];

  return (
    <section className="relative py-16 sm:py-24 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage:
            'url("https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=1200&h=600&fit=crop")',
        }}
      />
      <div className="absolute inset-0 bg-gray-900/60" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-white"
        >
          <p className="text-orange-400 font-semibold text-sm mb-4">WHAT WE OFFER</p>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">Featured Services</h2>
          <p className="max-w-3xl">
            We have a wealth of experience working as main building contractors on all kinds of
            projects, big and small, from home maintenance and improvements to extensions,
            refurbishments and new builds.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, idx) => (
            <ServiceCard
              key={idx}
              number={service.number}
              icon={service.icon}
              title={service.title}
              isHighlight={service.isHighlight}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

// ============ PARTNERS SECTION ============
const PartnerCard = ({ name, logo }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="bg-white p-8 rounded-lg border border-gray-200 flex items-center justify-center overflow-hidden"
    >
      <img src={logo} alt={name} className="object-cover" />
    </motion.div>
  );
};

const PartnersSection = () => {
  const partners = [
    {
      name: 'ColorHomes',
      logo: '/Images/img6.jpeg'
    },
    {
      name: 'TwinHouses',
      logo: '/Images/img7.jpeg'
    },
    {
      name: 'Woodware',
      logo: '/Images/img8.jpeg'
    },
    {
      name: 'Greentechs',
      logo: '/Images/img9.jpeg'
    },
    // {
    //   name: 'Accenco',
    //   logo: '/Images/img10.jpeg'
    // },
    // {
    //   name: 'Forestics',
    //   logo: '/Images/img11.jpeg'
    // },
  ];

  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-start justify-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className='my-auto'
          >
            <p className="text-orange-500 font-semibold text-sm mb-4">MEET OUR PARTNERS</p>
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              You are in a great company.
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              We are a long-established, independent building services and home improvements
              company. We have a wealth of experience working as main building contractors on all
              kinds of projects, big and small, from home maintenance and improvements to
              extensions, refurbishments and new builds.
            </p>
            {/* <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-500 hover:text-white transition-all inline-flex items-center gap-2"
            >
              VIEW MORE
              <span>→</span>
            </motion.button> */}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 gap-6"
          >
            {partners.map((partner, idx) => (
              <PartnerCard key={idx} name={partner.name} logo={partner.logo} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

// ============ MAIN SERVICES PAGE COMPONENT ============
const ServicesPage = () => {
  return (
    <div className="bg-white">
      <HeroSection />
      <WhatWeOfferSection />
      <WorksShowcaseSection />
      <CompanyDataSection />
      <FeaturedServicesSection />
      <PartnersSection />
    </div>
  );
};

export default ServicesPage;