import React from "react";

const AboutHero = () => {
  return (
    <section
      className="relative w-full h-[750px] bg-cover bg-center bg-no-repeat flex items-center"
      style={{ backgroundImage: "url('/SCENE 16.png')" }} // Make sure this image is placed in your public folder
    >
      {/* Dark overlay for text readability */}
       
       {/* Transparent Dark Overlay */}
      <div className="absolute inset-0 bg-black/44 z-10" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1600px] mx-auto px-6 md:px-20 flex flex-col md:flex-row justify-between items-end h-full pb-24">
        
        {/* Left Text */}
        <div className="text-white max-w-[800px]">
          <h1 className="text-[48px] md:text-[80px] leading-tight font-serif">
            WHERE STORIES <br />
            FIND THEIR SPACE
          </h1>
        </div>

        {/* Right Text */}
        <div className="text-white text-right max-w-[460px]">
          <h2 className="text-[24px] md:text-[28px] font-serif mb-4">
            ROOTED IN PURPOSE. <br /> ELEVATED BY DESIGN.
          </h2>
          <p className="text-sm md:text-base text-gray-200 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur. Egestas purus lobortis nibh
            amet morbi sed at a urna.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
