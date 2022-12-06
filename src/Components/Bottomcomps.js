import React from "react";

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
