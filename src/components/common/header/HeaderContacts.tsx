import "./Header.scss";
import { NavLink } from "react-router-dom";



interface HeaderContactsString {
    contactsString: string[] | null
}
const HeaderContacts: React.FC<HeaderContactsString> = ({contactsString}) => {
    return (
        <div className="contacts contacts--margin">

        <NavLink to="#" className="contacts__item">
          {contactsString && contactsString[0]}
        </NavLink>

        <NavLink to="#" className="contacts__item">FB.com/vkadre</NavLink>

        <NavLink to="#" className="contacts__item">
          {contactsString && contactsString[2]}
        </NavLink>
        
      </div>
    )
}
export default HeaderContacts;