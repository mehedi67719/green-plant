import React, { use, useState } from 'react';
import { updateProfile } from 'firebase/auth';
import { Authcontext } from '../authcontext/Authcontext';
import { ToastContainer, toast } from 'react-toastify';

const Userinfo = () => {
  const { user,setUser } = use(Authcontext); 
  const [showForm, setShowForm] = useState(false);
  const [name, setName] = useState('');
  const [img, setImg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    updateProfile(user, {
      displayName: name,
      photoURL: img,
    })
      .then(() => {
        setShowForm(false); 
        setUser({
            ...user,
            displayName:name,
            photoURL:img,
        })
        
        toast(' Update successful!');
        
      })
      .catch((error) => {
        toast(error.message);
      });
  };

  return (
    <div className='my-5'>
     
      <div className="flex flex-col justify-center items-center my-10 gap-5">
        <img
          className="w-[300px] h-[300px] rounded-full"
          src={user?.photoURL || 'No photo'}
          alt="user"
        />
        <h2 className="text-3xl font-bold">Name: {user?.displayName || 'No Name'}</h2>
        <p>Email: {user?.email}</p>
      </div>

     
      <div className="flex flex-col items-center gap-4">
        {showForm ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center gap-3 border p-5 rounded-lg shadow-lg"
          >
            <input
              type="text"
              placeholder="Enter new name"
              className="border p-2 rounded w-64"
              onChange={(e) => setName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Enter new photo URL"
              className="border p-2 rounded w-64"
              onChange={(e) => setImg(e.target.value)}
            />
            <div className="flex gap-3">
              <button
                type="submit"
                className="bg-green-500 text-white px-4 py-2 rounded"
              >
                Save
              </button>
              <button
                type="button"
                onClick={() => setShowForm(false)}
                className="bg-gray-400 text-white px-4 py-2 rounded"
              >
                Cancel
              </button>
            </div>
          </form>
        ) : (
          <button
            onClick={() => setShowForm(true)}
            className="bg-blue-500 text-white px-4 py-2 rounded"
          >
            Update Profile
          </button>
        )}
      </div>
       <ToastContainer />
    </div>
  );
};

export default Userinfo;
