import { ADD, DROP } from './actionType'

export function add() {
    return {
        type: ADD
    }
}

export function drop() {
    return {
        type: DROP
    }
}