import { useState, useEffect, useRef } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setPortfolioIndex } from "store/slices/portfolio/portfolioPageSlice";
import { useMatchMedia } from "hooks/use-match-media";
import "./Portfolio.scss";
import Dots from "@img/dots.svg";
import Arrow from "@img/inputArrow.svg";
import PortfolioPopup from "./PortfolioPopup";
import clickOutside from "hooks/clickOutside";


const PortfolioNavigation = () => {
   //select-city------------------------------------------
   const selectedCity = useAppSelector((state) => state.portfolioPage.city)
    
  const navItems: Array<string | React.ReactNode >= [
    "Все",
    "Экспресс",
    "Индивидуальная фотосессия",
    "Экспресс-видеосъемка",
    "Семейная фотосессия",
    <div>{selectedCity}</div>,
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

 //useMatchMedia-------------------------------------------
 const isMobile = useMatchMedia()
 console.log(isMobile)

  return (
    <div className="portfolio-navigation" ref={menuRef}>
      <div className="portfolio-navigation__items">
        {isMobile.isMobile ? navItems[0] : navItems.map((item, index) => (
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
          src={isMobile.isMobile ? Arrow : Dots}
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
