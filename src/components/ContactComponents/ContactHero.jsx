import React from 'react';

export default function ContactHero() {
  return (
    <section className=" relative bg-[#1A150F] text-[#EAE8E0] px-6 py-24 md:py-36">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2">
        {/* Left Side - Heading */}
        <div>
          <h1 className="text-5xl md:text-7xl leading-[1.1] font-light tracking-tight">
            LET’S TALK <br /> SPACES
          </h1>
        </div>

        {/* Right Side - Paragraph */}
        <div className="flex items-end justify-start md:justify-end mt-10 md:mt-0">
          <p className="max-w-md text-sm text-[#D4D1C7]">
            Whether you’re looking to collaborate, have an enquiry, or just want to say hello—we’d love to hear from you.
          </p>
        </div>
      </div>
    </section>
  );
}