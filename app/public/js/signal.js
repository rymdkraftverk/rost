import React, {Component} from 'react';

export default class Signal extends Component{
  constructor(props){
    super(props);
  }
  render(){

    var option = {
      background: "#f0c29c",
      color: "#fff",
      textAlign: "center",
      lineHeight: "10px",
      padding: "5px",
      borderRadius: "4px",
      marginLeft: "10px"
    }
    
    return(
      <div style={option}>
        <img src="../images/light-on.png" width="24" height="22"/>
      </div>
    )
  }
}
