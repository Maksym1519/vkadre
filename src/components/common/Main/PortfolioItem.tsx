import "./Portfolio.scss";

type PropsImages = {
  images: Array<string> | null
}

const PortfolioItem = (props: PropsImages) => {
      
  return (
    <div className="portfolio-slider__item">
      {props.images &&
        props.images.map((item, index) => (
          <img
            src={item}
            alt="photo"
            key={index}
            className="portfolio-slider__item-image"
          />
        ))}
    </div>
  );
};

export default PortfolioItem;
