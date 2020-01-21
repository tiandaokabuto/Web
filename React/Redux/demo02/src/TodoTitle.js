import React from 'react';
import { TOGGLE_TITLE } from './redux/action/type'
import { connect } from 'react-redux'

const style = {
    'padding': '0 20px 0 20px'
}
const TodoTitle = props => {
    return (
        <div>
            <span style={style} onClick={() => { props.toggleTitle(0)}}>全部</span>
            <span style={style} onClick={() => { props.toggleTitle(1)}}>完成</span>
            <span style={style} onClick={() => { props.toggleTitle(2)}}>未完成</span>
        </div>
    )
}

const mapDispatch = dispatch => {
    return {
        toggleTitle(title) {
            dispatch({
                type: TOGGLE_TITLE,
                title
            })
        }
    }
}

export default connect(null, mapDispatch)(TodoTitle);