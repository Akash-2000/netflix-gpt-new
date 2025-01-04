import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
  const moviesData = useSelector((store) => store.movies.nowPlaying)
  const topRatedMovies = useSelector((store => store.movies.topRatedMovies))
  const upcoming = useSelector((store) => store.movies.upCommingMovies)
  const popular = useSelector(store => store.movies.popularMovies) 
 
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
      <MovieList title={"upcomming"} movies={upcoming}/>
      <MovieList title={"Popular"} movies={popular}/>
      <MovieList title={"Top Rated"} movies={topRatedMovies}/>
      </div>
      </div>
  )
}

export default SecondaryContainer