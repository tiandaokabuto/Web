import React, { Component } from 'react';
import { CHANGE_INPUT, ADD_TODO } from './redux/action/type'
import { connect } from 'react-redux'

let defaultId = 4
const TodoInput = props => {
    console.log(this)
    return (
        <div>
            <input type="text" value={props.inputValue} onChange={props.inputHandle}/>
            <button onClick={props.addHandle}>添加</button>
        </div>
    );
}

const mapState = state => {
    return {
        inputValue: state.inputValue
    }
}

const mapDispatch = dispatch => {
    return {
        inputHandle(e) {
            // console.log(this)
            dispatch({
                type: CHANGE_INPUT,
                value: e.target.value
            })
        },
        addHandle() {
            dispatch({
                type: ADD_TODO,
                id: defaultId
            })
            ++defaultId
        }
    }
}

export default connect(mapState, mapDispatch)(TodoInput);