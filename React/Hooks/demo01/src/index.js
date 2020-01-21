import React, { useState, useMemo, useCallback, memo } from 'react'
import ReactDom from 'react-dom'
/**
 * demo1
 */
function Parent() {
    let [num, setNum] = useState(0)
    let [text, setText] = useState(1)

    return (
        <div>
            <Child1 num={num} handleClick={setNum}></Child1>
            <Child2 text={text} handleClick={setText}></Child2>
        </div>
    )
}

const Child1 = ({ num, handleClick }) => {
    console.log(num)
    return (
        <div onClick={() => { handleClick(num + 1) }}>child1</div>
    )
}

const Child2 = ({ text, handleClick}) => {
    console.log(text)
    return (
        <div>
            child2
            <Grandson text={text} handleClick={handleClick}></Grandson>
        </div>
    )
}

const Grandson = ({ text, handleClick }) => {
    console.log(text)
    return (
        <div onClick={() => { handleClick(text + 1) }}>grandson</div>
    )
}

/**
 * demo1
 */
function Counter() {
    let [number, setNumber] = useState(0)
    const alertNumber = () => {
        setTimeout(() => {
            alert(number)
        }, 2000);
    }
    return (
        <div>
            <p>{number}</p>
            <button onClick={() => { setNumber(number + 1) }}>+</button>
            <button onClick={alertNumber}>alert</button>
        </div>
    )
}
/**
 * demo2
 */
function Counter2() {
    let [number, setNumber] = useState(0)
    const lazy = () => {
        setTimeout(() => {
            // setNumber(number + 1) // number是点击触发时的number
            setNumber(number => number + 1) // 这样每次执行时都会去获取一遍 state，而不是使用点击触发时的那个 state
        }, 2000);
    }
    return (
        <div>
            <p>{number}</p>
            <button onClick={() => { setNumber(number + 1) }}>+</button>
            <button onClick={lazy}>lazy</button>
        </div>
    )
}
/**
 * demo3
 */
function Counter3(){
    const [counter,setCounter] = useState({name:'计数器',number:0});
    console.log('render Counter')
    // 如果你修改状态的时候，传的状态值没有变化，则不重新渲染
    return (
        <>
            <p>{counter.name}:{counter.number}</p>
            <button onClick={()=>setCounter({...counter,number:counter.number+1})}>+</button>
            <button onClick={()=>setCounter(counter)}>++</button>
        </>
    )
}
/**
 * demo4
 */
function SubCounter({onClick,data}){
    console.log('SubCounter render');
    return (
        <button onClick={onClick}>{data.number}</button>
    )
}
SubCounter = memo(SubCounter);
let oldData,oldAddClick;
function Counter6(){
    console.log('Counter render');
    const [name,setName]= useState('计数器');
    const [number,setNumber] = useState(0);

    const data = useMemo(()=>({number}),[number]);
    console.log('data===oldData ',data===oldData);
    oldData = data;

    const addClick = useCallback(()=>{
        setNumber(number+1);
    },[number]);
    console.log('addClick===oldAddClick ',addClick===oldAddClick);
    oldAddClick=addClick;
    return (
        <>
            <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
            <SubCounter data={data} onClick={addClick}/>
        </>
    )
}

ReactDom.render(<Counter6/>, document.getElementById('root'))