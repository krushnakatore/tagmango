import Input from "antd/lib/input/Input";
import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logodiv">
        <div>
          <img src={"https://i.ibb.co/ZJDxkjX/download.png"} alt="png" />
        </div>
      </div>
      <div style={{ textDecoration: "none" }}>
        <Link to="/home">HOME</Link>
      </div>
      <div>
        <Input></Input>
      </div>
      <div style={{ textDecoration: "none" }}>
        <Link to="/signup">SIGN UP</Link>
      </div>
      <div style={{ textDecoration: "none" }}>
        <Link to="/login">LOG IN </Link>
      </div>
    </div>
  );
};
