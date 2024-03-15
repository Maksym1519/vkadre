import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type PriceData = [
  {
  attributes: {
    price: string;
    time: string
  }
  }
  ];



type PriceState = {
  price: PriceData | null;
  loading: boolean;
  error: string | null;
};

const initialState: PriceState = {
  price: null,
  loading: false,
  error: null,
};

export const pricesInfo = createAsyncThunk<
  PriceData,
  undefined,
  { rejectValue: string }
>(
  "price/priceInfo",

  async function (_, { rejectWithValue }) {
    const response = await axios.get(
      "https://vkadrestrapi.onrender.com/api/prices?sort=id&populate=*"
    );

    if (response.status !== 200) {
      return rejectWithValue("Server error !");
    }

    const responseData = response.data.data;
    return responseData;
  }
);

const priceSlice = createSlice({
  name: "price",
  initialState,
  reducers: {
    
  },

  extraReducers: (builder) => {
    builder
      .addCase(pricesInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(pricesInfo.fulfilled, (state, action) => {
        state.price = action.payload;
        state.loading = false;
      });
  },
});

export default priceSlice.reducer;
