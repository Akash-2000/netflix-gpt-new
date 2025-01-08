import React from 'react'
import { useSelector } from 'react-redux'

import MovieList from './MovieList'
import { SHIMMER_TITLE, SHIMMER_MOVIES } from '../utils/DummyData'
import MovieListShimmer from '../shimmer.js/MovieListShimmer'

const GptMovieSuggestions = () => {
  const {movieNames, movieResults, isRecommendationLoading} = useSelector((store) => store.gpt)
  if(isRecommendationLoading){
    return (
      <div className='p-5 m-4 bg-black bg-opacity-50'>
        {
          SHIMMER_TITLE?.map((title,index) => <MovieListShimmer key={title} title={title} movies={SHIMMER_MOVIES[index]}/>)
        }
      </div>
    )
  }
  return (
    <div className='p-5 m-4 bg-black bg-opacity-50'>
      <div>
      {
        movieNames?.map((movieName, index) =>{
          if(movieResults[index].length > 0){
            return(
              <MovieList key={movieName} title={movieName} movies={movieResults[index]} />
            )
          }
          
})
      }
      </div>

    </div>
  )
}

export default GptMovieSuggestions