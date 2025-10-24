
import Navbar from '../navbar/Navbar';
import { Outlet } from 'react-router';
import Footer from '../footer/Footer';
import { ToastContainer } from 'react-toastify';

const Root = () => {
    return (
     <>
     <Navbar></Navbar>
     <Outlet></Outlet>
     <Footer></Footer>
     <ToastContainer />
     </>
    );
};

export default Root;