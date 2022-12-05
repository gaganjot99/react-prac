import React from "react";
import { Lefttop, Righttop } from "./Components/Topcomps";

import Navs from "./Components/Navs";
import { Infoline } from "./Components/Comps";
import Aboutus from "./Components/Aboutus";

const Top = () => {
  return (
    <div>
      <Navs></Navs>
      <div className="mid-top">
        <Lefttop></Lefttop>
        <Righttop></Righttop>
      </div>
      <Infoline></Infoline>
      <Aboutus></Aboutus>
    </div>
  );
};

export default Top;
