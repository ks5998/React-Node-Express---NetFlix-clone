// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA0PRgyEnWo4RaDjnvIlI2bC58Gm8WvJ5U",
  authDomain: "react-netflix-clone-2a90e.firebaseapp.com",
  projectId: "react-netflix-clone-2a90e",
  storageBucket: "react-netflix-clone-2a90e.appspot.com",
  messagingSenderId: "43717578703",
  appId: "1:43717578703:web:08409a0614cd9eac66ccba",
  measurementId: "G-V7WV0WBVGH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const firebaseAuth = getAuth(app);