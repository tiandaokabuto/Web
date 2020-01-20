import React from 'react';

const TodoListUi = props => {
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
    )
}
