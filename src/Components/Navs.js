import React from "react";

const Navs = () => {
  return (
    <div className="top-nav-bar space-bt-flex side-margin-5">
      <h2 className="logo">
        Explory<b className="green-text">World</b>
      </h2>
      <ul className="space-bt-flex">
        <li>
          <button className="btn-no-border">About us</button>
        </li>
        <li>
          <button className="btn-no-border">Features</button>
        </li>
        <li>
          <button className="btn-no-border">Destinations</button>
        </li>
      </ul>
      <button className="green-text-btn theme-btn">Get started</button>
    </div>
  );
};

export default Navs;
