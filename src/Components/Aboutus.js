import React from "react";
import { Dialimages } from "./Comps";
import { Imagefade } from "./Image";

const images = [
  {
    url: "images/per1.jpg",
    caption: "Slide 1",
  },
  {
    url: "images/per2.jpg",
    caption: "Slide 2",
  },
  {
    url: "images/per3.jpg",
    caption: "Slide 3",
  },
  {
    url: "images/per4.jpg",
    caption: "Slide 4",
  },
];

const Aboutus = () => {
  return (
    <div className="about-us-div relative-pos">
      <Dialimages></Dialimages>
      <Imagefade cssClass={"dial-slides"} images={images}></Imagefade>
    </div>
  );
};

export default Aboutus;
