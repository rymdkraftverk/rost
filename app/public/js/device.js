import React, {Component} from 'react';

export default class Device extends Component {
  constructor(props){
    super(props);
  }
  render(){
    var style = {
      width: 300,
      height: 120,
      background: "lightblue",
      color: "blue",
      margin: "10px",
      borderRadius: "4px"
    };

    var header = {
      padding: "10px"
    }
    return(
      <div style={style}>
        <p style={header}>{this.props.name}</p>
      </div>
    )
  }
}
