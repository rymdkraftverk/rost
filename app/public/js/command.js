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
      padding: "10px",
      borderRadius: "4px",
      marginTop: "10px"
    };
    return (
      <div style={style}>
        <div>
          Command
        </div>
        <div>
          hello
        </div>
      </div>
    )
  }
}
