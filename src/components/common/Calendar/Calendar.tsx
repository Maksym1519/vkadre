import "./Calendar.scss";
import { useAppSelector } from "store/hooks";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarWeek from "./CalendarWeek";
import CalendarMonth from "./CalendarMonth";

const Calendar = () => {
   
  const periodIndex = useAppSelector((state) => state.calendar.period);
  
    return ( 
        <div className="calendar">
           <CalendarHeader />
           {periodIndex === 0 && <CalendarDays />}
           {periodIndex === 1 && <CalendarWeek />}
           {periodIndex === 2 && <CalendarMonth />}
        </div>
     );
}
 
export default Calendar;