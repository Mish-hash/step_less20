import ACTIONS from '../actions/actionTypes';

const initialState = {
    user: null,
    isLoginFatching: false,
    error: null,
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.LOGIN_REQUEST:
            return {
                ...state,
                isLoginFatching: true,
                error: null,
            };
        case ACTIONS.LOGIN_RESPONSE:
            return {
                ...state,
                isLoginFatching: false,
                user: action.authData.user,
            };
        case ACTIONS.LOGIN_ERROR:
            return {
                ...state,
                isLoginFatching: false,
                authData: action.massage,
            };
        default: return state;
    }
}