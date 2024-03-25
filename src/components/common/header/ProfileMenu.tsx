import "./Header.scss";
import { useAppDispatch } from "store/hooks";
import { setAuthState } from "store/slices/auth/authSlice";
import { userData } from "hooks/localStorageData";
import { useEffect, useState } from "react";


const ProfileMenu = ({closeMenu}: any) => {
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
    <div className="profile-menu">
      <div className="profile-menu__header">Привет<br/>{`${greetingInfo}`} !</div>
      <div className="profile-menu__body">
        {greetingInfo === "Гость" && (
          <>
            {" "}
            <p onClick={handleRegClick}>Зарегистрироваться</p>
            <p onClick={handleRegClick}>Войти</p>
          </>
        )}
      </div>
      {greetingInfo !== "Гость" && (
        <div className="profile-menu__logout" onClick={clickLogout}>
          Выйти
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
