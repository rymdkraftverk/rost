import React, {Component} from 'react';
import Signal from './signal.js';

export default class Device extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var style = {
      padding: "10px",
      background: "#d1e9f0",
      color: "blue",
      margin: "10px",
      borderRadius: "4px"
    };

    var header = {
      padding: "0 0 0 10px",
      marginTop: "5px",
      color: "#63919e",
      fontSize: "24px",
      textTransform: "capitalize"
    }

    var optionsStyle = {
      display: "flex",
      justifyContent: "flex-start",
      marginBottom: "5px"
    };

    return(
      <div style={style}>
        <p style={header}>{this.props.name}</p>
        <div style={optionsStyle}>
        {
          this.props.signals.map((signal)=>{
            return <Signal imageName={signal.imageName} description={signal.description} copyable={true} id={signal.id} key={signal.id} device={this.props.name} color={"#accad3"}/>
          })
        }
        </div>

      </div>
    )
  }
}
