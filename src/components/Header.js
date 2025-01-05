import React, {useEffect} from 'react'
import { signOut } from 'firebase/auth'

import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { onAuthStateChanged } from 'firebase/auth'
import { useDispatch } from 'react-redux'

import { auth } from '../utils/firebase'
import { addUser, removeUser } from '../utils/userSlice'
import { toggleGPTpage } from '../utils/GptSlice'
import { LANGUAGE_OPTIONS, LOGO } from '../utils/constants'
import { updateLanguage } from '../utils/configsSlice'

const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((store) => store.user)
  const showGPTSearch = useSelector((store) => store.gpt.showGPTpage)
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

  const toggleGPTPage = () => {
    dispatch(toggleGPTpage())
  }

  const onLanguageChange = (e) => {
    dispatch(updateLanguage(e.target.value))
  }

  return (
    <div className='absolute  bg-gradient-to-b from-black w-full h-36 md:pl-32 pt-5 z-20 flex  flex-col md:flex-row items-center justify-between'>
        <img src={LOGO} alt='logo' className='w-48'/>
        {user &&
        <>
        <div className='flex p-5'>
          {showGPTSearch &&
        <select name='language' className='rounded-md' onChange={onLanguageChange}>
          {LANGUAGE_OPTIONS?.map((language,index) => 
          <option value={language.idenitfier} key={index}>{language.value}</option>
          )}
        </select>}
        <div className='px-4 py-2 bg-purple-800 text-white rounded-lg mx-3 cursor-pointer' onClick={toggleGPTPage}>
          <p>GPT search</p>
        </div>
          <img className='w-10 h-10 rounded-md mr-2' src={user?.photoURL} alt="profilePic"/>
          <p className='font-bold cursor-pointer text-white' onClick={handleSignOut}>(sign Out)</p>
        </div>
        </>}
    </div>
  )
}

export default Header