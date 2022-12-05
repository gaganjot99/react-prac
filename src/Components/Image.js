import React from "react";
import { Slide, Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const Image = ({ images, cssClass }) => {
  return (
    <div className={cssClass + " slide-container"}>
      <Slide arrows={false}>
        {images.map((slideImage, index) => (
          <div className={"each-slide temp-class " + cssClass} key={index}>
            <img
              className="round-img"
              src={slideImage.url}
              alt={slideImage.caption}
              key={index}
            ></img>
          </div>
        ))}
      </Slide>
    </div>
  );
};

export default Image;

export const Imagefade = ({ images, cssClass }) => {
  return (
    <div className={cssClass + " slide-container"}>
      <Fade duration={4000} arrows={false}>
        {images.map((slideImage, index) => (
          <div className={"each-slide temp-class " + cssClass} key={index}>
            <img
              className="round-img"
              src={slideImage.url}
              alt={slideImage.caption}
              key={index}
            ></img>
          </div>
        ))}
      </Fade>
    </div>
  );
};
