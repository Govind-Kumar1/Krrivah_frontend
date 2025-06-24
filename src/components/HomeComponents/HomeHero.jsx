import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
	{
		image: '/SCENE 12.png',
		title: 'CRAFTED FOR LIVING',
		description:
			'Innara creates deeply personal living spaces that inspire and endure—a seamless fusion of natural textures, warm tones, and thoughtful craftsmanship, designed to elevate the modern lifestyle with quiet elegance and meaning.',
		brand: 'INNARA',
	},
	{
		image: '/SCENE 17.png', 
		title: 'DESIGNED FOR YOU',
		description:
			'Experience a new dimension of comfort and style with our bespoke villas, where every detail is crafted for your unique lifestyle.',
		brand: 'KRRIVAH',
	},
	{
		image: '/SCENE 24.png',
		title: 'ELEGANCE REDEFINED',
		description:
			'Discover spaces that blend modern architecture with timeless elegance, offering a sanctuary for inspired living.',
		brand: 'SERENITY',
	},
];

const HomeHero = () => {
	const [current, setCurrent] = useState(0);

	const prevSlide = () =>
		setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
	const nextSlide = () =>
		setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

	return (
		<div className="relative w-full h-screen overflow-hidden text-white">
			{/* Background Image */}
			<img
				src={slides[current].image}
				alt={slides[current].title}
				className="absolute inset-0 w-full h-full object-cover z-0 transition-all duration-700"
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/44 z-10" />

			{/* Carousel Navigation Arrows at Center Bottom */}
			<div className="absolute z-20 bottom-12 left-1/2 -translate-x-1/2 flex gap-6">
				<button
					onClick={prevSlide}
					className="bg-black/40 hover:bg-black/70 rounded-full p-2"
					aria-label="Previous Slide"
				>
					<ChevronLeft size={32} />
				</button>
				<button
					onClick={nextSlide}
					className="bg-black/40 hover:bg-black/70 rounded-full p-2"
					aria-label="Next Slide"
				>
					<ChevronRight size={32} />
				</button>
			</div>

			{/* Slide Number Indicators */}
			<div className="absolute z-20 top-1/2 -translate-y-1/2 left-6 text-[30px] tracking-wide leading-[3rem] flex flex-col gap-0">
				{slides.map((_, idx) => (
					<div
						key={idx}
						className={
							idx === current
								? 'text-white font-semibold text-[45px]'
								: 'opacity-40'
						}
					>
						{(idx + 1).toString().padStart(2, '0')}
					</div>
				))}
			</div>

			{/* Hero Content */}
			<div className="absolute z-20 bottom-24 right-[6vw] max-w-[28vw] ">
				<h2 className="text-[2rem] font-light mb-6 tracking-wider leading-tight">
					{slides[current].title}
				</h2>
				<p className="text-sm font-light leading-relaxed text-white/90">
					{slides[current].description}
				</p>
				<button className="mt-6 px-6 py-2  border border-white rounded-full text-sm tracking-wide hover:bg-white hover:text-black transition">
					LEARN MORE
				</button>
			</div>

			{/* Brand Text */}
			<div className="absolute z-20 bottom-20 left-6 font-merchant text-[100px] leading-[80%] tracking-[0px] uppercase">
				{slides[current].brand}
			</div>
		</div>
	);
};

export default HomeHero;
