import "./OrderPhoto.scss";
import Title from "components/ui/forms/Title";
import Button from "components/ui/buttons/Button";
import Blur from "@img/blur.webp";

const OrderPhoto = () => {
  return (
    <div className="order-photo">
      <div className="order-photo__title">
        <Title
          text="Звоните, мы  всегда рады поговорить с вами!"
        />
      </div>

      <div className="order-photo__button">
        <Button text="Заказать фотосессию" />
      </div>

      <img src={Blur} alt="blur" className="order-photo__blur"/>
    </div>
  );
};

export default OrderPhoto;
