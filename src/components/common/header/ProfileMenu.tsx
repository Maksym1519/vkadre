import "./Header.scss";
import { useAppDispatch } from "store/hooks";
import { getBurgerInfo } from "store/slices/headerSlice";
import { setAuthState } from "store/slices/auth/authSlice";
import { userData } from "hooks/localStorageData";
import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

interface PropsType {
  closeMenu: () => void
}

const ProfileMenu = ({ closeMenu }: PropsType) => {
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

  
  return (
    <>
      <div className="profile-menu">
        <div className="profile-menu__header">
          Привет
          <br />
          {`${greetingInfo}`} !
        </div>
        <div className="profile-menu__body">
          {greetingInfo === "Гость" && (
            <>
              {" "}
              <NavLink to="/">
                <p onClick={() => {handleRegClick(); closeMenu()}}>Зарегистрироваться</p>
              </NavLink>
              <NavLink to={"/"}>
                <p onClick={() => {handleRegClick(); closeMenu()}}>Войти</p>
              </NavLink>
            </>
          )}
        </div>
        {greetingInfo !== "Гость" && (
          <>
            <NavLink to="/Cabinet">
              <div
                className="profile-menu__cabinet"
                onClick={() => {dispatch(getBurgerInfo(false)); closeMenu()}}
              >
                Личный кабинет
              </div>
            </NavLink>
            <div
              className="profile-menu__logout"
              onClick={(event) => {
                clickLogout(event);
                handleRegClick();
                closeMenu()
              }}
            >
              Выйти
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default ProfileMenu;
