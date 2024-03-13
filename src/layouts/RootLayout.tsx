import "./RootLayout.scss";
import Header from "components/common/Header/Header";
import Footer from "components/common/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
     <div className="root-layout container">
        <Header />
        <Outlet />
        <Footer />
        </div>
  );
}
