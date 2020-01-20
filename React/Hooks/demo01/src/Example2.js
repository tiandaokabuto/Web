import React, { useState , createContext, useContext } from 'react';
// import Counter from './Counter'

const CountContext = createContext()
function Example2(){
    const [ count , setCount ] = useState(0);
    return (
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>{setCount(count+1)}}>click me</button>
            <CountContext.Provider value={count}>
                <Counter/>
            </CountContext.Provider>
        </div>
    )
}

function Counter () {
    const count = useContext(CountContext)
    return (
        <h2>{count}</h2>
    )
}
export default Example2;