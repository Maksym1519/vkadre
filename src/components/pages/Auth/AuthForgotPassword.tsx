import "./Authentication.scss";
import { TextField } from "@mui/material";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useState, useEffect } from "react";
import axios from "axios";
import Eye from "@img/eyeClosed.svg";
import Button from "components/ui/buttons/Button";
import emailjs from "@emailjs/browser";
import { authApiInfo } from "store/slices/auth/authSliceApi";
import { useAppSelector, useAppDispatch } from "store/hooks";

const AuthForgotPassword = () => {
  const [password, setPassword] = useState(false);
  const clickPassword = () => {
    setPassword(!password);
  };

  //get-users-from-redux------------------------------------------------
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authApiInfo());
  }, [dispatch]);
  const reduxUsers = useAppSelector((state) => state.authApi.authApi);
  console.log(reduxUsers);
  //----------------------------------------------------------------------
  // type EmailFetch = {
  //   email: string;
  //   password: string;
  // };
  // const [email, setEmail] = useState("");
  // const sendEmail = async (data: EmailFetch) => {
  //   const newEmail = data.email;
  //   setEmail(newEmail);
  //   const templateParams = {
  //     to: newEmail,
  //     to_email: email,
  //     from_name: "Maksym",
  //     to_name: "Guest",
  //     message: `Ваш новый пароль: ${data.password}`,
  //   };
  //   try {
  //     await emailjs.send(
  //       "service_npekptm",
  //       "template_kyh2hsb",
  //       templateParams,
  //       "MC7BRzxDCdfYOwX2U"
  //     );
  //   } catch (error: any) {
  //     console.error("Ошибка при отправке письма:", error.text);
  //   }
  // };
  //submit-data-------------------------------------------
  type UserFetch = {
    identifier: string,
    password: string,
    newPassword: string,
    confirmPassword: string
  };

  const onSubmit = async (data: UserFetch) => {
    const fetchUser = data;

    try {
      const response = await axios.post(
        "https://vkadrestrapi.onrender.com/api/auth/change-password",
        fetchUser
      );
      if (response.status === 200) {
        toast.info("Ваш пароль успешно изменен !");
      }
      return response;
    } catch (error: any) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };

  //validation------------------------------------------------------------
  type FormValues = {
    identifier: string;
    password: string;
    newPassword: string,
    confirmPassword: string
  };

  const form = useForm<FormValues>({
    defaultValues: {
      identifier: "",
      password: "",
      newPassword: "",
      confirmPassword: ""
      },
  });

  const { register, handleSubmit, formState } = form;
  const { errors } = formState;

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          // sendEmail(data);
        })}
      >
        <TextField
          id="standard-basic"
          placeholder="Электронная почта"
          variant="standard"
          className="auth__input-email"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...register("identifier", { required: "Email is required" })}
          error={!!errors.identifier}
          helperText={errors.identifier?.message}
        />

        <div className="auth__input-password">
          <TextField
            id="standard-basic"
            placeholder="введите пароль"
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

        <div className="auth__input-password">
          <TextField
            id="standard-basic"
            placeholder="введите новый пароль"
            variant="standard"
            type={password ? "text" : "password"}
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            {...register("newPassword", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password is required at least 6 characters",
              },
            })}
            error={!!errors.newPassword}
            helperText={errors.newPassword?.message}
          />
          <img
            src={Eye}
            alt="hidePassword"
            className="auth__eye"
            onClick={() => clickPassword()}
          />
        </div>
        <div className="auth__input-password">
          <TextField
            id="standard-basic"
            placeholder="повторите пароль"
            variant="standard"
            type={password ? "text" : "password"}
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            {...register("confirmPassword", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password is required at least 6 characters",
              },
            })}
            error={!!errors.confirmPassword}
            helperText={errors.confirmPassword?.message}
          />
          <img
            src={Eye}
            alt="hidePassword"
            className="auth__eye"
            onClick={() => clickPassword()}
          />
        </div>

        <div className="auth__button">
          <Button text="Восстановить пароль" type="submit" />
        </div>
      </form>
    </>
  );
};

export default AuthForgotPassword;
