import { createSlice } from "@reduxjs/toolkit";
import { languages } from "./languageConstants";

const configSlice = createSlice({
    name:"appConfig",
    initialState:{
        userlanguage:"en"
    },
    reducers:{
        //update langauge
        updateLanguage:(state, action) => {
            state.userlanguage = action.payload
        }
    }
})

export const {
    updateLanguage
} = configSlice.actions

export default configSlice.reducer