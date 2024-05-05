import "./MainServices.scss";
import ServicesList from "./ServicesList";
import ContentService from "./ContentService";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { mainServicesInfo } from "store/slices/main/mainServicesSlice";
import { useEffect, useRef } from "react";
import OrderPhotosession from "components/common/Modal/OrderPhotosession/OrderPhotosession";

const MainServices = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(mainServicesInfo());
  }, [dispatch]);

  const modalState = useAppSelector(
    (state) => state.orderPhotosessionModal.overlay
  );

  const mainServicesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Если модальное окно открыто и ссылка на корневой элемент компонента существует
    if (modalState && mainServicesRef.current) {
      // Прокручиваем страницу к корневому элементу компонента
      mainServicesRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [modalState]);

  return (
    <div className="main-services" ref={mainServicesRef}>
      <ServicesList />
      <ContentService />
      {modalState && <OrderPhotosession />}
    </div>
  );
};
export default MainServices;
