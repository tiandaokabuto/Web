const defaultState = {
    focused: false
}

export default (state = defaultState, action) => {
    if (action.type === 'SEARCH_FOCUS') {
        return { focused: true }
    } else if (action.type === 'SEARCH_BLUR') {
        return { focused: false }
    } else {
        return state
    }
}