import React, { Component } from 'react';
import TodoInput from './TodoInput'
import TodoTitle from './TodoTitle'
import List from './List'


class TodoList extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = store.getState()
    //     // this.inputHandle = this.inputHandle.bind(this)
    //     // this.addHandle = this.addHandle.bind(this)
    //     // this.toggleTitle = this.toggleTitle.bind(this)
    //     // this.storeChange = this.storeChange.bind(this) // 绑定状态
    //     // store.subscribe(this.storeChange) // 订阅
    // }
    // storeChange() { // 监控方法
    //     this.setState(store.getState())
    // }
    render() { 
        return (
            <div>
                <TodoInput></TodoInput>
                <TodoTitle></TodoTitle>
                <List></List>
            </div>
        );
    }
}

export default TodoList;