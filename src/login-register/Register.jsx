import React, { use, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { Authcontext } from '../authcontext/Authcontext';
import { TotpSecret, updateProfile } from 'firebase/auth';
 import { ToastContainer, toast } from 'react-toastify';
 import { FaRegEye } from "react-icons/fa";
 import { FaEyeSlash } from "react-icons/fa";


const Register = () => {

  const[error,seterror]=useState('');
  const [open,setopen]=useState(false);
 

  const {createUser,singinwithgoogle}=use(Authcontext)
   const navigate = useNavigate();

 const  handleicon=()=>{
  setopen(!open)
 }


   const handelregister=(e)=>{
    e.preventDefault();
    seterror('');


    



    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    const photoURL=e.target.photoURL.value


    if(password.length<6){
       seterror('Password must be at least 6 characters long');
       return;
    };
    if(!/[A-Z]/.test(password)){
      seterror('Password must have at least one uppercase letter');
      return;
    }
    if(!/[a-z]/.test(password)){
      seterror('Password must have at least one lowercase letter');
      return;
    }


    
    createUser(email,password)
    .then(result=>{
      // console.log(result)
      const user=result.user;
      updateProfile(user,{
        displayName:name,
        photoURL: photoURL
      })
    })
    .then(() => {
        navigate('/home', { replace: true });
      })
    .catch(error=>{
      seterror(error.message);
      toast(error.message)
    })


   }

   const handelgoogle=()=>{
          singinwithgoogle()
          .then(()=>{
          
            navigate('/home', { replace: true });
            
          })
          .catch(error=>{
            seterror(error.message)
            toast(error.message)
          })
   }

    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <form onSubmit={handelregister}>
          <h2 className='text-2xl font-bold text-center'>signup </h2>
            <fieldset className="fieldset">
              <label className="label">Name</label>
              <input type="text" className="input focus:outline-none" name='name' placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" className="input focus:outline-none" name='email' placeholder="Email" />
              <label className="label">Password</label>

              <div className='flex border border-gray-300   w-full'>
              <input  type={open ? "text" : "password"} className="input border-none focus:outline-none " name='password' placeholder="Password" />
              <button type='button' onClick={handleicon} className=' text-xl p-0.5'> {open?(<FaRegEye />):(<FaEyeSlash />)} </button>
              </div>

              <label className="label">Photo URL</label>
                <input type="text" name='photoURL' className="input focus:outline-none" placeholder="Photo URL" />
              
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>

            <button onClick={handelgoogle} type='button' className="btn bg-white text-black border-[#e5e5e5] my-5 w-full">
             <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
              Login with Google
            </button>

            <p className='text-center text-red-600 font-bold'>{error}</p>

            <p>if you a account please <NavLink className='text-blue-700 font-bold' to='/login'>Log In</NavLink></p>


         </form>
      </div>
    </div>
  </div>
  <ToastContainer />
</div>
    );
};

export default Register;