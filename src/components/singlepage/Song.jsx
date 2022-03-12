import { Button, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import "./song.css";

export const Song = () => {
  const [data, setData] = useState("");
  useEffect(() => {
    const d = localStorage.getItem("song");
    setData(JSON.parse(d));
  }, []);

  console.log(data.url);

  return (
    <>
      <Navbar />
      <div className="homepage">
        <div className="musicData">
          <div className="musicAll">
            <div className="musicpic">
              <img classname="musicImages" src={data.cover_image} alt="demo" />
            </div>
            <div className="songs">{data.song}</div>

            <audio controls>
              <source src={data.url} type="audio/mpeg" />
            </audio>
            <div className="artists">{data.artists}</div>
            <div>
              <hr />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
