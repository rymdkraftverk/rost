import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Device from './device';
import Devices from './devices';
import RostWrapper from './rost_wrapper'

export default class App extends Component{
  constructor(){
    super();
  }
  render(){
    var style={
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
