import "./ContactForm.scss";
import { useAppSelector } from "store/hooks";

const MediaContacts = () => {
  const reduxData = useAppSelector((state) => state.header.header);

 
  const contactsString =
    reduxData && reduxData[0].attributes.contact.split(",");

  return (
    <div className="media-contacts">
      {contactsString &&
        contactsString.map((item: string, index: number) => (
          <div className="media-contacts__item" key={index}>{item}</div>
        ))}
    </div>
  );
};

export default MediaContacts;
