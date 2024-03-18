import { combineReducers } from "redux";
import headerReducer from "./slices/headerSlice";
import orderPhotosessionReducer from "./slices/main/orderPhotosessionSlice";
import aboutProjectReducer from "./slices/main/aboutProjectSlice";
import portfolioReducer from "./slices/main/portfolioSlice";
import mainServicesReducer from "./slices/main/mainServicesSlice";
import priceReducer from "./slices/main/priceSlice";
import mainLocationsReducer from "./slices/main/mainLocationsSlice";
import mainOurTeamReducer from "./slices/main/mainOurTeamSlice";
import feedBackReducer from "./slices/main/feedBackSlice";


const rootReducer = combineReducers({
   header: headerReducer,
   orderPhotosession: orderPhotosessionReducer,
   aboutProject: aboutProjectReducer,
   portfolio: portfolioReducer,
   mainServices: mainServicesReducer,
   price: priceReducer,
   mainLocations: mainLocationsReducer,
   mainTeam: mainOurTeamReducer,
   feedback: feedBackReducer
 });

export default rootReducer;

 export type RootState = ReturnType<typeof rootReducer>
