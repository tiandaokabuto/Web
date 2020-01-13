import { CHANGE_INPUT, ADD_ITEM, DELETE_ITEM} from './actionType'
/**
 * Reducer用来管理store
 * 只能接收state，不能改变state
 */
const defaultState = {
	inputValue : '',
    list:[
        '早上4点起床，锻炼身体',
        '中午下班游泳一小时'
    ]
}
/**
 * state: 仓库的原始状态
 * action: action新传递的状态
 */
export default (state = defaultState, action) => {
    if(action.type === CHANGE_INPUT) {
        // 深度拷贝state再使用，不能直接使用
        let newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    } else if(action.type === ADD_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue)
        newState.inputValue = ''
        return newState
    } else if(action.type === DELETE_ITEM) {
        let newState = JSON.parse(JSON.stringify(state))
        newState.list.splice(action.index, 1)
        return newState
    }
	return state
}