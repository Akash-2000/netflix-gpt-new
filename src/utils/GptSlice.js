import { createSlice } from "@reduxjs/toolkit";

const GPTslicereducer = createSlice({
    name:"GPT",
    initialState:{
        showGPTpage:false
    },
    reducers:{
        toggleGPTpage:(state) => {
            state.showGPTpage = !state.showGPTpage
        }
    }
})

export const {
    toggleGPTpage
} = GPTslicereducer.actions

export default GPTslicereducer.reducer