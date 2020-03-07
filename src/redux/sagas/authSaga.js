import {put} from 'redux-saga/effects';
import * as api from '../../api/apiService';
import ACTIONS from '../actions/actionTypes';
import {history} from '../../utils/history';


export function* loginSaga(action) {
    yield put({type: ACTIONS.LOGIN_REQUEST});
    const authData = action.data;
    try {
        const {data} = yield api.loginApi(authData);
        const accessToken = data.accessToken;
        localStorage.setItem("token", accessToken);
        yield put({type: ACTIONS.LOGIN_RESPONSE, authData: data});
        history.push('/users');
    } catch (e) {
        yield put({type: ACTIONS.LOGIN_ERROR, massage: 'Something went wrong! Try again later.'});
    }
}

export function* getCurrentUsrSaga() {
    yield put({type: ACTIONS.LOGIN_REQUEST});
    try {
        const {data} = yield api.getCurrentUsrApi();
        yield put({type: ACTIONS.LOGIN_RESPONSE, authData: {user: data}});
    } catch (e) {
        yield put({type: ACTIONS.LOGIN_ERROR, massage: 'Something went wrong! Try again later.'});
    }
}

export function* fetchPostsSaga({itemsPerPage, page}) {
    try {
        const {data: {posts, totalCount}} = yield api.fetchPostsApi(itemsPerPage, page);
        yield put({type: ACTIONS.POSTS_RESPONSE, posts:[], totalCount: 0});
    } catch (e) {

    }
}
