import axios from "axios";
import { useAppDispatch } from "store/hooks";
import { setAuthApiData } from "./authSliceApi";
import { setAuthState } from "./authSlice";
import { FormValues } from "types/FormTypes";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const AuthRegFetch = () => {
 
  //dispatch-formData-------------------------------------
  const dispatch = useAppDispatch();
  
  //submit-data-------------------------------------------
  
  const onSubmit = async (data: FormValues) => {
    const fetchUser = data;
   
    try {
      const response = await axios.post(
        "https://vkadrestrapi.onrender.com/api/auth/local/register",
        fetchUser
      );
      if (response.status === 200) {
        dispatch(setAuthApiData(fetchUser));
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