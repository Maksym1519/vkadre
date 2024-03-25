import "./Authentication.scss";
import Cross from "@img/cross.svg";
import AuthNavigation from "./AuthNavigation";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setAuthState, setAuthIndex } from "store/slices/auth/authSlice";
import AuthEnter from "./AuthEnter";
import AuthReg from "./AuthReg";
//import { ToastContainer } from "react-toastify";


const Authentication = () => {
  const dispatch = useAppDispatch();

  const authIndexRedux = useAppSelector((state) => state.auth.index);

  const clickClose = () => {
    dispatch(setAuthState(false))
    dispatch(setAuthIndex(0))
  }
  return (
    <div className="auth">
      <div className="auth__body">
        <AuthNavigation />
        {authIndexRedux === 0 ?  <AuthEnter /> : <AuthReg />}
      
      </div>
      <img
        src={Cross}
        alt="cross"
        className="auth__cross"
        onClick={() => dispatch(clickClose)}
      />
     </div>
  );
};

export default Authentication;
