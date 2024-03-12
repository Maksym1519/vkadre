import "./Header.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { headerInfo } from "../../../store/slices/headerSlice";
import Burger from "./Burger";
import MobileMenu from "./MobileMenu";
import HeaderNavigation from "./HeaderNavigation";

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
       <div className="header__body">
          
          <NavLink to={"/"}>
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
          </NavLink>

         <HeaderNavigation navigationString={navigationString}/>

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
     </header>
  );
};

export default Header;
