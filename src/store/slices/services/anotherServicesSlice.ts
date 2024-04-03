import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { apiConst } from "utils/myConst";

type AnotherServicesData = [
  {
    attributes: {
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
      text: string;
    };
  }
];

type AnotherServicesState = {
  anotherServices: AnotherServicesData | null;
  loading: boolean;
  error: string | null;
};

const initialState: AnotherServicesState = {
  anotherServices: null,
  loading: false,
  error: null,
};

export const anotherServicesInfo = createAsyncThunk<
  AnotherServicesData,
  undefined,
  { rejectValue: string }
>(
  "anotherServices/anotherServicesInfo",
  async function (_, { rejectWithValue }) {
    const response = await axios.get(
      `${apiConst}/another-services?sort=id&populate=*`
    );
    if (response.status !== 200) {
      return rejectWithValue("Server error !");
    }

    const responseData = response.data.data;
    return responseData;
  }
);

const anotherServicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(anotherServicesInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(anotherServicesInfo.fulfilled, (state, action) => {
        state.anotherServices = action.payload;
        state.loading = false;
      });
  },
});

export default anotherServicesSlice.reducer;
