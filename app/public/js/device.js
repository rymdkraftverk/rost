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

    var optionsStyle = {
      display: "flex",
      justifyContent: "flex-start"
    };

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
      <div style={style}>
        <p style={header}>{this.props.name}</p>
        <div style={optionsStyle}>
        {
          this.props.signals.map((signal)=>{
            return <div key={signal.id} style={option}>
              <img src="../images/light-on.png" width="24" height="22"/>
            </div>
          })
        }
        </div>

      </div>
    )
  }
}
