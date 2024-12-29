import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'

const Browse = () => {
  useNowPlayingMovies()
  return (
    <>
    <Header/>
    {
      /**
       1 Main Contianer
          - Vidoe Title
          - Video Backgroud
       2 secondary contianer
            - video cards * n
            - video play with options * n
       */
    }
    <MainContainer/>
    <SecondaryContainer/>
    </>
  )
}

export default Browse