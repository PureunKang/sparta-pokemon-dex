import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Dex from "../pages/Dex/Dex";
import Detail from "../pages/Detail";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dex" element={<Dex />} />
      <Route path="/detail" element={<Detail />} />
    </Routes>
  );
};

export default Router;
