import React, { use } from 'react';
import { Form, Navigate, NavLink, useNavigate } from 'react-router';
import { Authcontext } from '../authcontext/Authcontext';


const Login = () => {

  const {signin}=use(Authcontext);
   const navigate = useNavigate();

    const handellogin=(e)=>{{
        e.preventDefault();
        const email=e.target.email.value;
        const password=e.target.password.value;
        signin(email,password)
        .then(() => {
        navigate('/home', { replace: true }); 
        })
        .then(result=>console.log(result))
        .catch(error => console.log(error));
    }}


    return (
<div className="hero bg-base-200 min-h-screen">
  <div className="hero-content flex-col lg:flex-row-reverse">
    <div className="text-center lg:text-left">
     
    
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <form onSubmit={handellogin}>
            <fieldset className="fieldset">
              <label className="label">Email</label>
              <input type="email" className="input" name='email' placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" name='password' placeholder="Password" />
              <div><a className="link link-hover">Forgot password?</a></div>
              <button className="btn btn-neutral mt-4">Login</button>
            </fieldset>
            <p>If You have no account please <NavLink to='/register' className='text-blue-700 font-bold'>Register</NavLink> </p>
         </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Login;