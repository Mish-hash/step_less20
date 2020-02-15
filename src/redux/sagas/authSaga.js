import {put} from 'redux-saga/effects';
import * as api from '../../api/apiService';
import ACTIONS from '../actions/actionTypes'


export function* loginSaga(action) {
    yield put({type: ACTIONS.LOGIN_REQUEST});
    const authData = action.data;
    try {
        const {data} = yield api.loginApi(authData);
        yield put({type: ACTIONS.LOGIN_RESPONSE, authData: data});
    } catch (e) {
        yield put({type: ACTIONS.LOGIN_ERROR, massage: 'Something went wrong! Try again later.'});
    }
}
