/* eslint-disable react/jsx-no-comment-textnodes */
import React, { Component } from 'react'
import { connect } from 'react-redux'
import store from './store/index'


class TodoList extends Component {
    
    constructor(props) {
        super(props);
        this.state = store.getState()
        // this.inputChange = this.inputChange.bind(this)
    }
    // inputChange(e) {
    //     console.log(e.target.value)
    // }
    render() {
        let {inputValue, inputChange, submitValue, list} = this.props
        return (
            <div>
                <div>
                    <input value={inputValue} onChange={inputChange} />
                    <button onClick={submitValue}>提交</button>
                </div>
                <ul>
                    {
                        list.map((item, index) => {
                            return <li key={index}>{item}</li>
                        })
                    }
                    <li>kabuto</li>
                </ul>
            </div>
        );
    }
}
/**
 * 映射关系
 * 
 */
const stateToProps = state => {
    return {
        inputValue: state.inputValue,
        list: state.list
    }
}
const dispatchToProps = dispatch => {
    return {
        inputChange(e) {
            let action = {
                type: 'change_input',
                value: e.target.value
            }
            dispatch(action)
        },
        submitValue() {
            let action = {
                type: 'submit_value'
            }
            dispatch(action)
        }
    }
}

export default connect(stateToProps, dispatchToProps)(TodoList);