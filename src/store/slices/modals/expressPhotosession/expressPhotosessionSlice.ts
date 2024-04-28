import { createSlice } from "@reduxjs/toolkit";
import { ExpressPhotoType } from "types/expressPhoto/expressPhotoType";

const initialState: ExpressPhotoType = {
  data: {
    time: "",
    date: "",
    length: "",
    origin: false,
    sum: "",
    username: "",
    phone: "",
    email: "",
    userId: "",
    certificate: ""
  },
  page: 1,
  handleSubmit: null
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
    setHandleSubmit: (state, action) => {
      state.handleSubmit = action.payload
    }
  },
});
export const {
  setExpressPhotoTime,
  setExpressPhotoLength,
  setExpressPhotoOrigin,
  setExpressPhotoSum,
  setPage,
  setHandleSubmit
} = expressPhotoSlice.actions;
export default expressPhotoSlice.reducer;
