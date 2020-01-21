import React from 'react';
import ReactDom from 'react-dom'
import TodoList from './TodoList'
import { Provider } from 'react-redux'
import store from './redux/inedx'

ReactDom.render(<Provider store={store}><TodoList/></Provider>, document.getElementById('root'))
