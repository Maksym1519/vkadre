import { createSlice } from "@reduxjs/toolkit";

type PortfolioState = {
    activeIndex: number
}

const initialState: PortfolioState = {
    activeIndex: 0
}

const portfolioPageSlice = createSlice({
    name: "portfolioPage",
    initialState,
    reducers: {
        setPortfolioIndex: (state,action) => {
            state.activeIndex = action.payload
        }
    }
})
export const {setPortfolioIndex} = portfolioPageSlice.actions;
export default portfolioPageSlice.reducer
