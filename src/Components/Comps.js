import React, { useEffect } from "react";

export const Boxshadow = (props) => {
  return <div className="box-shadow">{props.children}</div>;
};

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
      <div className="flex-start">
        <img src={img} alt="user profile pic"></img>
        <div className="name-adv">
          <h3>{name}</h3>
          <p>{adventure}</p>
        </div>
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

export const Pointline = () => {
  return (
    <div className="point-line">
      <div className="point-line-header">
        <h1>Why us?</h1>
        <p>Answer is simple.</p>
        <p>See what we offer!</p>
      </div>
      <div className="point-line-points">
        <div className="point-line-item">
          <i className="green-color bi bi-prescription2"></i>
          <h2>Safety</h2>
          <p>Safety is the highest value for us and our travels.</p>
        </div>
        <div className="point-line-item">
          <i className="green-color bi bi-strava"></i>
          <h2>Places</h2>
          <p>On a daily basis, we visit places inaccessible to tourists.</p>
        </div>
        <div className="point-line-item">
          <i className="green-color bi bi-people-fill"></i>
          <h2>Locals</h2>
          <p>By knowing the local people we get to know the local culture.</p>
        </div>
      </div>
    </div>
  );
};

const Listingitem = ({ name, price, info, img, ifnew }) => {
  return (
    <div className="listing-item">
      <div className="listing-item-img">
        <img src={img} alt="landscape of place"></img>
        {ifnew && (
          <div className="listing-new-tag">
            <span>New</span>
          </div>
        )}
      </div>
      <div className="listing-name-price">
        <h2>{name}</h2>
        <h3>
          ${price}
          <span className="small-text">/week</span>
        </h3>
      </div>
      <p className="listing-item-info">
        {info.length > 80 ? info.substring(0, 80) + "..." : info}
        {info.length > 80 ? (
          <button className="btn-no-border">Read more</button>
        ) : null}
      </p>
    </div>
  );
};

const destinations = [
  {
    name: "Cali, Indonesia",
    price: 2800,
    info: "Cali is an Beautiful island on the east of this Beautiful Meditarrean country. The beaches of this island are some of the most beautiful in the world.",
    img: "images/land5.JPG",
    ifnew: true,
  },
  {
    name: "Caracas, Venezuela",
    price: 3000,
    info: "The Country located at the northern end of the South America. Discovering amazing places in the this Wild country with large mountains and lakes.",
    img: "images/land6.JPG",
    ifnew: true,
  },
  {
    name: "Palawan, Phillippines",
    price: 4500,
    info: "Palawan associated with the paradise island. Some of the most beautiful beaches and palm trees in the world.",
    img: "images/per4.JPG",
    ifnew: true,
  },
];

export const Listing = () => {
  return (
    <div className="listing-div">
      <h1>Destinations</h1>
      <p>Check out where our trips are taking place.</p>
      <div className="listing-list-div">
        {destinations.map((ele, i) => {
          return <Listingitem {...ele} key={i}></Listingitem>;
        })}
      </div>
      <button className="green-text-btn theme-btn">Explore more</button>
    </div>
  );
};
