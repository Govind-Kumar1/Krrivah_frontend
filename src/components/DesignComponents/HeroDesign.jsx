import React from 'react';

const IntentionSection = () => {
  return (
    <section className="bg-[#2F352D] text-[#ECEDE7] px-6 md:px-16 py-24 md:py-32">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row h-full min-h-[500px]">
        
        {/* Left: Main Heading */}
        <div className="flex-1 flex items-end">
          <h2 className="font-serif text-4xl md:text-6xl leading-tight tracking-wide">
            DESIGNING <br /> WITH <br /> INTENTION
          </h2>
        </div>

        {/* Right: Subheading (2 lines only) + Paragraph */}
        <div className="flex-1 flex flex-col justify-end items-end text-left space-y-4 gap-7">
          <h3 className="font-serif text-lg md:text-2xl leading-snug tracking-normal">
            EACH LINE IS A COMMITMENT<br />
            TO BEAUTY AND PURPOSE.
          </h3>
          <p className="text-sm md:text-base text-[#D3D4C8] leading-relaxed max-w-sm mr-[-20px] ">
            Lorem ipsum dolor sit amet consectetur. Egestas purus lobortis nibh amet morbi sed at a urna.
          </p>
        </div> 

      </div>
    </section>
  );
};

export default IntentionSection;
