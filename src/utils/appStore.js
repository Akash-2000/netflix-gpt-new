import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice"
import MoviesReducer from "./movieSlice"
import GPTReducer from "./GptSlice"

const appstore = configureStore({
    reducer:{
        user:userReducer,
        movies:MoviesReducer,
        gpt:GPTReducer
    }
})

export default appstore