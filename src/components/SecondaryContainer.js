import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesData = useSelector((store) => store.movies.nowPlaying)
  if(moviesData === null) return null;
  return (
    <div className='bg-black'>
      {
        /*
         - Move List componnet
         - Movie cards
         */
      }
      <div className='-mt-60 z-50 relative'>
      <MovieList title={"Now playing"} movies={moviesData}/>
      <MovieList title={"Now playing"} movies={moviesData}/>
      <MovieList title={"Now playing"} movies={moviesData}/>
      <MovieList title={"Now playing"} movies={moviesData}/>
      </div>
      </div>
  )
}

export default SecondaryContainer