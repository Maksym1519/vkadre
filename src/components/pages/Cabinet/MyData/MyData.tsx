import "../Cabinet.scss";
import SubTitle from "components/ui/forms/SubTitle";
import { useForm, SubmitHandler } from "react-hook-form";
import { TextField } from "@mui/material";
import User from "@img/user.svg";

const MyData = () => {
  type InputsType = {
    name: string;
    phone: number;
    email: string;
  };
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputsType>();
  const onSubmit: SubmitHandler<InputsType> = (data) => console.log(data);

  console.log(watch("name")); // watch input value by passing the name of it
  return (
    <div className="my-data">
      <div className="my-data__title">
        <SubTitle text="Мои данные" />
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="my-data-form">
        <div className="my-data-form__input-wrapper">
          <img src={User} alt="user" className="my-data__input-icon" />
          <TextField
            id="standard-basic"
            placeholder="ИМЯ"
            variant="standard"
            className="my-data-form__input"
            style={{ minWidth: "100%", textTransform: "uppercase" }}
            type="text"
            {...register("name", { required: "Username is required" })}
            error={!!errors.name}
            helperText={errors.name?.message}
          />
        </div>
      </form>
    </div>
  );
};

export default MyData;
