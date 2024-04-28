import "./Footer.scss";
import HeaderNavigation from "../header/HeaderNavigation";
import HeaderContacts from "../header/HeaderContacts";
import { useAppSelector } from "store/hooks";

const Footer = () => {
  type reduxData = [];
  const reduxData = useAppSelector((state) => state.header.header);
  

  const navigationString =
    reduxData && reduxData[0].attributes.navigation.split(",");
  const contactsString =
    reduxData && reduxData[0].attributes.contact.split(",");

  return (
    <footer className="footer">
      <div className="footer__body">
        <div className="footer__navigation">
          <HeaderContacts contactsString={contactsString} />
          <HeaderNavigation navigationString={navigationString} />
         </div>
        <p className="footer__date">2022 © VKADRE.COM</p>
      </div>
    </footer>
  );
};
export default Footer;
