import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const slides = [
  {
    image: '/pic8.png',
    title: 'CRAFTED FOR LIVING',
    description:
      'Innara creates deeply personal living spaces that inspire and endure—a seamless fusion of natural textures, warm tones, and thoughtful craftsmanship, designed to elevate the modern lifestyle with quiet elegance and meaning.',
    brand: 'INNARA',
  },
  {
    image: '/SCENE 17.png', 
    title: 'Elegance in Every Corner ',
    description:
      'Tucked away in Morjim, La Oceia brings you villa living inspired by Goa’s raw beauty. With fluid architecture and a deep respect for nature, it’s a home that lets you live slow, live light, and live well.',
    brand: 'LA Oceia',
  },
  // {
  //   image: '/SCENE 24.png',
  //   title: 'ELEGANCE REDEFINED', 
  //   description:
  //     'Discover spaces that blend modern architecture with timeless elegance, offering a sanctuary for inspired living.',
  //   brand: 'SERENITY',
  // },
];

const HomeHero = () => {
  const [current, setCurrent] = useState(0);
    const navigate = useNavigate(); // ✅ Step 2

  const handleViewAllClick = () => {
    navigate("/projects");
  };
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full h-screen overflow-hidden text-white">
      {/* Background Image */}
      <img
        src={slides[current].image}
        alt={slides[current].title}
        className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent z-10"></div>

      {/* Desktop Number Indicators */}
      <div className="hidden lg:flex absolute z-20 top-1/2 -translate-y-1/2 left-6 text-[30px] tracking-wide leading-[3rem] flex-col gap-0">
        {slides.map((_, idx) => (
          <div
            key={idx}
            className={
              idx === current
                ? 'text-white font-semibold text-[45px]'
                : 'opacity-40'
            }
          >
            {(idx + 1).toString().padStart(2, '0')}
          </div>
        ))}
      </div>

      {/* Desktop Hero Content */}
      <div className="hidden lg:block absolute z-20 bottom-24 right-[2vw] max-w-[28vw]">
        <h2 className="text-[2rem] font-light mb-6 tracking-wider font-merchant leading-tight">
          {slides[current].title}
        </h2>
        <p className="text-[16px] font-normal leading-5 text-white/90">
          {slides[current].description}
        </p>
        <button onClick={handleViewAllClick} className="mt-14 px-6 py-2 border border-[#E7E9E640] rounded-full text-[16px] tracking-wide hover:bg-[#393F36] hover:text-white transition hover:cursor-pointer">
          LEARN MORE
        </button>
      </div>

      {/* Desktop Brand Text */}
      <div className="hidden lg:block absolute z-20 bottom-20 left-6 font-merchant text-[100px] leading-[80%] tracking-[0px] uppercase">
        {slides[current].brand}
      </div>

      {/* ---------- Mobile View ---------- */}
      <div className="lg:hidden relative z-20 flex flex-col justify-between min-h-screen px-6 py-10">
        {/* Brand Text */}
        <h1 className="mt-24 font-merchant text-7xl font-light leading-tight tracking-wide">
          {slides[current].brand}
        </h1>

        {/* Title */}
        <h2 className="text-4xl font-light uppercase tracking-wide mt-10">
          {slides[current].title}
        </h2>

        {/* Description */}
        <p className="text-[16px] font-light leading-relaxed text-white/90">
          {slides[current].description}
        </p>

        {/* Button + Pagination */}
        <div className="flex items-center justify-between mt-10">
          <button onClick={handleViewAllClick} className="px-6 py-2 border border-gray-500 text-white text-sm font-semibold tracking-wide rounded-full hover:bg-gray-200 transition">
            LEARN MORE
          </button>

          <div className="flex space-x-2">
            {slides.map((_, idx) => (
              <span
                key={idx}
                className={`w-6 h-6 flex items-center justify-center font-semibold rounded-full ${
                  idx === current
                    ? 'text-white text-2xl'
                    : 'text-white/70 text-base'
                }`}
              >
                {(idx + 1).toString().padStart(2, '0')}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeHero;
