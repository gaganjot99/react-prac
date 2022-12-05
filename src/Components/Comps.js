import React from "react";

const Infotext = ({ large, small }) => {
  return (
    <div className="tag-info-div">
      <h1>{large}</h1>
      <p>{small}</p>
    </div>
  );
};

const tags = [
  { large: "8", small: "Years of experience" },
  { large: "10K", small: "Satisfied customers" },
  { large: "300+", small: "Successful Travels" },
];

export const Infoline = () => {
  return (
    <div className="info-line">
      {tags.map((ele, i) => {
        return <Infotext {...ele} key={i}></Infotext>;
      })}
    </div>
  );
};

export const Userreview = ({ name, adventure, rating, img }) => {
  return (
    <div className="user-review">
      <img src={img} alt="user profile pic"></img>
      <div className="name-adv">
        <h3>{name}</h3>
        <p>{adventure}</p>
      </div>
      <div className="user-rating">
        <i className="bi bi-star-fill"></i>
        <p>{rating}</p>
      </div>
    </div>
  );
};
