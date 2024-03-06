import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type OrderPhotosessionData = [{
    mainImage: string;
    mainTitle: string;
    sliderImage: Array<string>;
    attributes: any;
}]

type OrderPhotosessionState = {
  orderPhotosession: OrderPhotosessionData | null;  
  loading: boolean;
  error: string | null;
}

const initialState: OrderPhotosessionState = {
    orderPhotosession: null,
    loading: false,
    error: null
}

export const orderPhotosessionInfo = createAsyncThunk<OrderPhotosessionData, undefined, { rejectValue: string }>(
    "orderPhotosession/orderPhotosessionInfo",

    async function (_, { rejectWithValue }) {
        const response = await axios.get("https://vkadrestrapi.onrender.com/api/main-order-photosessions?populate=*");
         if (response.status !== 200) {
          return rejectWithValue("Server error !");
        } 

      const responseData = response.data.data;
      return responseData;
      }
  );

  const orderPhotosessionSlice = createSlice({
    name: "orderPhotosession",
    initialState,
    reducers: {}, 
  
    extraReducers: (builder) => {
      builder
        .addCase(orderPhotosessionInfo.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
  
        .addCase(orderPhotosessionInfo.fulfilled, (state, action) => {
          state.orderPhotosession = action.payload;
          state.loading = false;
        })
        },
  });
  
 
  export default orderPhotosessionSlice.reducer;
  