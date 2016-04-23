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
    })
  }

  render(){
    return(
      <div style={{width: "100%"}}>
      {
        this.state.commands.map((command)=>{
          return <Command id={command._id} key={command.command} signals={command.signals} command={command.command}/>
        })
      }
      </div>
    )
  }
}
