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

    
    interface AboutProjectItem {
      attributes: {
        featuresIcon: {
          data: {
            attributes: {
              url: string;
            };
          };
        };
        featuresTitle: string;
        featuresInfo: string;
       };
     }

  return (
    <div className="features">
      <div className="features__body">
        {reduxInfo &&
          reduxInfo.map((item: AboutProjectItem, index: number) => (
            <div className="feature-item" key={index}>
              <img
                src={icones && icones[index]}
                className="feature-item__icon"
                alt="icon"
              />
              <div className="feature-item__info">
                <p className="feature-item__title">
                  {item.attributes.featuresTitle}
                </p>
                <p className="feature-item__text">
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
