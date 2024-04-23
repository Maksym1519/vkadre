import { createSlice } from "@reduxjs/toolkit";
import { CalendarType } from "types/calendar/calendarType";


const initialState: CalendarType = {
    period: 0,
    weekIndex: 0
}

const calendarSlice = createSlice({
    name: "calendar",
    initialState,
    reducers: {
        setPeriod: (state, action) => {
            state.period = action.payload
        },
        setWeek: (state, action) => {
            state.weekIndex = action.payload
        }
    }
})

export const {setPeriod, setWeek} = calendarSlice.actions;
export default calendarSlice.reducer