import React, {Component} from 'react';
import Signal from './signal.js';
import fetch from 'isomorphic-fetch';

export default class Command extends Component {
  constructor(props){
    super(props);
    this.state = {
      signals: this.props.signals || []
    }
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    var id = ev.dataTransfer.getData("signal").id;
    this.addSignal({ id });
  }

  addSignal(signal){
    fetch('api/command/' + this.props.id, {
      method: 'PUT',
      body: JSON.stringify([{
        id: signal.id,
        device: signal.device
      }])
    })
    .then((response)=>{
      return response.json()
    })
    .then((json)=>{
      console.log(json)
    })
    this.setState({signals: this.state.signals.concat(signal)})
  }

  render(){
    var style = {
      background: "#f7ece3",
      color: "#d9823c",
      fontSize: "18px",
      display: "flex",
      justifyContent: "space-between",
      borderRadius: "4px",
      padding: "10px",
      margin: "10px",

    };
    var optionsStyle = {
      display: "flex",
      justifyContent: "space-between"
    };
    var command = {
      padding: "5px"
    }
    var optionsIcon = {
      marginLeft: "10px",
      marginTop: "6px"
    }

    return (
      <div style={style} onDrop={this.drop.bind(this)} onDragOver={this.allowDrop}>
        <div style={command}>
          {this.props.command}
        </div>
        <div style={optionsStyle}>
          {
            this.state.signals && this.state.signals.map((signal)=>{
              return <Signal command={this.props.command} copyable={false} id={signal.id} key={signal.id} />
            })
          }
          <div style={optionsIcon}>
            <img src="../images/settings.png" width="24" height="22"/>
          </div>
        </div>
      </div>
    )
  }
}
