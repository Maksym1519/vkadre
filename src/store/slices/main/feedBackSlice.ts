import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


  
export type FeedbackData = [{
 attributes: {
  location: string,
  description: string,
  name: string,
  city: string
  image: {
    data: {
      attributes: {
        url: string
      }
    }
  }
 }
   }]
  

type FeedbackState = {
  feedback: FeedbackData | null;  
  loading: boolean;
  error: string | null;
}

const initialState: FeedbackState = {
    feedback: null,
    loading: false,
    error: null
}

export const feedBackInfo = createAsyncThunk<FeedbackData, undefined, { rejectValue: string }>(
    "feedback/feedbackInfo",

    async function (_, { rejectWithValue }) {
      const response = await axios.get(
        "https://vkadrestrapi.onrender.com/api/main-feedbacks?sort=id&populate=*"
        );
      
         if (response.status !== 200) {
          return rejectWithValue("Server error !");
        } 

      const responseData = response.data.data;
      return responseData;
      }
  );

  const feedbackSlice = createSlice({
    name: "feedback",
    initialState,
    reducers: {}, 
  
    extraReducers: (builder) => {
      builder
        .addCase(feedBackInfo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
  
        .addCase(feedBackInfo.fulfilled, (state, action) => {
          state.feedback = action.payload;
          state.loading = false;
        })
        },
  });
  
 
  export default feedbackSlice.reducer;
  