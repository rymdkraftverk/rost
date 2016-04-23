import React, {Component} from 'react';
import Device from './device';
import fetch from 'isomorphic-fetch'

export default class Devices extends Component {
  constructor(props){
    super(props);
    this.state = {
      devices: []
    }
  }

  componentDidMount(){
    fetch('api/device')
    .then((response)=>{
      return response.json()
    })
    .then((json)=>{
      this.setState({devices: json})
      console.log(this.state.devices);
    })
  }

  render(){
    var style = {
      padding: "5px",
      borderRight: "2px solid #ebf2f4",
      width: 400,
      paddingBottom: "50px"
    }
    return(
      <div style={style}>
      { this.state.devices.map((device)=>{
        return <Device signals={device.signals} key={device.name} name={device.name} />
      })}
      </div>
    )
  }
}
