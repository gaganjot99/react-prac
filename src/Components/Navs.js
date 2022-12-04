import React from "react";

const Navs = () => {
  return (
    <div className="top-nav-bar space-bt-flex side-margin-5">
      <h2>
        Explory<b className="green-text">World</b>
      </h2>
      <ul className="space-bt-flex">
        <li>About us</li>
        <li>Features</li>
        <li>Destinations</li>
      </ul>
      <button className="green-text-btn theme-btn">Get started</button>
    </div>
  );
};

export default Navs;
