import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type AuthApiData = [
  {
    authApi: {
      password: string;
    };
  }
];

type AuthApiState = {
  formData: null;
  authApi: AuthApiData | null;
  loading: boolean;
  error: string | null;
};

const initialState: AuthApiState = {
  formData: null,
  authApi: null,
  loading: false,
  error: null,
};

export const authApiInfo = createAsyncThunk<
  AuthApiData,
  undefined,
  { rejectValue: string }
>(
  "authApi/authApiInfo",

  async function (_, { rejectWithValue }) {
    const response = await axios.get(
      "https://vkadrestrapi.onrender.com/api/users?sort=id&populate=*"
    );

    if (response.status !== 200) {
      return rejectWithValue("Server error !");
    }

    const responseData = response.data;
    return responseData;
  }
);

const authApiSlice = createSlice({
  name: "authApi",
  initialState,
  reducers: {
    setAuthApiData: (state, action) => {
      state.formData = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(authApiInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(authApiInfo.fulfilled, (state, action) => {
        state.authApi = action.payload;
        state.loading = false;
      });
  },
});

export const { setAuthApiData } = authApiSlice.actions;
export default authApiSlice.reducer;
