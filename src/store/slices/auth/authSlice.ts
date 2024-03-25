import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  authForm: boolean;
  profileMenu: boolean;
  index: number;
  userData: {
    jwt: string;
    user: {
      username: string;
      email: string;
    };
  };
};

const initialState: AuthState = {
  authForm: false,
  profileMenu: false,
  index: 0,
  userData: {
    jwt: "",
    user: {
      username: "",
      email: "",
    },
  },
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setAuthState: (state, action) => {
      state.authForm = action.payload;
    },
    setAuthIndex: (state, action) => {
      state.index = action.payload;
    },

    setUserData: (state, action) => {
      state.userData = action.payload;
    },

    setProfileMenu: (state,action) => {
      state.profileMenu = action.payload
    }
  },
});
export const { setAuthState, setAuthIndex, setUserData, setProfileMenu } = authSlice.actions;
export default authSlice.reducer;
