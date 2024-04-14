import "./OrderPhotosession.scss";
import Title from "components/ui/forms/Title";
import Close from "@img/cross.svg";
import { useAppDispatch } from "store/hooks";
import { setOrderphoto } from "store/slices/modals/orderPhotosessionSlice";
import OrderPhotoForm from "./OrderPhotoForm";

const OrderPhotosession = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="order-photosession">
      <div className="order-photosession__body">
        <h2 className="order-photosession__title">
          <Title text="Заказать фотосессию" />
        </h2>

        <img
          src={Close}
          alt="close"
          className="order-photosession__close"
          onClick={() => dispatch(setOrderphoto(false))}
        />

        <OrderPhotoForm />
      </div>
    </div>
  );
};

export default OrderPhotosession;
