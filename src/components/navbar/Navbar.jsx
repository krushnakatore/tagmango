import { Button } from "antd";
import Input from "antd/lib/input/Input";
import React from "react";
import { Link } from "react-router-dom";

import "./navbar.css";

export const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logodiv">
        <div>
          <Link to="/home">
            <img src={"https://i.ibb.co/ZJDxkjX/download.png"} alt="png" />
          </Link>
        </div>
      </div>
      <div className="namesInp">
        <div className="navbarInput" style={{ fontSize: "20px" }}>
          Home
        </div>
        <div className="navbarInput" style={{ fontSize: "20px" }}>
          About
        </div>
      </div>

      <div style={{ textDecoration: "none", fontSize: "20px" }}>
        Play the Music you like
      </div>
    </div>
  );
};
