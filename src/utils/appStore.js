import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice"
import MoviesReducer from "./movieSlice"
import GPTReducer from "./GptSlice"
import configReducer from "./configsSlice"

const appstore = configureStore({
    reducer:{
        user:userReducer,
        movies:MoviesReducer,
        gpt:GPTReducer,
        config:configReducer
    }
})

export default appstore