import React, { Component } from 'react';

import './arrows.less'

class Arrows extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() {
		return (
			<div className="arrows-wrapper">
				{this.showFrame(this.props.showFrame)}
			</div>
		);
	}
	showFrame (flag) {
		if (flag) {
			return (
				<div className="frame-wrapper">
					<div className="frame">+</div>
				</div>
			)
		} else {
			return (
				<div className="line-wrapper">
					<div className="line"></div>
					<div className="arrow"></div>
				</div> 
			)
		}
	}
}

export default Arrows;