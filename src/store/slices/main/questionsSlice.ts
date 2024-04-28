import axios from "axios";
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export type QuestionsData = [
  {
    attributes: {
      title: string;
      upperText: string;
      listTitle: string;
      listRow1: string;
      listRow2: string;
      lowerText: string
    };
  }
];

type QuestionsState = {
  questions: QuestionsData | null;
  loading: boolean;
  error: string | null;
};

const initialState: QuestionsState = {
  questions: null,
  loading: false,
  error: null,
};

export const questionsInfo = createAsyncThunk<
  QuestionsData,
  undefined,
  { rejectValue: string }
>(
  "question/questionInfo",

  async function (_, { rejectWithValue }) {
    const response = await axios.get(
      "https://vkadrestrapi.onrender.com/api/questions?sort=id&populate=*"
    );

    if (response.status !== 200) {
      return rejectWithValue("Server error !");
    }

    const responseData = response.data.data;
    return responseData;
  }
);

const questionsSlice = createSlice({
  name: "questions",
  initialState,
  reducers: {},

  extraReducers: (builder) => {
    builder
      .addCase(questionsInfo.pending, (state) => {
        state.loading = true;
        state.error = null;
      })

      .addCase(questionsInfo.fulfilled, (state, action) => {
        state.questions = action.payload;
        state.loading = false;
      });
  },
});

export default questionsSlice.reducer;
