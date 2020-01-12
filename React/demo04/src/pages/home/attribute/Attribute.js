import React, { Component } from 'react';

import { Icon } from 'antd';

import './attribute.less'

class Attribute extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return (
			<div className="attribute-main-wrapper">
				<div className="attribute-content-wrapper">
					<div className="attribute-title">
						<div className="title-text">
							<span className="title"><Icon type="menu-fold" className="text-icon" />属性</span>
							<span className="title unselected-title"><Icon type="menu-unfold" className="text-icon" />变量</span>
						</div>
						<div className="title-icon">
							<Icon type="select" className="icon" />
						</div>
					</div>
					<div className="attribute-content">
						<div className="must-content">
							
						</div>
						<div className="not-content">
							
						</div>
					</div>
				</div>
			</div>
		);
	}
}
 
export default Attribute;