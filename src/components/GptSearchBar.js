import React from 'react'
import { useSelector } from 'react-redux'

import { languages } from '../utils/languageConstants'

const GptSearchBar = () => {
  const userLanguage = useSelector((store) => store.config.userlanguage)
  return (
    <div className='z-10 w-full pt-52 '>
      <form className='w-1/2  grid grid-cols-12 gap-2 h-24 m-auto items-center bg-black p-3 rounded-md'>
        <div className='col-span-9'>
          <input type='text' placeholder={languages[userLanguage].placeholder} className='p-4 border w-full rounded-md' />
        </div>
        <div className='col-span-3'>
          <button type='submit' className='bg-red-500 p-4 rounded-md text-white w-full'>
            {languages[userLanguage].button}
          </button>
        </div>
      </form>
    </div>
  )
}

export default GptSearchBar