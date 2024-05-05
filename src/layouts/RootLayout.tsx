import "./RootLayout.scss";
import Header from "components/common/header/Header";
import Footer from "components/common/Footer/Footer";
import { Outlet } from "react-router-dom";

//redux--------------------------------------------------------
import { useAppSelector } from "store/hooks";

export default function RootLayout() {
  const authInfo = useAppSelector((state) => state.auth.overlay);
  const orderPhotosession = useAppSelector(
    (state) => state.orderPhotosessionModal.overlay
  );
  const feedback = useAppSelector((state) => state.feedbackModal.overlay);
  const expressPhotosession = useAppSelector(
    (state) => state.expressPhoto.overlay
  );

  return (
    <>
      <div className="root-layout container">
        <Header />
        <main className="outlet">
          <Outlet />
        </main>
        <Footer />
        <div
          className={
            authInfo || orderPhotosession || feedback || expressPhotosession
              ? "root-layout__overlay"
              : ""
          }
        ></div>
      </div>
    </>
  );
}
