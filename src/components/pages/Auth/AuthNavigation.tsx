import "./Authentication.scss";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setAuthIndex } from "store/slices/auth/authSlice";


const AuthNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const clickIndex = (index: number) => {
    setActiveIndex(index);
  };

  const dispatch = useAppDispatch();
  const clickAuthIndex = (index: number) => {
    dispatch(setAuthIndex(index));
  };

  //current-index--------------------------------------------
  const currentIndex = useAppSelector((state) => state.auth.index)
  
  return (
    <div className="auth__header">
      {(currentIndex === 0 || currentIndex === 1) &&  (
          <>
            <div
              className={
                activeIndex === 0
                  ? "auth__header-enter-active"
                  : "auth__header-enter-passive"
              }
              onClick={() => {
                clickIndex(0);
                clickAuthIndex(0);
              }}
            >
              Вход
            </div>

            <div className="auth__header-slash">/</div>

            <div
              className={
                activeIndex === 1
                  ? "auth__header-enter-active"
                  : "auth__header-enter-passive"
              }
              onClick={() => {
                clickIndex(1);
                clickAuthIndex(1);
              }}
            >
              Регистрация
            </div>
          </>
        )}
      <div>
        {currentIndex === 2 && (
          <div className="auth__header-enter-active">Восстановление пароля</div>
        )}
      </div>
    </div>
  );
};

export default AuthNavigation;
