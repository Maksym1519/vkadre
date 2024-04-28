import "./Header.scss";



interface HeaderContactsString {
    contactsString: string[] | null
}
const HeaderContacts: React.FC<HeaderContactsString> = ({contactsString}) => {
    return (
        <div className="contacts contacts--margin">

        <span className="contacts__item">
          {contactsString && contactsString[0]}
        </span>

        <span className="contacts__item">FB.com/vkadre</span>

        <span className="contacts__item">
          {contactsString && contactsString[2]}
        </span>
        
      </div>
    )
}
export default HeaderContacts;