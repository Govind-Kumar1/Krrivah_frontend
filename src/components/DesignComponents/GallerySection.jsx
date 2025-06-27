import React from 'react';

const GallerySection = () => {
  return (
    <section className="m-4">
      <div className="grid grid-cols-12 md:grid-cols-12 grid-rows-6 md:grid-rows-6 gap-2 md:gap-2">

        {/* Image 1 */}
        <img src="/pic1.png" alt="Gallery Image 1" className="col-start-1 row-start-1 col-span-3 row-span-2 md:col-start-1 md:row-start-1 md:col-span-3 md:row-span-2 w-full h-full object-cover rounded-md" />

        {/* Image 2 */}
        <img src="/pic2.png" alt="Gallery Image 2" className="col-start-4 row-start-1 col-span-2 row-span-2 md:col-start-4 md:row-start-1 md:col-span-2 md:row-span-2 w-full h-full object-cover rounded-md" />

        {/* Image 3 */}
        <img src="/pic3.png" alt="Gallery Image 3" className="col-start-6 row-start-1 col-span-4 row-span-4 md:col-start-6 md:row-start-1 md:col-span-4 md:row-span-4 w-full h-full object-cover rounded-md" />

        {/* Image 4 */}
        <img src="/pic4.png" alt="Gallery Image 4" className="col-start-10 row-start-1 col-span-3 row-span-2 md:col-start-10 md:row-start-1 md:col-span-3 md:row-span-2 w-full h-full object-cover rounded-md" />

        {/* Image 5 */}
        <img src="/pic5.png" alt="Gallery Image 5" className="col-start-10 row-start-3 col-span-3 row-span-2 md:col-start-10 md:row-start-3 md:col-span-3 md:row-span-2 w-full h-full object-cover rounded-md" />

        {/* Image 6 */}
        <img src="/pic6.png" alt="Gallery Image 6" className="col-start-1 row-start-3 col-span-2 row-span-2 md:col-start-1 md:row-start-3 md:col-span-2 md:row-span-2 w-full h-full object-cover rounded-md" />

        {/* Image 7 */}
        <img src="/pic7.png" alt="Gallery Image 7" className="col-start-1 row-start-5 col-span-2 row-span-2 md:col-start-1 md:row-start-5 md:col-span-2 md:row-span-2 w-full h-full object-cover rounded-md" />

        {/* Image 8 */}
        <img src="/pic8.png" alt="Gallery Image 8" className="col-start-3 row-start-3 col-span-3 row-span-3 md:col-start-3 md:row-start-3 md:col-span-3 md:row-span-3 w-full h-full object-cover rounded-md" />

        {/* Image 9 */}
        <img src="/pic9.png" alt="Gallery Image 9" className="col-start-3 row-start-6 col-span-3 md:col-start-3 md:row-start-6 md:col-span-3 md:row-span-1 w-full h-full object-cover rounded-md" />

        {/* Image 10 */}
        <img src="/pic10.png" alt="Gallery Image 10" className="col-start-6 row-start-5 col-span-3 row-span-2 md:col-start-6 md:row-start-5 md:col-span-3 md:row-span-2 w-full h-full object-cover rounded-md" />

        {/* Image 11 */}
        <img src="/pic11.png" alt="Gallery Image 11" className="col-start-9 row-start-5 col-span-4 row-span-2 md:col-start-9 md:row-start-5 md:col-span-4 md:row-span-2 w-full h-full object-cover rounded-md" />

      </div>
    </section>
  );
};

export default GallerySection;
