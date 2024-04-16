import axios from "axios";
import { useAppDispatch } from "store/hooks";
import { OrderPhotoData } from "types/modals/modals";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




export const orderPhotoPost = () => {
  //dispatch-formData-------------------------------------
  const dispatch = useAppDispatch();

  //submit-data-------------------------------------------
  const onSubmit = async (data: OrderPhotoData) => {
    const fetchUser = data;
  
    try {
      const response = await axios.post<OrderPhotoData>(
        "https://vkadrestrapi.onrender.com/api/guests",
        fetchUser
      );
      if (response.status === 200) {
        toast.info("Вы успешно зарегистрировались !");
        console.log(response)
        }
      return response;
    } catch (error: any) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };
  return onSubmit;
}
  
