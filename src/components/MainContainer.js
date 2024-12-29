import React from 'react'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'
import { useSelector } from 'react-redux'

const MainContainer = () => {
    const movies = useSelector((store) => store.movies.nowPlaying)
    if(!movies) return null;

    const mainMovies = movies[0]
   
    const {
        original_title,
        overview,
        id} = mainMovies
  return (
    <div>
        <VideoTitle title={original_title} description={overview}/>
        <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer