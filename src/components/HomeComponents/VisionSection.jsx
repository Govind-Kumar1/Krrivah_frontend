import React from "react";
 
import StatCard from "../HomeComponents/StartCard.jsx"; // Adjust the path if needed

const VisionSection = () => {
  return (
    <section className="w-full bg-black text-white px-6 lg:px-10 py-10">
      {/* Top Image & Text */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 sm:gap-12">
        {/* Image */} 
        <div className="w-full lg:w-2/3 flex justify-center">
          <img
            src="/SCENE 2.png" 
            alt="Aerial Vision"
            className="w-[350px] lg:w-full h-[250px] lg:h-[500px] rounded-lg object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 text-left flex flex-col mt-6 lg:mt-0 items-start">
          <p className="text-[16px] lg:text-[18px] tracking-widest text-gray-400 uppercase mb-2 sm:mb-4">
            Our Vision
          </p>
          <h2 className="relative text-2xl sm:text-3xl lg:text-4xl xl:text-6xl font-merchant text-[#E3E8E0] leading-tight mb-4 sm:mb-6">
 
            IN HARMONY WITH <br />
            FORM, LIGHT, AND <br />
            LANDSCAPE.
          </h2>
 
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed mb-4 sm:mb-6 w-full max-w-[420px] break-words">
            At the heart of every Krrivah project lies a design-first approach.
            Our process blends architectural heritage with modern living, rooted
            in sustainable materiality, refined aesthetics, and intentional
            spaces.
          </p>
          <button className="bg-white text-[#0B2204] text-xs sm:text-sm font-semibold px-4 sm:px-5 py-2 rounded-full transition hover:bg-[#393F36] hover:text-white hover:cursor-pointer">
 
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Bottom Stats */}
 
      <div className="mt-20 text-white text-left">
        {/* Mobile View */}
        <div className="grid grid-cols-2 gap-8 sm:hidden">
          <StatCard end={12} suffix="+" label="years of design expertise shaping refined living environments." fontSize="text-4xl" />
          <StatCard end={3} suffix="+" label="premium amenities crafted for seamless luxury and leisure." fontSize="text-4xl" />
          <StatCard end={200} suffix="K sq. ft." label="of design-first development redefining urban living." fontSize="text-4xl" />
          <StatCard end={100} suffix="%" label="commitment to timeless architecture, rooted in thoughtful design." fontSize="text-4xl" />
        </div>

        {/* Desktop View */}
        <div className="hidden sm:grid grid-cols-3 md:grid-cols-4 grid-rows-3 md:grid-rows-1 gap-2 md:gap-2 m-4">
          <StatCard end={12} suffix="+" label="years of design expertise shaping refined living environments." />
          <StatCard end={3} suffix="+" label="premium amenities crafted for seamless luxury and leisure." />
          <StatCard
            end={200}
            suffix="K sq.ft."
            label="of design-first development redefining urban living."
            fontSize="text-4xl lg:text-6xl"
          />
          <StatCard end={100} suffix="%" label="commitment to timeless architecture, rooted in thoughtful design." />
        </div>
      </div>
 
    </section>
  );
};

export default VisionSection;
