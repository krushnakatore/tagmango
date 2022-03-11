import { Button } from "antd/lib/radio";
import React, { useEffect, useState } from "react";
import { Navbar } from "../navbar/Navbar";
import { Slideshow } from "../newpage/New";
import axios from "axios";
import "./home.css";
import { Input } from "antd";

export const Home = () => {
  const [data, setData] = useState([]);
  const [artist, setArtist] = useState("");
  const [song, setSong] = useState("");

  useEffect(() => {
    handleMusic();
  }, []);

  const handleMusic = async () => {
    await fetch(
      `https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json`
    )
      .then((res) => res.json())
      .then((d) => {
        console.log(d);
        setData(d);
      });
  };
  const handleArtist = () => {
    axios({
      method: "get",
      url: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        let newArtist = response.data.filter((e) => e.artists === artist);
        setData(newArtist);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleSong = () => {
    axios({
      method: "get",
      url: `https://s3-ap-southeast-1.amazonaws.com/he-public-data/studiod9c0baf.json`,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (response) {
        let newSong = response.data.filter((e) => e.song === song);
        setData(newSong);
        console.log(response.data);
      })
      .catch((e) => {
        console.log(e);
      });
  };

  const handleChangeSong = (e) => {
    setSong(e.target.value);
    e.target.value = "";
  };

  const handleChange = (e) => {
    setArtist(e.target.value);
    e.target.value = "";
  };

  return (
    <div>
      <Navbar />
      <div className="filterButton">
        <Input
          placeholder="Enter your name of favourite Artist"
          onChange={handleChange}
        />
        <Button className="filterButtonArtist" onClick={handleArtist}>
          Filter by Artist
        </Button>
        <div style={{ marginLeft: "3%" }}> </div>
        <Input
          placeholder="Enter your name of favourite Song"
          onChange={handleChangeSong}
        />
        <Button className="filterButtonArtist" onClick={handleSong}>
          Filter by Song
        </Button>
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
                <div className="songs">{e.song}</div>

                <audio controls>
                  <source src={e.url} type="audio/mpeg" />
                </audio>
                <div className="artists">{e.artists}</div>
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
