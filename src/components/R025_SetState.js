import React, { Component } from "react";

class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = {
      StateString: "react example",
    };
  }

  StateChange = (flag) => {
    if (flag == "direct") {
      this.state.StateString = "react direct";
    }
    if (flag == "setstate") {
      this.setState({ StateString: "react setstate" });
    }
  };

  render() {
    return (
      <div>
        <button onClick={(e) => this.StateChange("direct", e)}>
          direct change
        </button>
        <button onClick={(e) => this.StateChange("setstate", e)}>
          setstate change
        </button>
        <p>{this.state.StateString}</p>
      </div>
    );
  }
}

export default SetState;
