import React from "react";

const OurRoots = () => {
  return (
    <section className="bg-[#EAE8E5] w-full px-6 md:px-16 py-20">
      <div className="max-w-[1500px] mx-auto flex flex-col lg:flex-row gap-12 items-start">
        
        {/* Left Content */}
        <div className="flex-1">
          <p className="text-sm uppercase tracking-wide text-gray-700 mb-4">
            Our Roots
          </p>
          <h2 className="text-[44px] md:text-[52px] leading-tight font-serif text-[#2B2B2B] mb-6">
            THE STORY <br /> BEHIND <br /> KRRIVAH
          </h2>
          <p className="text-sm font-semibold text-[#2B2B2B] mb-3">
            Krrivah is more than a real estate venture — it’s a philosophy of thoughtful living.
          </p>
          <p className="text-[15px] text-gray-700 leading-relaxed mb-6 max-w-md">
            Born from the desire to blend conscious design with purposeful development, Krrivah crafts spaces that respect land, elevate lifestyle, and build long-term value. With deep roots in South India’s cultural and architectural heritage, we strive to create environments where every brick tells a story — of craft, community, and care.
          </p>
          <button className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:shadow-md transition-all">
            GET IN TOUCH
          </button>
        </div>

        {/* Right Content with image layering */}
        <div className="relative flex-1 w-full h-auto">
          <img
            src="/SCENE-BG.png" // Background B&W aerial image
            alt="Background"
            className="w-full rounded-md"
          />
          <img
            src="/SCENE-INTERIOR.png" // Foreground couch window scene
            alt="Interior"
            className="absolute top-[30%] left-[20%] w-[300px] h-auto rounded shadow-lg"
          />
        </div>
      </div>

      {/* Stats Row */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
        {[
          {
            title: "12+",
            subtitle: "years of design expertise shaping refined living environments.",
          },
          {
            title: "3+",
            subtitle: "premium amenities crafted for seamless luxury and leisure.",
          },
          {
            title: "200K",
            superscript: "sq. ft.",
            subtitle: "of design-first development redefining urban living.",
          },
          {
            title: "100%",
            subtitle: "commitment to timeless architecture, rooted in thoughtful design.",
          },
        ].map((item, idx) => (
          <div
            key={idx}
            className="bg-white border border-gray-200 rounded-md p-6 text-center"
          >
            <div className="text-[36px] font-serif text-[#2B2B2B] mb-2">
              {item.title}
              {item.superscript && (
                <sup className="text-sm ml-1 align-top">{item.superscript}</sup>
              )}
            </div>
            <p className="text-sm text-gray-600">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurRoots;
