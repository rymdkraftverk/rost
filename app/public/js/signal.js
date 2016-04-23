import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

export default class Signal extends Component{
  constructor(props){
    super(props);
  }

  drag(ev) {
    console.log(this.props)
    ev.dataTransfer.setData("signal", {
      id: this.props.id,
      command: this.props.command,
      device: this.props.device
    });
  }

  render(){

    var option = {
      background: this.props.color || "#f0c29c",
      color: "#fff",
      textAlign: "center",
      lineHeight: "5px",
      padding: "5px",
      borderRadius: "4px",
      marginLeft: "10px"
    }

    return(
      <div style={option} draggable="true" onDragStart={this.drag.bind(this)}>
      <ReactTooltip />
        <img src="../images/light-on.png" data-tip="hello world" draggable="false" width="24" height="22"/>
      </div>
    )
  }
}
