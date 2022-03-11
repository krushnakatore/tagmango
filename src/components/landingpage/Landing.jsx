import { Button } from "antd/lib/radio";
import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import "./landing.css";

export const Landing = () => {
  const [T, setT] = useState(false);
  const handleHome = () => {
    setT(true);
  };

  if (T) {
    return <Navigate to="/home" />;
  }
  return (
    <div>
      <Button onClick={handleHome}>Go to Home Page</Button>
    </div>
  );
};
