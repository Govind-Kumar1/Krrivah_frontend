import React from "react";

const VisionSection = () => {
  return (
    <section className="w-full  bg-black text-white px-6 md:px-10 py-10">
      {/* Top Image & Text */}
      <div className="flex flex-col lg:flex-row items-start gap-12">
        {/* Image */}
        <div className="w-full lg:w-2/3">
          <img
            src="/SCENE 2.png" // Replace with your actual image path
            alt="Aerial Vision"
            className="w-full h-[600px] rounded-lg object-cover"
          />
        </div>
          
        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          <p className="text-[18px] tracking-widest text-gray-400 uppercase mb-4">
            Our Vision
          </p>
          <h2 className="relative -left-25 text-4xl md:text-6xl font-merchant text-[#E3E8E0] leading-tight mb-6">
            IN HARMONY WITH <br />
            FORM, LIGHT, AND <br />
            LANDSCAPE.
          </h2>
          <p className="text-sm text-gray-300 leading-relaxed mb-6 max-w-md">
            At the heart of every Krrivah project lies a design-first approach.
            Our process blends architectural heritage with modern living,
            rooted in sustainable materiality, refined aesthetics, and
            intentional spaces.
          </p>
          <button className="self-start bg-white text-[#0B2204] text-sm font-semibold px-5 py-2 rounded-full  transition hover:bg-[#393F36] hover:text-white hover:cursor-pointer">
            GET IN TOUCH
          </button>
        </div>
      </div>

      {/* Bottom Stats */}
      <div className="mt-20 grid grid-cols-1 sm:grid-cols-5 gap-12 text-white text-left">
        <div className="col-span-3">
         
        </div>
        <div>
          <h3 className="text-7xl font-serif mb-2 ">12+</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            years of design expertise shaping refined living environments.
          </p>
        </div>

        {/* 3+ */}
        <div>
          <h3 className="text-7xl font-serif mb-2 ">3+</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            premium amenities crafted for seamless luxury and leisure.
          </p>
        </div>
        {/* 200K */}
        <div>
          <h3 className="text-7xl font-serif mb-2">200K<span className="text-base align-top"> sq. ft.</span></h3>
          <p className="text-sm text-gray-400 max-w-xs">
            of design-first development redefining urban living.
          </p>
        </div>

       <div className="col-span-5">
         
        </div>
        <div className="col-span-2">
         
        </div>

        {/* 100% */}
        <div>
          <h3 className="text-7xl font-serif mb-2 ">100%</h3>
          <p className="text-sm text-gray-400 max-w-xs">
            commitment to timeless architecture, rooted in thoughtful design.
          </p>
        </div>
      </div>
    </section>
  );
};

export default VisionSection;
