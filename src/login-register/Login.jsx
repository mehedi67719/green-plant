import React, { use, useState } from 'react';
import { Form, Navigate, NavLink, useNavigate } from 'react-router';
import { Authcontext } from '../authcontext/Authcontext';
  import {  toast } from 'react-toastify';
   import { FaRegEye } from "react-icons/fa";
 import { FaEyeSlash } from "react-icons/fa";


const Login = () => {
  const [error,seterror]=useState('')
  const {signin}=use(Authcontext);
   const navigate = useNavigate();

   const [open,setopen]=useState(false);

const  handleicon=()=>{
  setopen(!open)
 }

    const handellogin=(e)=>{{
        e.preventDefault();
        seterror('')
        const email=e.target.email.value;
        const password=e.target.password.value;
        signin(email,password)
        .then(() => {
          toast('Login Successful');
        navigate('/home', { replace: true }); 
        })
        .then(result=>
          console.log(result))

        .catch(error => {
           seterror(error.message);
          toast(error.message);
        }
        );
    }}



 
    return (
<div className="hero bg-base-200 min-h-screen">
  
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <form onSubmit={handellogin}>
          <h2 className='text-2xl font-bold text-center'>Login</h2>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input focus:outline-none" name='email' placeholder="Email" />
              <label className="label">Password</label>
              <div className='flex border border-gray-300   w-full'>
              <input  type={open ? "text" : "password"} className="input border-none focus:outline-none " name='password' placeholder="Password" />
              <button type='button' onClick={handleicon} className=' text-xl p-0.5'> {open?(<FaRegEye />):(<FaEyeSlash />)} </button>
              </div>
              <NavLink to='/forget'><div><a className="link link-hover">Forgot password?</a></div></NavLink>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>

            <p className='text-center my-1.5 text-red-700 font-bold'>{error}</p>
            <p>If You have no account please <NavLink to='/register' className='text-blue-700 font-bold'>Register</NavLink> </p>
         </form>
      </div>
    </div>
  </div>
  
</div>
    );
};

export default Login;