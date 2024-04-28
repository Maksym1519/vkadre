import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type OurTeamData = 
    {
      attributes: {
        fullName: string;
        position: string;
        description1: string;
        description2: string;
        avatar: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        photo: {
            data: [{
                attributes: {
                    url: string
                }
            }]
        }
      };
    }
  ;

type OurTeamState = {
  ourTeam: OurTeamData | null;
  photographerIndex: null;
  loading: boolean;
  error: string | null;
};

const initialState: OurTeamState = {
  ourTeam: null,
  photographerIndex: null,
  loading: false,
  error: null,
};

export const ourTeamInfo = createAsyncThunk<
  OurTeamData,
  number,
  { rejectValue: string }
>(
  "ourTeam/ourTeamInfo",

  async function (photgrapherId, { rejectWithValue }) {
     const response = await axios.get(
      `https://vkadrestrapi.onrender.com/api/our-teams/${photgrapherId}?populate=*`
    );

    if (response.status !== 200) {
      return rejectWithValue("Server error !");
    }

    const responseData = response.data.data;
    return responseData;
  }
);

const ourTeamSlice = createSlice({
  name: "ourTeam",
  initialState,
  reducers: {
    setPhotographerIndex: (state,action) => {
      state.photographerIndex = action.payload
    },
    resetOurTeam: (state,action) => {
      state.ourTeam = action.payload
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(ourTeamInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(ourTeamInfo.fulfilled, (state, action) => {
        state.ourTeam = action.payload;
        state.loading = false;
      });
  },
});

export const {setPhotographerIndex, resetOurTeam} = ourTeamSlice.actions;
export default ourTeamSlice.reducer;
