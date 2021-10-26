import React, { useState } from "react";
import "./App.css";

const ADDITION = "addition";
const RESET = "reset";
const SUBTRACTION = "subtraction";

const Counter = (props) => {
  const [count, setCount] = useState(0);
  const [result, setResult] = useState(props.result);

  const handleMathClick = (type, number = 1) => {
    if (type === SUBTRACTION) {
      setCount(count + 1);
      setResult(result - number);
    } else if (type === RESET) {
      setCount(count + 1);
      setResult(props.result);
    } else if (type === ADDITION) {
      setCount(count + 1);
      setResult(result + number);
    }
  };
  return (
    <>
      <MathButton
        name="-10"
        number={10}
        type={SUBTRACTION}
        click={handleMathClick}
      />
      <MathButton
        name="-1"
        number={1}
        type={SUBTRACTION}
        click={handleMathClick}
      />
      <MathButton name="Reset" type={RESET} click={handleMathClick} />
      <MathButton
        name="+1"
        number={1}
        type={ADDITION}
        click={handleMathClick}
      />
      <MathButton
        name="+10"
        number={10}
        type={ADDITION}
        click={handleMathClick}
      />
      <ResultPanel count={count} result={result} />
    </>
  );
};

const MathButton = ({ click, name, number, type }) => {
  const handleClick = () => click(type, number);
  return <button onClick={handleClick}>{name}</button>;
};

const ResultPanel = (props) => {
  return (
    <>
      <h1>
        Liczba kliknięć: {props.count}{" "}
        {props.count > 10 ? <span>Przeciążenie!</span> : null}
      </h1>
      <h1>Wynik: {props.result}</h1>
    </>
  );
};
export default Counter;
