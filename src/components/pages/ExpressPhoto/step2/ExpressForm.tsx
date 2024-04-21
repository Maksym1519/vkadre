import "../ExpressPhotosession.scss";
import { TextField } from "@mui/material";
import user from "@img/user.svg";
import phone from "@img/phone.svg";
import email from "@img/email.svg";

const ExpressForm = (props: {
  register: any;
  errors: any;
  handleSubmit: any;
}) => {

 
  return (
    <div className="express-form">
      <div className="order-photo-form__date-date">
        <img src={user} alt="calendar" />
        <TextField
          id="standard-basic"
          placeholder="Имя"
          variant="standard"
          className="order-photo-form__input"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...props.register("data.username", {
            required: "Username is required",
          })}
          error={!!props.errors.data?.username}
          helperText={props.errors.data?.username?.message}
        />
      </div>
      <div className="order-photo-form__date-date">
        <img src={phone} alt="calendar" />
        <TextField
          id="standard-basic"
          placeholder="Телефон"
          variant="standard"
          className="order-photo-form__input"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...props.register("data.phone", {
            required: "Phone number is required",
          })}
          error={!!props.errors.data?.phone}
          helperText={props.errors.data?.phone?.message}
        />
      </div>
      <div className="order-photo-form__date-date">
        <img src={email} alt="calendar" />
        <TextField
          id="standard-basic"
          placeholder="Электронная почта"
          variant="standard"
          className="order-photo-form__input"
          style={{ minWidth: "100%", textTransform: "uppercase" }}
          type="text"
          {...props.register("data.email", { required: "Email is required" })}
          error={!!props.errors.data?.email}
          helperText={props.errors.data?.email?.message}
        />
      </div>
     </div>
  );
};

export default ExpressForm;
