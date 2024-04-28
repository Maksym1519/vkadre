import "./ContactForm.scss";
import MediaContacts from "./MediaContacts";
import ContactInputs from "./ContactInputs";
import Blur from "@img/Splines  00039.webp";


const ContactForm = () => {
    
   return (
    <section className="contact-form">
      <div className="contact-form__contacts">
        <h3 className="contact-form__title">
          Звоните, мы всегда рады поговорить с вами!
        </h3>
        <MediaContacts />
      </div>
      <div className="contact-form__inputs">
        <ContactInputs />
      </div>
      <img src={Blur} alt="blur" className="contact-form__blur" />
    </section>
  );
};

export default ContactForm;
