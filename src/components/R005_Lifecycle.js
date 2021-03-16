import React, { Component } from 'react';

class R005_Lifecycle extends Component{
  constructor(props){
    super(props);
    this.state={};
    console.log('1. constructor call');
  }

  render(){
    console.log('2. render call');
    return <h2>this is the Constructor Call</h2>;
  }
}

export default R005_Lifecycle;
