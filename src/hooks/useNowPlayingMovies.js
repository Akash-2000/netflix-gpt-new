import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { URL_OPTIONS } from "../utils/constants";
import { addNowPlayingMovies } from "../utils/movieSlice";

const useNowPlayingMovies = () =>{
    const dispatch = useDispatch()

    const getMovieDetails = async() =>{
      const url = 'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1';
      try {
        const respone = await fetch(url,URL_OPTIONS)
        const data = await respone.json()
        console.log(data.results, "Movie data response")
        dispatch(addNowPlayingMovies(data.results))
      } catch (error) {
        console.warn("error while get the data", error)
      }
    }
  
    useEffect(()=>{
      getMovieDetails()
    },[])
}

export default useNowPlayingMovies