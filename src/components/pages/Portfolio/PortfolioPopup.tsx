import "./Portfolio.scss";

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

  return (
    <div className="portfolio-popup">
      <div className="portfolio-popup__items">
        {cities.map((item, index) => (
          <div className="portfolio-popup__item" key={index}>
            <div className="portfolio-popup__item-content"> {item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PortfolioPopup;
