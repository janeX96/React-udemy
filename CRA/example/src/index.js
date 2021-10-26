import React from "react";
import ReactDOM from "react-dom";
import Counter from "./Counter";

const startValue = 0;
ReactDOM.render(
  <Counter result={startValue} />,
  document.getElementById("root")
);
