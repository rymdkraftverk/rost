import React, {Component} from 'react';

export default class Signal extends Component{
  constructor(props){
    super(props);
  }

  drag(ev) {
    ev.dataTransfer.setData("signal", this.props.id);
  }

  render(){

    var option = {
      background: this.props.color || "#f0c29c",
      color: "#fff",
      textAlign: "center",
      lineHeight: "10px",
      padding: "5px",
      borderRadius: "4px",
      marginLeft: "10px"
    }

    return(
      <div style={option} draggable="true" onDragStart={this.drag.bind(this)}>
        <img src="../images/light-on.png" draggable="false" width="24" height="22"/>
      </div>
    )
  }
}
