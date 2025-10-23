import React from 'react';
import banner from '../assets/banner.png'

const Banner = () => {
    return (
<div className="relative w-full h-[600px] overflow-hidden">
      

      <img
        src={banner} 
        alt="Indoor plants and living room sanctuary"
        className="w-full h-full object-cover object-center"
      />

      
      <div className="absolute inset-0 flex items-center justify-start z-10 px-4 md:px-20">
        <div className="max-w-xl text-left">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-gray-800 leading-tight mb-6">
            Nurture Your Sanctuary
          </h1>
          <button className="px-8 py-3 bg-white text-gray-800 font-semibold border border-gray-300 rounded-lg shadow-md hover:bg-gray-100 transition duration-300">
            Explore Our Collection
          </button>
        </div>
      </div>
      
    </div>
    );
};

export default Banner;