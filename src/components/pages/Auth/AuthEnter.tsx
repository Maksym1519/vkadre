import "./Authentication.scss";
import { useState } from "react";
import { TextField } from "@mui/material";
import Eye from "@img/eyeClosed.svg";
import Button from "components/ui/buttons/Button";

const AuthEnter = () => {
  //hide/show-password-------------------------------------------------
  const [password, setPassword] = useState(false);
  const clickPassword = () => {
    setPassword(!password);
  };

  return (
    <form action="submit">
      <TextField
        id="standard-basic"
        label="Электронная почта"
        variant="standard"
        placeholder="Электронная почта"
        className="auth__input-email"
        style={{ minWidth: "100%" }}
      />
      <div className="auth__input-password">
        <TextField
          id="standard-basic"
          label="Пароль"
          variant="standard"
          placeholder="Пароль"
          type={password ? "text" : "password"}
          style={{ minWidth: "100%" }}
        />
        <img
          src={Eye}
          alt="hidePassword"
          className="auth__eye"
          onClick={() => clickPassword()}
        />
      </div>
      <div className="auth__forgot-password">Забыли пароль?</div>
      <Button text="Войти" />
    </form>
  );
};

export default AuthEnter;
