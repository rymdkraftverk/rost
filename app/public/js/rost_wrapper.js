import React, {Component} from 'react';
import Devices from './devices';
import Commands from './commands';
import Header from './header';

export default class RostWrapper extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var style = {
      background: "white",
      margin: "50px auto",
      width: 1000,
      borderRadius: "4px",
      overflow: "hidden",
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
