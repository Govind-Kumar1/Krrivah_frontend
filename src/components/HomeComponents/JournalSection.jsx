import React from "react";
import { ChevronRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

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
    title: "Inside Moira Villas: Goa’s Quietly Sophisticated New Address",
    description:
      "A feature on the cultural and geographical charm of Moira, and why it’s becoming the preferred setting for high-design residences.",
    image: "/SCENE 12.png",
  },
  {
    tag: "DESIGN",
    date: "JUNE 5, 2025",
    title: "Beyond Square Feet: Rethinking Space in Urban Living",
    description:
      "It's not about how much space you have — it's how  meaningfully you design it. Here’s our take on intentional living in compact layo…",
    image: "/SCENE 4.png",
  },
];

const JournalSection = () => {
  const navigate = useNavigate();

  const handleViewAllClick = () => {
    navigate("/projects");
  };

  return (
    <section className="bg-[#EAEDE5] w-full py-10 md:py-24 px-6 md:px-16">
      <div className="flex flex-col xl:flex-row gap-10 xl:gap-20 items-start max-w-[1400px] mx-auto">
        {/* Left Title */}
        <div className="flex-1">
          <p className="text-[18px] text-[#5F5F5F] font-medium mb-10 md:mb-40 uppercase tracking-widest">
            Blog
          </p>
          <h2 className="text-3xl sm:text-[56px] font-serif leading-[1.2] text-[#393F36] mb-12 w-full">
            ARCHITECTURE <br /> & INSIGHTS
          </h2>
          <button
            onClick={handleViewAllClick}
            className="flex items-center text-[#2E2E2E] gap-2 text-sm font-semibold uppercase tracking-wider hover:cursor-pointer"
          >
            View All
            <ChevronRight
              className="border border-gray-400 rounded-full bg-white"
              size={28}
              strokeWidth={2.5}
            />
          </button>
        </div>

        {/* Right Cards Section */}
        <div className="w-full">
          {/* Mobile & Mid-size View: Horizontal Scroll */}
          <div className="xl:hidden w-full overflow-x-auto">
            <div className="flex gap-6 w-max px-2">
              {posts.map((post, index) => (
                <div
                  key={index}
                  className="min-w-[260px] max-w-[300px] w-full bg-white shadow-sm h-[420px] flex-shrink-0 overflow-hidden"
                >
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-[180px] object-cover"
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

          {/* Desktop Grid View */}
          <div className="hidden xl:grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
            {posts.map((post, index) => (
              <div
                key={index}
                className="bg-white overflow-hidden shadow-sm h-[450px] flex flex-col w-full"
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
      </div>
    </section>
  );
};

export default JournalSection;
