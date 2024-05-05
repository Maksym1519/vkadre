import FadeLoader from "react-spinners/SyncLoader";
import { CSSProperties, useState } from "react";
import "./Loading.scss";

const Loading = () => {
  const override: CSSProperties = {
    display: "block",
    margin: "0 auto",
    borderColor: "black",
  };

  let [loading] = useState(true);
  let [color] = useState("#000");
  return (
    <div className="loading">
      <FadeLoader
        color={color}
        loading={loading}
        cssOverride={override}
        size={20}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      Страница загружается ...
    </div>
  );
};

export default Loading;
