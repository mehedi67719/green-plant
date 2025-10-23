
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';

const Root = () => {
    return (
     <>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
     
     </>
    );
};

export default Root;