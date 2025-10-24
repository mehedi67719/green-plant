import React, { use, useRef } from 'react';
import { Authcontext } from '../authcontext/Authcontext';
  import { ToastContainer, toast } from 'react-toastify';


const Forget = () => {

  const emailraf=useRef();
    const {resetpassword}=use(Authcontext)

const handelforgatepassword=(e)=>{ 
  e.preventDefault();
     const email=emailraf.current.value;
     resetpassword(email)
     .then(
      toast('chake your mail and reset password and then Login')
     )
     .catch(error=>{
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
       <form onSubmit={handelforgatepassword}>
            <fieldset className="fieldset">
            <label className="label">Email</label>
            <input type="email" name='email' ref={emailraf} className="input" placeholder="Email" />   
            <button  className="btn btn-neutral mt-4">send code</button>
            </fieldset>
       </form>
      </div>
    </div>
  </div>
   <ToastContainer />
</div>
    );
};

export default Forget;