import React, { useEffect, useState } from 'react';
import { FaRegStar } from "react-icons/fa";

const AllPlantCard = () => {
  const [plants, setPlants] = useState([]);

  useEffect(() => {
    fetch('/plants.json')
      .then(res => res.json())
      .then(data => setPlants(data))
      .catch(err => console.log(err));
  }, []);

  return (
  <div>
    <h2 className='text-4xl font-bold text-center my-10'>All plant</h2>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 max-w-[90%] mx-auto'>
      {plants.map(plant => (
        <div
          key={plant.plantId}
          className="bg-gray-200 shadow-lg rounded-2xl overflow-hidden hover:shadow-2xl transition duration-300 w-full w-60 mx-auto"
        >
          <img
            src={plant.image}
            alt={plant.plantName}
            className="w-full h-40 object-cover"
          />
          <div className="p-4">
            <h3 className="text-lg font-semibold text-gray-800">{plant.plantName}</h3>
            <p className="text-gray-500 text-sm">{plant.category}</p>
            <div className='flex justify-between items-center mt-1'>
              <p className="text-green-700 font-bold">${plant.price}</p>
              <p className="text-yellow-500 flex items-center font-bold">
                <FaRegStar className="mr-1"/> {plant.rating}
              </p>
            </div>
            <button className="mt-3 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded-lg transition">
              View Details
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
  );
};

export default AllPlantCard;
