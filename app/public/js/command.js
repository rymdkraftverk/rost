import React, {Component} from 'react';
import Signal from './signal.js';

export default class Command extends Component {
  constructor(props){
    super(props);
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

    console.log(this.props);

    return (
      <div style={style}>
        <div style={command}>
          {this.props.command}
        </div>
        <div style={optionsStyle}>
          {
            this.props.signals && this.props.signals.map((signal)=>{
              return <Signal key={signal.id} />
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
