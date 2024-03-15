import { combineReducers } from "redux";
import headerReducer from "./slices/headerSlice";
import orderPhotosessionReducer from "./slices/main/orderPhotosessionSlice";
import aboutProjectReducer from "./slices/main/aboutProjectSlice";
import portfolioReducer from "./slices/main/portfolioSlice";
import mainServicesReducer from "./slices/main/mainServicesSlice";


const rootReducer = combineReducers({
   header: headerReducer,
   orderPhotosession: orderPhotosessionReducer,
   aboutProject: aboutProjectReducer,
   portfolio: portfolioReducer,
   mainServices: mainServicesReducer
 });

export default rootReducer;

 export type RootState = ReturnType<typeof rootReducer>
