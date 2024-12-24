import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true)

  const handleSiginForm = () => {
    setIsSignInForm(!isSignInForm)
  }
  return (
    <div>
        <Header/>
        <div className='absolute'>
            <img src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_large.jpg"
            alt="backgroundImage"/>
        </div>
        <div className='bg-black absolute left-0 right-0 top-36 w-1/5 m-auto p-7 bg-opacity-80'>
          <p className='font-bold text-2xl text-white'>{isSignInForm?"Sign In" : "Sign Up"}</p>
          <form>
            {!isSignInForm && ( <input type='text' className='p-2 my-3 w-full bg-gray-600 rounded-md' placeholder='Enter name'/>)}
            <input type='email' className='p-2 my-3 w-full bg-gray-600 rounded-md' placeholder='Enter email'/>
            <input type='password' className='p-2 my-3 w-full bg-gray-600 rounded-md' placeholder='Enter password'/>
            <button type='submit' className='p-2 my-6 bg-red-500 w-full rounded-lg'>{isSignInForm?"Sign In" : "Sign Up"}</button>
          </form>
          <p className='text-white cursor-pointer my-7'onClick={handleSiginForm}>{isSignInForm ? "New to netflix? sign up" :"Already have an account Sign In"}</p>
        </div>
    </div>
  )
}

export default Login