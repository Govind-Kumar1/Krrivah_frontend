import React from "react";

export default function Hero() {
  return (
    <section className="relative w-full h-[471px] bg-white text-white overflow-hidden px-6 flex flex-col justify-end pb-20">
      <div className="max-w-screen-xl mx-auto w-full flex flex-col lg:flex-row justify-between items-end">
        <p style={{ color: '#0B2204' }} className="text-[80px]  font-light leading-none tracking-tight text-green-#0B2204">
          OUR JOURNAL
        </p>
        <p className="max-w-md text-sm lg:text-base text-gray-800 font-normal leading-snug lg:mb-4">
          Whether you’re looking to collaborate, have an enquiry, or just want
          to say hello—we’d love to hear from you.
        </p>
      </div>
    </section>
  );
}