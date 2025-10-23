import {   use,   useState } from 'react';
import logo from '../assets/logo.png';
import { NavLink } from 'react-router';
import { Authcontext } from '../authcontext/Authcontext';
import { RxAvatar } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { signOut } from 'firebase/auth';
import { auth } from '../firebase.init';

const Navbar = () => {
  const { user } = use(Authcontext);
  const [open, setopen] = useState(false);

  const handelarrow = () => setopen(!open);

  const handleLogout = () => {
    signOut(auth)
      .then(() => console.log("User logged out"))
      .catch(error => console.log(error));
  }

  return (
    <header className="flex justify-between items-center px-4 md:px-12 py-4 bg-white shadow-sm border-b border-gray-100 relative">
      
      <NavLink to='/home'>
        <div className="flex items-center space-x-2 text-xl font-bold text-green-700">
          <img src={logo} className='w-20' alt="logo" />
          <span>GreenNest</span>
        </div>
      </NavLink>

      <nav className="hidden md:flex space-x-8">
        <NavLink to="/home" className="text-gray-600 hover:text-green-700 font-medium transition duration-150">Home</NavLink>
        <NavLink to="/plant" className="text-gray-600 hover:text-green-700 font-medium transition duration-150">Plants</NavLink>
        <NavLink to="/userinfo" className="text-gray-600 hover:text-green-700 font-medium transition duration-150">My profile</NavLink>

      </nav>

      {user ? (
        <div className='relative'>
          <button className='flex items-center space-x-1 text-3xl text-green-700' onClick={handelarrow}>
            <RxAvatar />
            <IoIosArrowDown className={`transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
          </button>

          {open && (
            <div className='absolute right-0 mt-2 w-48 bg-white border rounded-lg shadow-lg p-3 flex flex-col gap-2 z-10'>
              <p className='font-semibold text-gray-800'>Name: {user?.displayName}</p>
              <button
                className='px-3 py-2 bg-red-600 text-white rounded-lg font-bold hover:bg-red-700'
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="flex items-center space-x-3">
          <NavLink to='/login'>
            <button className="px-5 py-2 border border-green-600 text-green-600 font-semibold rounded-lg hover:bg-green-50 transition duration-150">Login</button>
          </NavLink>
          <NavLink to='/register'>
            <button className="px-5 py-2 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition duration-150">Register</button>
          </NavLink>
        </div>
      )}
    </header>
  );
};

export default Navbar;
