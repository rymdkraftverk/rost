import React, {Component} from 'react';
import Header from './header';
import Devices from './devices';

export default class RostWrapper extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var style={
      background: "white",
      width: 1000,
      position: "relative",
      left: 100,
      top: 50,
      borderRadius: "4px"
    }
    return(
      <div style={style}>
        <Devices />
      </div>
    )
  }
}
