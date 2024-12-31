import React, { useRef, useState } from 'react'
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile  } from "firebase/auth";
import { useDispatch } from 'react-redux';



import Header from './Header'
import { checkValidate } from '../utils/validate'
import { auth } from '../utils/firebase'
import { addUser } from '../utils/userSlice';
import { BACKGROUND_IMAGE, USER_AVATAR } from '../utils/constants';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)
  const [error, setError] = useState()
  const dispatch = useDispatch()

  const email = useRef()
  const password = useRef()
  const name = useRef()

  const handleSiginForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  const handleFormSubmit = (e) =>{
    e.preventDefault()

    // Email and password
    console.log(email.current.value)
    console.log(password.current.value)

    // validate
    const message = checkValidate(email.current.value, password.current.value)
    setError(message)
    if(message) return

    if(!isSignInForm){
      const message = checkValidate(email.current.value, password.current.value,name.current.value)
      setError(message)
      if(message) return
      createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            updateProfile(user, {
              displayName: name.current.value, photoURL: USER_AVATAR
            }).then(() => {
              // Profile updated!
              const {uid, displayName, email,photoURL} = auth.currentUser
              dispatch(addUser({uid,displayName,email,photoURL}))
            }).catch((error) => {
              // An error occurred
              // ...
            });

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode+"- "+errorMessage)
        });
    }else{
      signInWithEmailAndPassword(auth, email.current.value, password.current.value)
          .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // ...

          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            setError(errorCode+"- "+errorMessage)
          });
    }
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src={BACKGROUND_IMAGE}
            alt="backgroundImage"/>
        </div>
        <div className='bg-black absolute left-0 right-0 top-36 w-1/5 m-auto p-7 bg-opacity-80'>
          <p className='font-bold text-2xl text-white'>{isSignInForm?"Sign In" : "Sign Up"}</p>
          <form onSubmit={handleFormSubmit}>
            {!isSignInForm && ( <input type='text' ref={name} className='p-2 my-3 w-full bg-gray-600 rounded-md' placeholder='Enter name'/>)}
            <input type='email' ref={email} className='p-2 my-3 w-full bg-gray-600 rounded-md' placeholder='Enter email'/>
            <input type='password' ref={password} className='p-2 my-3 w-full bg-gray-600 rounded-md' placeholder='Enter password'/>
            
            <button type='submit' className='p-2 my-6 bg-red-500 w-full rounded-lg'>{isSignInForm?"Sign In" : "Sign Up"}</button>
            <p className='text-red-400'>{error}</p>
          </form>
          <p className='text-white cursor-pointer my-7'onClick={handleSiginForm}>{isSignInForm ? "New to netflix? sign up" :"Already have an account Sign In"}</p>
        </div>
    </div>
  )
}

export default Login