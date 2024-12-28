import { configureStore } from "@reduxjs/toolkit";

import userReducer from "./userSlice"
import MoviesReducer from "./movieSlice"

const appstore = configureStore({
    reducer:{
        user:userReducer,
        movies:MoviesReducer
    }
})

export default appstore