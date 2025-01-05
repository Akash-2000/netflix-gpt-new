import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularMovies } from "../utils/movieSlice";

const usePopularMovies = () =>{
    const dispatch = useDispatch()
    const popularMovies = useSelector((store) => store.movies.popularMovies)
    const getMovieDetails = async() =>{
      const url = 'https://api.themoviedb.org/3/movie/popular?language=en-US&page=1';
      try {
        const respone = await fetch(url,API_OPTIONS)
        const data = await respone.json()
        dispatch(addPopularMovies(data.results))
      } catch (error) {
        console.warn("error while get the data", error)
      }
    }
  
    useEffect(()=>{
      !popularMovies && getMovieDetails()
    },[])
}

export default usePopularMovies