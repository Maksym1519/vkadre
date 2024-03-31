import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type MainTeamData = [
  {
    attributes: {
      name: string;
      position: string;
      image: {
        data: {
          attributes: {
            url: string;
          };
        };
      };
    };
    id: number
  }
];

type MainTeamState = {
  mainTeam: MainTeamData | null;
  loading: boolean;
  error: string | null;
};

const initialState: MainTeamState = {
  mainTeam: null,
  loading: false,
  error: null,
};

export const mainTeamInfo = createAsyncThunk<
  MainTeamData,
  undefined,
  { rejectValue: string }
>(
  "mainTeam/mainTeamInfo",

  async function (_, { rejectWithValue }) {
    const response = await axios.get(
      "https://vkadrestrapi.onrender.com/api/main-teams?sort=id&populate=*"
    );

    if (response.status !== 200) {
      return rejectWithValue("Server error !");
    }

    const responseData = response.data.data;
    return responseData;
  }
);

const mainTeamSlice = createSlice({
  name: "mainTeam",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(mainTeamInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(mainTeamInfo.fulfilled, (state, action) => {
        state.mainTeam = action.payload;
        state.loading = false;
      });
  },
});

export default mainTeamSlice.reducer;
