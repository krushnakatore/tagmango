import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../components/homepage/Home";
import { Landing } from "../components/landingpage/Landing";
import { Song } from "../components/singlepage/Song";

export const MyRoute = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Landing />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/song" element={<Song />}></Route>
      </Routes>
    </div>
  );
};
