import React, {Component} from 'react';
import Devices from './devices';
import Commands from './commands';
import Header from './header';

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
      borderRadius: "4px",
      display: "flex"
    }
    return(
      <div style={style}>
        <Devices />
        <div style={{width: "100%"}}>
          <Header />
          <Commands />
        </div>
      </div>
    )
  }
}
