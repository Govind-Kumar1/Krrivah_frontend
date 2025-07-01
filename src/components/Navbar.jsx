import React from 'react';
import { NavLink, useLocation, Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { name: 'ABOUT', path: '/about' },
    { name: 'PROJECTS', path: '/projects' },
    { name: 'DESIGN', path: '/design' },
    { name: 'BLOGS', path: '/blogs' },
    { name: 'CONTACT', path: '/contact' },
  ];

  const getLinkClass = (isActive) => {
    const isHome = location.pathname === '/';
    const isAbout = location.pathname === '/about';

    if (isHome) {
      return `px-4 py-3 rounded-full transition underline-offset-8  
        ${isActive ? 'bg-black text-white' : 'text-white'}
        hover:bg-[#393F36] text-white b-2`;
    }

    if (isAbout) {
      return `px-4 py-2 rounded-full transition underline-offset-8 decoration-2
        ${isActive ? 'bg-white text-black' : 'text-white'}
        hover:bg-white hover:text-gray-400`;
    }

    // Default styling for other pages
    return `px-4 py-2 rounded-full transition underline-offset-8 decoration-2
      ${isActive ? 'bg-black text-white' : 'text-white'}
      hover:bg-black hover:text-white`;
  };

  return (
    <nav className="fixed top-0 z-20 w-full">
      <div className="flex justify-between items-center px-[5.5vw] py-[2.5vh]">

        {/* Left: Logo */}
        <div className="flex items-center gap-2 -ml-20">
          <Link to="/">
            <img src="/Logo.png" alt="Logo" className="h-14 w-[220px] object-contain cursor-pointer" />
          </Link>
        </div>

        {/* Right: Navigation Links */}
        <div className="flex gap-[4vw] font-sans font-semibold text-[12px] leading-[100%] tracking-[2px] uppercase">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) => getLinkClass(isActive)}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;