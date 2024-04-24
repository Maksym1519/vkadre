import "./Calendar.scss";
import { useAppSelector } from "store/hooks";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarWeek from "./CalendarWeek";
import CalendarMonth from "./CalendarMonth";
import blur from "@img/blur.webp"

const Calendar = () => {
   
  const periodIndex = useAppSelector((state) => state.calendar.period);
  
    return ( 
        <div className="calendar">
           <CalendarHeader />
           {periodIndex === 0 && <CalendarDays />}
           {periodIndex === 1 && <CalendarWeek />}
           {periodIndex === 2 && <CalendarMonth />}
           <img src={blur} alt="blur" className="calendar__blur"/>
        </div>
     );
}
 
export default Calendar;