import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav className='fixed top-0 z-20 w-full'>
      <div className="absolute top-0 z-20 w-full flex justify-between items-center px-[5.5vw] pt-[2.5vh] text-black">
      <div className="flex items-center gap-2 -ml-20">
        <Link to="/">
          <img src="/Logo (2).png" alt="Logo" className="h-14 w-[220px] object-contain cursor-pointer" />
        </Link>
      </div>

      <div className="flex gap-[4vw] font-sans font-semibold text-[12px] leading-[100%] tracking-[2px] uppercase">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive ? "bg-black text-white" : "bg-white text-black"
            }`
          }
        >
          ABOUT
        </NavLink>

        <NavLink
          to="/projects"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive ? "bg-black text-white" : "bg-white text-black"
            }`
          }
        >
          PROJECTS
        </NavLink>

        <NavLink
          to="/design"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive ? "bg-black text-white" : "bg-white text-black"
            }`
          }
        >
          DESIGN
        </NavLink>

        <NavLink
          to="/blogs"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive ? "bg-black text-white" : "bg-white text-black"
            }`
          }
        >
          BLOGS
        </NavLink>

        <NavLink
          to="/contact"
          className={({ isActive }) =>
            `px-4 py-3 rounded-full transition-all duration-200 ${
              isActive ? "bg-black text-white" : "bg-white text-black"
            }`
          }
        >
          CONTACT
        </NavLink>
      </div>
    </div>

    </nav>
      );
};

export default Navbar2;
