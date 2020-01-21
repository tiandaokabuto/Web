import React from 'react';
import { TOGGLE_COMPLETE } from './redux/action/type'
import { connect } from 'react-redux'


const List = props => {
    const showList = title => {
        let renderNode
        if (title === 0) {
            renderNode = (
                <ul>
                    {
                        props.alls.map(item => {
                            return <li onClick={props.completeHandle.bind(this, item.id)} key={item.id}>{item.value}</li>
                        })
                    }
                </ul>
            )
        } else if (title === 1) {
            renderNode = (
                <ul>
                    {
                        props.alls.map(item => {
                            if(item.complete === false) {
                                return <li onClick={props.completeHandle.bind(this, item.id)} key={item.id}>{item.value}</li>
                            }
                        })
                    }
                </ul>
            )
        } else {
            renderNode = (
                <ul>
                    {
                        props.alls.map(item => {
                            if(item.complete) {
                                return <li onClick={props.completeHandle.bind(this, item.id)} key={item.id}>{item.value}</li>
                            }
                        })
                    }
                </ul>
            )
        }
        return renderNode
    }
    return (
        <div>
            {showList(props.title)}
        </div>
    )
}

const mapDispatch = dispatch => {
    return {
        completeHandle(id) {
            dispatch({
                type: TOGGLE_COMPLETE,
                id
            })
        }
    }
}

const mapState = state => {
    return {
        alls: state.alls,
        title: state.title
    }
}

export default connect(mapState, mapDispatch)(List);