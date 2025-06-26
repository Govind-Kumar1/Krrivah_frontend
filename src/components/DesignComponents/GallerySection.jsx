import React from 'react';

const GallerySection = () => {
  return (
    <section className="bg-white px-4 md:px-16 py-20 overflow-hidden">

      {/* Image Grid */}
      <div className="grid grid-cols-12 grid-rows-6 gap-3 auto-rows-min md:relative">

        {/* Row 1 - 4 images */}
        <img src="/pic1.png" alt="Gallery Image 1" className="col-span-3 row-span-2 w-full h-[261px] object-cover" />
        <img src="/pic2.png" alt="Gallery Image 2" className="col-span-2 row-span-2 w-full h-[261px] object-cover" />
        <img src="/pic3.png" alt="Gallery Image 3" className="col-span-4 row-span-4 w-full h-[561px] object-cover" />
        <img src="/pic4.png" alt="Gallery Image 4" className="col-span-3 row-span-2 w-full h-[261px] object-cover" />

        {/* Row 2 - 3 images */}
        <img src="/pic5.png" alt="Gallery Image 5" className="col-span-2 row-span-2 w-full h-[259px] object-cover" />
        <img src="/pic6.png" alt="Gallery Image 6" className="col-span-3 row-span-4 w-full h-[409px] object-cover" />
        <img src="/pic7.png" alt="Gallery Image 7" className="col-span-3 row-span-2 w-full h-[259px] object-cover" />

        {/* Row 3 - 4 images */}
        <img src="/pic8.png" alt="Gallery Image 8" className="col-span-2 row-span-2 w-full h-[261px] object-cover" />
        {/* <img src="/pic9.png" alt="Gallery Image 9" className="col-span-1 row-span-1 w-full h-[123px] object-cover" /> */}
        <img src="/pic10.png" alt="Gallery Image 10" className="col-span-3 row-span-2 w-full h-[261px] object-cover" />
        <img src="/pic11.png" alt="Gallery Image 11" className="col-span-4 row-span-2 w-full h-[261px] object-cover" />

      </div>
      
      <img src="/pic9.png" alt="Gallery Image 9" className="md:absolute w-[340px] h-[123px] object-cover md:left-[296px] md:top-[2330px] " />
      {/* Bottom Text + Button */}
      <div className="mt-12 text-center max-w-xl mx-auto space-y-4">
        <p className="text-gray-700 text-base leading-relaxed">
          Lorem ipsum dolor sit amet consectetur. Hac at nibh blandit quis pretium habitant diam. Felis luctus lorem morbi vitae risus. Est tellus purus donec.
        </p>
        <button className="px-6 py-2 border border-black text-black rounded-full text-sm font-medium hover:bg-black hover:text-white transition duration-300">
          GET IN TOUCH
        </button>
      </div>

    </section>
  );
};

export default GallerySection;
