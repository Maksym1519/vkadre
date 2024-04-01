import { createAsyncThunk } from "@reduxjs/toolkit";
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

type ServicesData = [
  {
    attributes: {
      image: {
        data: 
          {
            attributes: {
              url: string;
            };
          }
        ;
      };
      title: string;
      description: string;
    };
  }
];

type ServicesState = {
  services: ServicesData | null;
  loading: boolean;
  error: string | null;
};

const initialState: ServicesState = {
  services: null,
  loading: false,
  error: null,
};

export const servicesInfo = createAsyncThunk<
  ServicesData,
  undefined,
  { rejectValue: string }
>("services/servicesInfo", async function (_, { rejectWithValue }) {
  const response = await axios.get(
    "https://vkadrestrapi.onrender.com/api/services?sort=id&populate=*"
  );
  if (response.status !== 200) {
    return rejectWithValue("Server error !");
  }

  const responseData = response.data.data;
  return responseData;
});

const servicesSlice = createSlice({
  name: "services",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(servicesInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(servicesInfo.fulfilled, (state, action) => {
        state.services = action.payload;
        state.loading = false;
      });
  },
});

export default servicesSlice.reducer;
