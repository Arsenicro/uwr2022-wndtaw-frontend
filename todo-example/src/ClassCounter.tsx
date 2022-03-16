import React, { Component } from "react";

export class ClassCounter extends Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <div>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>
          Click
        </button>
        <p>{this.state.count}</p>
      </div>
    );
  }
}

export default ClassCounter;
