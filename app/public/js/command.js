import React, {Component} from 'react';
import Signal from './signal.js';

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
    var option = {
      background: "#f0c29c",
      color: "#fff",
      textAlign: "center",
      lineHeight: "10px",
      padding: "5px",
      borderRadius: "4px",
      marginLeft: "10px"
    }
    var optionsIcon = {
      marginLeft: "10px"
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
            <img src="#"/>
          </div>
        </div>
      </div>
    )
  }
}
