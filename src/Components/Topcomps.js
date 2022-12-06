import React from "react";
import { Boxshadow, Userreview } from "./Comps";
import Image from "./Image";

export const Lefttop = () => {
  return (
    <div className="left-top width-half">
      <h1 className="large-text">Welcome to new adventure</h1>
      <p className="small-text margin-vert margin-right left-top-p">
        We are the only agency in the market that gives you a full Adventure! So
        you what do you say, are you moving with us?
      </p>
      <button className="theme-btn green-bg-btn">Start our adventure</button>
    </div>
  );
};

const images1 = [
  {
    url: "images/land5.jpg",
    caption: "Slide 1",
  },
  {
    url: "images/land6.jpg",
    caption: "Slide 2",
  },
];

const images2 = [
  {
    url: "images/land3.jpg",
    caption: "Slide 1",
  },
  {
    url: "images/land4.jpg",
    caption: "Slide 2",
  },
];

const user = {
  name: "Adam K.",
  adventure: "Indonesia Adventure",
  rating: "5.0",
  img: "images/user1.jpg",
};

export const Righttop = () => {
  return (
    <div className="width-half relative-pos">
      <Image images={images1} cssClass="image-top"></Image>
      <Image images={images2} cssClass="image-below"></Image>
      <div className="top-user-rating">
        <Boxshadow>
          <Userreview {...user}></Userreview>
        </Boxshadow>
      </div>
    </div>
  );
};
