import "./MainServices.scss";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { setIndex } from "store/slices/main/mainServicesSlice";
import { useMatchMedia } from "hooks/use-match-media";
import { useEffect, useState } from "react";
import arrow from "@img/mobileMenuArrow.svg";
import Button from "components/ui/buttons/Button";

const ServicesItem = () => {
  const reduxData = useAppSelector((state) => state.mainServices.mainServices);
  const array = reduxData
    ?.flatMap((item) => item.attributes.serviceNavigation)
    ?.flatMap((item) => item.children)
    .map((item) => item.text);

  const [activeIndex, setActiveIndex] = useState(0);
  const clickIndex = (index: number) => {
    setActiveIndex(index);
  };

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(setIndex(activeIndex));
  }, [activeIndex]);

  const { isMobile, setIsMobile } = useMatchMedia();
  
  const showAllItems = () => {
    setIsMobile(!isMobile);
  };

  return (
    <>
      {array &&
        array.slice(0, isMobile ? 4 : array.length).map((item, index) => (
          <div
            className={
              index === activeIndex ? "service-item_active" : "service-item"
            }
            key={index}
            onClick={() => {
              clickIndex(index);
            }}
          >
            {index === activeIndex ? <img src={arrow} alt="arrow" /> : ""}
            {item}
          </div>
        ))}
      <div className="service-item-button" onClick={showAllItems}>
        <Button text={isMobile ? "Смотреть все услуги " : "Показать меньше услуг"} />
      </div>
    </>
  );
};
export default ServicesItem;
