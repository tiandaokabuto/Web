/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';

function Example () {
    const [count, setCount] = useState(0)
    // 每次组件渲染或者更新都会触发
    // 相当于 componentDidMonut + componentDidUpdate
    // 可以在函数中return一个函数，并把useEffect第二个参数设置为[]时进行解绑
    // 相当于 componentWillUnmonut
    // []的意思是，当某个状态值变化时进行解绑，如果传空[]表示组件被销毁时解绑
    useEffect(() => {
        console.log(`useEffect => You clicked ${count} times`)
    })
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
        </div>
    )
}

// class Example extends Component {
//     constructor(props) {
//         super(props);
//         this.state = { count:0 }
//     }


//     componentDidMount(){
//         console.log(`ComponentDidMount=>You clicked ${this.state.count} times`)
//     }
//     componentDidUpdate(){
//         console.log(`componentDidUpdate=>You clicked ${this.state.count} times`)
//     }

//     render() { 
//         return (
//             <div>
//                 <p>You clicked {this.state.count} times</p>
//                 <button onClick={this.addCount.bind(this)}>Chlick me</button>
//             </div>
//         );
//     }
//     addCount(){
//         this.setState({count:this.state.count+1})
//     }
// }

export default Example;