import React, { Component } from "react";
import "./App.css";
import Text from "./Text";
class App extends Component {
  state = {
    underline: false,
  };
  render() {
    const text = "Hello!";
    // let classes = "";
    // if (this.state.underline) {
    //   classes += " line";
    // }
    // if (text.length > 10) {
    //   classes += " big";
    // }

    const classes = ["one"];
    if (this.state.underline) {
      classes.push("line");
    }
    if (text.length > 10) {
      classes.push("big");
    }
    return (
      <div
        className="App"
        onClick={() => this.setState({ underline: !this.state.underline })}
      >
        <h1 className={classes.join(" ")}>{text}</h1>
        <Text />
      </div>
    );
  }
}

export default App;
