import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addUpcommingMovies } from "../utils/movieSlice";

const useUpcommingMovies = () =>{
    const dispatch = useDispatch()
    const upCommingList = useSelector((store) => store.movies.upCommingMovies)
    const getMovieDetails = async() =>{
      const url = 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1';
      try {
        const respone = await fetch(url,API_OPTIONS)
        const data = await respone.json()
        dispatch(addUpcommingMovies(data.results))
      } catch (error) {
        console.warn("error while get the data", error)
      }
    }
  
    useEffect(()=>{
      !upCommingList && getMovieDetails()
    },[])
}

export default useUpcommingMovies