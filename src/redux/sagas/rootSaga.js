import {takeLatest} from 'redux-saga/effects';
import ACTIONS from '../actions/actionTypes';
import * as userSagas from './usersSaga';
import * as authSagas from './authSaga';

// WATHCERS
function* rootSaga() {
    yield takeLatest(ACTIONS.GET_ALL_USERS, userSagas.getAllUsersSaga);
    yield takeLatest(ACTIONS.GET_USER_BY_ID, userSagas.getUserByIdSaga); 
    yield takeLatest(ACTIONS.CREATE_USER, userSagas.createUserSaga);

    yield takeLatest(ACTIONS.LOGIN, authSagas.loginSaga);
    yield takeLatest(ACTIONS.GET_CURRENT_USER, authSagas.getCurrentUsrSaga);

    yield takeLatest(ACTIONS.FETCH_POSTS, authSagas.fetchPostsSaga);
}

export default rootSaga;
