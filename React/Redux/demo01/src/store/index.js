import { createStore } from 'redux'
import reducer from './reducer'
/**
 * store必须唯一
 */
const store = createStore(reducer)
export default store