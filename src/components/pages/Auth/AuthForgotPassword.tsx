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
  
  //get-users-from-redux------------------------------------------------
  const [email, setEmail] = useState<string | undefined>();
  const handleEmailOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value)
  } 

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(authApiInfo());
  }, [dispatch]);
  const reduxUsers = useAppSelector((state) => state.authApi.authApi);
  console.log(reduxUsers);

  const userId = reduxUsers?.filter(
    (item) => item?.attributes?.email === email
  );
  console.log(userId);

  //send-message---------------------------------------------------------
    const sendEmail = async (data: UserFetch) => {
    const newEmail = data.email;
    setEmail(newEmail);
    const templateParams = {
      to: newEmail,
      to_email: email,
      from_name: "Administration",
      to_name: "Guest",
      message: `Ваш новый пароль: ${"123456"}`,
    };
    try {
      await emailjs.send(
        "service_npekptm",
        "template_kyh2hsb",
        templateParams,
        "MC7BRzxDCdfYOwX2U"
      );
    } catch (error: any) {
      console.error("Ошибка при отправке письма:", error.text);
    }
  };

  //submit-data-------------------------------------------
  type UserFetch = {
    email: string;
    password: string
  };

  const onSubmit = async (data: UserFetch) => {
    const fetchUser = data;
    const newPassword = {
      password: "123456",
    };
    // sendEmail(fetchUser);
    try {
      const response = await axios.put(
        `https://vkadrestrapi.onrender.com/api/users/${9}`,
        newPassword
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
    email: string;
    password: string
  };

  const form = useForm<FormValues>();

  const { register, handleSubmit, watch, formState } = form;
  const { errors } = formState;

  //setEmail-for-send-message-----------------------------------------
  useEffect(() => {
    setEmail(watch("email"));
  }, [watch]);
 
   return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          
        })}
      >
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
          value={email}
          onChange={handleEmailOnChange}
        />

        {/* <div className="auth__input-password">
          <TextField
            id="standard-basic"
            placeholder="текущий пароль"
            variant="standard"
            type={password ? "text" : "password"}
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            {...register("email", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password is required at least 6 characters",
              },
            })}
            error={!!errors.email}
            helperText={errors.email?.message}
          />
          <img
            src={Eye}
            alt="hidePassword"
            className="auth__eye"
            onClick={() => setPassword(!password)}
          />
        </div> */}

        <div className="auth__button">
          <Button text="Восстановить пароль" type="submit" />
        </div>
      </form>
    </>
  );
};

export default AuthForgotPassword;
