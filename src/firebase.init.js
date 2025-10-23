// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC9yaQfNNnungS-7q6zz1syvI_92ME0VEQ",
  authDomain: "plant-shop-429b0.firebaseapp.com",
  projectId: "plant-shop-429b0",
  storageBucket: "plant-shop-429b0.firebasestorage.app",
  messagingSenderId: "663740682643",
  appId: "1:663740682643:web:af2d3eddea15c56bad1866"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);