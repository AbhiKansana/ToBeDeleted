import React from "react";
import { Route, Routes } from "react-router-dom";
import Editpage from "./Editpage";
import Homepage from "./Homepage";
import AddPage from "./AddPage";
import Login from './Login';
import SignupCard from "./Signup";
import Navbar from "../components/Navbar";

const MainRoutes = () => {
  return (
     <>
     <Navbar/>
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/country/:id" element={<Editpage />} />
      <Route path="/add" element={<AddPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignupCard />} />
    </Routes>
    </>
  );
};

export default MainRoutes;
