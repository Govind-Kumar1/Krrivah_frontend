import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

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

  // For infinite loop effect
  const shiftLeft = () => {
    setStart((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const shiftRight = () => {
    setStart((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  // Arrange images in carousel order 
  const getCarouselImages = () => {
    return [
      images[start % images.length],
      images[(start + 1) % images.length],
      images[(start + 2) % images.length],
      images[(start + 3) % images.length],
    ];
  };

  const carouselImages = getCarouselImages();

  return (
    <section className="w-full py-12 flex flex-col items-center bg-white relative">
      {/* Heading */}
      <h2 className="relative top-20 text-center text-[40px] md:text-[64px] leading-tight font-serif text-[#1A311E] mb-10">
        CRAFTED WITH PURPOSE. <br /> DEFINED BY DESIGN.
      </h2>

      {/* Carousel Images */}
      <div className="flex flex-row justify-center gap-4 md:gap-[10px] w-full">
        {carouselImages.map((img, idx) => (
          <div
            key={idx}
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

      {/* Carousel Navigation Arrows at Bottom Center */}
      <div className="absolute left-1/2 -translate-x-1/2 bottom-8 flex gap-6 z-20">
        <button
          onClick={shiftLeft}
          className="bg-black/40 text-white hover:bg-black/70 rounded-full p-2"
          aria-label="Previous"
        >
          <ChevronLeft size={32} />
        </button>
        <button
          onClick={shiftRight}
          className="bg-black/40 text-white hover:bg-black/70 rounded-full p-2"
          aria-label="Next"
        >
          <ChevronRight size={32} />
        </button>
      </div>
    </section>
  );
};

export default CraftedSection;
