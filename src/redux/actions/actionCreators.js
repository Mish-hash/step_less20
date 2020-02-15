import actions from './actionTypes';

export const getAllUsersAction = () => ({
    type: actions.GET_ALL_USERS,
});

export const getUserByIdAction = (id) => ({
    type: actions.GET_USER_BY_ID,
    id: id,
});

export const createUserAction = (userBody) => ({
    type: actions.CREATE_USER,
    userBody: userBody,
});

export const updateEventAction = (fieldName, value) => ({
    type: actions.UPDATE_EVENT,
    fieldName,
    value,
});

export const resetAction = () => ({
    type: actions.RESET,
});

export const loginAction = (data) => ({
    type: actions.LOGIN,
    data,
});

export const getCurrentUser = () => ({
    type: actions.GET_CURRENT_USER,
});

//we have to use it in COMPONENTS