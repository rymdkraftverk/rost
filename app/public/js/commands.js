import React, {Component} from 'react';
import Command from './command';
import fetch from 'isomorphic-fetch';

export default class Commands extends Component {
  constructor(props){
    super(props);
    this.state = {
      commands: [],
      update: this.props.update
    }
    window.commands = this;
  }

  componentDidMount(){
    this.getAllCommands();
  }

  refresh(){
    this.getAllCommands();
  }

  getAllCommands(){
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
      <div className="parent" style={{width: "100%"}}>
      {
        this.state.commands.map((command)=>{
          return <Command mode={command.mode} rev={command._rev} id={command._id} key={command.command} signals={command.signals} command={command.command}/>
        })
      }
      </div>
    )
  }
}
