import { createSlice } from "@reduxjs/toolkit";


type AuthState = {
    authForm: boolean
}

const initialState: AuthState = {
    authForm: false
}

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        setAuthState: (state,action) => {
           state.authForm = action.payload
        }
    }
})
export const {setAuthState} = authSlice.actions;
export default authSlice.reducer

