import { useState } from "react";
import { useAppDispatch } from "store/hooks";
import { setIndex } from "store/slices/main/mainServicesSlice";
import "./Cabinet.scss";
import Arrow from "@img/leftArrow.svg";
import { NavLink } from "react-router-dom";
import { setAuthState } from "store/slices/auth/authSlice";
import { useMatchMedia } from "hooks/use-match-media";

const CabinetNavigation = () => {
  const widthScreen = useMatchMedia();

  const navData: Array<string | JSX.Element> = [
    "Мои данные",
    "Предстоящие фотосессии",
    "Прошедшие фотосессии",
    <NavLink to="/">Выйти</NavLink>,
  ];

  //activeIndex---------------------------------------------
  const dispatch = useAppDispatch();
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClickIndex = (index: number) => {
    setActiveIndex(index);
    dispatch(setIndex(index));
    if (index === 3) {
      localStorage.setItem("user", "");
      dispatch(setAuthState(true));
    }
  };

  return (
<>
{!widthScreen.isMobile &&
    <div className="cabinet-navigation">
      {navData.map((item, index) => (
        <div
          className={
            activeIndex === index
              ? "cabinet-navigation__item"
              : "cabinet-navigation__item_passive"
          }
          key={index}
          onClick={() => handleClickIndex(index)}
        >
          {activeIndex === index ? <img src={Arrow} alt="arrow" /> : ""}
          {item}
        </div>
      ))}
    </div>
}
</>
  );
};

export default CabinetNavigation;
