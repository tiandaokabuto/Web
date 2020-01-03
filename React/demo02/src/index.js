/**
 * 任何可变数据应当只有一个相对应的唯一数据源
 * 通常，state 都是首先添加到需要渲染数据的组件中去
 * 然后，如果其他组件也需要这个 state，那么你可以将它提升至这些组件的最近共同父组件中
 * 你应当依靠自上而下的数据流，而不是尝试在不同组件间同步 state
 */
import React, { Component } from 'react';
import ReactDOM from 'react-dom'

const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

// function BoilingVerdict(props) {
//     if (props.celsius >= 100) {
//         return <p>The water would boil.</p>;
//     }
//     return <p>The water would not boil.</p>;
// }

class Calculator extends Component {
    constructor(props) {
        super(props);
        this.state = {
            temperature: '',
            scale: 'c'
        }
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    }
    render() {
        // f框输入则需要转换为Celsius
        const celsius = this.state.scale === 'f' ? tryConvert(this.state.temperature, toCelsius) : this.state.temperature;
        // c框输入则需要转换为Fahrenheit
        const fahrenheit = this.state.scale === 'c' ? tryConvert(this.state.temperature, toFahrenheit) : this.state.temperature;
        return (
            <fieldset>
                <TemperatureInput onTemperatureChange={this.handleCelsiusChange} temperature={celsius} scale="c"></TemperatureInput>
                <TemperatureInput onTemperatureChange={this.handleFahrenheitChange} temperature={fahrenheit} scale="f"></TemperatureInput>
            </fieldset>
        );
    }
    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }
    
    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }
}

class TemperatureInput extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this)
    }
    render() { 
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[this.props.scale]}:</legend>
                <input
                    value={this.props.temperature}
                    onChange={this.handleChange} />
            </fieldset>
        );
    }
    // 输入时传入输入的值，触发父组件的方法更新state
    handleChange (e) {
        this.props.onTemperatureChange(e.target.value)
    }
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input); // 调用convert方法转换
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

export default TemperatureInput;

ReactDOM.render(<Calculator />, document.getElementById("root"))