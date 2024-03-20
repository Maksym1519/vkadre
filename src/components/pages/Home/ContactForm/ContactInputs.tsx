import "./ContactForm.scss";
import Title from "components/ui/forms/Title";
import Button from "components/ui/buttons/Button";
import Arrow from "@img/inputArrow.svg";
import { useState } from "react";

const ContactInputs = () => {
  const services = [
    "Экспресс-фотосессии",
    "Индивидуальные фотосессии",
    "Экспресс-видеосъёмка",
    "Семейная фотосессия",
  ];
  //dropdown-state-------------------------------------------------
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");

  return (
    <div className="contact-inputs">
      <Title text="Напишите нам" />
      <form className="contact-inputs__wrapper">
        <input type="text" placeholder="имя" />
        <input type="number" placeholder="телефон" />
        <div
          className="contact-inputs__service-input"
          onClick={(e) => setIsActive(!isActive)}
        >
          <input
            type="text"
            placeholder={"интересующая услуга"}
            value={selected}
          />
          <img src={Arrow} alt="arrow" className="contact-inputs__arrow" />
          {isActive && (
            <div className="contact-inputs__dropdown">
              {services.map((item, index) => (
                <p
                  key={index}
                  onClick={(e) => {
                    setSelected(item);
                  }}
                >
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>
        <div className="contact-button-wrapper">
          <Button text="Заказать звонок"/>
        </div>
      </form>
    </div>
  );
};

export default ContactInputs;
