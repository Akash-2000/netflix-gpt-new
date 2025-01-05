import React from 'react'
import CardShimmer from './CardShimmer'

const MovieListShimmer = ({title, movies}) => {
    console.log(movies)
  return (
    <div className=''>
    <h1 className='text-white font-semibold text-xl pl-5 mb-2 animate-pulse w-20 bg-slate-400'></h1>
    <div className="flex  pl-5 overflow-x-scroll no-scrollbar">
        <div className='flex'>
      {movies?.map((movie) => (
        <CardShimmer key={movie.id} poster_path={movie.poster_path} />
      ))}
      </div>
    </div>
  </div>
  )
}

export default MovieListShimmer