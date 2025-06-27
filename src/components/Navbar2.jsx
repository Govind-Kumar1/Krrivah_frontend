import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar2 = () => {
  const navLinks = [
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'DESIGN', path: '/design' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  return (
    <nav className="fixed top-0 z-20 w-full bg-white text-black">
      <div className="flex justify-between items-center px-[5.5vw] py-[2.5vh]">

        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <img src="/Logo (2).png" alt="Logo" className="h-12 w-[200px] object-contain" />
        </div>

        {/* Right: Navigation Links */}
        <div className="flex gap-[4vw] font-sans font-semibold text-[12px] leading-[100%] tracking-[2px] uppercase">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `hover:bg-black hover:text-white b-1  px-4 py-2 rounded-full transition ${
                  isActive ? 'bg-black text-white' : 'text-black'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar2;
