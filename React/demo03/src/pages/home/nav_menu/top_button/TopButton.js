import React, { Component } from 'react';

import {  Icon } from 'antd';

import './top_button.less'

class TopButton extends Component {
	constructor(props) {
		super(props);
		this.state = {}
	}
	render() { 
		return (
			<div className="top-button-wrapper">
				<div className="plus-btn">
					<Icon type="plus-square" className="icon" />
					<span>全部展开</span>
				</div>
				<div className="minus-btn">
					<Icon type="minus-square" className="icon" />
					<span>全部折叠</span>
				</div>
			</div>
		);
	}
}

export default TopButton;