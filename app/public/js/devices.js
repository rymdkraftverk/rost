import React, {Component} from 'react';
import devices from '../devices.json';
import Device from './device';

export default class Devices extends Component {
  constructor(props){
    super(props);
  }

  render(){
    var style={
      paddingTop: "20px",
      borderRight: "2px solid lightgray",
      width: 400,
      paddingBottom: "50px"
    }
    return(
      <div style={style}>
      { devices.devices.map((device)=>{
        return <Device key={device.name} name={device.name} />
      })}
      </div>
    )
  }
}
