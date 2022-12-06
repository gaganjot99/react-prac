import React from "react";
import { Userreview } from "./Comps";

export const Start = () => {
  return (
    <div className="newsletter-div">
      <h1>Start our adventure</h1>
      <p>
        Sign up for our newsletter for travel. Get news about new trips and
        discounts on them. They will keep you up to date with everything.
      </p>
      <div className="newsletter-form relative-pos">
        <input type={"text"} placeholder="Your email address"></input>
        <button className="theme-btn green-bg-btn">Get started</button>
      </div>
    </div>
  );
};

const users = [
  {
    name: "Adam K.",
    adventure: "Indonesia Adventure",
    rating: "5.0",
    img: "images/user1.jpg",
    comment:
      "The whole was so awesome that I will remember it all my life. Thank you everyone for making this possible",
  },
  {
    name: "Caroline S.",
    adventure: "Venezuelian Adventure",
    rating: "4.8",
    img: "images/user2.jpg",
    comment:
      "I met great people, friends and beautiful places in the world. I will definitely on a trip again.",
  },
  {
    name: "Mark P.",
    adventure: "Phillipine Adventure",
    rating: "4.9",
    img: "images/user3.jpg",
    comment:
      "Great Experience!!! I knew it would be great, after this adventure I look at the world completely differently.",
  },
];

export const Reviews = () => {
  return (
    <div className="client-review">
      <h1>What clients say about us</h1>
      <div className="client-reviews">
        {users.map((ele, i) => {
          return (
            <div className="client-rev" key={i}>
              <Userreview {...ele}></Userreview>
              <p>{ele.comment}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export const Footer = () => {
  return (
    <div className="footer">
      <div className="left-footer">
        <h2 className="logo">
          Explory<b className="green-text">World</b>
        </h2>
        <p>
          Explory World is the best travel planning in the market that will give
          you the best experience possible. Contact us ASAP!
        </p>
      </div>
      <div className="right-footer">
        <div className="footer-right-list">
          <h2>Our Company</h2>
          <button className="btn-no-border">About</button>
          <button className="btn-no-border">Features</button>
          <button className="btn-no-border">Destinations</button>
        </div>
        <div className="footer-right-list">
          <h2>Contact</h2>
          <button className="btn-no-border">Facebook</button>
          <button className="btn-no-border">Instagram</button>
          <button className="btn-no-border">Linkedin</button>
        </div>
      </div>
    </div>
  );
};
