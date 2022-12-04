import React from "react";
import Lefttop from "./Components/Lefttop";

import Navs from "./Components/Navs";

const Top = () => {
  return (
    <div>
      <Navs></Navs>
      <div className="mid-top">
        <Lefttop></Lefttop>
      </div>
    </div>
  );
};

export default Top;
