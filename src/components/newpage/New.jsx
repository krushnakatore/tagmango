import React from "react";
import { Slide } from "react-slideshow-image";
import "./new.css";

const slideImages = [
  "https://i.ibb.co/cNSXNXT/BANNER-32374742321125.webp",
  "https://i.ibb.co/pffkqSm/BANNER-289297524529497.webp",
  "https://i.ibb.co/pLWcBWQ/BANNER-3194517495985429.webp",
  "https://i.ibb.co/hK1DmNP/BANNER-5714618795451106.webp",
  "https://i.ibb.co/dPHW7Zg/BANNER-4910365313169314.webp",
  "https://i.ibb.co/mGfpfv4/BANNER-3884723183761080.webp",
  "https://i.ibb.co/7pPXGLJ/BANNER-3723434689981634.webp",
  "https://i.ibb.co/6ZbjThC/BANNER-1906806644231731.webp",
];

export const Slideshow = () => {
  return (
    <div className="mainSlide">
      <Slide easing="ease">
        {slideImages.map((e, id) => {
          return (
            <div className="each-slide">
              <div
                style={{
                  backgroundImage: `url(${slideImages[id]})`,
                  borderRadius: "10%",
                  margin: "40px 40px 0 40px",
                }}
              ></div>
            </div>
          );
        })}
      </Slide>
    </div>
  );
};
