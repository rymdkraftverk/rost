import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Device from './device';
import Header from './header';

export default class App extends Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <Device />
        <Header />
      </div>
    )
  }
}

ReactDOM.render(
  <App />, document.getElementById('app')
)
