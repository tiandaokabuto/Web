import headerReducer from '../common/header/store/reducer'
import homeReducer from '../pages/home/store/reducer'
import { combineReducers } from 'redux-immutable'

export default combineReducers({
    header: headerReducer,
    home: homeReducer
})