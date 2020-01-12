import React, { Component } from 'react';

import { Icon } from 'antd'

import './footer.less'

class Footer extends Component {
	constructor(props) {
		super(props);
		this.state = {  }
	}
	render() { 
		return (
			<div className="footer-main-wrapper"
			onDragEnter={this.dragenterHandle.bind(this)}
			onDragOver={this.dragoverHandle.bind(this)}
			onDragLeave={this.dragleaveHandle.bind(this)}
			onDrop={this.dropHandle.bind(this)}
			>
				<div className="footer-title-wrapper">
					<div className="footer-left-title">
						<span>输出</span>
					</div>
					<div className="footer-right-title">
						<Icon type="delete" className="icon" />
						<Icon type="close" className="icon" />
					</div>
				</div>
				<div className="footer-content-wrapper">
					
				</div>
			</div>
		);
	}
	dropHandle (e) {
		let item = e.dataTransfer.getData('item')
		console.log(JSON.parse(item))
		e.preventDefault()
		e.stopPropagation()
	}
	dragenterHandle (e) {
		console.log('进入目标')
		// e.preventDefault()
	}
	dragoverHandle (e) {
		e.preventDefault()
	}
	dragleaveHandle (e) {
		console.log('离开目标')
		// e.preventDefault()
	}
}

export default Footer;