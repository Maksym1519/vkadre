import axios from "axios";
import { FeedbackPostType } from "types/modals/modals";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


export const feedbackPost = () => {
 
  //submit-data-------------------------------------------
  const onSubmit = async (data: FeedbackPostType) => {
    const fetchUser = data;
  
    try {
      const response = await axios.post<FeedbackPostType>(
        "https://vkadrestrapi.onrender.com/api/feedbacks",
        fetchUser
      );
      if (response.status === 200) {
        toast.info("Ваша отзыв успешнго отправлен !");
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
  
