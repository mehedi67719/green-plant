import React, { useEffect, useState } from 'react';
import { Authcontext } from '../authcontext/Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth } from '../firebase.init';

const Authprovider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loader, setloader] = useState(true);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signin = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  }

const resetpassword=(email)=>{
  return sendPasswordResetEmail(auth,email)
}

const singinwithgoogle=()=>{
  const provider=new GoogleAuthProvider();
  return signInWithPopup(auth,provider)

}

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      setloader(false);
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    createUser,
    signin,
    user,
    loader,
    setUser,
    resetpassword,
    singinwithgoogle,

  }

  return (
    <Authcontext.Provider value={authInfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
