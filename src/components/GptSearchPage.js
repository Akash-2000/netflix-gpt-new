import React from 'react'
import GptMovieSuggestions from './GptMovieSuggestions'
import GptSearchBar from './GptSearchBar'
import { BACKGROUND_IMAGE } from '../utils/constants'

const GptSearchPage = () => {
  return (
    <div>
        <div className='fixed -z-10'>
            <img src={BACKGROUND_IMAGE}
            alt="backgroundImage"
            
            />
        </div>
        <GptSearchBar/>
        <GptMovieSuggestions/>
    </div>
  )
}

export default GptSearchPage