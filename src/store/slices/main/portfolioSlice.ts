import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


  
export type PortfolioData = [{
  attributes: {
    photo: {
      data: {
        attributes: {
          url: string
        }
      }
    }
    }
   }]
  

type AboutProjectState = {
  portfolio: PortfolioData | null;  
  loading: boolean;
  error: string | null;
}

const initialState: AboutProjectState = {
    portfolio: null,
    loading: false,
    error: null
}

export const portfolioInfo = createAsyncThunk<PortfolioData, undefined, { rejectValue: string }>(
    "portfolio/portfolioInfo",

    async function (_, { rejectWithValue }) {
      const response = await axios.get(
        "https://vkadrestrapi.onrender.com/api/portfolios?sort=id&populate=*"
        );
      
         if (response.status !== 200) {
          return rejectWithValue("Server error !");
        } 

      const responseData = response.data.data;
      return responseData;
      }
  );

  const portfolioSlice = createSlice({
    name: "portfolio",
    initialState,
    reducers: {}, 
  
    extraReducers: (builder) => {
      builder
        .addCase(portfolioInfo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
  
        .addCase(portfolioInfo.fulfilled, (state, action) => {
          state.portfolio = action.payload;
          state.loading = false;
        })
        },
  });
  
 
  export default portfolioSlice.reducer;
  