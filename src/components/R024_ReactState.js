import React, { Component } from "react";

class ReactState extends Component {
  constructor(props) {
    super(props);
    //console.log(props);
    this.state = {
      StateString: this.props.reactString,
      StateNumber: 200,
    };
  }

  render() {
    return (
      <div>
        {this.state.StateString}
        {this.state.StringNumber}
      </div>
    );
  }
}

export default ReactState;
