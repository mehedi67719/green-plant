import React, { useEffect, useState } from 'react';

const Plantcaretips = () => {
 const [careTips,setcareTips]=useState([])


    useEffect(() => {
  fetch('/plantcare.json') 
    .then(res => res.json()) 
    .then(data => setcareTips(data)) 
   
}, []);
    return (
<section className="py-20 px-4 md:px-12 bg-gray-50">
            <div className="max-w-6xl mx-auto">
                
                <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                    Essential Plant Care Tips 
                </h2>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {careTips.map(tip => (
                        <div 
                            key={tip.id} 
                            className="flex flex-col items-center p-8 bg-white rounded-2xl shadow-xl border border-green-100 transition duration-300 hover:shadow-2xl hover:scale-[1.02]"
                        >
                          
                            <div className="text-5xl text-green-600 mb-4 bg-green-50 p-3 rounded-full">
                                {tip.icon}
                            </div>
                            
                           
                            <h3 className="text-xl font-semibold text-gray-900 mb-3 text-center">
                                {tip.title}
                            </h3>
                            
                           
                            <p className="text-base text-gray-600 text-center leading-relaxed">
                                {tip.description}
                            </p>

                             <button className="mt-5 text-sm font-medium text-green-600 hover:text-green-700">
                                Learn More →
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Plantcaretips;