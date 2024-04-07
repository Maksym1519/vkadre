import "./LocationDetail.scss";
import Price from "components/common/Main/Price";
import Button from "components/ui/buttons/Button";
import ServiceDetailCalendar from "../ServiceDetail/ServiceDetailCalendar";
import clickOutside from "hooks/clickOutside";
import { useRef, useState, useEffect } from "react";
import Blur from "@img/blur.webp";

const LocationDetailFooter = () => {
  const buttonWrapper = (
    <div className="service-detail-footer__price-button">
      <Button text="Заказать фотосессию" />
    </div>
  );

  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    setIsActive(false);
  }, []);

  const menuRef = useRef<HTMLDivElement>(null);
  clickOutside(menuRef, () => setIsActive(false))

  return (
    <>
      <div className="service-detail-footer__info">
        <p>
          Самый доступный вид фотосессии, в результате которой Вы получите
          качественные снимки уже на следующий день. Они проходят только по
          нашему расписанию.
        </p>
        <p>
          Фотографии с экспресс-фотосессий идеальны для публикаций в социальных
          сетях, для резюме, инстаграма, сайта знакомств и даже семейного
          альбома!
        </p>
      </div>
      <div className="service-detail-footer__price" ref={menuRef}>
        <Price button={buttonWrapper} calendar={<ServiceDetailCalendar isActive={isActive} setIsActive={setIsActive}/>} />
      </div>
      <img src={Blur} alt="blur" className="service-detail-footer__blur"/>
    </>
  );
};

export default LocationDetailFooter;
