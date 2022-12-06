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
    <div className="about-us-div">
      <div className="about-us-pic relative-pos">
        <Dialimages></Dialimages>
        <Imagefade cssClass={"dial-slides"} images={images}></Imagefade>
      </div>
      <div className="about-us-text">
        <h1>About us</h1>
        <p>
          We are an explory world agency, that combines the greatest passions in
          life - people and travel. While traveling 10 years we were facinated
          by places inaccessible to normal tourists and we been here for you
          ever since!
        </p>
        <p>
          WE are full of new ideas for adventure and we need you for them. We
          visit places with beautiful cultures and customs. On a daily basis we
          are accopanied by new Sites that are souviers for an lifetime. Go on
          an adventure!
        </p>
        <button className="green-text-btn theme-btn">Read more</button>
      </div>
    </div>
  );
};

export default Aboutus;
