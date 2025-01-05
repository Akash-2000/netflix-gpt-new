import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()
    const nowPlayingMovies = useSelector((store) => store.movies.nowPlaying)

    const getMovieDetails = async() =>{
      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
      try {
        const respone = await fetch(url,API_OPTIONS)
        const data = await respone.json()
        dispatch(addNowPlayingMovies(data.results))
      } catch (error) {
        console.warn("error while get the data", error)
      }
    }
  
    useEffect(()=>{
      !nowPlayingMovies && getMovieDetails()
    },[])
}

export default useNowPlayingMovies