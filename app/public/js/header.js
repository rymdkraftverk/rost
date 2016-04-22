import React from 'react';

export default class Header extends React.Component {
	constructor(props){
		super(props);
	}
	render(){
		var style = {
			background: "#e9a065",
			display: "flexbox",
			overflow: "hidden",
			justifyContent: "space-between"
		};
		return (
			<div style={style}>
				<img src="#" />
			</div>
		)
	}
}