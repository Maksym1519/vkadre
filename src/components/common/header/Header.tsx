import "./Header.scss";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import { headerInfo } from "store/slices/headerSlice";
import Burger from "./Burger";
import MobileMenu from "./MobileMenu";
import HeaderNavigation from "./HeaderNavigation";
import HeaderContacts from "./HeaderContacts";
import Profile from "./Profile";
import { useMatchMedia } from "hooks/use-match-media";

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

  //isMobile----------------------------------------------------------
  const isDesctop = useMatchMedia();

  return (
    <header className="header">
      <div className="header__body">
        <NavLink to={"/"}>
          <div className="logo">
            <img
              src={
                (reduxData &&
                  reduxData[0].attributes.logo.data.attributes.url) ||
                ""
              }
              loading="lazy"
              alt="logo"
              className="header-image"
            />

            <div className="logo__description">
              {reduxData && reduxData[0].attributes.logoDescription}
            </div>
          </div>
        </NavLink>
        <HeaderNavigation navigationString={navigationString} />
        <HeaderContacts contactsString={contactsString} />
        {isDesctop.isDesktop && <Profile />}
        {isDesctop.isTablet && <Profile />}
        <Burger />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
