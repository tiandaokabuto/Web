/**
 * UI组件可以使用无状态组件，提高程序性能
 * 1.取消引入{component}
 * 2.把组件写成函数形式
 * 3.直接return JSX
 * 4.把props前面的this去掉
 */
import React from 'react';
import 'antd/dist/antd.css'
import { Input , Button , List } from 'antd'

const TodoListUi = props => {
    return (
        <div style={{ margin: "10px" }}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder="Write Something"
                    style={{ width: "250px", marginRight: "10px" }}
                    onChange={props.changeInput}
                />
                <Button type="primary" onClick={props.clickBtn}>增加</Button>
            </div>
            <div style={{ margin: "10px", width: "300px" }}>
                <List
                    bordered
                    dataSource={props.list}
                    renderItem={
                        (item, index) => {
                            return (
                                <List.Item onClick={
                                    () => {
                                        props.deleteItem(index)
                                    }
                                }>{item}</List.Item>
                            )
                        }
                    }
                />
            </div>
        </div>
    );
}

export default TodoListUi;