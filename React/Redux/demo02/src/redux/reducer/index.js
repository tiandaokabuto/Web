import { ADD_TODO, TOGGLE_COMPLETE, TOGGLE_TITLE, CHANGE_INPUT } from '../action/type'

const defaultState = {
    inputValue: '',
    alls: [{
        id: 1,
        value: 'one',
        complete: true
    }, {
        id: 2,
        value: 'two',
        complete: false
    }, {
        id: 3,
        value: 'three',
        complete: true
    }],
    title: 0
}


export default (state = defaultState, action) => {
    if (action.type === ADD_TODO) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.alls.push({
            value: newState.inputValue,
            complete: true,
            id: action.id
        })
        newState.inputValue = ''
        return newState
    } else if (action.type === TOGGLE_COMPLETE) {
        let newState = JSON.parse(JSON.stringify(state))
        let index = newState.alls.findIndex(item => item.id === action.id)
        newState.alls[index].complete = !newState.alls[index].complete
        return newState
    } else if (action.type === TOGGLE_TITLE) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.title = action.title
        return newState
    } else if (action.type === CHANGE_INPUT) {
        console.log(action.value)
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else {
        return state
    }
}