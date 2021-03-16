import React, { Component } from "react";
//import datatype from "prop-types";

class PropsDefault extends Component {
  render() {
    let { ReactString, ReactNumber } = this.props;

    return (
      <div>
        {ReactString}
        {ReactNumber}
      </div>
    );
  }
}

PropsDefault.defaultProps = {
  ReactString: "react",
  ReactNumber: "400",
};

export default PropsDefault;
