import React, { useEffect, useState } from 'react';



const Plantexpert = () => {


const [experts,setexperts]=useState([])

     useEffect(() => {
  fetch('/plantexpert.json')
    .then(res => res.json())
    .then(data => setexperts(data))
}, []);

return(
<section className="py-16 px-4 md:px-12 bg-white">
      <div className="max-w-6xl mx-auto bg-green-50 p-8 md:p-12 rounded-2xl shadow-inner">
      
          
          <div className="lg:col-span-2 border-l border-green-200 lg:pl-10">
            <h3 className="text-xl font-semibold text-center text-green-700 mb-6">
              Meet Our Green Experts
            </h3>
            <div className="flex justify-around space-x-4">
              {experts.map((expert, index) => (
                <div key={index} className="flex flex-col items-center text-center w-1/3">
                  
                  <div className="w-20 h-20 bg-white border-4 border-green-300 rounded-full flex items-center justify-center mb-2 shadow-md overflow-hidden">
                    <img src={expert.image} className='text-3xl' alt="" />
                  </div>
                  <p className="font-semibold text-gray-800">{expert.name}</p>
                  {expert.title && (
                     <p className="text-xs text-green-600 mt-1">{expert.title}</p>
                  )}
                </div>
              ))}
            </div>
          </div>

        </div>
   
    </section>
);
};

export default Plantexpert;