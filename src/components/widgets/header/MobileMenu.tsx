import "./Header.scss";
import { useState } from "react";
import { useAppSelector } from "../../../store/hooks";
import arrow from "../../../assets/images/mobileMenuArrow.svg";


const MobileMenu = () => {
const mobileMenuState = useAppSelector((state) => state.header.burger)

const [activeIndex, setActiveIndex] = useState(0);
const clickActiveIndex = (index: number) => {
  setActiveIndex(index)
}

const reduxData =  useAppSelector((state) => state.header.header);
const navigationString = reduxData && reduxData[0].attributes.navigation.split(",")
const contactsString = reduxData && reduxData[0].attributes.contact.split(",");

  return (
<>
{mobileMenuState &&
    <div className={mobileMenuState ? "mobileMenu" : "mobileMenuOff"}>
      <nav className="mobileNavigation">

        <div className="mobileNavigation-link-wrapper" onClick={() => clickActiveIndex(0)}>
          {activeIndex === 0 && <img src={arrow}></img>}
          <a href="#" className="mobileNavigation-link">
          Главная
          </a>
        </div>

        <div className="mobileNavigation-link-wrapper" onClick={() => clickActiveIndex(1)}>
        {activeIndex === 1 && <img src={arrow}></img>}
          <a href="#" className="mobileNavigation-link">
          {navigationString && navigationString[0]}
          </a>
        </div>

        <div className="mobileNavigation-link-wrapper" onClick={() => clickActiveIndex(2)}>
        {activeIndex === 2 && <img src={arrow}></img>}
          <a href="#" className="mobileNavigation-link">
          {navigationString && navigationString[1]}
          </a>
        </div>

        <div className="mobileNavigation-link-wrapper" onClick={() => clickActiveIndex(3)}>
        {activeIndex === 3 && <img src={arrow}></img>}
          <a href="#" className="mobileNavigation-link">
          {navigationString && navigationString[1]}
          </a>
        </div>

      </nav>

      <div className="mobileMenu-contacts">
         <a href="#" className="mobileMenu-contacts-link">{contactsString && contactsString[0]}</a>
         <a href="#" className="mobileMenu-contacts-link">FB.com/vkadre</a>
         <a href="#" className="mobileMenu-contacts-link">{contactsString && contactsString[2]}</a>
      </div>
    </div>
}
</>
  );
};
export default MobileMenu;
