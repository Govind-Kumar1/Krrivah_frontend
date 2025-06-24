import React from "react";
import { FaFacebookF, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-100">
      {/* Top Row */}
      <div className="flex flex-col md:flex-row justify-between items-center  md:px-8 py-6 ">
        {/* Logo */}
        <div className="flex items-center  mb-4 md:mb-0 ">
          <img
            src="/Logo.png" // Replace with your logo icon path
            alt="Krrivah Logo"
            className="h-30 w-40 object-contain "
          />
          <span className="font-semibold text-[22px] -ml-20 ">KRRIVAH</span>
        </div>

        {/* Nav Links */}
        <ul className="flex flex-wrap justify-center gap-10 md:gap-26 text-sm font-semibold tracking-wider text-black">
          <li className="hover:text-gray-600 cursor-pointer">ABOUT</li>
          <li className="hover:text-gray-600 cursor-pointer">PROJECTS</li>
          <li className="hover:text-gray-600 cursor-pointer">DESIGN</li>
          <li className="hover:text-gray-600 cursor-pointer">BLOGS</li>
          <li className="hover:text-gray-600 cursor-pointer">CONTACT</li>
        </ul>

        {/* Social Icons */}
        <div className="flex items-center gap-4 mt-4 md:mt-0">
          <a
            href="#"
            className="text-black hover:text-gray-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF size={18} />
          </a>
          <a
            href="#"
            className="text-black hover:text-gray-600 transition"
            aria-label="Instagram"
          >
            <FaInstagram size={18} />
          </a>
        </div>
      </div>

      {/* Bottom Row */}
      <div className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-4 border-t border-gray-100 text-xs text-gray-500">
        <span>© Copyright 2025 Krrivah – All Rights Reserved</span>
        <a href="#" className="hover:underline mt-2 md:mt-0">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
};

export default Footer;
