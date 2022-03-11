import PickerButton from "antd/lib/date-picker/PickerButton";
import Input from "antd/lib/input/Input";
import { Button } from "antd/lib/radio";
import React from "react";
import "./signup.css";

export const Signup = () => {
  return (
    <div className="signup">
      <div className="signupLeft"> That's All We Need......</div>
      <div className="signupRight">
        {" "}
        <Input placeholder="Enter Your Name" />
        <br />
        <Input placeholder="Enter Your Email Id" />
        <br />
        <Input placeholder="Enter Your Password" />
        <br />
        <Input placeholder="Enter Your Phone Number" />
        <Button className="button">SUBMIT</Button>
      </div>
    </div>
  );
};
