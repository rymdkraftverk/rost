import React, {Component} from 'react';
import fetch from 'isomorphic-fetch';

export default class AddCommand extends Component {
	constructor(props){
		super(props);
		window.addCommand = this;
		this.state = {
			addMode: true
		}
	}

	allowDrop(ev) {
		ev.preventDefault();
	}

	drop(ev) {
		ev.preventDefault();
		var signal = JSON.parse(ev.dataTransfer.getData("signal"));
		this.removeSignalFromCommand(signal);
	}

	removeSignalFromCommand(signal){
		fetch('/api/command/' + signal.commandId + '/' + signal.id,{
			method: 'delete'
		})
		.then((response)=>{
			this.props.onDeleteSignal();
		})
	}

	addNewCommand(){
		console.log("add new command");
		// fetch('/api/command', {
		// 	method: 'post'
		// })
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
			<div onClick={this.addNewCommand} onDrop={this.drop.bind(this)} onDragOver={this.allowDrop}>
				{
					this.state.addMode?<div className="addCommand">+</div>:
					<div className="addCommand" style={{background: "white", "pointer": "none"}}>
						<img style={{"marginTop": "7px"}} src="../images/trash.png" width="34" height="32"/>
					</div>
				}

			</div>
		)
	}
}
