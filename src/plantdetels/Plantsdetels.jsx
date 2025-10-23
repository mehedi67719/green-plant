

  import { ToastContainer, toast } from 'react-toastify';
import { FaRegStar } from "react-icons/fa";
import { useParams } from "react-router";
import { useEffect, useState } from 'react';

const Plantsdetels = () => {
  const { id } = useParams();
  const [plant, setPlant] = useState(null);

  useEffect(() => {
    fetch("/plants.json")
      .then((res) => res.json())
      .then((data) => {
        const foundPlant = data.find((p) => p.plantId === parseInt(id));
        setPlant(foundPlant);
      })
      .catch((error) => console.log(error));
  }, [id]);

  if (!plant) {
    return (
      <p className="text-center mt-10 text-lg text-gray-600">
        Loading plant details...
      </p>
    );
  }

  
  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success(" Consultation booked successfully!");
    e.target.reset();
  };

  return (
    <div className="max-w-4xl mx-auto my-12 bg-white shadow-lg rounded-2xl p-6">
    

      <div className="flex flex-col md:flex-row gap-8">
        <img
          src={plant.image}
          alt={plant.plantName}
          className="w-full md:w-1/2 h-80 object-cover rounded-2xl shadow-md"
        />

        <div className="flex-1 space-y-3">
          <h2 className="text-4xl font-bold text-green-800">
            {plant.plantName}
          </h2>
          <p className="text-gray-700 text-base leading-relaxed">
            {plant.description}
          </p>
          <p className="text-gray-600 font-medium">
            Category:{" "}
            <span className="text-green-700 font-semibold">
              {plant.category}
            </span>
          </p>
          <p className="text-yellow-500 font-semibold flex items-center gap-2.5"><FaRegStar /> Rating: {plant.rating}</p>
          <p className="text-green-700 font-bold text-xl">
            Price: ${plant.price}
          </p>
          <p
            className={`font-semibold ${
              plant.stock > 0 ? "text-green-600" : "text-red-500"
            }`}
          >
            Stock:{" "}
            {plant.stock > 0 ? `${plant.stock} available` : "Out of stock"}
          </p>
        </div>
      </div>

      
      <div className="mt-10 bg-green-50 p-6 rounded-xl shadow-inner">
        <h3 className="text-2xl font-bold text-green-700 mb-4">
          Book Consultation
        </h3>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Name
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
          >
            Book Now
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Plantsdetels;
