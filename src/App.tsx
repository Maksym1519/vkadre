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
import Portfolio from "components/pages/Portfolio/Portfolio";

const rootLayout = React.createElement(RootLayout);

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={rootLayout}>
        <Route index element={<Home />} />
        <Route path="/Portfolio" index element={<Portfolio />} />
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
