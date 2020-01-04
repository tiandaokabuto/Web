import React, { Component } from 'react';

import NavMenu from '../../components/nav_menu/NavMenu'

import './home.css'

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() { 
		return (
			<div className="home">
				<div className="left-wrapper">
					<NavMenu></NavMenu>
				</div>
				<div className="right-wrapper">
					<div className="main-wrapper">
						<div className="content-wrapper"></div>
						<div className="attribute-wrapper"></div>
					</div>
					<div className="footer-wrapper"></div>
				</div>
			</div>
		);
	}
}

export default Home;
