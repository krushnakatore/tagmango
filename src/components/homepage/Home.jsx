import { Button } from "antd/lib/radio";
import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Slideshow } from "../newpage/New";
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
  const handleArtist = () => {};
  const handleNew = () => {};
  const handlePopularity = () => {};

  return (
    <div>
      <Navbar />
      <div className="filterButton">
        <Button onClick={handleArtist()}>Filter by Artist</Button>
        <Button onClick={handleNew()}>Filter by New Releases</Button>
        <Button onClick={handlePopularity()}>Filter by Popularity</Button>
      </div>
      <Slideshow />
      <div className="homepage">
        <div className="musicData">
          {data.map((e, id) => {
            return (
              <div key={id} className="musicAll">
                <div className="musicpic">
                  <img classname="musicImages" src={e.cover_image} alt="demo" />
                </div>
                <div>{e.song}</div>

                <audio controls>
                  <source src={e.url} type="audio/mpeg" />
                </audio>
                <div>{e.artists}</div>
                <div>
                  <hr />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
