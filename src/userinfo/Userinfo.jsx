import React, { use } from 'react';
import { Authcontext } from '../authcontext/Authcontext';

const Userinfo = () => {

    const {user}=use(Authcontext)
    // console.log(user)
    return (
        <div className='flex flex-col justify-center items-center my-10 gap-5'>
            <img className='w-[500px] h-[500px] rounded-full' src={user.photoURL} alt="" />
            <h2 className='text-4xl font-bold'>Name : {user?.displayName}</h2>
            <p >Email : {user.email}</p>
        </div>
    );
};

export default Userinfo;