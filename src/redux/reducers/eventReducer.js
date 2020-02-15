import ACTIONS from '../actions/actionTypes';

const initialState = {
    name: '',
    place: '',
};

export default function (state = initialState, action) {
    switch (action.type) {
        case ACTIONS.RESET: 
            return initialState;
        case ACTIONS.UPDATE_EVENT:
            return {
                ...state,
                [action.fieldName]: action.value
            } 
        default: return state;
    }
}
//Do not forget to register new reducer in index.js file

