import React, {Component} from 'react';

export default class Device extends Component {
  constructor(props){
    super(props);
    this.state = {
      devices: [
        "Coffee Maker",
        "Lights",
        "Spotify"
      ]
    }
  }

  render(){
    var style = {
      display: "flex",
      width: 400,
      justifyContent: "space-between",
      background: "yellow"
    };
    return(
      <div style={style}>
        {
          this.state.devices.map(function(device){
            return <p>{device}</p>;
          })
        }
      </div>
    )
  }
}
