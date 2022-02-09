import React from "react";
import { Route, Routes } from "react-router-dom";
import Signout from "../auth/signinandout/Signout";
import Dashboard from "../dashboard/Dashboard";
import Page from "../page/Page";
import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";

const AppRouter = () => {
  console.log("in AppRouter");
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Page />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<Page />} />
        <Route path="/signup" element={<Page />} />
        <Route path="/signout" element={<Signout />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppRouter;
