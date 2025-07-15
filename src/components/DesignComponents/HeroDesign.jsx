import React from 'react';
import Navbar from '../Navbar';
const IntentionSection = () => {
  return (
 
    <section className="bg-[#2F352D] realtive text-[#ECEDE7] max-w-full py-50 lg:py-12  min-h[80vh] lg:min-h-[100vh] flex flex-row items-end ">
      <Navbar/>
      <div className=" flex flex-col justify-between w-full lg:flex-row h-full gap-20  min-h-[180px] px-4">

        {/* Left: Main Heading */}
        <div className="w-full basis-1/2  ">
          <h2 className="font-merchant   text-[70px] lg:text-[100px] leading-16 lg:leading-24 text-[#E3E8E0]">
 
            DESIGNING WITH <br /> INTENTION
          </h2>
        </div>

        {/* Right: Subheading + Paragraph */}
 
        <div className="w-full basis-1/2  flex flex-col justify-between  gap-4 lg:gap-7  pt-20 lg:pt-0 lg:py-6   "> 
          <h3 className="font-serif text-xl sm:text-lg lg:text-3xl leading-snug tracking-normal">
            EACH LINE IS A COMMITMENT<br />
            TO BEAUTY AND PURPOSE.
          </h3>   
          <p className="text-sm sm:text-base lg:text-base text-[#D3D4C8] leading-relaxed max-w-sm">
 
            Lorem ipsum dolor sit amet consectetur. Egestas purus lobortis nibh amet morbi sed at a urna.
          </p>
        </div>

      </div>
    </section>
  );
};

export default IntentionSection;
