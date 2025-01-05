import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTopRatedMovies } from "../utils/movieSlice";

const useTopRatedMovies = () =>{
    const dispatch = useDispatch()
    const TopRatedMoviesList = useSelector((store) => store.movies.topRatedMovies)

    const getMovieDetails = async() =>{
      const url = 'https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1';
      try {
        const respone = await fetch(url,API_OPTIONS)
        const data = await respone.json()
        dispatch(addTopRatedMovies(data.results))
      } catch (error) {
        console.warn("error while get the data", error)
      }
    }
  
    useEffect(()=>{
      !TopRatedMoviesList &&  getMovieDetails()
    },[])
}

export default useTopRatedMovies