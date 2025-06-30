import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";

const posts = [
  {
    tag: "DESIGN",
    date: "JUNE 5, 2025",
    title: "Why Design Thinking Matters in Real Estate",
    description:
      "From intuitive layouts to natural light flow, design thinking is transforming how we imagine modern living. Here's how we inte…",
    image: "/SCENE 17.png",
  },
  {
    tag: "PROJECTS",
    date: "JUNE 5, 2025",
    title: "Inside Moira Villas: The Art of Material Harmony",
    description:
      "Explore the textures, tones, and finishes that make Moira Villas a study in material balance — from taupe floors to bronze fixtures.",
    image: "/SCENE 12.png",
  },
  {
    tag: "DESIGN",
    date: "JUNE 5, 2025",
    title: "Beyond Square Feet: Rethinking Space in Urban Living",
    description:
      "It's not about how much space you have — it's how meaningfully you design it. Here’s our take on intentional living in compact layo…",
    image: "/SCENE 4.png",
  },
];

const JournalSection = () => {
  return (
    <section className="bg-[#EAEDE5] w-full py-24 px-6 md:px-16">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 items-start">
        {/* Left Title */}
        <div className="flex-1">
          <p className="text-[18px] gap-40 text-[#5F5F5F] font-medium mb-40 uppercase tracking-widest">
            Journal
          </p>
          <h2 className="text-[56px] font-serif leading-[1.2] text-[#393F36] mb-12">
            BEYOND <br /> BLUEPRINTS.
          </h2>
          <button className="flex items-center text-[#2E2E2E] gap-3 text-sm font-semibold uppercase tracking-wider">
            View All
            <span className="w-8 h-8 rounded-full text-[20px] bg-white text-black flex items-center justify-center text-sm">
               <ChevronRight size={24} strokeWidth={2.5} /> 
            </span>
          </button>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-full">
          {posts.map((post, index) => (
            <div
              key={index}
              className="bg-white overflow-hidden shadow-sm w-[300px] h-[450px] flex flex-col"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-[220px] object-cover"
              />
              <div className="p-5 flex-1 flex flex-col">
                <p className="text-xs font-semibold uppercase text-[#393F36] mb-2 tracking-wide">
                  {post.tag}
                  <span className="text-[#828282]"> • {post.date}</span>
                </p>
                <h3 className="text-md font-semibold text-[#2E2E2E] mb-2">
                  {post.title}
                </h3>
                <p className="text-sm text-[#5F5F5F] leading-relaxed">
                  {post.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalSection;
