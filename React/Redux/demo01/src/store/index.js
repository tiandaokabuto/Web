import { createStore, applyMiddleware, compose } from 'redux'
import reducer from './reducer'
import thunk from 'redux-thunk'
/**
 * store必须唯一
 */
const composeEnhancers =   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}):compose

const enhancer = composeEnhancers(applyMiddleware(thunk))

const store = createStore(reducer, enhancer)
/**
 * 没有配置Redux Dev Tools的写法
 */
// const store = createStore(reducer, applyMiddleware(thunk))
export default store