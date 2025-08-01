import React from "react";
import StatCard from "../HomeComponents/StartCard.jsx"; // Adjust the path if needed

const OurRoots = () => {
  return (
    <section className="bg-[#EAE8E5] w-full px-6 lg:px-10 py-20">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-12 items-start">

        {/* Left Content */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-wide text-gray-700 mb-4">
            Our Roots
          </p>
          <h2 className="text-[44px] lg:text-[58px] leading-tight font-serif text-[#2B2B2B] mb-12">
            THE STORY<br /> BEHIND <br /> KRRIVAH
          </h2>
          <p className="text-sm font-semibold text-[#2B2B2B] mb-14">
            At Krrivah we believe in the philosophy of thoughtful living.

          </p>
          <p className="text-[15px] text-gray-700 leading-relaxed mb-3 max-w-lg">
            Born from a desire to blend conscious design with purposeful development, Krrivah builds spaces that honour land, elevate lifestyle, and hold long-term value. Every element reflects intention, shaped with craft, care, and a sense of belonging.

          </p>
          <button className="px-5 py-2 mt-6 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#393F36] hover:text-white hover:cursor-pointer transition">
            GET IN TOUCH
          </button>
        </div>

        {/* Right Image Layer */}
        <div className="relative pl-10 lg:pl-0 lg:w-[708px] lg:h-[760px]">
          <img
            src="/SCENE 3.png"
            alt="Background"
            className="w-[275px] h-[294px] lg:w-full lg:h-full filter grayscale"
          />
          <img
            src="/SCENE 8V1.png"
            alt="Interior"
            className="absolute object-cover top-[25%] -left-4 lg:-left-[20%] w-[127px] h-[167px] lg:w-[328px] lg:h-[430px] shadow-lg"
          />
        </div>
      </div>

      {/* Stats Row using StatCard */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-20">
        <StatCard
          end={12}
          suffix="+"
          label="years of design expertise shaping refined living environments."
          fontSize="text-4xl"
          textColor="text-[#2B2B2B]"
        />
        <StatCard
          end={3}
          suffix="+"
          label="premium amenities crafted for seamless luxury and leisure."
          fontSize="text-4xl"
          textColor="text-[#2B2B2B]"
        />
        <StatCard
          end={200}
          suffix="K sq. ft."
          label="of design-first development redefining urban living."
          fontSize="text-4xl"
          textColor="text-[#2B2B2B]"
        />
        <StatCard
          end={100}
          suffix="%"
          label="commitment to timeless architecture, rooted in thoughtful design."
          fontSize="text-4xl"
          textColor="text-[#2B2B2B]"
        />
      </div>
    </section>
  );
};

export default OurRoots;
