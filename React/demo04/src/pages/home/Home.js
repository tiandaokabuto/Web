import React, { Component } from 'react';

import NavMenu from './nav_menu/NavMenu'
import Footer from './footer/Footer'
import Action from './action/Action'
import Attribute from './attribute/Attribute'

import './home.less'

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
						<div className="action-wrapper">
							<Action></Action>
						</div>
						<div className="attribute-wrapper">
							<Attribute></Attribute>
						</div>
					</div>
					<div className="footer-wrapper">
						<Footer></Footer>
					</div>
				</div>
			</div>
		);
	}
}

export default Home;
