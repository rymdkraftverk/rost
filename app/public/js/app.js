import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Device from './device';

export default class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Device />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)
