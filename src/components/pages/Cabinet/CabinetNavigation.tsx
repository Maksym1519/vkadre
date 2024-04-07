import { useState } from "react";
import "./Cabinet.scss";
import Arrow from "@img/leftArrow.svg";

const CabinetNavigation = () => {
  const navData: Array<string> = [
    "Мои данные",
    "Предстоящие фотосессии",
    "Прошедшие фотосессии",
    "Выйти",
  ];
  //activeIndex---------------------------------------------
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="cabinet-navigation">
      {navData.map((item, index) => (
        <div
          className={
            activeIndex === index ? "cabinet-navigation__item" : "cabinet-navigation__item_passive"
          }
          key={index}
          onClick={() => setActiveIndex(index)}
        >
          {activeIndex === index ? <img src={Arrow} alt="arrow" /> : ""}
          {item}
        </div>
      ))}
    </div>
  );
};

export default CabinetNavigation;
