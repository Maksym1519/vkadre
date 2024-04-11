import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FormGuestValues } from "types/FormTypes";



export const cabinetApiFetch = (id: number | null) => {
    const onSubmit = async (data: FormGuestValues) => {
        const fetchUser = data;
                          
    try {
      const response = await axios.put<FormGuestValues>(
        `https://vkadrestrapi.onrender.com/api/guests/${id}`,
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

