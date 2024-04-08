import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormGuestValues } from "types/FormTypes";



export const cabinetApiFetch = () => {
    const onSubmit = async (data: FormGuestValues) => {
        const fetchUser = data;
                   
    try {
      const response = await axios.post(
        "https://vkadrestrapi.onrender.com/api/guests",
        fetchUser
      );
      
      if (response.status === 200) {
        toast.info("Ваши данные сохранены !");
       }
      return response;
    } catch (error: any) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
    }
    return onSubmit
}

