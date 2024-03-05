import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

//определяем типы данных для всех полей хедера
  export type HeaderData = [{
  logo: string;
  avataricon: string;
  logoDescription: string;
  navigation: string;
  contact: string;
  attributes: any;
   }]

//определяем типы данных для состояния хедера и ассинхронного редакса
  type HeaderState = {
  header: HeaderData | null;
  loading: boolean;
  error: string | null;
  burger: boolean;
}

const initialState: HeaderState = {
  header: null,
  loading: false,
  error: null,
  burger: false
  };

  export const headerInfo = createAsyncThunk<HeaderData, undefined, { rejectValue: string }>(
    "header/headerInfo",

    async function (_, { rejectWithValue }) {
        const response = await axios.get("https://vkadrestrapi.onrender.com/api/headers?populate=*");
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
    getBurgerInfo: (state,action) => {
      state.burger = action.payload
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

export const {getBurgerInfo} = headerSlice.actions;
export default headerSlice.reducer;