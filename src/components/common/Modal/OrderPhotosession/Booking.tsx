import "./OrderPhotosession.scss";
import Button from "components/ui/buttons/Button";
import coin from "@img/coin.svg";


const Booking = ({ props}: any)=> {
  const handleClick = () => {
    props.handleSubmit();
  };

  return (
    <div className="booking">
      <div className="booking__price">
        <img src={coin} alt="coin" />
        <p className="booking__price-text">Сумму бронирования </p>
        <p className="booking__price-sum">1000 грн.</p>
      </div>
      <p className="booking__text">
        Итоговая стоимость фотосессии будет зависеть от длительности, локации и
        ваших желаний. Оплата брони нужна для того, чтобы мы были уверены в
        ваших намерениях. Если вы передумаете - мы вернём вам эту сумму.
      </p>
      <div className="booking-button" onClick={handleClick}>
        <Button text="Забронировать" type="submit"/>
      </div>
    </div>
  );
};

export default Booking;
