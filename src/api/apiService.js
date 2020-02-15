import axios from 'axios';
import {apiUrl} from './baseUrl';

export const getAllUsersApi = () => axios.get(apiUrl + '/secret/allUsers');

export const getUserByIdApi = (id) => axios.get(apiUrl + '/secret/userById/' + id);

export const createUserApi = (data) => axios.post(apiUrl + '/secret/signup', data);

export const loginApi = (data) => axios.post(apiUrl + '/login', data);

//in this place we make request to some api
//it need only for worker saga
