import React, { Component } from 'react';

import { Icon } from 'antd';

import './action.less';

class Action extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [],
			showActon: true
		}
	}
	render() {
		
		return (
			<div className="action-main-wrapper"
				onDragOver={this.dragoverHandle.bind(this)}
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
							if (item.class === 'action-item') {
								return (
									<div className="action-item" key={index}>
										<div className="item-icon"><Icon type="global" /></div>
										<div className="item-content">
											<div className="item-text">将已打开的浏览器设置为操控对象，复制给hWeb</div>
										</div>
									</div>
								)
							} else if (item.class === 'action-item-target') {
								return (
									<div className="action-item" key={index}>
										<div className="item-icon"><Icon type="global" /></div>
										<div className="item-content-target">
											<div className="item-text">单行（查找目标）</div>
											<div className="item-target">
												<svg t="1578477023027" className="target-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2205" width="20" height="20"><path d="M853.333333 546.133333l-36.1984 0C801.365333 688.469333 688.4864 801.4336 546.133333 817.2032L546.133333 853.333333c0 18.858667-15.274667 34.133333-34.133333 34.133333-18.858667 0-34.133333-15.274667-34.133333-34.133333l0-36.130133C335.5136 801.4336 222.634667 688.469333 206.865067 546.133333L170.666667 546.133333c-18.858667 0-34.133333-15.274667-34.133333-34.133333 0-18.858667 15.274667-34.133333 34.133333-34.133333l36.1984 0C222.634667 335.530667 335.5136 222.549333 477.866667 206.7968L477.866667 170.666667c0-18.858667 15.274667-34.133333 34.133333-34.133333 18.8416 0 34.133333 15.274667 34.133333 34.133333l0 36.130133C688.4864 222.549333 801.365333 335.530667 817.134933 477.866667L853.333333 477.866667c18.8416 0 34.133333 15.274667 34.133333 34.133333C887.466667 530.8416 872.192 546.133333 853.333333 546.133333zM682.666667 477.866667l82.807467 0C750.2336 363.895467 660.138667 273.7664 546.133333 258.542933L546.133333 341.333333c0 18.858667-15.274667 34.133333-34.133333 34.133333-18.858667 0-34.133333-15.291733-34.133333-34.133333l0-82.7904C363.861333 273.7664 273.7664 363.895467 258.525867 477.866667L341.333333 477.866667c18.8416 0 34.133333 15.274667 34.133333 34.133333 0 18.8416-15.274667 34.133333-34.133333 34.133333l-82.807467 0C273.7664 660.104533 363.861333 750.2336 477.866667 765.457067L477.866667 682.666667c0-18.858667 15.274667-34.133333 34.133333-34.133333 18.8416 0 34.133333 15.291733 34.133333 34.133333l0 82.7904C660.138667 750.2336 750.2336 660.104533 765.474133 546.133333L682.666667 546.133333c-18.858667 0-34.133333-15.274667-34.133333-34.133333C648.533333 493.141333 663.808 477.866667 682.666667 477.866667zM512 563.2c-28.279467 0-51.2-22.920533-51.2-51.2 0-28.279467 22.920533-51.2 51.2-51.2 28.279467 0 51.2 22.920533 51.2 51.2C563.2 540.279467 540.279467 563.2 512 563.2z" p-id="2206"></path></svg>
												<div className="target-text">查找目标</div>
											</div>
										</div>
									</div>
								)
							} else if (item.class === 'action-item-ifelse') {
								return (
									<div className="action-item-ifelse" key={index}>
										<div className="if-title">如果条件成立则</div>
										<div class="if-content">
											<div className="guide-msg">此处可插入执行命令</div>
										</div>
										<div className="else-title">否则</div>
										<div className="else-content">
											<div className="guide-msg">此处可插入执行命令</div>
										</div>
									</div>
								)
							} else if (item.class === 'action-item-foreach') {
								return (
									<div className="action-item-foreach" key={index}>
										<div className="foreach-title">循环为真时</div>
										<div className="foreach-content">
											<div className="guide-msg">此处可插入执行命令</div>
										</div>
									</div>
								)
							}
						})
					}
					{/* 普通 */}
					<div className="action-item">
						<div className="item-icon"><Icon type="global" /></div>
						<div className="item-content">
							<div className="item-text">将已打开的浏览器设置为操控对象，复制给hWeb</div>
							<Icon type="caret-right" />
						</div>
					</div>
					{/* 点击目标 */}
					<div className="action-item">
						<div className="item-icon"><Icon type="global" /></div>
						<div className="item-content-target">
							<div className="item-text">单行（查找目标）</div>
							<div className="item-target">
								<svg t="1578477023027" className="target-icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2205" width="20" height="20"><path d="M853.333333 546.133333l-36.1984 0C801.365333 688.469333 688.4864 801.4336 546.133333 817.2032L546.133333 853.333333c0 18.858667-15.274667 34.133333-34.133333 34.133333-18.858667 0-34.133333-15.274667-34.133333-34.133333l0-36.130133C335.5136 801.4336 222.634667 688.469333 206.865067 546.133333L170.666667 546.133333c-18.858667 0-34.133333-15.274667-34.133333-34.133333 0-18.858667 15.274667-34.133333 34.133333-34.133333l36.1984 0C222.634667 335.530667 335.5136 222.549333 477.866667 206.7968L477.866667 170.666667c0-18.858667 15.274667-34.133333 34.133333-34.133333 18.8416 0 34.133333 15.274667 34.133333 34.133333l0 36.130133C688.4864 222.549333 801.365333 335.530667 817.134933 477.866667L853.333333 477.866667c18.8416 0 34.133333 15.274667 34.133333 34.133333C887.466667 530.8416 872.192 546.133333 853.333333 546.133333zM682.666667 477.866667l82.807467 0C750.2336 363.895467 660.138667 273.7664 546.133333 258.542933L546.133333 341.333333c0 18.858667-15.274667 34.133333-34.133333 34.133333-18.858667 0-34.133333-15.291733-34.133333-34.133333l0-82.7904C363.861333 273.7664 273.7664 363.895467 258.525867 477.866667L341.333333 477.866667c18.8416 0 34.133333 15.274667 34.133333 34.133333 0 18.8416-15.274667 34.133333-34.133333 34.133333l-82.807467 0C273.7664 660.104533 363.861333 750.2336 477.866667 765.457067L477.866667 682.666667c0-18.858667 15.274667-34.133333 34.133333-34.133333 18.8416 0 34.133333 15.291733 34.133333 34.133333l0 82.7904C660.138667 750.2336 750.2336 660.104533 765.474133 546.133333L682.666667 546.133333c-18.858667 0-34.133333-15.274667-34.133333-34.133333C648.533333 493.141333 663.808 477.866667 682.666667 477.866667zM512 563.2c-28.279467 0-51.2-22.920533-51.2-51.2 0-28.279467 22.920533-51.2 51.2-51.2 28.279467 0 51.2 22.920533 51.2 51.2C563.2 540.279467 540.279467 563.2 512 563.2z" p-id="2206"></path></svg>
								<div className="target-text">查找目标</div>
							</div>
						</div>
					</div>
					{/* 循环` */}
					<div className="action-item-foreach">
						<div className="foreach-title">循环为真时</div>
						<div className="foreach-content">
							<div className="guide-msg">此处可插入执行命令</div>
						</div>
					</div>
					{/* 条件 */}
					<div className="action-item-ifelse">
						<div className="if-title">如果条件成立则</div>
						<div class="if-content">
							<div className="guide-msg">此处可插入执行命令</div>
						</div>
						<div className="else-title">否则</div>
						<div className="else-content">
							<div className="guide-msg">此处可插入执行命令</div>
						</div>
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