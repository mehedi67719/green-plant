import React, { useEffect, useState } from 'react';
import TopPlatns from './TopPlatns';
import { NavLink } from 'react-router';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

const Allplants = () => {
  const [plants, setplants] = useState([]);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    fetch('/plants.json')
      .then(res => res.json())
      .then(data => {
        setplants(data);
        setloading(false);
      })
      .catch(() => setloading(false));
  }, []);

  if (loading) {
    return <LoadingSpinner />;
  }


  const sortedPlants = [...plants].sort((a, b) => b.rating - a.rating);


  const topplants = sortedPlants.slice(0, 8);

 
  const bestPlant = sortedPlants[0];

  return (
    <div>
      
      <section className="bg-green-100 py-10 px-6 rounded-2xl shadow-md max-w-[90%] mx-auto my-12 text-center transition hover:shadow-2xl">
        <h2 className="text-4xl font-bold text-green-700 mb-6"> Plant of the Week</h2>
        <img
          src={bestPlant.image}
          alt={bestPlant.plantName}
          className="w-60 h-60 mx-auto object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
        />
        <h3 className="text-2xl font-semibold mt-4">{bestPlant.plantName}</h3>
        <p className="text-gray-700 mt-2">{bestPlant.category}</p>
        <p className="text-green-700 font-bold text-lg mt-2">${bestPlant.price}</p>
        <p className="text-yellow-600 font-semibold mt-1"> {bestPlant.rating}</p>
        <NavLink to={`/plant/${bestPlant.plantId}`}>
          <button className="mt-4 bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition">
            View Details
          </button>
        </NavLink>
      </section>

      
      <h2 className="text-4xl mt-15 mb-10 text-center font-bold">Top Rated Indoor Plants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 my-10 max-w-[90%] mx-auto w-full">
        {topplants.map(plant => (
          <TopPlatns plant={plant} key={plant.plantId} />
        ))}
      </div>

      <NavLink to="/plant">
        <button className="p-2 font-bold bg-green-500 hover:bg-green-600 rounded-xl flex max-w-[170px] mx-auto transition">
          All Plants
        </button>
      </NavLink>
    </div>
  );
};

export default Allplants;
