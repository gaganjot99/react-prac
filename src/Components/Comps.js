import React, { useEffect } from "react";

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

export const Dialimages = () => {
  const transform = () => {
    const ele = document.getElementsByClassName("dial-outer")[0];
    const eles = document.getElementsByClassName("dial-item");
    let deg = 0;
    let val = "RotateZ(" + deg + "deg)";
    let deg1 = 0;
    let val1 = "RotateZ(" + deg1 + "deg)";
    const timer = setInterval(() => {
      deg = deg + 90;
      val = "RotateZ(" + deg + "deg)";
      deg1 = deg1 - 90;
      val1 = "RotateZ(" + deg1 + "deg)";
      for (let i = 0; i < eles.length; i++) {
        eles[i].style.transform = val1;
      }
      ele.style.transform = val;
    }, 4000);
    return timer;
  };

  useEffect(() => {
    const timer = transform();
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <div className="dial-outer">
      <div className="dial-item dial-1">
        <i className="green-color bi bi-brightness-high-fill"></i>
      </div>
      <div className="dial-item dial-2">
        <i className="green-color bi bi-umbrella"></i>
      </div>
      <div className="dial-item dial-3">
        <i className="green-color bi bi-hearts"></i>
      </div>
      <div className="dial-item dial-4">
        <i className="green-color bi bi-cloud-moon-fill"></i>
      </div>
    </div>
  );
};
