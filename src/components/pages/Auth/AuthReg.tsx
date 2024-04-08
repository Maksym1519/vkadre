import "./Authentication.scss";
import { useState } from "react";
import { TextField } from "@mui/material";
import Eye from "@img/eyeClosed.svg";
import Button from "components/ui/buttons/Button";
import { useForm } from "react-hook-form";
import { AuthRegFetch } from "store/slices/auth/authRegFetch";
import { FormValues } from "types/FormTypes";



const AuthReg = () => {
  //hide/show-password-------------------------------------------------
  const [password, setPassword] = useState(false);
    
  //check-input----------------------------------------------
  
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
    <form onSubmit={handleSubmit(AuthRegFetch())}>
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
          onClick={() => setPassword(!password)}
        />
      </div>

      <div className="auth__button">
        <Button
          type="submit"
          text="Зарегистрироваться"
          />
      </div>
    </form>
  );
};

export default AuthReg;

