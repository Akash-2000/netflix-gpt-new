import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlaying: null,
        trailer: null,
        popularMovies: null,
        topRatedMovies: null,
        upCommingMovies: null
    },
    reducers:{
        addNowPlayingMovies:(state, action)=>{
            state.nowPlaying = action.payload
        },
        addTrailerDetails:(state, action)=>{
            state.trailer = action.payload
        },
        addPopularMovies:(state, action) => {
            state.popularMovies = action.payload
        },
        addTopRatedMovies:(state, action) => {
            state.topRatedMovies = action.payload
        },
        addUpcommingMovies:(state, action) => {
            state.upCommingMovies = action.payload
        } 
    }
})

export const {
    addNowPlayingMovies,
    addTrailerDetails,
    addPopularMovies,
    addTopRatedMovies,
    addUpcommingMovies
} = movieSlice.actions


export default movieSlice.reducer