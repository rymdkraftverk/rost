import React, {Component} from 'react';

export default class Device extends Component {
  constructor(props){
    super(props);
  }
  render(){
    // var style = {
    //   display: "flex",
    //   width: 400,
    //   justifyContent: "space-between",
    //   background: "yellow"
    // };
    return(
      <div>
        <p>{this.props.name}</p>
      </div>
    )
  }
}
