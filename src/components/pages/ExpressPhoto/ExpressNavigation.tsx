import "./ExpressPhotosession.scss";
import { useAppSelector } from "store/hooks";

const ExpressNavigation = () => {
  const currentPage = useAppSelector((state) => state.expressPhoto.page)
  
  return (
    <div className="express-navigation">
      <div className="express-navigation__column">
        <div className={currentPage === 1 ? "express-navigation__data-line" : "express-navigation__data-line_passive"}></div>
        <p className={currentPage === 1 ? "express-navigation__column-text" : "express-navigation__column-text_passive"}>данные фотосессии</p>
      </div>
      <div className="express-navigation__column">
        <div className={currentPage === 2 ? "express-navigation__data-line" : "express-navigation__data-line_passive"}></div>
        <p className={currentPage === 2 ? "express-navigation__column-text" : "express-navigation__column-text_passive"}>Оплата</p>
      </div>
    </div>
  );
};

export default ExpressNavigation;
