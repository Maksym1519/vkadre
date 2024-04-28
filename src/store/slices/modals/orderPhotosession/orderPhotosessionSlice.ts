import { createSlice } from "@reduxjs/toolkit";

type AuthState = {
  overlay: boolean;
  popupValue: string
 };

const initialState: AuthState = {
  overlay: false,
  popupValue: ""
};

const orderPhotosessionModalSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setOrderphoto: (state, action) => {
      state.overlay = action.payload;
    },
    setPopupValue:(state, action) => {
      state.popupValue = action.payload
    }
   },
});
export const { setOrderphoto, setPopupValue } = orderPhotosessionModalSlice.actions;
export default orderPhotosessionModalSlice.reducer;
