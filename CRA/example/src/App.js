import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);

  const handler = () => setCounter((prevValue) => prevValue + 1);
  return (
    <>
      <div onClick={handler}>
        <p>{counter}</p>
        <p>Licznik</p>
      </div>
    </>
  );
};

export default App;
