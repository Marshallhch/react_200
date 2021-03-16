import React, { Component } from 'react';

class R004_Lifecycle extends Component{
  render(){
    console.log('3. render call');
    return <h2>This is Render Function</h2>;
  }
}

export default R004_Lifecycle;