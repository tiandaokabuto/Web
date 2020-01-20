import React from 'react'
import ReactDom from 'react-dom'
import { Provider } from 'react-redux'
import store from './store'

import Counter from './Counter'

const App = () => {
    return (
        <Provider store={store}>
            <Counter></Counter>
        </Provider>
    )
}

ReactDom.render(App(), document.getElementById('root'))