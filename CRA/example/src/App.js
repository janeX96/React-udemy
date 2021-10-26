import React, { useEffect, useState } from "react";
import { render } from "react-dom";
import "./App.css";

const App = () => {
  const [counter, setCounter] = useState(0);
  const [isActive, setIsActive] = useState(true);

  const handler = () => setCounter((prevValue) => prevValue + 1);
  const toogleVisibilityCounter = () => setIsActive((prevValue) => !prevValue);

  const counterComponent = isActive ? (
    <Counter rerenderCounter={counter} />
  ) : null;
  //po podaniu [] ajko drugi argument zawartość useEfffect wykona się tylko raz przy pierwszym renderze (jak ComponentDidMount)
  // useEffect(() => {
  //   // alert("Hello");
  // }, []);

  return (
    <>
      <div>
        <button onClick={toogleVisibilityCounter}>Pokaż/ukryj komponent</button>
        <button onClick={handler}>Przerenderuj komponent</button>
        {counterComponent}
      </div>
    </>
  );
};

const Counter = ({ rerenderCounter }) => {
  const [counter, setCounter] = useState(0);

  const handleMouseMove = (event) => setCounter(event.clientX);
  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);

    //cos w stylu ComponentDidUnmount
    return () => {
      alert("Komponent jest odmontowywany");
      window.removeEventListener("mousemove", handleMouseMove);
    };
    //jeśli chociaż jedna z przekazanych zalezności w tablicy się zmieni, nastąpi rerender komponentu
  }, [rerenderCounter]);

  return (
    <div>
      <p>{counter}</p>
      <p>{rerenderCounter}</p>
    </div>
  );
};
export default App;
