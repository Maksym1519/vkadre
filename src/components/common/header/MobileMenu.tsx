import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../../store/hooks";
import { getBurgerInfo } from "store/slices/headerSlice";
import arrow from "@img/mobileMenuArrow.svg";
import Profile from "./Profile";

const MobileMenu = () => {
  const mobileMenuState = useAppSelector((state) => state.header.burger);

  const [activeIndex, setActiveIndex] = useState(0);
  const clickActiveIndex = (index: number) => {
    setActiveIndex(index);
  };

  const reduxData = useAppSelector((state) => state.header.header);
  const navigationString =
    reduxData && reduxData[0].attributes.navigation.split(",");
  const contactsString =
    reduxData && reduxData[0].attributes.contact.split(",");

    const dispatch = useAppDispatch()
    const clickBurger = () => {
       dispatch(getBurgerInfo(false))
      }
      

  return (
    <>
      {mobileMenuState && (
        <div className={mobileMenuState ? "mobile-menu" : "menu-none"}>
         <nav className="navigation-mobile">
         <Profile />
            <div
              className="navigation-mobile__item"
              onClick={() => {clickActiveIndex(0); clickBurger()}}
            >
              {activeIndex === 0 && <img src={arrow}></img>}
              <NavLink to="/" className="navigation-mobile__link">
                Главная
              </NavLink>
            </div>

            <div
              className="navigation-mobile__item"
              onClick={() => {clickActiveIndex(1); clickBurger()}}
            >
              {activeIndex === 1 && <img src={arrow}></img>}
              <NavLink to="/Portfolio" className="navigation-mobile__link">
                {navigationString && navigationString[0]}
              </NavLink>
            </div>

            <div
              className="navigation-mobile__item"
              onClick={() => {clickActiveIndex(2); clickBurger()}}
            >
              {activeIndex === 2 && <img src={arrow}></img>}
              <NavLink to="/Services" className="navigation-mobile__link">
                {navigationString && navigationString[1]}
              </NavLink>
            </div>

            <div
              className="navigation-mobile__item"
              onClick={() => {clickActiveIndex(3); clickBurger()}}
            >
              {activeIndex === 3 && <img src={arrow}></img>}
              <NavLink to="/Locations" className="navigation-mobile__link">
                {navigationString && navigationString[2]}
              </NavLink>
            </div>
          </nav>

          <div className="mobile-menu-contacts">
            <p className="mobile-menu-contacts__link">
              {contactsString && contactsString[0]}
            </p>
            <p className="mobile-menu-contacts__link">
              FB.com/vkadre
            </p>
            <p className="mobile-menu-contacts__link">
              {contactsString && contactsString[2]}
            </p>
          </div>
        </div>
      )}
    </>
  );
};
export default MobileMenu;
