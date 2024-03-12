import Header from "components/common/header/Header";
import { Outlet } from "react-router-dom";

export default function RootLayout(): any {
  return (
    <div className="root-layout">
      <div className="container">
        <Header />
        <main>
          <Outlet />
        </main>
      </div>
    </div>
  );
}
