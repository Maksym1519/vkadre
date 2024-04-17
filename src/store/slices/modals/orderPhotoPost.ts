import axios from "axios";
import { FuturePhotoPostType } from "types/modals/modals";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




export const orderPhotoPost = () => {
 
  //submit-data-------------------------------------------
  const onSubmit = async (data: FuturePhotoPostType) => {
    const fetchUser = data;
  
    try {
      const response = await axios.post<FuturePhotoPostType>(
        "https://vkadrestrapi.onrender.com/api/photosessions",
        fetchUser
      );
      if (response.status === 200) {
        toast.info("Ваша заявка успешно создана !");
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
  
