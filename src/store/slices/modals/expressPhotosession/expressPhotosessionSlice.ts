import { createSlice } from "@reduxjs/toolkit";
import { ExpressPhotoType } from "types/expressPhoto/expressPhotoType";

const initialState: ExpressPhotoType = {
  data: {
    time: "",
    length: "",
    origin: false,
    sum: "",
  },
  page: 1,
};

const expressPhotoSlice = createSlice({
  name: "expressPhoto",
  initialState,
  reducers: {
    setExpressPhotoTime: (state, action) => {
      state.data.time = action.payload;
    },
    setExpressPhotoLength: (state, action) => {
      state.data.length = action.payload;
    },
    setExpressPhotoOrigin: (state, action) => {
      state.data.origin = action.payload;
    },
    setExpressPhotoSum: (state, action) => {
      state.data.sum = action.payload;
    },
    setPage: (state, action) => {
      state.page = action.payload;
    },
  },
});
export const {
  setExpressPhotoTime,
  setExpressPhotoLength,
  setExpressPhotoOrigin,
  setExpressPhotoSum,
  setPage,
} = expressPhotoSlice.actions;
export default expressPhotoSlice.reducer;
