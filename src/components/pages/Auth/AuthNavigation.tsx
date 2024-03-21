import "./Authentication.scss";
import { useState } from "react";

const AuthNavigation = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const clickIndex = (index: number) => {
    setActiveIndex(index);
  };
  return (
    <div className="auth__header">
      <div
        className={
          activeIndex === 0
            ? "auth__header-enter-active"
            : "auth__header-enter-passive"
        }
        onClick={() => clickIndex(0)}
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
        onClick={() => clickIndex(1)}
      >
        Регистрация
      </div>
    </div>
  );
};

export default AuthNavigation;
