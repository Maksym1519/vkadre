import "./RootLayout.scss";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import { Outlet } from "react-router-dom";


//redux--------------------------------------------------------
import { useAppSelector } from "store/hooks";

export default function RootLayout() {
  const authInfo = useAppSelector((state) => state.auth.overlay);
  const orderPhotosession = useAppSelector((state) => state.orderPhotosessionModal.overlay)
 
  return (
<>
    <div className="root-layout container">
      <Header />
      <main className="outlet">
         <Outlet />
      </main>
      <Footer />
      <div className={authInfo || orderPhotosession ? "root-layout__overlay" : ""}></div>
    </div>
</>
  );
}
