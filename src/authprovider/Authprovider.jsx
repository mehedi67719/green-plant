import React, { useEffect, useState } from 'react';
import { Authcontext } from '../authcontext/Authcontext';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from 'firebase/auth';
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
    loader
  }

  return (
    <Authcontext.Provider value={authInfo}>
      {children}
    </Authcontext.Provider>
  );
};

export default Authprovider;
