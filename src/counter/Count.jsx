import React, { Component } from "react";

export default class Count extends Component {
  constructor() {
    super();
    this.state = {
      count: 0
    };
  }

  increment = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1
    }));
  };

  decrement = () => {
    this.setState((prevState) => ({
      count: prevState.count > 0 ? prevState.count - 1 : 0
    }));
  };

  render() {
    return (
      <div>
        <button onClick={this.increment}>+</button>
        <p>{this.state.count}</p>
        <button onClick={this.decrement}>-</button>
      </div>
    );
  }
}
