import React, { Component } from "react";
import Card from "./Card";

class ChildComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      btnNamme: "Click me",
      number: 0,
    };
  }

  onHandleClickPlus = () => {
    this.setState({ number: this.state.number + 1 });
    let abc = this.state.number;
    // this.setState({ number: 4 });
  };
  onHandleClick = () => {
    this.setState({ number: this.state.number - 1 });
    // this.setState({ number: 4 });
  };

  render() {
    return (
      <div>
        <Card
          btnNamme1={this.state.btnNamme}
          number={this.state.number}
          onHandleClickPlus={this.onHandleClickPlus}
          onHandleClick={this.onHandleClick}
        ></Card>
        <Card
          btnNamme1={this.state.btnNamme}
          number={this.state.number}
          onHandleClickPlus={this.onHandleClickPlus}
          onHandleClick={this.onHandleClick}
        ></Card>
      </div>
    );
  }
}

export default ChildComponent;
