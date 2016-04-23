import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Device from './device';
import Devices from './devices';
import RostWrapper from './rost_wrapper'

export default class App extends Component{
  constructor(){
    super();
    window.refreshApplication = this.refreshApplication;
  }

  refreshApplication(){
    console.log("refresh everything");
    this.forceUpdate();
  }

  render(){
    return(
      <div>
        <RostWrapper/>
        <p className="slogan" style={{textAlign: "center"}}>Powered by <u>Rymdkraftverk</u></p>
      </div>
    )
  }
}
ReactDOM.render(
  <App />, document.getElementById('app')
)
