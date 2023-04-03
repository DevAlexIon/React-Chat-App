import React from 'react'
import firebase from 'firebase/compat/app';
import { auth } from '../firebase';

const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }


  return (
    <div className='bg-hero bg-cover h-screen flex flex-wrap'>
      <div className='flex flex-col items-center m-auto space-y-10 bg-black bg-opacity-60 text-white p-5 rounded-xl'>
        <h1 className='text-3xl'>Welcome to my React Chat Application</h1>
        <button onClick={signInWithGoogle} className="focus:outline-none  bg-red-700 hover:bg-red-800 focus:ring-4 delay-100 focus:ring-red-300 font-medium rounded-lg text-lg px-5 py-2.5 mr-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Sign In With Google</button>

      </div>
    </div>
  )
}

export default SignIn;