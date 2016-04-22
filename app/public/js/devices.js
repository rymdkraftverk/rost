import React, {Component} from 'react';
import devices from '../devices.json';
import Device from './device';

export default class Devices extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
      { devices.devices.map((device)=>{
        return <Device key={device.name} name={device.name} />
      })}
      </div>
    )
  }
}
