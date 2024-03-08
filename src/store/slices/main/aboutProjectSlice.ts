import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";


export type AboutProjectData = [{
    mainTitle: string;
    headerDescription: string;
    featuresIcon: Array<string>;
    featuresTitle: string;
    featuresInfo: Array<string>;
    statisticsTitle: Array<string>;
    statisticsInfo: Array<string>;
    blur: string;
    attributes: any;
    data: any;
    url: any
    }]

type AboutProjectState = {
  aboutProject: AboutProjectData | null;  
  loading: boolean;
  error: string | null;
}

const initialState: AboutProjectState = {
    aboutProject: null,
    loading: false,
    error: null
}

export const aboutProjectInfo = createAsyncThunk<AboutProjectData, undefined, { rejectValue: string }>(
    "aboutProject/aboutProjectInfo",

    async function (_, { rejectWithValue }) {
      const response = await axios.get(
        "https://vkadrestrapi.onrender.com/api/home-about-projects?sort=id&populate=featuresIcon&populate=blur"
        );
      
         if (response.status !== 200) {
          return rejectWithValue("Server error !");
        } 

      const responseData = response.data.data;
      return responseData;
      }
  );

  const aboutProjectSlice = createSlice({
    name: "aboutProject",
    initialState,
    reducers: {}, 
  
    extraReducers: (builder) => {
      builder
        .addCase(aboutProjectInfo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
  
        .addCase(aboutProjectInfo.fulfilled, (state, action) => {
          state.aboutProject = action.payload;
          state.loading = false;
        })
        },
  });
  
 
  export default aboutProjectSlice.reducer;
  