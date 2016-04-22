import React from 'react';

export default class Header extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var style = {
			background: "#e9a065",
			padding: "20px 0 15px 20px",
			display: "flexbox",
			justifyContent: "space-between"
		};
		return (
			<div style={style}>
				<img src="../images/logo.png" width="75" height="26" />
			</div>
		)
	}
}