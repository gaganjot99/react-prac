import React from "react";
import { Lefttop, Righttop } from "./Components/Topcomps";

import Navs from "./Components/Navs";
import { Infoline } from "./Components/Comps";

const Top = () => {
  return (
    <div>
      <Navs></Navs>
      <div className="mid-top">
        <Lefttop></Lefttop>
        <Righttop></Righttop>
      </div>
      <Infoline></Infoline>
    </div>
  );
};

export default Top;
