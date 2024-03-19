import "./ContactForm.scss";
import Title from "components/ui/forms/Title";
import Arrow from "@img/inputArrow.svg";

const ContactInputs = () => {
  const services = [
    "Экспресс-фотосессии",
    "Индивидуальные фотосессии",
    "Экспресс-видеосъёмка",
    "Семейная фотосессия",
  ];

  return (
    <div className="contact-inputs">
      <Title text="Напишите нам" />
      <form className="contact-inputs__wrapper">
        <input type="text" placeholder="имя" />
        <input type="number" placeholder="телефон" />
        <div className="contact-inputs__service-input">
          <input type="text" placeholder="интересующая услуга" />
          <img src={Arrow} alt="arrow" className="contact-inputs__arrow" />
        </div>
      </form>
    </div>
  );
};

export default ContactInputs;
