import React, { Component } from "react";

class Card extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <button onClick={this.props.onHandleClick}>
          {this.props.btnNamme1}
        </button>
        <button onClick={this.props.onHandleClickPlus}>
          {this.props.btnNamme1}
        </button>
        <div>{this.props.number}</div>
      </div>
    );
  }
}

export default Card;
