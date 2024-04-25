import "./Header.scss";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { useEffect, useRef, useState } from "react";
import clickOutside from "hooks/clickOutside";
import { setProfileMenu } from "store/slices/auth/authSlice";
import { userData } from "hooks/localStorageData";
import ProfileMenu from "./ProfileMenu";

const Profile = () => {
  const dispatch = useAppDispatch();
  type reduxData = [];
  const reduxData = useAppSelector((state) => state.header.header);

  //close-popup-outside----------------------------------
  const [isActive, setIsActive] = useState(false);
  
  useEffect(() => {
    setIsActive(false);
  }, []);
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
    setIsActive(false);
  };

  return (
    <div className="profile" ref={menuRef}>
      <img
        src={
          reduxData && reduxData[0].attributes.avatarIcon.data.attributes.url
        }
        alt="avatar"
        className="profile__avatar"
        onClick={showProfileMenu}
      />
      <p className="profile__text" onClick={showProfileMenu}>
        {userInfo.username ? userInfo.username : "Личный кабинет"}
      </p>
      {isActive && <ProfileMenu closeMenu={closeMenu} />}
    </div>
  );
};

export default Profile;
