import { createSlice } from "@reduxjs/toolkit";

type PortfolioState = {
    activeIndex: number,
    city: string
}

const initialState: PortfolioState = {
    activeIndex: 0,
    city: 'фотосессии в одессе'
}

const portfolioPageSlice = createSlice({
    name: "portfolioPage",
    initialState,
    reducers: {
        setPortfolioIndex: (state,action) => {
            state.activeIndex = action.payload
        },
        setLocation: (state,action) => {
            state.city = action.payload
        }
    }
})
export const {setPortfolioIndex,setLocation} = portfolioPageSlice.actions;
export default portfolioPageSlice.reducer
