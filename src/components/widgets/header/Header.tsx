import "./Header.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
import { headerInfo } from "../../../store/slices/headerSlice";
import Burger from "./Burger";
import MobileMenu from "./MobileMenu";

const Header = () => {
  const dispatch = useAppDispatch();
  type reduxData = [];
  const reduxData = useAppSelector((state) => state.header.header);

  useEffect(() => {
    dispatch(headerInfo());
  }, []);

  const navigationString =
    reduxData && reduxData[0].attributes.navigation.split(",");
  const contactsString =
    reduxData && reduxData[0].attributes.contact.split(",");

  return (
    <header className="header">
      <div className="container">
       <div className="header__body">
          <div className="logo">
            <img
              src={
                reduxData && reduxData[0].attributes.logo.data.attributes.url
              }
              alt="logo"
              className="header-image"
            />
            <div className="logo__description">
              {reduxData && reduxData[0].attributes.logoDescription}
            </div>
          </div>

          <nav className="navigation">
            <a href="#" className="navigation__item">
              {navigationString && navigationString[0]}
            </a>
            <a href="#" className="navigation__item">
              {navigationString && navigationString[1]}
            </a>
            <a href="#" className="navigation__item">
              {navigationString && navigationString[2]}
            </a>
          </nav>

          <div className="contacts contacts--margin">
            <span className="contacts__item">
              {contactsString && contactsString[0]}
            </span>
            <span className="contacts__item">FB.com/vkadre</span>
            <span className="contacts__item">
              {contactsString && contactsString[2]}
            </span>
          </div>

          <div className="profile">
            <img
              src={
                reduxData &&
                reduxData[0].attributes.avatarIcon.data.attributes.url
              }
              alt="avatar"
              className="profile__avatar"
            />
            <p className="profile__text">личный кабинет</p>
          </div>
          <Burger />
          <MobileMenu />
        </div>
        </div>
     </header>
  );
};

export default Header;
