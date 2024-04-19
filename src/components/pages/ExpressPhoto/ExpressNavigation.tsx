import "./ExpressPhotosession.scss";
import { useAppSelector, useAppDispatch } from "store/hooks";
import { setPage } from "store/slices/modals/expressPhotosession/expressPhotosessionSlice";

const ExpressNavigation = () => {
  const dispatch = useAppDispatch();
  const currentPage = useAppSelector((state) => state.expressPhoto.page)
  
  return (
    <div className="express-navigation">
      <div className="express-navigation__column" onClick={() => dispatch(setPage(1))}>
        <div className={currentPage === 1 ? "express-navigation__data-line" : "express-navigation__data-line_passive"}></div>
        <p className={currentPage === 1 ? "express-navigation__column-text" : "express-navigation__column-text_passive"}>данные фотосессии</p>
      </div>
      <div className="express-navigation__column" onClick={() => dispatch(setPage(2))}>
        <div className={currentPage === 2 ? "express-navigation__data-line" : "express-navigation__data-line_passive"}></div>
        <p className={currentPage === 2 ? "express-navigation__column-text" : "express-navigation__column-text_passive"}>Оплата</p>
      </div>
    </div>
  );
};

export default ExpressNavigation;
