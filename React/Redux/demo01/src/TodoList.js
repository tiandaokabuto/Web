import React, { Component } from "react";
import "antd/dist/antd.css";
import { Input, Button, List } from "antd";

import store from "./store/index";
import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './store/actionType'
import TodoListUi from './TodoListUi'

/**
 * 1.引入store
 * 2.使用store的state：this.state = store.getState()
 * 3.修改state要创建action，store.dispatch(action)
 * 4.reducer中，if(action.type === 某个type)确认执行某个type的操作，返回一个newState
 * 5.store订阅state：store.subscribe(某个function)
 * 6.在那个function里面改变组件的state
 */
class TodoList extends Component {
	constructor(props) {
		super(props);
		// 使用redux里的state
		this.state = store.getState()
		this.changeInput = this.changeInput.bind(this)
		this.storeChange = this.storeChange.bind(this)
		this.clickBtn = this.clickBtn.bind(this)
		this.deleteItem = this.deleteItem.bind(this)
		// 订阅redux的状态
		store.subscribe(this.storeChange)
	}
	// 修改组件的state
	storeChange() {
		this.setState(store.getState())
	}
	// 修改redux里面的state需要创建action
	changeInput(e) {
		const action = {
			type: CHANGE_INPUT,
			value: e.target.value
		}
		store.dispatch(action)
	}
	//
	clickBtn() {
		const action = {
			type: ADD_ITEM
		}
		store.dispatch(action)
	}
	//
	deleteItem(index) {
		const action = {
			type: DELETE_ITEM,
			index: index
		}
		store.dispatch(action)
	}
	render() {
		return (
			<TodoListUi
				inputValue = {this.state.inputValue}
				list = {this.state.list}
				changeInput={this.changeInput}
				clickBtn={this.clickBtn}
				deleteItem={this.deleteItem}
			></TodoListUi>
		);
	}
}

export default TodoList;
