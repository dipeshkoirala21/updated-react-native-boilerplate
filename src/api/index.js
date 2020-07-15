import Axios from 'axios';

const baseURL = 'http://localhost:5050/api/';

export const api = Axios.create({
  baseURL,
  timeout: 5000,
});

export const loginPost = (data) => api.post('user/login', data);
export const logoutGet = () => api.get('user/logout');
export const registerPost = (data) => api.post('user/register', data);
export const forgotPasswordPost = (data) =>
  api.post('user/forgotpassword', data);
