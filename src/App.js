"use strict";
import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./Main";
import "./main.css";

const App = () => {
  return (
    <React.StrictMode>
      <Main></Main>
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App></App>);
