import React from "react";
import { authentication } from '../Firebase'
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import Navbar from "./Navbar";

const Login = () => {

  const signInWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    signInWithPopup(authentication, provider)
    .then((re)=> {
      console.log(re);
    })
    .catch((err)=> {
      console.log(err);
    })
    
  }

  return (
    <div>
      <Navbar />
      <button className="px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-200 transform bg-indigo-700 rounded-md hover:bg-indigo-500 hover:scale-105 hover: focus:ring-indigo-300 focus:ring-opacity-80" onClick={signInWithGoogle}>Sign in with google</button>
    </div>
  );
};

export default Login;
