import { ADD, DROP } from '../action/actionType'
const defaultState = {
    count: 0
}

export default (state = defaultState, action) => {
    if(action.type === ADD) {
        return { count: state.count + 1 }
    } else if(action.type === DROP) {
        return { count: state.count - 1 }
    }
    return state
}