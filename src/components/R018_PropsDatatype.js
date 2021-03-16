import React, { Component } from "react";
import datatype from "prop-types";

class PropsDatatype extends Component {
  render() {
    let { String, Number, Boolean, Array, ObjectJson, Function } = this.props;
    return (
      <div>
        <p>{String}</p>
        <p>{Number}</p>
        <p>{Boolean.toString()}</p>
        <p>{Array.toString()}</p>
        <p>{JSON.stringify(ObjectJson)}</p>
        <p>{Function}</p>
      </div>
    );
  }
}

PropsDatatype.propTypes = {
  String: datatype.string,
  Number: datatype.number,
  Boolean: datatype.bool,
  Array: datatype.array,
  ObjectJson: datatype.object,
  Function: datatype.func,
};

export default PropsDatatype;
