import React from 'react'
import MovieCards from './MovieCards'

const MovieList = ({title, movies}) => {
  
    return (
        <div className=''>
        <h1 className='text-white font-semibold text-lg  md:text-xl pl-5 mb-2'>{title}</h1>
        <div className="flex  pl-5 overflow-x-scroll no-scrollbar">
            <div className='flex'>
          {movies?.map((movie) => (
            <MovieCards key={movie.id} poster_path={movie.poster_path} />
          ))}
          </div>
        </div>
      </div>
  )
}

export default MovieList