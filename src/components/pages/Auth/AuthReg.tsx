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
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";

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
  };
  const [user, setUser] = useState(initialUser);

  //dispatch-formData-------------------------------------
  const dispatch = useAppDispatch();
  const dispatchFormData = () => {
    dispatch(setAuthApiData(user));
  };

  //submit-data-------------------------------------------
  type UserFetch = {
    username: string;
    email: string;
    password: string;
  };
  const onSubmit = async (data: UserFetch) => {
    const fetchUser = data;
    setUser(fetchUser);

    try {
      const response = await axios.post(
        "https://vkadrestrapi.onrender.com/api/auth/local/register",
        fetchUser
      );
      if (response.status === 200) {
        setUser(initialUser);
        toast.info("Вы успешно зарегистрировались !");
        setTimeout(() => {
          dispatch(setAuthState(false));
        }, 1000);
      }
      return response;
    } catch (error: any) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  //check-input----------------------------------------------
  type FormValues = {
    username: string;
    email: string;
    password: string;
  };
  const form = useForm<FormValues>({
    defaultValues: {
      username: "",
      email: "",
      password: "",
    },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <TextField
        id="standard-basic"
        placeholder="ИМЯ"
        variant="standard"
        className="auth__input-name"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        type="text"
        {...register("username", { required: "Username is required" })}
        error={!!errors.username}
        helperText={errors.username?.message}
      />

      <TextField
        id="standard-basic"
        placeholder="Электронная почта"
        variant="standard"
        className="auth__input-email"
        style={{ minWidth: "100%", textTransform: "uppercase" }}
        type="text"
        {...register("email", { required: "Email is required" })}
        error={!!errors.email}
        helperText={errors.email?.message}
      />

      <div className="auth__input-password">
        <TextField
          id="standard-basic"
          placeholder="пароль (минимум 6символов)"
          variant="standard"
          type={password ? "text" : "password"}
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password is required at least 6 characters",
            },
          })}
          error={!!errors.password}
          helperText={errors.password?.message}
        />

        <img
          src={Eye}
          alt="hidePassword"
          className="auth__eye"
          onClick={() => clickPassword()}
        />
      </div>

      <div className="auth__button">
        <Button
          type="submit"
          text="Зарегистрироваться"
          onClick={() => dispatchFormData}
        />
      </div>
    </form>
  );
};

export default AuthReg;
