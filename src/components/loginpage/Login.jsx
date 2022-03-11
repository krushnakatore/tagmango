import { Button, Input } from "antd";
import React from "react";
import "./login.css";

export const Login = () => {
  return (
    <div className="signup">
      <div className="signupLeft"> Its time for Log In......</div>
      <div className="signupRight">
        {" "}
        <Input placeholder="Enter Your email Id" />
        <br />
        <Input placeholder="Enter Your Password" />
        <br />
        <Button className="button">SUBMIT</Button>
      </div>
    </div>
  );
};
