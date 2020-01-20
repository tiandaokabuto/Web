import React, { Component } from 'react';
import store from './redux/inedx'
import { ADD_TODO, TOGGLE_COMPLETE, TOGGLE_TITLE, CHANGE_INPUT } from './redux/action/type'
import TodoInput from './TodoInput'
import TodoTitle from './TodoTitle'
import List from './List'

let defaultId = 4

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState()
        this.inputHandle = this.inputHandle.bind(this)
        this.addHandle = this.addHandle.bind(this)
        this.toggleTitle = this.toggleTitle.bind(this)
        this.storeChange = this.storeChange.bind(this) // 绑定状态
        store.subscribe(this.storeChange) // 订阅
    }
    storeChange() { // 监控方法
        this.setState(store.getState())
    }
    render() { 
        return (
            <div>
                <TodoInput inputHandle={this.inputHandle} inputValue={this.state.inputValue} addHandle={this.addHandle}></TodoInput>
                <TodoTitle toggleTitle={this.toggleTitle}></TodoTitle>
                <List title={this.state.title} alls={this.state.alls} completeHandle={this.completeHandle}></List>
            </div>
        );
    }
    

    completeHandle(id) {
        console.log(id)
        store.dispatch({
            type: TOGGLE_COMPLETE,
            id
        })
    }
    toggleTitle(title) {
        console.log(title)
        store.dispatch({
            type: TOGGLE_TITLE,
            title
        })
    }
    addHandle() {
        store.dispatch({
            type: ADD_TODO,
            id: defaultId
        })
        ++defaultId
    }
    inputHandle(e) {
        store.dispatch({
            type: CHANGE_INPUT,
            value: e.target.value
        })
    }
}

export default TodoList;