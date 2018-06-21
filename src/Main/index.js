import React, { Component } from 'react';
import './Main.sass';
import logo from '../static/img/react/logo.png';

class Main extends Component {
	state = {};
	render() {
		const { title } = this.props;
		return (
			<div>
				<h2>{title}</h2>
				<img src={logo} alt="" />
			</div>
		);
	}
}
export default Main;
