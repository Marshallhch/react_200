import React, { Component } from "react";

class Map extends Component {
  componentDidMount() {
    const Map_Arr = [2, 3, 7, 8];
    let Map_newArr = Map_Arr.map((x) => x);
    console.log("1. Map_newArr : [" + Map_newArr + "]");

    let Map_multiArr = Map_Arr.map((x) => x * 2);

    console.log("2. Map_multiArr : [" + Map_multiArr + "]");

    const objArray = [
      { key: "react", value: "200" },
      { key: "react2", value: "300" },
    ];

    let Map_objArr = objArray.map((obj, index) => {
      console.log(index + 3 + ". obj : " + JSON.stringify(obj));
      let Obj = {};
      Obj[obj.key] = obj.value;
      return Obj;
    });

    console.log("5. Map_objArr : " + JSON.stringify(Map_objArr));
  }

  render() {
    return <h2>This is the Map Example</h2>;
  }
}

export default Map;
