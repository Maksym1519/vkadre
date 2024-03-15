import "./MainServices.scss";
import ServicesList from "./ServicesList";
import ContentService from "./ContentService";
import { useAppDispatch } from "store/hooks";
import { mainServicesInfo } from "store/slices/main/mainServicesSlice";
import { useEffect } from "react";

const MainServices = () => {
    const dispatch = useAppDispatch();
    useEffect(() => {
      dispatch(mainServicesInfo())
    },[dispatch])

    return (
        <div className="main-services">
           <ServicesList />
           <ContentService />
        </div>
    )
}
export default MainServices;