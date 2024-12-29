import { useEffect } from "react"
import { useDispatch } from "react-redux"

import { addTrailerDetails } from "../utils/movieSlice"
import { API_OPTIONS } from "../utils/constants"

const useMovieTrailer = (movieId)=>{
    
    const dispatch = useDispatch()

    const getMovietrailers = async() =>{
        const getTrailerURL = `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`
        try {
            const response = await fetch(getTrailerURL, API_OPTIONS)
            const json = await response.json()
            const filteredData = json.results.filter((video) => video.type === "Trailer")
            const trailer = filteredData.length ? filteredData[0] : json?.results[0]
            dispatch(addTrailerDetails(trailer))
        } catch (error) {
            console.warn("error while retriving the response", error)
        }
    }

    useEffect(()=>{
        getMovietrailers()
    },[])
}

export default  useMovieTrailer