import "./Calendar.scss";
import { useAppSelector } from "store/hooks";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarWeek from "./CalendarWeek";
import CalendarMonth from "./CalendarMonth";
import { useMatchMedia } from "hooks/use-match-media";
import blur from "@img/blur.webp"

const Calendar = () => {
   const screenWidth = useMatchMedia();
   
  const periodIndex = useAppSelector((state) => state.calendar.period);
  
    return ( 
        <div className="calendar">
           <CalendarHeader />
           {!screenWidth.isMobile && periodIndex === 0 && <CalendarDays />}
           {periodIndex === 1 && <CalendarWeek />}
           {periodIndex === 2 && <CalendarMonth />}
           {screenWidth.isMobile && <CalendarMonth />}
           <img src={blur} alt="blur" className="calendar__blur"/>
        </div>
     );
}
 
export default Calendar;