import React from "react";
import { Route, Routes } from "react-router-dom";
import Editpage from "./Editpage";
import Homepage from "./Homepage";
import AddPage from "./AddPage";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/country/:id" element={<Editpage />} />
      <Route path="/add" element={<AddPage />} />
    </Routes>
  );
};

export default MainRoutes;
