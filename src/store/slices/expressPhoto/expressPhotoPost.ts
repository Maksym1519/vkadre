import axios from "axios";
import { ExpressPhotoType } from "types/expressPhoto/expressPhotoType";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const expressPhotoPost = () => {
  //submit-data-------------------------------------------
  const onSubmit = async (data: ExpressPhotoType) => {
    const fetchUser = data;
    console.log(fetchUser);
    try {
      const response = await axios.post<ExpressPhotoType>(
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
};
