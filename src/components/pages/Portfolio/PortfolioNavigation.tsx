import { useState, useEffect, useRef } from "react";
import { useAppDispatch } from "store/hooks";
import { setPortfolioIndex } from "store/slices/portfolio/portfolioPageSlice";
import "./Portfolio.scss";
import Dots from "@img/dots.svg";
import PortfolioPopup from "./PortfolioPopup";
import clickOutside from "hooks/clickOutside";

const PortfolioNavigation = () => {
  const navItems: Array<string> = [
    "Все",
    "Экспресс",
    "Индивидуальная фотосессия",
    "Экспресс-видеосъемка",
    "Семейная фотосессия",
    "Фотосессии в ОДЕССЕ",
  ];
  //activeIndex----------------------------------------------------------------
  const [activeIndex, setActiveIndex] = useState(0);
  const clickIndex = (index: number) => {
    setActiveIndex(index);
  };

  //popup-----------------------------------------------------------------------
  const [popup, setPopup] = useState(false);
  const togglePopup = () => {
    setPopup(!popup);
  };

  //click-outside---------------------------------------------------
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    setIsActive(false);
  }, []);

  const menuRef = useRef<HTMLDivElement>(null);

  clickOutside(menuRef, () => setIsActive(false));

  //setActiveIndex-------------------------------------------
  const dispatch = useAppDispatch()

  return (
    <div className="portfolio-navigation" ref={menuRef}>
      <div className="portfolio-navigation__items">
        {navItems.map((item, index) => (
          <div
            className={
              activeIndex === index
                ? "portfolio-navigation__item-active"
                : "portfolio-navigation__item-passive"
            }
            key={index}
            onClick={() => {clickIndex(index);dispatch(setPortfolioIndex(index))}}
          >
            {item}
          </div>
        ))}
      </div>
      <div className="portfolio-navigation__more">
        <img
          src={Dots}
          alt="dots"
          onClick={() => {
            setIsActive(true), togglePopup();
          }}
        />
      </div>
      {isActive && popup && <PortfolioPopup />}
    </div>
  );
};

export default PortfolioNavigation;
