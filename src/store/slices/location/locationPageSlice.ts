import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


  
export type LocationsPageData = [{
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
  

type LocationsPageState = {
  locations: LocationsPageData | null;  
  loading: boolean;
  error: string | null;
  filterLocation: string;
}

const initialState: LocationsPageState = {
    locations: null,
    loading: false,
    error: null,
    filterLocation: ""
}


export const locationsPageInfo = createAsyncThunk<LocationsPageData, undefined | string, { rejectValue: string }>(
    "locationsPage/locationsPageInfo",

    async function (location, { rejectWithValue }) {
       
        const response = await axios.get(
          `https://vkadrestrapi.onrender.com/api/main-locations?populate=*&filters[location][$contains]=${location !== "Все" ? location : ""}`
        );
        
      
         if (response.status !== 200) {
          return rejectWithValue("Server error !");
        } 

      const responseData = response.data.data;
      return responseData;
      }
  );

  const locationsPageSlice = createSlice({
    name: "locationsPage",
    initialState,
    reducers: {
      setFilterLocation: (state,action) => {
        state.filterLocation = action.payload
      }
    }, 
  
    extraReducers: (builder) => {
      builder
        .addCase(locationsPageInfo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
  
        .addCase(locationsPageInfo.fulfilled, (state, action) => {
          state.locations = action.payload;
          state.loading = false;
        })
        },
  });
  
  export const {setFilterLocation} = locationsPageSlice.actions;
  export default locationsPageSlice.reducer;
  