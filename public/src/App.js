import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import PrivateRoutes from "./authentication/PrivateRoutes";
import PublicRoutes from "./authentication/PublicRoutes";
import AdminRoutes from "./authentication/AdminRoutes";
import { Route, Routes } from "react-router";
import NoPageFound from "./NoPageFound";
import AdminLoginScreen from "./screens/adminScreens/AdminLoginScreen";
import { useSelector } from "react-redux";
function App() {
  const { adminLogin } = useSelector((state) => state?.auth);
  return (
    <>
      <Routes>
        <Route path="/admin" element={!adminLogin && <AdminLoginScreen />} />
      </Routes>
      <AdminRoutes />
      <PrivateRoutes />
      <PublicRoutes />
      <Routes>{/* <Route path="*" element={<NoPageFound />} /> */}</Routes>
    </>
  );
}

export default App;
