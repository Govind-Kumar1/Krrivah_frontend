import React, { useState, useEffect, useRef } from "react";

// Custom hook for interval control
function useInterval(callback, delay) {
  const saved = useRef();
  useEffect(() => { saved.current = callback }, [callback]);
  useEffect(() => {
    if (delay == null) return;
    const id = setInterval(() => saved.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

const images = [
  { src: "/SCENE 2.png", alt: "Scene 2" },
  { src: "/SCENE 3.png", alt: "Scene 3" },
  { src: "/SCENE 24.png", alt: "Scene 24" },
  { src: "/SCENE 17.png", alt: "Scene 17" },
  { src: "/SCENE 16.png", alt: "Scene 16" },
  { src: "/SCENE 4.png", alt: "Scene 4" },
];

const CraftedSection = () => {
  const [start, setStart] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const shiftRight = () => setStart(prev => (prev + 1) % images.length);

  useInterval(shiftRight, isPaused ? null : 2000);

  const carouselImages = Array.from({ length: 4 }, (_, i) =>
    images[(start + i) % images.length]
  );

  return (
    <section className="w-full py-12 flex flex-col items-center bg-white relative">
      <h2 className="relative top-20 text-center text-[40px] md:text-[64px] leading-tight font-serif text-[#1A311E] mb-10">
        CRAFTED WITH PURPOSE. <br /> DEFINED BY DESIGN.
      </h2>

      {/* Carousel */}
      <div className="flex flex-row justify-center gap-4 md:gap-[10px] w-full">
        {carouselImages.map((img, idx) => (
          <div
            key={idx}
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            className={`w-[48%] md:w-[421px] h-[511px] overflow-hidden ${
              idx % 2 === 1 ? "mt-10 flex items-end" : "flex items-start"
            }`}
          >
            <img
              src={img.src}
              alt={img.alt}
              className="w-full h-[511px] object-cover"
            />
          </div>
        ))}
      </div>

      {/* Text + Button */}
      <div className="mt-12 text-center px-4 md:px-0">
        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
          From materials to masterplans, every element is considered. Our
          approach to design is rooted in balance between beauty and utility,
          architecture and experience.
        </p>
        <button className="border border-black text-black font-semibold px-6 py-3 rounded-full hover:bg-black hover:text-white transition">
          EXPLORE ALL PROJECTS
        </button>
      </div>
    </section>
  );
};

export default CraftedSection;
