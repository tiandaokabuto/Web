import React, { Component } from 'react';

// import { Button } from 'antd';

import './order_button.less'

class OrderButton extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return (
			<div className="order-button-wrapper">
				<button className="order-button">获取更多命令</button>
			</div>
		);
	}
}

export default OrderButton;