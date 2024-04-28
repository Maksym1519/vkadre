import "./OrderPhoto.scss";
import { useAppDispatch } from "store/hooks";
import { setOrderphoto } from "store/slices/modals/orderPhotosession/orderPhotosessionSlice";
import Title from "components/ui/forms/Title";
import Button from "components/ui/buttons/Button";
import Blur from "@img/blur.webp";

const OrderPhoto = () => {
   //set-modal-order-photo---------------------------
   const dispatch = useAppDispatch();
   const handleModalClick = () => {
     dispatch(setOrderphoto(true));
   };

  return (
    <div className="order-photo">
      <div className="order-photo__title">
        <Title text="Звоните, мы  всегда рады поговорить с вами!" />
      </div>
      
      <div className="order-photo__button" onClick={handleModalClick}>
        <Button text="Заказать фотосессию" />
      </div>

      <img src={Blur} alt="blur" className="order-photo__blur" />
    </div>
  );
};

export default OrderPhoto;
