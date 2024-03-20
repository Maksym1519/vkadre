import "./ContactForm.scss";
import Title from "components/ui/forms/Title";
import Button from "components/ui/buttons/Button";
import Arrow from "@img/inputArrow.svg";
import { useRef, useState } from "react";
import clickOutside from "hooks/clickOutside";

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

  //close-popup-outside----------------------------------
  const menuRef = useRef<HTMLDivElement>(null);

  clickOutside(menuRef, () => setIsActive(false));

  return (
    <div className="contact-inputs" ref={menuRef}>
      <Title text="Напишите нам" />
      <form className="contact-inputs__wrapper">
        <input type="text" placeholder="имя" />
        <input type="number" placeholder="телефон" />
        <div
          className="contact-inputs__service-input"
          onClick={() => setIsActive(!isActive)}
        >
          <input
            type="text"
            placeholder={"интересующая услуга"}
            value={selected}
            onChange={(e) => e.target.value}
          />
          <img src={Arrow} alt="arrow" className="contact-inputs__arrow" />
          {isActive && (
            <div className="contact-inputs__dropdown">
              {services.map((item, index) => (
                <p
                  key={index}
                  onClick={() => {
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
          <Button text="Заказать звонок" width="100%" />
        </div>
      </form>
    </div>
  );
};

export default ContactInputs;
