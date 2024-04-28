import "./Calendar.scss";
import { useEffect } from "react";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { futurePhotoGet } from "store/slices/modals/orderPhotosession/futurePhotosessionSlice";
import CalendarHeader from "./CalendarHeader";
import CalendarDays from "./CalendarDays";
import CalendarWeek from "./CalendarWeek";
import CalendarMonth from "./CalendarMonth";
import CalendarPopup from "./CalendarPopup";
import { useMatchMedia } from "hooks/use-match-media";
import blur from "@img/blur.webp"

const Calendar = () => {
   //get-photosession-info--------------------------
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(futurePhotoGet());
  }, []);

  const screenWidth = useMatchMedia();
   
  const periodIndex = useAppSelector((state) => state.calendar.period);

  const calendarMobile = useAppSelector((state) => state.calendar.calendarMobile);

  //popup-state-------------------------------------------------
 const popupList = useAppSelector((state) => state.calendar.popup)
  
    return ( 
        <div className="calendar">
           <CalendarHeader />
           {!screenWidth.isMobile && periodIndex === 0 && <CalendarDays />}
           {periodIndex === 1 && <CalendarWeek />}
           {periodIndex === 2 && <CalendarMonth />}
           {screenWidth.isMobile && calendarMobile && <CalendarMonth />}
           {popupList && <CalendarPopup />}
           <img src={blur} alt="blur" className="calendar__blur"/>
        </div>
     );
}
 
export default Calendar;