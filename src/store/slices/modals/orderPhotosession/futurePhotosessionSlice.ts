import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { FuturePhotoGetType } from "types/modals/modals";
import { FuturePhotoStateType } from "types/modals/modals";
import axios from "axios";

const initialState: FuturePhotoStateType = {
  futurePhotosession: null,
  orderId: 0,
  loading: false,
  error: "",
};

export const futurePhotoGet = createAsyncThunk<
  FuturePhotoGetType,
  undefined,
  { rejectValue: string }
>("futurePhotoSession/get", async function (_, { rejectWithValue }) {
  try {
    const response = await axios.get(
      "https://vkadrestrapi.onrender.com/api/photosessions"
    );
     if (response.status !== 200) {
      throw new Error("Get photosession info is failed !");
    }
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(
      "Failed get future photosesion info" + error.message
    );
  }
});

const futurePhotosessionSlice = createSlice({
    name: "futurePhotosession",
    initialState,
    reducers: {
      setOrderId: (state,action) => {
        state.orderId = action.payload
      }
    },
  
    extraReducers: (builder) => {
      builder
        .addCase(futurePhotoGet.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
  
        .addCase(futurePhotoGet.fulfilled, (state, action) => {
          state.futurePhotosession = action.payload;
          state.loading = false;
        });
    },
  });
  
  export const {setOrderId} = futurePhotosessionSlice.actions;
  export default futurePhotosessionSlice.reducer;
  
