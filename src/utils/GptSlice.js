import { createSlice } from "@reduxjs/toolkit";

const GPTslicereducer = createSlice({
    name:"GPT",
    initialState:{
        showGPTpage:false,
        movieNames:null,
        movieResults:null,
        isRecommendationLoading:false
    },
    reducers:{
        toggleGPTpage:(state) => {
            state.showGPTpage = !state.showGPTpage
        },
        addRecommendedMovies:(state, action) => {
            const {names, moviesResults} = action.payload
            state.movieNames = names
            state.movieResults = moviesResults
        },
        updateRecommendationLoading:(state) =>{
            state.isRecommendationLoading = !state.isRecommendationLoading
        }   
        
    }
})

export const {
    toggleGPTpage,
    addRecommendedMovies,
    updateRecommendationLoading
} = GPTslicereducer.actions

export default GPTslicereducer.reducer