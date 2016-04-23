import React, {Component} from 'react';
import Signal from './signal.js';
import fetch from 'isomorphic-fetch';

export default class Command extends Component {
  constructor(props){
    super(props);
    var checked = this.props.mode!=='strict';

    this.state = {
      command: this.props.command,
      checked: checked,
      mode: this.props.mode,
      signals: this.props.signals || []
    }
  }

  allowDrop(ev) {
    ev.preventDefault();
  }

  drop(ev) {
    ev.preventDefault();
    var signal = JSON.parse(ev.dataTransfer.getData("signal"));

    var conflicts = this.state.signals.filter((s)=>{
      console.log("signal", signal, "s", s)
      return s.id === signal.id && s.device === signal.device
    })
    if (conflicts.length === 0){
      this.addSignal(signal);
    }
  }

  addSignal(signal){
    var body = [
        {
          id: signal.id,
          device: signal.device,
          imageName: signal.imageName,
          description: signal.description
        }
      ]
    fetch('api/command/' + this.props.id + '/signal', {
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(body)
    })
    .then((response)=>{
      return response.json()
    })
    .then((json)=>{
      // console.log(json)
    })
    this.setState({signals: this.state.signals.concat(signal)}, ()=>{
      console.log("signals", this.state.signals)
    })
  }

  onKeyPress(event){
    var charCode = (typeof event.which == "number") ? event.which : event.keyCode;
    console.log(charCode)
    var ENTER = 13;
    if( charCode == ENTER ) {
      this.setState({command: event.target.value}, ()=>{
        console.log(this.state.command)
        this.updateCommand();
      })
    }
  }

  updateCommand(){
    var body = {
      "_id": this.props.id,
      "_rev": this.props.rev,
      "command": this.state.command,
      "type": "command",
      "mode": this.state.mode,
      "signals": this.state.signals
    }
    console.log(body)
    console.log("update command");
    fetch('api/command',{
      method: 'put',
      headers: new Headers({
        'Content-Type': 'application/json'
      }),
      body: JSON.stringify(body)
    })
    .then((response)=>{
      console.log(response)
    })
  }

  deleteCommand(){
    console.log("delete command");
    fetch('api/command/' + this.props.id + '/' + this.props.rev, {
      method: 'delete'
    })
    .then((response)=>{
      window.app.refreshApplication();
      console.log(response);
    })
  }

  toggleStrictMode(e){
    console.log("toggle", e.target.checked);
    if (!e.target.checked){
      this.setState({mode: "strict"}, ()=>{
        this.updateCommand();
      });
    }
    else {
      this.setState({mode: ""}, ()=>{
        this.updateCommand();
      });
    }
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
      padding: "5px",
      background: "#f7ece3",
      color: "#d9823c",
      fontSize: "18px",
      border: "none"
    }
    var optionsIcon = {
      marginLeft: "10px",
      marginTop: "6px",
      cursor: "pointer"
    }
    var id = "cmn-toggle-" + this.props.id;
    return (
        <div className="test" style={style} onDrop={this.drop.bind(this)} onDragOver={this.allowDrop}>
          <input style={command} defaultValue={this.props.command} onKeyPress={this.onKeyPress.bind(this)}/>

          <div style={optionsStyle}>
            {
              this.state.signals && this.state.signals.map((signal)=>{
                return <Signal
                device={signal.device}
                commandId={this.props.id}
                imageName={signal.imageName}
                description={signal.description}
                command={this.props.command}
                copyable={false}
                id={signal.id}
                key={signal.device + signal.id} />
              })
            }

          <div className="toggle">

            <input id={id} onClick={this.toggleStrictMode.bind(this)} defaultChecked={this.state.checked} className="cmn-toggle cmn-toggle-round-flat" type="checkbox" />
            <label htmlFor={id} data-tip={""} className="block"></label>
          </div>
          <div style={optionsIcon} onClick={this.deleteCommand.bind(this)}>
              <img src="../images/trash.png" width="24" height="22"/>
          </div>
        </div>
      </div>
    )
  }
}
