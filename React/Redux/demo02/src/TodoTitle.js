import React, { Component } from 'react';

const style = {
    'padding': '0 20px 0 20px'
}
class TodoTitle extends Component {
    render() { 
        return (
            <div>
                <span style={style} onClick={this.handleClick.bind(this, 0)}>全部</span>
                <span style={style} onClick={this.handleClick.bind(this, 1)}>完成</span>
                <span style={style} onClick={this.handleClick.bind(this, 2)}>未完成</span>
            </div>
        );
    }
    handleClick(index) {
        this.props.toggleTitle(index)
    }
}

export default TodoTitle;