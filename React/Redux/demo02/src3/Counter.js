import React from 'react';
import { add, drop } from './store/action/action'
import { connect } from 'react-redux';

class Counter extends React.Component {

    addCount = () => {
        this.props.add()
    }

    dropCount = () => {
        this.props.drop()
    }

    render() {
        return (
        <div>
            <h2>Counter</h2>
            <div>
            <button onClick={this.dropCount}>-</button>
            <div>{this.props.count}</div>
            <button onClick={this.addCount}>+</button>
            </div>
        </div>
        )
    }
}

function mapState(state) {
    return {
        count: state.count
    }
}

const mapDispatch = {
    add,
    drop
}


export default connect(mapState, mapDispatch)(Counter);
