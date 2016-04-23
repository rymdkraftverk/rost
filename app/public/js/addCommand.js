import React, {Component} from 'react';

export default class AddCommand extends Component {
	constructor(props){
		super(props);
	}
	render(){
		var style = {
			width: "45px",
			height: "45px",
			background: "#000",
			color: "#fff",
			position: "relative",
			right: "10px",
			marginTop: "5px",
			textAlign: "center",
			lineHeight: "45px",
			borderRadius: "50%",
			marginBottom: "15px",
			float: "right"
		}
		return(
			<div>
				<div className="addCommand">+</div>
			</div>
		)
	}
}