import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Device from './device';
import Header from './header';
import Devices from './devices';
import Commands from './commands';

export default class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Header />
        <Devices />
        <Commands />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)
