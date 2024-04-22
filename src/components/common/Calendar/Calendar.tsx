import "./Calendar.scss";
import { useAppSelector } from "store/hooks";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";

const Calendar = () => {
   
  const periodIndex = useAppSelector((state) => state.calendar.period);
  
    return ( 
        <div className="calendar">
           <CalendarHeader />
           {periodIndex === 0 && <CalendarDays />}
        </div>
     );
}
 
export default Calendar;