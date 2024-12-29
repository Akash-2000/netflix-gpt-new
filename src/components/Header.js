import React, {useEffect} from 'react'
import { signOut } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { LOGO } from '../utils/constants'


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  useEffect(()=>{
   const unsubscribe =  onAuthStateChanged(auth, (user) => {
      if (user) {
        
        const {uid, displayName, email, photoURL} = user;
        dispatch(addUser({uid:uid, displayName:displayName, email:email, photoURL:photoURL}))
        navigate("/browse")
        // ...
      } else {
        // User is signed out
        // ...
        dispatch(removeUser())
        navigate("/")
      }
    })
    return () => unsubscribe()
   },[])
  const handleSignOut = () => {
    signOut(auth).then(() => {
      // Sign-out successful.
    }).catch((error) => {
      // An error happened.
      
    });
  }
  return (
    <div className='absolute bg-gradient-to-b from-black w-full h-36 pl-32 pt-5 z-20 flex items-center justify-between'>
        <img src={LOGO} alt='logo' className='w-48'/>
        {user &&<div className='flex p-5'>
          <img className='w-10 h-10 rounded-md mr-2' src={user?.photoURL} alt="profilePic"/>
          <p className='font-bold cursor-pointer text-white' onClick={handleSignOut}>(sign Out)</p>
        </div>}
    </div>
  )
}

export default Header