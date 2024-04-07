import { createSlice } from "@reduxjs/toolkit";



type LocationDetail = {
    title: string
}

const initialState: LocationDetail = {
    title: ""
}

const locationDetailSlice = createSlice({
    name: "locationDetail",
    initialState,
    reducers: {
        getLocationDetail: (state,action) => {
            state.title = action.payload
        }
    }
})
export const {getLocationDetail} = locationDetailSlice.actions;
export default locationDetailSlice.reducer