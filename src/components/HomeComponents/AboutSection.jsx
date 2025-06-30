import React from 'react';
import { useNavigate } from "react-router-dom";

const AboutSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full h-full min-h-screen bg-[#e5e6e1] py-[18vh] px-[2vw] font-sans flex items-center">
      <div className="flex w-full gap-22 justify-between items-center h-full"> 
        {/* Left Title Section */}
        <div className="w-[28vw] gap-78 flex flex-col justify-between min-h-full ">
          <h3 className="text-[22px] tracking-wide text-[#5F5F5F] mb-6  basis-1">ABOUT</h3>
          <h2 className="text-[3rem] leading-tight tracking-wide font-serif text-[#2c2f28]">
            ROOTED IN<br />
            DESIGN,<br />
            <span className="inline-block mt-2">DRIVEN BY</span><br />
            PURPOSE.
          </h2>
        </div>

        {/* Center Image */}
        <div className="w-[36vw] flex justify-center h-[80vh]">
          <img 
            src="/SCENE 3.png"
            alt="About Krrivah"
            className="w-[460px] h-[630px] object-cover -mt-5  shadow-md"
          />
        </div>

        {/* Right Description */}
        <div className="self-start w-[29vw] flex flex-col  h-full text-gray-700 text-sm leading-relaxed  ">
          <p className="mb-14 text-[16px] text-[#393F36] leading-5 ">
            Krrivah is more than a development brand — it’s a vision brought to life through architecture. With a passion
            for design and a commitment to quality, we create living spaces 
            that reflect a deeper understanding of form,
            function, and feeling.
          </p>
          <button
            className="self-start px-6 py-2 bg-white rounded-full font-bold text-[16px] shadow-sm hover:hover:bg-[#393F36]  hover:text-white transition"
            onClick={() => navigate("/about")}
          >
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
