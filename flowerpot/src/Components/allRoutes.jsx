import React from "react";
import { Route, Routes } from "react-router-dom";
import { AdminPage } from "../pages/AdminPage";

import LandingPage from "../pages/LandingPage";
import { ProdctPage } from "../pages/ProductPage";

export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
        <Route path="/admin" element={<AdminPage />}></Route>
        <Route path="/pro" element={<ProdctPage />}></Route>
      </Routes>
    </>
  );
};
