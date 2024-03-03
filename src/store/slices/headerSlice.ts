import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  header: null
}

const headerSlice = createSlice({
    name: "header",
    initialState,
    reducers: {
     getHeaderInfo : (state,action) => {
        state.header = action.payload
     }
    }
})
export const {getHeaderInfo} = headerSlice.actions;
export default headerSlice.reducer
