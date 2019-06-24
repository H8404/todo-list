import types from './actionTypes';

const defaultState = {
    authenticated: true,
    modalMessage: '',
    todos: []
};

export default (state = defaultState, action) => {
    switch (action.type) {
        case types.SET_TODOS:
            return { ...state, todos: action.todos };
        case types.SET_MODAL_MESSAGE:
            return { ...state, modalMessage: action.message };
        default:
            return state;
    }
}