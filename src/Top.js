import React from "react";
import { Lefttop, Righttop } from "./Components/Topcomps";

import Navs from "./Components/Navs";
import { Infoline, Listing, Pointline, Scrollanim } from "./Components/Comps";
import Aboutus from "./Components/Aboutus";

const Top = () => {
  return (
    <div>
      <Scrollanim>
        <Navs></Navs>
        <div className="mid-top">
          <Lefttop></Lefttop>
          <Righttop></Righttop>
        </div>
      </Scrollanim>
      <Scrollanim>
        <Infoline></Infoline>
      </Scrollanim>
      <Scrollanim>
        <Aboutus></Aboutus>
      </Scrollanim>
      <Scrollanim>
        <Pointline></Pointline>
      </Scrollanim>
      <Scrollanim>
        <Listing></Listing>
      </Scrollanim>
    </div>
  );
};

export default Top;
