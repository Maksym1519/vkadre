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
import questionsReducer from "./slices/main/questionsSlice";
import authReducer from "./slices/auth/authSlice";
import authSliceReducer from "./slices/auth/authSliceApi";
import portfolioPageReducer from "./slices/portfolio/portfolioPageSlice";
import ourTeamReducer from "./slices/ourTeam/ourTeamSlice";
import servicesReducer from "./slices/services/servicesSlice";
import serviceDetailReducer from "./slices/services/serviceDetailSlice";
import anotherServicesReducer from "./slices/services/anotherServicesSlice";
import locationPageReducer from "./slices/location/locationPageSlice";
import locationDetailReducer from "./slices/location/locationDetailSlice";
import cabinetApiReducer from "./slices/cabinet/cabinetApiSlice";
import orderPhotosessionModalReducer from "./slices/modals/orderPhotosession/orderPhotosessionSlice";
import futurePhotosessionReducer from "./slices/modals/orderPhotosession/futurePhotosessionSlice";
import feedbackModalReducer from "./slices/modals/feedback/feedbackModalSlice";


const rootReducer = combineReducers({
   header: headerReducer,
   orderPhotosession: orderPhotosessionReducer,
   aboutProject: aboutProjectReducer,
   portfolio: portfolioReducer,
   mainServices: mainServicesReducer,
   price: priceReducer,
   mainLocations: mainLocationsReducer,
   mainTeam: mainOurTeamReducer,
   feedback: feedBackReducer,
   questions: questionsReducer,
   auth: authReducer,
   authApi: authSliceReducer,
   portfolioPage: portfolioPageReducer,
   ourTeam: ourTeamReducer,
   services: servicesReducer,
   serviceDetail: serviceDetailReducer,
   anotherService: anotherServicesReducer,
   locations: locationPageReducer,
   locationDetail: locationDetailReducer,
   guests: cabinetApiReducer,
   orderPhotosessionModal: orderPhotosessionModalReducer,
   futurePhotosession: futurePhotosessionReducer,
   feedbackModal: feedbackModalReducer
 });

export default rootReducer;

 export type RootState = ReturnType<typeof rootReducer>
