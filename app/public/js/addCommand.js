import React, {Component} from 'react';

export default class AddCommand extends Component {
	constructor(props){
		super(props);
	}

	allowDrop(ev) {
		ev.preventDefault();
	}

	drop(ev) {
		ev.preventDefault();
		var signal = ev.dataTransfer.getData("signal");
		this.removeSignalFromCommand(signal);
	}

	removeSignalFromCommand(){
		this.props.onDeleteSignal();
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
			<div onDrop={this.drop.bind(this)} onDragOver={this.allowDrop}>
				<div className="addCommand">+</div>
			</div>
		)
	}
}
