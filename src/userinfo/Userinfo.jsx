import React, { use } from 'react';
import { Authcontext } from '../authcontext/Authcontext';

const Userinfo = () => {

    const {user}=use(Authcontext)
    // console.log(user)
    return (
        <div className='flex flex-col justify-center items-center'>
            <h2 className='text-4xl font-bold'>Name : {user.displayName}</h2>
            <p >Email : {user.email}</p>
        </div>
    );
};

export default Userinfo;