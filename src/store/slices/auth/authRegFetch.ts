import axios from "axios";
import { useAppDispatch } from "store/hooks";
import { useState } from "react";
import { setAuthApiData } from "./authSliceApi";
import { setAuthState } from "./authSlice";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthRegFetch = () => {
  //initialUser------------------------------------------------------------------
  const [user, setUser] = useState({});

  //dispatch-formData-------------------------------------
  const dispatch = useAppDispatch();
  
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
        setUser(user);
        dispatch(setAuthApiData(user));
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
return onSubmit
}