import "./AboutProject.scss";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { aboutProjectInfo } from "../../../../store/slices/main/aboutProjectSlice";
import { useEffect } from "react";

const AboutProjectFeatures = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(aboutProjectInfo());
  }, [dispatch]);

  const reduxInfo = useAppSelector((state) =>
    state.aboutProject.aboutProject?.slice(0, 4)
  );

  const icones =
    reduxInfo &&
    reduxInfo.map((item) => item.attributes.featuresIcon?.data?.attributes.url);

  return (
    <div className="features">
      <div className="features__body">
        {reduxInfo &&
          reduxInfo.map((item: any, index: number) => (
            <div className="features-item" key={index}>
              <img
                src={icones && icones[index]}
                className="features-item__icon"
                alt="icon"
              />
              <div className="features-item__info">
                <p className="features-item__title">
                  {item.attributes.featuresTitle}
                </p>
                <p className="features-item__text">
                  {item.attributes.featuresInfo}
                </p>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};
export default AboutProjectFeatures;
