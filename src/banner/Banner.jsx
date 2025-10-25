import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules'; 
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import banner1 from '../assets/banner1.png';
import banner2 from '../assets/banner2.png';
import banner3 from '../assets/banner3.png';

const slides = [
  { image: banner1, title: 'Nurture Your Sanctuary', button: 'Explore Our Collection' },
  { image: banner2, title: 'Bring Nature Home', button: 'Shop Now' },
  { image: banner3, title: 'Healthy Plants, Happy Life', button: 'Discover More' },
];

const Banner = () => (
  <div className="w-full h-[600px] relative">
    <Swiper
      modules={[Autoplay, Navigation, Pagination]}
      navigation
      pagination={{ clickable: true }}
      autoplay={{ delay: 2500, disableOnInteraction: false }}
      loop
      className="h-full"
      speed={800} 
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="relative w-full h-full">
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover object-center"
            />

      
            <div className="absolute inset-0 bg-black/25"></div>

           
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10 px-6 md:px-20">
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-white drop-shadow-xl mb-6">
                {slide.title}
              </h1>
              <button className="px-10 py-4 bg-white text-gray-800 font-semibold border border-gray-300 rounded-xl shadow-lg hover:bg-gray-100 transition duration-300">
                {slide.button}
              </button>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default Banner;
