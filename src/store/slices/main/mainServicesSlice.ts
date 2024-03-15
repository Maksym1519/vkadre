import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type ServicesData = [
  {
    attributes: {
     title: string,
     text1: string,
     text2: string,
     serviceNavigation: [{
     children: [{
      text: string
     }]
     }]
    };
  }
];




type MainServicesState = {
  mainServices: ServicesData | null;
  index: number;
  loading: boolean;
  error: string | null;
};

const initialState: MainServicesState = {
  mainServices: null,
  index: 0,
  loading: false,
  error: null,
};

export const mainServicesInfo = createAsyncThunk<
  ServicesData,
  undefined,
  { rejectValue: string }
>(
  "mainServices/mainServicesInfo",

  async function (_, { rejectWithValue }) {
    const response = await axios.get(
      "https://vkadrestrapi.onrender.com/api/main-serevices?sort=id&populate=*"
    );

    if (response.status !== 200) {
      return rejectWithValue("Server error !");
    }

    const responseData = response.data.data;
    return responseData;
  }
);

const mainServicesSlice = createSlice({
  name: "mainServices",
  initialState,
  reducers: {
    setIndex: (state,action) => {
      state.index = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(mainServicesInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(mainServicesInfo.fulfilled, (state, action) => {
        state.mainServices = action.payload;
        state.loading = false;
      });
  },
});
export const {setIndex} = mainServicesSlice.actions;
export default mainServicesSlice.reducer;
