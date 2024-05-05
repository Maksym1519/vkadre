import "../ExpressPhotosession.scss";
import { ExpressPhotoType } from "types/expressPhoto/expressPhotoType";
import ExpressRequisites from "./ExpressRequisites";
import ExpressForm from "./ExpressForm";
import ExpressSummary from "./ExpressSummary";
import { UseFormRegister } from "react-hook-form";


const ExpressPayment = (props: {
  register: UseFormRegister<ExpressPhotoType>;
  errors: {
    
  };
  handleSubmit: any;
}) => {
  
  return (
  <>
  <ExpressRequisites />
  <ExpressForm register={props.register} errors={props.errors} handleSubmit={props.handleSubmit}/>
  <ExpressSummary register={props.register} errors={props.errors} handleSubmit={props.handleSubmit}/>
  </>
  )
};

export default ExpressPayment;
