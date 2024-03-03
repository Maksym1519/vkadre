import "./Header.scss";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { useEffect } from "react";
import { headerInfo } from "../../../store/slices/headerSlice";
import logo from "../../../assets/images/Logo (1).svg";
import avatar from "../../../assets/images/avatarIcon.svg";

const Header = () => {
  const dispatch = useAppDispatch();
  const reduxData = useAppSelector((state) => state.header.header);
  useEffect(() => {
    dispatch(headerInfo());
    console.log(reduxData);
  }, [dispatch]);

  return (
    <header className="header">
      <div className="header-body">
        <div className="header-logo">
          <img src={logo} alt="logo" className="header-image"/>
          <div className="header-logoDescription">
            Качественные фотографии в кратчайшие сроки
          </div>
        </div>

        <nav className="navigation">
          <a href="#" className="navigation-item">Портфолио</a>
          <a href="#" className="navigation-item">Услуги</a>
          <a href="#" className="navigation-item">Локации</a>
        </nav>

        <div className="contacts contacts--margin">
          <span className="contacts-item">+380971234567</span>
          <span className="contacts-item">FB.com/vkadre</span>
          <span className="contacts-item">VKADRE@GMAIL.COM</span>
        </div>

        <div className="profile">
          <img src={avatar} alt="avatar" className="profile-avatar"/>
          <p className="profile-text">личный кабинет</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
