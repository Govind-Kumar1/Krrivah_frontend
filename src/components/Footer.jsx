import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center  md:px-8 py-6 ">
        {/* Logo */}
        <div className="flex items-center mb-4 md:mb-0">
          <Link to="/">
            <img
              src="/Logo (2).png"
              alt="Krrivah Logo"
              className="h-30 w-40 object-contain cursor-pointer"
            />
          </Link>
           
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-10 md:gap-26 text-sm font-semibold tracking-wider text-[#0E0E0E]">
          <li>
            <Link to="/about" className="hover:text-gray-600 cursor-pointer">ABOUT</Link>
          </li>
          <li>
            <Link to="/projects" className="hover:text-gray-600 cursor-pointer">PROJECTS</Link>
          </li>
          <li>
            <Link to="/design" className="hover:text-gray-600 cursor-pointer">DESIGN</Link>
          </li>
          <li>
            <Link to="/blogs" className="hover:text-gray-600 cursor-pointer">BLOGS</Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-600 cursor-pointer">CONTACT</Link>
          </li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-10 mt-4 md:mt-0">
          <a
            href="https://facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="https://instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-800 hover:text-gray-600 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-4 border-t border-gray-300 text-xs text-gray-500">
        <span>© Copyright 2025 Krrivah – All Rights Reserved</span>
        <Link to="/privacy-policy" className="hover:underline mt-2 md:mt-0">
          Privacy Policy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;