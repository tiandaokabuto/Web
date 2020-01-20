import React, { Component } from 'react';

class TodoInput extends Component {
    render() { 
        return (
            <div>
                <input type="text" value={this.props.inputValue} onChange={this.props.inputHandle}/>
                <button onClick={this.props.addHandle}>添加</button>
            </div>
        );
    }
}

export default TodoInput;