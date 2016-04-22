import React, {Component} from 'react';
import Command from './command';

export default class Commands extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div style={{width: "100%"}}>
        <Command />
      </div>
    )
  }
}
