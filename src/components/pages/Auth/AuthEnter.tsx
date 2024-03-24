import "./Authentication.scss";
import { useState } from "react";
import { TextField } from "@mui/material";
import Eye from "@img/eyeClosed.svg";
import Button from "components/ui/buttons/Button";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useAppDispatch } from "store/hooks";
import { setAuthState } from "store/slices/auth/authSlice";

const AuthEnter = () => {
  //hide/show-password-------------------------------------------------
  const [password, setPassword] = useState(false);
  const clickPassword = () => {
    setPassword(!password);
  };

  //dispatch----------------------------------------------------------
  const dispatch = useAppDispatch()
  //send=data-to-server-------------------------------------------------
  const initialUser = { email: "", password: "" };

  const [user, setUser] = useState(initialUser);
  
  const handleChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUser({ ...user, [name]: value });
  };

  const handleSubmitLogin = async (e: any) => {
    e.preventDefault();
    try {
      const { data } = await axios.post(
        "https://vkadrestrapi.onrender.com/api/auth/local",
        user
      );
      console.log(data)
      if (data.jwt) {
        setUser(initialUser);
        toast.info("Success")
        setTimeout(() => {
          dispatch(setAuthState(false))
        },3000)
      }
    } catch (error: any) {
      toast.error(error.message, {
        hideProgressBar: true
      })
    }
  };

  return (
    <form onSubmit={handleSubmitLogin}>
      <TextField
        id="standard-basic"
        placeholder="Электронная почта"
        variant="standard"
        className="auth__input-email"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        name="email"
        value={user.email}
        onChange={(e) => handleChange(e)}
      />

      <div className="auth__input-password">
        <TextField
          id="standard-basic"
          placeholder="пароль"
          variant="standard"
          type={password ? "text" : "password"}
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          name="password"
          value={user.password}
          onChange={(e) => handleChange(e)}
        />

        <img
          src={Eye}
          alt="hidePassword"
          className="auth__eye"
          onClick={() => clickPassword()}
        />
      </div>

      <div className="auth__forgot-password">Забыли пароль?</div>

      <Button text="Войти" type="submit" />
    </form>
  );
};

export default AuthEnter;
