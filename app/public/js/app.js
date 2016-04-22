import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Device from './device';
import Header from './header';
import Devices from './devices';
import Commands from './commands';
import RostWrapper from './rost_wrapper'

export default class App extends Component{
  constructor(){
    super();
  }
  render(){
    var style={
      background: "lightblue",
      height: 1000
    }
    return(
      <div style={style}>
        <RostWrapper/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)
