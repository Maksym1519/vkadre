import "./Authentication.scss";
import { useState } from "react";
import { TextField } from "@mui/material";
import Eye from "@img/eyeClosed.svg";
import Button from "components/ui/buttons/Button";
import { useAppDispatch } from "store/hooks";
import { setAuthApiData } from "store/slices/auth/authSliceApi";
import { setAuthState } from "store/slices/auth/authSlice";
import axios from "axios";
import { toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const AuthReg = () => {
  //hide/show-password-------------------------------------------------
  const [password, setPassword] = useState(false);
  const clickPassword = () => {
    setPassword(!password);
  };

  //------------------------------------------------------------------
  const initialUser = {
    username: "",
    email: "",
    password: "",
  }
  const [user, setUser] = useState(initialUser);

  const handleChange = (e: React.SyntheticEvent) => {
    const { name, value } = e.target as HTMLInputElement;
    setUser({ ...user, [name]: value });
  };

  //dispatch-formData-------------------------------------
  const dispatch = useAppDispatch();
  const dispatchFormData = () => {
    dispatch(setAuthApiData(user));
  };

  //submit-data-------------------------------------------
    const handleSubmit = async (e: any) => {
    e.preventDefault();
      
    try {
        const response = await axios.post(
        "https://vkadrestrapi.onrender.com/api/auth/local/register",
        user
      );
      if (response.status === 200) {
        setUser(initialUser)
        toast.info("Success")
        setTimeout(() => {
          dispatch(setAuthState(false))
        },3000)
      }
      return response;
    } catch (error: any) {
      toast.error(error.message, {
        hideProgressBar: true
      })
    }
  };

  //check-input----------------------------------------------
 const [emailDirty, setEmailDirty] = useState(false);
 const [passwordDirty, setPasswordDirty] = useState(false);
 const [emailError, setEmailError] = useState("Поле не может быть пустым")
 const [passwordError, setPasswordError] = useState("Поле не может быть пустым")

 const leaveInput = (e: any) => {
  switch (e.target.name) {
   case "email": 
   setEmailDirty(true)
  }
 }

  return (
    <form onSubmit={handleSubmit}>
      {emailDirty && emailError && <div style={{color: "red"}}>{emailError}</div>}
      <TextField
        id="standard-basic"
        placeholder="ИМЯ"
        variant="standard"
        className="auth__input-name"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        type="text"
        name="username"
        value={user.username}
        onChange={(e) => handleChange(e)}
      />

      <TextField
        id="standard-basic"
        placeholder="Электронная почта"
        variant="standard"
        className="auth__input-email"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        name="email"
        type="text"
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


      <Button
        type="submit"
        text="Зарегистрироваться"
        onClick={() => dispatchFormData}
      />
    </form>
  );
};

export default AuthReg;
