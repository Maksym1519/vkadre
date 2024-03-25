import "./Header.scss";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { NavLink } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { headerInfo } from "store/slices/headerSlice";
import Burger from "./Burger";
import MobileMenu from "./MobileMenu";
import ProfileMenu from "./ProfileMenu";
import HeaderNavigation from "./HeaderNavigation";
import HeaderContacts from "./HeaderContacts";
import { userData } from "hooks/localStorageData";
import clickOutside from "hooks/clickOutside";
import { setProfileMenu } from "store/slices/auth/authSlice";

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

  //close-popup-outside----------------------------------
  const [isActive, setIsActive] = useState(false);
  console.log(isActive)
  useEffect(() => {
    setIsActive(false)
  },[])
  const menuRef = useRef<HTMLDivElement>(null);

  clickOutside(menuRef, () => setIsActive(false));

  //show-profile-menu--------------------------------------------------
  const showProfileMenu = () => {
    setIsActive(true);
    dispatch(setProfileMenu(true));
  };
  //get-user-data-localstorage-------------------------------------------
  const userInfo = userData();
  //----------------------------------------------------------------------
  const closeMenu = () => {
    setIsActive(false)
  }
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

        <HeaderNavigation navigationString={navigationString} />

        <HeaderContacts contactsString={contactsString} />

        <div className="profile" onClick={showProfileMenu} ref={menuRef}>
          <img
            src={
              reduxData &&
              reduxData[0].attributes.avatarIcon.data.attributes.url
            }
            alt="avatar"
            className="profile__avatar"
          />
          <p className="profile__text">
            {userInfo.username ? userInfo.username : "Личный кабинет"}
          </p>
          {isActive && <ProfileMenu closeMenu={closeMenu}/>}
        </div>
        <Burger />
        <MobileMenu />
      </div>
    </header>
  );
};

export default Header;
