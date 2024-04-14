import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  overlay: boolean;
 };

const initialState: AuthState = {
  overlay: false,
};

const orderPhotosessionModalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOrderphoto: (state, action) => {
      state.overlay = action.payload;
    },
   },
});
export const { setOrderphoto } = orderPhotosessionModalSlice.actions;
export default orderPhotosessionModalSlice.reducer;
