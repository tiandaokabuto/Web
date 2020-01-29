import headerReducer from '../common/header/store/reducer'
import homeReducer from '../pages/home/store/reducer'
import detailReducer from '../pages/detail/store/reducer'
import loginReducer from '../pages/login/store/reducer'
import { combineReducers } from 'redux-immutable'

export default combineReducers({
    header: headerReducer,
    home: homeReducer,
    detail: detailReducer,
    login: loginReducer
})