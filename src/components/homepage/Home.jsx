import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import "./home.css";

export const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    handleMusic();
  }, []);

  const handleMusic = async () => {
    await fetch(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json`
    )
      .then((res) => res.json())
      .then((d) => {
        setData(d);
      });
  };
  console.log(data);

  return (
    <div>
      <Navbar />
      <div className="homepage"></div>
    </div>
  );
};
