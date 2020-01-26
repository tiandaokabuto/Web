import headerReducer from '../common/header/store/reducer'
import { combineReducers } from 'redux'

export default combineReducers({
    header: headerReducer
})