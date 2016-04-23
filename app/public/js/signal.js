import React, {Component} from 'react';
import ReactTooltip from 'react-tooltip';

export default class Signal extends Component{
  constructor(props){
    super(props);
  }

  drag(ev) {
    window.addCommand.setState({addMode: false});
    console.log(this.props)
    ev.dataTransfer.setData("signal", JSON.stringify({
      id: this.props.id,
      command: this.props.command,
      device: this.props.device,
      commandId: this.props.commandId || "",
      imageName: this.props.imageName,
      description: this.props.description
    }));
  }

  onDragEnd(){
    window.addCommand.setState({addMode: true});
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
    var imageLocation = "../images/" + this.props.imageName + ".png";
    var imageDescription = this.props.description;

    return(
      <div style={option} draggable="true" onDragStart={this.drag.bind(this)} onDragEnd={this.onDragEnd}>
      <ReactTooltip />
        <img id="tooltip" src={imageLocation} data-tip={imageDescription} draggable="false" width="24" height="22"/>
      </div>
    )
  }
}
