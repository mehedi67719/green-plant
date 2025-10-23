import React, { use } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { Authcontext } from '../authcontext/Authcontext';
import { updateProfile } from 'firebase/auth';


const Register = () => {

  const {createUser}=use(Authcontext)
   const navigate = useNavigate();


   const handelregister=(e)=>{
    e.preventDefault();
  
    const name=e.target.name.value;
    const email=e.target.email.value;
    const password=e.target.password.value;
    createUser(email,password)
    .then(result=>{
      // console.log(result)
      const user=result.user;
      updateProfile(user,{
        displayName:name
      })
    })
    .then(() => {
        navigate('/home', { replace: true });
      })
    .catch(error=>{
      console.log(error)
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
              <input type="text" className="input" name='name' placeholder="Name" />
              <label className="label">Email</label>
              <input type="email" className="input" name='email' placeholder="Email" />
              <label className="label">Password</label>
              <input type="password" className="input" name='password' placeholder="Password" />
              
              <button className="btn btn-neutral mt-4">Register</button>
            </fieldset>

            <p>if you a account please <NavLink className='text-blue-700 font-bold' to='/login'>Log In</NavLink></p>
         </form>
      </div>
    </div>
  </div>
</div>
    );
};

export default Register;