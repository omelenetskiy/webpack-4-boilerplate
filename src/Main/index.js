import React, { Component } from 'react';
import logo from '../static/img/react/logo.png';
import './Main.sass';

class Main extends Component {
	state = {};
	render() {
		return (
			<div>
				<h2>Main</h2>
				<img src={logo} alt="" />
			</div>
		);
	}
}
export default Main;
