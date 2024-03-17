import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


  
export type MainLocationsData = [{
 attributes: {
  title: string,
  location: string,
  description: string,
  image: {
    data: {
      attributes: {
        url: string
      }
    }
  }
 }
   }]
  

type MainLocationsState = {
  mainLocations: MainLocationsData | null;  
  loading: boolean;
  error: string | null;
}

const initialState: MainLocationsState = {
    mainLocations: null,
    loading: false,
    error: null
}

export const mainLocationsInfo = createAsyncThunk<MainLocationsData, undefined, { rejectValue: string }>(
    "mainLocations/mainLocationsInfo",

    async function (_, { rejectWithValue }) {
      const response = await axios.get(
        "https://vkadrestrapi.onrender.com/api/main-locations?sort=id&populate=*"
        );
      
         if (response.status !== 200) {
          return rejectWithValue("Server error !");
        } 

      const responseData = response.data.data;
      return responseData;
      }
  );

  const mainLocationsSlice = createSlice({
    name: "mainLocations",
    initialState,
    reducers: {}, 
  
    extraReducers: (builder) => {
      builder
        .addCase(mainLocationsInfo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
  
        .addCase(mainLocationsInfo.fulfilled, (state, action) => {
          state.mainLocations = action.payload;
          state.loading = false;
        })
        },
  });
  
 
  export default mainLocationsSlice.reducer;
  