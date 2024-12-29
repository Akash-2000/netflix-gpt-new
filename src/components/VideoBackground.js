import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { API_OPTIONS } from '../utils/constants'
import { addTrailerDetails } from '../utils/movieSlice'
import useMovieTrailer from '../hooks/useMovieTrailer'


const VideoBackground = ({movieId}) => {
    const trailer = useSelector((store) => store.movies.trailer)
    useMovieTrailer(movieId)
    //fetch the movie trailer using the movie Id




  return (
    <div className='w-screen'>
        <iframe 
        className='w-screen aspect-video' 
        src={"https://www.youtube.com/embed/"+ trailer?.key+"?autoplay=1&mute=1"} 
        title="YouTube video player" 
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
       
         >
        </iframe>
    </div>
  )
}

export default VideoBackground