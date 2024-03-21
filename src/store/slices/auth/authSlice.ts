import { createSlice } from "@reduxjs/toolkit";


type AuthState = {
    authForm: boolean;
    index: number
}

const initialState: AuthState = {
    authForm: false,
    index: 0
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState: (state,action) => {
           state.authForm = action.payload
        },
        setAuthIndex: (state,action) => {
            state.index = action.payload
        }
    }
})
export const {setAuthState, setAuthIndex} = authSlice.actions;
export default authSlice.reducer

