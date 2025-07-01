import React from 'react';

const HeroProject = () => {
  return (
    <section className="bg-white text-black pt-36 px-[5.5vw] mt-20">
      <div className="flex flex-col md:flex-row w-full">

        {/* Left Side - Large Heading */}
        <div className="flex-1">
          <h1 className="text-[100px] md:text-[6vw] leading-[100%] text-[#0B2204] font-light tracking-tight">
            FROM VISION<br />TO FORM
          </h1>
        </div>

        {/* Right Side - Small Description */}
        <div className="flex-1 mt-8 md:mt-0 md:flex md:items-end md:justify-end">
          <div className="max-w-sm w-full">
            <p className="md:-ml-20 text-[15px] text-gray-800 text-right leading-relaxed font-sans">
              Every project is a reflection of thoughtful design, rooted in <br />
              <span className='md:ml-20 block text-left'>purpose and crafted with care.</span>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroProject;
