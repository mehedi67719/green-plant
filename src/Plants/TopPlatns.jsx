import React from 'react';
import { FaRegStar } from "react-icons/fa";
const TopPlatns = ({plant}) => {
  





    return (
        <div className="bg-gray-200 w-full shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 w-60 p-4">
     
      <img
        src={plant.image} 
        alt={plant.plantName}
        className="w-full h-40 object-cover"
      />

      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{plant.plantName}</h3>
        <p className="text-gray-500 text-sm">{plant.category}</p>
        <div className='flex justify-between items-center'>
        <p className="text-green-700 font-bold mt-1">${plant.price}</p>
        <p className="text-yellow-500 mt-1 flex items-center font-bold"><FaRegStar /> {plant.rating}</p>
        </div>

        <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
          View Details
        </button>
      </div>
    </div>
    );
};

export default TopPlatns;