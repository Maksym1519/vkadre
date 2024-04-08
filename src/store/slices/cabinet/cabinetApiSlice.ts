import axios from "axios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { UserDataApi } from "types/cabinet/UserDataTypes";
import { UserDataState } from "types/cabinet/UserDataTypes";


const initialState: UserDataState = {
    guests: null,
    id: "",
    loading: false,
    error: null
}

export const cabinetApiGet = createAsyncThunk<
  UserDataApi,
  undefined,
  { rejectValue: string }
>("cabinetUser/cabinetApiGet", async function (_,{rejectWithValue}) {
    const response = await axios.get(
        "https://vkadrestrapi.onrender.com/api/guests?populate=*"
      );
  
      if (response.status !== 200) {
        return rejectWithValue("Server error !");
      }
  
      const responseData = response.data.data;
      return responseData;
});

const cabinetUsersSlice = createSlice({
    name: "cabinetUser",
    initialState,
    reducers: {   
      getUserId: (state,action) => {
        state.id = action.payload
      }
    },
  
    extraReducers: (builder) => {
      builder
        .addCase(cabinetApiGet.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
  
        .addCase(cabinetApiGet.fulfilled, (state, action) => {
          state.guests = action.payload;
          state.loading = false;
        });
    },
  });
  export const {getUserId} = cabinetUsersSlice.actions;
   export default cabinetUsersSlice.reducer;
  
