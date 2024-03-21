import "./Authentication.scss";
import { useState } from "react";
import { TextField } from "@mui/material";
import Eye from "@img/eyeClosed.svg";
import Button from "components/ui/buttons/Button";
import { useAppDispatch } from "store/hooks";
import { setAuthApiData } from "store/slices/auth/authSliceApi";

const AuthReg = () => {
  //hide/show-password-------------------------------------------------
  const [password, setPassword] = useState(false);
  const clickPassword = () => {
    setPassword(!password);
  };

  //------------------------------------------------------------------
  const [formData, setFormData] = useState({
    name: null,
    email: null,
    password: null
  })
   
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
//dispatch-formData-------------------------------------
const dispatch = useAppDispatch();
const dispatchFormData = () => {
  dispatch(setAuthApiData(formData))
}
  
  return (
    <form action="submit">
      <TextField
        id="standard-basic"
        label="ИМЯ"
        variant="standard"
        placeholder="имя"
        className="auth__input-name"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        type="text"
        name="name"
        onChange={(e) => handleChange(e)}
      />
      <TextField
        id="standard-basic"
        label="Электронная почта"
        variant="standard"
        placeholder="ЭЛЕКТРОННАЯ ПОЧТА"
        className="auth__input-email"
        style={{ minWidth: "100%",textTransform: "uppercase"}}
        name="email"
        type="email"
        onChange={(e) => handleChange(e)}
      />
      <div className="auth__input-password">
        <TextField
          id="standard-basic"
          label="ПАРОЛЬ"
          variant="standard"
          placeholder="Пароль"
          type={password ? "text" : "password"}
          name="password"
          style={{ minWidth: "100%", textTransform: "uppercase",marginBottom: "24px" }}
          onChange={(e) => handleChange(e)}
        />
        <img
          src={Eye}
          alt="hidePassword"
          className="auth__eye"
          onClick={() => clickPassword()}
        />
      </div>
     <Button text="Зарегистрироваться" onClick={() => dispatchFormData()}/>
    </form>
  );
};

export default AuthReg;
