import React, {Component} from 'react';
import Devices from './devices';
import Commands from './commands';
import Header from './header';
import AddCommand from './addCommand';

export default class RostWrapper extends Component {
  constructor(props){
    super(props);
    this.state = {
      fetchCommands: false
    }
  }

  refreshApplication(){
    console.log("refresh everything");
    this.setState({fetchCommands: true})
  }

  updateCommands(){

  }

  render(){
    var style = {
      background: "white",
      margin: "50px auto",
      width: 1100,
      borderRadius: "4px",
      overflow: "hidden",
      display: "flex"
    }
    return(
      <div style={style}>
        <Devices />
        <div style={{width: "100%"}}>
          <Header />
          <div style={{padding: "10px"}}>
            <Commands update={this.state.fetchCommands}/>
            <AddCommand onDeleteSignal={this.refreshApplication.bind(this)}/>
          </div>
        </div>
      </div>
    )
  }
}
