import "./Header.scss";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { getBurgerInfo } from "store/slices/headerSlice";
import { setAuthState, setProfileMenu } from "store/slices/auth/authSlice";
import { userData } from "hooks/localStorageData";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const ProfileMenu = ({ closeMenu }: any) => {
  const dispatch = useAppDispatch();

  const handleRegClick = () => {
    dispatch(setAuthState(true));
  };

  const clickLogout = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    event.stopPropagation();
    localStorage.setItem("user", "");
    closeMenu();
  };

  const userName = userData();

  const [greeting, setGreeting] = useState("");
  useEffect(() => {
    if (userName !== undefined && userName !== null) {
      setGreeting(userName.username);
    }
  }, [userName]);

  const greetingInfo = greeting ? greeting : "Гость";

  //---------------------------------------------------------
  const menuState = useAppSelector((state) => state.auth.profileMenu)
  console.log(menuState)

  const hideMenu = () => {
    if (menuState === true) {
      dispatch(setProfileMenu(false))
    }
  }

  // useEffect(() => {
  //   dispatch(setProfileMenu(false))
  // },[menuState])

  return (
<>
    <div className="profile-menu">
      <div className="profile-menu__header" onClick={hideMenu}>
        Привет
        <br />
        {`${greetingInfo}`} !
      </div>
      <div className="profile-menu__body">
        {greetingInfo === "Гость" && (
          <>
            {" "}
            <NavLink to="/">
            <p onClick={handleRegClick}>Зарегистрироваться</p>
            </NavLink>
            
            <NavLink to={"/"}>
            <p onClick={handleRegClick}>Войти</p>
            </NavLink>
          </>
        )}
      </div>
      {greetingInfo !== "Гость" && (
        <>
          <NavLink to="/Cabinet">
            <div className="profile-menu__cabinet" onClick={() => dispatch(getBurgerInfo(false))}>Личный кабинет</div>
          </NavLink>
          <div className="profile-menu__logout" onClick={(event) => {clickLogout(event); handleRegClick()}}>
            Выйти
          </div>
        </>
      )}
    </div>
</>
  );
};

export default ProfileMenu;
