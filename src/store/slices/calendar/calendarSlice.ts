import { createSlice } from "@reduxjs/toolkit";
import { CalendarType } from "types/calendar/calendarType";


const initialState: CalendarType = {
    period: 0
}

const calendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        setPeriod: (state, action) => {
            state.period = action.payload
        }
    }
})

export const {setPeriod} = calendarSlice.actions;
export default calendarSlice.reducer