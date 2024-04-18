import { createSlice } from "@reduxjs/toolkit";

type ExpressPhotoState = {
  overlay: boolean;
 };

const initialState: ExpressPhotoState = {
  overlay: false,
};

const expressPhotoSlice = createSlice({
  name: "expressPhoto",
  initialState,
  reducers: {
    setExpressPhoto: (state, action) => {
      state.overlay = action.payload;
    },
    },
});
export const { setExpressPhoto } = expressPhotoSlice.actions;
export default expressPhotoSlice.reducer;
