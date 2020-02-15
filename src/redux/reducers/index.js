import { combineReducers } from 'redux';
import usersReducer from './usersReducer';
import eventReducer from './eventReducer';
import authReducer from './authReducer';


const appReducer = combineReducers({
    usersReducer,//in this place you should add each new reducer
    eventReducer,
    authReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

export default rootReducer;