import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


export const futurePhotoDelete = createAsyncThunk<
   undefined,
   number,
  { rejectValue: string }
>("futurePhotoSession/get", async function (id, { rejectWithValue }) {
  try {
    const response = await axios.delete(
      `https://vkadrestrapi.onrender.com/api/photosessions/${id}`
    );
     if (response.status !== 200) {
      throw new Error("Get photosession info is failed !");
    }
    return response.data.data;
  } catch (error: any) {
    return rejectWithValue(
      "Failed delete future photosesion order" + error.message
    );
  }
});

