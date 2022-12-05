import React from "react";
import { Lefttop, Righttop } from "./Components/Topcomps";

import Navs from "./Components/Navs";

const Top = () => {
  return (
    <div>
      <Navs></Navs>
      <div className="mid-top">
        <Lefttop></Lefttop>
        <Righttop></Righttop>
      </div>
    </div>
  );
};

export default Top;
