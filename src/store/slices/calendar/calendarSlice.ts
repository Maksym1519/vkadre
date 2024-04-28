import { createSlice } from "@reduxjs/toolkit";
import { CalendarType } from "types/calendar/calendarType";


const initialState: CalendarType = {
    period: 0,
    weekIndex: 0,
    monthIndex: 0,
    calendarMobile: false,
    popup: false,
    photosessionInfo: null
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
        },
        setMonth: (state, action) => {
            state.monthIndex = action.payload
        },
        showCalendarMobile: (state, action) => {
            state.calendarMobile = action.payload
        },
        setPopup: (state, action) => {
            state.popup = action.payload
        },
        setPhotosessionInfo: (state, action) => {
            state.photosessionInfo = action.payload
        }
    }
})

export const {setPeriod, setWeek, setMonth, showCalendarMobile, setPopup, setPhotosessionInfo} = calendarSlice.actions;
export default calendarSlice.reducer