import React, { Component } from 'react';

import { Icon } from 'antd';

import './action.less';

class Action extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			showActon: false
		}
	}
	render() {
		
		return (
			<div className="action-main-wrapper"
			// onDragEnter={this.dragenterHandle.bind(this)}
			onDragOver={this.dragoverHandle.bind(this)}
			// onDragLeave={this.dragleaveHandle.bind(this)}
			onDrop={this.dropHandle.bind(this)}
			>
				<div className="action-content-wrapper">
					<div className="action-title">
						<div onClick={this.changeContent.bind(this, true)} className={this.state.showActon ? `title-btn selected-title`: 'title-btn'}>可视化</div>
						<div onClick={this.changeContent.bind(this, false)} className={!this.state.showActon ? `title-btn selected-title`: 'title-btn'}>源代码</div>
						<div className="title-text">
							<Icon type="bar-chart" />查看变量
						</div>
					</div>
					{this.showActionHTML(this.state.showActon)}
				</div>
			</div>
		);
	}
	showActionHTML (flag) {
		if (flag) {
			return (
				<div className="action-content">
						{
							this.state.data.map((item, index) => {
								return (
									<div className="action-item" key={index}>
										<div className="item-icon"><Icon type="global" /></div>
										<div className="item-text">{item.name}</div>
									</div>
								)
							})
						}
						<div className="action-item">
							<div className="item-icon"><Icon type="global" /></div>
							<div className="item-text">将已打开的浏览器设置为操控对象，复制给hWeb</div>
						</div>
						<div className="guide-msg">双击或拖动左侧命令插入代码，按Delete键删除命令</div>
					</div>
			)
		} else {
			return (
				<div className="code-content">
					{
						this.state.data.map((item, index) => {
							return (
								<div key={index}>var a = 'A'</div>
							)
						})
					}
				</div>
			)
		}
	}
	changeContent (flag) {
		this.setState({
			showActon: flag
		})
	}
	dropHandle (e) {
		let dataArr = this.state.data.slice()
		let item = e.dataTransfer.getData('item')
		dataArr.push(JSON.parse(item))
		this.setState({
			data: dataArr
		})
		// console.log(JSON.parse(item))

		e.preventDefault() // 阻止默认事件
		e.stopPropagation() // 阻止冒泡事件
	}
	dragoverHandle (e) {
		e.preventDefault()
	}
}

export default Action;