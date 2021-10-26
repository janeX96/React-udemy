import React, { Component } from "react";
import "./App.css";

const App = () => {
  const [value, setValue] = React.useState("");

  const handleChange = (event) => setValue(event.target.value.toUpperCase());

  return (
    <div>
      <input
        type="text"
        value={value}
        placeholder="wpisz..."
        onChange={handleChange}
      />
      <button onClick={() => setValue("")}>Reset</button>
      <h1>{value}</h1>
    </div>
  );
};
export default App;
