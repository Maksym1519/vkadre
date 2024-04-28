import { createSlice } from "@reduxjs/toolkit";



type ServiceDetail = {
    title: string
}

const initialState: ServiceDetail = {
    title: ""
}

const serviceDetailSlice = createSlice({
    name: "serviceDetail",
    initialState,
    reducers: {
        getServiceDetail: (state,action) => {
            state.title = action.payload
        }
    }
})
export const {getServiceDetail} = serviceDetailSlice.actions;
export default serviceDetailSlice.reducer