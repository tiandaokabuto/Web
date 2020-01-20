import React, { Component } from 'react';
import Example from './Example4'
// import ShowArea from './showArea'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { }
    }
    render() { 
        return (
            <div>
                <Example></Example>
            </div>
        );
    }
}

export default App;