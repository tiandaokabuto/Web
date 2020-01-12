import React, { Component } from "react";

import { Tree, Icon } from "antd";

// import {menu} from  '../../../../data/nav_manu_data'
import "./menu_list.less";

const { TreeNode } = Tree;
class MenuList extends Component {
	constructor(props) {
		super(props);
		this.state = {
			data: [
				{
					id: 1,
					name: '单行',
					class: 'action-item',
					parentId: 0,
					isValid: true,
					canAddChild: true,
					parent: null,
					children: []
				},
				{
					id: 2,
					name: '单行（查找目标）',
					class: 'action-item-target',
					children: []
				},
				{
					id: 3,
					name: '条件',
					class: 'action-item-ifelse',
					children: []
				},
				{
					id: 4,
					name: '遍历数组',
					children: [],
					class: 'action-item-foreach'
				}
			],
			pageX: 0,
			pageY: 0
		};	
	}
	render() {
		return (
			<div className="menu-list-wrapper">
				<Tree>
					{this.showTree(this.state.data)}
				</Tree>
			</div>
		);
	}
	dragstartHandle (item, e) { // 有参数的情况下，事件对象在后
		console.log('开始拖拽')
		e.dataTransfer.setData('item', JSON.stringify(item))
	}
	showTree (arr) {
		let html = arr.map(item => {
			return <TreeNode title={
				<span
					// {item.children.length > 0 ? 'dragable' : ''}
					// draggable={item.children.length > 0 ? false : true}
					draggable
					onDragStart={this.dragstartHandle.bind(this, item)}
				>{item.name}</span>
			} key={item.id}>{
				item.children.length > 0 ? this.showTree(item.children) : null
			}</TreeNode>
		})
		return html
	}
}

export default MenuList;
