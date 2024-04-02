import React from "react";
import "./styles/global.scss";
import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
  } from "react-router-dom";
import RootLayout from "layouts/RootLayout";
import Home from "./components/pages/Home/Home";
import PortfolioPage from "components/pages/Portfolio/Portfolio";
import OurTeam from "components/pages/OurTeam/OurTeam";
import Services from "components/pages/Services/Services";
import ServiceDetail from "components/pages/ServiceDetail/ServiceDetail";

const rootLayout = React.createElement(RootLayout);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={rootLayout}>
        <Route index element={<Home />} />
        <Route path="/Portfolio" index element={<PortfolioPage />} />
        <Route path="/OurTeam" index element={<OurTeam />} />
        <Route path="/Services" index element={<Services />} />
        <Route path="/ServiceDetail" index element={<ServiceDetail />} />
        <Route path="/Auth" index element={<Home />} />
        </Route>
      </>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
