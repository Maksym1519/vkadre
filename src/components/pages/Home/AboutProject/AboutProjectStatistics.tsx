import "./AboutProject.scss";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { aboutProjectInfo } from "../../../../store/slices/main/aboutProjectSlice";
import { useEffect } from "react";

const AboutProjectStatistics = () => {
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(aboutProjectInfo());
  }, [dispatch]);

  const reduxInfo = useAppSelector((state) => state.aboutProject.aboutProject);

  return (
    <div className="statistics">
      {reduxInfo &&
        reduxInfo.map((item, index) => (
          <div className="statistics-item" key={index}>
            <span className="statistics-item__title">
              {item.attributes.statisticsTitle}
              <span className="statistics-item__info_size">{index === 4 ? "года" : ""}</span>
            </span>
            <span className="statistics-item__info">
              {item.attributes.statisticsInfo}
            </span>
          </div>
        ))}
    </div>
  );
};
export default AboutProjectStatistics;
