import { createSlice } from "@reduxjs/toolkit";

type FeedbackState = {
  overlay: boolean;
  popupValue: string
 };

const initialState: FeedbackState = {
  overlay: false,
  popupValue: ""
};

const feedbackModalSlice = createSlice({
  name: "feedback",
  initialState,
  reducers: {
    setFeedbackModal: (state, action) => {
      state.overlay = action.payload;
    },
    setFeedbackValue:(state, action) => {
      state.popupValue = action.payload
    }
   },
});
export const { setFeedbackModal, setFeedbackValue } = feedbackModalSlice.actions;
export default feedbackModalSlice.reducer;
