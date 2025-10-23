import React, { useEffect, useState } from 'react';
import TopPlatns from './TopPlatns';
import { NavLink } from 'react-router';

const Allplants = () => {

    const [plants,setplants]=useState([])

    useEffect(()=>{
        fetch('/plants.json')
        .then(res=>res.json())
        .then(data=>setplants(data))
    },[])


      const topplants=plants
    .sort((a,b)=>b.rating-a.rating)
    .slice(0,8);


  
    return (

        <div >
            <h2 className='text-4xl mt-15 mb-10 text-center font-bold'>Top Rated Indoor Plants</h2>
        <div className='grid grid-cols-4 gap-10 my-10 max-w-[90%] mx-auto w-full'>
             {
                topplants.map(plant=><TopPlatns plant={plant} key={plant.plantId}></TopPlatns>)
            }
           
        </div>
        
            <NavLink to='/plant'><button className='p-2 font-bold bg-green-500 rounded-xl flex max-w-[170px] mx-auto'>All Plants</button></NavLink>
        </div>
    );
};

export default Allplants;