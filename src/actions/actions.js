import types from '../reducers/actionTypes'

export function setTodos(todos){
    return {
        type: types.SET_TODOS,
        todos
    }
}

export function setModalMessage(message){
    return {
        type: types.SET_MODAL_MESSAGE,
        message
    }
}