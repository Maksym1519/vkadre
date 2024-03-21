import "./Authentication.scss";
import Cross from "@img/cross.svg";
import AuthNavigation from "./AuthNavigation";
import { useAppDispatch } from "store/hooks";
import { setAuthState } from "store/slices/auth/authSlice";
import { TextField } from "@mui/material";

const Authentication = () => {
  const dispatch = useAppDispatch();

  //active-index-----------------------------------------------
  
  return (
    <div className="auth">
      <div className="auth__body">
         <AuthNavigation />
         <TextField id="standard-basic"  label="Электронная почта" variant="standard" placeholder="Электронная почта" className="auth__input-email"/>
        <TextField id="standard-basic"  label="Пароль" variant="standard" placeholder="Пароль"/>
        </div>
      <img
        src={Cross}
        alt="cross"
        className="auth__cross"
        onClick={() => dispatch(setAuthState(false))}
      />
    </div>
  );
};

export default Authentication;
