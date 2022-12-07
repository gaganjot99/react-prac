import React, { useEffect } from "react";
import { Footer, Reviews, Start } from "./Components/Bottomcomps";
import { Scrollanim } from "./Components/Comps";
import scrollTrigger from "./Components/scripts";

const Bottom = () => {
  return (
    <div>
      <Scrollanim>
        <Start></Start>
      </Scrollanim>
      <Scrollanim>
        <Reviews></Reviews>
      </Scrollanim>
      <Scrollanim>
        <Footer></Footer>
      </Scrollanim>
    </div>
  );
};

export default Bottom;
