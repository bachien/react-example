import React, { Component } from "react";

class Dom extends Component {
  render() {
    console.log("Ham render da duoc chay");
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
    );
  }
}

export default Dom;
