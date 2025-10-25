import React from 'react';
import Banner from '../banner/Banner';
import Plantexpert from '../plantexpart/Plantexpert';
import Plantcaretips from '../plantcaretips/Plantcaretips';

import Allplants from '../Plants/Allplants';


const Home = () => {
    return (
       <>
        <Banner></Banner>
        <Allplants></Allplants>
        <Plantcaretips></Plantcaretips>
        <Plantexpert></Plantexpert>
        
       </>
    );
};

export default Home;