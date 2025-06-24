// components/Navbar.jsx
import React from 'react';

const Navbar = () => {
  return (
    <div className="absolute top-0 z-20 w-full flex justify-between items-center px-[5.5vw] pt-[2.5vh] text-white">
      <div className="flex items-center gap-2">
        <img src="/Logo.png" alt="Logo" className="h-12 w-[200px] object-contain" />
      </div>

      <div className="flex gap-[4vw] font-sans font-semibold text-[12px] leading-[100%] tracking-[2px] uppercase">
        <a href="/about" className="hover:underline">ABOUT</a>
        <a href="/projects" className="hover:underline">PROJECTS</a>
        <a href="/design" className="hover:underline">DESIGN</a>
        <a href="/blogs" className="hover:underline">BLOGS</a>
        <a href="/contact" className="hover:underline">CONTACT</a>
      </div>
    </div>
  );
};

export default Navbar;
