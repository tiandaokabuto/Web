import { SEARCH_FOCUS, SEARCH_BLUR, CHANGE_LIST, MOUSE_ENTER, MOUSE_LEAVE, CHANGE_PAGE } from './actionType'
import { fromJS } from 'immutable'

// immutable
const defaultState = fromJS({
    focused: false,
    mouseIn: false,
    list: [], // 因为defaultState是immutable对象，所以list也是immutable对象
    page: 1,
    totalPage: 1
})

export default (state = defaultState, action) => {
    if (action.type === SEARCH_FOCUS) {
        return state.set('focused', true)
    } else if (action.type === SEARCH_BLUR) {
        return state.set('focused', false)
    } else if (action.type === CHANGE_LIST) {
        return state.set('list', action.data).set('totalPage', action.totalPage) // action.data要为immutable对象
    } else if (action.type === MOUSE_ENTER) {
        return state.set('mouseIn', true)
    } else if (action.type === MOUSE_LEAVE) {
        return state.set('mouseIn', false)
    } else if (action.type === CHANGE_PAGE) {
        let page = state.get('page')
        let totalPage = state.get('totalPage')
        if (page < totalPage) {
            return state.set('page', page + 1)
        } else {
            return state.set('page', 1)
        }
    } else {
        return state
    }
}