import "./Authentication.scss";
import { useState } from "react";
import { useAppDispatch } from "store/hooks";
import { setAuthIndex } from "store/slices/auth/authSlice";

const AuthNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const clickIndex = (index: number) => {
    setActiveIndex(index);
  };

  const dispatch = useAppDispatch();
  const clickAuthIndex = (index: number) => {
    dispatch(setAuthIndex(index))
  }

  return (
    <div className="auth__header">
      <div
        className={
          activeIndex === 0
            ? "auth__header-enter-active"
            : "auth__header-enter-passive"
        }
        onClick={() => {clickIndex(0); clickAuthIndex(0)}}
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
        onClick={() => {clickIndex(1); clickAuthIndex(1)}}
      >
        Регистрация
      </div>
    </div>
  );
};

export default AuthNavigation;
