import { combineReducers } from "redux";
import headerReducer from "./slices/headerSlice";


const rootReducer = combineReducers({
   header: headerReducer
 });

export default rootReducer;

 export type RootState = ReturnType<typeof rootReducer>
