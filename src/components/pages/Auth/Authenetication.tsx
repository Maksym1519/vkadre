import "./Authentication.scss";
import Cross from "@img/cross.svg";
import AuthNavigation from "./AuthNavigation";
import { useAppDispatch, useAppSelector } from "store/hooks";
import { setAuthState } from "store/slices/auth/authSlice";
import AuthEnter from "./AuthEnter";
import AuthReg from "./AuthReg";
//import { ToastContainer } from "react-toastify";


const Authentication = () => {
  const dispatch = useAppDispatch();

  const authIndexRedux = useAppSelector((state) => state.auth.index)
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
        onClick={() => dispatch(setAuthState(false))}
      />
      {/* <ToastContainer /> */}
     </div>
  );
};

export default Authentication;
