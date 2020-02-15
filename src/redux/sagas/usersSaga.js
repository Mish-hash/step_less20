import {put, select} from 'redux-saga/effects';
import * as api from '../../api/apiService';
import ACTIONS from '../actions/actionTypes'


//WORKERS
export function* getAllUsersSaga() {
    yield put({type: ACTIONS.GET_ALL_USERS_REQUEST});
    try {
        const {data} = yield api.getAllUsersApi();
        yield put({type: ACTIONS.GET_ALL_USERS_RESPONSE, users: data.users});
        //in this place if you need you can make redirect using history
    } catch (e) {
        //in this place you can show toastert to notify user about trouble
        yield put({type: ACTIONS.GET_ALL_USERS_ERROR, massage: 'Something went wrong! Try again later.'});
    }
}

export function* getUserByIdSaga(action) {
    yield put({type: ACTIONS.GET_USER_BY_ID_REQUEST});
    try {
        const {data} = yield api.getUserByIdApi(action.id);
        yield put({type: ACTIONS.GET_USER_BY_ID_RESPONSE, user: data});
    } catch (e) {
        yield put({type: ACTIONS.GET_USER_BY_ID_ERROR, massage: 'Something went wrong! Bla, BLA, bla'});
    }
}

export function* createUserSaga(action) {
    yield put({type: ACTIONS.CREATE_USER_REQUEST});
    try {
        const {data} = yield api.createUserApi(action.userBody);
        const {userReducer} = yield select();
        const users = [...userReducer.users, data.user];
        //users.push(data.user);
        yield put({type: ACTIONS.CREATE_USER_RESPONSE, users});

    } catch (e) {
        yield put({type: ACTIONS.CREATE_USER_ERROR, massage: 'Something went wrong! Bla, BLA, bla'});
    }
}
// in this place we will call api, put actions into reducer, make redirects, show toasts and notifictions

