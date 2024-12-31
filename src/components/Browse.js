import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useTopRatedMovies from '../hooks/useTopRated'
import usePopularMovies from '../hooks/usePopularMovies'
import useUpcommingMovies from '../hooks/useUpcomming'
import { useSelector } from 'react-redux'
import GptSearchPage from './GptSearchPage'

const Browse = () => {
  const showGPTpage = useSelector((store) => store.gpt.showGPTpage)
  useNowPlayingMovies()
  useTopRatedMovies()
  usePopularMovies()
  useUpcommingMovies()
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
  {showGPTpage ? <GptSearchPage/>:
  <>
    <MainContainer/>
    <SecondaryContainer/>
    </>
    }
    </>
  )
}

export default Browse