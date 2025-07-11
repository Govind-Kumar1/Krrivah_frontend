import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LocationIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    viewBox="0 0 24 24"
    className="inline-block mr-1 mb-[2px]"
  >
    <g fill="none">
      <path d="..." /> {/* Truncated for brevity */}
      <path
        fill="currentColor"
        d="M12 2a9 9 0 0 1 9 9c0 3.074-1.676 5.59-3.442 7.395..."
      />
    </g>
  </svg>
);

const projects = [
  {
    title: "INNARA",
    image: "/SCENE 17.png",
    tags: ["Villas & Apartments", "Moira, Goa"],
    description:
      "Innara creates inspiring spaces — a mix of textures, warm tones, and craftsmanship for modern elegance.",
  },
  {
    title: "KRRIVAH",
    image: "/SCENE 24.png",
    tags: ["Luxury Villas", "Siolim, Goa"],
    description:
      "Krrivah blends modern architecture with nature, offering tranquil living in the heart of Goa.",
  },
  {
    title: "SERENITY",
    image: "/SCENE 4.png",
    tags: ["Apartments", "Anjuna, Goa"],
    description:
      "Serenity offers peaceful homes with contemporary design and lush surroundings.",
  },
];

const FeaturedProjects = () => {
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();

  const prevProject = () => {
    setCurrent((prev) => (prev === 0 ? projects.length - 1 : prev - 1));
  };

  const nextProject = () => {
    setCurrent((prev) => (prev === projects.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="w-full py-24">
      {/* Header */}
      <div className="flex justify-between items-center mb-18 px-10">
        <h2 className="text-[14px] lg:text-xl font-medium tracking-widest text-[#5F5F5F] uppercase">
          Featured Projects
        </h2>
        <button className="text-sm font-semibold border border-gray-400 lg:h-[40px] w-[103px] rounded-full text-[#0B2204] px-4 py-2 hover:bg-[#393F36] hover:cursor-pointer hover:text-white">
          VIEW ALL
        </button>
      </div>

      {/* Carousel */}
      <div className="relative flex items-end gap-40 justify-center">
        {/* Previous Project (Left) */}
        <div className="w-[420px] h-[600px] relative overflow-hidden hidden lg:block">
          <img
            src={
              projects[(current - 1 + projects.length) % projects.length].image
            }
            alt="Project Left"
            className="w-full h-full object-cover"
          />
          <h3 className="absolute text-[28px] z-20 font-serif">
            {projects[current].title}
          </h3>

          <div className="flex gap-2 text-xs font-semibold uppercase tracking-wide mb-4 flex-wrap">
            {projects[current].tags.map((tag, idx) => (
              <span
                key={idx}
                className="rounded-full px-3 py-[6px] flex items-center gap-1"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* Current Project (Center) */}
        <div className="w-full max-w-[460px] flex flex-col mx-auto">
          <div className="relative w-full h-[520px] lg:h-[600px] px-4 lg:px-0 overflow-hidden">
            <img
              src={projects[current].image}
              alt={projects[current].title}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-0 left-0 w-full p-6 z-10">
              <h3 className="text-[36px] leading-tight text-white font-serif mb-4">
                {projects[current].title}
              </h3>

              <div className="flex gap-2 text-xs font-semibold uppercase tracking-wide mb-4 flex-wrap">
                {projects[current].tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="gap-2 px-3 py-[6px] rounded-full border border-white backdrop-blur-[5px] text-white flex items-center text-[12px]"
                  >
                    {tag.toLowerCase().includes("goa") && <LocationIcon />}
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="absolute inset-0" />
          </div>

          {/* Description + Button */}
          <div className="w-full bg-white text-black p-6 flex flex-col items-center gap-4 lg:flex-row">
            <p className="lg:-ml-5 text-[14px] text-[#0E0E0E] leading-[1.5] text-center lg:text-left">
              {projects[current].description}
            </p>
            <button
              className="w-[280px] border border-gray-300 text-sm font-semibold text-[#0B2204] hover:bg-[#393F36] hover:text-white px-4 py-3 rounded-full transition hover:cursor-pointer"
              onClick={() => navigate("/ProjectDetails")}
            >
              LEARN MORE
            </button>
          </div>
        </div>

        {/* Next Project (Right) */}
        <div className="w-[420px] h-[600px] overflow-hidden shadow-md hidden lg:block">
          <img
            src={projects[(current + 1) % projects.length].image}
            alt="Project Right"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center items-center mt-10 lg:mt-14 gap-4">
        <button
          className="w-8 h-8 rounded-full border border-gray-400 flex items-center justify-center bg-gray-300 text-gray-700 hover:bg-gray-100"
          onClick={prevProject}
        >
          <ChevronLeft size={22} strokeWidth={3} />
        </button>

        <button
          className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center"
          onClick={nextProject}
        >
          <ChevronRight size={24} strokeWidth={2.5} />
        </button>
      </div>
    </section>
  );
};

export default FeaturedProjects;
