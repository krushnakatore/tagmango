import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/homepage/Home";
import { Landing } from "../components/landingpage/Landing";
import { Login } from "../components/loginpage/Login";
import { Signup } from "../components/signup/Signup";

export const MyRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
      </Routes>
    </div>
  );
};
