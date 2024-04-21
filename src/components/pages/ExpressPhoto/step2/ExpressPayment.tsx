import "../ExpressPhotosession.scss";
import ExpressRequisites from "./ExpressRequisites";
import ExpressForm from "./ExpressForm";
import ExpressSummary from "./ExpressSummary";


const ExpressPayment = (props: any) => {
  
  return (
  <>
  <ExpressRequisites />
  <ExpressForm register={props.register} errors={props.errors} handleSubmit={props.handleSubmit}/>
  <ExpressSummary register={props.register} errors={props.errors} handleSubmit={props.handleSubmit}/>
  </>
  )
};

export default ExpressPayment;
