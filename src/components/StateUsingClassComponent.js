import React, { Component } from "react";

export default class StateUsingClassComponent extends Component {
  constructor() {
    super();
    this.state = {
      name: "Girish",
      age: 1,
      array: [1, 2, 3, 4, 5, 6],
    };
  }

  changeStatus = () => {
    this.setState({ age: this.state.age * 2 });
  };

  render() {
    return (
      <>
        <h1>{this.state.name}</h1>
        <h1>{this.state.age}</h1>
        <h1>
          {this.state.array.map((item) => {
            return item;
          })}
        </h1>
        <button className="btn" onClick={this.changeStatus}>
          Change State
        </button>
      </>
    );
  }
}
