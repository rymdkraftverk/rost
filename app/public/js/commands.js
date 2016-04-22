import React, {Component} from 'react';
import Command from './command';
import fetch from 'isomorphic-fetch';

export default class Commands extends Component {
  constructor(props){
    super(props);
    this.state = {
      commands: []
    }
  }

  componentDidMount(){
    fetch('api/command')
    .then((response)=>{
      return response.json()
    })
    .then((json)=>{
      this.setState({commands: json})
      console.log(this.state);
    })
  }

  render(){
    return(
      <div style={{width: "100%"}}>
        <Command />
      </div>
    )
  }
}
