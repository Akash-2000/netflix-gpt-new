import React, { useRef } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { completeChat } from '../utils/GPTconnect'

import { languages } from '../utils/languageConstants'
import { MODEL_NAME } from '../utils/constants'
import { addRecommendedMovies } from '../utils/GptSlice'
import { updateRecommendationLoading } from '../utils/GptSlice'
import useMovieSearch from '../hooks/useSearchMovies'

const GptSearchBar = () => {
  const dispatch = useDispatch()
  const userLanguage = useSelector((store) => store.config.userlanguage)
  const searchTerm = useRef(null)
  const movieSearch = useMovieSearch
  
  //handle GPT search
  const handleGPTsearch = async(e) => {
    e.preventDefault()
    //searchTerm
   

    //cloud flare ai integrations
  try {
    dispatch(updateRecommendationLoading())
    const completion = await completeChat(MODEL_NAME, {
      messages: [
        {
          role: "system",
          content: "You are a  movie recommendation system",
        },
        {
          role: "user",
          content:
            "Act as a movie recommendation system. I will provide you with a genre name, and your task is to return a list of 5 popular movies that fit within this genre. Provide only the names of the movies in a comma-separated list (no extra text). For example, if the genre is 'Action', you might respond like this: gilli,kodi,mariyan,naiyyandi,asuran. Now, based on the genre ' "+searchTerm.current.value+" ', return 5 movie titles that match this genre.",
        },
      ],
    });
    const movieList = completion?.result?.response.split(",")
   
    let searchdata = movieList.map((movie) => movieSearch(movie))
    
    let movieListData = await Promise.all(searchdata)
    dispatch(addRecommendedMovies({names:movieList, moviesResults:movieListData}))
    dispatch(updateRecommendationLoading())

  } catch (error) {
    console.warn(error, "my error messsage")
  }

  }
  
  return (
    <div className='z-10 w-full pt-52 '>
      <form className='md:w-1/2  grid grid-cols-12 gap-2 h-24 m-auto items-center bg-black p-3 rounded-md' onSubmit={(e) =>handleGPTsearch(e)}>
        <div className='col-span-9'>
          <input type='text' placeholder={languages[userLanguage].placeholder} className='p-4 border w-full rounded-md' ref={searchTerm}/>
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