import React from 'react';

const DesignSection = () => {
  return (
    <section className="bg-white text-black px-4 md:px-16 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">

        {/* Left Column - Heading */}
        <div className="space-y-6">
          <h4 className="text-sm uppercase tracking-wider text-black">Design Philosophy</h4>
          <h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-tight tracking-normal text-[#3E3B36]">
            DESIGNS <br /> THAT LIVE <br /> BEYOND THE <br /> BLUEPRINT
          </h2>
        </div>

        {/* Middle Column - Large Image */}
        <div className="flex justify-center">
          <img
            src="/Layer_1.png"  // ✅ Update with your correct public path
            alt="Architectural Blueprint Section"
            className="max-w-[700px] lg:max-w-[800px] xl:max-w-[900px] h-auto object-contain"
          />
        </div>

        {/* Right Column - Text and Button */}
        <div className="flex flex-col space-y-5 text-gray-800">
          <p className="text-base leading-relaxed">
            At Krrivah, design is not just how a space looks — it’s how it makes you feel.
          </p>
          <p className="text-base leading-relaxed">
            We take cues from the land, the light, and the legacy of the region to shape built environments that blend form and function with cultural relevance. Our architectural approach weaves together local materials, climate responsiveness, and timeless spatial planning.
          </p>
          <p className="text-base leading-relaxed">
            From open courtyards that breathe to textures that age gracefully — every decision is a quiet nod to balance, longevity, and livability.
          </p>

          <button className="mt-4 px-6 py-2 border border-[#2F352D] text-[#2F352D] rounded-full text-sm font-medium hover:bg-[#2F352D] hover:text-white transition duration-300 w-fit">
            LEARN MORE
          </button>
        </div>

      </div>
    </section>
  );
};

export default DesignSection;
