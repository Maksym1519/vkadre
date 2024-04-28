import "./MainServices.scss";
import ServicesList from "./ServicesList";
import ContentService from "./ContentService";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { mainServicesInfo } from "store/slices/main/mainServicesSlice";
import { useEffect } from "react";
import OrderPhotosession from "components/common/Modal/OrderPhotosession/OrderPhotosession";

const MainServices = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mainServicesInfo());
  }, [dispatch]);

  const modalState = useAppSelector(
    (state) => state.orderPhotosessionModal.overlay
  );

  return (
    <div className="main-services">
      <ServicesList />
      <ContentService />
      {modalState && <OrderPhotosession />}
    </div>
  );
};
export default MainServices;
