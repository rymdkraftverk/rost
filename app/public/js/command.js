import React, {Component} from 'react';

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
    return (
      <div style={style}>
        <div style={command}>
          Command
        </div>
        <div style={optionsStyle}>
          <div style={option}>
            <img src="../images/light-on.png" width="24" height="22"/>
          </div>
          <div style={option}>
            <img src="../images/light-on.png" width="24" height="22"/>
          </div>
          <div style={optionsIcon}>
            <img src="#" />
          </div>
        </div>
      </div>
    )
  }
}
