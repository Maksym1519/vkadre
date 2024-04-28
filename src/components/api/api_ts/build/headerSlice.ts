import axios from "axios";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";

//определяем типы данных для всех полей хедера
  export type HeaderData = {
  logo: string;
  avataricon: string;
  logoDescription: string;
  portfolio: string;
  services: string;
  location: string;
  phone: string;
  facebook: string;
  email: string;
  attributes: string;
   }

//определяем типы данных для состояния хедера и ассинхронного редакса
  type HeaderState = {
  header: HeaderData | null;
  loading: boolean;
  error: string | null;
}

const initialState: HeaderState = {
  header: null,
  loading: false,
  error: null
  };

  export const headerInfo = createAsyncThunk<HeaderData, undefined, { rejectValue: string }>(
    "header/headerInfo",

    async function (_, { rejectWithValue }) {
        const response = await axios.get("http://localhost:1337/api/headers?populate=*");

         if (response.status !== 200) {
          return rejectWithValue("Server error !");
        } 

      const responseData = response.data.data;
      return responseData;
    }
  );
  


const headerSlice = createSlice({
  name: "header",
  initialState,
  reducers: {
    getHeaderInfo: (state,action: PayloadAction<HeaderData>) => {
      state.header = action.payload
    }
  }, 

  extraReducers: (builder) => {
    builder
      .addCase(headerInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(headerInfo.fulfilled, (state, action) => {
        state.header = action.payload;
        state.loading = false;
      })
      },
});


export default headerSlice.reducer;