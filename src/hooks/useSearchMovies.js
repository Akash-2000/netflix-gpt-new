import { API_OPTIONS } from "../utils/constants"

const useMovieSearch = async(movieString) => {
    const url=`https://api.themoviedb.org/3/search/movie?query=${movieString}&include_adult=false&language=en-US&page=1`
    try {
      const response = await fetch(url, API_OPTIONS)
      const json = await response.json()

      return json.results
    } catch (error) {
      console.log(error,"error while search data")
    }
  
}

export default useMovieSearch;