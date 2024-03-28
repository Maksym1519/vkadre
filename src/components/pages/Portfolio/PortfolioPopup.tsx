import "./Portfolio.scss";
import { useAppDispatch } from "store/hooks";
import { setLocation } from "store/slices/portfolio/portfolioPageSlice";

const PortfolioPopup = () => {
  const cities: Array<string> = [
    "фотосессии в одессе",
    "фотосессии в киеве",
    "фотосессии в николаеве",
    "фотосессии в львове",
    "фотосессии в херсоне",
    "фотосессии в днепре",
    "фотосессии в виннице",
  ];
  //dispatch-city------------------------------------
  const dispatch = useAppDispatch();


  return (
    <div className="portfolio-popup">
      <div className="portfolio-popup__items">
        {cities.map((item, index) => (
          <div className="portfolio-popup__item" key={index} onClick={() => dispatch(setLocation(item))}>
            <div className="portfolio-popup__item-content"> {item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPopup;
