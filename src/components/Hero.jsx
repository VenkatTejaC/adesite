import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import { Autoplay } from 'swiper/modules';

function Hero() {
  const images = [
    '/images/skills/ade.png',
    '/images/skills/DEcert.png',
  ];

  return (
    <section className="relative w-full h-[300px] md:h-[300px] lg:h-[625px] overflow-hidden m-0 p-0">
      {/* Swiper Background */}
      <Swiper
        modules={[Autoplay]}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="absolute inset-0 h-full w-full z-0"
      >
        {images.map((img, idx) => (
          <SwiperSlide key={idx}>
            <img
              src={img}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black opacity-80 z-10"></div>

      {/* Fixed Navbar */}
      <div className="fixed top-0 left-0 w-full flex justify-between items-center p-4 bg-black bg-opacity-50 text-white z-50">
        <a href="/" className="no-underline text-3xl font-bold hover:text-blue-400">Tej C</a>
        <nav className="space-x-6">
          <a href="/" className="no-underline hover:text-blue-400 font-bold">Home</a>
          <a href="/about-details.html" className="no-underline hover:text-blue-400 font-bold">About Me</a>
          <a href="/projects-details.html" className="no-underline hover:text-blue-400 font-bold">Projects</a>
          <a href="/contact.html" className="no-underline hover:text-blue-400 font-bold">Contact</a>
        </nav>
      </div>

      {/* Center Content */}
      <div className="relative z-20 mt-20 px-4 flex justify-center items-center h-full text-center">
        <div className="bg-white bg-opacity-5 backdrop-blur-sm p-6 rounded-2xl shadow-lg max-w-[800px] mx-auto text-white">
          <p className="text-2xl font-semibold mb-4">Data Engineer</p>
          <p className="text-lg">
            I’m a Data Engineer passionate about turning raw data into trusted, actionable insights. With experience in building scalable data pipelines, designing robust data models, and optimizing data workflows using Azure (Data Factory, DataLake Storage, Databricks, Synapse), I help businesses unlock the full potential of their data. I’m skilled in SQL, Python, Spark, and cloud architecture and I focus on creating secure, efficient, and reliable data solutions. I enjoy mentoring, collaborating with cross-functional teams, and constantly learning to stay ahead in the fast-evolving data space.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
