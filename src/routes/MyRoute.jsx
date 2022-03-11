import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/homepage/Home";
import { Landing } from "../components/landingpage/Landing";

export const MyRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
      </Routes>
    </div>
  );
};
