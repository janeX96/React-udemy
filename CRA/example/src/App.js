import React, { Component } from "react";
import "./App.css";

const App = () => {
  const [text, setText] = React.useState("");

  const handleClick = () => setText(`${text}a`);

  return (
    <div>
      <button onClick={() => handleClick()}>Dodaj A</button>
      <h1>{text}</h1>
    </div>
  );
};
export default App;
