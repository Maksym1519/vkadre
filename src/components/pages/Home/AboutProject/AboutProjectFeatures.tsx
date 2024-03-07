import "./AboutProject.scss";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { aboutProjectInfo } from "../../../../store/slices/main/aboutProjectSlice";
import { useEffect } from "react";

const AboutProjectFeatures = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(aboutProjectInfo());
  }, [dispatch]);

  const reduxInfo = useAppSelector((state) => state.aboutProject.aboutProject);
  const iconesArray = reduxInfo && reduxInfo[0].attributes.featuresIcon.data;
  console.log(iconesArray && iconesArray);

  return (
    <div className="aboutProject-features">
      {iconesArray &&
        iconesArray.map((item: any, index: number) => (
          <div className="aboutProject-features-item" key={index}>
            <img
              src={item.attributes.url}
              className="features-item__icon"
              alt="icon"
            />
            <div className="features-item__info">
              <p className="features-item__title"></p>
              <p className="features-item__text"></p>
            </div>
          </div>
        ))}
    </div>
  );
};
export default AboutProjectFeatures;
